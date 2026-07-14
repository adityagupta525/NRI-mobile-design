import React, { useState } from "react";

/** FundFilterSheet — bottom sheet (never a dropdown) with multi-select chip groups for
 *  fund category / AMC / risk, a sticky "Apply (n)" copper CTA and a "Clear all" ghost.
 *  Pair with a trigger that shows the active filter count badge. */
export function FundFilterSheet({ groups, selected = {}, onToggle, onApply, onClear, count = 0 }) {
  return (
    <div className="cent-grain" style={{ background: "var(--surface-sheet)", borderRadius: "var(--radius-lg) var(--radius-lg) 0 0", boxShadow: "var(--shadow-sheet)", overflow: "hidden" }}>
      <div style={{ display: "flex", justifyContent: "center", padding: "12px 0 4px" }}>
        <span style={{ width: 36, height: 4, borderRadius: "var(--radius-full)", background: "var(--grey-600)" }} />
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 20px 16px" }}>
        <span style={{ fontFamily: "var(--font-ui)", fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }}>Filters</span>
        <button onClick={onClear} style={{ background: "none", border: "none", color: "var(--copper-400)", fontFamily: "var(--font-ui)", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Clear all</button>
      </div>

      <div style={{ maxHeight: 380, overflowY: "auto", padding: "0 20px 16px" }}>
        {groups.map((g) => (
          <div key={g.key} style={{ marginBottom: 20 }}>
            <div className="cent-type-datalabel" style={{ color: "var(--text-meta)", marginBottom: 10 }}>{g.label}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {g.options.map((opt) => {
                const on = (selected[g.key] || []).includes(opt);
                return (
                  <button
                    key={opt}
                    onClick={() => onToggle && onToggle(g.key, opt)}
                    style={{
                      height: 36, padding: "0 14px", borderRadius: "var(--radius-full)",
                      background: on ? "rgba(182,147,119,0.16)" : "var(--surface-glass-input)",
                      border: `1px solid ${on ? "var(--copper-shimmer)" : "var(--border-hairline)"}`,
                      color: on ? "var(--copper-200)" : "var(--text-secondary)",
                      fontFamily: "var(--font-ui)", fontSize: 13, fontWeight: 600, cursor: "pointer",
                      transition: "all var(--duration-fast) var(--easing-standard)",
                    }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: "12px 20px calc(12px + var(--frame-safe-bottom, 20px))", borderTop: "1px solid var(--border-hairline)", background: "var(--surface-sheet)" }}>
        <button
          onClick={onApply}
          className="cent-copper-cta"
          style={{ width: "100%", height: 52, border: "none", fontFamily: "var(--font-ui)", fontSize: 16, fontWeight: 700, cursor: "pointer" }}
        >
          Apply{count > 0 ? ` (${count})` : ""}
        </button>
      </div>
    </div>
  );
}
