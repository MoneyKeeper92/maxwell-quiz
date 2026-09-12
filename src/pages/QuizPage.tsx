import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import QuizRunner from "../components/QuizRunner";
import type { Course, Quiz } from "../data/types";
import { getCatalogItem, getHomeQuizLinks, getQuizLoader } from "../data/registry";
import { quizTitle, useDocumentTitle } from "../lib/documentTitle";

interface QuizPageProps {
  /** Which course's URL namespace this page is mounted under. */
  course?: Course;
}

type LoadState = "loading" | "ready" | "missing" | "error";

export default function QuizPage({ course = "cpa" }: QuizPageProps) {
  const { quizKey } = useParams<{ quizKey: string }>();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [state, setState] = useState<LoadState>("loading");
  const catalogItem = getCatalogItem(quizKey, course);
  const home = course === "intermediate" ? "/intermediate" : "/";
  const listed = getHomeQuizLinks(course).find((item) => item.key === quizKey);
  useDocumentTitle(
    catalogItem ? quizTitle(catalogItem.title, listed?.questionCount ?? null) : null,
  );

  useEffect(() => {
    const load = getQuizLoader(quizKey, course);
    if (!load) {
      setQuiz(null);
      setState("missing");
      return;
    }
    let cancelled = false;
    setState("loading");
    load()
      .then((loaded) => {
        if (cancelled) return;
        setQuiz(loaded);
        setState("ready");
      })
      .catch(() => {
        if (!cancelled) setState("error");
      });
    return () => {
      cancelled = true;
    };
  }, [quizKey, course]);

  if (state === "ready" && quiz) {
    return <QuizRunner key={`${course}/${quiz.key}`} quiz={quiz} />;
  }

  if (state === "loading") {
    return (
      <div className="quiz-loading" role="status" aria-live="polite">
        Loading {catalogItem?.title ?? "quiz"}…
      </div>
    );
  }

  if (state === "error") {
    return (
      <div className="not-found-card">
        <h1>Couldn&apos;t load this quiz</h1>
        <p>Check your connection and refresh the page.</p>
        <Link to={home} className="text-link">
          ← Back to all quizzes
        </Link>
      </div>
    );
  }

  return (
    <div className="not-found-card">
      <h1>{catalogItem ? catalogItem.title : "Quiz not found"}</h1>
      <p>
        {catalogItem
          ? "This quiz is coming soon."
          : "That practice set doesn't exist yet."}
      </p>
      <Link to={home} className="text-link">
        ← Back to all quizzes
      </Link>
    </div>
  );
}
