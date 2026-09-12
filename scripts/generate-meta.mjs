/**
 * Emit a real HTML file per quiz route after the Vite build.
 *
 * The app is a single page, so every one of the 29 quiz URLs served the same
 * title and description. Setting them from React fixes the browser tab but not
 * sharing: the scrapers behind link previews do not run JavaScript, and search
 * engines index the generic copy.
 *
 * Netlify serves a matching file before falling back to the /* rewrite, so
 * writing dist/<slug>/index.html gives each quiz its own metadata while still
 * booting the same bundle.
 *
 * Run as part of `npm run build`.
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const SITE = "https://quiz.maxwellstudy.com";

const escape = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function readCatalog() {
  const src = readFileSync(join(ROOT, "src/data/catalog.ts"), "utf8");
  const entries = [];
  const re =
    /\{\s*key:\s*"([^"]+)",\s*title:\s*"((?:[^"\\]|\\.)*)",\s*subtitle:\s*"((?:[^"\\]|\\.)*)",[\s\S]*?course:\s*"([^"]+)",\s*\}/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    entries.push({
      key: m[1],
      title: m[2].replace(/\\"/g, '"'),
      subtitle: m[3].replace(/\\"/g, '"'),
      course: m[4],
    });
  }
  return entries;
}

function readCounts() {
  const src = readFileSync(join(ROOT, "src/data/registry.ts"), "utf8");
  const counts = {};
  for (const m of src.matchAll(/"((?:cpa|intermediate)\/[a-z0-9-]+)":\s*(\d+)/g)) {
    counts[m[1]] = Number(m[2]);
  }
  return counts;
}

function describe(entry, count) {
  const n = count ? `${count} free practice questions` : "Free practice questions";
  const where =
    entry.course === "intermediate"
      ? "for Intermediate Accounting"
      : "for the CPA exam";
  return `${n} on ${entry.title} ${where}, each with a worked answer explanation. From Maxwell CPA Review.`;
}

function page(shell, { title, description, url }) {
  const head = [
    `<title>${escape(title)}</title>`,
    `<meta name="description" content="${escape(description)}" />`,
    `<link rel="canonical" href="${escape(url)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Maxwell CPA Review" />`,
    `<meta property="og:title" content="${escape(title)}" />`,
    `<meta property="og:description" content="${escape(description)}" />`,
    `<meta property="og:url" content="${escape(url)}" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${escape(title)}" />`,
    `<meta name="twitter:description" content="${escape(description)}" />`,
  ].join("\n    ");

  return shell
    .replace(/<title>[\s\S]*?<\/title>/, "__TITLE__")
    .replace(/\s*<meta\s+name="description"[\s\S]*?\/>/, "")
    .replace("__TITLE__", head);
}

const shell = readFileSync(join(DIST, "index.html"), "utf8");
const counts = readCounts();
const entries = readCatalog();
let written = 0;

for (const entry of entries) {
  const count = counts[`${entry.course}/${entry.key}`];
  if (!count) continue; // catalogued but no questions yet
  const path = entry.course === "intermediate"
    ? `/intermediate/${entry.key}`
    : `/${entry.key}`;
  const title = `${entry.title} — ${count} Practice Questions | Maxwell CPA Review`;
  const html = page(shell, {
    title,
    description: describe(entry, count),
    url: SITE + path,
  });
  const dir = join(DIST, path.slice(1));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html);
  written++;
}

// The Intermediate index deserves its own copy too.
mkdirSync(join(DIST, "intermediate"), { recursive: true });
writeFileSync(
  join(DIST, "intermediate/index.html"),
  page(shell, {
    title: "Intermediate Accounting Practice Quizzes | Maxwell CPA Review",
    description:
      "Twenty free Intermediate Accounting practice quizzes covering the full course, from the conceptual framework to the statement of cash flows, each with worked answer explanations.",
    url: SITE + "/intermediate",
  }),
);
written++;

console.log(`generate-meta: wrote ${written} pre-rendered route files`);
