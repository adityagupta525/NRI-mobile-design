import React from "react";

/** ProgressStepper — KYC step rail: horizontal progress bar + step dots, or vertical checklist. */
export function ProgressStepper({ steps, activeIndex, orientation = "horizontal" }) {
  if (orientation === "vertical") {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        {steps.map((label, i) => {
          const state = i < activeIndex ? "done" : i === activeIndex ? "active" : "upcoming";
          return (
            <div key={label} style={{ display: "flex", gap: 12 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: state === "done" ? "var(--sage-500)" : state === "active" ? "var(--copper-500)" : "var(--obsidian-700)",
                    color: "var(--ink-900)",
                    fontSize: 11,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {state === "done" ? "✓" : i + 1}
                </span>
                {i < steps.length - 1 && <span style={{ width: 2, flex: 1, minHeight: 24, background: state === "done" ? "var(--sage-500)" : "var(--obsidian-700)" }} />}
              </div>
              <div style={{ paddingBottom: 20, fontFamily: "var(--font-ui)", fontSize: 14, color: state === "upcoming" ? "var(--text-tertiary)" : "var(--text-primary)", fontWeight: state === "active" ? 600 : 400 }}>
                {label}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div>
      <div style={{ display: "flex", gap: 4 }}>
        {steps.map((_, i) => (
          <span key={i} style={{ height: 4, flex: 1, borderRadius: "var(--radius-full)", background: i <= activeIndex ? "var(--copper-500)" : "var(--obsidian-700)" }} />
        ))}
      </div>
      <div style={{ marginTop: 8, fontFamily: "var(--font-ui)", fontSize: 12, color: "var(--text-tertiary)" }}>
        Step {activeIndex + 1} of {steps.length} — {steps[activeIndex]}
      </div>
    </div>
  );
}
