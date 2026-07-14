import React from "react";
import { formatIndianCurrency } from "../../forms/AmountInput/AmountInput.jsx";

/** GoalProgressCard — goal name, target/current amount, copper % progress ring,
 *  on-track/behind status (data colors, not decorative), target date. */
export function GoalProgressCard({ goal, target, current, targetDate, status = "on-track" }) {
  const pct = Math.max(0, Math.min(100, Math.round((current / target) * 100)));
  const size = 64, stroke = 6, r = (size - stroke) / 2, circ = 2 * Math.PI * r;
  const st = status === "on-track"
    ? { c: "var(--data-positive)", label: "On track" }
    : { c: "var(--data-warning)", label: "Behind target" };
  return (
    <div className="cent-grain" style={{ background: "var(--surface-card)", borderRadius: "var(--radius-md)", padding: 16, display: "flex", gap: 14, alignItems: "center", fontFamily: "var(--font-ui)" }}>
      <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
        <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--surface-pressed)" strokeWidth={stroke} />
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--copper-500)" strokeWidth={stroke} strokeLinecap="round" strokeDasharray={`${(pct/100)*circ} ${circ}`} />
        </svg>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-numeral)", fontSize: 14, fontWeight: 700, color: "var(--copper-200)" }}>{pct}%</div>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>{goal}</div>
        <div style={{ fontFamily: "var(--font-numeral)", fontSize: 13, color: "var(--text-secondary)", marginTop: 4 }}>
          ₹{formatIndianCurrency(current)} <span style={{ color: "var(--text-tertiary)" }}>/ ₹{formatIndianCurrency(target)}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12, fontWeight: 600, color: st.c }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: st.c }} />{st.label}
          </span>
          <span className="cent-type-datalabel-sm" style={{ color: "var(--text-meta)" }}>· {targetDate}</span>
        </div>
      </div>
    </div>
  );
}
