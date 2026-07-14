import React from "react";

/** ExitLoadWarningSheet — SEBI-sensitive, informational (amber, not error/brick).
 *  Factual copy: exit load %, holding period, and the actual charge on this redemption.
 *  BottomSheet pattern; reuses voice.disclaimer. */
export function ExitLoadWarningSheet({ exitLoadPct, holdingPeriod, redemptionAmount, chargeAmount, onProceed, onCancel, disclaimer = "Mutual fund investments are subject to market risks. Read all scheme related documents carefully." }) {
  const Warn = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v4M12 17h.01M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"/></svg>;
  const Row = ({ k, v, accent }) => (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderTop: "1px solid var(--border-hairline)" }}>
      <span className="cent-type-datalabel-sm" style={{ color: "var(--text-meta)" }}>{k}</span>
      <span style={{ fontFamily: "var(--font-numeral)", fontSize: 14, fontWeight: 700, color: accent ? "var(--amber-base)" : "var(--text-primary)" }}>{v}</span>
    </div>
  );
  return (
    <div className="cent-grain" style={{ background: "var(--surface-sheet)", borderRadius: "var(--radius-lg) var(--radius-lg) 0 0", boxShadow: "var(--shadow-sheet)", overflow: "hidden", fontFamily: "var(--font-ui)" }}>
      <div style={{ display: "flex", justifyContent: "center", padding: "12px 0 4px" }}>
        <span style={{ width: 36, height: 4, borderRadius: "var(--radius-full)", background: "var(--grey-600)" }} />
      </div>
      <div style={{ padding: "12px 20px calc(20px + var(--frame-safe-bottom, 20px))" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
          <span style={{ color: "var(--amber-base)" }}><Warn /></span>
          <span style={{ fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }}>Exit load applies</span>
        </div>
        <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: "19px", margin: "6px 0 12px" }}>
          Redeeming within the exit-load period will deduct a charge from your redemption amount. Details below.
        </p>
        <div style={{ marginBottom: 12 }}>
          <Row k="EXIT LOAD" v={exitLoadPct} />
          <Row k="HOLDING PERIOD" v={holdingPeriod} />
          <Row k="REDEMPTION AMOUNT" v={redemptionAmount} />
          <Row k="EXIT LOAD CHARGE" v={`− ${chargeAmount}`} accent />
        </div>
        <div style={{ fontSize: 11, color: "var(--text-tertiary)", lineHeight: "15px", marginBottom: 16 }}>{disclaimer}</div>
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={onCancel} style={{ flex: 1, height: 52, background: "var(--surface-glass)", border: "1px solid var(--copper-shimmer)", borderRadius: "var(--radius-sm)", color: "var(--text-primary)", fontFamily: "var(--font-ui)", fontSize: 15, fontWeight: 600, cursor: "pointer" }}>Cancel</button>
          <button onClick={onProceed} style={{ flex: 1, height: 52, background: "var(--surface-card)", border: "1px solid rgba(204,144,0,0.4)", borderRadius: "var(--radius-sm)", color: "var(--amber-base)", fontFamily: "var(--font-ui)", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>Proceed anyway</button>
        </div>
      </div>
    </div>
  );
}
