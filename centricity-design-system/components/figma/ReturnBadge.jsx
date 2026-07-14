// figma node: 115:21 ReturnBadge (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "direction=" + __venc(p.direction) + '|' + "style2=" + __venc(p.style2);

export function ReturnBadge(_p = {}) {
  const props = { ..._p, direction: _p.direction ?? "up", style2: _p.style2 ?? "soft" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--status-positive)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 8,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--status-positive)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "▲"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--status-positive)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "+22.4%"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--status-positive)",
      boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.18), inset 0px 1px 0px 0px rgba(255,255,255,0.2)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 8,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--status-positive)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "▲"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--status-positive)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "+22.4%"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--status-negative)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 8,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--status-negative)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "▼"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--status-negative)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "−3.1%"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--status-negative)",
      boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.18), inset 0px 1px 0px 0px rgba(255,255,255,0.2)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 8,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--status-negative)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "▼"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--status-negative)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "−3.1%"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "rgba(255,255,255,0.82)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 8,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,255,255,0.92)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "—"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,255,255,0.92)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "0.0%"}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "rgba(255,255,255,0.82)",
      boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.18), inset 0px 1px 0px 0px rgba(255,255,255,0.2)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 8,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,255,255,0.92)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "—"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,255,255,0.92)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "0.0%"}</span>
    </div>
  );
  const __impls = {
    // figma: Direction=up, Style=soft
    "direction=up|style2=soft": __body0,
    // figma: Direction=up, Style=solid
    "direction=up|style2=solid": __body1,
    // figma: Direction=down, Style=soft
    "direction=down|style2=soft": __body2,
    // figma: Direction=down, Style=solid
    "direction=down|style2=solid": __body3,
    // figma: Direction=flat, Style=soft
    "direction=flat|style2=soft": __body4,
    // figma: Direction=flat, Style=solid
    "direction=flat|style2=solid": __body5,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ReturnBadge;
