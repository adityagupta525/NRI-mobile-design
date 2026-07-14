// figma node: 119:32 NotificationRow
export function NotificationRow(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 343,
      borderRadius: 16,
      backgroundColor: "var(--bg-surface)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07), inset 0px 1px 0px 1px rgba(255,255,255,0.04), 0px 4px 16px 0px rgba(0,0,0,0.18)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 14px 12px 14px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "6px 0px 6px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "var(--accent-default)",
          flexShrink: 0,
        }} />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.92)",
          flexShrink: 0,
        }}>{props.text1 ?? "2 funds need attention"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 11,
          lineHeight: "16px",
          color: "rgba(255,255,255,0.82)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "Your Mid-cap allocation drifted 8% above target. Review to rebalance."}</span>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 10,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--text-meta)",
          flexShrink: 0,
        }}>{props.text3 ?? "2h ago"}</span>
      </div>
    </div>
  );
}
export default NotificationRow;
