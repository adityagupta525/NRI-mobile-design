import React, { useState } from "react";
import { formatIndianCurrency } from "../../forms/AmountInput/AmountInput.jsx";

function Slider({ label, min, max, step, value, onChange, format }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
        <span className="cent-type-datalabel" style={{ color: "var(--text-meta)" }}>{label}</span>
        <span style={{ fontFamily: "var(--font-numeral)", fontSize: 16, fontWeight: 700, color: "var(--copper-200)" }}>{format(value)}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: "100%", height: 4, appearance: "none", WebkitAppearance: "none", borderRadius: "var(--radius-full)", outline: "none", background: `linear-gradient(90deg, var(--copper-500) ${pct}%, var(--surface-pressed) ${pct}%)` }}
      />
    </div>
  );
}

/** SIPCalculatorSlider — amount + tenure sliders; projected value shown strictly as an
 *  ESTIMATE with the market-risk disclaimer (Batch 2 voice.disclaimer). Never guaranteed. */
export function SIPCalculatorSlider({ assumedReturn = 12, disclaimer = "Mutual fund investments are subject to market risks. Read all scheme related documents carefully." }) {
  const [amount, setAmount] = useState(10000);
  const [years, setYears] = useState(10);
  const r = assumedReturn / 100 / 12;
  const n = years * 12;
  const fv = Math.round(amount * ((Math.pow(1 + r, n) - 1) / r) * (1 + r));
  const invested = amount * n;

  return (
    <div style={{ fontFamily: "var(--font-ui)" }}>
      <Slider label="Monthly SIP" min={500} max={100000} step={500} value={amount} onChange={setAmount} format={(v) => "₹" + formatIndianCurrency(v)} />
      <Slider label="Tenure" min={1} max={30} step={1} value={years} onChange={setYears} format={(v) => v + (v === 1 ? " year" : " years")} />

      <div className="cent-grain" style={{ background: "var(--surface-card)", borderRadius: "var(--radius-md)", padding: 16, marginTop: 4 }}>
        <div className="cent-type-datalabel" style={{ color: "var(--text-meta)", marginBottom: 6 }}>Estimated value*</div>
        <div style={{ fontFamily: "var(--font-numeral)", fontSize: 30, fontWeight: 600, color: "var(--cream-100)" }}>₹{formatIndianCurrency(fv)}</div>
        <div style={{ display: "flex", gap: 16, marginTop: 10 }}>
          <div><span className="cent-type-datalabel-sm" style={{ color: "var(--text-meta)" }}>Invested </span><span style={{ fontFamily: "var(--font-numeral)", fontSize: 12, fontWeight: 600, color: "var(--text-secondary)" }}>₹{formatIndianCurrency(invested)}</span></div>
          <div><span className="cent-type-datalabel-sm" style={{ color: "var(--text-meta)" }}>Assumed </span><span style={{ fontFamily: "var(--font-numeral)", fontSize: 12, fontWeight: 600, color: "var(--text-secondary)" }}>{assumedReturn}% p.a.</span></div>
        </div>
      </div>
      <div style={{ fontSize: 11, color: "var(--text-tertiary)", marginTop: 10, lineHeight: "15px" }}>
        *Estimate at an assumed {assumedReturn}% annual return, not a guarantee. Past performance does not indicate future returns. {disclaimer}
      </div>
    </div>
  );
}
