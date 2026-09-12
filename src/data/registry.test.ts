import { describe, expect, it } from "vitest";
import {
  courseForPath,
  getHomeQuizLinks,
  getQuizLoader,
  quizHref,
} from "./registry";
import { cpaCatalog, intermediateCatalog, quizCatalog } from "./catalog";

describe("catalog and registry stay in step", () => {
  it("has a loader and a question count for every catalogued quiz", () => {
    const missing = quizCatalog.filter(
      (item) => !getQuizLoader(item.key, item.course),
    );
    expect(missing.map((m) => `${m.course}/${m.key}`)).toEqual([]);

    for (const course of ["cpa", "intermediate"] as const) {
      for (const link of getHomeQuizLinks(course)) {
        expect(link.questionCount, `${course}/${link.key}`).toBeGreaterThan(0);
      }
    }
  });

  it("keeps slugs unique within a course", () => {
    for (const catalog of [cpaCatalog, intermediateCatalog]) {
      const keys = catalog.map((c) => c.key);
      expect(new Set(keys).size).toBe(keys.length);
    }
  });

  it("lets the same slug exist in both courses", () => {
    // "leases" is a different quiz in each, which is why the registry is keyed
    // per course rather than by slug alone.
    expect(getQuizLoader("leases", "cpa")).toBeTruthy();
    expect(getQuizLoader("leases", "intermediate")).toBeTruthy();
    expect(getQuizLoader("leases", "cpa")).not.toBe(
      getQuizLoader("leases", "intermediate"),
    );
  });

  it("namespaces intermediate urls and leaves cpa urls at the root", () => {
    expect(quizHref({ key: "leases", course: "intermediate" })).toBe(
      "/intermediate/leases",
    );
    expect(quizHref({ key: "leases", course: "cpa" })).toBe("/leases");
  });

  it("resolves a path to its course", () => {
    expect(courseForPath("/intermediate/bonds")).toBe("intermediate");
    expect(courseForPath("/intermediate")).toBe("intermediate");
    expect(courseForPath("/leases")).toBe("cpa");
    expect(courseForPath("/")).toBe("cpa");
  });

  it("never cross-links between courses on an index page", () => {
    for (const course of ["cpa", "intermediate"] as const) {
      for (const link of getHomeQuizLinks(course)) {
        expect(link.course).toBe(course);
        const prefix = course === "intermediate" ? "/intermediate/" : "/";
        expect(link.href.startsWith(prefix)).toBe(true);
      }
    }
  });
});
