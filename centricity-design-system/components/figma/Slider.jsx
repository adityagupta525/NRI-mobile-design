// figma node: 164:35 Slider
export function Slider(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 343,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.82)",
          flexShrink: 0,
        }}>{props.text1 ?? "Monthly SIP"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-grey-92-2)",
          flexShrink: 0,
        }}>{props.text2 ?? "₹25,000"}</span>
      </div>
      <div style={{
        position: "relative",
        height: 20,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 8,
          width: 343,
          height: 4,
          borderRadius: 2,
          backgroundColor: "rgb(0,0,0)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 8,
          width: 206,
          height: 4,
          borderRadius: 2,
          backgroundColor: "rgb(217,217,217)",
        }} />
        <div style={{
          position: "absolute",
          left: 196,
          top: 0,
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "rgb(242,238,227)",
          boxShadow: "inset 0 0 0 1.500px rgba(138,111,85,0.8), 0px 0px 10px 0px rgba(182,147,119,0.4), 0px 2px 6px 0px rgba(0,0,0,0.4)",
        }} />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 10,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--text-meta)",
          flexShrink: 0,
        }}>{props.text3 ?? "₹500"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 10,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--text-meta)",
          flexShrink: 0,
        }}>{props.text4 ?? "₹1,00,000"}</span>
      </div>
    </div>
  );
}
export default Slider;
