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
  | "quiz_exit"
  | "sim_started"
  | "exhibit_opened"
  | "sim_submitted";

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
  /** Per-cell results on a sim submit, or which exhibit was opened. */
  detail?: unknown;
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

/**
 * Where the visit came from.
 *
 * Only document.referrer was kept before, which made a click from a YouTube
 * description indistinguishable from any other YouTube link. The campaign tags
 * are read once at load, for the same reason the learner variables are: by the
 * time the exit event fires the URL may have changed.
 */
export interface Campaign {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
}

export function parseCampaign(search: string): Campaign {
  const empty: Campaign = {
    utm_source: null,
    utm_medium: null,
    utm_campaign: null,
    utm_content: null,
  };
  try {
    const q = new URLSearchParams(search);
    const get = (k: string) => {
      const v = q.get(k)?.trim();
      return v && !v.includes("{{") ? v.slice(0, 120) : null;
    };
    return {
      utm_source: get("utm_source"),
      utm_medium: get("utm_medium"),
      utm_campaign: get("utm_campaign"),
      utm_content: get("utm_content"),
    };
  } catch {
    return empty;
  }
}

let campaignResolved: Campaign | null = null;

export function campaign(): Campaign {
  if (!campaignResolved) campaignResolved = parseCampaign(INITIAL_SEARCH);
  return campaignResolved;
}

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
  const row: Record<string, unknown> = {
    ...e,
    ...campaign(),
    session_id: VISITOR_ID,
    student_email: who.email,
    student_name: who.name,
    referrer: document.referrer || null,
  };
  // PostgREST rejects the whole insert if a key has no column, so a row must
  // never mention a column it has nothing to say about. Without this, every
  // event from every quiz would 400 between deploying this build and running
  // supabase/03_sim_events.sql, purely because of the four campaign keys.
  for (const k of Object.keys(row)) {
    if (row[k] === null || row[k] === undefined) delete row[k];
  }
  return JSON.stringify(row);
}

/**
 * `keepalive` lets the request outlive the page, which matters for the exit
 * event. sendBeacon is used where available for the same reason.
 */
/**
 * fetch with keepalive, not sendBeacon.
 *
 * The insert needs an apikey header and a JSON content type, neither of which
 * is CORS-safelisted, so the request is preflighted. sendBeacon cannot carry
 * that preflight through an unload reliably and reports success regardless,
 * which is why every exit event was lost: the call returned true and the
 * fallback below never ran. keepalive is built for exactly this, and sendBeacon
 * is kept only for browsers that lack it.
 */
const SUPPORTS_KEEPALIVE = (() => {
  try {
    return "keepalive" in new Request("https://example.com", { method: "POST" });
  } catch {
    return false;
  }
})();

export function track(e: QuizEvent, atExit = false): void {
  if (!analyticsEnabled) return;
  const url = `${URL_BASE}/rest/v1/quiz_events`;
  const body = payload(e);

  try {
    if (!atExit || SUPPORTS_KEEPALIVE) {
      void fetch(url, {
        method: "POST",
        keepalive: atExit,
        headers: {
          "Content-Type": "application/json",
          apikey: ANON_KEY!,
          Authorization: `Bearer ${ANON_KEY}`,
          Prefer: "return=minimal",
        },
        body,
      }).catch(() => {});
      return;
    }
    // No keepalive: the key has to ride in the query string, because
    // sendBeacon cannot set headers.
    navigator.sendBeacon?.(
      `${url}?apikey=${encodeURIComponent(ANON_KEY!)}`,
      new Blob([body], { type: "application/json" }),
    );
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
