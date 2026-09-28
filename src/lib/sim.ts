/**
 * The simulation grid: reading what the student typed, and filling in
 * everything that calculates.
 *
 * Column E is always C + D, and a subtotal is the sum of the rows named in its
 * `sum` list. That is the whole model, which is why there is no per-cell
 * formula table: every cell in the AICPA grid follows one of those two rules.
 *
 * One deliberate difference from the live Django player: there, a given figure
 * contributes 0 to a subtotal, so the totals are wrong whenever a row is not
 * adjusted. Here a given figure counts. Do not "fix" this to match production.
 */

import type { Sim, SimRow } from "../data/types";

/** What the student has typed, keyed by row id. Raw strings, as typed. */
export type SimInputs = Record<string, string>;

/** Every row's four columns, after calculation. */
export interface SimComputed {
  b: Record<string, number>;
  c: Record<string, number>;
  d: Record<string, number>;
  e: Record<string, number>;
}

/**
 * A typed amount, or null when it is not a whole number.
 *
 * Accepts the three ways a candidate writes a negative: `-3000`, `-3,000` and
 * the accounting form `(3,000)`. Blank is zero, because the prompt says to
 * leave a row blank when no adjustment is needed.
 */
export function parseAmount(raw: string): number | null {
  const s = (raw ?? "").trim();
  if (!s) return 0;
  const negated = /^\(.*\)$/.test(s);
  const body = negated ? s.slice(1, -1) : s;
  const cleaned = body.replace(/[$,\s]/g, "");
  if (!/^[+-]?\d+$/.test(cleaned)) return null;
  const n = Number(cleaned);
  if (!Number.isFinite(n)) return null;
  return negated ? -Math.abs(n) : n;
}

/** True when the text is present but not a whole number. */
export function isMalformed(raw: string): boolean {
  return (raw ?? "").trim() !== "" && parseAmount(raw) === null;
}

/**
 * Fill in the grid.
 *
 * Subtotals can feed other subtotals (total current assets feeds total assets),
 * so the pass repeats until nothing changes. The row count bounds it, because
 * each pass resolves at least one more subtotal or the grid is cyclic.
 */
export function compute(sim: Sim, inputs: SimInputs): SimComputed {
  const b: Record<string, number> = {};
  const c: Record<string, number> = {};
  const d: Record<string, number> = {};

  for (const row of sim.rows) {
    if (row.kind === "section") continue;
    if (row.kind === "input") {
      b[row.id] = row.b ?? 0;
      c[row.id] = row.c ?? 0;
      d[row.id] = parseAmount(inputs[row.id] ?? "") ?? 0;
    }
  }

  const subtotals = sim.rows.filter((r) => r.kind === "subtotal");
  for (let pass = 0; pass <= subtotals.length; pass++) {
    let changed = false;
    for (const row of subtotals) {
      const ids = row.sum ?? [];
      if (!ids.every((id) => id in b)) continue;
      const add = (m: Record<string, number>) =>
        ids.reduce((sum, id) => sum + (m[id] ?? 0), 0);
      const nb = add(b);
      const nc = add(c);
      const nd = add(d);
      if (b[row.id] !== nb || c[row.id] !== nc || d[row.id] !== nd) changed = true;
      b[row.id] = nb;
      c[row.id] = nc;
      d[row.id] = nd;
    }
    if (!changed) break;
  }

  const e: Record<string, number> = {};
  for (const id of Object.keys(c)) e[id] = c[id] + d[id];
  return { b, c, d, e };
}

export interface SimResult {
  correct: string[];
  wrong: string[];
  score: number;
  total: number;
}

/** Grade the input rows. A blank row and a typed 0 are both right when the
 *  keyed adjustment is zero, which is what the prompt invites. */
export function grade(sim: Sim, inputs: SimInputs): SimResult {
  const correct: string[] = [];
  const wrong: string[] = [];
  for (const row of sim.rows) {
    if (row.kind !== "input") continue;
    const typed = parseAmount(inputs[row.id] ?? "");
    if (typed !== null && typed === (row.key ?? 0)) correct.push(row.id);
    else wrong.push(row.id);
  }
  return { correct, wrong, score: correct.length, total: correct.length + wrong.length };
}

export function inputRows(sim: Sim): SimRow[] {
  return sim.rows.filter((r) => r.kind === "input");
}

/** 1,755,040 and (31,260), the way the AICPA grid shows them. */
export function formatAmount(n: number, blankZero = false): string {
  if (n === 0 && blankZero) return "";
  const body = Math.abs(n).toLocaleString("en-US");
  return n < 0 ? `(${body})` : body;
}

/** "10:19" for a chapter link. */
export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}
