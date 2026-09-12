import type { Quiz } from "../data/types";

export interface Score {
  correct: number;
  incorrect: number;
  unanswered: number;
  total: number;
  percent: number;
}

/**
 * Scores an attempt.
 *
 * An unanswered question counts as incorrect, so correct and incorrect always
 * sum to the total and agree with the percentage the results page shows.
 */
export function scoreQuiz(quiz: Quiz, answers: (number | null)[]): Score {
  const total = quiz.questions.length;
  const correct = quiz.questions.reduce(
    (n, q, i) => (answers[i] === q.correctIndex ? n + 1 : n),
    0,
  );
  const unanswered = answers
    .slice(0, total)
    .filter((a) => a === null || a === undefined).length;
  return {
    correct,
    incorrect: total - correct,
    unanswered,
    total,
    percent: total === 0 ? 0 : Math.round((correct / total) * 100),
  };
}
