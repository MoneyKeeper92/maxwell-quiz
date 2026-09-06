import type { Quiz } from "./types";

export interface QuizCatalogItem {
  key: string;
  title: string;
  subtitle: string;
  discipline: Quiz["discipline"];
}

export const quizCatalog: QuizCatalogItem[] = [
  {
    key: "aicpa-far-2026",
    title: "2026 Official AICPA FAR Questions",
    subtitle: "Released AICPA FAR multiple-choice questions",
    discipline: "far",
  },
  {
    key: "aicpa-aud-2026",
    title: "2026 Official AICPA AUD Questions",
    subtitle: "Released AICPA AUD multiple-choice questions",
    discipline: "aud",
  },
  {
    key: "aicpa-reg-2026",
    title: "2026 Official AICPA REG Questions",
    subtitle: "Released AICPA REG multiple-choice questions",
    discipline: "reg",
  },
  {
    key: "most-common-far",
    title: "10 Most Common FAR Questions",
    subtitle: "High-frequency FAR MCQs across core topics",
    discipline: "far",
  },
  {
    key: "most-common-aud",
    title: "10 Most Common AUD Questions",
    subtitle: "High-frequency AUD MCQs covering opinions, controls, and procedures",
    discipline: "aud",
  },
  {
    key: "most-common-reg",
    title: "10 Most Common REG Questions",
    subtitle: "High-frequency REG MCQs covering basis, partnerships, and individual taxation",
    discipline: "reg",
  },
  {
    key: "cashtoaccrual",
    title: "Cash to Accrual",
    subtitle: "Converting between cash and accrual basis",
    discipline: "far",
  },
  {
    key: "ratios",
    title: "Ratios",
    subtitle: "Financial statement analysis and ratio interpretation",
    discipline: "far",
  },
  {
    key: "leases",
    title: "Leases",
    subtitle: "Lessee and lessor accounting under ASC 842",
    discipline: "far",
  },
];

export function getCatalogItem(key: string | undefined): QuizCatalogItem | null {
  if (!key) return null;
  return quizCatalog.find((item) => item.key === key) ?? null;
}
