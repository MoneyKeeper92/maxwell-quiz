import { useLocation } from "react-router-dom";
import { getCatalogItem } from "../data/registry";

export default function Header() {
  const location = useLocation();
  const quizKey = location.pathname.split("/").filter(Boolean)[0];
  const catalogItem = getCatalogItem(quizKey);

  let subtitle = "Free FAR Practice Quizzes";
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
