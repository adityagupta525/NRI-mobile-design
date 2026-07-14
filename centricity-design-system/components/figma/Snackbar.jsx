// figma node: 121:27 Snackbar
export function Snackbar(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 320,
      height: 68,
      borderRadius: 16,
      backgroundColor: "var(--bg-elevated)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07), 0px 12px 32px 0px rgba(0,0,0,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "14px 16px 14px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "rgba(81,211,96,0.14)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--status-positive)",
          flexShrink: 0,
        }}>{props.text1 ?? "✓"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,255,255,0.92)",
        flexShrink: 0,
      }}>{props.text2 ?? "SIP started successfully"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--accent-default)",
        flexShrink: 0,
      }}>{props.text3 ?? "Undo"}</span>
    </div>
  );
}
export default Snackbar;
