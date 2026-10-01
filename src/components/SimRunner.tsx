import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Sim, SimRow } from "../data/types";
import ExhibitWindow from "./ExhibitWindow";
import ReportIssueButton from "./ReportIssueButton";
import { ActiveTimer, newAttemptId, track } from "../lib/analytics";
import {
  compute,
  formatAmount,
  formatCurrency,
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

/**
 * The free course this page feeds. Tagged so a signup traced back here is
 * distinguishable from one that came through the video description, which
 * carries utm_content=description_course.
 */
const COURSE_URL =
  "https://maxwellcpareview.com/free-cpa-101" +
  "?utm_source=quiz&utm_medium=sim&utm_campaign=far_tbs_110110&utm_content=sim_footer";

/** Chapter deep link, e.g. ...&t=619s */
function chapterHref(videoUrl: string, seconds: number): string {
  const sep = videoUrl.includes("?") ? "&" : "?";
  return `${videoUrl}${sep}t=${seconds}s`;
}

/** "06:54:53", the way the live player's clock reads. */
function clock(ms: number): string {
  const total = Math.floor(ms / 1000);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return [h, m, s].map((v) => String(v).padStart(2, "0")).join(":");
}

export default function SimRunner({ sim }: SimRunnerProps) {
  const [inputs, setInputs] = useState<SimInputs>({});
  // Open exhibits, last one on top. Order is the stacking order, so raising a
  // window is a reorder rather than a separate z counter to keep in step.
  const [openExhibits, setOpenExhibits] = useState<number[]>([]);
  const [checked, setChecked] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [paused, setPaused] = useState(false);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* The clock on screen. It reads from the same ActiveTimer the analytics use,
     so a paused clock and a paused "time on task" can never disagree. */
  useEffect(() => {
    const id = window.setInterval(() => setElapsed(timer.elapsedMs()), 1000);
    return () => window.clearInterval(id);
  }, [timer]);

  /* Time on screen, and one exit event per departure. The quiz runner learned
     the same two lessons: pause when the tab is hidden, and guard against
     visibilitychange and pagehide both firing for a single departure. */
  useEffect(() => {
    let lastExitMs = 0;
    const reportExit = () => {
      const ms = timer.elapsedMs();
      if (ms < 1000 || ms <= lastExitMs) return;
      lastExitMs = ms;
      track({ event: "quiz_exit", ...base, active_ms: ms }, true);
    };
    const onVisibility = () => {
      if (document.visibilityState === "hidden") {
        timer.pause();
        reportExit();
      } else if (!paused) {
        timer.resume();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", reportExit);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", reportExit);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

  const togglePause = () => {
    setPaused((was) => {
      if (was) timer.resume();
      else timer.pause();
      setElapsed(timer.elapsedMs());
      return !was;
    });
  };

  const setCell = useCallback((id: string, value: string) => {
    setInputs((prev) => ({ ...prev, [id]: value }));
  }, []);

  /** Format on blur, the way the live player's currency formatter does. */
  const formatCell = useCallback((id: string) => {
    setInputs((prev) => {
      const raw = prev[id] ?? "";
      const n = parseAmount(raw);
      if (n === null) return prev;
      return { ...prev, [id]: formatCurrency(n) };
    });
  }, []);

  const toggleExhibit = (n: number) => {
    setOpenExhibits((prev) => {
      if (prev.includes(n)) return prev.filter((x) => x !== n);
      if (!openedExhibits.current.has(n)) {
        openedExhibits.current.add(n);
        track({
          event: "exhibit_opened",
          ...base,
          question_index: n,
          detail: { exhibit: n, title: sim.exhibits[n - 1]?.title },
        });
      }
      return [...prev, n];
    });
  };

  /** Clicking a window raises it above the others. */
  const raise = (n: number) => {
    setOpenExhibits((prev) => [...prev.filter((x) => x !== n), n]);
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


  const malformed = rows.some((r) => isMalformed(inputs[r.id] ?? ""));

  const cellState = (row: SimRow): "right" | "wrong" | null => {
    if (!checked) return null;
    return result.correct.includes(row.id) ? "right" : "wrong";
  };

  const reportContext = {
    course: "cpa",
    quiz: sim.key,
    quizTitle: sim.title,
    questionId: result.wrong[0] ?? rows[0].id,
    questionIndex: 0,
    prompt: rows.find((r) => r.id === (result.wrong[0] ?? rows[0].id))?.label ?? "",
    selectedLetter: (inputs[result.wrong[0] ?? rows[0].id] ?? "").trim() || null,
    correctLetter: formatCurrency(
      rows.find((r) => r.id === (result.wrong[0] ?? rows[0].id))?.key ?? 0,
    ),
    kind: "row" as const,
  };

  return (
    <div className="tbs">
      {/* The exam's own chrome: clock on the left, the two controls on the
          right. Laid out to match the player this simulation lives in, so the
          page a student practises on is the page they will sit. */}
      <div className="tbs-bar">
        <div className="tbs-timer">
          <button
            type="button"
            className="tbs-pause"
            onClick={togglePause}
            aria-label={paused ? "Resume the timer" : "Pause the timer"}
          >
            <span aria-hidden="true">{paused ? "▶" : "❚❚"}</span>
          </button>
          <div className="tbs-timer-text">
            <div className="tbs-clock">{clock(elapsed)}</div>
            <div className="tbs-clock-label">Question Time Elapsed</div>
          </div>
        </div>
        <div className="tbs-bar-actions">
          {sim.videoUrl && (
            <a className="tbs-btn tbs-btn-ghost" href={sim.videoUrl} target="_blank" rel="noreferrer">
              Watch the walkthrough
            </a>
          )}
          <button type="button" className="tbs-btn" onClick={check}>
            Submit Test
          </button>
        </div>
      </div>

      <div className="tbs-page">
        <div className="tbs-qnum">
          <span className="tbs-qnum-active">1</span>
        </div>

        <div className="tbs-card">
          <div className="tbs-main">
            <div className="tbs-card-head">
              <h1>
                <span className="tbs-q-n">1</span>
                <span className="tbs-q-word">Question</span>
              </h1>
              <div className="tbs-qid">
                <span>ID</span> : <span>110110</span>
              </div>
            </div>

            <div className="tbs-exhibit-box">
              <h2>Exhibits Information</h2>
              <p>Exhibits included in this item:</p>
              {sim.exhibits.map((ex) => (
                <button
                  key={ex.n}
                  type="button"
                  className={`tbs-exhibit${openExhibits.includes(ex.n) ? " is-open" : ""}`}
                  onClick={() => toggleExhibit(ex.n)}
                  aria-expanded={openExhibits.includes(ex.n)}
                >
                  Exhibit {ex.n} - {ex.title}
                </button>
              ))}
            </div>

            <div
              className="tbs-prompt"
              // Built at build time from the question bundle and checked to
              // reproduce its prompt word for word. Never from the network.
              dangerouslySetInnerHTML={{ __html: sim.promptHtml }}
            />

            <div className="tbs-grid-wrap">
              <table className="tbs-grid">
                <caption className="tbs-sr">
                  Draft consolidated statement of financial position. Type each
                  adjustment in the Adjustment column; the last column and the
                  subtotals calculate automatically.
                </caption>
                <thead>
                  <tr>
                    <th scope="col" className="tbs-label" />
                    <th scope="col">{sim.columns.b}</th>
                    <th scope="col">{sim.columns.c}</th>
                    <th scope="col">{sim.columns.d}</th>
                    <th scope="col">{sim.columns.e}</th>
                  </tr>
                </thead>
                <tbody>
                  {sim.rows.map((row) => {
                    if (row.kind === "section") {
                      return (
                        <tr key={row.id} className="tbs-section">
                          <th scope="row" className="tbs-label">
                            {row.label}
                          </th>
                          <td /><td /><td /><td />
                        </tr>
                      );
                    }
                    const isTotal = row.kind === "subtotal";
                    const state = isTotal ? null : cellState(row);
                    return (
                      <tr key={row.id}>
                        <th scope="row" className="tbs-label">
                          {row.label}
                        </th>
                        <td>{formatAmount(computed.b[row.id] ?? 0)}</td>
                        <td>{formatAmount(computed.c[row.id] ?? 0)}</td>
                        <td>
                          {isTotal ? (
                            <input
                              type="text"
                              className="tbs-input is-calc"
                              value={formatCurrency(computed.d[row.id] ?? 0)}
                              aria-label={`${sim.columns.d} for ${row.label}, calculated`}
                              readOnly
                              tabIndex={-1}
                            />
                          ) : (
                            <span className="tbs-cell">
                              <input
                                type="text"
                                inputMode="text"
                                autoComplete="off"
                                className={`tbs-input${state ? ` is-${state}` : ""}${
                                  isMalformed(inputs[row.id] ?? "") ? " is-bad" : ""
                                }`}
                                aria-label={`${sim.columns.d} for ${row.label}`}
                                value={inputs[row.id] ?? "$0"}
                                onChange={(e) => setCell(row.id, e.target.value)}
                                onFocus={(e) => {
                                  if (parseAmount(e.target.value) === 0) setCell(row.id, "");
                                }}
                                onBlur={() => formatCell(row.id)}
                              />
                              {state && (
                                <span
                                  className={`tbs-mark tbs-mark-${state}`}
                                  aria-hidden="true"
                                >
                                  {state === "right" ? "✓" : "✗"}
                                </span>
                              )}
                            </span>
                          )}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="tbs-input is-calc"
                            value={formatCurrency(computed.e[row.id] ?? 0)}
                            aria-label={`${sim.columns.e} for ${row.label}, calculated`}
                            readOnly
                            tabIndex={-1}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {malformed && (
              <p className="tbs-warn" role="status">
                Whole dollars only. Enter increases as positive and decreases as
                negative, for example <code>-3000</code> or <code>(3,000)</code>.
              </p>
            )}

            <div className="tbs-actions">
              <button type="button" className="tbs-btn tbs-btn-wide" onClick={check}>
                Submit Test
              </button>
              {checked && (
                <button type="button" className="tbs-btn tbs-btn-plain" onClick={reset}>
                  Start over
                </button>
              )}
            </div>

            {checked && (
              <div className="tbs-results" ref={resultsRef}>
                <h2>
                  {result.score} of {result.total} correct
                </h2>
                <p className="tbs-results-note">
                  Only the {result.total} rows you type are graded. Subtotals and
                  the adjusted balance column calculate from them.
                </p>

                {result.wrong.length > 0 && (
                  <ul className="tbs-wrong">
                    {rows
                      .filter((r) => result.wrong.includes(r.id))
                      .map((r) => (
                        <li key={r.id}>
                          <span className="tbs-wrong-label">{r.label}</span>
                          {showKey && (
                            <span className="tbs-wrong-key">
                              keyed {(r.key ?? 0) === 0 ? "no adjustment" : formatCurrency(r.key ?? 0)}
                            </span>
                          )}
                          {sim.videoUrl && r.chapter && (
                            <a
                              className="tbs-chapter"
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
                    className="tbs-btn tbs-btn-plain"
                    onClick={() => setShowKey(true)}
                  >
                    Show the keyed answers
                  </button>
                ) : (
                  <div className="tbs-key">
                    <h3>Keyed adjustments</h3>
                    <ul>
                      {rows.map((r) => (
                        <li key={r.id}>
                          <span>{r.label}</span>
                          <span>
                            {(r.key ?? 0) === 0 ? "no adjustment" : formatCurrency(r.key ?? 0)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}


                <ReportIssueButton context={reportContext} />
              </div>
            )}

            <aside className="tbs-cta">
              <p className="tbs-cta-badge">High-yield FAR foundation</p>
              <h2>FAR Exam 101</h2>
              <ul>
                <li>25 AICPA-released 2026 questions</li>
                <li>Walkthrough video: how I think through questions</li>
                <li>Find your five weakest FAR topics</li>
                <li>FAR study outline + lease practice tool</li>
              </ul>
              <a className="tbs-cta-btn" href={COURSE_URL}>
                Enroll for Free
              </a>
            </aside>

            <p className="tbs-credit">{sim.credit}</p>
          </div>

        </div>
      </div>

      {openExhibits.map((n, i) => {
        const ex = sim.exhibits[n - 1];
        if (!ex) return null;
        return (
          <ExhibitWindow
            key={n}
            exhibit={ex}
            index={i}
            z={1000 + i}
            onFocus={() => raise(n)}
            onClose={() => toggleExhibit(n)}
          />
        );
      })}
    </div>
  );
}
