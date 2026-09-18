#!/usr/bin/env python3
"""Ask OpenAI and Gemini to answer a quiz cold, then compare with the key.

The models never see the keyed answer or the explanation, so a disagreement is
independent evidence that a question is wrong, ambiguous, or has two defensible
answers. Agreement is not proof the key is right, but every disagreement is
worth a human look.

    export OPENAI_API_KEY=...   GEMINI_API_KEY=...
    npm run cross-check -- --quiz midterm-exam-1

Cost is printed at the end. A 40-question quiz against both providers runs a
few cents; --estimate prints the projected cost and exits without calling out.
"""

from __future__ import annotations

import argparse
import concurrent.futures as cf
import json
import os
import re
import sys
import ssl
import urllib.error
import urllib.request

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import qc  # noqa: E402  (reuses the module parser)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LETTERS = "ABCD"

def _ssl_context() -> ssl.SSLContext:
    """Python here ships without a usable trust store, so point at one."""
    try:
        import certifi
        return ssl.create_default_context(cafile=certifi.where())
    except ImportError:
        pass
    if os.path.exists("/etc/ssl/cert.pem"):
        return ssl.create_default_context(cafile="/etc/ssl/cert.pem")
    return ssl.create_default_context()


SSL_CTX = _ssl_context()

SYSTEM = (
    "You are an intermediate accounting professor grading a draft exam. "
    "Answer each multiple-choice question under US GAAP. Reply with strict JSON: "
    '{"answer": "A"|"B"|"C"|"D", "confidence": "high"|"medium"|"low", '
    '"note": "one sentence"}. If two options are defensible or the question is '
    'ambiguous, pick the best one and say so in the note.'
)


def prompt_for(q: dict) -> str:
    stem = qc.strip_tags(q["promptHtml"] or q["prompt"]).strip()
    opts = "\n".join(f"{LETTERS[i]}. {qc.strip_tags(c).strip()}"
                     for i, c in enumerate(q["choices"]))
    return f"{stem}\n\n{opts}"


def post(url: str, payload: dict, headers: dict) -> dict:
    req = urllib.request.Request(
        url, data=json.dumps(payload).encode(), method="POST",
        headers={"Content-Type": "application/json", **headers})
    try:
        with urllib.request.urlopen(req, timeout=180, context=SSL_CTX) as r:
            return json.loads(r.read())
    except urllib.error.HTTPError as e:
        raise RuntimeError(f"{e.code} {e.read()[:300].decode('utf-8', 'replace')}") from None


def parse_reply(text: str) -> dict:
    m = re.search(r"\{.*\}", text, re.S)
    if m:
        try:
            return json.loads(m.group(0))
        except json.JSONDecodeError:
            pass
    m = re.search(r"\b([A-D])\b", text)
    return {"answer": m.group(1) if m else "?", "confidence": "?", "note": text[:120]}


def ask_openai(q: dict, model: str) -> dict:
    key = os.environ["OPENAI_API_KEY"]
    body = post("https://api.openai.com/v1/chat/completions", {
        "model": model,
        "messages": [{"role": "system", "content": SYSTEM},
                     {"role": "user", "content": prompt_for(q)}],
        "response_format": {"type": "json_object"},
    }, {"Authorization": f"Bearer {key}"})
    out = parse_reply(body["choices"][0]["message"]["content"])
    u = body.get("usage", {})
    out["_tokens"] = (u.get("prompt_tokens", 0), u.get("completion_tokens", 0))
    return out


def ask_gemini(q: dict, model: str) -> dict:
    key = os.environ["GEMINI_API_KEY"]
    body = post(
        f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent",
        {
            "systemInstruction": {"parts": [{"text": SYSTEM}]},
            "contents": [{"parts": [{"text": prompt_for(q)}]}],
            "generationConfig": {"responseMimeType": "application/json"},
        },
        {"x-goog-api-key": key})
    text = body["candidates"][0]["content"]["parts"][0]["text"]
    out = parse_reply(text)
    u = body.get("usageMetadata", {})
    out["_tokens"] = (u.get("promptTokenCount", 0), u.get("candidatesTokenCount", 0))
    return out


# Dollars per million tokens (input, output). Update if the price list moves.
PRICES = {"openai": (1.25, 10.00), "gemini": (1.25, 10.00)}


def load(quiz: str) -> list[dict]:
    import glob
    for path in glob.glob(os.path.join(ROOT, "src", "data", "**", "*.ts"), recursive=True):
        if os.path.basename(path) in qc.SKIP:
            continue
        meta, questions = qc.parse_module(path)
        if meta["key"] == quiz:
            return questions
    sys.exit(f"no quiz with key {quiz!r}")


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--quiz", required=True)
    ap.add_argument("--openai-model", default="gpt-5")
    ap.add_argument("--gemini-model", default="gemini-2.5-pro")
    ap.add_argument("--providers", default="openai,gemini")
    ap.add_argument("--estimate", action="store_true",
                    help="print the projected cost and exit")
    a = ap.parse_args()

    questions = load(a.quiz)
    providers = [p.strip() for p in a.providers.split(",") if p.strip()]

    if a.estimate:
        chars = sum(len(prompt_for(q)) for q in questions)
        tin = chars / 4 + len(questions) * 120        # stems, choices, system prompt
        tout = len(questions) * 120
        total = sum(PRICES[p][0] * tin / 1e6 + PRICES[p][1] * tout / 1e6 for p in providers)
        print(f"{len(questions)} questions x {len(providers)} providers")
        print(f"projected: ~{tin:,.0f} in + ~{tout:,.0f} out per provider, about ${total:,.2f}")
        return

    for p in providers:
        var = "OPENAI_API_KEY" if p == "openai" else "GEMINI_API_KEY"
        if not os.environ.get(var):
            sys.exit(f"{var} is not set")

    askers = {"openai": (ask_openai, a.openai_model), "gemini": (ask_gemini, a.gemini_model)}
    results: dict[tuple[str, int], dict] = {}

    with cf.ThreadPoolExecutor(max_workers=6) as pool:
        futures = {}
        for i, q in enumerate(questions):
            for p in providers:
                fn, model = askers[p]
                futures[pool.submit(fn, q, model)] = (p, i)
        for fut in cf.as_completed(futures):
            p, i = futures[fut]
            try:
                results[(p, i)] = fut.result()
            except Exception as e:  # noqa: BLE001  one bad call must not sink the run
                results[(p, i)] = {"answer": "!", "confidence": "?", "note": str(e)[:200],
                                   "_tokens": (0, 0)}

    disagreements, low_conf, errors = [], [], []
    cost = 0.0
    for p in providers:
        tin = sum(results[(p, i)]["_tokens"][0] for i in range(len(questions)))
        tout = sum(results[(p, i)]["_tokens"][1] for i in range(len(questions)))
        cost += PRICES[p][0] * tin / 1e6 + PRICES[p][1] * tout / 1e6

    print(f"{a.quiz}: {len(questions)} questions, providers {', '.join(providers)}\n")
    for i, q in enumerate(questions):
        keyed = LETTERS[q["correctIndex"]]
        row = []
        for p in providers:
            r = results[(p, i)]
            said = str(r.get("answer", "?")).strip().upper()[:1]
            row.append((p, said, r))
            if said == "!":
                errors.append((q["id"], p, r["note"]))
            elif said != keyed:
                disagreements.append((q["id"], keyed, p, said, r.get("note", "")))
            elif str(r.get("confidence", "")).lower() == "low":
                low_conf.append((q["id"], p, r.get("note", "")))
        marks = " ".join(f"{p[0].upper()}:{s}" for p, s, _ in row)
        flag = "  <-- REVIEW" if any(s != keyed for _, s, _ in row) else ""
        print(f"  {i+1:>2}. {q['id']:<12} key {keyed}   {marks}{flag}")

    def section(title, items, fmt):
        print(f"\n{'='*72}\n{title}\n{'='*72}")
        if not items:
            print("  None.")
        for it in items:
            print(fmt(it))

    section("DISAGREEMENTS (a model chose a different letter)", disagreements,
            lambda d: f"  {d[0]}  key {d[1]}, {d[2]} said {d[3]}\n      {d[4]}")
    section("AGREED BUT LOW CONFIDENCE", low_conf,
            lambda d: f"  {d[0]}  ({d[1]})\n      {d[2]}")
    section("CALL ERRORS", errors, lambda d: f"  {d[0]}  ({d[1]}) {d[2]}")

    print(f"\nEstimated cost: ${cost:,.4f}")
    sys.exit(1 if disagreements or errors else 0)


if __name__ == "__main__":
    main()
