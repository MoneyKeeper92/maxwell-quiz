/**
 * Usage tracking for the quiz app.
 *
 * Events are posted straight to Supabase's REST endpoint rather than through
 * supabase-js: these are insert-only writes, and the client library would add
 * ~40 kB gzipped to a bundle that each embedded lesson downloads.
 *
 * Everything here is best-effort. If the env vars are missing, the network is
 * down, or the browser blocks storage, the quiz must still work — no throw
 * ever reaches the UI.
 */

const URL_BASE = import.meta.env.VITE_SUPABASE_URL?.trim().replace(/\/rest\/v1\/?$/, "");
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim();

export const analyticsEnabled = Boolean(URL_BASE && ANON_KEY);

export type QuizEventName =
  | "quiz_started"
  | "question_answered"
  | "quiz_submitted"
  | "quiz_exit";

export interface QuizEvent {
  event: QuizEventName;
  course: string;
  quiz: string;
  attempt_id: string;
  question_id?: string | null;
  question_index?: number | null;
  is_correct?: boolean | null;
  correct_count?: number | null;
  total_count?: number | null;
  active_ms?: number | null;
}

function randomId(): string {
  try {
    return crypto.randomUUID();
  } catch {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  }
}

/** Stable per-browser id, so an anonymous learner isn't counted twice. */
function sessionId(): string {
  const key = "maxwell-quiz:visitor";
  try {
    const existing = window.localStorage.getItem(key);
    if (existing) return existing;
    const fresh = randomId();
    window.localStorage.setItem(key, fresh);
    return fresh;
  } catch {
    // Safari blocks storage in third-party iframes; fall back to per-load.
    return randomId();
  }
}

const VISITOR_ID = sessionId();

/**
 * Thinkific interpolates learner variables into the lesson URL when "Add
 * dynamic variables to the URL" is on, e.g.
 *   /intermediate/leases?email={{email}}&first_name={{first_name}}
 */
export interface Student {
  email: string | null;
  name: string | null;
}

/**
 * The learner variables as they were when this document loaded.
 *
 * Captured once, because the exit event fires after the reader has navigated
 * away. Reading the URL at that point returns the page they left for, so the
 * exit event arrived with no identity attached.
 */
const INITIAL_SEARCH =
  typeof window === "undefined" ? "" : window.location.search;

export function parseStudent(search: string): Student {
  try {
    const q = new URLSearchParams(search);
    const email = q.get("email")?.trim() || null;
    const first = q.get("first_name")?.trim() || "";
    const last = q.get("last_name")?.trim() || "";
    const name = `${first} ${last}`.trim();
    // Unreplaced liquid means the lesson has dynamic variables switched off.
    const clean = (v: string | null) =>
      v && !v.includes("{{") && v !== "null" ? v : null;
    return { email: clean(email), name: clean(name || null) };
  } catch {
    return { email: null, name: null };
  }
}

let resolved: Student | null = null;

export function student(): Student {
  if (!resolved) resolved = parseStudent(INITIAL_SEARCH);
  return resolved;
}

function payload(e: QuizEvent): string {
  const who = student();
  return JSON.stringify({
    ...e,
    session_id: VISITOR_ID,
    student_email: who.email,
    student_name: who.name,
    referrer: document.referrer || null,
  });
}

/**
 * `keepalive` lets the request outlive the page, which matters for the exit
 * event. sendBeacon is used where available for the same reason.
 */
export function track(e: QuizEvent, beacon = false): void {
  if (!analyticsEnabled) return;
  const url = `${URL_BASE}/rest/v1/quiz_events`;
  const body = payload(e);

  try {
    if (beacon && navigator.sendBeacon) {
      // sendBeacon cannot set headers, so the key rides in the query string.
      const beaconUrl = `${url}?apikey=${encodeURIComponent(ANON_KEY!)}`;
      const ok = navigator.sendBeacon(
        beaconUrl,
        new Blob([body], { type: "application/json" }),
      );
      if (ok) return;
    }
    void fetch(url, {
      method: "POST",
      keepalive: true,
      headers: {
        "Content-Type": "application/json",
        apikey: ANON_KEY!,
        Authorization: `Bearer ${ANON_KEY}`,
        Prefer: "return=minimal",
      },
      body,
    }).catch(() => {});
  } catch {
    // never let tracking break the quiz
  }
}

/**
 * Counts only the time the quiz is actually on screen, so a lesson left open
 * in a background tab doesn't inflate "time spent".
 */
export class ActiveTimer {
  private accumulated = 0;
  private startedAt: number | null = null;

  constructor() {
    this.resume();
  }

  resume(): void {
    if (this.startedAt === null) this.startedAt = Date.now();
  }

  pause(): void {
    if (this.startedAt !== null) {
      this.accumulated += Date.now() - this.startedAt;
      this.startedAt = null;
    }
  }

  elapsedMs(): number {
    const live = this.startedAt === null ? 0 : Date.now() - this.startedAt;
    return Math.round(this.accumulated + live);
  }
}

export function newAttemptId(): string {
  return randomId();
}
