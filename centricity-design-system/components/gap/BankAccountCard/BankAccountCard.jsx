import React from "react";

const Check = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>;
const STATE = {
  verified: { c: "var(--status-verified)", label: "Verified", icon: <Check /> },
  pending: { c: "var(--status-pending)", label: "Verification pending", icon: "•" },
  failed: { c: "var(--status-failed)", label: "Verification failed", icon: "!" },
};

/** BankAccountCard — NRI bank account: NRE/NRO/FCNR type, masked number, bank-logo slot,
 *  verification state (verified/pending/failed) and an optional primary badge.
 *  Pairs with the "Select bank account" BottomSheet. */
export function BankAccountCard({ bankName, logo, accountType = "NRE", masked, state = "verified", primary = false, onClick }) {
  const st = STATE[state] || STATE.verified;
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%", display: "flex", alignItems: "center", gap: 12, textAlign: "left",
        padding: 14, borderRadius: "var(--radius-md)", background: "var(--surface-card)",
        border: "1px solid var(--border-hairline)", cursor: onClick ? "pointer" : "default",
      }}
    >
      <span style={{ width: 40, height: 40, borderRadius: "var(--radius-sm)", background: "var(--surface-raised)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden", color: "var(--copper-300)", fontFamily: "var(--font-ui)", fontWeight: 700 }}>
        {logo || bankName.slice(0, 1)}
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontFamily: "var(--font-ui)", fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>{bankName}</span>
          <span className="cent-type-datalabel-sm" style={{ color: "var(--copper-300)", border: "1px solid var(--copper-shimmer)", borderRadius: "var(--radius-full)", padding: "1px 6px" }}>{accountType}</span>
          {primary && <span className="cent-type-datalabel-sm" style={{ color: "var(--text-meta)" }}>PRIMARY</span>}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
          <span style={{ fontFamily: "var(--font-numeral)", fontSize: 13, color: "var(--text-secondary)", letterSpacing: "0.5px" }}>{masked}</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4, color: st.c, fontSize: 11, fontWeight: 600 }}>
            <span style={{ width: 14, height: 14, borderRadius: "50%", background: st.c, color: "var(--ink-900)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700 }}>{st.icon}</span>
            {st.label}
          </span>
        </div>
      </div>
    </button>
  );
}
