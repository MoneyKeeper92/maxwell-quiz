import { Link } from "react-router-dom";
import { getHomeQuizLinks } from "../data/registry";

export default function HomePage() {
  const quizzes = getHomeQuizLinks();

  return (
    <div className="home-card">
      <h1>FAR Practice Quizzes</h1>
      <p className="subtitle">Pick a topic and start practicing.</p>
      <ul className="quiz-list">
        {quizzes.map((quiz) => (
          <li key={quiz.key}>
            <Link to={`/${quiz.key}`} className="quiz-link">
              <span className="quiz-link-tag">{quiz.discipline.toUpperCase()}</span>
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
    </div>
  );
}
