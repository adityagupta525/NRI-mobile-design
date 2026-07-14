import React, { useEffect, useState } from "react";

/** ConfirmationSuccess — THE single celebration moment (per motion system): reserved for
 *  first order placed. Copper particle burst + checkmark draw-on (~600ms spring), then an
 *  order-summary slot. Do NOT reuse for routine confirmations — use Toast for those.
 *  Fires a success-notification haptic on mount (onHaptic). */
export function ConfirmationSuccess({ title = "Order placed", message, summary = [], onHaptic, onPrimary, primaryLabel = "View portfolio" }) {
  const [go, setGo] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGo(true), 40);
    onHaptic && onHaptic("success");
    return () => clearTimeout(t);
  }, []);

  const particles = Array.from({ length: 12 });
  return (
    <div style={{ textAlign: "center", fontFamily: "var(--font-ui)", padding: "8px 0" }}>
      <div style={{ position: "relative", width: 96, height: 96, margin: "0 auto 20px" }}>
        {/* particle burst */}
        {particles.map((_, i) => {
          const ang = (i / particles.length) * Math.PI * 2;
          const dx = Math.cos(ang) * 52, dy = Math.sin(ang) * 52;
          return (
            <span key={i} style={{
              position: "absolute", left: "50%", top: "50%", width: 6, height: 6, borderRadius: "50%",
              background: i % 2 ? "var(--copper-300)" : "var(--copper-200)",
              transform: go ? `translate(${dx}px, ${dy}px) scale(0)` : "translate(0,0) scale(1)",
              opacity: go ? 0 : 1,
              transition: "transform 600ms var(--easing-spring), opacity 600ms ease-out",
            }} />
          );
        })}
        {/* ring + checkmark */}
        <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "var(--accent-metal)", boxShadow: "var(--glow-copper)", display: "flex", alignItems: "center", justifyContent: "center", transform: go ? "scale(1)" : "scale(0.6)", opacity: go ? 1 : 0, transition: "transform 500ms var(--easing-spring), opacity 300ms ease-out" }}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--ink-900)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" style={{ strokeDasharray: 32, strokeDashoffset: go ? 0 : 32, transition: "stroke-dashoffset 400ms 250ms var(--easing-standard)" }} />
          </svg>
        </div>
      </div>

      <div style={{ fontSize: 22, fontWeight: 700, color: "var(--cream-100)" }}>{title}</div>
      {message && <div style={{ fontSize: 14, color: "var(--text-secondary)", marginTop: 6, lineHeight: "20px" }}>{message}</div>}

      {summary.length > 0 && (
        <div className="cent-grain" style={{ background: "var(--surface-card)", borderRadius: "var(--radius-md)", padding: 16, marginTop: 20, textAlign: "left" }}>
          {summary.map((row, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderTop: i ? "1px solid var(--border-hairline)" : "none" }}>
              <span className="cent-type-datalabel-sm" style={{ color: "var(--text-meta)" }}>{row.k}</span>
              <span style={{ fontFamily: row.mono ? "var(--font-numeral)" : "var(--font-ui)", fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>{row.v}</span>
            </div>
          ))}
        </div>
      )}

      {onPrimary && (
        <button onClick={onPrimary} className="cent-copper-cta" style={{ width: "100%", height: 52, marginTop: 20, border: "none", fontFamily: "var(--font-ui)", fontSize: 16, fontWeight: 700, cursor: "pointer" }}>{primaryLabel}</button>
      )}
    </div>
  );
}
