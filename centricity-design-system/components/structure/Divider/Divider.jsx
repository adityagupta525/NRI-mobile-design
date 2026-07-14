import React from "react";

/** Divider — hairline separator, horizontal or vertical. */
export function Divider({ orientation = "horizontal", inset = 0 }) {
  if (orientation === "vertical") {
    return <div style={{ width: 1, alignSelf: "stretch", background: "var(--border-hairline)" }} />;
  }
  return <div style={{ height: 1, marginLeft: inset, marginRight: inset, background: "var(--border-hairline)" }} />;
}
