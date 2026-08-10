import type { Quiz } from "./types";

export interface QuizCatalogItem {
  key: string;
  title: string;
  subtitle: string;
  discipline: Quiz["discipline"];
}

export const quizCatalog: QuizCatalogItem[] = [
  {
    key: "most-common-far",
    title: "10 Most Common FAR Questions",
    subtitle: "High-frequency FAR MCQs across core topics",
    discipline: "far",
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
