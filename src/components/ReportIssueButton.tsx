import { useEffect, useRef, useState } from "react";
import { feedbackEnabled, submitReport, type ReportContext } from "../lib/feedback";

interface ReportIssueButtonProps {
  context: ReportContext;
}

type State = "idle" | "open" | "sending" | "sent" | "error";

export default function ReportIssueButton({ context }: ReportIssueButtonProps) {
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Reopening on a different question should start from a clean form.
  useEffect(() => {
    setState("idle");
    setMessage("");
  }, [context.questionId]);

  useEffect(() => {
    if (state === "open") textareaRef.current?.focus();
  }, [state]);

  useEffect(() => {
    if (state !== "sent") return;
    const t = window.setTimeout(() => setState("idle"), 2600);
    return () => window.clearTimeout(t);
  }, [state]);

  if (!feedbackEnabled) return null;

  const send = async () => {
    const trimmed = message.trim();
    if (!trimmed || state === "sending") return;
    setState("sending");
    const { ok } = await submitReport(context, trimmed);
    if (ok) {
      setMessage("");
      setState("sent");
    } else {
      setState("error");
    }
  };

  if (state === "sent") {
    return (
      <div className="report-row">
        <span className="report-sent" role="status">
          Thanks, we&apos;ll take a look at this question.
        </span>
      </div>
    );
  }

  if (state === "idle") {
    return (
      <div className="report-row">
        <button
          type="button"
          className="report-trigger"
          onClick={() => setState("open")}
        >
          Report an issue with this question
        </button>
      </div>
    );
  }

  return (
    <div className="report-panel">
      <label className="report-label" htmlFor="report-message">
        What looks wrong with question {context.questionIndex + 1}?
      </label>
      <textarea
        id="report-message"
        ref={textareaRef}
        className="report-textarea"
        rows={3}
        placeholder="e.g. the keyed answer looks incorrect, or the explanation contradicts the choices"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={state === "sending"}
      />
      {state === "error" && (
        <p className="report-error">
          Couldn&apos;t send that. Please try again in a moment.
        </p>
      )}
      <div className="report-actions">
        <button
          type="button"
          className="report-cancel"
          onClick={() => {
            setState("idle");
            setMessage("");
          }}
          disabled={state === "sending"}
        >
          Cancel
        </button>
        <button
          type="button"
          className="btn-results report-send"
          onClick={send}
          disabled={!message.trim() || state === "sending"}
        >
          {state === "sending" ? "Sending…" : "Send report"}
        </button>
      </div>
    </div>
  );
}
