import React from "react";

const TONE = {
  neutral: { bg: "var(--surface-glass-input)", fg: "var(--text-secondary)", bd: "var(--border-hairline)" },
  copper: { bg: "rgba(182,147,119,0.14)", fg: "var(--copper-300)", bd: "var(--copper-shimmer)" },
};

const Close = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>;

/** Tag — label/filter token for fund categories & applied filters.
 *  Copper-only law: tags use glass (neutral) or copper accent — NEVER green/brick,
 *  which are reserved for numeric gain/loss data. Use StatusChip for status semantics. */
export function Tag({ tone = "neutral", onDismiss, leading, children }) {
  const t = TONE[tone] || TONE.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        height: 30,
        padding: onDismiss ? "0 8px 0 12px" : "0 12px",
        borderRadius: "var(--radius-full)",
        background: t.bg,
        border: `1px solid ${t.bd}`,
        color: t.fg,
        fontFamily: "var(--font-ui)",
        fontSize: 13,
        fontWeight: 600,
      }}
    >
      {leading}
      {children}
      {onDismiss && (
        <button onClick={onDismiss} style={{ display: "flex", background: "none", border: "none", color: "inherit", cursor: "pointer", padding: 2, opacity: 0.8 }}>
          <Close />
        </button>
      )}
    </span>
  );
}
