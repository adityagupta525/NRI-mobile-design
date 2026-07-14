import React from "react";

/** EmptyState — no-data placeholder for empty portfolio, no transactions, no search results. */
export function EmptyState({ icon, title, description, action }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "32px 24px" }}>
      {icon && (
        <div style={{ width: 64, height: 64, borderRadius: "var(--radius-xl)", background: "var(--surface-raised)", color: "var(--text-tertiary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
          {icon}
        </div>
      )}
      <div style={{ fontFamily: "var(--font-ui)", fontSize: 17, fontWeight: 600, color: "var(--text-primary)" }}>{title}</div>
      {description && <div style={{ fontFamily: "var(--font-ui)", fontSize: 14, color: "var(--text-secondary)", marginTop: 6, maxWidth: 260, lineHeight: "20px" }}>{description}</div>}
      {action && <div style={{ marginTop: 20 }}>{action}</div>}
    </div>
  );
}
