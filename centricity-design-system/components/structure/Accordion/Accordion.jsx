import React, { useState } from "react";

const Chevron = ({ open }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform var(--duration-base) var(--easing-standard)" }}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

/** Accordion — single expandable section item, e.g. FAQ or fund detail breakdown. */
export function Accordion({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: "1px solid var(--border-hairline)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "none",
          border: "none",
          padding: "16px 0",
          color: "var(--text-primary)",
          fontFamily: "var(--font-ui)",
          fontSize: 15,
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {title}
        <span style={{ color: "var(--copper-400)" }}><Chevron open={open} /></span>
      </button>
      {open && <div style={{ paddingBottom: 16, color: "var(--text-secondary)", fontSize: 14, lineHeight: "20px" }}>{children}</div>}
    </div>
  );
}
