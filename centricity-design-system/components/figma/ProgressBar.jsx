// figma node: 121:18 ProgressBar
export function ProgressBar(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 280,
      height: 38,
      display: "flex",
      flexDirection: "column",
      gap: 8,
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
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.82)",
          flexShrink: 0,
        }}>{props.text1 ?? "SIP Goal"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-grey-92-2)",
          flexShrink: 0,
        }}>{props.text2 ?? "₹6.8L / ₹10L"}</span>
      </div>
      <div style={{
        position: "relative",
        height: 8,
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "rgb(0,0,0)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 190,
          borderRadius: 999,
          backgroundColor: "rgb(217,217,217)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
    </div>
  );
}
export default ProgressBar;
