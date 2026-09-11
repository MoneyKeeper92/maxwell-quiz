import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import type { Quiz } from "../data/types";
import { getHomeQuizLinks } from "../data/registry";
import ReportIssueButton from "./ReportIssueButton";
import { ActiveTimer, newAttemptId, track } from "../lib/analytics";

const LETTERS = ["A", "B", "C", "D"];

interface SavedProgress {
  answers: (number | null)[];
  index: number;
  finished: boolean;
}

/**
 * Progress is kept per quiz so a refresh — or a Thinkific lesson reload —
 * doesn't wipe an attempt. Storage can throw outright in an embedded iframe
 * (Safari blocks third-party storage), so every access is guarded and the
 * quiz simply runs without persistence when it is unavailable.
 */
function storageKey(quiz: Quiz): string {
  return `maxwell-quiz:${quiz.course}/${quiz.key}`;
}

function loadProgress(quiz: Quiz): SavedProgress | null {
  try {
    const raw = window.localStorage.getItem(storageKey(quiz));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as SavedProgress;
    if (
      !Array.isArray(parsed.answers) ||
      parsed.answers.length !== quiz.questions.length
    ) {
      return null;
    }
    const answers = parsed.answers.map((a) =>
      typeof a === "number" && a >= 0 && a <= 3 ? a : null,
    );
    const index =
      typeof parsed.index === "number" &&
      parsed.index >= 0 &&
      parsed.index < quiz.questions.length
        ? parsed.index
        : 0;
    return { answers, index, finished: !!parsed.finished };
  } catch {
    return null;
  }
}

function saveProgress(quiz: Quiz, progress: SavedProgress): void {
  try {
    window.localStorage.setItem(storageKey(quiz), JSON.stringify(progress));
  } catch {
    // storage unavailable — progress just isn't persisted
  }
}

function clearProgress(quiz: Quiz): void {
  try {
    window.localStorage.removeItem(storageKey(quiz));
  } catch {
    // ignore
  }
}

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
  const [restored] = useState(() => loadProgress(quiz));
  const [index, setIndex] = useState(() => restored?.index ?? 0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => restored?.answers ?? Array.from({ length: total }, () => null),
  );
  const [finished, setFinished] = useState(() => restored?.finished ?? false);

  useEffect(() => {
    saveProgress(quiz, { answers, index, finished });
  }, [quiz, answers, index, finished]);

  // One attempt per mount. QuizPage keys this component by quiz, so opening a
  // different quiz starts a new attempt rather than extending the old one.
  // Built lazily: a plain useRef initialiser would construct a throwaway timer
  // on every render.
  const attemptRef = useRef<{ id: string; timer: ActiveTimer } | null>(null);
  if (attemptRef.current === null) {
    attemptRef.current = { id: newAttemptId(), timer: new ActiveTimer() };
  }
  // Both are stable for the lifetime of this mount, so they are safe (and
  // honest) to list as effect dependencies.
  const { id: attemptId, timer: attemptTimer } = attemptRef.current;
  const submitted = useRef(false);

  useEffect(() => {
    const timer = attemptTimer;
    const base = { course: quiz.course, quiz: quiz.key, attempt_id: attemptId };
    // Resume explicitly: the cleanup below pauses the timer, and React runs
    // mount/cleanup/mount in development.
    timer.resume();
    track({ event: "quiz_started", ...base, total_count: total });

    // A quiz open for under a second was never really read: React's dev-mode
    // double mount and accidental loads both land here, and neither is an exit.
    const reportExit = () => {
      const ms = timer.elapsedMs();
      if (submitted.current || ms < 1000) return;
      track({ event: "quiz_exit", ...base, active_ms: ms }, true);
    };

    // Time is only counted while the lesson is actually on screen.
    const onVisibility = () => {
      if (document.visibilityState === "hidden") {
        timer.pause();
        reportExit();
      } else {
        timer.resume();
      }
    };
    const onPageHide = () => {
      timer.pause();
      reportExit();
    };

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", onPageHide);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", onPageHide);
      timer.pause();
      reportExit();
    };
  }, [quiz.course, quiz.key, total, attemptId, attemptTimer]);

  const question = quiz.questions[index];
  const answered = answers[index] !== null;
  const userAnswer = answers[index];
  const isCorrect = userAnswer === question.correctIndex;
  const correctCount = answers.filter(
    (a, i) => a === quiz.questions[i].correctIndex,
  ).length;
  const answeredCount = answers.filter((a) => a !== null).length;
  const unansweredCount = total - answeredCount;
  const incorrectCount = total - correctCount;
  const isLast = index === total - 1;
  const otherQuizzes = getHomeQuizLinks(quiz.course).filter(
    (item) => item.key !== quiz.key && item.available,
  );
  const showTag = new Set(otherQuizzes.map((q) => q.discipline)).size > 1;
  const courseHome = quiz.course === "intermediate" ? "/intermediate" : "/";
  const moreCopy =
    quiz.course === "intermediate"
      ? "Keep practicing with another quiz from the course."
      : "Keep drilling with another free practice set.";

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
    track({
      event: "question_answered",
      course: quiz.course,
      quiz: quiz.key,
      attempt_id: attemptId,
      question_id: question.id,
      question_index: index,
      is_correct: choiceIndex === question.correctIndex,
      active_ms: attemptTimer.elapsedMs(),
    });
  };

  const submitQuiz = () => {
    if (
      unansweredCount > 0 &&
      !window.confirm(
        `${unansweredCount} of ${total} question${unansweredCount === 1 ? " is" : "s are"} still unanswered. ` +
          "Unanswered questions are scored as incorrect. Submit anyway?",
      )
    ) {
      return;
    }
    submitted.current = true;
    track({
      event: "quiz_submitted",
      course: quiz.course,
      quiz: quiz.key,
      attempt_id: attemptId,
      correct_count: correctCount,
      total_count: total,
      active_ms: attemptTimer.elapsedMs(),
    });
    setFinished(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /** Back into the quiz with every answer and explanation still visible. */
  const reviewAnswers = () => {
    setFinished(false);
    setIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const retakeQuiz = () => {
    clearProgress(quiz);
    setAnswers(Array.from({ length: total }, () => null));
    setIndex(0);
    setFinished(false);
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

        {unansweredCount > 0 && (
          <p className="score-note">
            {unansweredCount} question{unansweredCount === 1 ? " was" : "s were"} left
            unanswered and scored as incorrect.
          </p>
        )}

        <div className="results-actions">
          <button type="button" className="btn-results" onClick={reviewAnswers}>
            Review answers
          </button>
          <button
            type="button"
            className="btn-results btn-results-secondary"
            onClick={retakeQuiz}
          >
            Retake quiz
          </button>
        </div>

        {otherQuizzes.length > 0 && (
        <div className="other-quizzes-card">
          <h2 className="other-quizzes-heading">Practice more quizzes</h2>
          <p className="other-quizzes-sub">{moreCopy}</p>
          <ul className="quiz-list">
            {otherQuizzes.map((item) => (
              <li key={item.key}>
                <Link to={item.href} className="quiz-link">
                  {showTag && (
                    <span className="quiz-link-tag">
                      {item.discipline.toUpperCase()}
                    </span>
                  )}
                  <span className="quiz-link-title">{item.title}</span>
                  <span className="quiz-link-meta">
                    {item.questionCount} questions
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="results-bottom-actions">
            <Link to={courseHome} className="btn-results practice-more-btn">
              View all quizzes
            </Link>
          </div>
        </div>
        )}
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
        {question.promptHtml ? (
          <div
            className="q-text q-text-html"
            dangerouslySetInnerHTML={{ __html: question.promptHtml }}
          />
        ) : (
          <div className="q-text">{question.prompt}</div>
        )}
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
              ? `✓ Correct: Option ${LETTERS[question.correctIndex]}`
              : `✗ Incorrect: The correct answer is Option ${LETTERS[question.correctIndex]}`}
          </p>
          <div
            className="exp-content"
            dangerouslySetInnerHTML={{ __html: question.explanation }}
          />
        </div>
      )}

      <ReportIssueButton
        context={{
          course: quiz.course,
          quiz: quiz.key,
          quizTitle: quiz.title,
          questionId: question.id,
          questionIndex: index,
          prompt: question.prompt,
          selectedLetter: userAnswer === null ? null : LETTERS[userAnswer],
          correctLetter: LETTERS[question.correctIndex],
        }}
      />

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
