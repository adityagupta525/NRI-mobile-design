import React from "react";

/** Skeleton — loading placeholder block with shimmer sweep. */
export function Skeleton({ width = "100%", height = 16, radius = "var(--radius-xs)" }) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: radius,
        background: "linear-gradient(90deg, var(--obsidian-800) 25%, var(--obsidian-700) 37%, var(--obsidian-800) 63%)",
        backgroundSize: "400% 100%",
        animation: "cent-shimmer 1.6s ease-in-out infinite",
      }}
    />
  );
}
