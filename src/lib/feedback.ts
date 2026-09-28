/**
 * "Report an issue" submissions.
 *
 * Writes to the same `feedback` table the textbook and feedback sites use,
 * with source="quiz" and material_id identifying the exact question, so every
 * property reports into one inbox.
 */

import { student } from "./analytics";

const URL_BASE = import.meta.env.VITE_SUPABASE_URL?.trim().replace(/\/rest\/v1\/?$/, "");
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim();

export const feedbackEnabled = Boolean(URL_BASE && ANON_KEY);

export interface ReportContext {
  course: string;
  quiz: string;
  quizTitle: string;
  questionId: string;
  questionIndex: number;
  prompt: string;
  selectedLetter: string | null;
  correctLetter: string;
  /** "question" numbers within a quiz; "row" names a line of a sim grid, where
   *  an ordinal would mean nothing to the person reporting it. */
  kind?: "question" | "row";
}

/** What to call the thing being reported, in the button and the message. */
export function reportSubject(ctx: ReportContext): string {
  return ctx.kind === "row" ? `the "${ctx.prompt}" row` : `question ${ctx.questionIndex + 1}`;
}

/** `intermediate/leases#4940` — enough to jump straight to the question. */
export function materialId(ctx: ReportContext): string {
  return `${ctx.course}/${ctx.quiz}#${ctx.questionId}`;
}

/**
 * The shared table has no columns for question context, so it is prefixed onto
 * the message rather than requiring a schema change.
 */
function composeMessage(ctx: ReportContext, message: string): string {
  const who = student();
  const where =
    ctx.kind === "row"
      ? `row "${ctx.prompt}" | id ${ctx.questionId}`
      : `question ${ctx.questionIndex + 1} of the set | id ${ctx.questionId}`;
  const lines = [
    `[${ctx.quizTitle} | ${where}]`,
    `URL: ${window.location.origin}${
      ctx.course === "intermediate" ? `/intermediate/${ctx.quiz}` : `/${ctx.quiz}`
    }`,
    ctx.kind === "row" ? null : `Question: ${ctx.prompt.slice(0, 300)}${ctx.prompt.length > 300 ? "…" : ""}`,
    `Keyed answer: ${ctx.correctLetter}${
      ctx.selectedLetter ? ` | learner ${ctx.kind === "row" ? "typed" : "chose"}: ${ctx.selectedLetter}` : ""
    }`,
    who.email ? `Reported by: ${who.name ? `${who.name} <${who.email}>` : who.email}` : null,
    "",
    message.trim(),
  ].filter(Boolean);
  return lines.join("\n");
}

export async function submitReport(
  ctx: ReportContext,
  message: string,
): Promise<{ ok: boolean }> {
  if (!feedbackEnabled) return { ok: false };

  try {
    const res = await fetch(`${URL_BASE}/rest/v1/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: ANON_KEY!,
        Authorization: `Bearer ${ANON_KEY}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        source: "quiz",
        material_id: materialId(ctx),
        message: composeMessage(ctx, message),
        // `textbook` is NOT NULL in the shared table — the textbook app always
        // fills it. The course is the closest honest value; the precise
        // location lives in material_id.
        textbook: ctx.course,
        page: null,
        chapter: null,
      }),
    });
    return { ok: res.ok };
  } catch {
    return { ok: false };
  }
}
