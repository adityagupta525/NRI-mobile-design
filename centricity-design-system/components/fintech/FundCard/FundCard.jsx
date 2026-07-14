import React from "react";

/** FundCard — mutual fund summary card used in lists (Popular with NRIs, search results). */
export function FundCard({ icon, name, category, cagr, minSip, style }) {
  return (
    <div
      className="cent-grain"
      style={{
        background: "var(--surface-card)",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-card)",
        padding: "var(--space-4)",
        width: 220,
        ...style,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <div style={{ width: 36, height: 36, borderRadius: "var(--radius-sm)", background: "var(--surface-raised)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{icon}</div>
        <div style={{ fontFamily: "var(--font-ui)", fontSize: 14, fontWeight: 600, color: "var(--text-primary)", lineHeight: "18px" }}>{name}</div>
      </div>
      <div style={{ fontFamily: "var(--font-ui)", fontSize: 12, color: "var(--text-tertiary)", marginBottom: 14 }}>{category}</div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div className="cent-type-datalabel" style={{ color: "var(--text-meta)", marginBottom: 4 }}>3Y CAGR</div>
          <div className="cent-numeral" style={{ fontSize: 14, fontWeight: 600, color: "var(--green-base)" }}>{cagr}</div>
        </div>
        <div>
          <div className="cent-type-datalabel" style={{ color: "var(--text-meta)", marginBottom: 4 }}>MIN. SIP</div>
          <div className="cent-numeral" style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>{minSip}</div>
        </div>
      </div>
    </div>
  );
}
