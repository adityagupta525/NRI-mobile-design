import React from "react";

const ICONS = {
  positive: "✓",
  negative: "✕",
  info: "i",
};
const TONE = { positive: "var(--sage-500)", negative: "var(--brick-500)", info: "var(--copper-400)" };

/** Toast — transient bottom confirmation, auto-dismisses. Render fixed near tab bar. */
export function Toast({ intent = "info", message, visible = true }) {
  if (!visible) return null;
  return (
    <div
      className="cent-glass cent-grain"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 16px",
        borderRadius: "var(--radius-full)",
        maxWidth: 343,
      }}
    >
      <span style={{ width: 20, height: 20, borderRadius: "50%", background: TONE[intent], color: "var(--ink-900)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>
        {ICONS[intent]}
      </span>
      <span style={{ fontFamily: "var(--font-ui)", fontSize: 14, color: "var(--text-primary)" }}>{message}</span>
    </div>
  );
}
