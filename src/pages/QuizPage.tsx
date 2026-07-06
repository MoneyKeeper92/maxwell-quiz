import { Link, useParams } from "react-router-dom";
import QuizRunner from "../components/QuizRunner";
import { getCatalogItem, getQuiz } from "../data/registry";

export default function QuizPage() {
  const { quizKey } = useParams<{ quizKey: string }>();
  const quiz = getQuiz(quizKey);
  const catalogItem = getCatalogItem(quizKey);

  if (quiz) {
    return <QuizRunner quiz={quiz} />;
  }

  if (!catalogItem) {
    return (
      <div className="not-found-card">
        <h1>Quiz not found</h1>
        <p>That practice set doesn&apos;t exist yet.</p>
        <Link to="/" className="text-link">
          ← Back to all quizzes
        </Link>
      </div>
    );
  }

  return (
    <div className="not-found-card">
      <h1>{catalogItem.title}</h1>
      <p>This quiz is coming soon.</p>
      <Link to="/" className="text-link">
        ← Back to all quizzes
      </Link>
    </div>
  );
}
