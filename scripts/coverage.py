#!/usr/bin/env python3
"""Check the question bank against a syllabus of topics.

Answers "what do we not teach?" rather than "what is broken?". A topic counts
as covered only when a question is *about* it: the match has to land in the
stem or the answer choices. A term that appears only inside an explanation is
incidental, and is reported separately so a passing mention is not mistaken
for coverage.

The topic list is drawn from a standard Intermediate syllabus plus the topics
students most often name as hard.

    npm run coverage
    npm run coverage -- --course intermediate
"""

from __future__ import annotations

import argparse
import glob
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from qc import parse_module, strip_tags  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "src", "data")
SKIP = {"types.ts", "catalog.ts", "registry.ts"}

# (label, pattern, course the topic belongs to)
SYLLABUS = [
    ("Time value of money",        r"present value|future value|annuity|discount rate|compound", "intermediate"),
    ("Cash and bank recs",         r"bank reconciliation|petty cash|cash equivalent|outstanding check|deposit in transit", "intermediate"),
    ("Receivables and allowance",  r"allowance for (doubtful|credit)|bad debt|uncollectible|factor(ed|ing)|note receivable", "intermediate"),
    ("Inventory costing",          r"\bFIFO\b|\bLIFO\b|weighted average|lower of cost", "intermediate"),
    ("Dollar-value LIFO",          r"dollar[- ]value LIFO|price index.*inventory|LIFO (pool|layer)", "intermediate"),
    ("PP&E and depreciation",      r"depreciat|salvage value|declining balance|units of production|capitaliz", "intermediate"),
    ("Impairment",                 r"impair", "intermediate"),
    ("Intangibles and goodwill",   r"intangible|goodwill|patent|trademark|copyright|amortiz.*(patent|intangible)", "intermediate"),
    ("Revenue recognition",        r"performance obligation|transaction price|percentage[- ]of[- ]completion|transfer of control", "intermediate"),
    ("Bonds and effective interest", r"bond|effective interest|premium|discount on bond", "intermediate"),
    ("Leases",                     r"lease", "intermediate"),
    ("Sale and leaseback",         r"sale[- ]and[- ]leaseback|sale[- ]leaseback|seller[- ]lessee", "intermediate"),
    ("Deferred taxes",             r"deferred tax|temporary difference|permanent difference|valuation allowance", "intermediate"),
    ("Pensions and OPEB",          r"pension|postretirement|projected benefit|plan asset|service cost|OPEB", "intermediate"),
    ("Stock-based compensation",   r"stock[- ]based compensation|share[- ]based|stock option|restricted stock|grant[- ]date fair value", "intermediate"),
    ("Stockholders' equity",       r"treasury stock|paid[- ]in capital|stock dividend|stock split|par value", "intermediate"),
    ("Earnings per share",         r"earnings per share|\bEPS\b|weighted average (number of )?shares|diluted", "intermediate"),
    ("Convertible debt and warrants", r"convertible (bond|debt|note|preferred)|detachable warrant|\bwarrant\b", "intermediate"),
    ("Investments",                r"available[- ]for[- ]sale|held[- ]to[- ]maturity|trading securit|equity method|significant influence", "intermediate"),
    ("Derivatives and hedging",    r"\bderivative(s)?\b|hedg(e|ing|ed)|forward contract|interest rate swap", "intermediate"),
    ("Comprehensive income",       r"comprehensive income|\bOCI\b|accumulated other comprehensive", "intermediate"),
    ("Contingencies and warranties", r"contingen|warrant(y|ies)|probable|reasonably possible", "intermediate"),
    ("Subsequent events",          r"subsequent event|authorized for issuance|statements?,? which will be issued|financial statements (were|are|had been|have not been|were not|will be) issued|issued its .{0,40}financial statements", "intermediate"),
    ("Accounting changes and errors", r"change in accounting|prior period adjustment|retrospective|change in estimate|correction of an error", "intermediate"),
    ("Statement of cash flows",    r"cash flow|operating activities|investing activities|financing activities|indirect method", "intermediate"),
    ("Adjusting entries",          r"adjusting (journal )?entry|accrued|prepaid|unearned|accrual[- ]basis|cash[- ]basis", "intermediate"),
    ("Conceptual framework",       r"conceptual framework|faithful representation|relevance|qualitative characteristic|recognition", "intermediate"),
    # CPA-side topics candidates report seeing often
    ("Government and NFP",         r"governmental|\bGASB\b|not[- ]for[- ]profit|nonprofit|fund balance|net position", "cpa"),
    ("Consolidations",             r"consolidat|noncontrolling interest|business combination|intercompany", "cpa"),
]


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--course", choices=["cpa", "intermediate"])
    a = ap.parse_args()

    questions = []
    for path in sorted(glob.glob(os.path.join(DATA, "*.ts"))) + sorted(
        glob.glob(os.path.join(DATA, "intermediate", "*.ts"))
    ):
        if os.path.basename(path) in SKIP:
            continue
        meta, qs = parse_module(path)
        if a.course and meta["course"] != a.course:
            continue
        for q in qs:
            questions.append(
                {
                    "course": meta["course"],
                    "quiz": meta["key"],
                    "id": q["id"],
                    # What the question asks, not what the explanation mentions.
                    "asked": strip_tags(q["prompt"] + " " + " ".join(q["choices"])),
                    "explained": strip_tags(q["explanation"] or ""),
                }
            )

    print(f"{len(questions)} questions against {len(SYLLABUS)} syllabus topics\n")
    gaps, thin, ok = [], [], []
    for label, pattern, course in SYLLABUS:
        if a.course and course != a.course:
            continue
        rx = re.compile(pattern, re.I)
        asked = [q for q in questions if rx.search(q["asked"])]
        only_expl = [
            q for q in questions if q not in asked and rx.search(q["explained"])
        ]
        row = (label, len(asked), len(only_expl), asked)
        if not asked:
            gaps.append(row)
        elif len(asked) <= 2:
            thin.append(row)
        else:
            ok.append(row)

    def show(rows, heading, note):
        if not rows:
            return
        print("=" * 72)
        print(f"{heading}  ({len(rows)})")
        print("=" * 72)
        print(f"  {note}\n")
        for label, n, mentions, asked in rows:
            where = ""
            if asked:
                quizzes = sorted({q["quiz"] for q in asked})
                where = "  in " + ", ".join(quizzes[:4]) + ("…" if len(quizzes) > 4 else "")
            extra = f"  ({mentions} passing mention{'s' if mentions != 1 else ''} in explanations)" if mentions else ""
            print(f"  {n:>3} questions  {label}{where}{extra}")
        print()

    show(gaps, "NOT TESTED", "No question asks about these. Students meet them elsewhere or not at all.")
    show(thin, "THIN", "One or two questions. Enough to mention a topic, not to practise it.")
    show(ok, "COVERED", "Three or more questions ask about the topic directly.")


if __name__ == "__main__":
    main()
