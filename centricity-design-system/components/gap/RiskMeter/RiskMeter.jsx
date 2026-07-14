import React from "react";

/** SEBI Riskometer — regulatory 6-level element. Labels are verbatim and fixed;
 *  re-skinned in Centricity materials (obsidian track, copper active arc + needle).
 *  levelIndex: 0=Low … 5=Very High. */
export const RISK_LEVELS = ["Low", "Low to Moderate", "Moderate", "Moderately High", "High", "Very High"];

export function RiskMeter({ levelIndex = 2, size = 220 }) {
  const idx = Math.max(0, Math.min(5, levelIndex));
  const cx = size / 2;
  const cy = size * 0.52;
  const r = size * 0.4;
  const seg = Math.PI / 6; // 30° per segment across 180°
  const stroke = size * 0.09;

  // arc path for segment i (i=0 at left)
  function arc(i) {
    const a0 = Math.PI - i * seg;
    const a1 = Math.PI - (i + 1) * seg;
    const x0 = cx + r * Math.cos(a0), y0 = cy - r * Math.sin(a0);
    const x1 = cx + r * Math.cos(a1), y1 = cy - r * Math.sin(a1);
    return `M ${x0.toFixed(2)} ${y0.toFixed(2)} A ${r} ${r} 0 0 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`;
  }
  // needle points to middle of active segment
  const na = Math.PI - (idx + 0.5) * seg;
  const nx = cx + r * 0.86 * Math.cos(na);
  const ny = cy - r * 0.86 * Math.sin(na);

  // copper-intensity ramp (copper-only law — no green/red rainbow)
  const shade = (i) => {
    const ramp = ["#3A2E24", "#5C4632", "#7C5E42", "#9C7856", "#BE936F", "#E0B688"];
    return i <= idx ? ramp[i] : "var(--obsidian-700)";
  };

  return (
    <div style={{ fontFamily: "var(--font-ui)", width: size }}>
      <svg width={size} height={size * 0.66} viewBox={`0 0 ${size} ${size * 0.66}`}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path key={i} d={arc(i)} fill="none" stroke={shade(i)} strokeWidth={stroke} strokeLinecap="butt" />
        ))}
        {/* needle */}
        <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="var(--copper-300)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r={size * 0.028} fill="var(--copper-400)" />
      </svg>
      <div style={{ textAlign: "center", marginTop: -6 }}>
        <div className="cent-type-datalabel" style={{ color: "var(--text-meta)", marginBottom: 4 }}>Riskometer</div>
        <div style={{ fontSize: 16, fontWeight: 700, color: "var(--copper-200)" }}>{RISK_LEVELS[idx]}</div>
        <div style={{ fontSize: 11, color: "var(--text-tertiary)", marginTop: 4 }}>Investors understand that their principal will be at {RISK_LEVELS[idx].toLowerCase()} risk</div>
      </div>
    </div>
  );
}
