// figma node: 123:23 ErrorState
export function ErrorState(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 300,
      borderRadius: 24,
      backgroundColor: "var(--bg-surface)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "32px 28px 32px 28px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 72,
        height: 72,
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "rgba(255,96,56,0.14)",
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
          fontSize: 30,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--status-negative)",
          flexShrink: 0,
        }}>{props.text1 ?? "⚠"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,255,255,0.92)",
        flexShrink: 0,
      }}>{props.text2 ?? "Something went wrong"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "17px",
        color: "rgba(255,255,255,0.82)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text3 ?? "We couldn’t load your portfolio. Check your connection and try again."}</span>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 8,
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12)",
        display: "flex",
        flexDirection: "row",
        padding: "12px 22px 12px 22px",
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
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.82)",
          flexShrink: 0,
        }}>{props.text4 ?? "Retry"}</span>
      </div>
    </div>
  );
}
export default ErrorState;
