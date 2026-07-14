import React from "react";

const Check = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>;

/** SortControl — bottom-sheet single-select sort options (returns, AUM, expense ratio, rating).
 *  Radio semantics via a check on the active row; copper accent. */
export function SortControl({ options, value, onChange, title = "Sort by" }) {
  return (
    <div className="cent-grain" style={{ background: "var(--surface-sheet)", borderRadius: "var(--radius-lg) var(--radius-lg) 0 0", boxShadow: "var(--shadow-sheet)", overflow: "hidden" }}>
      <div style={{ display: "flex", justifyContent: "center", padding: "12px 0 4px" }}>
        <span style={{ width: 36, height: 4, borderRadius: "var(--radius-full)", background: "var(--grey-600)" }} />
      </div>
      <div style={{ padding: "8px 20px 12px", fontFamily: "var(--font-ui)", fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }}>{title}</div>
      <div style={{ padding: "0 8px calc(12px + var(--frame-safe-bottom, 20px))" }}>
        {options.map((opt) => {
          const on = opt.value === value;
          return (
            <button
              key={opt.value}
              onClick={() => onChange && onChange(opt.value)}
              style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "14px 12px", background: "none", border: "none", cursor: "pointer",
                fontFamily: "var(--font-ui)", fontSize: 15, fontWeight: on ? 600 : 400,
                color: on ? "var(--copper-200)" : "var(--text-secondary)",
              }}
            >
              {opt.label}
              {on && <span style={{ color: "var(--copper-400)" }}><Check /></span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
