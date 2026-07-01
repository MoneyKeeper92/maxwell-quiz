import { Navigate, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cash-to-accrual" element={<Navigate to="/cashtoaccrual" replace />} />
          <Route path="/:quizKey" element={<QuizPage />} />
        </Routes>
      </div>
    </>
  );
}
