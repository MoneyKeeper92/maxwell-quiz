#!/usr/bin/env python3
"""Quality control sweep over every question in the app.

Three kinds of check:

  STRUCTURE  broken data: missing choices, duplicates, index out of range
  FORMATTING the house MCQ HTML standard, plus stray table pipes in stems
  AGREEMENT  the explanation's own stated answer vs the keyed choice

The third is the one that finds real mistakes. It does not solve the
accounting; it checks the question against itself. When an explanation says
"Answer: $14,000" and the keyed choice is $12,000, one of them is wrong.

Usage:
    npm run qc            # report
    npm run qc -- --json  # machine-readable, for CI
"""

from __future__ import annotations

import argparse
import glob
import html as H
import json
import os
import re
import sys
from collections import Counter, defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "src", "data")
SKIP = {"types.ts", "catalog.ts", "registry.ts"}
LETTERS = "ABCD"

EMOJI = re.compile(
    "[\U0001F000-\U0001FAFF\U00002600-\U000026FF\U00002700-\U000027BF\U0000FE0F]"
)


def strip_tags(s: str) -> str:
    return H.unescape(re.sub(r"<[^>]+>", " ", s or ""))


def norm(s: str) -> str:
    """Loose comparison: case, punctuation and whitespace insensitive."""
    return re.sub(r"[^a-z0-9]+", " ", strip_tags(s).lower()).strip()


def money(s: str) -> list[str]:
    """Numeric tokens, normalised so $1,500.00 and 1500 compare equal."""
    out = []
    for m in re.findall(r"-?\$?\(?\d[\d,]*\.?\d*\)?%?", strip_tags(s)):
        t = m.replace("$", "").replace(",", "").replace("(", "-").replace(")", "")
        t = t.rstrip("%")
        try:
            out.append(f"{float(t):g}")
        except ValueError:
            pass
    return out


# ------------------------------------------------------------------ parsing --
def read_template(chunk: str, field: str, start: int = 0) -> tuple[str | None, int]:
    r"""Read a `field: \`...\`` template literal.

    Scanning for the closing backtick beats matching on what follows it: the
    data modules were written by two different generations of tooling and end
    fields as "`,\n    }," or "`,},". Template contents never hold a raw
    backtick, the importer escapes them.
    """
    m = re.compile(rf"\b{field}:\s*`").search(chunk, start)
    if not m:
        return None, start
    i = m.end()
    out = []
    while i < len(chunk):
        c = chunk[i]
        if c == "\\" and i + 1 < len(chunk):
            out.append(chunk[i + 1])
            i += 2
            continue
        if c == "`":
            return "".join(out), i + 1
        out.append(c)
        i += 1
    return None, i


def read_choices(chunk: str) -> list[str]:
    if "choices: [" not in chunk:
        return []
    block = chunk.split("choices: [", 1)[1]
    end = block.find("],")
    block = block[: end if end != -1 else len(block)]
    out, i = [], 0
    while True:
        j = block.find("`", i)
        if j == -1:
            return out
        k, buf = j + 1, []
        while k < len(block):
            if block[k] == "\\" and k + 1 < len(block):
                buf.append(block[k + 1]); k += 2; continue
            if block[k] == "`":
                break
            buf.append(block[k]); k += 1
        out.append("".join(buf))
        i = k + 1


def parse_module(path: str) -> tuple[dict, list[dict]]:
    src = open(path, encoding="utf-8").read()
    meta = {
        "key": (re.search(r'^\s*key:\s*"([^"]+)"', src, re.M) or [None, "?"])[1],
        "title": (re.search(r'^\s*title:\s*"((?:[^"\\]|\\.)*)"', src, re.M) or [None, "?"])[1],
        "course": (re.search(r'^\s*course:\s*"([^"]+)"', src, re.M) or [None, "cpa"])[1],
        "file": os.path.relpath(path, ROOT),
    }
    questions = []
    for chunk in re.split(r"\n    \{\n", src)[1:]:
        qid = re.search(r'id:\s*"([^"]*)"', chunk)
        idx = re.search(r"correctIndex:\s*(\d)", chunk)
        prompt, _ = read_template(chunk, "prompt")
        phtml, _ = read_template(chunk, "promptHtml")
        expl, _ = read_template(chunk, "explanation")
        questions.append(
            {
                "id": qid.group(1) if qid else None,
                "prompt": prompt or "",
                "promptHtml": phtml,
                "choices": read_choices(chunk),
                "correctIndex": int(idx.group(1)) if idx else None,
                "explanation": expl,
            }
        )
    return meta, questions


# --------------------------------------------------------------- the checks --
def check_structure(q: dict) -> list[tuple[str, str]]:
    out = []
    if not q["id"]:
        out.append(("STRUCTURE", "missing id"))
    if not q["prompt"].strip():
        out.append(("STRUCTURE", "empty prompt"))
    if len(q["choices"]) != 4:
        out.append(("STRUCTURE", f"{len(q['choices'])} choices, expected 4"))
    if any(not c.strip() for c in q["choices"]):
        out.append(("STRUCTURE", "a choice is blank"))
    dupes = [c for c, n in Counter(norm(c) for c in q["choices"]).items() if n > 1 and c]
    if dupes:
        out.append(("STRUCTURE", f"duplicate choices: {dupes[0][:50]!r}"))
    if q["correctIndex"] is None or not 0 <= q["correctIndex"] <= 3:
        out.append(("STRUCTURE", f"correctIndex {q['correctIndex']} out of range"))
    if not q["explanation"] or len(strip_tags(q["explanation"]).strip()) < 40:
        out.append(("STRUCTURE", "missing or trivial explanation"))
    return out


def check_formatting(q: dict) -> list[tuple[str, str]]:
    out = []
    e = q["explanation"] or ""
    if "—" in e or "–" in e or "&mdash;" in e or "&ndash;" in e:
        out.append(("FORMATTING", "em or en dash in explanation"))
    bad = [c for c in EMOJI.findall(e) if c not in "✓✗"]
    if bad:
        out.append(("FORMATTING", f"emoji in explanation: {bad[0]!r}"))
    if "gradient" in e:
        out.append(("FORMATTING", "gradient in explanation"))
    if re.search(r"<th[^>]*>\s*(?:Debit|Credit)\s*</th>", e, re.I):
        out.append(("FORMATTING", "journal entry table in explanation"))
    if re.search(r"<(?:div|p|td)[^>]*>\s*(?:<span[^>]*>)?[✓✗](?:</span>)?\s*</(?:div|p|td)>", e):
        out.append(("FORMATTING", "check or cross mark alone in its own block"))

    # Stems
    if re.search(r"^\s*\|", q["prompt"], re.M):
        out.append(("FORMATTING", "stray table pipes in stem"))
    ph = q["promptHtml"]
    if ph:
        for tb in re.findall(r"<table.*?</table>", ph, re.S):
            rows = re.findall(r"<tr>.*?</tr>", tb, re.S)
            if rows and max(len(re.findall(r"<t[dh][ >]", r)) for r in rows) < 2:
                out.append(("FORMATTING", "single-column table in stem"))
        if re.search(r"<ul[^>]*>\s*</ul>", ph):
            out.append(("FORMATTING", "empty list in stem"))
        if norm(ph) != norm(q["prompt"]):
            only_html = set(norm(ph).split()) - set(norm(q["prompt"]).split())
            if only_html:
                out.append(("FORMATTING", "stem html and plain text differ in content"))
    return out


CORRECT_CALLOUT = re.compile(
    r"Correct Answer</h3>.*?<p[^>]*>.*?✓</span>\s*<span[^>]*>(.*?)</span>", re.S
)
SAYS_CHOICE = re.compile(
    r"(?:Choice|Option)\s*(?:</strong>\s*)?([A-D1-4])\s*(?:</strong>\s*)?"
    r"(?:\([^)]*\)\s*)?(?:is|was)\s+(?:the\s+)?correct",
    re.I,
)
# "$270,000 - Correct" / "$270,000 is correct". The lookbehind keeps this from
# firing on the word "Incorrect", which is how option lists label the others.
DECLARED_CORRECT = re.compile(
    r"(\$?\(?-?[\d][\d,]*(?:\.\d+)?\)?%?)\s*(?:[-:\u2013]|\bis\b)\s*(?<!in)correct\b",
    re.I,
)
# "Answer: $270,000" only when what follows is a bare value, not a list entry.
SAYS_ANSWER = re.compile(
    r"\bAnswer\s*(?:is)?\s*[:=]\s*(\$?\(?-?[\d][\d,]*(?:\.\d+)?\)?%?)\s*(?:[.<\n]|$)",
    re.I,
)


def check_agreement(q: dict) -> list[tuple[str, str]]:
    """Does the explanation agree with the keyed choice?"""
    out = []
    e = q["explanation"] or ""
    ci = q["correctIndex"]
    if ci is None or len(q["choices"]) != 4:
        return out
    keyed = q["choices"][ci]

    # 1. The generated "Correct Answer" callout should restate the keyed choice.
    m = CORRECT_CALLOUT.search(e)
    if m and norm(m.group(1)) and norm(keyed):
        if norm(m.group(1)) != norm(keyed):
            out.append(
                ("AGREEMENT", f"callout says {strip_tags(m.group(1)).strip()[:55]!r}, "
                              f"keyed choice is {strip_tags(keyed).strip()[:55]!r}")
            )

    # 2. "Choice B is correct" should point at the keyed index.
    for letter in SAYS_CHOICE.findall(e):
        said = LETTERS.index(letter.upper()) if letter.upper() in LETTERS else int(letter) - 1
        if said != ci:
            out.append(
                ("AGREEMENT", f"explanation says choice {letter} is correct, "
                              f"key says {LETTERS[ci]}")
            )
            break

    # 3. A value the explanation declares correct should be the keyed value.
    keyed_nums = set(money(keyed))
    if keyed_nums:
        text = strip_tags(e)
        other_nums = {n for i, c in enumerate(q["choices"]) if i != ci for n in money(c)}
        stated: set[str] = set()
        for m in DECLARED_CORRECT.finditer(text):
            stated |= set(money(m.group(1)))
        sm = SAYS_ANSWER.search(text)
        if sm:
            stated |= set(money(sm.group(1)))
        # Only report when the explanation points at a different choice's value:
        # a stray intermediate figure from the working is not evidence of an error.
        wrong = (stated - keyed_nums) & other_nums
        if stated and not (stated & keyed_nums) and wrong:
            out.append(
                ("AGREEMENT", f"explanation calls {sorted(wrong)[:3]} correct, "
                              f"but the keyed choice is {sorted(keyed_nums)[:3]}")
            )
    return out


# ------------------------------------------------------------------- report --
def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--json", action="store_true")
    ap.add_argument("--course", choices=["cpa", "intermediate"])
    ap.add_argument("--only", help="limit to one quiz slug")
    a = ap.parse_args()

    files = sorted(glob.glob(os.path.join(DATA, "*.ts"))) + sorted(
        glob.glob(os.path.join(DATA, "intermediate", "*.ts"))
    )
    findings: list[dict] = []
    totals = Counter()
    per_quiz = []

    for path in files:
        if os.path.basename(path) in SKIP:
            continue
        meta, questions = parse_module(path)
        if a.course and meta["course"] != a.course:
            continue
        if a.only and meta["key"] != a.only:
            continue

        ids = Counter(q["id"] for q in questions)
        prompts = Counter(norm(q["prompt"]) for q in questions)
        quiz_issues = 0
        for n, q in enumerate(questions, 1):
            issues = check_structure(q) + check_formatting(q) + check_agreement(q)
            if ids[q["id"]] > 1:
                issues.append(("STRUCTURE", f"duplicate id {q['id']}"))
            if prompts[norm(q["prompt"])] > 1:
                issues.append(("STRUCTURE", "duplicate prompt within this quiz"))
            for kind, msg in issues:
                totals[kind] += 1
                quiz_issues += 1
                findings.append(
                    {
                        "course": meta["course"], "quiz": meta["key"],
                        "question": n, "id": q["id"], "kind": kind, "message": msg,
                    }
                )
        per_quiz.append((meta, len(questions), quiz_issues))
        totals["questions"] += len(questions)

    if a.json:
        print(json.dumps({"findings": findings, "totals": dict(totals)}, indent=2))
        sys.exit(1 if findings else 0)

    print(f"Checked {totals['questions']} questions across {len(per_quiz)} quizzes\n")
    if not findings:
        print("No issues found.")
        sys.exit(0)

    by_kind = defaultdict(list)
    for f in findings:
        by_kind[f["kind"]].append(f)
    for kind in ("STRUCTURE", "AGREEMENT", "FORMATTING"):
        items = by_kind.get(kind, [])
        if not items:
            continue
        print(f"{'=' * 72}\n{kind}  ({len(items)})\n{'=' * 72}")
        for f in items:
            where = f"{f['course']}/{f['quiz']} q{f['question']} (id {f['id']})"
            print(f"  {where}\n      {f['message']}")
        print()

    print(f"{'=' * 72}")
    for kind in ("STRUCTURE", "AGREEMENT", "FORMATTING"):
        print(f"  {kind:<12} {totals[kind]}")
    sys.exit(1)


if __name__ == "__main__":
    main()
