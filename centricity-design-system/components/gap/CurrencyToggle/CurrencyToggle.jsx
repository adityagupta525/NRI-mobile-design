import React, { useState } from "react";

/** CurrencyToggle — DISPLAY-currency only for NRIs viewing value. Does NOT imply FX
 *  conversion or a transactable rate; underlying investment currency stays INR.
 *  Segmented control with an "indicative" label. Haptic: selection tick on change. */
export function CurrencyToggle({ options = ["₹", "AED", "SGD"], value = "₹", onChange, onHaptic }) {
  const [active, setActive] = useState(value);
  function select(c) {
    setActive(c);
    onChange && onChange(c);
    onHaptic && onHaptic("selection");
  }
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", gap: 4 }}>
      <div style={{ display: "inline-flex", background: "var(--surface-raised)", borderRadius: "var(--radius-sm)", padding: 3 }}>
        {options.map((c) => {
          const on = c === active;
          return (
            <button
              key={c}
              onClick={() => select(c)}
              style={{
                minWidth: 44, height: 32, padding: "0 12px", border: "none",
                borderRadius: "var(--radius-xs)",
                background: on ? "var(--copper-500)" : "transparent",
                color: on ? "var(--ink-900)" : "var(--text-secondary)",
                fontFamily: "var(--font-ui)", fontSize: 13, fontWeight: 700, cursor: "pointer",
                transition: "all var(--duration-fast) var(--easing-standard)",
              }}
            >
              {c}
            </button>
          );
        })}
      </div>
      <span className="cent-type-datalabel-sm" style={{ color: "var(--text-meta)" }}>Indicative · invested in ₹</span>
    </div>
  );
}
