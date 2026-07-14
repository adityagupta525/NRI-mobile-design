import React from "react";

/** Table — compact data table for fund comparison, holdings, statements.
 *  columns: [{ key, label, align }]; rows: array of objects; renderCell optional. */
export function Table({ columns, rows, renderCell }) {
  return (
    <div style={{ width: "100%", fontFamily: "var(--font-ui)" }}>
      <div style={{ display: "flex", padding: "10px 0", borderBottom: "1px solid var(--border-hairline)" }}>
        {columns.map((c) => (
          <div key={c.key} className="cent-type-datalabel-sm" style={{ flex: c.flex || 1, textAlign: c.align || "left", color: "var(--text-meta)" }}>{c.label}</div>
        ))}
      </div>
      {rows.map((row, i) => (
        <div key={i} style={{ display: "flex", padding: "12px 0", borderBottom: "1px solid var(--border-hairline)", alignItems: "center" }}>
          {columns.map((c) => (
            <div key={c.key} style={{ flex: c.flex || 1, textAlign: c.align || "left", fontSize: 13, color: c.numeric ? "var(--text-primary)" : "var(--text-secondary)", fontFamily: c.numeric ? "var(--font-numeral)" : "var(--font-ui)", fontWeight: c.numeric ? 600 : 400 }}>
              {renderCell ? renderCell(c.key, row[c.key], row) : row[c.key]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
