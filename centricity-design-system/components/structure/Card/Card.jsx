import React from "react";

/** Card — the base elevated surface: obsidian-850, film grain, radius-md, shadow.card. */
export function Card({ padding = "var(--space-4)", glow = false, children, style, ...rest }) {
  return (
    <div
      className="cent-grain"
      style={{
        background: "var(--surface-card)",
        borderRadius: "var(--radius-md)",
        boxShadow: glow ? "var(--shadow-card), var(--glow-copper)" : "var(--shadow-card)",
        padding,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
