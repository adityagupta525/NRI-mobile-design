import React from "react";

/** Radio — single-select circular control, used for SIP/Lumpsum and corridor pickers. */
export function Radio({ checked = false, onChange, label, disabled = false }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, fontFamily: "var(--font-ui)" }}>
      <span
        onClick={() => !disabled && onChange && onChange(true)}
        style={{
          width: 22,
          height: 22,
          borderRadius: "50%",
          border: `1.5px solid ${checked ? "var(--copper-500)" : "var(--grey-500)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {checked && <span style={{ width: 12, height: 12, borderRadius: "50%", background: "var(--copper-500)" }} />}
      </span>
      {label && <span style={{ fontSize: 15, color: "var(--text-primary)" }}>{label}</span>}
    </label>
  );
}
