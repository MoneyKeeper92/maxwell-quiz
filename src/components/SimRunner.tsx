import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Sim, SimRow } from "../data/types";
import ReportIssueButton from "./ReportIssueButton";
import { feedbackEnabled, submitReport } from "../lib/feedback";
import { ActiveTimer, newAttemptId, track } from "../lib/analytics";
import {
  compute,
  formatAmount,
  formatTime,
  grade,
  inputRows,
  isMalformed,
  parseAmount,
  type SimInputs,
} from "../lib/sim";

interface SimRunnerProps {
  sim: Sim;
}

/** Chapter deep link, e.g. ...&t=619s */
function chapterHref(videoUrl: string, seconds: number): string {
  const sep = videoUrl.includes("?") ? "&" : "?";
  return `${videoUrl}${sep}t=${seconds}s`;
}

export default function SimRunner({ sim }: SimRunnerProps) {
  const [inputs, setInputs] = useState<SimInputs>({});
  const [openExhibit, setOpenExhibit] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const [helpful, setHelpful] = useState<"yes" | "no" | null>(null);
  const [helpfulNote, setHelpfulNote] = useState("");
  const [helpfulSent, setHelpfulSent] = useState(false);

  const attemptId = useMemo(() => newAttemptId(), []);
  const timer = useMemo(() => new ActiveTimer(), []);
  const resultsRef = useRef<HTMLDivElement>(null);
  const openedExhibits = useRef(new Set<number>());

  const computed = useMemo(() => compute(sim, inputs), [sim, inputs]);
  const result = useMemo(() => grade(sim, inputs), [sim, inputs]);
  const rows = inputRows(sim);

  const base = { course: "cpa", quiz: sim.key, attempt_id: attemptId };

  useEffect(() => {
    track({ event: "sim_started", ...base, total_count: rows.length });
    // One event per opening of the page; the id makes it one attempt.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Time on screen, and one exit event per departure. The quiz runner learned
     the same two lessons: pause when the tab is hidden, and guard against
     visibilitychange and pagehide both firing for a single departure. */
  useEffect(() => {
    let lastExitMs = 0;
    const onVisibility = () => {
      if (document.visibilityState === "hidden") {
        timer.pause();
        reportExit();
      } else {
        timer.resume();
      }
    };
    const reportExit = () => {
      const ms = timer.elapsedMs();
      if (ms < 1000 || ms <= lastExitMs) return;
      lastExitMs = ms;
      track({ event: "quiz_exit", ...base, active_ms: ms }, true);
    };
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", reportExit);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", reportExit);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setCell = useCallback((id: string, value: string) => {
    setInputs((prev) => ({ ...prev, [id]: value }));
  }, []);

  const toggleExhibit = (n: number) => {
    setOpenExhibit((prev) => {
      const next = prev === n ? null : n;
      if (next !== null && !openedExhibits.current.has(next)) {
        openedExhibits.current.add(next);
        track({
          event: "exhibit_opened",
          ...base,
          question_index: next,
          detail: { exhibit: next, title: sim.exhibits[next - 1]?.title },
        });
      }
      return next;
    });
  };

  const check = () => {
    setChecked(true);
    track({
      event: "sim_submitted",
      ...base,
      correct_count: result.score,
      total_count: result.total,
      active_ms: timer.elapsedMs(),
      detail: {
        cells: rows.map((r) => ({
          row: r.id,
          typed: (inputs[r.id] ?? "").trim() || null,
          value: parseAmount(inputs[r.id] ?? ""),
          key: r.key ?? 0,
          correct: result.correct.includes(r.id),
        })),
        exhibits_opened: [...openedExhibits.current].sort((a, b) => a - b),
      },
    });
    window.setTimeout(
      () => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
      0,
    );
  };

  const reset = () => {
    setInputs({});
    setChecked(false);
    setShowKey(false);
  };

  const sendHelpful = async (verdict: "yes" | "no") => {
    setHelpful(verdict);
    if (!feedbackEnabled) return;
    await submitReport(
      {
        course: "cpa",
        quiz: sim.key,
        quizTitle: sim.title,
        questionId: "practice-alongside",
        questionIndex: 0,
        prompt: "Did practicing alongside the video help?",
        selectedLetter: verdict,
        correctLetter: "n/a",
        kind: "row",
      },
      `Practising alongside the video helped: ${verdict}. Scored ${result.score} of ${result.total}.${
        helpfulNote.trim() ? `\n\n${helpfulNote.trim()}` : ""
      }`,
    );
    setHelpfulSent(true);
  };

  const exhibit = openExhibit === null ? null : sim.exhibits[openExhibit - 1];
  const malformed = rows.some((r) => isMalformed(inputs[r.id] ?? ""));

  const cellState = (row: SimRow): "right" | "wrong" | null => {
    if (!checked) return null;
    return result.correct.includes(row.id) ? "right" : "wrong";
  };

  return (
    <div className="sim">
      <header className="sim-head">
        <p className="sim-eyebrow">Official AICPA FAR Simulation</p>
        <h1>{sim.title}</h1>
        <p className="sim-credit">{sim.credit}</p>
        {sim.videoUrl && (
          <a
            className="sim-video-link"
            href={sim.videoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Watch the full walkthrough
          </a>
        )}
      </header>

      <section className="sim-exhibits" aria-label="Exhibits">
        <h2 className="sim-h2">Exhibits</h2>
        <div className="sim-exhibit-tabs">
          {sim.exhibits.map((ex) => (
            <button
              key={ex.n}
              type="button"
              className={`sim-exhibit-tab${openExhibit === ex.n ? " is-open" : ""}`}
              onClick={() => toggleExhibit(ex.n)}
              aria-expanded={openExhibit === ex.n}
            >
              <span className="sim-exhibit-n">Exhibit {ex.n}</span>
              <span className="sim-exhibit-title">{ex.title}</span>
            </button>
          ))}
        </div>
      </section>

      <div className={`sim-body${exhibit ? " has-panel" : ""}`}>
        <div className="sim-main">
          <section className="sim-prompt">
            <h2 className="sim-h2">Instructions</h2>
            <p>{sim.prompt}</p>
          </section>

          <div className="sim-grid-wrap">
            <table className="sim-grid">
              <caption className="sim-sr">
                Draft consolidated statement of financial position. Type each
                adjustment in the Adjustment column; the last column and the
                subtotals calculate automatically.
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="sim-col-label" />
                  <th scope="col">{sim.columns.b}</th>
                  <th scope="col">{sim.columns.c}</th>
                  <th scope="col" className="sim-col-d">
                    {sim.columns.d}
                  </th>
                  <th scope="col">{sim.columns.e}</th>
                </tr>
              </thead>
              <tbody>
                {sim.rows.map((row) => {
                  if (row.kind === "section") {
                    return (
                      <tr key={row.id} className="sim-section">
                        <th scope="colgroup" colSpan={5}>
                          {row.label}
                        </th>
                      </tr>
                    );
                  }
                  const isTotal = row.kind === "subtotal";
                  const state = isTotal ? null : cellState(row);
                  return (
                    <tr key={row.id} className={isTotal ? "sim-total" : undefined}>
                      <th scope="row" className="sim-col-label">
                        {row.label}
                      </th>
                      <td className="sim-num">{formatAmount(computed.b[row.id] ?? 0)}</td>
                      <td className="sim-num">{formatAmount(computed.c[row.id] ?? 0)}</td>
                      <td className="sim-num sim-col-d">
                        {isTotal ? (
                          <span className="sim-calc">
                            {formatAmount(computed.d[row.id] ?? 0, true)}
                          </span>
                        ) : (
                          <span className="sim-input-wrap">
                            <input
                              type="text"
                              inputMode="text"
                              autoComplete="off"
                              className={`sim-input${
                                state ? ` is-${state}` : ""
                              }${isMalformed(inputs[row.id] ?? "") ? " is-bad" : ""}`}
                              aria-label={`${sim.columns.d} for ${row.label}`}
                              value={inputs[row.id] ?? ""}
                              onChange={(e) => setCell(row.id, e.target.value)}
                            />
                            {state && (
                              <span
                                className={`sim-mark sim-mark-${state}`}
                                aria-hidden="true"
                              >
                                {state === "right" ? "✓" : "✗"}
                              </span>
                            )}
                          </span>
                        )}
                      </td>
                      <td className="sim-num sim-col-e">
                        <span className="sim-calc">
                          {formatAmount(computed.e[row.id] ?? 0)}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {malformed && (
            <p className="sim-warn" role="status">
              Whole dollars only. Enter increases as positive and decreases as
              negative, for example <code>-3000</code> or <code>(3,000)</code>.
            </p>
          )}

          <div className="sim-actions">
            <button type="button" className="btn-results" onClick={check}>
              Check my answers
            </button>
            {checked && (
              <button type="button" className="sim-reset" onClick={reset}>
                Start over
              </button>
            )}
          </div>

          {checked && (
            <div className="sim-results" ref={resultsRef}>
              <h2 className="sim-h2">
                {result.score} of {result.total} correct
              </h2>
              <p className="sim-results-note">
                Only the {result.total} rows you type are graded. Subtotals and
                the adjusted balance column calculate from them.
              </p>

              {result.wrong.length > 0 && (
                <ul className="sim-wrong-list">
                  {rows
                    .filter((r) => result.wrong.includes(r.id))
                    .map((r) => (
                      <li key={r.id}>
                        <span className="sim-wrong-label">{r.label}</span>
                        {showKey && (
                          <span className="sim-wrong-key">
                            keyed {formatAmount(r.key ?? 0) || "no adjustment"}
                          </span>
                        )}
                        {sim.videoUrl && r.chapter && (
                          <a
                            className="sim-chapter"
                            href={chapterHref(sim.videoUrl, r.chapter.seconds)}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {r.chapter.label} ({formatTime(r.chapter.seconds)})
                          </a>
                        )}
                      </li>
                    ))}
                </ul>
              )}

              {!showKey ? (
                <button
                  type="button"
                  className="sim-reset"
                  onClick={() => setShowKey(true)}
                >
                  Show the keyed answers
                </button>
              ) : (
                <div className="sim-key">
                  <h3 className="sim-h3">Keyed adjustments</h3>
                  <ul>
                    {rows.map((r) => (
                      <li key={r.id}>
                        <span>{r.label}</span>
                        <span className="sim-num">
                          {(r.key ?? 0) === 0
                            ? "no adjustment"
                            : formatAmount(r.key ?? 0)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {feedbackEnabled && (
                <div className="sim-helpful">
                  {helpfulSent ? (
                    <p role="status">Thanks, that is useful.</p>
                  ) : (
                    <>
                      <p className="sim-helpful-q">
                        Did practicing alongside the video help?
                      </p>
                      <div className="sim-helpful-actions">
                        <button
                          type="button"
                          className={`sim-reset${helpful === "yes" ? " is-on" : ""}`}
                          onClick={() => void sendHelpful("yes")}
                        >
                          Yes
                        </button>
                        <button
                          type="button"
                          className={`sim-reset${helpful === "no" ? " is-on" : ""}`}
                          onClick={() => void sendHelpful("no")}
                        >
                          No
                        </button>
                      </div>
                      <textarea
                        className="report-textarea"
                        rows={2}
                        placeholder="Anything else? (optional)"
                        value={helpfulNote}
                        onChange={(e) => setHelpfulNote(e.target.value)}
                      />
                    </>
                  )}
                </div>
              )}

              <ReportIssueButton
                context={{
                  course: "cpa",
                  quiz: sim.key,
                  quizTitle: sim.title,
                  questionId: result.wrong[0] ?? rows[0].id,
                  questionIndex: 0,
                  prompt:
                    rows.find((r) => r.id === (result.wrong[0] ?? rows[0].id))
                      ?.label ?? "",
                  selectedLetter:
                    (inputs[result.wrong[0] ?? rows[0].id] ?? "").trim() || null,
                  correctLetter: formatAmount(
                    rows.find((r) => r.id === (result.wrong[0] ?? rows[0].id))
                      ?.key ?? 0,
                  ),
                  kind: "row",
                }}
              />
            </div>
          )}
        </div>

        {exhibit && (
          <aside className="sim-panel" aria-label={`Exhibit ${exhibit.n}`}>
            <div className="sim-panel-head">
              <h2 className="sim-h3">
                Exhibit {exhibit.n}: {exhibit.title}
              </h2>
              <button
                type="button"
                className="sim-panel-close"
                onClick={() => setOpenExhibit(null)}
                aria-label="Close exhibit"
              >
                ✕
              </button>
            </div>
            <div
              className={`sim-panel-body${exhibit.cls ? ` ${exhibit.cls}` : ""}`}
              // The exhibit HTML is generated at build time from the AICPA
              // documents in this repo's own source. It is not user input and
              // never reaches this component from the network.
              dangerouslySetInnerHTML={{ __html: exhibit.html }}
            />
          </aside>
        )}
      </div>
    </div>
  );
}
