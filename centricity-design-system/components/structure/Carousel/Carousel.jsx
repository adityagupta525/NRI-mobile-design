import React, { useState, useRef } from "react";

/** Carousel — horizontal snap slider with copper page dots. Used for promo banners, onboarding. */
export function Carousel({ children, showDots = true }) {
  const items = React.Children.toArray(children);
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  function onScroll() {
    const el = ref.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    if (i !== active) setActive(i);
  }
  return (
    <div>
      <div
        ref={ref}
        onScroll={onScroll}
        style={{ display: "flex", overflowX: "auto", scrollSnapType: "x mandatory", gap: 12, scrollbarWidth: "none" }}
      >
        {items.map((child, i) => (
          <div key={i} style={{ flex: "0 0 100%", scrollSnapAlign: "center" }}>{child}</div>
        ))}
      </div>
      {showDots && items.length > 1 && (
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 12 }}>
          {items.map((_, i) => (
            <span key={i} style={{ width: i === active ? 18 : 6, height: 6, borderRadius: "var(--radius-full)", background: i === active ? "var(--copper-400)" : "var(--surface-pressed)", transition: "width var(--duration-base) var(--easing-standard)" }} />
          ))}
        </div>
      )}
    </div>
  );
}

/** PageDots — standalone dot indicator (when the carousel is driven externally). */
export function PageDots({ count, active = 0 }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 6 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ width: i === active ? 18 : 6, height: 6, borderRadius: "var(--radius-full)", background: i === active ? "var(--copper-400)" : "var(--surface-pressed)" }} />
      ))}
    </div>
  );
}
