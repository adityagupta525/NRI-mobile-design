// figma node: 119:39 ToolkitCard
export function ToolkitCard(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 343,
      overflow: "hidden",
      borderRadius: 24,
      backgroundColor: "var(--bg-surface)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07), inset 0px 1px 0px 1px rgba(255,255,255,0.04), 0px 4px 16px 0px rgba(0,0,0,0.18)",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "18px 18px 18px 18px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 140,
        top: 40,
        width: 220,
        height: 160,
        borderRadius: "50%",
        backgroundColor: "rgb(217,217,217)",
      }} />
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.300px",
        color: "rgba(255,255,255,0.92)",
        flexShrink: 0,
      }}>{props.text1 ?? "Your analysis toolkit"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "17px",
        color: "rgba(255,255,255,0.82)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "Portfolio overlap, what-if analysis & liquidity pro-grade insights, made simple."}</span>
      <div style={{
        position: "relative",
        height: 70,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 30,
          height: 14,
          opacity: 0.5,
          borderRadius: 4,
          backgroundColor: "rgb(217,217,217)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 30,
          height: 22,
          opacity: 0.5,
          borderRadius: 4,
          background: "linear-gradient(168.977deg, rgb(242,230,206) -114.02%, rgb(216,188,156) -35.29%, rgb(182,147,119) 50.00%, rgb(138,111,85) 122.17%, rgb(201,168,136) 214.02%)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 30,
          height: 34,
          opacity: 0.59,
          borderRadius: 4,
          backgroundColor: "rgb(217,217,217)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 30,
          height: 30,
          opacity: 0.68,
          borderRadius: 4,
          backgroundColor: "rgb(217,217,217)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 30,
          height: 52,
          opacity: 0.77,
          borderRadius: 4,
          backgroundColor: "rgb(217,217,217)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 30,
          height: 42,
          opacity: 0.86,
          borderRadius: 4,
          backgroundColor: "rgb(217,217,217)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 30,
          opacity: 0.95,
          borderRadius: 4,
          backgroundColor: "rgb(217,217,217)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
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
        flexShrink: 0,
        alignSelf: "stretch",
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
        }}>{props.text3 ?? "Discover tools"}</span>
      </div>
    </div>
  );
}
export default ToolkitCard;
