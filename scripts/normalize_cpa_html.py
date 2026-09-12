#!/usr/bin/env python3
"""Bring pre-existing HTML explanations in line with the house MCQ standard.

The CPA explanations were authored before the standard and carry gradients,
emoji, em dashes and journal-entry tables. This rewrites the presentational
violations in place. It reports by default and only writes with --apply.

    npm run normalize-cpa              # report what would change
    npm run normalize-cpa -- --apply   # write it

Journal-entry removal deletes content, so it is opt-in separately with
--drop-journal-entries.
"""

from __future__ import annotations

import argparse
import glob
import os
import re
import sys
from collections import Counter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "src", "data")
SKIP = {"types.ts", "catalog.ts", "registry.ts"}

# Straight from the standard's gradient replacement table.
GRADIENT_MAP = [
    (r"linear-gradient\(\s*135deg\s*,\s*#01506e\s*,\s*#207bb5\s*\)", "#01506e"),
    (r"linear-gradient\(\s*to right\s*,\s*#207bb5\s*,\s*#01506e\s*\)", "#01506e"),
    (r"linear-gradient\(\s*to right\s*,\s*#0099d4\s*,\s*#207bb5\s*\)", "#207bb5"),
    (r"linear-gradient\(\s*to right\s*,\s*#0099d4\s*,\s*#68d3a7\s*\)", "#01506e"),
    (r"linear-gradient\(\s*135deg\s*,\s*#f9f9f9\s*,\s*#e6f7ff\s*\)", "#f5f9fc"),
    (r"linear-gradient\(\s*to right\s*,\s*#f0f8ff\s*,\s*#e6f7ff\s*\)", "#f0f8ff"),
]
# Anything else: fall back to the gradient's first colour stop.
ANY_GRADIENT = re.compile(r"(?:linear|radial)-gradient\(([^()]*(?:\([^()]*\)[^()]*)*)\)")
EMOJI = re.compile(
    "[\U0001F000-\U0001FAFF\U00002600-\U000026FF\U00002700-\U000027BF\U0000FE0F]"
)


def flatten_gradients(html: str, stats: Counter) -> str:
    for pat, flat in GRADIENT_MAP:
        html, n = re.subn(rf"background(-image)?\s*:\s*{pat}", f"background-color:{flat}", html)
        stats["gradient"] += n
        html, n = re.subn(pat, flat, html)
        stats["gradient"] += n

    def fallback(m: re.Match) -> str:
        colours = re.findall(r"#[0-9a-fA-F]{3,8}|rgba?\([^)]*\)", m.group(1))
        stats["gradient"] += 1
        return colours[0] if colours else "#01506e"

    html = ANY_GRADIENT.sub(fallback, html)
    return re.sub(r"background(-image)?\s*:\s*(#[0-9a-fA-F]{3,8})", r"background-color:\2", html)


def strip_emoji(html: str, stats: Counter) -> str:
    html = html.replace("✅", "✓").replace("❌", "✗").replace("✔", "✓").replace("✖", "✗")
    html = html.replace("✓", "\x01").replace("✗", "\x02")
    html, n = EMOJI.subn("", html)
    stats["emoji"] += n
    html = html.replace("\x01", "✓").replace("\x02", "✗")
    return re.sub(r"(<[^>]*>)\s{2,}", r"\1 ", html)


def fix_dashes(html: str, stats: Counter) -> str:
    for pat, repl in ((r"\s*&mdash;\s*", ": "), (r"\s*&ndash;\s*", ", "),
                      (r"\s*—\s*", ": "), (r"(\d)\s*–\s*(\d)", r"\1 to \2")):
        html, n = re.subn(pat, repl, html)
        stats["dash"] += n
    html, n = re.subn(r"\s*–\s*", ", ", html)
    stats["dash"] += n
    return html


def drop_width_limits(html: str, stats: Counter) -> str:
    html, n = re.subn(r"\s*max-width\s*:\s*[^;\"']+;?", "", html)
    stats["max-width"] += n
    html, n = re.subn(r"\s*margin-(?:left|right)\s*:\s*auto\s*;?", "", html)
    stats["margin-auto"] += n
    return html


def drop_journal_entries(html: str, stats: Counter) -> str:
    def is_je(table: str) -> bool:
        heads = [h.lower() for h in re.findall(r"<th[^>]*>(.*?)</th>", table, re.S)]
        heads = [re.sub(r"<[^>]+>", "", h).strip() for h in heads]
        return "debit" in heads and "credit" in heads

    out, i = [], 0
    for m in re.finditer(r"<table.*?</table>", html, re.S):
        if is_je(m.group(0)):
            out.append(html[i:m.start()])
            stats["journal-entry"] += 1
            i = m.end()
    out.append(html[i:])
    return "".join(out)


def normalize(html: str, stats: Counter, journal: bool) -> str:
    html = flatten_gradients(html, stats)
    html = strip_emoji(html, stats)
    html = fix_dashes(html, stats)
    html = drop_width_limits(html, stats)
    if journal:
        html = drop_journal_entries(html, stats)
    return html


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--drop-journal-entries", action="store_true")
    a = ap.parse_args()

    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    grand = Counter()
    touched = 0
    for path in sorted(glob.glob(os.path.join(DATA, "*.ts"))):
        if os.path.basename(path) in SKIP:
            continue
        src = open(path, encoding="utf-8").read()
        if 'course: "cpa"' not in src:
            continue
        stats = Counter()
        # Only rewrite inside explanation template literals.
        def repl(m: re.Match) -> str:
            return "explanation: `" + normalize(m.group(1), stats, a.drop_journal_entries) + "`"
        new = re.sub(r"explanation:\s*`(.*?)`(?=,)", repl, src, flags=re.S)
        if new != src:
            touched += 1
            print(f"  {os.path.relpath(path, ROOT)}: " + ", ".join(
                f"{k} {v}" for k, v in sorted(stats.items())))
            grand += stats
            if a.apply:
                open(path, "w", encoding="utf-8").write(new)
    print()
    print(f"{'APPLIED' if a.apply else 'DRY RUN'}: {touched} files, " + ", ".join(
        f"{k} {v}" for k, v in sorted(grand.items())) or "nothing to do")
    if not a.apply:
        print("Re-run with --apply to write. Add --drop-journal-entries to also remove those tables.")


if __name__ == "__main__":
    main()
