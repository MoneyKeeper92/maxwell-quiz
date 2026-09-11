import type { Course, Quiz } from "./types";

export interface QuizCatalogItem {
  key: string;
  title: string;
  subtitle: string;
  discipline: Quiz["discipline"];
  course: Course;
}

/** Free CPA-review quizzes, listed at "/". */
export const cpaCatalog: QuizCatalogItem[] = [
  {
    key: "aicpa-far-2026",
    title: "2026 Official AICPA FAR Questions",
    subtitle: "Released AICPA FAR multiple-choice questions",
    discipline: "far",
    course: "cpa",
  },
  {
    key: "aicpa-aud-2026",
    title: "2026 Official AICPA AUD Questions",
    subtitle: "Released AICPA AUD multiple-choice questions",
    discipline: "aud",
    course: "cpa",
  },
  {
    key: "aicpa-reg-2026",
    title: "2026 Official AICPA REG Questions",
    subtitle: "Released AICPA REG multiple-choice questions",
    discipline: "reg",
    course: "cpa",
  },
  {
    key: "most-common-far",
    title: "10 Most Common FAR Questions",
    subtitle: "High-frequency FAR MCQs across core topics",
    discipline: "far",
    course: "cpa",
  },
  {
    key: "most-common-aud",
    title: "10 Most Common AUD Questions",
    subtitle: "High-frequency AUD MCQs covering opinions, controls, and procedures",
    discipline: "aud",
    course: "cpa",
  },
  {
    key: "most-common-reg",
    title: "10 Most Common REG Questions",
    subtitle: "High-frequency REG MCQs covering basis, partnerships, and individual taxation",
    discipline: "reg",
    course: "cpa",
  },
  {
    key: "cashtoaccrual",
    title: "Cash to Accrual",
    subtitle: "Converting between cash and accrual basis",
    discipline: "far",
    course: "cpa",
  },
  {
    key: "ratios",
    title: "Ratios",
    subtitle: "Financial statement analysis and ratio interpretation",
    discipline: "far",
    course: "cpa",
  },
  {
    key: "leases",
    title: "Leases",
    subtitle: "Lessee and lessor accounting under ASC 842",
    discipline: "far",
    course: "cpa",
  },
];

/**
 * Intermediate Accounting course quizzes, listed at "/intermediate" and served
 * from "/intermediate/<key>". Each one is embedded in its own Thinkific lesson.
 *
 * Add quizzes with `npm run import-quiz` — it inserts entries at the marker below.
 */
export const intermediateCatalog: QuizCatalogItem[] = [
  {
    key: "conceptual-framework",
    title: "Conceptual Framework",
    subtitle: "Conceptual Framework",
    discipline: "intermediate",
    course: "intermediate",
  },
  {
    key: "adjusting-entries",
    title: "Adjusting Journal Entries / Accounting Cycle",
    subtitle: "Adjusting Journal Entries / Accounting Cycle",
    discipline: "intermediate",
    course: "intermediate",
  },
  {
    key: "financial-statements",
    title: "Financial Statements",
    subtitle: "Financial Statements",
    discipline: "intermediate",
    course: "intermediate",
  },
  {
    key: "time-value-of-money",
    title: "Time Value of Money",
    subtitle: "Time Value of Money",
    discipline: "intermediate",
    course: "intermediate",
  },
  {
    key: "revenue-recognition",
    title: "Revenue Recognition",
    subtitle: "Revenue Recognition",
    discipline: "intermediate",
    course: "intermediate",
  },
  {
    key: "cash",
    title: "Cash",
    subtitle: "Cash",
    discipline: "intermediate",
    course: "intermediate",
  },
  {
    key: "accounts-receivable",
    title: "Accounts Receivable",
    subtitle: "Accounts Receivable",
    discipline: "intermediate",
    course: "intermediate",
  },
  {
    key: "inventory",
    title: "Inventory",
    subtitle: "Inventory",
    discipline: "intermediate",
    course: "intermediate",
  },
  {
    key: "ppe",
    title: "Property, Plant & Equipment / Fixed Assets",
    subtitle: "Property, Plant & Equipment / Fixed Assets",
    discipline: "intermediate",
    course: "intermediate",
  },
  {
    key: "intangibles",
    title: "Intangible Assets, Impairment, R&D, and Software Costs",
    subtitle: "Intangible Assets, Impairment, R&D, and Software Costs",
    discipline: "intermediate",
    course: "intermediate",
  },
  {
    key: "payables",
    title: "Payables and Notes Payable",
    subtitle: "Payables and Notes Payable",
    discipline: "intermediate",
    course: "intermediate",
  },
  {
    key: "contingencies",
    title: "Subsequent Events and Contingencies",
    subtitle: "Subsequent Events and Contingencies",
    discipline: "intermediate",
    course: "intermediate",
  },
  {
    key: "bonds",
    title: "Bonds / Long-Term Debt",
    subtitle: "Bonds / Long-Term Debt",
    discipline: "intermediate",
    course: "intermediate",
  },
  {
    key: "investments",
    title: "Investments",
    subtitle: "Investments",
    discipline: "intermediate",
    course: "intermediate",
  },
  {
    key: "stockholders-equity",
    title: "Stockholders' Equity",
    subtitle: "Stockholders' Equity",
    discipline: "intermediate",
    course: "intermediate",
  },
  {
    key: "earnings-per-share",
    title: "Earnings Per Share",
    subtitle: "Earnings Per Share",
    discipline: "intermediate",
    course: "intermediate",
  },
  {
    key: "leases",
    title: "Leases",
    subtitle: "Leases",
    discipline: "intermediate",
    course: "intermediate",
  },
  {
    key: "income-taxes",
    title: "Accounting for Income Taxes",
    subtitle: "Accounting for Income Taxes",
    discipline: "intermediate",
    course: "intermediate",
  },
  {
    key: "accounting-changes",
    title: "Accounting Changes",
    subtitle: "Accounting Changes",
    discipline: "intermediate",
    course: "intermediate",
  },
  {
    key: "statement-of-cash-flows",
    title: "Statement of Cash Flows",
    subtitle: "Statement of Cash Flows",
    discipline: "intermediate",
    course: "intermediate",
  },
  // INTERMEDIATE_CATALOG_ENTRIES
];

export const quizCatalog: QuizCatalogItem[] = [...cpaCatalog, ...intermediateCatalog];

export function getCatalogForCourse(course: Course): QuizCatalogItem[] {
  return course === "intermediate" ? intermediateCatalog : cpaCatalog;
}

export function getCatalogItem(
  key: string | undefined,
  course?: Course,
): QuizCatalogItem | null {
  if (!key) return null;
  const pool = course ? getCatalogForCourse(course) : quizCatalog;
  return pool.find((item) => item.key === key) ?? null;
}
