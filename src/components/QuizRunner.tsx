import { useState } from "react";
import { Link } from "react-router-dom";
import type { Quiz } from "../data/types";
import { getHomeQuizLinks } from "../data/registry";

const LETTERS = ["A", "B", "C", "D"];

interface QuizRunnerProps {
  quiz: Quiz;
}

function scoreRingColor(pct: number): string {
  if (pct >= 80) return "#28a745";
  if (pct >= 60) return "#e9a825";
  return "#e57373";
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
  const correctCount = answers.filter(
    (a, i) => a === quiz.questions[i].correctIndex,
  ).length;
  const incorrectCount = answers.filter(
    (a, i) => a !== null && a !== quiz.questions[i].correctIndex,
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
    const pct = total === 0 ? 0 : Math.round((correctCount / total) * 100);
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = circumference - (pct / 100) * circumference;
    const ringColor = scoreRingColor(pct);

    return (
      <div className="results-page show">
        <div className="score-summary">
          <div className="score-donut" aria-label={`${pct} percent`}>
            <svg viewBox="0 0 100 100" className="score-donut-svg">
              <circle
                className="score-donut-track"
                cx="50"
                cy="50"
                r={radius}
                fill="none"
              />
              <circle
                className="score-donut-progress"
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                stroke={ringColor}
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="score-donut-label">{pct}%</div>
          </div>

          <div className="score-stats">
            <div className="score-stat">
              <div className="score-stat-value correct">{correctCount}</div>
              <div className="score-stat-label">Correct</div>
            </div>
            <div className="score-stat">
              <div className="score-stat-value incorrect">{incorrectCount}</div>
              <div className="score-stat-label">Incorrect</div>
            </div>
            <div className="score-stat">
              <div className="score-stat-value total">{total}</div>
              <div className="score-stat-label">Total</div>
            </div>
          </div>
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
      </div>
    );
  }

  return (
    <div className="quiz-section">
      <div className="submit-quiz-row submit-quiz-row-top">
        <button
          type="button"
          className="btn-results submit-quiz-btn"
          onClick={submitQuiz}
        >
          Submit Quiz ›
        </button>
      </div>

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
