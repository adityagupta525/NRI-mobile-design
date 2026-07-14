import React from "react";

const Check = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>;

/** FolioSelector — single-select list of folios (AMC + folio number), BottomSheet pattern. */
export function FolioSelector({ folios = [], value, onChange, title = "Select folio" }) {
  return (
    <div className="cent-grain" style={{ background: "var(--surface-sheet)", borderRadius: "var(--radius-lg) var(--radius-lg) 0 0", boxShadow: "var(--shadow-sheet)", overflow: "hidden", fontFamily: "var(--font-ui)" }}>
      <div style={{ display: "flex", justifyContent: "center", padding: "12px 0 4px" }}>
        <span style={{ width: 36, height: 4, borderRadius: "var(--radius-full)", background: "var(--grey-600)" }} />
      </div>
      <div style={{ padding: "8px 20px 12px", fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }}>{title}</div>
      <div style={{ padding: "0 8px calc(12px + var(--frame-safe-bottom, 20px))" }}>
        {folios.map((f) => {
          const on = f.folio === value;
          return (
            <button key={f.folio} onClick={() => onChange && onChange(f.folio)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 12px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: on ? 600 : 500, color: on ? "var(--copper-200)" : "var(--text-primary)" }}>{f.amc}</div>
                <div style={{ fontFamily: "var(--font-numeral)", fontSize: 12, color: "var(--text-tertiary)", marginTop: 3 }}>Folio {f.folio}</div>
              </div>
              {on && <span style={{ color: "var(--copper-400)" }}><Check /></span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
