import React from "react";

/** LineChart — SVG performance line with copper gradient area fill, used for portfolio/fund NAV history. */
export function LineChart({ points, width = 320, height = 120 }) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const stepX = width / (points.length - 1);
  const coords = points.map((p, i) => [i * stepX, height - ((p - min) / range) * height]);
  const linePath = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L${width},${height} L0,${height} Z`;
  const gradId = "cent-chart-fill";
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--data-chart-fill-top)" />
          <stop offset="100%" stopColor="var(--data-chart-fill-bottom)" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((f) => (
        <line key={f} x1={0} x2={width} y1={height * f} y2={height * f} stroke="var(--data-chart-grid)" strokeWidth="1" />
      ))}
      <path d={areaPath} fill={`url(#${gradId})`} />
      <path d={linePath} fill="none" stroke="var(--data-chart-line)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

/** BarChart — vertical bars, used for SIP contribution / monthly returns comparisons. */
export function BarChart({ values, width = 320, height = 120, barColor = "var(--copper-500)" }) {
  const max = Math.max(...values);
  const gap = 8;
  const barWidth = (width - gap * (values.length - 1)) / values.length;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {values.map((v, i) => {
        const h = (v / max) * height;
        return (
          <rect
            key={i}
            x={i * (barWidth + gap)}
            y={height - h}
            width={barWidth}
            height={h}
            rx={3}
            fill={barColor}
            opacity={0.5 + 0.5 * (v / max)}
          />
        );
      })}
    </svg>
  );
}

/** DonutChart — allocation/composition ring with center label. */
export const Charts = { get LineChart() { return LineChart; }, get BarChart() { return BarChart; }, get DonutChart() { return DonutChart; } };

export function DonutChart({ segments, size = 120, thickness = 16, centerLabel, centerValue }) {
  const total = segments.reduce((a, s) => a + s.value, 0);
  const r = (size - thickness) / 2;
  const circumference = 2 * Math.PI * r;
  let offset = 0;
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: "rotate(-90deg)" }}>
        {segments.map((s, i) => {
          const frac = s.value / total;
          const dash = frac * circumference;
          const el = (
            <circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke={s.color}
              strokeWidth={thickness}
              strokeDasharray={`${dash} ${circumference - dash}`}
              strokeDashoffset={-offset}
            />
          );
          offset += dash;
          return el;
        })}
      </svg>
      {(centerLabel || centerValue) && (
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          {centerValue && <div className="cent-numeral" style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }}>{centerValue}</div>}
          {centerLabel && <div style={{ fontSize: 10, color: "var(--text-tertiary)", marginTop: 2 }}>{centerLabel}</div>}
        </div>
      )}
    </div>
  );
}
