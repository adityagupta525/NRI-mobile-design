import React from "react";

const FaceID = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M4 8V6a2 2 0 012-2h2M16 4h2a2 2 0 012 2v2M20 16v2a2 2 0 01-2 2h-2M8 20H6a2 2 0 01-2-2v-2" />
    <path d="M9 10v1M15 10v1M12 9v4l-1 1M9.5 15.5c.8.7 1.7 1 2.5 1s1.7-.3 2.5-1" strokeLinecap="round" />
  </svg>
);
const Fingerprint = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
    <path d="M12 10a2 2 0 012 2c0 2-.5 4-1 5.5M8 14c.5 2 .3 3.5-.5 5M12 6a6 6 0 016 6c0 1-.1 2-.3 3M6 8a6 6 0 00-1 4c0 1.5.2 2.5-.3 4M15.5 16.5c-.2 1-.5 2-1 3" />
  </svg>
);

/** BiometricPrompt — Face ID / fingerprint unlock prompt sheet content. */
export function BiometricPrompt({ type = "faceid", title = "Unlock with Face ID", subtitle = "Authenticate to confirm this transaction" }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "8px 0" }}>
      <div className="cent-rim-glow" style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--surface-raised)", color: "var(--copper-400)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
        {type === "faceid" ? <FaceID /> : <Fingerprint />}
      </div>
      <div style={{ fontFamily: "var(--font-ui)", fontSize: 17, fontWeight: 600, color: "var(--text-primary)" }}>{title}</div>
      <div style={{ fontFamily: "var(--font-ui)", fontSize: 14, color: "var(--text-secondary)", marginTop: 6, maxWidth: 240, lineHeight: "20px" }}>{subtitle}</div>
    </div>
  );
}
