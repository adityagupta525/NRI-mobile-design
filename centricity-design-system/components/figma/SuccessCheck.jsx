// figma node: 123:30 SuccessCheck
export function SuccessCheck(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 300,
      overflow: "hidden",
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
        position: "absolute",
        left: 60,
        top: -20,
        width: 180,
        height: 180,
        borderRadius: "50%",
        backgroundColor: "rgb(217,217,217)",
      }} />
      <div style={{
        position: "relative",
        width: 80,
        height: 80,
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
          fontSize: 40,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--status-positive)",
          flexShrink: 0,
        }}>{props.text1 ?? "✓"}</span>
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
      }}>{props.text2 ?? "Investment successful"}</span>
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
      }}>{props.text3 ?? "₹25,000 invested in Parag Parikh Flexi Cap. Units allotted in 2 working days."}</span>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 8,
        background: "var(--accent-metal)",
        boxShadow: "inset 0 0 0 1px rgba(110,85,56,0.55)",
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
          color: "rgb(36,28,18)",
          flexShrink: 0,
        }}>{props.text4 ?? "View portfolio"}</span>
      </div>
    </div>
  );
}
export default SuccessCheck;
