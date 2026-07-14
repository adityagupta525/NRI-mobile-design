import React from "react";

/** ComparisonView — strict 2-fund side-by-side (375px). Sticky fund headers, metric rows
 *  with mono micro-labels, and a subtle copper "better value" highlight (never a green/red table). */
export function ComparisonView({ funds, metrics }) {
  // funds: [{ name, sub }, {…}] ; metrics: [{ label, values:[a,b], better: 0|1|null, hint }]
  const col = { flex: 1, minWidth: 0 };
  return (
    <div style={{ fontFamily: "var(--font-ui)" }}>
      {/* sticky headers */}
      <div style={{ position: "sticky", top: 0, zIndex: 2, display: "flex", gap: 10, padding: "12px 0", background: "var(--surface-canvas)", borderBottom: "1px solid var(--border-hairline)" }}>
        {funds.map((f, i) => (
          <div key={i} style={{ ...col, textAlign: "center" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)", lineHeight: "17px" }}>{f.name}</div>
            <div className="cent-type-datalabel" style={{ color: "var(--text-meta)", marginTop: 4 }}>{f.sub}</div>
          </div>
        ))}
      </div>
      {/* metric rows */}
      {metrics.map((m, r) => (
        <div key={r} style={{ padding: "12px 0", borderBottom: "1px solid var(--border-hairline)" }}>
          <div className="cent-type-datalabel" style={{ color: "var(--text-meta)", textAlign: "center", marginBottom: 8 }}>{m.label}</div>
          <div style={{ display: "flex", gap: 10 }}>
            {m.values.map((v, i) => {
              const best = m.better === i;
              return (
                <div key={i} style={{ ...col, textAlign: "center" }}>
                  <div
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 5, padding: best ? "4px 10px" : "4px 0",
                      borderRadius: "var(--radius-full)",
                      background: best ? "rgba(182,147,119,0.16)" : "transparent",
                      color: best ? "var(--copper-200)" : "var(--text-secondary)",
                      fontFamily: "var(--font-numeral)", fontVariantNumeric: "tabular-nums",
                      fontSize: 14, fontWeight: best ? 700 : 500,
                    }}
                  >
                    {best && <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--copper-400)" }} />}
                    {v}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
