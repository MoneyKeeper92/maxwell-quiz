import { useState } from "react";
import { Link } from "react-router-dom";
import type { Quiz } from "../data/types";

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
    return "You nailed every question. Complete the steps below to unlock your FAR Baseline Exam.";
  }
  return "Complete the steps below to unlock your FAR Baseline Exam and find your weakest areas.";
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

  const showResults = () => {
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

        <div className="reviews-embed-card">
          <iframe
            className="reviews-iframe"
            src={BASELINE_REVIEW_URL}
            title="Unlock your FAR Baseline Exam"
            allow="fullscreen; popups"
          />
        </div>

        <div className="results-bottom-actions">
          <Link to="/" className="btn-results practice-more-btn">
            Practice More Questions
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-section">
      {allAnswered && (
        <div className="results-top-row">
          <button type="button" className="btn-results btn-results-top" onClick={showResults}>
            See Results ›
          </button>
        </div>
      )}

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
