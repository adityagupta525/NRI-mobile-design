import React, { useState } from "react";

const Star = ({ filled }) => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill={filled ? "var(--copper-400)" : "none"} stroke={filled ? "var(--copper-400)" : "var(--grey-500)"} strokeWidth="1.6">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

/** RatingPrompt — trigger-aware app rating (show only after a positive moment). Star row,
 *  dismissible, never blocks. onRate(n): 4-5 → store; ≤3 → route to feedback, not the store. */
export function RatingPrompt({ title = "Enjoying Centricity?", body = "Your rating helps other NRIs invest with confidence.", onRate, onDismiss }) {
  const [hover, setHover] = useState(0);
  const [rated, setRated] = useState(0);
  function pick(n) { setRated(n); onRate && onRate(n); }
  return (
    <div className="cent-grain" style={{ position: "relative", background: "var(--surface-card)", borderRadius: "var(--radius-md)", padding: "20px 18px", textAlign: "center", fontFamily: "var(--font-ui)", border: "1px solid var(--border-hairline)" }}>
      <button onClick={onDismiss} style={{ position: "absolute", top: 10, right: 12, background: "none", border: "none", color: "var(--text-tertiary)", fontSize: 16, cursor: "pointer" }}>✕</button>
      <div style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }}>{title}</div>
      <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 6, lineHeight: "18px" }}>{body}</div>
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 16 }}
        onMouseLeave={() => setHover(0)}>
        {[1, 2, 3, 4, 5].map((n) => (
          <button key={n} onMouseEnter={() => setHover(n)} onClick={() => pick(n)} style={{ background: "none", border: "none", cursor: "pointer", padding: 2 }}>
            <Star filled={n <= (hover || rated)} />
          </button>
        ))}
      </div>
    </div>
  );
}
