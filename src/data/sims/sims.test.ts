import { describe, expect, it } from "vitest";
import { getSimLoader, simCatalog, simKeyFromPath } from "./index";

describe("simKeyFromPath", () => {
  // Netlify serves the pre-rendered dist/<key>/index.html and redirects the
  // bare path to a trailing slash, so production and dev hand the router
  // different pathnames for the same page. This shipped broken once: the live
  // URL rendered "Not found" while localhost was fine.
  it("reads the key with no trailing slash, as in dev", () => {
    expect(simKeyFromPath("/aicpa-far-tbs-110110")).toBe("aicpa-far-tbs-110110");
  });

  it("reads the key with a trailing slash, as Netlify serves it", () => {
    expect(simKeyFromPath("/aicpa-far-tbs-110110/")).toBe("aicpa-far-tbs-110110");
  });

  it("survives doubled slashes at either end", () => {
    expect(simKeyFromPath("//aicpa-far-tbs-110110//")).toBe("aicpa-far-tbs-110110");
  });

  it("resolves a loader for every catalogued sim, both ways round", () => {
    for (const sim of simCatalog) {
      expect(getSimLoader(simKeyFromPath(`/${sim.key}`)), sim.key).toBeTruthy();
      expect(getSimLoader(simKeyFromPath(`/${sim.key}/`)), sim.key).toBeTruthy();
    }
  });

  it("still returns nothing for a path that is not a sim", () => {
    expect(getSimLoader(simKeyFromPath("/ratios/"))).toBeNull();
  });
});
