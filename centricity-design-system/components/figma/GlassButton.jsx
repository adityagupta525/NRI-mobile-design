// figma node: 109:8 GlassButton (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2);

export function GlassButton(_p = {}) {
  const props = { ..._p, style2: _p.style2 ?? "icon" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 12,
      backgroundColor: "rgba(17,17,17,0.2)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "15px 20px 15px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 18,
        borderRadius: "50%",
        backgroundColor: "rgb(217,217,217)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,255,255,0.92)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Continue with Google"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 12,
      backgroundColor: "rgba(17,17,17,0.2)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "15px 20px 15px 20px",
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
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,255,255,0.92)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Continue with Google"}</span>
    </div>
  );
  const __impls = {
    // figma: Style=icon
    "style2=icon": __body0,
    // figma: Style=text
    "style2=text": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default GlassButton;
