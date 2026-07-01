export interface Question {
  id: string;
  prompt: string;
  choices: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation?: string;
}

export interface Quiz {
  key: string;
  title: string;
  subtitle: string;
  discipline: "far" | "aud" | "reg" | "bar" | "isc" | "tcp";
  questions: Question[];
}
