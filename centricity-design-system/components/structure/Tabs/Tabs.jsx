import React, { useState } from "react";

/** Tabs — segmented navigation, used for Overview/Holdings/Transactions style sub-nav. */
export function Tabs({ items, defaultActive = 0, onChange }) {
  const [active, setActive] = useState(defaultActive);
  function select(i) {
    setActive(i);
    onChange && onChange(i);
  }
  return (
    <div style={{ display: "flex", gap: "var(--space-6)", borderBottom: "1px solid var(--border-hairline)" }}>
      {items.map((label, i) => (
        <button
          key={label}
          onClick={() => select(i)}
          style={{
            background: "none",
            border: "none",
            padding: "0 0 12px 0",
            fontFamily: "var(--font-ui)",
            fontSize: 15,
            fontWeight: 600,
            color: active === i ? "var(--text-primary)" : "var(--text-tertiary)",
            borderBottom: active === i ? "2px solid var(--copper-400)" : "2px solid transparent",
            cursor: "pointer",
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
