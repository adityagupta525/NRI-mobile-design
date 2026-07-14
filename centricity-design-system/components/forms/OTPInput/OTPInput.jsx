import React, { useRef, useState } from "react";

/** OTPInput — 6-box segmented numeric code entry, used for mobile/email verification. */
export function OTPInput({ length = 6, onComplete }) {
  const [values, setValues] = useState(Array(length).fill(""));
  const refs = useRef([]);

  function handleChange(i, v) {
    const digit = v.replace(/[^0-9]/g, "").slice(-1);
    const next = [...values];
    next[i] = digit;
    setValues(next);
    if (digit && i < length - 1) refs.current[i + 1]?.focus();
    if (next.every((d) => d !== "") && onComplete) onComplete(next.join(""));
  }

  function handleKeyDown(i, e) {
    if (e.key === "Backspace" && !values[i] && i > 0) refs.current[i - 1]?.focus();
  }

  return (
    <div style={{ display: "flex", gap: "var(--space-2)" }}>
      {values.map((v, i) => (
        <input
          key={i}
          ref={(el) => (refs.current[i] = el)}
          value={v}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          inputMode="numeric"
          maxLength={1}
          style={{
            width: 48,
            height: 56,
            borderRadius: "var(--radius-md)",
            background: "var(--surface-raised)",
            border: v ? "1px solid var(--border-focus)" : "1px solid transparent",
            color: "var(--text-primary)",
            fontFamily: "var(--font-numeral)",
            fontSize: 20,
            fontWeight: 600,
            textAlign: "center",
            outline: "none",
          }}
        />
      ))}
    </div>
  );
}
