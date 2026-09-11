#!/usr/bin/env python3
"""Convert a plain-text answer explanation into Maxwell's MCQ explanation HTML.

Implements the house standard in MCQ_Explanation_HTML_Formatting_Standards.md:
flat colors only, no gradients, no emoji, no journal entries, no bare option
restatements, explicit paragraph margins, and marks inline with their text.

The source text is a flattened export: tables survive as a header block followed
by "|"-prefixed cell blocks, which is what rebuild_table() reassembles.
"""

from __future__ import annotations

import html
import re

# ---------------------------------------------------------------- palette ---
HEADER_BG = "#01506e"
ACCENT = "#0099d4"
GREEN_TEXT = "#4caf50"
EDU_BORDER = "#68d3a7"
TABLE_RULE = "#dddddd"

# Adjacent sections must not share both background and border.
SECTION_STYLES = [
    ("#f0f7fa", EDU_BORDER),
    ("#f9f9f9", ACCENT),
    ("#f5f9fc", "#207bb5"),
    ("#eef9f2", EDU_BORDER),
]

DROP_HEADINGS = {
    "journal entry", "journal entries", "journal entry for accrued interest",
    "answer analysis", "answer options", "options", "answer",
    "correct answer", "the correct answer", "the correct answer is",
}

OPTION_ANALYSIS_HEADINGS = {
    "why other options are incorrect", "answer choices analysis",
    "analysis of answer choices", "analysis of answer options",
    "answer evaluation", "option analysis", "analysis of options",
    "analysis of other options", "why the other options are incorrect",
    "incorrect options", "other options", "incorrect options analysis",
    "the other options are incorrect", "incorrect answers",
    "evaluation of answer choices",
}

SUMMARY_HEADINGS = {"summary", "key takeaway", "key takeaways", "conclusion"}

# One-liners that recur as section labels across the corpus. They are structural
# headings, never bullets, so list collapsing must leave them alone.
STRUCTURAL_HEADINGS = {
    "analysis", "analysis of each option", "analysis of incorrect options",
    "answer explanation", "calculation", "calculation process",
    "example calculation", "explanation", "given information",
    "key accounting principle", "key accounting principles",
    "key accounting standards", "key concept", "key concepts",
    "key information", "multiple choice analysis", "question analysis",
    "scenario overview", "solution analysis", "solution approach",
    "step-by-step analysis", "step-by-step calculation", "step-by-step solution",
    "understanding the question", "video walkthrough",
}

KNOWN_HEADINGS = (
    DROP_HEADINGS | OPTION_ANALYSIS_HEADINGS | SUMMARY_HEADINGS | STRUCTURAL_HEADINGS
)


EMOJI_RE = re.compile(
    "[\U0001F000-\U0001FAFF\U00002600-\U000026FF\U00002700-\U000027BF"
    "\U0001F1E6-\U0001F1FF\U0000FE0F\U00002B00-\U00002BFF]"
)


# ------------------------------------------------------------- sanitising ---
def clean_text(s: str) -> str:
    """Strip emoji and em dashes; keep the semantic check and cross marks."""
    s = s.replace("✅", "✓").replace("❌", "✗")
    s = s.replace("✔", "✓").replace("✖", "✗")
    # Protect the marks the standard allows, then drop every other pictograph.
    s = s.replace("✓", "\x01").replace("✗", "\x02")
    s = EMOJI_RE.sub("", s)
    s = s.replace("\x01", "✓").replace("\x02", "✗")
    # No em or en dashes anywhere.
    s = re.sub(r"\s*—\s*", ": ", s)
    s = re.sub(r"(\d)\s*–\s*(\d)", r"\1 to \2", s)
    s = s.replace("–", ", ")
    s = s.replace("\xa0", " ")
    return re.sub(r"[ \t]+", " ", s).strip()


def esc(s: str) -> str:
    return html.escape(clean_text(s))


def inline(s: str) -> str:
    """Escape, then colour the allowed marks inline with their text."""
    out = esc(s)
    out = out.replace(
        "✓", f'<span style="color:{GREEN_TEXT}; font-weight:bold">✓</span>'
    )
    out = out.replace(
        "✗", '<span style="color:#f44336; font-weight:bold">✗</span>'
    )
    return out


# ----------------------------------------------------------------- parsing ---
def split_blocks(text: str) -> list[list[str]]:
    text = text.replace("\r\n", "\n")
    return [
        [ln.strip() for ln in b.split("\n") if ln.strip()]
        for b in re.split(r"\n\s*\n", text)
        if b.strip()
    ]


def is_pipe_block(block: list[str]) -> bool:
    return bool(block) and all(ln.startswith("|") for ln in block)


def is_heading(block: list[str]) -> bool:
    """A heading is a short standalone label, never a label: value data line."""
    if len(block) != 1:
        return False
    raw = block[0].strip()
    line = raw.rstrip(":")
    low = line.lower()

    if re.match(r"^(answer|correct answer)\s*[:.]", raw, re.I):
        return True  # dropped later, but it does introduce a section
    if low in KNOWN_HEADINGS:
        return True
    if re.match(r"^step\s+\d+\b", low):
        return True

    if len(line) > 70 or line.endswith(".") or line.startswith("|"):
        return False
    # Data lines carry values: "Original loan: $900,000", "Interest rate: 5%".
    if "=" in line or "$" in line or "%" in line or re.search(r"\d", line):
        return False
    # "Label: value" is data; "Label:" alone is a heading.
    if ":" in raw and raw.split(":", 1)[1].strip():
        return False
    words = line.split()
    return 1 <= len(words) <= 8


def is_formula(line: str) -> bool:
    return "=" in line and bool(re.search(r"[\d$]", line))


def rebuild_table(header: list[str] | None, rows: list[list[str]]) -> dict:
    cells = [[re.sub(r"^\|\s?", "", c) for c in r] for r in rows]
    width = max((len(r) for r in cells), default=0)
    if header and len(header) == width:
        cols, body = header, cells
    else:
        cols, body = None, cells
    return {"kind": "table", "cols": cols, "rows": body}


def is_known_heading(it: dict) -> bool:
    if it["kind"] != "heading":
        return False
    low = it["text"].lower().strip()
    return low in KNOWN_HEADINGS or bool(re.match(r"^step\s+\d+\b", low))


def collapse_lists(items: list[dict]) -> list[dict]:
    """Bullets arrive as consecutive one-line blocks and look like headings.

    A run of two or more short, non-terminal one-liners is a list, not a
    sequence of headings: real headings do not come in runs.
    """
    def candidate(it: dict) -> str | None:
        if is_known_heading(it):
            return None
        if it["kind"] == "heading":
            return it["text"]
        if it["kind"] == "lines" and len(it["lines"]) == 1:
            return it["lines"][0]
        return None

    out: list[dict] = []
    i = 0
    while i < len(items):
        run = []
        j = i
        while j < len(items):
            c = candidate(items[j])
            if c is None or len(c) > 110 or c.endswith(".") or is_formula(c):
                break
            run.append(c)
            j += 1
        if len(run) >= 2:
            out.append({"kind": "list", "items": run})
            i = j
        else:
            out.append(items[i])
            i += 1
    return out


def looks_like_title(block: list[str]) -> bool:
    """First block is a title only when it reads as a label, not as prose.

    Some questions arrive as flat prose with no title line at all; taking the
    opening sentence as the heading puts a paragraph in the header bar.
    """
    if len(block) != 1:
        return False
    line = block[0].strip()
    if not line or len(line) > 70 or len(line.split()) > 10:
        return False
    # A trailing period may just be an abbreviation ("Coffee Co."), so only
    # reject when the last word reads like the end of a sentence.
    if line.endswith("."):
        words = line[:-1].split()
        last = words[-1] if words else ""
        if last.islower() and len(last) > 3:
            return False
    return True


def parse(text: str) -> tuple[str | None, list[dict]]:
    blocks = split_blocks(text)
    if not blocks:
        return None, []
    has_title = looks_like_title(blocks[0])
    title = blocks[0][0] if has_title else None
    items: list[dict] = []
    i = 1 if has_title else 0
    while i < len(blocks):
        b = blocks[i]
        if is_pipe_block(b):
            rows = []
            while i < len(blocks) and is_pipe_block(blocks[i]):
                rows.append(blocks[i])
                i += 1
            header = None
            if items and items[-1]["kind"] == "lines" and len(items[-1]["lines"]) == max(
                len(r) for r in rows
            ):
                header = items.pop()["lines"]
            items.append(rebuild_table(header, rows))
            continue
        if is_heading(b):
            items.append({"kind": "heading", "text": b[0].rstrip(":")})
        else:
            items.append({"kind": "lines", "lines": b})
        i += 1
    return title, collapse_lists(items)


def group_sections(items: list[dict]) -> list[dict]:
    sections: list[dict] = [{"title": None, "items": []}]
    for it in items:
        if it["kind"] == "heading":
            sections.append({"title": it["text"], "items": []})
        else:
            sections[-1]["items"].append(it)
    return [s for s in sections if s["title"] or s["items"]]


# ----------------------------------------------------------------- filters ---
def is_journal_table(t: dict) -> bool:
    cols = [c.lower() for c in (t.get("cols") or [])]
    return "debit" in cols and "credit" in cols


def is_bare_option_list(section: dict) -> bool:
    """Choice restatements with no reasoning carry nothing the student can use."""
    lines = [l for it in section["items"] if it["kind"] == "lines" for l in it["lines"]]
    lines += [l for it in section["items"] if it["kind"] == "list" for l in it["items"]]
    if not lines:
        return False
    labelled = sum(
        1
        for l in lines
        if re.match(r"^(choice|option)\s*\d+\s*[:.]", l, re.I)
        or re.match(r"^[\$\d].{0,40}[✓✗]\s*$", l)
    )
    return labelled >= max(2, len(lines) - 1)


def option_rows(section: dict) -> list[tuple[str, str]]:
    """Two-column (option, reasoning) rows, only where reasoning exists."""
    rows: list[tuple[str, str]] = []
    for it in section["items"]:
        if it["kind"] == "table":
            for r in it["rows"]:
                if len(r) >= 2 and len(r[1]) > 25:
                    rows.append((r[0], r[1]))
        else:
            src = it["lines"] if it["kind"] == "lines" else it["items"]
            for line in src:
                m = re.match(r"^(.{1,70}?)\s*[-–:]\s+((?:In)?correct\b.*)$", line, re.I)
                if m and len(m.group(2)) > 20:
                    rows.append((m.group(1), m.group(2)))
    return rows


# ---------------------------------------------------------------- emitting ---
def p(text: str, last: bool = False) -> str:
    margin = "0" if last else "0 0 12px 0"
    return f'<p style="margin:{margin}">{inline(text)}</p>'


def formula_box(text: str) -> str:
    return (
        '<div style="background-color:white; border:1px solid #dddddd; '
        "border-radius:5px; font-family:monospace; margin:0 0 12px 0; padding:12px; "
        f'text-align:center"><strong>{inline(text)}</strong></div>'
    )


MARK_ONLY = re.compile(r"^[✓✗✅❌\s]+$")

OPTION_PREFIX = re.compile(
    r"^(?:incorrect\s+(?:answers?|options?)\s*:\s*)?"
    r"(?:choice|option)?\s*[A-D1-4]\s*[.):]\s*",
    re.I,
)


def _norm(s: str) -> str:
    return re.sub(r"[^a-z0-9]+", " ", clean_text(s).lower()).strip()


def is_restatement(line: str, choices: list[str]) -> bool:
    """True when the line only repeats an answer choice.

    Rule 5: an option list that adds no reasoning tells the student nothing
    they did not already see on the question screen.
    """
    if not choices:
        return False
    stripped = OPTION_PREFIX.sub("", clean_text(line)).strip()
    if not stripped:
        return False
    n = _norm(stripped)
    return any(n and n == _norm(c) for c in choices)


def render_lines(lines: list[str], choices: list[str] | None = None) -> str:
    """A mark with no text alongside it says nothing, so it is dropped."""
    kept = [
        l
        for l in lines
        if not MARK_ONLY.match(clean_text(l))
        and not is_restatement(l, choices or [])
    ]
    out = []
    for n, line in enumerate(kept):
        last = n == len(kept) - 1
        out.append(formula_box(line) if is_formula(line) else p(line, last))
    return "".join(out)


def fold_mark_columns(t: dict) -> dict:
    """A cell holding only ✓ or ✗ must sit on the same line as its value, so
    merge such cells into the cell to their left and drop the empty column."""
    width = len(t["cols"]) if t["cols"] else max((len(r) for r in t["rows"]), default=0)
    rows = [list(r) + [""] * (width - len(r)) for r in t["rows"]]
    for col in range(width - 1, 0, -1):
        marks = [r for r in rows if MARK_ONLY.match(clean_text(r[col])) and r[col].strip()]
        others = [r for r in rows if r[col].strip() and r not in marks]
        if not marks or others:
            continue
        for r in marks:
            r[col - 1] = f"{r[col - 1]} {clean_text(r[col])}".strip()
            r[col] = ""
        if all(not r[col].strip() for r in rows):
            for r in rows:
                del r[col]
            if t["cols"]:
                t = {**t, "cols": t["cols"][:col] + t["cols"][col + 1:]}

    # A leading mark column has nothing to its left, so fold it forward.
    width = len(rows[0]) if rows else 0
    if width > 1:
        lead = [r for r in rows if r[0].strip()]
        if lead and all(MARK_ONLY.match(clean_text(r[0])) for r in lead):
            for r in rows:
                mark = clean_text(r[0])
                r[1] = f"{mark} {r[1]}".strip() if mark else r[1]
            for r in rows:
                del r[0]
            if t["cols"]:
                t = {**t, "cols": t["cols"][1:]}
    return {**t, "rows": rows}


def render_list(items: list[str], choices: list[str] | None = None) -> str:
    items = [x for x in items if not is_restatement(x, choices or [])]
    if not items:
        return ""
    lis = "".join(
        f'<li style="margin:0 0 8px 0">{inline(x)}</li>' for x in items
    )
    return f'<ul style="margin:0 0 12px 0; padding-left:22px">{lis}</ul>'


def render_table(t: dict) -> str:
    t = fold_mark_columns(t)
    head = ""
    if t["cols"]:
        head = (
            "<thead><tr>"
            + "".join(
                f'<th style="border-bottom:2px solid {HEADER_BG}; padding:10px; '
                f'text-align:left">{esc(c)}</th>'
                for c in t["cols"]
            )
            + "</tr></thead>"
        )
    width = len(t["cols"]) if t["cols"] else max((len(r) for r in t["rows"]), default=1)
    body = []
    for r in t["rows"]:
        cells = list(r) + [""] * (width - len(r))
        body.append(
            "<tr>"
            + "".join(
                f'<td style="border-bottom:1px solid {TABLE_RULE}; padding:10px">'
                f"{inline(c)}</td>"
                for c in cells
            )
            + "</tr>"
        )
    return (
        '<table cellspacing="0" style="border-collapse:collapse; margin-top:15px; '
        f'width:100%">{head}<tbody>{"".join(body)}</tbody></table>'
    )


def section_card(title: str | None, inner: str, bg: str, border: str) -> str:
    heading = (
        f'<h3 style="color:{HEADER_BG}; margin:0 0 12px 0">{esc(title)}</h3>'
        if title
        else ""
    )
    return (
        f'<div style="background-color:{bg}; border-left:5px solid {border}; '
        f'border-radius:8px; margin-bottom:20px; padding:15px">{heading}{inner}</div>'
    )


def step_card(title: str, inner: str) -> str:
    return (
        '<div style="background-color:#f0f8ff; border-left:5px solid #0099d4; '
        'border-radius:8px; margin-bottom:20px; padding:20px">'
        f'<div style="color:{HEADER_BG}; font-size:1.05em; font-weight:bold; '
        f'margin-bottom:12px">{esc(title)}</div>{inner}</div>'
    )


def option_card(rows: list[tuple[str, str]]) -> str:
    body = "".join(
        "<tr>"
        f'<td style="border-bottom:1px solid {TABLE_RULE}; padding:10px">{inline(o)}</td>'
        f'<td style="border-bottom:1px solid {TABLE_RULE}; padding:10px">{inline(a)}</td>'
        "</tr>"
        for o, a in rows
    )
    return (
        '<div style="background-color:white; border-radius:8px; margin-bottom:20px; '
        'padding:15px">'
        f'<h3 style="color:{HEADER_BG}; margin:0 0 12px 0">Analysis of Answer Options</h3>'
        '<table cellspacing="0" style="border-collapse:collapse; margin-top:15px; width:100%">'
        "<thead><tr>"
        f'<th style="border-bottom:2px solid {HEADER_BG}; padding:10px; text-align:left">Option</th>'
        f'<th style="border-bottom:2px solid {HEADER_BG}; padding:10px; text-align:left">Analysis</th>'
        "</tr></thead>"
        f"<tbody>{body}</tbody></table></div>"
    )


def build(
    explanation: str,
    answer_text: str,
    choices: list[str] | None = None,
    fallback_title: str = "Answer Explanation",
) -> str:
    doc_title, items = parse(explanation)
    doc_title = doc_title or fallback_title
    sections = group_sections(items)

    body: list[str] = []
    summaries: list[str] = []
    style_i = 0

    for sec in sections:
        sec_title = (sec["title"] or "").strip()
        low = sec_title.lower()

        # "Answer: $307,500" duplicates the Correct Answer callout above it.
        if re.match(r"^(answer|correct answer)\s*[:.]", sec_title, re.I):
            sec["title"] = None
            sec_title, low = "", ""

        if low in DROP_HEADINGS or is_bare_option_list(sec):
            continue

        sec["items"] = [
            it for it in sec["items"] if not (it["kind"] == "table" and is_journal_table(it))
        ]
        if not sec["items"]:
            continue

        if low and low in OPTION_ANALYSIS_HEADINGS:
            rows = option_rows(sec)
            if rows:
                body.append(option_card(rows))
            continue

        inner = "".join(
            render_table(it)
            if it["kind"] == "table"
            else render_list(it["items"], choices)
            if it["kind"] == "list"
            else render_lines(it["lines"], choices)
            for it in sec["items"]
        )
        if not inner.strip():
            continue

        if low in SUMMARY_HEADINGS:
            summaries.append(inner)
        elif re.match(r"^step\s+\d+", low):
            body.append(step_card(sec["title"], inner))
        else:
            bg, border = SECTION_STYLES[style_i % len(SECTION_STYLES)]
            style_i += 1
            body.append(section_card(sec["title"], inner, bg, border))

    answer = clean_text(re.sub(r"^\s*[A-Da-d]\s*[.)]\s*", "", answer_text or ""))
    answer_block = (
        f'<div style="background-color:#f9f9f9; border-left:5px solid {ACCENT}; '
        'border-radius:8px; margin-bottom:20px; padding:15px">'
        f'<h3 style="color:{HEADER_BG}; margin:0 0 12px 0">Correct Answer</h3>'
        f'<p style="margin:0"><span style="color:{GREEN_TEXT}; font-weight:bold">✓</span> '
        f'<span style="color:{GREEN_TEXT}; font-weight:bold">{esc(answer)}</span></p></div>'
        if answer
        else ""
    )

    summary_block = ""
    if summaries:
        plain = re.sub(r'color:#01506e', "color:white", "".join(summaries))
        summary_block = (
            f'<div style="background-color:{HEADER_BG}; border-radius:0 0 8px 8px; '
            'color:white; padding:15px">'
            '<h3 style="color:white; margin:0 0 12px 0">Summary</h3>'
            f"{plain}</div>"
        )

    header = (
        f'<div style="background-color:{HEADER_BG}; border-radius:8px 8px 0 0; '
        'color:white; padding:20px">'
        f'<h1 style="color:white; margin:0">{esc(doc_title)}</h1></div>'
    )
    content = (
        '<div style="background-color:white; padding:20px">'
        f"{answer_block}{''.join(body)}{summary_block}</div>"
    )
    return (
        '<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); '
        'font-family: Arial, Helvetica, sans-serif; overflow:hidden">'
        f"{header}{content}</div>"
    )
