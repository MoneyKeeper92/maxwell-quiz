export interface Question {
  id: string;
  prompt: string;
  /** Set when the source question contains a table or other markup that
   *  does not survive being flattened to text. Rendered instead of `prompt`. */
  promptHtml?: string;
  choices: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation?: string;
}

/** Which catalog a quiz belongs to. Courses never cross-link to each other. */
export type Course = "cpa" | "intermediate";

export interface Quiz {
  key: string;
  title: string;
  subtitle: string;
  discipline: "far" | "aud" | "reg" | "bar" | "isc" | "tcp" | "intermediate";
  course: Course;
  questions: Question[];
}

/* ---------------------------------------------------------------- sims ---
 * A task-based simulation: exhibits, a prompt, and one answer grid.
 *
 * Kept separate from Quiz rather than folded into it. A Quiz question is four
 * choices and one right index; a sim is a spreadsheet whose cells feed each
 * other. Widening Question to cover both would put optional fields on all 420
 * quiz questions to serve one page.
 */

/** One row of the grid. `kind` decides what the student can do with it. */
export interface SimRow {
  id: string;
  label: string;
  /** section = a heading with no figures; input = the student types column D;
   *  subtotal = every column is computed from the rows in `sum`. */
  kind: "section" | "input" | "subtotal";
  /** Column B, the prior-year balance. Given, never edited. */
  b?: number;
  /** Column C, the unadjusted current-year balance. Given, never edited. */
  c?: number;
  /** Column D as keyed by the AICPA. Absent means the same as zero: the prompt
   *  says to leave a row blank when no adjustment is needed. */
  key?: number;
  /** subtotal rows: the row ids this one adds up, in order. */
  sum?: string[];
  /** Where the video solves this row. */
  chapter?: { label: string; seconds: number };
}

export interface SimExhibit {
  n: number;
  title: string;
  /** Extra class for the panel, e.g. "compact" for a dense document. */
  cls?: string;
  html: string;
}

export interface Sim {
  key: string;
  title: string;
  subtitle: string;
  /** Shown under the title, e.g. who released the question. */
  credit: string;
  discipline: Quiz["discipline"];
  /** The YouTube watch URL, or null until the video is published. Chapter
   *  links are hidden while this is null rather than pointing nowhere. */
  videoUrl: string | null;
  /** The AICPA prompt, verbatim. */
  prompt: string;
  columns: { b: string; c: string; d: string; e: string };
  exhibits: SimExhibit[];
  rows: SimRow[];
}
