import { beforeEach, describe, expect, it, vi } from "vitest";
import { clearProgress, loadProgress, saveProgress, storageKey } from "./progress";
import type { Quiz } from "../data/types";

const quiz = {
  key: "leases",
  course: "intermediate",
  questions: [{}, {}, {}],
} as unknown as Quiz;

beforeEach(() => window.localStorage.clear());

describe("progress storage", () => {
  it("namespaces the key by course, so the two leases quizzes do not collide", () => {
    expect(storageKey(quiz)).toBe("maxwell-quiz:intermediate/leases");
    expect(storageKey({ key: "leases", course: "cpa" } as Quiz)).toBe(
      "maxwell-quiz:cpa/leases",
    );
  });

  it("round-trips an attempt", () => {
    saveProgress(quiz, { answers: [1, null, 3], index: 2, finished: false });
    expect(loadProgress(quiz)).toEqual({
      answers: [1, null, 3],
      index: 2,
      finished: false,
    });
  });

  it("returns null when nothing is stored", () => {
    expect(loadProgress(quiz)).toBeNull();
  });

  it("discards progress saved against a different question count", () => {
    // The quiz was re-imported with more questions; the old answers no longer map.
    window.localStorage.setItem(
      storageKey(quiz),
      JSON.stringify({ answers: [0, 1], index: 0, finished: false }),
    );
    expect(loadProgress(quiz)).toBeNull();
  });

  it("survives corrupt stored json", () => {
    window.localStorage.setItem(storageKey(quiz), "{not json");
    expect(loadProgress(quiz)).toBeNull();
  });

  it("rejects out-of-range answers and indexes rather than trusting them", () => {
    window.localStorage.setItem(
      storageKey(quiz),
      JSON.stringify({ answers: [9, -1, 2], index: 99, finished: true }),
    );
    expect(loadProgress(quiz)).toEqual({
      answers: [null, null, 2],
      index: 0,
      finished: true,
    });
  });

  it("does not throw when storage is blocked, as in a third-party iframe", () => {
    const boom = () => {
      throw new DOMException("blocked", "SecurityError");
    };
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(boom);
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(boom);
    vi.spyOn(Storage.prototype, "removeItem").mockImplementation(boom);

    expect(() => saveProgress(quiz, { answers: [], index: 0, finished: false })).not.toThrow();
    expect(loadProgress(quiz)).toBeNull();
    expect(() => clearProgress(quiz)).not.toThrow();
  });

  it("clears a stored attempt", () => {
    saveProgress(quiz, { answers: [0, 0, 0], index: 0, finished: true });
    clearProgress(quiz);
    expect(loadProgress(quiz)).toBeNull();
  });
});
