import React from "react";

/** NomineeCard — compliance-sensitive nominee entry: name, relationship, allocation %.
 *  Renders a list plus a total-allocation validation banner (must sum to 100%) and an
 *  "Add nominee" ghost CTA. Copy stays factual (SEBI-sensitive field). */
export function NomineeCard({ nominees = [], onAdd, onEdit }) {
  const total = nominees.reduce((s, n) => s + (Number(n.allocation) || 0), 0);
  const valid = total === 100;
  return (
    <div style={{ fontFamily: "var(--font-ui)" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {nominees.map((n, i) => (
          <div key={i} onClick={() => onEdit && onEdit(i)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 14, borderRadius: "var(--radius-md)", background: "var(--surface-card)", border: "1px solid var(--border-hairline)", cursor: onEdit ? "pointer" : "default" }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>{n.name}</div>
              <div className="cent-type-datalabel-sm" style={{ color: "var(--text-meta)", marginTop: 3 }}>{n.relationship}</div>
            </div>
            <div style={{ fontFamily: "var(--font-numeral)", fontSize: 16, fontWeight: 700, color: "var(--copper-200)" }}>{n.allocation}%</div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12, padding: "10px 14px", borderRadius: "var(--radius-sm)", background: valid ? "rgba(81,211,96,0.10)" : "rgba(204,144,0,0.10)", border: `1px solid ${valid ? "rgba(81,211,96,0.3)" : "rgba(204,144,0,0.3)"}` }}>
        <span style={{ fontSize: 13, color: valid ? "var(--data-positive)" : "var(--data-warning)" }}>
          {valid ? "Allocation totals 100%" : `Allocation must total 100% (currently ${total}%)`}
        </span>
        <span style={{ fontFamily: "var(--font-numeral)", fontSize: 13, fontWeight: 700, color: valid ? "var(--data-positive)" : "var(--data-warning)" }}>{total}%</span>
      </div>

      <button onClick={onAdd} style={{ width: "100%", height: 48, marginTop: 12, background: "transparent", border: "1px dashed var(--grey-600)", borderRadius: "var(--radius-md)", color: "var(--copper-400)", fontFamily: "var(--font-ui)", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
        + Add nominee
      </button>
    </div>
  );
}
