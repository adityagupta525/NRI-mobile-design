import React, { useRef, useEffect, useState } from "react";

/** NAVTicker — horizontal index/NAV strip. Mono tabular numerals, gain/loss data colors.
 *  Marquee scroll ONLY when content overflows its container (no gratuitous motion). */
export function NAVTicker({ items }) {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const [overflow, setOverflow] = useState(false);

  useEffect(() => {
    const w = wrapRef.current, t = trackRef.current;
    if (!w || !t) return;
    setOverflow(t.scrollWidth > w.clientWidth + 2);
  }, [items]);

  const Row = ({ dup }) =>
    items.map((it, i) => {
      const up = it.up ?? (String(it.change).trim().startsWith("+"));
      return (
        <span key={(dup ? "d" : "") + i} style={{ display: "inline-flex", alignItems: "baseline", gap: 6, marginRight: 24, whiteSpace: "nowrap" }}>
          <span className="cent-type-datalabel" style={{ color: "var(--text-meta)" }}>{it.label}</span>
          <span style={{ fontFamily: "var(--font-numeral)", fontVariantNumeric: "tabular-nums", fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>{it.value}</span>
          <span style={{ fontFamily: "var(--font-numeral)", fontVariantNumeric: "tabular-nums", fontSize: 11, fontWeight: 600, color: up ? "var(--data-positive)" : "var(--data-negative)" }}>{it.change}</span>
        </span>
      );
    });

  return (
    <div ref={wrapRef} style={{ overflow: "hidden", width: "100%", padding: "8px 0", maskImage: overflow ? "linear-gradient(90deg, transparent, #000 24px, #000 calc(100% - 24px), transparent)" : "none", WebkitMaskImage: overflow ? "linear-gradient(90deg, transparent, #000 24px, #000 calc(100% - 24px), transparent)" : "none" }}>
      <div
        ref={trackRef}
        style={{
          display: "inline-flex",
          animation: overflow ? "cent-marquee 22s linear infinite" : "none",
        }}
      >
        <Row />
        {overflow && <Row dup />}
      </div>
    </div>
  );
}
