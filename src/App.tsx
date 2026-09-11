import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import "./App.css";

export default function App() {
  const location = useLocation();
  // Intermediate quizzes are iframed into Thinkific lessons, so they render
  // without the site header to avoid a page-inside-a-page look.
  const embedded = location.pathname.startsWith("/intermediate");

  return (
    <>
      {!embedded && <Header />}
      <div className={embedded ? "main main-embed" : "main"}>
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
          <Route path="/:quizKey" element={<QuizPage />} />
        </Routes>
      </div>
    </>
  );
}
