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

/** NetworkErrorState — reassuring offline/failed-request full-screen state with a retry CTA.
 *  Copy reassures ("your data is safe"), never blames. Voice: voice.error.network. */
export function NetworkErrorState({ title = "You're offline", body = "We couldn't reach our servers. Your data is safe — check your connection and try again.", onRetry }) {
  const icon = <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 1l22 22M16.7 11.7A6 6 0 0012 10M5 12.5a10 10 0 015-2.6M8.5 16.4a4 4 0 015 0M12 20h.01"/></svg>;
  return <FullScreenState icon={icon} title={title} body={body} ctaLabel="Try again" onCta={onRetry} />;
}
