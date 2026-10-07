#!/usr/bin/env python3
"""Pull current answer explanations from a question-database backup into the app.

    npm run sync-explanations -- "<backup>.xlsx"            # dry run, prints a report
    npm run sync-explanations -- "<backup>.xlsx" --apply    # writes the modules

The database is where Kyle edits explanations, so the app follows it. Each app
question is matched to its database row by the text of its stem, with the id
used only to break ties between duplicate stems. Matching on the id alone is
unsafe: the quizzes were built from several sheets, some keyed on QuestionCode
and some on the database ID, and a short number collides with an unrelated
question.

A question is skipped, and reported, rather than synced when:
  * the choices are not the same four in the same order. The new explanations
    open "B. ... is correct", so a reordered choice list would point the letter
    at the wrong answer.
  * the explanation's banner letter disagrees with the app's key.
  * the explanation carries markup the page should not inject.

Questions with an IA- id were written for this app and are not in the database.

Writes only src/data/**/*.ts, one `explanation:` literal per question.
"""

from __future__ import annotations

import argparse
import collections
import html as H
import json
import os
import re
import sys
from pathlib import Path

try:
    import openpyxl
except ImportError:
    sys.exit("openpyxl is required:  python3 -m pip install openpyxl")

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))
import qc  # noqa: E402  (module parser and the house checks)
from import_quiz import html_to_text, ts_template  # noqa: E402

ROOT = HERE.parent
DATA = ROOT / "src" / "data"
LETTERS = "ABCD"

# Uploads in the database are relative to the Django site, which is a different
# host from this app, so a relative src would 404 here.
MEDIA_HOST = "https://coursemaxwellcpareview.com"
ALLOWED_IFRAME_HOSTS = ("cloudflarestream.com", "coursemaxwellcpareview.com")


# Quizzes whose questions were written for this app and are not in the database.
# Their ids are plain numbers, so the IA- prefix cannot identify them.
AUTHORED_QUIZZES = {"most-common-far", "most-common-aud", "most-common-reg"}


def norm(s: str | None) -> str:
    s = H.unescape(re.sub(r"<[^>]+>", " ", s or ""))
    return re.sub(r"[^a-z0-9]+", " ", s.lower()).strip()


# ----------------------------------------------------------------- wording --
# The Intermediate course is for undergraduates, so an explanation there should
# not talk about "the exam". Kyle asked for that on 2026-09-30; the database
# rewrites still carry seven such phrases, so they are edited here. Each rule is
# exact and counted: a rule that matches nothing is an error, not a no-op.
EXAM_EDITS: dict[str, list[tuple[str, str]]] = {
    "5243": [(r"On the exam, any choice", "Any choice")],
    "5208": [(r"On the exam, read the", "Read the")],
    "4938": [(r"On the exam, read the", "Read the")],
    "4940": [(r", and the check is quick on the exam\.", ", and the check is quick.")],
    "8472": [(r"Exam habit: sort each", "Sort each")],
    "4968": [(r"Know the contrast for the exam: ", "Know the contrast: ")],
    "8412": [(r"Exam framing: ", "")],
}


def prepare(expl: str, course: str, qid: str) -> tuple[str, list[str], list[str]]:
    """Make a database explanation safe and correct for this page.

    Returns (html, notes, blockers). Any blocker means the question is skipped.
    """
    notes: list[str] = []
    blockers: list[str] = []
    out = expl

    # Videos: absolute media host, and let the player shrink on a phone. The
    # database writes a fixed 700x700 element.
    def fix_video(m: re.Match) -> str:
        tag = m.group(0)
        src = re.search(r'\ssrc="([^"]+)"', tag)
        if src and src.group(1).startswith("/"):
            tag = tag.replace(src.group(0), f' src="{MEDIA_HOST}{src.group(1)}"')
            notes.append("video url made absolute")
        tag = re.sub(r'\s(?:width|height)="[^"]*"', "", tag)
        if "style=" not in tag:
            tag = tag.replace("<video", '<video style="max-width:100%; height:auto"', 1)
        return tag

    out = re.sub(r"<video\b[^>]*>", fix_video, out)

    # Iframes: only the video host Kyle already uses.
    for src in re.findall(r"<iframe\b[^>]*\ssrc=\"([^\"]+)\"", out):
        host = re.sub(r"^https?://([^/]+).*", r"\1", src)
        if not host.endswith(ALLOWED_IFRAME_HOSTS):
            blockers.append(f"iframe from {host}")

    if re.search(r"<\s*(script|object|embed|form|link|style|base|meta)\b", out, re.I):
        blockers.append("active or document-level tag")
    if re.search(r"\son[a-z]+\s*=", out, re.I):
        blockers.append("inline event handler")
    if re.search(r"javascript:", out, re.I):
        blockers.append("javascript: url")

    # No dashes, no emoji: the house rules, which the database copy sometimes breaks.
    if "—" in out or "–" in out or "&mdash;" in out or "&ndash;" in out:
        blockers.append("em or en dash")
    if [c for c in qc.EMOJI.findall(out) if c not in "✓✗"]:
        blockers.append("emoji")

    if course == "intermediate":
        for pattern, repl in EXAM_EDITS.get(qid, []):
            out, n = re.subn(pattern, repl, out)
            if n != 1:
                blockers.append(f"exam edit matched {n}x: {pattern[:40]!r}")
            else:
                notes.append("removed exam framing")
        text = H.unescape(re.sub(r"<[^>]+>", " ", out))
        left = re.findall(r"[^.]{0,40}\bexams?\b[^.]{0,30}", text, re.I)
        if left:
            blockers.append(f"still mentions the exam: {left[0].strip()!r}")

    return out, notes, blockers


def banner_letter(expl: str) -> str | None:
    """The letter the explanation opens with: 'A. $3,400 is correct.'"""
    text = re.sub(r"\s+", " ", H.unescape(re.sub(r"<[^>]+>", " ", expl))).strip()
    m = re.match(r"([A-D])\.\s", text)
    return m.group(1) if m else None


# ---------------------------------------------------------------- matching --
class Db:
    def __init__(self, path: Path):
        wb = openpyxl.load_workbook(path, read_only=True)
        rows = list(wb.active.iter_rows(values_only=True))
        hdr = rows[0]
        self.rows = [dict(zip(hdr, r)) for r in rows[1:]]
        self.by_text = collections.defaultdict(list)
        self.by_choices = collections.defaultdict(list)
        self.by_code = {str(d["QuestionCode"]): d for d in self.rows}
        self.by_id = {str(d["ID"]): d for d in self.rows}
        for d in self.rows:
            self.by_text[norm(d["QuestionText"])].append(d)
            self.by_choices[self.choice_key(d)].append(d)

    @staticmethod
    def choice_key(d: dict) -> tuple:
        return tuple(sorted(norm(d.get(f"Choice{i}")) for i in (1, 2, 3, 4)))

    def find(self, q: dict) -> tuple[dict | None, str]:
        stem = norm(q["promptHtml"] or q["prompt"])
        cands = self.by_text.get(stem, [])
        how = "stem"
        if len(cands) > 1:
            pick = [d for d in cands if q["id"] in (str(d["ID"]), str(d["QuestionCode"]))]
            if len(pick) != 1:
                return None, "ambiguous: duplicate stems and the id does not decide"
            return pick[0], "stem+id"
        if cands:
            return cands[0], how
        # The stem differs only by how a table was flattened. Same four choices
        # AND the id naming this very row is enough to be sure.
        key = tuple(sorted(norm(c) for c in q["choices"]))
        for d in self.by_choices.get(key, []):
            if q["id"] in (str(d["ID"]), str(d["QuestionCode"])):
                return d, "choices+id"
        return None, "no row with this stem"


# ------------------------------------------------------------- module edits --
BLOCK = re.compile(r"\n    \{\n")
EXPL = re.compile(r"\bexplanation:\s*`")


def explanation_span(seg: str) -> tuple[int, int] | None:
    """(start, end) of the template literal's contents within a question block."""
    m = EXPL.search(seg)
    if not m:
        return None
    _, after = qc.read_template(seg, "explanation")
    return m.end(), after - 1


def choices_span(seg: str) -> tuple[int, int] | None:
    i = seg.find("choices: [")
    if i == -1:
        return None
    j = seg.find("],", i)
    return (i + len("choices: ["), j) if j != -1 else None


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("backup")
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--only", help="limit to one quiz slug")
    ap.add_argument("--accept-wording", default="",
                    help="comma-separated question ids whose choice wording the "
                         "database changed and which should be refreshed too")
    ap.add_argument("--report", help="write the per-question decisions as JSON")
    a = ap.parse_args()

    accept = {x.strip() for x in a.accept_wording.split(",") if x.strip()}
    db = Db(Path(a.backup).expanduser())
    files = sorted(DATA.glob("*.ts")) + sorted((DATA / "intermediate").glob("*.ts"))

    decisions: list[dict] = []
    tally = collections.Counter()
    per_quiz: dict[str, collections.Counter] = collections.defaultdict(collections.Counter)

    for f in files:
        if f.name in qc.SKIP:
            continue
        meta, qs = qc.parse_module(str(f))
        if a.only and meta["key"] != a.only:
            continue
        src = f.read_text(encoding="utf-8")
        starts = [m for m in BLOCK.finditer(src)]
        edits: list[tuple[int, int, str]] = []  # absolute (start, end, replacement)

        for n, q in enumerate(qs):
            d, how = db.find(q)
            rec = {"quiz": meta["key"], "id": q["id"], "n": n + 1}
            status = None

            if q["id"].startswith("IA-") or meta["key"] in AUTHORED_QUIZZES:
                status, why = "authored", "written for this app, not in the database"
            elif d is None:
                status, why = "no_match", how
            else:
                rec["db_id"] = str(d["ID"])
                raw = d["Explanation"] if isinstance(d["Explanation"], str) else ""
                if norm(raw) in ("", "none", "nan"):
                    status, why = "db_blank", "the database explanation is empty"
                else:
                    new, notes, blockers = prepare(raw, meta["course"], q["id"])
                    db_choices = [str(d[f"Choice{i}"]) for i in (1, 2, 3, 4)]
                    same_choices = [norm(c) for c in q["choices"]] == [norm(c) for c in db_choices]
                    refresh = False
                    if not same_choices:
                        if q["id"] in accept and norm(q["promptHtml"] or q["prompt"]) == norm(d["QuestionText"]):
                            refresh = True
                        else:
                            blockers.append("choices differ from the database")
                    dbkey = LETTERS[int(str(d["answer"]).replace("Choice", "")) - 1] if str(d["answer"]).startswith("Choice") else None
                    appkey = LETTERS[q["correctIndex"]]
                    if dbkey and dbkey != appkey:
                        blockers.append(f"database key {dbkey}, app key {appkey}")
                    bl = banner_letter(new)
                    if bl and bl != appkey:
                        blockers.append(f"banner says {bl}, app key is {appkey}")
                    if blockers:
                        status, why = "blocked", "; ".join(blockers)
                    elif norm(new) == norm(q["explanation"]) and not refresh:
                        status, why = "same", ""
                    else:
                        status, why = ("update+wording" if refresh else "update"), "; ".join(sorted(set(notes)))
                        seg_start = starts[n].end()
                        seg_end = starts[n + 1].start() if n + 1 < len(starts) else len(src)
                        seg = src[seg_start:seg_end]
                        sp = explanation_span(seg)
                        if not sp:
                            status, why = "blocked", "no explanation literal found in the module"
                        else:
                            edits.append((seg_start + sp[0], seg_start + sp[1], ts_template(new)))
                        if refresh and status != "blocked":
                            cp = choices_span(seg)
                            if cp:
                                body = ",\n      ".join(f"`{ts_template(html_to_text(c))}`" for c in db_choices)
                                edits.append((seg_start + cp[0], seg_start + cp[1], f"\n      {body},\n    "))
            rec.update(status=status, why=why)
            decisions.append(rec)
            tally[status] += 1
            per_quiz[meta["key"]][status] += 1

        if a.apply and edits:
            for s, e, rep in sorted(edits, key=lambda t: -t[0]):
                src = src[:s] + rep + src[e:]
            f.write_text(src, encoding="utf-8")

    cols = ["update", "update+wording", "same", "blocked", "no_match", "authored", "db_blank"]
    print(f"{'quiz':<28}" + "".join(f"{c:>15}" for c in cols))
    for qz, c in per_quiz.items():
        print(f"{qz:<28}" + "".join(f"{c[k]:>15}" for k in cols))
    print(f"{'TOTAL':<28}" + "".join(f"{tally[k]:>15}" for k in cols))
    for d in decisions:
        if d["status"] == "blocked":
            print(f"  BLOCKED {d['quiz']}/{d['id']}: {d['why']}")
    print("\napplied." if a.apply else "\ndry run: nothing written. Add --apply to write.")
    if a.report:
        Path(a.report).write_text(json.dumps(decisions, indent=1))


if __name__ == "__main__":
    main()
