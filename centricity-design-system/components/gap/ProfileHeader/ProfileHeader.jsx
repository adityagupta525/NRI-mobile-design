import React from "react";

/** ProfileHeader — account header: avatar slot, name, masked PAN/email, KYC status chip, corridor. */
export function ProfileHeader({ name, avatar, subtitle, kycStatus = "verified", corridor, onEdit }) {
  const st = {
    verified: { c: "var(--status-verified)", label: "KYC Verified" },
    pending: { c: "var(--status-pending)", label: "KYC Pending" },
    failed: { c: "var(--status-failed)", label: "KYC Action needed" },
  }[kycStatus] || { c: "var(--status-verified)", label: "KYC Verified" };
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: "var(--font-ui)" }}>
      <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--surface-raised)", overflow: "hidden", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--copper-300)", fontSize: 20, fontWeight: 700, border: "1px solid var(--copper-shimmer)" }}>
        {avatar || (name ? name.slice(0, 1) : "")}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)" }}>{name}</div>
        {subtitle && <div style={{ fontFamily: "var(--font-numeral)", fontSize: 13, color: "var(--text-tertiary)", marginTop: 2 }}>{subtitle}</div>}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 5, height: 22, padding: "0 8px", borderRadius: "var(--radius-full)", background: "rgba(255,255,255,0.04)", fontSize: 11, fontWeight: 600, color: st.c }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: st.c }} />{st.label}
          </span>
          {corridor && <span className="cent-type-datalabel-sm" style={{ color: "var(--text-meta)" }}>{corridor}</span>}
        </div>
      </div>
      {onEdit && (
        <button onClick={onEdit} style={{ background: "none", border: "none", color: "var(--copper-400)", cursor: "pointer" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/></svg>
        </button>
      )}
    </div>
  );
}
