import React from "react";

function FullScreenState({ icon, title, body, meta, ctaLabel, onCta }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "40px 32px", fontFamily: "var(--font-ui)", minHeight: 360 }}>
      <div style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--surface-card)", border: "1px solid var(--border-hairline)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--copper-300)", marginBottom: 20 }}>{icon}</div>
      <div style={{ fontSize: 19, fontWeight: 700, color: "var(--text-primary)" }}>{title}</div>
      <div style={{ fontSize: 14, color: "var(--text-secondary)", marginTop: 8, lineHeight: "20px", maxWidth: 280 }}>{body}</div>
      {meta && <div className="cent-type-datalabel" style={{ color: "var(--text-meta)", marginTop: 14 }}>{meta}</div>}
      {ctaLabel && (
        <button onClick={onCta} style={{ marginTop: 24, height: 48, padding: "0 24px", background: "var(--surface-glass)", border: "1px solid var(--copper-shimmer)", borderRadius: "var(--radius-sm)", color: "var(--text-primary)", fontFamily: "var(--font-ui)", fontSize: 15, fontWeight: 600, cursor: "pointer" }}>{ctaLabel}</button>
      )}
    </div>
  );
}

/** MaintenanceState — planned-downtime full-screen state with an optional ETA slot.
 *  Reassuring copy ("your portfolio is untouched"). Voice: voice.error.maintenance. */
export function MaintenanceState({ title = "Quick tune-up in progress", body = "We're making Centricity better. Investing is paused for a few minutes — your portfolio is untouched.", eta, onRetry }) {
  const icon = <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a4 4 0 01-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 015.4-5.4l-2.6 2.6-2-2 2.6-2.6z"/></svg>;
  return <FullScreenState icon={icon} title={title} body={body} meta={eta ? `Estimated back by ${eta}` : null} ctaLabel="Retry now" onCta={onRetry} />;
}
