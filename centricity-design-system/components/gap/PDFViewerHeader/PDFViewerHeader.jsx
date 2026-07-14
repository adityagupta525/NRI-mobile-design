import React from "react";

/** PDFViewerHeader — statement viewer header: close, title, page count, download + share
 *  IconButton actions. Sits above a rendered statement/PDF. */
export function PDFViewerHeader({ title, page = 1, pageCount = 1, onClose, onDownload, onShare }) {
  const Ico = ({ d }) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{d}</svg>;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", background: "var(--surface-raised)", borderBottom: "1px solid var(--border-hairline)", fontFamily: "var(--font-ui)" }}>
      <button onClick={onClose} style={{ width: 40, height: 40, borderRadius: "var(--radius-md)", background: "var(--surface-card)", border: "1px solid var(--border-hairline)", color: "var(--text-primary)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
        <Ico d={<path d="M18 6L6 18M6 6l12 12"/>} />
      </button>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{title}</div>
        <div className="cent-type-datalabel-sm" style={{ color: "var(--text-meta)", marginTop: 2 }}>Page {page} of {pageCount}</div>
      </div>
      <button onClick={onDownload} style={{ width: 40, height: 40, borderRadius: "var(--radius-md)", background: "var(--surface-card)", border: "1px solid var(--border-hairline)", color: "var(--copper-300)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
        <Ico d={<><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><path d="M7 10l5 5 5-5M12 15V3"/></>} />
      </button>
      <button onClick={onShare} style={{ width: 40, height: 40, borderRadius: "var(--radius-md)", background: "var(--surface-card)", border: "1px solid var(--border-hairline)", color: "var(--copper-300)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
        <Ico d={<><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></>} />
      </button>
    </div>
  );
}
