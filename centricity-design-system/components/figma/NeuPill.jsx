// figma node: 27:6 NeuPill (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function NeuPill(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 999,
      backgroundColor: "var(--bg-elevated)",
      boxShadow: "-8px -8px 12px 0px rgba(255,255,255,0.04), 8px 8px 12px 0px rgba(0,0,0,0.16)",
      display: "flex",
      flexDirection: "row",
      padding: "9px 16px 9px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,255,255,0.82)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "1Y"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 999,
      backgroundColor: "var(--bg-surfacealt)",
      boxShadow: "inset -3px -3px 6px 0px rgba(255,255,255,0.03), inset 3px 3px 6px 0px rgba(0,0,0,0.3)",
      display: "flex",
      flexDirection: "row",
      padding: "9px 16px 9px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--accent-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "1Y"}</span>
    </div>
  );
  const __impls = {
    // figma: State=Default
    "state=default": __body0,
    // figma: State=Pressed
    "state=pressed": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default NeuPill;
