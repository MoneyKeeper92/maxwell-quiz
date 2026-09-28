import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SimRunner from "../components/SimRunner";
import type { Sim } from "../data/types";
import { getSimCatalogItem, getSimLoader } from "../data/sims";
import { useDocumentTitle } from "../lib/documentTitle";

type LoadState = "loading" | "ready" | "missing" | "error";

export default function SimPage() {
  // The route is a literal path rather than a param, so the key comes from
  // the location. useParams stays for when a second sim earns /:simKey.
  const { simKey: fromParam } = useParams<{ simKey: string }>();
  const simKey = fromParam ?? window.location.pathname.replace(/^\//, "");
  const [sim, setSim] = useState<Sim | null>(null);
  const [state, setState] = useState<LoadState>("loading");
  const item = getSimCatalogItem(simKey);
  useDocumentTitle(
    item ? `${item.title} | Free AICPA Practice | Maxwell CPA Review` : null,
  );

  useEffect(() => {
    const load = getSimLoader(simKey);
    if (!load) {
      setState("missing");
      return;
    }
    let cancelled = false;
    setState("loading");
    load()
      .then((loaded) => {
        if (cancelled) return;
        setSim(loaded);
        setState("ready");
      })
      .catch(() => {
        if (!cancelled) setState("error");
      });
    return () => {
      cancelled = true;
    };
  }, [simKey]);

  if (state === "ready" && sim) return <SimRunner key={sim.key} sim={sim} />;

  if (state === "loading") {
    return (
      <div className="quiz-loading" role="status" aria-live="polite">
        Loading {item?.title ?? "simulation"}…
      </div>
    );
  }

  return (
    <div className="not-found-card">
      <h1>{state === "error" ? "Couldn't load this simulation" : "Not found"}</h1>
      <p>
        {state === "error"
          ? "Check your connection and refresh the page."
          : "That simulation doesn't exist yet."}
      </p>
      <Link to="/" className="text-link">
        ← Back to all practice
      </Link>
    </div>
  );
}
