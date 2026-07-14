import React from "react";

const Chevron = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>;

/** SettingsGroup — titled group of setting rows (icon, label, optional value/trailing control).
 *  Rows: { icon, label, value, trailing, onClick, destructive }. */
export function SettingsGroup({ title, items = [] }) {
  return (
    <div style={{ fontFamily: "var(--font-ui)" }}>
      {title && <div className="cent-type-datalabel" style={{ color: "var(--text-meta)", padding: "0 4px 8px" }}>{title}</div>}
      <div style={{ background: "var(--surface-card)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-hairline)", overflow: "hidden" }}>
        {items.map((it, i) => (
          <button
            key={i}
            onClick={it.onClick}
            style={{
              width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "14px 16px",
              background: "none", border: "none", borderTop: i ? "1px solid var(--border-hairline)" : "none",
              cursor: it.onClick ? "pointer" : "default", textAlign: "left",
            }}
          >
            {it.icon && <span style={{ color: it.destructive ? "var(--red-base)" : "var(--copper-300)", display: "flex", flexShrink: 0 }}>{it.icon}</span>}
            <span style={{ flex: 1, fontSize: 15, fontWeight: 500, color: it.destructive ? "var(--red-base)" : "var(--text-primary)" }}>{it.label}</span>
            {it.value && <span style={{ fontSize: 13, color: "var(--text-tertiary)" }}>{it.value}</span>}
            {it.trailing !== undefined ? it.trailing : (it.onClick && !it.destructive && <span style={{ color: "var(--text-tertiary)" }}><Chevron /></span>)}
          </button>
        ))}
      </div>
    </div>
  );
}
