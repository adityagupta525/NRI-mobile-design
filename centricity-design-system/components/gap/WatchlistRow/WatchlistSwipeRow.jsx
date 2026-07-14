import React, { useRef, useState } from "react";

/** WatchlistSwipeRow — fund row with left-swipe reveal of Invest (copper) + Remove (brick).
 *  Spring snap-back; a selection-tick haptic should fire when the drag crosses threshold.
 *  Touch + pointer drag; also works with the built-in demo toggle for non-touch preview. */
export function WatchlistSwipeRow({ name, meta, nav, change, up, onInvest, onRemove, onHaptic }) {
  const [dx, setDx] = useState(0);
  const start = useRef(null);
  const fired = useRef(false);
  const REVEAL = 140;
  const THRESHOLD = 70;

  function down(e) { start.current = (e.touches ? e.touches[0].clientX : e.clientX) + dx; fired.current = false; }
  function move(e) {
    if (start.current == null) return;
    const x = (e.touches ? e.touches[0].clientX : e.clientX);
    let next = start.current - x; // drag left => positive
    next = Math.max(0, Math.min(REVEAL, next));
    if (next >= THRESHOLD && !fired.current) { fired.current = true; onHaptic && onHaptic("selection"); }
    if (next < THRESHOLD) fired.current = false;
    setDx(next);
  }
  function up_() {
    if (start.current == null) return;
    setDx(dx >= THRESHOLD ? REVEAL : 0); // snap open or closed
    start.current = null;
  }

  return (
    <div style={{ position: "relative", overflow: "hidden", background: "var(--surface-canvas)" }}>
      {/* action layer */}
      <div style={{ position: "absolute", inset: 0, display: "flex", justifyContent: "flex-end" }}>
        <button onClick={onInvest} style={{ width: 70, border: "none", background: "var(--copper-500)", color: "var(--ink-900)", fontFamily: "var(--font-ui)", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>Invest</button>
        <button onClick={onRemove} style={{ width: 70, border: "none", background: "var(--red-base)", color: "#fff", fontFamily: "var(--font-ui)", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>Remove</button>
      </div>
      {/* foreground row */}
      <div
        onMouseDown={down} onMouseMove={move} onMouseUp={up_} onMouseLeave={up_}
        onTouchStart={down} onTouchMove={move} onTouchEnd={up_}
        style={{
          position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 16px", background: "var(--surface-card)",
          transform: `translateX(${-dx}px)`,
          transition: start.current == null ? "transform var(--duration-base) var(--easing-spring)" : "none",
          cursor: "grab", userSelect: "none",
        }}
      >
        <div>
          <div style={{ fontFamily: "var(--font-ui)", fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>{name}</div>
          <div className="cent-type-datalabel" style={{ color: "var(--text-meta)", marginTop: 3 }}>{meta}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontFamily: "var(--font-numeral)", fontVariantNumeric: "tabular-nums", fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>{nav}</div>
          <div style={{ fontFamily: "var(--font-numeral)", fontVariantNumeric: "tabular-nums", fontSize: 12, fontWeight: 600, color: up ? "var(--data-positive)" : "var(--data-negative)", marginTop: 2 }}>{change}</div>
        </div>
      </div>
    </div>
  );
}
