import type { Quiz } from "./types";
import { quizCatalog, type QuizCatalogItem } from "./catalog";
import { cashToAccrualQuiz } from "./cash-to-accrual";
import { ratiosQuiz } from "./ratios";
import { leasesQuiz } from "./leases";
import { mostCommonFarQuiz } from "./most-common-far";
import { mostCommonAudQuiz } from "./most-common-aud";
import { mostCommonRegQuiz } from "./most-common-reg";
import { aicpaFar2026Quiz } from "./aicpa-far-2026";
import { aicpaAud2026Quiz } from "./aicpa-aud-2026";

const quizzes: Record<string, Quiz> = {
  cashtoaccrual: cashToAccrualQuiz,
  ratios: ratiosQuiz,
  leases: leasesQuiz,
  "most-common-far": mostCommonFarQuiz,
  "most-common-aud": mostCommonAudQuiz,
  "most-common-reg": mostCommonRegQuiz,
  "aicpa-far-2026": aicpaFar2026Quiz,
  "aicpa-aud-2026": aicpaAud2026Quiz,
};

export interface HomeQuizLink extends QuizCatalogItem {
  available: boolean;
  questionCount: number | null;
}

export function getHomeQuizLinks(): HomeQuizLink[] {
  return quizCatalog.map((item) => {
    const quiz = quizzes[item.key];
    return {
      ...item,
      available: !!quiz,
      questionCount: quiz?.questions.length ?? null,
    };
  });
}

export function getQuiz(key: string | undefined): Quiz | null {
  if (!key) return null;
  return quizzes[key] ?? null;
}

export { quizCatalog, getCatalogItem } from "./catalog";
