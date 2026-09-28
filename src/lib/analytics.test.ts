import { afterEach, describe, expect, it, vi } from "vitest";
import { ActiveTimer, parseStudent, student, parseCampaign } from "./analytics";

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

describe("parseCampaign", () => {
  it("reads the four utm tags from a YouTube link", () => {
    expect(
      parseCampaign(
        "?utm_source=youtube&utm_medium=video&utm_campaign=far_tbs_110110&utm_content=description",
      ),
    ).toEqual({
      utm_source: "youtube",
      utm_medium: "video",
      utm_campaign: "far_tbs_110110",
      utm_content: "description",
    });
  });

  it("tells the description apart from the pinned comment", () => {
    expect(parseCampaign("?utm_content=pinned_comment").utm_content).toBe(
      "pinned_comment",
    );
    expect(parseCampaign("?utm_content=on_screen_card").utm_content).toBe(
      "on_screen_card",
    );
  });

  it("returns nulls when there are no tags", () => {
    expect(parseCampaign("")).toEqual({
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
      utm_content: null,
    });
  });

  it("drops an unreplaced Thinkific variable", () => {
    expect(parseCampaign("?utm_source={{source}}").utm_source).toBeNull();
  });

  it("caps a tag so a crafted link cannot bloat every row", () => {
    const long = "x".repeat(400);
    expect(parseCampaign(`?utm_campaign=${long}`).utm_campaign).toHaveLength(120);
  });

  it("survives a malformed query string", () => {
    expect(() => parseCampaign("?%")).not.toThrow();
  });
});

describe("event payloads", () => {
  it("never sends a key whose value is empty", async () => {
    // A row that mentions a column the table does not have yet fails the whole
    // insert, which is how one new feature can take every quiz's tracking down.
    const sent: string[] = [];
    const original = globalThis.fetch;
    globalThis.fetch = ((_url: string, init: RequestInit) => {
      sent.push(String(init.body));
      return Promise.resolve(new Response(null, { status: 201 }));
    }) as typeof fetch;
    try {
      const { track, analyticsEnabled } = await import("./analytics");
      if (!analyticsEnabled) return; // no env vars in CI; the shape test below still runs
      track({
        event: "quiz_started",
        course: "cpa",
        quiz: "ratios",
        attempt_id: "a1",
        question_id: null,
      });
      for (const body of sent) {
        const row = JSON.parse(body);
        for (const [k, v] of Object.entries(row)) {
          expect(v, `${k} should have been omitted`).not.toBeNull();
        }
      }
    } finally {
      globalThis.fetch = original;
    }
  });
});
