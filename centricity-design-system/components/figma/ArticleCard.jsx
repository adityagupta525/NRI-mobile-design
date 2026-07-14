// figma node: 116:21 ArticleCard
export function ArticleCard(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 300,
      borderRadius: 16,
      backgroundColor: "var(--bg-surface)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07), 0px 4px 14px 0px rgba(0,0,0,0.2), inset 0px 1px 0px 0px rgba(255,255,255,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 4,
          backgroundColor: "rgba(255,255,255,0.04)",
          display: "flex",
          flexDirection: "row",
          padding: "3px 8px 3px 8px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 8,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "0.600px",
            color: "var(--accent-default)",
            flexShrink: 0,
          }}>{props.text1 ?? "MARKET OUTLOOK"}</span>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          lineHeight: 1.25,
          color: "rgba(255,255,255,0.92)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "Where is the market headed in H2 2026?"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.72)",
            flexShrink: 0,
          }}>{props.text3 ?? "By Centricity Research"}</span>
          <div style={{
            position: "relative",
            width: 3,
            height: 3,
            borderRadius: "50%",
            backgroundColor: "var(--text-meta)",
            flexShrink: 0,
          }} />
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.72)",
            flexShrink: 0,
          }}>{props.text4 ?? "4 min read"}</span>
        </div>
      </div>
      <svg width={84} viewBox="0 0 84 84" fill="none" style={{
        position: "relative",
        width: 84,
        overflow: "hidden",
        borderRadius: 12,
        flexShrink: 0,
        alignSelf: "stretch",
        color: "rgba(255,255,255,0.07)",
      }}>
        <path d={"M 0 12 C 0 5.373 5.373 0 12 0 L 72 0 C 78.627 0 84 5.373 84 12 L 84 72 C 84 78.627 78.627 84 72 84 L 12 84 C 5.373 84 0 78.627 0 72 L 0 12 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default ArticleCard;
