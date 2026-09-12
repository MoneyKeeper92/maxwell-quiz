# Maxwell Quiz

Free FAR practice quizzes for Maxwell CPA Review — deploy to Netlify at `quiz.maxwellstudy.com`.

## Quizzes

| URL path | Topic |
|----------|--------|
| `/cashtoaccrual` | Cash to Accrual |
| `/ratios` | Ratios |
| `/leases` | Leases |

## Local development

```bash
npm install
npm run dev
```

Home: http://localhost:5173/

## Adding a new quiz

1. Add an entry to `src/data/catalog.ts`.
2. Create `src/data/your-quiz.ts` exporting a `Quiz` object (see `cash-to-accrual.ts`).
3. Register it in `src/data/registry.ts`.

To import from Excel, use the same column layout as the existing spreadsheets (`QuestionText`, `Explanation`, `Choice1`–`Choice4`, `answer`).

## Netlify deploy

| Setting | Value |
|---------|--------|
| Build command | `npm run build` |
| Publish directory | `dist` |

SPA routing is configured in `netlify.toml`.

## Repo

Push to `MoneyKeeper92/maxwell-quiz` and connect the repo in Netlify for `quiz.maxwellstudy.com`.

## Intermediate Accounting course quizzes

Each quiz gets its own URL for embedding in a Thinkific multimedia lesson:

| URL | Purpose |
|-----|---------|
| `/intermediate` | Course index (all intermediate quizzes) |
| `/intermediate/<slug>` | One quiz, one Thinkific lesson |

Intermediate quizzes render **without the site header** and with tighter padding,
so they sit cleanly inside an iframe. They are also a completely separate catalog:
the CPA home page never lists them, and their results pages only cross-link to
other intermediate quizzes. `/leases` and `/intermediate/leases` are different
quizzes and do not collide.

### Adding quizzes

One sheet holding many topics — one quiz per `Topic` value, in sheet order:

```bash
npm run import-quiz -- "Intermediate Accounting Selected MCQs.xlsx" \
  --split-by-topic --slug-map scripts/intermediate-slugs.json
```

A single quiz from one sheet:

```bash
npm run import-quiz -- "Revenue Recognition.xlsx" \
  --key revenue-recognition --title "Revenue Recognition"
```

Add `--dry-run` to preview without writing anything.

Recognised columns (either naming is accepted):

| Field | Column header |
|-------|---------------|
| Question | `Question` or `QuestionText` |
| Choices | `Option A`–`Option D` or `Choice1`–`Choice4` |
| Answer | `Correct Answer` or `answer` — `B`, `2`, `Choice2`, or `B. full text` |
| Explanation | `Explanation` (plain text or HTML) |
| Id | `Question ID` or `ID` |
| Topic | `Topic` (only for `--split-by-topic`) |

`scripts/intermediate-slugs.json` maps topic names to URL slugs — edit it to
change a URL before the lesson is published.

The importer cross-checks the answer letter against the option text, reports the
A–D answer spread, and flags any question missing an explanation. Question stems
containing a table keep their real table markup instead of being flattened;
plain-text explanations are converted to HTML paragraphs.

### Registry is generated

`src/data/catalog.ts` is the hand-ordered source of truth for which quizzes
exist and in what order. `src/data/registry.ts` is generated from it:

```bash
npm run gen-registry
```

The importer runs this automatically. Quizzes are loaded with dynamic imports,
so opening one lesson downloads only that quiz (~250 kB entry bundle rather than
~1.9 MB).

### Thinkific embed

```html
<iframe src="https://quiz.maxwellstudy.com/intermediate/revenue-recognition"
        width="100%" height="900" style="border:0" loading="lazy"></iframe>
```

## Usage tracking and issue reports

Both features are optional. Without the env vars the quiz works exactly as
before: tracking silently no-ops and the report button hides itself.

### One-time setup

1. Run `supabase/01_quiz_events.sql` in the Supabase SQL editor. It creates the
   `quiz_events` table and an RLS policy allowing **insert only** for `anon`.
   With no select policy the data is write-only from the browser and readable
   only from the SQL editor or with the service role key.
2. In Netlify, add the environment variables from `.env.example`
   (Project configuration -> Environment variables), then redeploy. Vite inlines
   `VITE_*` at build time, so a redeploy is required for changes to take effect.

### What gets recorded

One row per event in `quiz_events`, grouped by `attempt_id` (one per opening of
a quiz):

| Event | When | Carries |
|-------|------|---------|
| `quiz_started` | quiz opens | total questions |
| `question_answered` | each answer | question id, correct or not |
| `quiz_submitted` | submit | score, active time |
| `quiz_exit` | tab hidden or closed before submitting | active time |

`active_ms` counts only time the quiz is actually on screen, so a lesson left
open in a background tab does not inflate it. Each event carries the running
total for its attempt, so reports aggregate with `max(active_ms)`.

### Identifying students

Turn on **Add dynamic variables to the URL** in the Thinkific multimedia lesson
and append the learner variables to the embed URL:

```
https://quiz.maxwellstudy.com/intermediate/leases?email={{email}}&first_name={{first_name}}&last_name={{last_name}}
```

The app reads these from the query string and stores them on each event, giving
exact per-student counts. Without them it falls back to a random per-browser id
kept in `localStorage`, which still measures sessions and time but counts one
student on two devices twice.

### Reading the data

`supabase/02_reports.sql` has ready-made queries: headline usage, per quiz,
hardest questions, daily usage, and reported questions. Paste any block into the
Supabase SQL editor.

### Issue reports

The button under each question writes to the shared `feedback` table with
`source = "quiz"` and `material_id` of the form `intermediate/leases#4940`.
`textbook` is NOT NULL on that table, so it carries the course name; the
precise location is in `material_id`. The
message carries the quiz, question number, question text, the keyed answer, what
the learner chose, and who reported it. Nothing new to set up: it is the same
table the textbook app already uses.

## Quality control

```bash
npm run qc                      # full report
npm run qc -- --course intermediate
npm run qc -- --only leases
npm run qc -- --json            # machine-readable, exits non-zero on findings
```

Three kinds of check across every question in the app:

| Kind | Catches |
|------|---------|
| `STRUCTURE` | missing ids, blank or duplicate choices, `correctIndex` out of range, missing explanations, duplicate prompts |
| `FORMATTING` | the house MCQ HTML standard (gradients, emoji, em dashes, journal-entry tables, marks alone in a block) plus stray table pipes and malformed tables or lists in stems |
| `AGREEMENT` | the explanation contradicting its own keyed answer |

`AGREEMENT` is the one that finds real mistakes. It does not solve the
accounting; it checks each question against itself. If the explanation says
"$270,000 - Correct" but the keyed choice is $258,000, one of them is wrong.
It only reports when the value the explanation calls correct belongs to a
*different* choice, so intermediate figures from the working do not trigger it.

What it cannot do is verify the accounting is right. That needs someone to
actually work the question.

### Advisory audit

```bash
npm run audit                   # statistical tells and content smells
npm run audit -- --course intermediate
```

Softer than `qc`: nothing it reports is automatically wrong, but it is good at
ranking what to re-read. It covers answer-position balance, the longest-choice
tell (prose questions only, since a longer dollar figure means nothing),
duplicate questions across quizzes, explanations that never mention their own
keyed answer, truncated stems, and all-of-the-above options.

### Normalizing pre-standard CPA explanations

```bash
npm run normalize-cpa                             # report
npm run normalize-cpa -- --apply                  # rewrite presentation only
npm run normalize-cpa -- --apply --drop-journal-entries
```

The CPA explanations were authored before the house standard. This flattens
gradients to the mapped solid colors, removes emoji (keeping the check and
cross marks), replaces em and en dashes, and drops outer `max-width` and auto
margins. Journal-entry removal deletes content, so it is a separate opt-in.
