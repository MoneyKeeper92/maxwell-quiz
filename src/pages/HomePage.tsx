import { Link } from "react-router-dom";
import type { Course } from "../data/types";
import { getHomeQuizLinks } from "../data/registry";

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
    </div>
  );
}
