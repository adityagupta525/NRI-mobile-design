import React from "react";

const SIZES = {
  small: { height: 40, padX: 16, font: 14, radius: "var(--radius-sm)" },
  medium: { height: 52, padX: 20, font: 15, radius: "var(--radius-sm)" },
  large: { height: 56, padX: 24, font: 16, radius: "var(--radius-sm)" },
};

function variantStyle(variant, disabled) {
  if (disabled) {
    return {
      background: "var(--obsidian-800)",
      color: "var(--text-disabled)",
      border: "1px solid transparent",
      boxShadow: "none",
      opacity: 0.7,
    };
  }
  switch (variant) {
    case "primary": // brushed champagne metal — one per screen
      return {
        background: "var(--accent-metal)",
        color: "var(--text-on-copper)",
        border: "none",
        boxShadow: "var(--shadow-metal)",
      };
    case "secondary": // solid off-white, dark text
      return {
        background: "rgba(255,255,255,0.92)",
        color: "var(--ink-900)",
        border: "none",
        boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
      };
    case "tertiary": // frosted glass
      return {
        background: "var(--surface-glass)",
        color: "var(--text-primary)",
        border: "1px solid var(--copper-shimmer)",
        boxShadow: "inset 0 1px 0 var(--hairline-top)",
        backdropFilter: "blur(var(--blur-glass))",
      };
    case "ghost":
      return {
        background: "transparent",
        color: "var(--copper-400)",
        border: "1px solid transparent",
      };
    case "destructive":
      return {
        background: "var(--obsidian-850)",
        color: "var(--red-base)",
        border: "1px solid rgba(255,96,56,0.35)",
      };
    default:
      return {};
  }
}

/**
 * Button — Centricity's tappable CTA.
 * variant: primary (brushed champagne metal, one per screen) | secondary (solid off-white)
 *          | tertiary (frosted glass) | ghost (copper text) | destructive
 */
export function Button({
  variant = "primary",
  size = "medium",
  fullWidth = false,
  disabled = false,
  loading = false,
  iconLeft = null,
  iconRight = null,
  children,
  onClick,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.medium;
  const vs = variantStyle(variant, disabled);
  return (
    <button
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        height: s.height,
        padding: `0 ${s.padX}px`,
        borderRadius: s.radius,
        fontFamily: "var(--font-ui)",
        fontWeight: 600,
        fontSize: s.font,
        width: fullWidth ? "100%" : undefined,
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "transform var(--duration-fast) var(--easing-standard), filter var(--duration-fast)",
        ...vs,
        ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = "scale(0.97)"; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      {...rest}
    >
      {loading ? <Spinner /> : iconLeft}
      <span>{children}</span>
      {!loading && iconRight}
    </button>
  );
}

function Spinner() {
  return (
    <span
      style={{
        width: 16,
        height: 16,
        borderRadius: "50%",
        border: "2px solid rgba(0,0,0,0.25)",
        borderTopColor: "currentColor",
        display: "inline-block",
        animation: "cent-spin 0.7s linear infinite",
      }}
    />
  );
}
