import { afterEach, describe, expect, it, vi } from "vitest";
import { ActiveTimer, parseStudent, student } from "./analytics";

afterEach(() => window.history.replaceState({}, "", "/"));

describe("student identity from the Thinkific lesson URL", () => {
  it("reads the learner variables Thinkific interpolates", () => {
    expect(
      parseStudent("?email=jane%40example.com&first_name=Jane&last_name=Doe"),
    ).toEqual({ email: "jane@example.com", name: "Jane Doe" });
  });

  it("is fixed at page load, so a later navigation cannot blank it", () => {
    // The exit event fires after the reader has left, when the URL no longer
    // carries the learner variables.
    const before = student();
    window.history.replaceState({}, "", "/somewhere-else");
    expect(student()).toEqual(before);
  });

  it("ignores unreplaced liquid when the lesson has dynamic variables off", () => {
    // Thinkific sends the literal placeholder rather than omitting the param.
    expect(parseStudent("?email={{email}}&first_name={{first_name}}")).toEqual({
      email: null,
      name: null,
    });
  });

  it("returns nulls when no variables are passed at all", () => {
    expect(parseStudent("")).toEqual({ email: null, name: null });
  });

  it("handles an email with no name", () => {
    expect(parseStudent("?email=solo%40example.com")).toEqual({
      email: "solo@example.com",
      name: null,
    });
  });

  it("treats the string 'null' as absent", () => {
    expect(parseStudent("?email=null&first_name=null").email).toBeNull();
  });
});

describe("ActiveTimer", () => {
  it("accumulates only while running", () => {
    vi.useFakeTimers();
    try {
      const t = new ActiveTimer();
      vi.advanceTimersByTime(1000);
      t.pause();
      // Time spent hidden must not count towards time on the quiz.
      vi.advanceTimersByTime(5000);
      expect(t.elapsedMs()).toBe(1000);

      t.resume();
      vi.advanceTimersByTime(2000);
      expect(t.elapsedMs()).toBe(3000);
    } finally {
      vi.useRealTimers();
    }
  });

  it("is idempotent on repeated pause and resume", () => {
    vi.useFakeTimers();
    try {
      const t = new ActiveTimer();
      vi.advanceTimersByTime(500);
      t.pause();
      t.pause();
      vi.advanceTimersByTime(500);
      t.resume();
      t.resume();
      vi.advanceTimersByTime(500);
      expect(t.elapsedMs()).toBe(1000);
    } finally {
      vi.useRealTimers();
    }
  });
});
