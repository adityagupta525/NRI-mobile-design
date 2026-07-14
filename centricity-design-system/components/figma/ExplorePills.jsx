// figma node: 115:35 ExplorePills (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "tone=" + __venc(p.tone);

export function ExplorePills(_p = {}) {
  const props = { ..._p, tone: _p.tone ?? "new" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 999,
      backgroundColor: "rgba(161,219,191,0.16)",
      boxShadow: "inset 0 0 0 1px rgba(161,219,191,0.35), 0px 3px 8px 0px rgba(0,0,0,0.22), inset 0px 1px 0px 1px rgba(255,255,255,0.08)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "8px 14px 8px 14px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 6,
        height: 6,
        borderRadius: "50%",
        backgroundColor: "rgb(161,219,191)",
        flexShrink: 0,
      }} />
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(177,219,191)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "New offer fund"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 999,
      backgroundColor: "rgba(173,184,237,0.16)",
      boxShadow: "inset 0 0 0 1px rgba(173,184,237,0.35), 0px 3px 8px 0px rgba(0,0,0,0.22), inset 0px 1px 0px 1px rgba(255,255,255,0.08)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "8px 14px 8px 14px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 6,
        height: 6,
        borderRadius: "50%",
        backgroundColor: "var(--copper-400)",
        flexShrink: 0,
      }} />
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--copper-300)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Upcoming fund"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 999,
      backgroundColor: "rgba(245,204,173,0.16)",
      boxShadow: "inset 0 0 0 1px rgba(245,204,173,0.35), 0px 3px 8px 0px rgba(0,0,0,0.22), inset 0px 1px 0px 1px rgba(255,255,255,0.08)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "8px 14px 8px 14px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 6,
        height: 6,
        borderRadius: "50%",
        backgroundColor: "rgb(245,204,173)",
        flexShrink: 0,
      }} />
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,204,173)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Top performer"}</span>
    </div>
  );
  const __impls = {
    // figma: Tone=new
    "tone=new": __body0,
    // figma: Tone=upcoming
    "tone=upcoming": __body1,
    // figma: Tone=top
    "tone=top": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ExplorePills;
