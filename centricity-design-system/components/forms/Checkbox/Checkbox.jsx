import React from "react";

const Check = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>;

/** Checkbox — square selection control. */
export function Checkbox({ checked = false, indeterminate = false, onChange, label, disabled = false }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, fontFamily: "var(--font-ui)" }}>
      <span
        onClick={() => !disabled && onChange && onChange(!checked)}
        style={{
          width: 22,
          height: 22,
          borderRadius: "var(--radius-xs)",
          background: checked || indeterminate ? "var(--copper-500)" : "transparent",
          border: checked || indeterminate ? "none" : "1.5px solid var(--grey-500)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--ink-900)",
        }}
      >
        {indeterminate ? <span style={{ width: 10, height: 2, background: "var(--ink-900)" }} /> : checked && <Check />}
      </span>
      {label && <span style={{ fontSize: 15, color: "var(--text-primary)" }}>{label}</span>}
    </label>
  );
}
