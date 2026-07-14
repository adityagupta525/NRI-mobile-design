import React, { useState } from "react";

/** Tooltip — frosted glass hint, tap-to-show on mobile (no hover). */
export function Tooltip({ label, children }) {
  const [show, setShow] = useState(false);
  return (
    <span style={{ position: "relative", display: "inline-flex" }} onClick={() => setShow(!show)}>
      {children}
      {show && (
        <span
          className="cent-glass"
          style={{
            position: "absolute",
            bottom: "calc(100% + 8px)",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "8px 12px",
            borderRadius: "var(--radius-sm)",
            fontFamily: "var(--font-ui)",
            fontSize: 12,
            color: "var(--text-primary)",
            whiteSpace: "nowrap",
            zIndex: 10,
          }}
        >
          {label}
        </span>
      )}
    </span>
  );
}
