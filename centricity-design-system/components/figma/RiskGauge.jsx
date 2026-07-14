// figma node: 189:106 RiskGauge
export function RiskGauge(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 200,
      borderRadius: 16,
      backgroundColor: "var(--bg-surface)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "16px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 160,
        height: 86,
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 160,
          height: 160,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.12)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 160,
          height: 160,
          borderRadius: "50%",
          background: "linear-gradient(90deg, rgb(81,211,96) 0.00%, rgb(204,144,0) 50.00%, rgb(225,74,10) 100.00%)",
        }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.92)",
          flexShrink: 0,
        }}>{props.text1 ?? "Moderate"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 10,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.72)",
          flexShrink: 0,
        }}>{props.text2 ?? "Risk level 3 / 5"}</span>
      </div>
    </div>
  );
}
export default RiskGauge;
