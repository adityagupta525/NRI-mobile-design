import React from "react";

const TONE = {
  positive: { bg: "rgba(127,163,131,0.14)", fg: "var(--sage-500)" },
  negative: { bg: "rgba(184,103,92,0.14)", fg: "var(--brick-500)" },
  warning: { bg: "rgba(201,161,94,0.14)", fg: "var(--amber-500)" },
  processing: { bg: "rgba(201,138,94,0.14)", fg: "var(--copper-400)" },
  neutral: { bg: "var(--obsidian-700)", fg: "var(--text-secondary)" },
};

const DOT = {
  verified: "var(--sage-500)",
  pending: "var(--amber-500)",
  failed: "var(--brick-500)",
  processing: "var(--copper-400)",
};

/** Aggregate export so the Chip directory pairs with a Chip symbol. */
export const Chip = { get StatusChip() { return StatusChip; }, get Badge() { return Badge; } };

/** StatusChip — pill used for KYC/order/fund status across the app. */
export function StatusChip({ tone = "neutral", dot, children }) {
  const t = TONE[tone] || TONE.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        height: 28,
        padding: "0 12px",
        borderRadius: "var(--radius-full)",
        background: t.bg,
        color: t.fg,
        fontFamily: "var(--font-ui)",
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.1px",
      }}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: "50%", background: DOT[dot] || t.fg }} />}
      {children}
    </span>
  );
}

/** Badge — small numeric/label indicator, e.g. notification counts. */
export function Badge({ tone = "neutral", children }) {
  const t = TONE[tone] || TONE.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 18,
        height: 18,
        padding: "0 5px",
        borderRadius: "var(--radius-full)",
        background: t.fg,
        color: "var(--ink-900)",
        fontFamily: "var(--font-numeral)",
        fontSize: 10,
        fontWeight: 700,
      }}
    >
      {children}
    </span>
  );
}
