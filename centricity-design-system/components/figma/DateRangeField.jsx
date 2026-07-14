import { Icon } from './Icon.jsx';

// figma node: 165:137 DateRangeField
export function DateRangeField(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 343,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "1.200px",
        color: "rgba(255,255,255,0.72)",
        flexShrink: 0,
      }}>{props.text1 ?? "PERFORMANCE PERIOD"}</span>
      <div style={{
        position: "relative",
        height: 52,
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "rgba(86,86,86,0.3)",
        boxShadow: "inset 0px 1px 0px 1px rgba(255,255,255,0.05)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 14px 0px 14px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(0,0,0)",
          }}>{props.icon1 ?? <Icon name={"calendar-blank"} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          lineHeight: "100%",
          color: "var(--color-grey-92-2)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "12 Jun 2026  —  03 Jul 2026"}</span>
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
            color: "rgb(0,0,0)",
          }}>{props.icon2 ?? <Icon name={"caret-down"} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "rgb(0,0,0)",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)",
          display: "flex",
          flexDirection: "row",
          padding: "6px 12px 6px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.82)",
            flexShrink: 0,
          }}>{props.text3 ?? "7D"}</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "rgb(0,0,0)",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)",
          display: "flex",
          flexDirection: "row",
          padding: "6px 12px 6px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.82)",
            flexShrink: 0,
          }}>{props.text4 ?? "1M"}</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 999,
          background: "var(--accent-metal)",
          boxShadow: "inset 0px 1px 0px 1px rgba(255,255,255,0.35)",
          display: "flex",
          flexDirection: "row",
          padding: "6px 12px 6px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(36,28,18)",
            flexShrink: 0,
          }}>3M</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "rgb(0,0,0)",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)",
          display: "flex",
          flexDirection: "row",
          padding: "6px 12px 6px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.82)",
            flexShrink: 0,
          }}>1Y</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "rgb(0,0,0)",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)",
          display: "flex",
          flexDirection: "row",
          padding: "6px 12px 6px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.82)",
            flexShrink: 0,
          }}>Custom</span>
        </div>
      </div>
    </div>
  );
}
export default DateRangeField;
