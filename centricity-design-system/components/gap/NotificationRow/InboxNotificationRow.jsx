import React from "react";

const TYPE = {
  order: { c: "var(--copper-400)", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg> },
  alert: { c: "var(--amber-base)", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v4M12 17h.01M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"/></svg> },
  money: { c: "var(--green-base)", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg> },
  info: { c: "var(--text-secondary)", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg> },
};

/** InboxNotificationRow — inbox row: type icon, title, body, timestamp, unread copper dot. */
export function InboxNotificationRow({ type = "info", title, body, time, unread = false, onClick }) {
  const t = TYPE[type] || TYPE.info;
  return (
    <button onClick={onClick} style={{ width: "100%", display: "flex", gap: 12, padding: "14px 4px", background: "none", border: "none", borderBottom: "1px solid var(--border-hairline)", cursor: "pointer", textAlign: "left" }}>
      <span style={{ width: 34, height: 34, borderRadius: "var(--radius-sm)", background: "var(--surface-raised)", color: t.c, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{t.icon}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontFamily: "var(--font-ui)", fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>{title}</span>
          {unread && <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--copper-400)", flexShrink: 0 }} />}
        </div>
        <div style={{ fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--text-tertiary)", marginTop: 3, lineHeight: "18px" }}>{body}</div>
      </div>
      <span className="cent-type-datalabel-sm" style={{ color: "var(--text-meta)", flexShrink: 0 }}>{time}</span>
    </button>
  );
}
