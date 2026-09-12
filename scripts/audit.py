#!/usr/bin/env python3
"""Advisory audit: statistical tells and content smells across every question.

qc.py is the pass/fail gate for things that are definitely broken. This is the
softer pass: signals that are not errors on their own but are worth a human
look, and that are good at ranking which questions to re-read first.

    npm run audit
    npm run audit -- --course intermediate
"""

from __future__ import annotations

import argparse
import glob
import os
import re
import sys
from collections import Counter, defaultdict

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from qc import LETTERS, money, norm, parse_module, strip_tags  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "src", "data")
SKIP = {"types.ts", "catalog.ts", "registry.ts"}


def load(course: str | None = None):
    files = sorted(glob.glob(os.path.join(DATA, "*.ts"))) + sorted(
        glob.glob(os.path.join(DATA, "intermediate", "*.ts"))
    )
    for path in files:
        if os.path.basename(path) in SKIP:
            continue
        meta, qs = parse_module(path)
        if course and meta["course"] != course:
            continue
        yield meta, qs


def key_tokens(choice: str) -> set[str]:
    """What a correct explanation ought to mention: the figures, or the words."""
    nums = set(money(choice))
    if nums:
        return nums
    words = [w for w in re.findall(r"[a-z]{5,}", norm(choice)) if w not in STOP]
    return set(words[:6])


STOP = {
    "which", "there", "these", "those", "would", "should", "their", "other",
    "using", "under", "value", "amount", "asset", "assets", "method", "income",
    "based", "because", "between", "during", "entity", "equal", "however",
}


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--course", choices=["cpa", "intermediate"])
    a = ap.parse_args()

    modules = list(load(a.course))
    total = sum(len(qs) for _, qs in modules)
    print(f"Auditing {total} questions across {len(modules)} quizzes\n")

    # ---- 1. answer position balance -------------------------------------
    print("=" * 72)
    print("ANSWER POSITION BALANCE")
    print("=" * 72)
    print("  A key that clusters on one letter is guessable. Expect roughly 25% each.\n")
    overall = Counter()
    skewed = []
    for meta, qs in modules:
        c = Counter(q["correctIndex"] for q in qs if q["correctIndex"] is not None)
        overall += c
        n = sum(c.values()) or 1
        top_letter, top_n = max(c.items(), key=lambda kv: kv[1], default=(0, 0))
        absent = [LETTERS[i] for i in range(4) if c[i] == 0]
        if top_n / n >= 0.5 or (n >= 8 and absent):
            skewed.append((meta, [c[i] for i in range(4)], LETTERS[top_letter], top_n, n, absent))
    for meta, dist, letter, top_n, n, absent in skewed:
        note = f"{top_n}/{n} are {letter}" if top_n / n >= 0.5 else ""
        if absent:
            note += (", " if note else "") + f"no correct answers at {'/'.join(absent)}"
        print(f"  {meta['course']}/{meta['key']:<28} A-D {dist}  {note}")
    if not skewed:
        print("  Nothing notable.")
    gn = sum(overall.values())
    print(f"\n  Across everything: " + ", ".join(
        f"{LETTERS[i]} {overall[i]} ({overall[i]*100//gn}%)" for i in range(4)))

    # ---- 2. longest-choice tell ------------------------------------------
    print("\n" + "=" * 72)
    print("LONGEST-CHOICE TELL")
    print("=" * 72)
    print("  If the longest option is usually right, a student can pass without knowing.\n")
    def is_numeric_set(q) -> bool:
        """$12,000 is longer than $900 for reasons that teach nothing."""
        return all(re.fullmatch(r"[^a-zA-Z]*", strip_tags(c)) for c in q["choices"])

    any_tell = False
    for meta, qs in modules:
        hits = tot = 0
        for q in qs:
            if len(q["choices"]) != 4 or q["correctIndex"] is None or is_numeric_set(q):
                continue
            lens = [len(strip_tags(c)) for c in q["choices"]]
            tot += 1
            if lens[q["correctIndex"]] == max(lens):
                hits += 1
        if tot >= 6 and hits / tot >= 0.6:
            any_tell = True
            print(f"  {meta['course']}/{meta['key']:<28} {hits}/{tot} "
                  f"({hits*100//tot}%) of prose questions have the longest option correct")
    if not any_tell:
        print("  Nothing notable.")

    # ---- 3. duplicates across quizzes ------------------------------------
    print("\n" + "=" * 72)
    print("DUPLICATE QUESTIONS ACROSS QUIZZES")
    print("=" * 72)
    seen = defaultdict(list)
    for meta, qs in modules:
        for n, q in enumerate(qs, 1):
            k = norm(q["prompt"])[:180]
            if k:
                seen[k].append(f"{meta['course']}/{meta['key']} q{n}")
    dups = {k: v for k, v in seen.items() if len(v) > 1}
    for k, v in list(dups.items())[:15]:
        print(f"  {' | '.join(v)}")
        print(f"      {k[:110]}")
    if not dups:
        print("  None.")

    # ---- 4. explanation never mentions the keyed answer -------------------
    print("\n" + "=" * 72)
    print("EXPLANATION NEVER MENTIONS THE KEYED ANSWER")
    print("=" * 72)
    print("  The strongest signal that a key and its explanation disagree.\n")
    misses = []
    for meta, qs in modules:
        for n, q in enumerate(qs, 1):
            if q["correctIndex"] is None or not q["explanation"] or len(q["choices"]) != 4:
                continue
            keyed = q["choices"][q["correctIndex"]]
            toks = key_tokens(keyed)
            if not toks:
                continue
            body = norm(q["explanation"]) + " " + " ".join(money(strip_tags(q["explanation"])))
            if not any(t in body for t in toks):
                misses.append((meta, n, q, keyed))
    for meta, n, q, keyed in misses:
        print(f"  {meta['course']}/{meta['key']} q{n} (id {q['id']})")
        print(f"      keyed: {strip_tags(keyed).strip()[:90]}")
    if not misses:
        print("  None.")

    # ---- 5. stems that never ask anything ---------------------------------
    print("\n" + "=" * 72)
    print("STEM WITHOUT A QUESTION")
    print("=" * 72)
    print("  Sentence-completion stems are fine. This looks for stems that appear cut off.\n")
    noq = []
    for meta, qs in modules:
        for n, q in enumerate(qs, 1):
            p = strip_tags(q["prompt"]).strip()
            if not p:
                continue
            truncated = p.endswith(("...", "…")) or re.search(r"\b\w+-$", p)
            too_short = len(p) < 35 and "?" not in p
            if truncated or too_short:
                noq.append((meta, n, q, p))
    for meta, n, q, p in noq:
        print(f"  {meta['course']}/{meta['key']} q{n} (id {q['id']}): {p[:100]}")
    if not noq:
        print("  None.")

    # ---- 6. all/none of the above ----------------------------------------
    print("\n" + "=" * 72)
    print("ALL OR NONE OF THE ABOVE")
    print("=" * 72)
    aota = []
    for meta, qs in modules:
        for n, q in enumerate(qs, 1):
            for i, c in enumerate(q["choices"]):
                if re.search(r"\b(all|none|both)\s+of\s+(the\s+)?(above|these)\b", c, re.I):
                    aota.append((meta, n, q, LETTERS[i], i == q["correctIndex"]))
    for meta, n, q, letter, is_key in aota:
        print(f"  {meta['course']}/{meta['key']} q{n} (id {q['id']}) option {letter}"
              f"{' (this is the keyed answer)' if is_key else ''}")
    if not aota:
        print("  None.")

    print("\n" + "=" * 72)
    print("Advisory only. Nothing here is automatically wrong.")


if __name__ == "__main__":
    main()
