import React from "react";

const ICONS = {
  info: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>,
  warning: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>,
  negative: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>,
  positive: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>,
};
const TONE = {
  info: "var(--copper-400)",
  warning: "var(--amber-500)",
  negative: "var(--brick-500)",
  positive: "var(--sage-500)",
};

/** Alert — inline banner for compliance notices, warnings, confirmations. */
export function Alert({ intent = "info", title, description, action }) {
  const color = TONE[intent];
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        padding: "14px 16px",
        borderRadius: "var(--radius-md)",
        background: "var(--surface-raised)",
        border: `1px solid ${color}33`,
      }}
    >
      <span style={{ color, flexShrink: 0, marginTop: 1 }}>{ICONS[intent]}</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "var(--font-ui)", fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>{title}</div>
        {description && <div style={{ fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--text-secondary)", marginTop: 3, lineHeight: "18px" }}>{description}</div>}
        {action && <div style={{ marginTop: 8 }}>{action}</div>}
      </div>
    </div>
  );
}
