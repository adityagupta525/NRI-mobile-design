// figma node: 44:20 SegmentedTabs
export function SegmentedTabs(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 999,
      backgroundColor: "rgba(255,255,255,0.04)",
      boxShadow: "inset 0px 1px 3px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "rgba(182,147,119,0.14)",
        boxShadow: "inset 0 0 0 1px var(--accent-default), 0px 2px 6px 0px rgba(0,0,0,0.3), inset 0px 1px 0px 1px rgba(255,255,255,0.12)",
        display: "flex",
        flexDirection: "row",
        padding: "9px 24px 9px 24px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--accent-default)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Value"}</span>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 999,
        display: "flex",
        flexDirection: "row",
        padding: "9px 24px 9px 24px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.72)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "Return"}</span>
      </div>
    </div>
  );
}
export default SegmentedTabs;
