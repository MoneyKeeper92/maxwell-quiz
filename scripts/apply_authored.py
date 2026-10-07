#!/usr/bin/env python3
"""Write the explanations authored in scripts/authored/ into the data modules.

    npm run apply-authored             # dry run
    npm run apply-authored -- --apply

These are the questions with IA- ids: written for this app, never in the question
database, so there is nothing to sync them from. Each record is checked against the
module's own key before anything is written.
"""
from __future__ import annotations

import argparse
import importlib
import pkgutil
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))
import qc  # noqa: E402
from authored import mx  # noqa: E402
from import_quiz import ts_template  # noqa: E402
from sync_explanations import BLOCK, explanation_span  # noqa: E402

DATA = HERE.parent / "src" / "data"


def records() -> list[mx.E]:
    import authored
    out = []
    for m in pkgutil.iter_modules(authored.__path__):
        if m.name in ("mx",):
            continue
        mod = importlib.import_module(f"authored.{m.name}")
        out += list(getattr(mod, "RECORDS", []))
    return out


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--show", help="print the rendered HTML for one id")
    a = ap.parse_args()

    recs = records()
    by_id = {r.id: r for r in recs}
    if len(by_id) != len(recs):
        sys.exit("duplicate ids in authored records")
    if a.show:
        print(mx.render(by_id[a.show])); return

    done, bad, seen = 0, [], set()
    for f in sorted(DATA.glob("intermediate/*.ts")):
        meta, qs = qc.parse_module(str(f))
        src = f.read_text(encoding="utf-8")
        starts = list(BLOCK.finditer(src))
        edits = []
        for n, q in enumerate(qs):
            r = by_id.get(q["id"])
            if not r:
                continue
            seen.add(q["id"])
            probs = mx.problems(r, q["correctIndex"], q["choices"][q["correctIndex"]])
            if probs:
                bad.append((q["id"], probs)); continue
            seg_start = starts[n].end()
            seg_end = starts[n + 1].start() if n + 1 < len(starts) else len(src)
            sp = explanation_span(src[seg_start:seg_end])
            if not sp:
                bad.append((q["id"], ["no explanation literal"])); continue
            edits.append((seg_start + sp[0], seg_start + sp[1], ts_template(mx.render(r))))
        if a.apply and edits:
            for s, e, rep in sorted(edits, key=lambda t: -t[0]):
                src = src[:s] + rep + src[e:]
            f.write_text(src, encoding="utf-8")
        done += len(edits)

    missing = sorted(set(by_id) - seen)
    print(f"{done} written" if a.apply else f"{done} would be written (dry run)")
    for i, p in bad:
        print(f"  PROBLEM {i}: {'; '.join(p)}")
    if missing:
        print(f"  authored but no such question: {missing}")
    sys.exit(1 if bad or missing else 0)


if __name__ == "__main__":
    main()
