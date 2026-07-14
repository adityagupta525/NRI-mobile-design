import React, { useState } from "react";

const EyeOpen = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>;
const EyeOff = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.94 10.94 0 0112 19c-7 0-11-7-11-7a21.6 21.6 0 015.06-6.06M9.9 4.24A10.4 10.4 0 0112 4c7 0 11 7 11 7a21.7 21.7 0 01-3.22 4.36M1 1l22 22"/></svg>;

/** PasswordInput — masked field with visibility toggle, shares TextInput chrome. */
export function PasswordInput({ label = "Password", placeholder, value, onChange, errorText }) {
  const [visible, setVisible] = useState(false);
  const invalid = !!errorText;
  return (
    <div style={{ fontFamily: "var(--font-ui)", width: "100%" }}>
      {label && <div style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 6 }}>{label}</div>}
      <div
        style={{
          height: 52,
          borderRadius: "var(--radius-md)",
          background: "var(--surface-raised)",
          border: `1px solid ${invalid ? "var(--brick-500)" : "transparent"}`,
          display: "flex",
          alignItems: "center",
          padding: "0 14px",
          gap: 8,
        }}
      >
        <input
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "var(--text-primary)", fontFamily: "var(--font-ui)", fontSize: 15 }}
        />
        <button onClick={() => setVisible(!visible)} style={{ background: "none", border: "none", color: "var(--text-tertiary)", cursor: "pointer", display: "flex" }}>
          {visible ? <EyeOff /> : <EyeOpen />}
        </button>
      </div>
      {errorText && <div style={{ fontSize: 12, marginTop: 6, color: "var(--brick-500)" }}>{errorText}</div>}
    </div>
  );
}
