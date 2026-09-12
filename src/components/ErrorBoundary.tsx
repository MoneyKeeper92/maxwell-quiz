import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  failed: boolean;
}

/**
 * Keeps one bad question from blanking the page.
 *
 * Explanations are injected as HTML and quizzes are loaded as separate chunks,
 * so a render error is possible in content rather than code. Without a boundary
 * React unmounts the whole tree and the reader gets a white screen inside a
 * Thinkific lesson, with no way to tell what happened.
 */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("Quiz failed to render:", error, info.componentStack);
  }

  render(): ReactNode {
    if (!this.state.failed) return this.props.children;
    return (
      <div className="not-found-card" role="alert">
        <h1>Something went wrong</h1>
        <p>
          This quiz couldn&apos;t be displayed. Refreshing the page usually
          fixes it.
        </p>
        <button
          type="button"
          className="btn-results"
          onClick={() => window.location.reload()}
        >
          Reload
        </button>
      </div>
    );
  }
}
