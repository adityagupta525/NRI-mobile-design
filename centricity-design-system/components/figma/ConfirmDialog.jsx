// figma node: 122:47 ConfirmDialog
export function ConfirmDialog(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 300,
      borderRadius: 24,
      backgroundColor: "var(--bg-elevated)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07), 0px 20px 48px 0px rgba(0,0,0,0.55)",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "24px 20px 20px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 48,
        height: 48,
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "rgba(204,144,0,0.14)",
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
          fontSize: 22,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--status-warning)",
          flexShrink: 0,
        }}>{props.text1 ?? "!"}</span>
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
      }}>{props.text2 ?? "Confirm redemption?"}</span>
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
      }}>{props.text3 ?? "Redeeming ₹1,50,000 may attract exit load & STCG tax. This cannot be undone."}</span>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12)",
          display: "flex",
          flexDirection: "row",
          padding: "12px 20px 12px 20px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
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
          }}>{props.text4 ?? "Cancel"}</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          background: "var(--accent-metal)",
          boxShadow: "inset 0 0 0 1px rgba(110,85,56,0.55)",
          display: "flex",
          flexDirection: "row",
          padding: "12px 20px 12px 20px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(36,28,18)",
            flexShrink: 0,
          }}>Confirm</span>
        </div>
      </div>
    </div>
  );
}
export default ConfirmDialog;
