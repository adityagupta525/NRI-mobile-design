// figma node: 116:14 PromoBanner
export function PromoBanner(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 343,
      overflow: "hidden",
      borderRadius: 20,
      background: "linear-gradient(95.065deg, rgb(138,111,85) -7.44%, rgb(110,85,56) 48.51%, rgb(123,63,18) 85.81%)",
      boxShadow: "inset 0 0 0 0.500px var(--accent-default), 0px 6px 20px 0px rgba(0,0,0,0.25), inset 0px 1px 0px 0px rgba(255,255,255,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "16px 18px 16px 18px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 94,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: 1.2000000476837158,
          color: "var(--color-grey-92-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Are you overpaying tax on your India investments?"}</span>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--bg-canvas)",
          boxShadow: "0px 2px 6px 0px rgba(0,0,0,0.3), inset 0px 1px 0px 0px rgba(255,255,255,0.08)",
          display: "flex",
          flexDirection: "row",
          padding: "10px 18px 10px 18px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.92)",
            flexShrink: 0,
          }}>{props.text2 ?? "Check my savings"}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 132,
        overflow: "hidden",
        backgroundColor: "rgba(255,255,255,0.07)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 9,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.92)",
          flexShrink: 0,
        }}>{props.text3 ?? "India Gate"}</span>
      </div>
    </div>
  );
}
export default PromoBanner;
