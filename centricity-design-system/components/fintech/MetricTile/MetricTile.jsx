import React from "react";

/** MetricTile — labeled tabular numeral used for Invested/G-L/XIRR style stat rows. */
export function MetricTile({ label, value, delta, deltaTone = "positive" }) {
  const deltaColor = deltaTone === "positive" ? "var(--sage-500)" : deltaTone === "negative" ? "var(--brick-500)" : "var(--amber-500)";
  return (
    <div>
      <div className="cent-type-datalabel" style={{ color: "var(--text-meta)", marginBottom: 6 }}>{label}</div>
      <div className="cent-numeral" style={{ fontSize: 17, fontWeight: 600, color: "var(--text-primary)" }}>{value}</div>
      {delta && <div className="cent-numeral" style={{ fontSize: 12, fontWeight: 600, color: deltaColor, marginTop: 2 }}>{delta}</div>}
    </div>
  );
}
