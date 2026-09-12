import type { Quiz } from "../data/types";

export interface SavedProgress {
  answers: (number | null)[];
  index: number;
  finished: boolean;
}

/**
 * Progress is kept per quiz so a refresh, or a Thinkific lesson reload, doesn't
 * wipe an attempt.
 *
 * Storage can throw outright in an embedded iframe (Safari blocks third-party
 * storage), so every access is guarded and the quiz runs without persistence
 * when it is unavailable.
 */
export function storageKey(quiz: Pick<Quiz, "course" | "key">): string {
  return `maxwell-quiz:${quiz.course}/${quiz.key}`;
}

export function loadProgress(quiz: Quiz): SavedProgress | null {
  try {
    const raw = window.localStorage.getItem(storageKey(quiz));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as SavedProgress;
    if (
      !Array.isArray(parsed.answers) ||
      parsed.answers.length !== quiz.questions.length
    ) {
      return null;
    }
    const answers = parsed.answers.map((a) =>
      typeof a === "number" && a >= 0 && a <= 3 ? a : null,
    );
    const index =
      typeof parsed.index === "number" &&
      parsed.index >= 0 &&
      parsed.index < quiz.questions.length
        ? parsed.index
        : 0;
    return { answers, index, finished: !!parsed.finished };
  } catch {
    return null;
  }
}

export function saveProgress(quiz: Quiz, progress: SavedProgress): void {
  try {
    window.localStorage.setItem(storageKey(quiz), JSON.stringify(progress));
  } catch {
    // storage unavailable — progress just isn't persisted
  }
}

export function clearProgress(quiz: Quiz): void {
  try {
    window.localStorage.removeItem(storageKey(quiz));
  } catch {
    // ignore
  }
}
