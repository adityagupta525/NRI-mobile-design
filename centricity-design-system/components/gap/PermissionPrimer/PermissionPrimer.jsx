import React from "react";

/** PermissionPrimer — pre-permission soft ask (camera for KYC, notifications). Explains WHY
 *  before the OS prompt fires, reducing denial rates. Benefit-led copy; Allow + Not now. */
export function PermissionPrimer({ icon, title, body, allowLabel = "Allow", denyLabel = "Not now", onAllow, onDeny }) {
  const defaultIcon = <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>;
  return (
    <div className="cent-grain" style={{ background: "var(--surface-sheet)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-floating)", padding: "28px 24px", textAlign: "center", fontFamily: "var(--font-ui)", maxWidth: 320 }}>
      <div style={{ width: 64, height: 64, borderRadius: "var(--radius-lg)", margin: "0 auto 18px", background: "var(--surface-card)", border: "1px solid var(--copper-shimmer)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--copper-300)" }}>{icon || defaultIcon}</div>
      <div style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)" }}>{title}</div>
      <div style={{ fontSize: 14, color: "var(--text-secondary)", marginTop: 8, lineHeight: "20px" }}>{body}</div>
      <button onClick={onAllow} className="cent-copper-cta" style={{ width: "100%", height: 52, marginTop: 22, border: "none", fontFamily: "var(--font-ui)", fontSize: 16, fontWeight: 700, cursor: "pointer" }}>{allowLabel}</button>
      <button onClick={onDeny} style={{ width: "100%", height: 44, marginTop: 8, background: "none", border: "none", color: "var(--text-tertiary)", fontFamily: "var(--font-ui)", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>{denyLabel}</button>
    </div>
  );
}
