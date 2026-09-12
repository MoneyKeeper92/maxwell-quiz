import { describe, expect, it } from "vitest";
import { scoreQuiz } from "./score";
import type { Quiz } from "../data/types";

function quizOf(correctIndexes: number[]): Quiz {
  return {
    key: "test",
    title: "Test",
    subtitle: "Test",
    discipline: "far",
    course: "cpa",
    questions: correctIndexes.map((correctIndex, i) => ({
      id: String(i),
      prompt: `Q${i}`,
      choices: ["a", "b", "c", "d"],
      correctIndex,
    })),
  } as Quiz;
}

describe("scoreQuiz", () => {
  it("counts a fully correct attempt", () => {
    const s = scoreQuiz(quizOf([0, 1, 2]), [0, 1, 2]);
    expect(s).toMatchObject({ correct: 3, incorrect: 0, unanswered: 0, percent: 100 });
  });

  it("treats an unanswered question as incorrect", () => {
    const s = scoreQuiz(quizOf([0, 1, 2, 3]), [0, null, null, 3]);
    expect(s.correct).toBe(2);
    expect(s.unanswered).toBe(2);
    expect(s.incorrect).toBe(2);
  });

  it("keeps correct and incorrect summing to the total", () => {
    // The results page shows all three, so they have to agree.
    const quiz = quizOf([0, 1, 2, 3, 0, 1, 2, 3, 0, 1]);
    const answers = [0, 0, null, 3, 1, null, 2, 2, 0, null];
    const s = scoreQuiz(quiz, answers);
    expect(s.correct + s.incorrect).toBe(s.total);
  });

  it("matches the percentage shown on the donut", () => {
    const s = scoreQuiz(quizOf([0, 0, 0, 0]), [0, 0, null, 1]);
    expect(s.percent).toBe(50);
  });

  it("does not divide by zero on an empty quiz", () => {
    expect(scoreQuiz(quizOf([]), []).percent).toBe(0);
  });
});
