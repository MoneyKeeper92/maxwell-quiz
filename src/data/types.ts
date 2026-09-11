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
