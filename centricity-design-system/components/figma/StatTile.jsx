// figma node: 119:3 StatTile
export function StatTile(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 150,
      borderRadius: 16,
      backgroundColor: "var(--bg-surface)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07), inset 0px 1px 0px 1px rgba(255,255,255,0.04), 0px 4px 16px 0px rgba(0,0,0,0.18)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "14px 14px 14px 14px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "1px",
        color: "rgba(255,255,255,0.72)",
        flexShrink: 0,
      }}>{props.text1 ?? "INVESTED"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.300px",
        color: "var(--color-grey-92-2)",
        flexShrink: 0,
      }}>{props.text2 ?? "₹2,86,40,000"}</span>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "rgba(81,211,96,0.14)",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "3px 7px 3px 7px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
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
        }}>{props.text3 ?? "▲"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--status-positive)",
          flexShrink: 0,
        }}>{props.text4 ?? "+11.8%"}</span>
      </div>
    </div>
  );
}
export default StatTile;
