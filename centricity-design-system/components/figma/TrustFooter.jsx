// figma node: 122:57 TrustFooter
export function TrustFooter(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--accent-default)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "🛡"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          letterSpacing: "0.300px",
          color: "rgba(255,255,255,0.72)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "SEBI"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 3,
        height: 3,
        borderRadius: "50%",
        backgroundColor: "rgba(255,255,255,0.72)",
        flexShrink: 0,
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--accent-default)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text3 ?? "🛡"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          letterSpacing: "0.300px",
          color: "rgba(255,255,255,0.72)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text4 ?? "AMFI ARN"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 3,
        height: 3,
        borderRadius: "50%",
        backgroundColor: "rgba(255,255,255,0.72)",
        flexShrink: 0,
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--accent-default)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>🛡</span>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          letterSpacing: "0.300px",
          color: "rgba(255,255,255,0.72)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>ISO 27001</span>
      </div>
    </div>
  );
}
export default TrustFooter;
