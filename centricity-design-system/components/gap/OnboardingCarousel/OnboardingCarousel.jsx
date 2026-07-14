import React, { useState, useRef } from "react";

/** OnboardingCarousel — 3-4 intro slides with copper pagination dots, Skip + Next, and
 *  swipe gesture. Slides: [{ art, title, body }]. Final slide's Next becomes the CTA. */
export function OnboardingCarousel({ slides = [], onSkip, onDone, ctaLabel = "Get started" }) {
  const [i, setI] = useState(0);
  const startX = useRef(null);
  const last = i === slides.length - 1;

  function down(e) { startX.current = e.touches ? e.touches[0].clientX : e.clientX; }
  function up(e) {
    if (startX.current == null) return;
    const x = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const dx = startX.current - x;
    if (dx > 50 && i < slides.length - 1) setI(i + 1);
    if (dx < -50 && i > 0) setI(i - 1);
    startX.current = null;
  }
  function next() { last ? onDone && onDone() : setI(i + 1); }

  const s = slides[i] || {};
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", fontFamily: "var(--font-ui)" }}>
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "8px 8px 0" }}>
        <button onClick={onSkip} style={{ background: "none", border: "none", color: "var(--text-tertiary)", fontFamily: "var(--font-ui)", fontSize: 14, fontWeight: 600, cursor: "pointer", padding: 8 }}>Skip</button>
      </div>
      <div
        onMouseDown={down} onMouseUp={up} onTouchStart={down} onTouchEnd={up}
        style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "12px 32px", cursor: "grab", userSelect: "none" }}
      >
        <div style={{ width: 180, height: 180, borderRadius: "var(--radius-xl)", background: "radial-gradient(circle at 40% 35%, rgba(182,147,119,0.22), transparent 60%), var(--surface-card)", border: "1px solid var(--border-hairline)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 56, marginBottom: 28 }}>{s.art}</div>
        <div style={{ fontSize: 22, fontWeight: 700, color: "var(--cream-100)" }}>{s.title}</div>
        <div style={{ fontSize: 15, color: "var(--text-secondary)", marginTop: 10, lineHeight: "21px", maxWidth: 300 }}>{s.body}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 20 }}>
        {slides.map((_, n) => (
          <span key={n} style={{ width: n === i ? 20 : 6, height: 6, borderRadius: "var(--radius-full)", background: n === i ? "var(--copper-400)" : "var(--surface-pressed)", transition: "width var(--duration-base) var(--easing-standard)" }} />
        ))}
      </div>
      <div style={{ padding: "0 20px calc(20px + var(--frame-safe-bottom, 20px))" }}>
        <button onClick={next} className="cent-copper-cta" style={{ width: "100%", height: 54, border: "none", fontFamily: "var(--font-ui)", fontSize: 16, fontWeight: 700, cursor: "pointer" }}>{last ? ctaLabel : "Next"}</button>
      </div>
    </div>
  );
}
