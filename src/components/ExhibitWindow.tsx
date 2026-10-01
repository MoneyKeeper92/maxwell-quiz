import { useCallback, useEffect, useRef, useState } from "react";
import type { SimExhibit } from "../data/types";

interface ExhibitWindowProps {
  exhibit: SimExhibit;
  /** Position in the open stack, so each new window cascades off the last. */
  index: number;
  z: number;
  onFocus: () => void;
  onClose: () => void;
}

/**
 * One exhibit, as a floating window over the simulation.
 *
 * The live player opens exhibits as draggable windows rather than a side panel,
 * and lets several sit open at once: on a seven-exhibit task you compare the
 * invoice against the subledger. Two things follow from that and are easy to
 * get wrong.
 *
 * There is no backdrop. A modal that dims and blocks the page would stop the
 * student typing in the grid, which is the entire point of having the exhibit
 * open. These float, and the grid underneath stays live.
 *
 * Dragging uses pointer events with capture, so a fast drag that leaves the
 * header still tracks, and it never starts from the close button.
 */
export default function ExhibitWindow({
  exhibit,
  index,
  z,
  onFocus,
  onClose,
}: ExhibitWindowProps) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const drag = useRef<{ dx: number; dy: number } | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if ((e.target as HTMLElement).closest("button")) return; // not the ✕
      const el = ref.current;
      if (!el || window.matchMedia("(max-width: 860px)").matches) return;
      const r = el.getBoundingClientRect();
      drag.current = { dx: e.clientX - r.left, dy: e.clientY - r.top };
      setPos({ x: r.left, y: r.top });
      e.currentTarget.setPointerCapture(e.pointerId);
      onFocus();
    },
    [onFocus],
  );

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d) return;
    const w = ref.current?.offsetWidth ?? 0;
    // Keep a grab-strip on screen: a window dragged fully off is unrecoverable,
    // and one dragged above the top takes its own drag handle with it.
    const x = Math.min(Math.max(e.clientX - d.dx, 48 - w), window.innerWidth - 48);
    const y = Math.min(Math.max(e.clientY - d.dy, 0), window.innerHeight - 40);
    setPos({ x, y });
  }, []);

  const endDrag = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    drag.current = null;
    if (e.currentTarget.hasPointerCapture(e.pointerId))
      e.currentTarget.releasePointerCapture(e.pointerId);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Before the first drag the window sits where the cascade put it, so the
  // second exhibit does not land exactly on top of the first.
  const offset = Math.min(index, 5) * 28;
  const style: React.CSSProperties = pos
    ? { left: pos.x, top: pos.y, transform: "none", zIndex: z }
    : {
        left: `calc(50% + ${offset}px)`,
        top: `calc(50% + ${offset}px)`,
        transform: "translate(-50%, -50%)",
        zIndex: z,
      };

  return (
    <div
      className="tbs-window"
      ref={ref}
      style={style}
      role="dialog"
      aria-label={`Exhibit ${exhibit.n}: ${exhibit.title}`}
      onMouseDown={onFocus}
    >
      <div
        className="tbs-window-head"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <span>
          Exhibit {exhibit.n} - {exhibit.title}
        </span>
        <button
          type="button"
          className="tbs-window-close"
          onClick={onClose}
          aria-label={`Close exhibit ${exhibit.n}`}
        >
          ✕
        </button>
      </div>
      <div
        className={`tbs-window-body${exhibit.cls ? ` ${exhibit.cls}` : ""}`}
        // Generated at build time from the AICPA documents in this repo's own
        // source. Not user input, never from the network.
        dangerouslySetInnerHTML={{ __html: exhibit.html }}
      />
    </div>
  );
}
