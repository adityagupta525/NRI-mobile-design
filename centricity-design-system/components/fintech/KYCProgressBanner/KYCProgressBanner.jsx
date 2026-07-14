import React, { useState } from "react";

function MiniSwitch({ checked, onChange }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange && onChange(!checked)}
      style={{ width: 46, height: 28, borderRadius: "var(--radius-full)", background: checked ? "var(--copper-500)" : "var(--obsidian-700)", border: "none", position: "relative", cursor: "pointer", padding: 3, transition: "background var(--duration-base) var(--easing-standard)" }}
    >
      <span style={{ display: "block", width: 22, height: 22, borderRadius: "50%", background: "var(--cream-100)", transform: checked ? "translateX(18px)" : "translateX(0)", transition: "transform var(--duration-base) var(--easing-standard)", boxShadow: "0 1px 3px rgba(0,0,0,0.4)" }} />
    </button>
  );
}

/** KYCProgressBanner — dotted-texture grey top banner: title + subtitle + NOTIFY ME toggle.
 *  Sits above the app header while KYC is under review. */
export function KYCProgressBanner({
  title = "Your KYC is in progress\u2026",
  subtitle = "It takes up to 48 hours",
  notify = false,
  onNotifyChange,
}) {
  const [on, setOn] = useState(notify);
  const dots =
    "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "14px 16px 22px",
        background: "linear-gradient(180deg, #2A2D2F 0%, #1B1C1D 100%)",
        backgroundImage: `${dots}, linear-gradient(180deg, #2A2D2F 0%, #1B1C1D 100%)`,
        backgroundSize: "8px 8px, 100% 100%",
      }}
    >
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "var(--font-ui)", fontSize: 15, fontWeight: 700, color: "var(--cream-100)" }}>{title}</div>
        <div style={{ fontFamily: "var(--font-ui)", fontSize: 12, color: "var(--text-tertiary)", marginTop: 2 }}>{subtitle}</div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          padding: "8px 10px",
          borderRadius: "var(--radius-md)",
          background: "var(--obsidian-950)",
          border: "1px solid var(--border-hairline)",
        }}
      >
        <MiniSwitch checked={on} onChange={(v) => { setOn(v); onNotifyChange && onNotifyChange(v); }} />
        <span className="cent-type-datalabel-sm" style={{ color: "var(--text-secondary)" }}>Notify me</span>
      </div>
    </div>
  );
}
