// figma node: 121:42 InlineBanner (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "tone=" + __venc(p.tone);

export function InlineBanner(_p = {}) {
  const props = { ..._p, tone: _p.tone ?? "info" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 59,
      borderRadius: 12,
      backgroundColor: "var(--accent-default)",
      boxShadow: "inset 0 0 0 1px var(--accent-default)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "12px 14px 12px 14px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--accent-default)",
        flexShrink: 0,
      }}>{props.text1 ?? "ⓘ"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgba(255,255,255,0.92)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.text2 ?? "Markets are volatile today. Review before large orders."}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 56,
      borderRadius: 12,
      backgroundColor: "var(--status-warning)",
      boxShadow: "inset 0 0 0 1px var(--status-warning)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "12px 14px 12px 14px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--status-warning)",
        flexShrink: 0,
      }}>{props.text1 ?? "⚠"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgba(255,255,255,0.92)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.text2 ?? "Markets are volatile today. Review before large orders."}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 55,
      borderRadius: 12,
      backgroundColor: "var(--status-positive)",
      boxShadow: "inset 0 0 0 1px var(--status-positive)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "12px 14px 12px 14px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--status-positive)",
        flexShrink: 0,
      }}>{props.text1 ?? "✓"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgba(255,255,255,0.92)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.text2 ?? "Markets are volatile today. Review before large orders."}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 55,
      borderRadius: 12,
      backgroundColor: "var(--status-negative)",
      boxShadow: "inset 0 0 0 1px var(--status-negative)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "12px 14px 12px 14px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--status-negative)",
        flexShrink: 0,
      }}>{props.text1 ?? "✕"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgba(255,255,255,0.92)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.text2 ?? "Something needs your attention."}</span>
    </div>
  );
  const __impls = {
    // figma: Tone=info
    "tone=info": __body0,
    // figma: Tone=warning
    "tone=warning": __body1,
    // figma: Tone=positive
    "tone=positive": __body2,
    // figma: Tone=negative
    "tone=negative": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default InlineBanner;
