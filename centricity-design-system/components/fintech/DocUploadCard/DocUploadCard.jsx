import React from "react";

const Doc = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>;
const Check = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>;

/** DocUploadCard — KYC document upload slot (PAN, Aadhaar, signature, selfie). */
export function DocUploadCard({ label, hint, uploaded = false, onUpload }) {
  return (
    <button
      onClick={onUpload}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "16px",
        borderRadius: "var(--radius-md)",
        background: "var(--surface-raised)",
        border: `1px dashed ${uploaded ? "transparent" : "var(--grey-600)"}`,
        cursor: "pointer",
        textAlign: "left",
      }}
    >
      <span
        style={{
          width: 40,
          height: 40,
          borderRadius: "var(--radius-sm)",
          background: uploaded ? "var(--sage-500)" : "var(--obsidian-700)",
          color: uploaded ? "var(--ink-900)" : "var(--text-tertiary)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {uploaded ? <Check /> : <Doc />}
      </span>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "var(--font-ui)", fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>{label}</div>
        <div style={{ fontFamily: "var(--font-ui)", fontSize: 12, color: "var(--text-tertiary)", marginTop: 2 }}>{uploaded ? "Uploaded" : hint}</div>
      </div>
      {!uploaded && <span style={{ color: "var(--copper-400)", fontSize: 13, fontWeight: 600 }}>Upload</span>}
    </button>
  );
}
