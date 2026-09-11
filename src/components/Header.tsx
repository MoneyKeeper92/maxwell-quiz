import { useLocation } from "react-router-dom";
import { courseForPath, getCatalogItem } from "../data/registry";

export default function Header() {
  const location = useLocation();
  const course = courseForPath(location.pathname);
  const segments = location.pathname.split("/").filter(Boolean);
  const quizKey = course === "intermediate" ? segments[1] : segments[0];
  const catalogItem = getCatalogItem(quizKey, course);

  let subtitle = "Free CPA Practice Quizzes";
  if (catalogItem) {
    subtitle = catalogItem.title;
  } else if (location.pathname !== "/") {
    subtitle = "Practice Quiz";
  }

  return (
    <header className="header">
      <div className="header-brand">Maxwell CPA Review</div>
      <div className="header-sub">{subtitle}</div>
    </header>
  );
}
