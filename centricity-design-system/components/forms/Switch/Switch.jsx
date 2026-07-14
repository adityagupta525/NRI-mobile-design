import React from "react";

/** Switch — toggle used for settings, notify-me, biometric unlock, etc. */
export function Switch({ checked = false, onChange, disabled = false }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange && onChange(!checked)}
      style={{
        width: 46,
        height: 28,
        borderRadius: "var(--radius-full)",
        background: checked ? "var(--copper-500)" : "var(--obsidian-700)",
        border: "none",
        position: "relative",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: "background var(--duration-base) var(--easing-standard)",
        padding: 3,
      }}
    >
      <span
        style={{
          display: "block",
          width: 22,
          height: 22,
          borderRadius: "50%",
          background: "var(--cream-100)",
          transform: checked ? "translateX(18px)" : "translateX(0)",
          transition: "transform var(--duration-base) var(--easing-standard)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.4)",
        }}
      />
    </button>
  );
}
