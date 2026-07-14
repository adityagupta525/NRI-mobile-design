import React, { useState } from "react";

/** ButtonGroup — segmented control for 2-3 short options (SIP vs Lumpsum, 1M/3M/6M/1Y). */
export function ButtonGroup({ options, defaultActive = 0, onChange, fullWidth = true }) {
  const [active, setActive] = useState(defaultActive);
  function select(i) {
    setActive(i);
    onChange && onChange(i);
  }
  return (
    <div
      style={{
        display: "flex",
        background: "var(--surface-raised)",
        borderRadius: "var(--radius-sm)",
        padding: 4,
        width: fullWidth ? "100%" : "fit-content",
      }}
    >
      {options.map((opt, i) => (
        <button
          key={opt}
          onClick={() => select(i)}
          style={{
            flex: fullWidth ? 1 : "none",
            padding: "8px 16px",
            border: "none",
            borderRadius: "var(--radius-xs)",
            background: active === i ? "var(--copper-500)" : "transparent",
            color: active === i ? "var(--ink-900)" : "var(--text-secondary)",
            fontFamily: "var(--font-ui)",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            transition: "all var(--duration-fast) var(--easing-standard)",
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
