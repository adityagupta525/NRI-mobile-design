// figma node: 115:36 MarketTicker
export function MarketTicker(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 343,
      borderRadius: 12,
      backgroundColor: "var(--bg-surface)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 16px 12px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 9,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          letterSpacing: "0.400px",
          color: "rgba(255,255,255,0.72)",
          flexShrink: 0,
        }}>{props.text1 ?? "NIFTY 50"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>{props.text2 ?? "24,318"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 9,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--status-positive)",
            flexShrink: 0,
          }}>{props.text3 ?? "▲0.74%"}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 1,
        height: 24,
        backgroundColor: "rgba(255,255,255,0.12)",
        flexShrink: 0,
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 9,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          letterSpacing: "0.400px",
          color: "rgba(255,255,255,0.72)",
          flexShrink: 0,
        }}>{props.text4 ?? "SENSEX"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>79,842</span>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 9,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--status-positive)",
            flexShrink: 0,
          }}>▲0.74%</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 1,
        height: 24,
        backgroundColor: "rgba(255,255,255,0.12)",
        flexShrink: 0,
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 9,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          letterSpacing: "0.400px",
          color: "rgba(255,255,255,0.72)",
          flexShrink: 0,
        }}>USD/INR</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>94.47</span>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 9,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--status-negative)",
            flexShrink: 0,
          }}>▼0.74%</span>
        </div>
      </div>
    </div>
  );
}
export default MarketTicker;
