import React from "react";

/** Spinner — copper indeterminate loader. */
export function Spinner({ size = 24, tone = "copper" }) {
  const color = tone === "copper" ? "var(--copper-400)" : "var(--text-secondary)";
  return (
    <span
      style={{
        width: size,
        height: size,
        display: "inline-block",
        borderRadius: "50%",
        border: `${Math.max(2, size / 12)}px solid rgba(255,255,255,0.12)`,
        borderTopColor: color,
        animation: "cent-spin 0.8s linear infinite",
      }}
    />
  );
}
