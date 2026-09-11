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
