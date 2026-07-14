import React from "react";

/** BottomSheet — Centricity's replacement for modals/dropdowns on mobile. Sheet surface, grab handle, top-radius. */
export function BottomSheet({ open = true, title, children, footer, onClose }) {
  if (!open) return null;
  return (
    <div style={{ position: "relative" }}>
      <div
        onClick={onClose}
        style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)" }}
      />
      <div
        className="cent-grain"
        style={{
          position: "relative",
          background: "var(--surface-sheet)",
          borderRadius: "var(--radius-lg) var(--radius-lg) 0 0",
          boxShadow: "var(--shadow-sheet)",
          padding: "12px 20px calc(20px + 20px)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
          <span style={{ width: 36, height: 4, borderRadius: "var(--radius-full)", background: "var(--grey-600)" }} />
        </div>
        {title && <div style={{ fontFamily: "var(--font-ui)", fontSize: 17, fontWeight: 600, color: "var(--text-primary)", marginBottom: 16 }}>{title}</div>}
        <div>{children}</div>
        {footer && <div style={{ marginTop: 20 }}>{footer}</div>}
      </div>
    </div>
  );
}
