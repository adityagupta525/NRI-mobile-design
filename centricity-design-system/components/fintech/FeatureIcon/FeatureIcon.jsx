import React from "react";

/** FeatureIcon — 3D rendered feature/goal icon (obsidian + copper bitmaps extracted from
 *  claude.fig). Use for hero goal tiles (Retirement, Dream House, Child Education, Reports).
 *  Utility tiles (Vault, Calculator, Goals list, etc.) use copper LINE icons via <Icon>, not this.
 *  `name` maps to assets/feature-icons/<name>.png; `basePath` sets the relative asset root. */
const FEATURE_ICON_NAMES = ["retirement", "dream-house", "child-education", "reports"];

export function FeatureIcon({ name, label, size = 60, basePath = "assets/feature-icons", tile = false }) {
  const img = (
    <img
      src={`${basePath}/${name}.png`}
      alt={label || name}
      width={size}
      height={size}
      style={{ objectFit: "contain", opacity: 0.95, display: "block" }}
    />
  );
  if (!tile) return img;
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
      <div style={{ width: size + 40, height: size + 40, borderRadius: "var(--radius-xl)", background: "var(--surface-card)", border: "1px solid var(--border-hairline)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        {img}
      </div>
      {label && <span style={{ fontFamily: "var(--font-ui)", fontSize: 12, fontWeight: 600, color: "var(--text-secondary)" }}>{label}</span>}
    </div>
  );
}
