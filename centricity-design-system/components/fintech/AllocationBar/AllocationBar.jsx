import React from "react";

/** AllocationBar — horizontal segmented bar for portfolio allocation (equity/debt/gold/intl). */
export function AllocationBar({ segments }) {
  return (
    <div>
      <div style={{ display: "flex", height: 10, borderRadius: "var(--radius-full)", overflow: "hidden" }}>
        {segments.map((s) => (
          <span key={s.label} style={{ width: `${s.pct}%`, background: s.color }} />
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 12 }}>
        {segments.map((s) => (
          <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: s.color }} />
            <span style={{ fontFamily: "var(--font-ui)", fontSize: 12, color: "var(--text-secondary)" }}>{s.label}</span>
            <span className="cent-numeral" style={{ fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }}>{s.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
