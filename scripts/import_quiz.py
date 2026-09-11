#!/usr/bin/env python3
"""Import a quiz spreadsheet into the app as a typed data module.

Usage:
    npm run import-quiz -- <file.xlsx> --key <url-slug> --title "Quiz Title" \
        [--subtitle "..."] [--course intermediate] [--dry-run]

Expected columns (same layout as the AICPA sheets):
    QuestionText, Choice1, Choice2, Choice3, Choice4, answer, Explanation, ID

`answer` may be "Choice2", "2", or "B".

The script writes src/data/<course>/<key>.ts and wires it into catalog.ts and
registry.ts at the INTERMEDIATE_* marker comments.
"""

from __future__ import annotations

import argparse
import html
import json
import re
import sys
from pathlib import Path

try:
    import openpyxl
except ImportError:
    sys.exit("openpyxl is required:  python3 -m pip install openpyxl")

ROOT = Path(__file__).resolve().parent.parent
BLOCK_TAGS = r"p|div|br|tr|li|h[1-6]|table|thead|tbody"


def html_to_text(raw: str | None) -> str:
    """Flatten the spreadsheet's HTML question text into the plain text the
    quiz renders (.q-text uses white-space: pre-wrap)."""
    if not raw:
        return ""
    s = str(raw)
    s = re.sub(r"<\s*li[^>]*>", "\n• ", s, flags=re.I)
    s = re.sub(rf"<\s*/?\s*(?:{BLOCK_TAGS})[^>]*>", "\n", s, flags=re.I)
    s = re.sub(r"<[^>]+>", "", s)
    s = html.unescape(s)
    s = s.replace("\xa0", " ")
    s = re.sub(r"[ \t]+", " ", s)
    s = re.sub(r"\n\s*\n\s*\n+", "\n\n", s)
    return "\n".join(line.strip() for line in s.split("\n")).strip()


ALLOWED_TAGS = {"p", "br", "table", "thead", "tbody", "tfoot", "tr", "th", "td",
                "ul", "ol", "li", "strong", "b", "em", "i", "u", "sup", "sub", "span", "div"}


def clean_prompt_html(raw: str | None) -> str:
    """Keep the source table markup, drop scripts/styles/attributes.

    Inline styles from the source sheet are stripped so the stem inherits the
    app's own table styling (.q-text-html) and stays readable on mobile.
    """
    s = str(raw or "")
    s = re.sub(r"<(script|style)[^>]*>.*?</\1>", "", s, flags=re.I | re.S)

    def keep(m: re.Match) -> str:
        closing, tag = m.group(1), m.group(2).lower()
        if tag not in ALLOWED_TAGS:
            return ""
        return f"<{closing}{tag}>"

    s = re.sub(r"<\s*(/?)\s*([a-zA-Z0-9]+)[^>]*>", keep, s)
    s = s.replace("\xa0", " ")
    return re.sub(r"\s+", " ", s).strip()


def parse_answer(value) -> int:
    """Return a 0-based correct index.

    Handles every shape seen in the source sheets:
      "Choice2" | "2" | "B" | "B) text" | "D. To provide information that ..."

    The leading marker is matched first — a naive digit search would pick up
    the numbers inside an answer like "C. $220,000".
    """
    s = str(value or "").strip()
    m = re.match(r"\s*Choice\s*([1-4])\b", s, re.I)
    if m:
        return int(m.group(1)) - 1
    m = re.match(r"\s*([A-Da-d])\s*(?:[.):\-]|$)", s)
    if m:
        return "ABCD".index(m.group(1).upper())
    m = re.match(r"\s*([1-4])\s*(?:[.):\-]|$)", s)
    if m:
        return int(m.group(1)) - 1
    raise ValueError(f"Cannot read answer column value: {value!r}")


def text_to_html(raw: str | None) -> str:
    """Wrap a plain-text explanation in HTML for the .exp-content renderer.

    The first line reads as a title in these sheets, so it becomes a heading;
    blank-line-separated blocks become paragraphs. Everything is escaped —
    explanations contain things like "R&D" and "$46,139 < face value".
    """
    t = str(raw or "").replace("\r\n", "\n").replace("\xa0", " ").strip()
    if not t:
        return ""
    if re.search(r"<\s*[a-zA-Z/]", t):
        return t  # already HTML — leave the source markup alone
    blocks = [b.strip() for b in re.split(r"\n\s*\n", t) if b.strip()]
    if not blocks:
        return ""
    out = [f'<h3 class="exp-title">{html.escape(blocks[0])}</h3>']
    for b in blocks[1:]:
        out.append("<p>" + "<br>".join(html.escape(x) for x in b.split("\n")) + "</p>")
    return "".join(out)


COLUMN_ALIASES = {
    "prompt": ["QuestionText", "Question", "Question Text"],
    "choice1": ["Choice1", "Option A", "OptionA", "A"],
    "choice2": ["Choice2", "Option B", "OptionB", "B"],
    "choice3": ["Choice3", "Option C", "OptionC", "C"],
    "choice4": ["Choice4", "Option D", "OptionD", "D"],
    "answer": ["answer", "Answer", "Correct Answer", "CorrectAnswer"],
    "explanation": ["Explanation", "explanation"],
    "id": ["ID", "Question ID", "QuestionID", "Id"],
    "topic": ["Topic", "topic"],
}


def resolve_columns(header: list[str]) -> dict[str, int]:
    idx = {h: i for i, h in enumerate(header) if h}
    found = {}
    for field, names in COLUMN_ALIASES.items():
        for n in names:
            if n in idx:
                found[field] = idx[n]
                break
    required = ["prompt", "choice1", "choice2", "choice3", "choice4", "answer"]
    missing = [r for r in required if r not in found]
    if missing:
        sys.exit(
            f"Spreadsheet is missing columns for: {', '.join(missing)}.\n"
            f"Found headers: {header}"
        )
    return found


def slugify(text: str) -> str:
    """'9. Property, Plant & Equipment / Fixed Assets' -> 'property-plant-equipment-fixed-assets'"""
    t = re.sub(r"^\s*\d+[\.\)]\s*", "", str(text or ""))
    t = t.replace("&", " and ")
    t = re.sub(r"[^a-zA-Z0-9]+", "-", t).strip("-").lower()
    return re.sub(r"-+", "-", t)


def topic_title(text: str) -> str:
    return re.sub(r"^\s*\d+[\.\)]\s*", "", str(text or "")).strip()


def ts_template(s: str) -> str:
    """Escape a string for a TypeScript backtick template literal."""
    return s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")


def camel(key: str) -> str:
    parts = re.split(r"[^a-zA-Z0-9]+", key)
    return parts[0].lower() + "".join(p.capitalize() for p in parts[1:] if p)


def read_rows(path: Path, sheet: str | None = None) -> list[dict]:
    wb = openpyxl.load_workbook(path, read_only=True, data_only=True)
    ws = wb[sheet] if sheet else wb.active
    rows = list(ws.iter_rows(values_only=True))
    if not rows:
        sys.exit(f"{path} is empty")
    header = [str(c).strip() if c is not None else "" for c in rows[0]]
    col = resolve_columns(header)

    def cell(r, field):
        i = col.get(field)
        return r[i] if i is not None and i < len(r) else None

    norm = lambda x: re.sub(r"\s+", " ", str(x or "")).replace("\u2011", "-").strip().lower()

    out = []
    for n, r in enumerate(rows[1:], start=2):
        raw_prompt = cell(r, "prompt")
        prompt = html_to_text(raw_prompt)
        choices = [html_to_text(cell(r, f"choice{k}")) for k in range(1, 5)]
        if not prompt or not all(choices):
            print(f"  ! row {n}: skipped (blank question or choice)")
            continue
        try:
            correct = parse_answer(cell(r, "answer"))
        except ValueError as e:
            print(f"  ! row {n}: {e} — skipped")
            continue

        # When the answer cell repeats the option text, confirm the letter agrees.
        raw_answer = str(cell(r, "answer") or "").strip()
        marker = re.match(r"\s*(?:Choice\s*)?[A-Da-d1-4]\s*[.):\-]\s+", raw_answer)
        ans_text = raw_answer[marker.end():] if marker else ""
        if ans_text and norm(ans_text) != norm(choices[correct]):
            print(f"  !! row {n}: answer letter {'ABCD'[correct]} does not match its option text")
            print(f"       answer: {ans_text[:70]}")
            print(f"       option: {choices[correct][:70]}")

        prompt_html = None
        if re.search(r"<\s*table", str(raw_prompt or ""), re.I):
            prompt_html = clean_prompt_html(raw_prompt)
            print(f"  \u00b7 row {n}: table in stem — kept as HTML")

        out.append(
            {
                "id": str(cell(r, "id") or n - 1).strip(),
                "topic": str(cell(r, "topic") or "").strip(),
                "prompt": prompt,
                "promptHtml": prompt_html,
                "choices": choices,
                "correctIndex": correct,
                "explanation": text_to_html(cell(r, "explanation")) or None,
            }
        )
    return out


def build_module(var: str, key: str, title: str, subtitle: str, course: str, qs: list[dict]) -> str:
    types_import = "../types" if course == "intermediate" else "./types"
    body = []
    for q in qs:
        chunk = [
            "    {",
            f'      id: "{q["id"]}",',
            f"      prompt: `{ts_template(q['prompt'])}`,",
        ]
        if q.get("promptHtml"):
            chunk.append(f"      promptHtml: `{ts_template(q['promptHtml'])}`,")
        chunk += [
            "      choices: [",
        ]
        chunk += [f"        `{ts_template(c)}`," for c in q["choices"]]
        chunk += ["      ],", f"      correctIndex: {q['correctIndex']},"]
        if q["explanation"]:
            chunk.append(f"      explanation: `{ts_template(q['explanation'])}`,")
        chunk.append("    },")
        body.append("\n".join(chunk))
    return (
        f'import type {{ Quiz }} from "{types_import}";\n\n'
        f"export const {var}: Quiz = {{\n"
        f'  key: "{key}",\n'
        f'  title: "{title}",\n'
        f'  subtitle: "{subtitle}",\n'
        f'  discipline: "{"intermediate" if course == "intermediate" else "far"}",\n'
        f'  course: "{course}",\n'
        "  questions: [\n" + "\n".join(body) + "\n  ],\n};\n"
    )


def add_catalog_entry(key: str, title: str, subtitle: str, course: str) -> None:
    cat_path = ROOT / "src/data/catalog.ts"
    cat = cat_path.read_text()
    # Only the target course's catalog block — a slug may exist in both courses.
    marker = "export const intermediateCatalog"
    scope = cat[cat.index(marker):] if course == "intermediate" and marker in cat else cat
    if f'key: "{key}"' in scope:
        print(f"  = catalog already lists {key}")
    else:
        entry = (
            "  {\n"
            f'    key: "{key}",\n'
            f'    title: "{title}",\n'
            f'    subtitle: "{subtitle}",\n'
            f'    discipline: "{"intermediate" if course == "intermediate" else "far"}",\n'
            f'    course: "{course}",\n'
            "  },\n  // INTERMEDIATE_CATALOG_ENTRIES"
        )
        cat_path.write_text(cat.replace("  // INTERMEDIATE_CATALOG_ENTRIES", entry))
        print(f"  + catalog entry {key}")



def regenerate_registry() -> None:
    """registry.ts is generated from catalog.ts — see scripts/gen_registry.py."""
    import subprocess

    subprocess.run([sys.executable, str(Path(__file__).with_name("gen_registry.py"))],
                   check=True)


def write_quiz(key: str, title: str, subtitle: str, course: str, qs: list[dict]) -> None:
    var = camel(key) + "Quiz"
    out = module_path(key, course)
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(build_module(var, key, title, subtitle, course, qs))
    print(f"  + {out.relative_to(ROOT)}  ({len(qs)} questions)")
    add_catalog_entry(key, title, subtitle, course)


def report(qs: list[dict], indent: str = "  ") -> None:
    dist = [sum(1 for q in qs if q["correctIndex"] == i) for i in range(4)]
    missing = [q["id"] for q in qs if not q["explanation"]]
    print(f"{indent}{len(qs)} questions | answer spread A-D: {dist} | "
          f"explanations: {len(qs) - len(missing)}/{len(qs)}")
    if missing:
        print(f"{indent}! no explanation for ids: {', '.join(missing)}")


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("xlsx")
    ap.add_argument("--key", help="URL slug, e.g. revenue-recognition")
    ap.add_argument("--title")
    ap.add_argument("--sheet", help="Worksheet name (defaults to the first sheet)")
    ap.add_argument(
        "--split-by-topic",
        action="store_true",
        help="Emit one quiz per value in the Topic column, in sheet order",
    )
    ap.add_argument(
        "--slug-map",
        help="JSON file mapping topic name -> url slug, for overriding derived slugs",
    )
    ap.add_argument("--subtitle", default="")
    ap.add_argument("--course", default="intermediate", choices=["intermediate", "cpa"])
    ap.add_argument("--dry-run", action="store_true")
    a = ap.parse_args()

    if not a.split_by_topic and not (a.key and a.title):
        sys.exit("Pass --key and --title, or use --split-by-topic.")
    if a.key and not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", a.key):
        sys.exit(f"--key must be a lowercase url slug, got {a.key!r}")

    src = Path(a.xlsx)
    if not src.exists():
        sys.exit(f"No such file: {src}")

    print(f"Reading {src.name} …")
    qs = read_rows(src, a.sheet)
    if not qs:
        sys.exit("No usable questions found.")

    if a.split_by_topic:
        overrides = {}
        if a.slug_map:
            overrides = json.loads(Path(a.slug_map).read_text())
        groups: dict[str, list[dict]] = {}
        for q in qs:
            if not q["topic"]:
                sys.exit("--split-by-topic needs a Topic column value on every row.")
            groups.setdefault(q["topic"], []).append(q)

        print(f"\n{len(groups)} topics -> {len(groups)} quizzes\n")
        plan = []
        for topic, group in groups.items():
            key = overrides.get(topic) or slugify(topic)
            if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", key):
                sys.exit(f"Derived slug {key!r} for topic {topic!r} is not a valid url slug")
            plan.append((topic, key, topic_title(topic), group))

        for topic, key, title, group in plan:
            print(f"/{a.course}/{key}   {title}")
            report(group, indent="    ")
            if not a.dry_run:
                write_quiz(key, title, title, a.course, group)
            print()

        if a.dry_run:
            print("[dry run] nothing written")
            return
        regenerate_registry()
        print(f"Done — {len(plan)} quizzes, {len(qs)} questions.")
        print("Verify with `npm run build`.")
        return

    dist = {}
    for q in qs:
        dist[q["correctIndex"]] = dist.get(q["correctIndex"], 0) + 1
    missing = [q["id"] for q in qs if not q["explanation"]]
    print(f"  {len(qs)} questions | answer spread A-D: "
          f"{[dist.get(i, 0) for i in range(4)]} | "
          f"explanations: {len(qs) - len(missing)}/{len(qs)}")
    if missing:
        print(f"  ! no explanation for ids: {', '.join(missing)}")

    var = camel(a.key) + "Quiz"
    subtitle = a.subtitle or a.title
    out = module_path(a.key, a.course)

    if a.dry_run:
        print(f"\n[dry run] would write {out.relative_to(ROOT)} and wire up {a.key}")
        return

    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(build_module(var, a.key, a.title, subtitle, a.course, qs))
    print(f"  + {out.relative_to(ROOT)}")
    add_catalog_entry(a.key, a.title, subtitle, a.course)
    regenerate_registry()

    url = f"/{a.course}/{a.key}" if a.course == "intermediate" else f"/{a.key}"
    print(f"\nDone. Verify with `npm run build`, then embed:")
    print(f"  https://quiz.maxwellstudy.com{url}")


if __name__ == "__main__":
    main()
