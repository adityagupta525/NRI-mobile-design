import React from "react";

/** TransactionRow — order/transaction history row (SIP debit, redemption, dividend). */
export function TransactionRow({ title, subtitle, amount, direction = "debit", status = "verified" }) {
  const amountColor = direction === "credit" ? "var(--sage-500)" : "var(--text-primary)";
  const sign = direction === "credit" ? "+" : "-";
  const statusColor = { verified: "var(--sage-500)", pending: "var(--amber-500)", failed: "var(--brick-500)", processing: "var(--copper-400)" }[status];
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0" }}>
      <div>
        <div style={{ fontFamily: "var(--font-ui)", fontSize: 15, fontWeight: 500, color: "var(--text-primary)" }}>{title}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 3 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: statusColor }} />
          <span style={{ fontFamily: "var(--font-ui)", fontSize: 12, color: "var(--text-tertiary)" }}>{subtitle}</span>
        </div>
      </div>
      <div className="cent-numeral" style={{ fontSize: 15, fontWeight: 600, color: amountColor }}>{sign}{amount}</div>
    </div>
  );
}
