import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import SimPage from "./pages/SimPage";
import "./App.css";
import "./sim.css";

export default function App() {
  const location = useLocation();
  // Intermediate quizzes are iframed into Thinkific lessons, so they render
  // without the site header to avoid a page-inside-a-page look.
  const embedded = location.pathname.startsWith("/intermediate");
  // A simulation draws the exam's own full-width chrome, so it opts out of the
  // 860px reading column the quizzes sit in rather than trying to escape it
  // with negative margins, which have to guess this padding and get it wrong.
  const sim = /^\/(aicpa-far-tbs-110110|official-far-tbs)\/?$/.test(location.pathname);

  return (
    <>
      {!embedded && <Header />}
      <main className={sim ? "main main-sim" : embedded ? "main main-embed" : "main"}>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<HomePage />} />
          <Route
            path="/cash-to-accrual"
            element={<Navigate to="/cashtoaccrual" replace />}
          />
          <Route
            path="/intermediate"
            element={
              <HomePage
                course="intermediate"
                heading="Intermediate Accounting"
                subtitle="Practice quizzes for the Intermediate Accounting course."
              />
            }
          />
          <Route
            path="/intermediate/:quizKey"
            element={<QuizPage course="intermediate" />}
          />
          {/* Simulations sit at the top level beside the quizzes. Declared
              before /:quizKey so the catch-all does not swallow them. */}
          <Route path="/aicpa-far-tbs-110110" element={<SimPage />} />
          <Route path="/official-far-tbs" element={<Navigate to="/aicpa-far-tbs-110110" replace />} />
          <Route path="/:quizKey" element={<QuizPage />} />
          </Routes>
        </ErrorBoundary>
      </main>
    </>
  );
}
