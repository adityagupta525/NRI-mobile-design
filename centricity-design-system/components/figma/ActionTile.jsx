// figma node: 115:22 ActionTile
export function ActionTile(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 72,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 54,
        height: 56,
        overflow: "hidden",
        borderRadius: 16,
        backgroundColor: "var(--bg-elevated)",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07), 0px 2px 8px 0px rgba(0,0,0,0.2), inset 0px 1px 0px 0px rgba(255,255,255,0.06)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          borderRadius: 6,
          flexShrink: 0,
          color: "var(--accent-default)",
        }}>
          <path d={"M 6 0 L 6 1.8 L 18 1.8 L 18 0 L 18 -1.8 L 6 -1.8 L 6 0 Z M 24 6 L 22.2 6 L 22.2 18 L 24 18 L 25.8 18 L 25.8 6 L 24 6 Z M 18 24 L 18 22.2 L 6 22.2 L 6 24 L 6 25.8 L 18 25.8 L 18 24 Z M 0 18 L 1.8 18 L 1.8 6 L 0 6 L -1.8 6 L -1.8 18 L 0 18 Z M 6 24 L 6 22.2 C 3.68 22.2 1.8 20.32 1.8 18 L 0 18 L -1.8 18 C -1.8 22.308 1.692 25.8 6 25.8 L 6 24 Z M 24 18 L 22.2 18 C 22.2 20.32 20.32 22.2 18 22.2 L 18 24 L 18 25.8 C 22.308 25.8 25.8 22.308 25.8 18 L 24 18 Z M 18 0 L 18 1.8 C 20.32 1.8 22.2 3.68 22.2 6 L 24 6 L 25.8 6 C 25.8 1.692 22.308 -1.8 18 -1.8 L 18 0 Z M 6 0 L 6 -1.8 C 1.692 -1.8 -1.8 1.692 -1.8 6 L 0 6 L 1.8 6 C 1.8 3.68 3.68 1.8 6 1.8 L 6 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,255,255,0.82)",
        flexShrink: 0,
      }}>{props.text1 ?? "Reports"}</span>
    </div>
  );
}
export default ActionTile;
