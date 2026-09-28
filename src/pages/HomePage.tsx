import { Link } from "react-router-dom";
import type { Course } from "../data/types";
import { getHomeQuizLinks } from "../data/registry";
import { simCatalog, simHref } from "../data/sims";
import { useDocumentTitle } from "../lib/documentTitle";

interface HomePageProps {
  course?: Course;
  heading?: string;
  subtitle?: string;
}

export default function HomePage({
  course = "cpa",
  heading = "Free CPA Practice Quizzes",
  subtitle = "Pick a topic and start practicing.",
}: HomePageProps) {
  const quizzes = getHomeQuizLinks(course);
  // Simulations only exist for the CPA catalog today.
  const sims = course === "cpa" ? simCatalog : [];
  useDocumentTitle(
    course === "intermediate"
      ? "Intermediate Accounting Practice Quizzes | Maxwell CPA Review"
      : "Free CPA Practice Quizzes | Maxwell CPA Review",
  );
  // The discipline tag only carries information when the list actually mixes
  // disciplines — on the intermediate index every row would read the same.
  const showTag = new Set(quizzes.map((q) => q.discipline)).size > 1;

  return (
    <div className="home-card">
      <h1>{heading}</h1>
      <p className="subtitle">{subtitle}</p>
      {quizzes.length === 0 ? (
        <p className="subtitle">Quizzes are coming soon.</p>
      ) : (
        <ul className="quiz-list">
          {quizzes.map((quiz) => (
            <li key={quiz.key}>
              <Link to={quiz.href} className="quiz-link">
                {showTag && (
                  <span className="quiz-link-tag">
                    {quiz.discipline.toUpperCase()}
                  </span>
                )}
                <span className="quiz-link-title">{quiz.title}</span>
                <span className="quiz-link-meta">
                  {quiz.available && quiz.questionCount !== null
                    ? `${quiz.questionCount} questions`
                    : "Coming soon"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {sims.length > 0 && (
        <>
          <h2 className="home-h2">Task-based simulations</h2>
          <p className="subtitle">
            Full simulations with exhibits and an answer grid, the way they
            appear on the exam.
          </p>
          <ul className="quiz-list">
            {sims.map((sim) => (
              <li key={sim.key}>
                <Link to={simHref(sim.key)} className="quiz-link">
                  <span className="quiz-link-tag">
                    {sim.discipline.toUpperCase()}
                  </span>
                  <span className="quiz-link-title">{sim.title}</span>
                  <span className="quiz-link-meta">Simulation</span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
