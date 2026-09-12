import { useEffect } from "react";

const SITE = "Maxwell CPA Review";

/**
 * Titles for client-side navigation.
 *
 * The build pre-renders one HTML file per route (scripts/generate-meta.mjs), so
 * a cold load already arrives with the right title. This keeps it right when
 * the reader moves between quizzes without a page load. The format is mirrored
 * from that script; change both together.
 */
export function quizTitle(title: string, questionCount: number | null): string {
  return questionCount
    ? `${title} — ${questionCount} Practice Questions | ${SITE}`
    : `${title} | ${SITE}`;
}

export function useDocumentTitle(title: string | null): void {
  useEffect(() => {
    if (!title) return;
    const previous = document.title;
    document.title = title;
    return () => {
      document.title = previous;
    };
  }, [title]);
}
