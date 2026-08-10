import { useState } from "react";
import { Link } from "react-router-dom";
import type { Quiz } from "../data/types";
import { getHomeQuizLinks } from "../data/registry";

const LETTERS = ["A", "B", "C", "D"];
const BASELINE_REVIEW_URL = "https://reviews.maxwellstudy.com/far101/";

interface QuizRunnerProps {
  quiz: Quiz;
}

function scoreHeading(correct: number, total: number): string {
  const pct = Math.round((correct / total) * 100);
  let label = "Keep studying!";
  if (correct === total) label = "Perfect score!";
  else if (pct >= 80) label = "Great work!";
  else if (pct >= 60) label = "Solid effort!";
  return `${label} — ${pct}% (${correct}/${total})`;
}

function scoreSubtext(correct: number, total: number): string {
  if (correct === total) {
    return "You nailed every question. Keep the momentum going with another practice set below.";
  }
  return "Review the topics you missed, then try another practice set below.";
}

export default function QuizRunner({ quiz }: QuizRunnerProps) {
  const total = quiz.questions.length;
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    Array.from({ length: total }, () => null),
  );
  const [finished, setFinished] = useState(false);

  const question = quiz.questions[index];
  const answered = answers[index] !== null;
  const userAnswer = answers[index];
  const isCorrect = userAnswer === question.correctIndex;
  const allAnswered = answers.every((a) => a !== null);
  const correctCount = answers.filter(
    (a, i) => a === quiz.questions[i].correctIndex,
  ).length;
  const isLast = index === total - 1;
  const otherQuizzes = getHomeQuizLinks().filter(
    (item) => item.key !== quiz.key && item.available,
  );

  const goTo = (next: number) => {
    if (next < 0 || next >= total) return;
    setIndex(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectAnswer = (choiceIndex: number) => {
    if (answered) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = choiceIndex;
      return next;
    });
  };

  const submitQuiz = () => {
    setFinished(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (finished) {
    return (
      <div className="results-page show">
        <div className="score-card">
          <div className="score-heading">{scoreHeading(correctCount, total)}</div>
          <div className="score-sub">{scoreSubtext(correctCount, total)}</div>
        </div>

        <div className="other-quizzes-card">
          <h2 className="other-quizzes-heading">Practice more quizzes</h2>
          <p className="other-quizzes-sub">
            Keep drilling FAR with another free practice set.
          </p>
          <ul className="quiz-list">
            {otherQuizzes.map((item) => (
              <li key={item.key}>
                <Link to={`/${item.key}`} className="quiz-link">
                  <span className="quiz-link-tag">{item.discipline.toUpperCase()}</span>
                  <span className="quiz-link-title">{item.title}</span>
                  <span className="quiz-link-meta">
                    {item.questionCount} questions
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="results-bottom-actions">
            <Link to="/" className="btn-results practice-more-btn">
              View all quizzes
            </Link>
          </div>
        </div>

        <div className="reviews-embed-card" style={{ marginTop: 28 }}>
          <iframe
            className="reviews-iframe"
            src={BASELINE_REVIEW_URL}
            title="Unlock your FAR Baseline Exam"
            allow="fullscreen; popups"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-section">
      <div className="q-nav">
        {quiz.questions.map((q, i) => {
          let className = "q-num";
          if (i === index) className += " active";
          else if (answers[i] !== null) {
            className +=
              answers[i] === q.correctIndex ? " done-correct" : " done-wrong";
          }

          return (
            <button
              key={q.id}
              type="button"
              className={className}
              onClick={() => goTo(i)}
            >
              {i + 1}
            </button>
          );
        })}
      </div>

      <div className="q-card">
        <div className="q-meta">
          <div className="q-label">
            <span className="q-num-big">{index + 1}</span>
            <span>Question</span>
          </div>
          <span className="q-id">ID:{question.id}</span>
        </div>
        <div className="q-text">{question.prompt}</div>
        <div className="choices">
          {question.choices.map((choice, i) => {
            let className = "choice";
            if (answered) {
              className += " locked";
              if (i === question.correctIndex) className += " correct";
              else if (i === userAnswer) className += " wrong";
            } else if (userAnswer === i) {
              className += " selected";
            }

            return (
              <button
                key={i}
                type="button"
                className={className}
                onClick={() => selectAnswer(i)}
                disabled={answered}
              >
                <span className="letter">{LETTERS[i]}</span>
                <span>{choice}</span>
              </button>
            );
          })}
        </div>
      </div>

      {answered && question.explanation && (
        <div className="exp show">
          <p className={`correct-line ${isCorrect ? "ok" : "bad"}`}>
            {isCorrect
              ? `✓ Correct — Option ${LETTERS[question.correctIndex]}`
              : `✗ Incorrect — The correct answer is Option ${LETTERS[question.correctIndex]}`}
          </p>
          <div
            className="exp-content"
            dangerouslySetInnerHTML={{ __html: question.explanation }}
          />
          <a
            className="baseline-cta-bar"
            href={BASELINE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Analyze Your 5 Weakest FAR Topics
          </a>
        </div>
      )}

      {isLast && answered && (
        <div className="submit-quiz-row">
          <button
            type="button"
            className="btn-results submit-quiz-btn"
            onClick={submitQuiz}
            disabled={!allAnswered}
          >
            {allAnswered ? "Submit Quiz ›" : "Answer all questions to submit"}
          </button>
          {!allAnswered && (
            <p className="submit-quiz-hint">
              Some earlier questions are still unanswered. Use the numbers above
              to finish them, then submit.
            </p>
          )}
        </div>
      )}

      <div className="nav-row">
        <button
          type="button"
          className="arrow"
          disabled={index === 0}
          onClick={() => goTo(index - 1)}
          aria-label="Previous question"
        >
          &#8249;
        </button>
        <span className="nav-label">
          {index + 1} of {total}
        </span>
        {!isLast ? (
          <button
            type="button"
            className="arrow"
            onClick={() => goTo(index + 1)}
            aria-label="Next question"
          >
            &#8250;
          </button>
        ) : (
          <span className="arrow" style={{ visibility: "hidden" }} aria-hidden="true">
            &#8250;
          </span>
        )}
      </div>
    </div>
  );
}
