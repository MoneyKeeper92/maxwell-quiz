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
