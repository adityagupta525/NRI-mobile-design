import React from "react";

/** IconButton — circular/rounded glass button for icon-only actions (search, bell, back). */
export function IconButton({ size = 44, active = false, badge, children, onClick, ...rest }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "relative",
        width: size,
        height: size,
        borderRadius: "var(--radius-md)",
        background: active ? "var(--surface-pressed)" : "var(--surface-raised)",
        border: "1px solid var(--border-hairline)",
        color: "var(--text-primary)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
      {...rest}
    >
      {children}
      {badge && (
        <span style={{ position: "absolute", top: -2, right: -2, width: 10, height: 10, borderRadius: "50%", background: "var(--copper-400)", border: "2px solid var(--surface-canvas)" }} />
      )}
    </button>
  );
}
