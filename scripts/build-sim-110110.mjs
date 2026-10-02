/**
 * Generate src/data/sims/aicpa-far-tbs-110110.ts from the sources of record.
 *
 *   node scripts/build-sim-110110.mjs
 *
 * Nothing about this simulation is typed by hand. The grid, the keyed answers
 * and the prompt come from the question bundle; the exhibit HTML comes from the
 * video project, where every figure was checked against the AICPA PDFs; the
 * chapter times come from the publish pack. This script re-derives all six
 * subtotals and refuses to write the module if any figure disagrees with the
 * bundle's keyed grid, so a hand edit upstream cannot quietly change an answer.
 *
 * It reads from two places outside this repo. If either has moved, the script
 * says which one rather than emitting a half-built module.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const HOME = process.env.HOME;

const BUNDLE = `${HOME}/Dropbox/Mac/Desktop/Fixing Question Errors/tbs_bundles/110110.md`;
const EXHIBITS_JS =
  "/Volumes/Maxwell Backup Nov 2024/Video Animation Generator/tbs-110110/lib/exhibits.js";

for (const [label, path] of [["question bundle", BUNDLE], ["exhibit module", EXHIBITS_JS]]) {
  if (!existsSync(path)) {
    console.error(`Cannot find the ${label}:\n  ${path}`);
    if (path === EXHIBITS_JS) console.error("Is the backup drive mounted?");
    process.exit(1);
  }
}

const bundle = readFileSync(BUNDLE, "utf8");

/* ----------------------------------------------------------- exhibits ---- */

// The video module wraps every phrase the narration points at in .hl-wrap so
// the timeline can sweep a highlighter across it. On the practice page those
// spans carry no meaning, so they are unwrapped rather than restyled.
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(readFileSync(EXHIBITS_JS, "utf8"), ctx);
const EX = ctx.window.EXHIBITS;

const unwrap = (h) =>
  h
    .replace(/<span class="hl-wrap"(?: id="[^"]*")?>/g, "")
    .replace(/<\/span>/g, "")
    .replace(/ id="[a-z0-9-]+"/g, "")
    .replace(/\s+/g, " ")
    .replace(/> </g, "><")
    .trim();

// A seven-column table does not fit a phone. Each table gets its own scroller
// so the column the student needs is one swipe away, instead of the whole sheet
// scrolling sideways with the scrollbar stranded below the content.
const wrapTables = (h) =>
  h
    .replace(/<table(?![^>]*class="ex-)/g, '<div class="ex-scroll"><table')
    .replace(/<\/table>/g, "</table></div>");

const exhibits = [];
for (let n = 1; n <= 7; n++) {
  if (!EX[n]) throw new Error(`exhibit ${n} missing`);
  const html = wrapTables(unwrap(EX[n].html));
  if (/hl-wrap|\$\{/.test(html)) throw new Error(`exhibit ${n} not fully unwrapped`);
  exhibits.push(
    EX[n].cls
      ? { n, title: EX[n].title, cls: EX[n].cls, html }
      : { n, title: EX[n].title, html },
  );
}

// Figures the solve depends on. If the unwrap ever eats one, fail here rather
// than ship an exhibit a student cannot answer from.
const MUST_SURVIVE = [
  "30,000", "10% fee", "27,000", "1,500", "1,450", "$25", "$20", "140", "148",
  "$30", "$35", "6,000", "27,500", "155,000", "99,900", "10,000", "25,000",
  "75,000", "5,000", "4,500", "800", "85,300", "20,000", "95,000", "(70,000)", "65,000",
];
const allHtml = exhibits.map((e) => e.html).join(" ");
const lost = MUST_SURVIVE.filter((f) => !allHtml.includes(f));
if (lost.length) throw new Error(`figures lost from the exhibits: ${lost.join(", ")}`);

/* ------------------------------------------------------------- prompt ---- */

const prompt = bundle.match(/## Prompt\n\n([\s\S]*?)\n\n## /)[1].trim();

// The live player renders the prompt as a bold lead-in, two paragraphs and a
// five-item list, not the single block the bundle flattens it into. Rebuilt
// here from that same text, and checked below to reproduce it word for word.
const PROMPT_LEAD = "Scroll down to complete all parts of this task.";
const PROMPT_BODY =
  "Blear Co. is preparing its consolidated financial statements as of and for the year ended December 31, year 3. " +
  "The consolidated financial statements are expected to be issued on February 25, year 4. " +
  "Review the exhibits above to identify the adjustments, if any, to the draft consolidated statement of financial position as of December 31, year 3.";
const PROMPT_INTRO = "To adjust the draft consolidated statement of financial position:";
const PROMPT_BULLETS = [
  "Enter the amount associated with each adjustment in column D.",
  "Adjustments might not be required in some rows within the draft consolidated statement of financial position.",
  "Enter increases as positive whole values and decreases as negative whole values. If no adjustment is needed, then leave column D blank.",
  "If multiple adjustments affect a single financial statement line item, then enter the net amount of the adjustments in column D.",
  "Amounts in column E and subtotals will calculate automatically.",
];

const flat = (t) => t.replace(/\s+/g, " ").trim();
const rebuilt = [PROMPT_LEAD, PROMPT_BODY, PROMPT_INTRO, ...PROMPT_BULLETS].map(flat).join(" ");
if (rebuilt !== flat(prompt)) {
  throw new Error(
    "the rebuilt prompt does not reproduce the bundle's prompt word for word.\n" +
      `bundle:   ${flat(prompt)}\n` +
      `rebuilt:  ${rebuilt}`,
  );
}

const promptHtml =
  `<p><strong>${PROMPT_LEAD}</strong></p>` +
  `<p>${PROMPT_BODY}</p>` +
  `<p>${PROMPT_INTRO}</p>` +
  `<ul>${PROMPT_BULLETS.map((b) => `<li>${b}</li>`).join("")}</ul>`;

/* --------------------------------------------------------------- grid ---- */

// Chapter times come from tbs-110110/final/YOUTUBE-PUBLISH.md, where they were
// checked against the frames on both sides of each boundary. The video's own
// numbering differs from the written explanation's: the video does accounts
// payable third and PP&E fourth. These follow the video, because that is what
// the student has open beside the page.
const CH = {
  ar: { label: "Adjustment 1: Sale of receivables without recourse", seconds: 278 },
  inventory: { label: "Adjustment 2: Inventory count and lower of cost or market", seconds: 405 },
  ap: { label: "Adjustment 3: Accounts payable and accrued expenses cutoff", seconds: 619 },
  prepaid: { label: "Adjustment 4: PP&E vs prepaid maintenance contract", seconds: 782 },
  ppe: { label: "Adjustment 4: PP&E vs prepaid maintenance contract", seconds: 782 },
  intangibles: { label: "Adjustment 5: R&D costs in intangible assets", seconds: 869 },
  "retained-earnings": { label: "Adjustment 6: Retained earnings", seconds: 953 },
};

const S = (id, label) => ({ id, label, kind: "section" });
const I = (id, label, b, c, key) => ({
  id, label, kind: "input", b, c, key, ...(CH[id] ? { chapter: CH[id] } : {}),
});
const T = (id, label, sum) => ({ id, label, kind: "subtotal", sum });

const rows = [
  S("sec-ca", "Current assets"),
  I("cash", "Cash", 645000, 777000, 0),
  I("ar", "Accounts receivable (net)", 110500, 80100, -3000),
  I("inventory", "Inventory", 46250, 41700, -8260),
  I("prepaid", "Prepaid expenses", 4500, 2500, 5000),
  T("total-ca", "Total current assets", ["cash", "ar", "inventory", "prepaid"]),
  S("sec-nca", "Noncurrent assets"),
  I("ppe", "Property, plant and equipment (net)", 705000, 820000, -5000),
  I("intangibles", "Intangible assets (net)", 55000, 65000, -20000),
  T("total-assets", "Total assets", ["total-ca", "ppe", "intangibles"]),
  S("sec-cl", "Current liabilities"),
  I("ap", "Accounts payable and accrued expenses", 188300, 165000, 33500),
  I("cpltd", "Current portion of long-term debt", 0, 100000, 0),
  T("total-cl", "Total current liabilities", ["ap", "cpltd"]),
  S("sec-ncl", "Noncurrent liabilities"),
  I("ltd", "Long-term debt, less current portion", 400000, 200000, 0),
  T("total-liabilities", "Total liabilities", ["total-cl", "ltd"]),
  S("sec-se", "Shareholders' equity"),
  I("common-stock", "Common stock", 5000, 5000, 0),
  I("apic", "Additional paid-in capital", 210340, 225300, 0),
  I("retained-earnings", "Retained earnings", 748110, 1078600, -64760),
  I("aoci", "Accumulated other comprehensive income", 14500, 12400, 0),
  T("total-equity", "Total shareholders' equity", ["common-stock", "apic", "retained-earnings", "aoci"]),
  T("total-le", "Total liabilities and shareholders' equity", ["total-liabilities", "total-equity"]),
];

/* ------------------------------------------ check against the bundle ---- */

const keyed = {};
for (const m of bundle.matchAll(
  /^\| ([^|]+?) \| ([\d,]+) \| ([\d,]+) \| INPUT \[(-?\d+)\] \| INPUT \[(-?\d+)\] \|$/gm,
)) {
  keyed[m[1].trim()] = {
    b: +m[2].replace(/,/g, ""), c: +m[3].replace(/,/g, ""), d: +m[4], e: +m[5],
  };
}
const n = (v) => v ?? 0;
let checked = 0;
for (const r of rows) {
  if (r.kind === "section") continue;
  const k = keyed[r.label];
  if (!k) throw new Error(`no keyed row in the bundle for "${r.label}"`);
  if (r.kind === "input" && (n(r.b) !== k.b || n(r.c) !== k.c || n(r.key) !== k.d))
    throw new Error(`${r.label}: B/C/D disagree with the bundle`);
  checked++;
}
if (checked !== 19) throw new Error(`matched ${checked} rows, expected 19`);

const col = (pick) => {
  const v = {};
  for (const r of rows) if (r.kind === "input") v[r.id] = pick(r);
  for (let p = 0; p < rows.length; p++)
    for (const r of rows)
      if (r.kind === "subtotal" && r.sum.every((i) => i in v))
        v[r.id] = r.sum.reduce((s, i) => s + v[i], 0);
  return v;
};
const B = col((r) => n(r.b)), C = col((r) => n(r.c)), D = col((r) => n(r.key));
for (const r of rows) {
  if (r.kind !== "subtotal") continue;
  const k = keyed[r.label];
  if (B[r.id] !== k.b || C[r.id] !== k.c || D[r.id] !== k.d || C[r.id] + D[r.id] !== k.e)
    throw new Error(`${r.label}: computed subtotal disagrees with the bundle`);
}
for (const id of ["total-assets", "total-le"]) {
  if (D[id] !== -31260 || C[id] + D[id] !== 1755040)
    throw new Error(`${id} does not land on the acceptance figures`);
}

/* -------------------------------------------------------------- write ---- */

const ts = (s) => JSON.stringify(s);
const indent = (v) => JSON.stringify(v, null, 2).replace(/\n/g, "\n  ");

const out = `// GENERATED by scripts/build-sim-110110.mjs. Do not hand-edit.
//
// Official AICPA FAR task-based simulation 110110 (Blear Co.).
//
// Grid, prompt and keyed answers: Fixing Question Errors/tbs_bundles/110110.md
// Exhibit HTML:                   Video Animation Generator/tbs-110110/lib/exhibits.js
// Chapter times:                  tbs-110110/final/YOUTUBE-PUBLISH.md
//
// The build script re-derives every subtotal and refuses to emit this file if
// any figure disagrees with the bundle's keyed grid.
import type { Sim } from "../types";

/** The solve video. Chapter links stay hidden while this is null, rather than
 *  pointing at nothing. */
const VIDEO_URL: string | null = "https://youtu.be/OBAALgYjj9o";

export const aicpaFarTbs110110: Sim = {
  key: "aicpa-far-tbs-110110",
  title: "Official AICPA FAR Simulation: Blear Co.",
  subtitle: "Adjust a consolidated balance sheet from seven exhibits",
  credit:
    "Task-based simulation released publicly by the AICPA. Reproduced here for practice.",
  discipline: "far",
  videoUrl: VIDEO_URL,
  prompt: ${ts(prompt)},
  promptHtml: ${ts(promptHtml)},
  columns: {
    b: "Year 2 Balance",
    c: "Year 3 Unadjusted Balance",
    d: "Adjustment",
    e: "Year 3 Adjusted Balance",
  },
  exhibits: ${indent(exhibits)},
  rows: ${indent(rows)},
};
`;

const dir = join(ROOT, "src/data/sims");
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "aicpa-far-tbs-110110.ts"), out);

console.log(`19 rows checked against the bundle, 6 subtotals recomputed and matched`);
console.log(`prompt rebuilt and verified word for word against the bundle`);
console.log(`7 exhibits, ${MUST_SURVIVE.length} key figures present`);
console.log(`total assets D = ${D["total-assets"]}, E = ${C["total-assets"] + D["total-assets"]}`);
console.log(`wrote src/data/sims/aicpa-far-tbs-110110.ts`);
