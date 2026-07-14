import React from "react";

const Chevron = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>;

/** ActionListItem — the base row primitive for lists (settings, fund lists, notifications). */
export function ActionListItem({ leading, title, subtitle, trailing = "chevron", onClick, destructive = false }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "14px 0",
        background: "none",
        border: "none",
        textAlign: "left",
        cursor: onClick ? "pointer" : "default",
      }}
    >
      {leading}
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "var(--font-ui)", fontSize: 15, fontWeight: 500, color: destructive ? "var(--brick-500)" : "var(--text-primary)" }}>{title}</div>
        {subtitle && <div style={{ fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--text-tertiary)", marginTop: 2 }}>{subtitle}</div>}
      </div>
      {trailing === "chevron" && <span style={{ color: "var(--text-tertiary)" }}><Chevron /></span>}
      {trailing && trailing !== "chevron" && trailing}
    </button>
  );
}
