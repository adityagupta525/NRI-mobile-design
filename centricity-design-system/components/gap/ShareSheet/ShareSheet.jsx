import React, { useState } from "react";

/** ShareSheet — portfolio/fund share. Portfolio values are sensitive, so the preview has a
 *  "Hide amounts" toggle that masks numerals before sharing. BottomSheet pattern. */
export function ShareSheet({ heading = "Share", previewTitle, previewValue, channels = ["WhatsApp", "Copy link", "More"], onShare, hideByDefault = true }) {
  const [hide, setHide] = useState(hideByDefault);
  const shown = hide ? "₹ ••••••" : previewValue;
  return (
    <div className="cent-grain" style={{ background: "var(--surface-sheet)", borderRadius: "var(--radius-lg) var(--radius-lg) 0 0", boxShadow: "var(--shadow-sheet)", overflow: "hidden", fontFamily: "var(--font-ui)" }}>
      <div style={{ display: "flex", justifyContent: "center", padding: "12px 0 4px" }}>
        <span style={{ width: 36, height: 4, borderRadius: "var(--radius-full)", background: "var(--grey-600)" }} />
      </div>
      <div style={{ padding: "8px 20px 12px", fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }}>{heading}</div>

      <div style={{ margin: "0 20px 16px", padding: 16, borderRadius: "var(--radius-md)", background: "var(--surface-card)", border: "1px solid var(--border-hairline)" }}>
        <div className="cent-type-datalabel" style={{ color: "var(--text-meta)" }}>{previewTitle}</div>
        <div style={{ fontFamily: "var(--font-numeral)", fontSize: 24, fontWeight: 600, color: "var(--cream-100)", marginTop: 6, letterSpacing: hide ? "1px" : 0 }}>{shown}</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "0 20px 16px", padding: "10px 14px", borderRadius: "var(--radius-sm)", background: "var(--surface-glass-input)" }}>
        <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>Hide amounts</span>
        <button role="switch" aria-checked={hide} onClick={() => setHide(!hide)} style={{ width: 46, height: 28, borderRadius: "var(--radius-full)", background: hide ? "var(--copper-500)" : "var(--obsidian-700)", border: "none", position: "relative", cursor: "pointer", padding: 3 }}>
          <span style={{ display: "block", width: 22, height: 22, borderRadius: "50%", background: "var(--cream-100)", transform: hide ? "translateX(18px)" : "translateX(0)", transition: "transform var(--duration-base) var(--easing-standard)" }} />
        </button>
      </div>

      <div style={{ display: "flex", gap: 10, padding: "0 20px calc(20px + var(--frame-safe-bottom, 20px))" }}>
        {channels.map((c) => (
          <button key={c} onClick={() => onShare && onShare(c, hide)} style={{ flex: 1, height: 64, borderRadius: "var(--radius-md)", background: "var(--surface-card)", border: "1px solid var(--border-hairline)", color: "var(--text-secondary)", fontFamily: "var(--font-ui)", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>{c}</button>
        ))}
      </div>
    </div>
  );
}
