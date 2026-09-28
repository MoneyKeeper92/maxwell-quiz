import { describe, expect, it } from "vitest";
import { aicpaFarTbs110110 as sim } from "../data/sims/aicpa-far-tbs-110110";
import {
  compute,
  formatAmount,
  formatTime,
  grade,
  inputRows,
  isMalformed,
  parseAmount,
} from "./sim";

/** The keyed run: every adjustment typed, nothing else. */
function keyedInputs(): Record<string, string> {
  const out: Record<string, string> = {};
  for (const row of inputRows(sim)) {
    if ((row.key ?? 0) !== 0) out[row.id] = String(row.key);
  }
  return out;
}

describe("parseAmount", () => {
  it("reads a plain number", () => {
    expect(parseAmount("33500")).toBe(33500);
  });

  it("treats blank as zero, which is what the prompt invites", () => {
    expect(parseAmount("")).toBe(0);
    expect(parseAmount("   ")).toBe(0);
  });

  it("reads the three ways a candidate writes a negative", () => {
    expect(parseAmount("-3000")).toBe(-3000);
    expect(parseAmount("-3,000")).toBe(-3000);
    expect(parseAmount("(3,000)")).toBe(-3000);
  });

  it("tolerates a dollar sign and stray spaces", () => {
    expect(parseAmount(" $5,000 ")).toBe(5000);
  });

  it("rejects decimals, because the prompt asks for whole values", () => {
    expect(parseAmount("3000.50")).toBeNull();
    expect(isMalformed("3000.50")).toBe(true);
  });

  it("rejects text", () => {
    expect(parseAmount("none")).toBeNull();
    expect(parseAmount("-")).toBeNull();
  });

  it("does not call blank malformed", () => {
    expect(isMalformed("")).toBe(false);
  });
});

describe("the 110110 grid", () => {
  it("has 13 rows the student types and 6 that calculate", () => {
    expect(inputRows(sim)).toHaveLength(13);
    expect(sim.rows.filter((r) => r.kind === "subtotal")).toHaveLength(6);
  });

  it("carries all seven exhibits", () => {
    expect(sim.exhibits.map((e) => e.n)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    for (const ex of sim.exhibits) expect(ex.html.length).toBeGreaterThan(400);
  });

  it("ties out before any adjustment is entered", () => {
    const c = compute(sim, {});
    // The draft balance sheet balances: assets equal liabilities plus equity.
    expect(c.b["total-assets"]).toBe(1566250);
    expect(c.b["total-le"]).toBe(1566250);
    expect(c.c["total-assets"]).toBe(1786300);
    expect(c.c["total-le"]).toBe(1786300);
  });

  it("lands on the acceptance figures when the key is typed", () => {
    const c = compute(sim, keyedInputs());
    expect(c.d["total-assets"]).toBe(-31260);
    expect(c.e["total-assets"]).toBe(1755040);
    expect(c.d["total-le"]).toBe(-31260);
    expect(c.e["total-le"]).toBe(1755040);
  });

  it("still balances after the adjustments", () => {
    const c = compute(sim, keyedInputs());
    expect(c.e["total-assets"]).toBe(c.e["total-le"]);
  });

  it("makes column E equal C plus D on every row, blank D included", () => {
    const c = compute(sim, keyedInputs());
    for (const row of sim.rows) {
      if (row.kind === "section") continue;
      expect(c.e[row.id]).toBe(c.c[row.id] + c.d[row.id]);
    }
  });

  it("counts a given figure toward its subtotal", () => {
    // The live Django player has a bug where an unadjusted row contributes 0.
    // Cash is never adjusted, so if it were dropped total current assets would
    // fall short by 777,000.
    const c = compute(sim, keyedInputs());
    expect(c.e["total-ca"]).toBe(895040);
  });

  it("recalculates subtotals that feed other subtotals", () => {
    const c = compute(sim, { ap: "33500" });
    expect(c.d["total-cl"]).toBe(33500);
    expect(c.d["total-liabilities"]).toBe(33500);
    expect(c.d["total-le"]).toBe(33500);
  });
});

describe("grading", () => {
  it("scores 13 of 13 for the key with the other rows left blank", () => {
    const r = grade(sim, keyedInputs());
    expect(r.score).toBe(13);
    expect(r.total).toBe(13);
    expect(r.wrong).toEqual([]);
  });

  it("accepts (3,000) and -3000 alike", () => {
    for (const written of ["-3000", "-3,000", "(3,000)", "($3,000)"]) {
      const r = grade(sim, { ...keyedInputs(), ar: written });
      expect(r.wrong, `${written} should be accepted`).toEqual([]);
    }
  });

  it("accepts a typed 0 where the key is no adjustment", () => {
    const r = grade(sim, { ...keyedInputs(), cash: "0" });
    expect(r.wrong).toEqual([]);
  });

  it("marks only the row that is wrong", () => {
    const r = grade(sim, { ...keyedInputs(), inventory: "-8500" });
    expect(r.wrong).toEqual(["inventory"]);
    expect(r.score).toBe(12);
  });

  it("marks an empty sheet 6 of 13, the rows whose key is zero", () => {
    const r = grade(sim, {});
    expect(r.score).toBe(6);
  });

  it("treats a malformed entry as wrong rather than as zero", () => {
    const r = grade(sim, { ...keyedInputs(), ar: "minus three thousand" });
    expect(r.wrong).toEqual(["ar"]);
  });
});

describe("formatting", () => {
  it("brackets negatives the way the grid does", () => {
    expect(formatAmount(-31260)).toBe("(31,260)");
    expect(formatAmount(1755040)).toBe("1,755,040");
  });

  it("can blank a zero", () => {
    expect(formatAmount(0)).toBe("0");
    expect(formatAmount(0, true)).toBe("");
  });

  it("writes chapter times the way YouTube does", () => {
    expect(formatTime(619)).toBe("10:19");
    expect(formatTime(278)).toBe("4:38");
    expect(formatTime(1032)).toBe("17:12");
  });
});

describe("video chapters", () => {
  it("points every adjusted row at a chapter", () => {
    for (const row of inputRows(sim)) {
      if ((row.key ?? 0) === 0) continue;
      expect(row.chapter, `${row.label} needs a chapter`).toBeTruthy();
    }
  });

  it("leaves unadjusted rows without one", () => {
    for (const row of inputRows(sim)) {
      if ((row.key ?? 0) === 0) expect(row.chapter).toBeUndefined();
    }
  });
});
