import React, { useState } from "react";

/** TextInput — single-line field with floating label, help/error text, focus ring. */
export function TextInput({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  helpText,
  errorText,
  disabled = false,
  necessity,
  leadingIcon,
  trailingIcon,
}) {
  const [focused, setFocused] = useState(false);
  const invalid = !!errorText;
  return (
    <div style={{ fontFamily: "var(--font-ui)", width: "100%" }}>
      {label && (
        <div style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 6 }}>
          {label} {necessity === "required" && <span style={{ color: "var(--copper-400)" }}>*</span>}
          {necessity === "optional" && <span style={{ color: "var(--text-tertiary)" }}>(optional)</span>}
        </div>
      )}
      <div
        style={{
          height: 52,
          borderRadius: "var(--radius-md)",
          background: "var(--surface-raised)",
          border: `1px solid ${invalid ? "var(--brick-500)" : focused ? "var(--border-focus)" : "transparent"}`,
          display: "flex",
          alignItems: "center",
          padding: "0 14px",
          gap: 8,
          opacity: disabled ? 0.5 : 1,
        }}
      >
        {leadingIcon}
        <input
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={onChange}
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            color: "var(--text-primary)",
            fontFamily: "var(--font-ui)",
            fontSize: 15,
          }}
        />
        {trailingIcon}
      </div>
      {(helpText || errorText) && (
        <div style={{ fontSize: 12, marginTop: 6, color: invalid ? "var(--brick-500)" : "var(--text-tertiary)" }}>
          {errorText || helpText}
        </div>
      )}
    </div>
  );
}
