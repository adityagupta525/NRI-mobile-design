import React from "react";

/** AmountInput — currency field with Indian digit grouping (₹X,XX,XXX) and SIP/Lumpsum-ready sizing. */
export function formatIndianCurrency(n) {
  if (n === "" || n === null || n === undefined) return "";
  const num = typeof n === "string" ? n.replace(/[^0-9.]/g, "") : String(n);
  const [intPart, decPart] = num.split(".");
  let last3 = intPart.slice(-3);
  let other = intPart.slice(0, -3);
  if (other !== "") last3 = "," + last3;
  const formatted = other.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + last3;
  return decPart !== undefined ? `${formatted}.${decPart}` : formatted;
}

export function AmountInput({ label = "Amount", value, onChange, helperText, size = "large" }) {
  const display = formatIndianCurrency(value ?? "");
  const fontSize = size === "large" ? 34 : 22;
  return (
    <div style={{ fontFamily: "var(--font-ui)" }}>
      {label && <div style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 8 }}>{label}</div>}
      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
        <span className="cent-numeral" style={{ fontSize, fontWeight: 500, color: "var(--text-hero-numeral)" }}>₹</span>
        <input
          value={display}
          onChange={(e) => onChange && onChange(e.target.value.replace(/,/g, ""))}
          inputMode="decimal"
          placeholder="0"
          className="cent-numeral"
          style={{
            background: "transparent",
            border: "none",
            outline: "none",
            color: "var(--text-hero-numeral)",
            fontSize,
            fontWeight: 500,
            width: "100%",
          }}
        />
      </div>
      <div style={{ height: 1, background: "var(--border-hairline)", margin: "10px 0" }} />
      {helperText && <div style={{ fontSize: 12, color: "var(--text-tertiary)" }}>{helperText}</div>}
    </div>
  );
}
