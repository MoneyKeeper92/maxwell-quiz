"""Render an explanation in the answer-explanation style Kyle uses in the question database.

The shape, taken from his rewrites of the Intermediate questions:

    banner      "B. $3,400 is correct." plus one sentence of why
    The rule    one to three paragraphs
    The math    a two-column table, last row the answer
    The entry   Account / Debit / Credit, when the question is about an entry
    Why the others are wrong    one line per wrong letter

Authors write plain strings. `**term**` becomes the navy bold the style uses for
the one idea a student should keep. Nothing else is markup, so a stray `<` or `&`
in a figure cannot break the page.
"""

from __future__ import annotations

import html as H
import re
from dataclasses import dataclass, field

VARS = (
    "--mx-navy:#01506e; --mx-blue:#207bb5; --mx-lightblue:#0099d4; --mx-yellow:#e9dc12; "
    "--mx-grey:#4B556A; --mx-rule:#dde4ea; --mx-tint:#f2f7fa; --mx-body:#232a33; "
    "color:var(--mx-body); line-height:1.6"
)
NAVY = 'style="color:var(--mx-navy)"'
LETTERS = "ABCD"


def inline(s: str) -> str:
    s = H.escape(s, quote=False)
    return re.sub(r"\*\*(.+?)\*\*", rf"<strong {NAVY}>\1</strong>", s)


@dataclass
class E:
    id: str
    letter: str
    headline: str                       # the answer, as a short phrase: "$3,400"
    why: str                            # one sentence under the letter
    rule: list[str]                     # paragraphs for "The rule"
    wrong: dict[str, str]               # letter -> why it fails
    math: list[tuple[str, str]] = field(default_factory=list)
    after_math: str = ""
    entry: list[tuple[str, str, str]] = field(default_factory=list)  # account, debit, credit
    entry_title: str = "The entry"
    after_entry: str = ""
    math_title: str = "The math"


def _para(texts: list[str], last_margin: str) -> str:
    out = []
    for i, t in enumerate(texts):
        m = last_margin if i == len(texts) - 1 else "0 0 12px"
        out.append(f'<p style="margin:{m}">{inline(t)}</p>')
    return "".join(out)


def _h3(title: str) -> str:
    return f'<h3 style="color:var(--mx-navy); font-size:17px; margin:0 0 8px">{H.escape(title)}</h3>'


def _box(inner: str) -> str:
    return (
        '<div style="background:var(--mx-tint); border-left:4px solid var(--mx-blue); '
        f'padding:8px 10px; margin-bottom:18px">{inner}</div>'
    )


def _math(rows: list[tuple[str, str]]) -> str:
    body = []
    for i, (label, amt) in enumerate(rows):
        last = i == len(rows) - 1
        b = "border:0; " if last else "border:0; border-bottom:1px solid var(--mx-rule); "
        l = f"<strong {NAVY}>{inline(label)}</strong>" if last else inline(label)
        a = f"<strong {NAVY}>{H.escape(amt)}</strong>" if last else H.escape(amt)
        body.append(
            f'<tr><td style="{b}padding:11px 14px">{l}</td>'
            f'<td style="{b}padding:11px 14px; text-align:right">{a}</td></tr>'
        )
    return _box(f'<table style="border:0; border-collapse:collapse; width:100%"><tbody>{"".join(body)}</tbody></table>')


def _entry(rows: list[tuple[str, str, str]]) -> str:
    cell = "border:0; border-bottom:1px solid var(--mx-rule); padding:11px 14px"
    head = (
        f'<tr><td style="{cell}"><strong {NAVY}>Account</strong></td>'
        f'<td style="{cell}; text-align:right"><strong {NAVY}>Debit</strong></td>'
        f'<td style="{cell}; text-align:right"><strong {NAVY}>Credit</strong></td></tr>'
    )
    body = []
    for i, (acct, dr, cr) in enumerate(rows):
        last = i == len(rows) - 1
        b = "border:0; " if last else "border:0; border-bottom:1px solid var(--mx-rule); "
        pad = "padding:11px 14px 11px 40px" if not dr else "padding:11px 14px"   # credits are indented
        body.append(
            f'<tr><td style="{b}{pad}">{inline(acct)}</td>'
            f'<td style="{b}padding:11px 14px; text-align:right">{H.escape(dr)}</td>'
            f'<td style="{b}padding:11px 14px; text-align:right">{H.escape(cr)}</td></tr>'
        )
    return _box(f'<table style="border:0; border-collapse:collapse; width:100%"><tbody>{head}{"".join(body)}</tbody></table>')


def render(e: E) -> str:
    parts = [
        f'<div style="{VARS}">',
        '<div style="background:var(--mx-tint); border-left:4px solid var(--mx-yellow); '
        'padding:13px 18px; margin-bottom:18px">'
        f'<strong {NAVY}>{e.letter}. {inline(e.headline)} is correct.</strong> {inline(e.why)}</div>',
        _h3("The rule"),
        _para(e.rule, "0 0 18px"),
    ]
    if e.math:
        parts += [_h3(e.math_title), _math(e.math)]
        if e.after_math:
            parts.append(_para([e.after_math], "0 0 18px"))
    if e.entry:
        parts += [_h3(e.entry_title), _entry(e.entry)]
        if e.after_entry:
            parts.append(_para([e.after_entry], "0 0 18px"))
    lines = [
        f'<strong {NAVY}>{l}.</strong> {inline(e.wrong[l])}' for l in LETTERS if l != e.letter
    ]
    parts += [
        _h3("Why the others are wrong"),
        f'<p style="margin:0; color:var(--mx-grey)">{"<br />".join(lines)}</p>',
        "</div>",
    ]
    return "".join(parts)


def problems(e: E, correct_index: int, keyed_choice: str = "") -> list[str]:
    """Everything that must be true before this is allowed near a module."""
    bad = []
    if e.letter != LETTERS[correct_index]:
        bad.append(f"letter {e.letter} but the key is {LETTERS[correct_index]}")
    want = {l for l in LETTERS if l != e.letter}
    if set(e.wrong) != want:
        bad.append(f"'wrong' covers {sorted(e.wrong)}, needs {sorted(want)}")
    # A short numeric answer ("$25,250", "45.6 days", "10%") must appear verbatim in
    # the banner, so a transposed digit cannot ship as the stated answer.
    k = keyed_choice.strip()
    if k and len(k) <= 14 and re.search(r"\d", k) and k.rstrip(".") not in e.headline:
        bad.append(f"banner says {e.headline!r} but the keyed choice is {k!r}")
    blob = render(e)
    if any(c in blob for c in ("—", "–")):
        bad.append("contains an em or en dash")
    if re.search(r"\b(CPA|exam)\b", re.sub(r"<[^>]+>", " ", blob), re.I):
        bad.append("mentions the CPA exam, which this course should not")
    return bad
