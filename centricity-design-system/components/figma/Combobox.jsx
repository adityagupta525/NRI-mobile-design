import { Icon } from './Icon.jsx';

// figma node: 201:101 Combobox
export function Combobox(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 343,
      display: "flex",
      flexDirection: "column",
      gap: 8,
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
        color: "rgba(255,255,255,0.82)",
        flexShrink: 0,
      }}>{props.text1 ?? "SEARCH FUND"}</span>
      <div style={{
        position: "relative",
        height: 52,
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "rgba(86,86,86,0.3)",
        boxShadow: "inset 0 0 0 1.200px var(--accent-default), inset 0px 1px 0px 1px rgba(255,255,255,0.05)",
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
          }}>{props.icon1 ?? <Icon name={"magnifying-glass"} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "100%",
          color: "rgba(255,255,255,0.92)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "parag"}</span>
        <div style={{
          position: "relative",
          width: 1.5,
          height: 20,
          backgroundColor: "var(--accent-default)",
          flexShrink: 0,
        }} />
      </div>
      <div style={{
        position: "relative",
        height: 266,
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "var(--bg-elevated)",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07), 0px 16px 40px 0px rgba(0,0,0,0.5)",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        padding: "6px 6px 6px 6px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--accent-default)",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "9px 12px 9px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.92)",
            flexShrink: 0,
          }}>{props.text3 ?? "Parag Parikh Flexi Cap"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.82)",
            flexShrink: 0,
          }}>{props.text4 ?? "Equity · Flexi Cap"}</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "9px 12px 9px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.92)",
            flexShrink: 0,
          }}>Parag Parikh ELSS Tax Saver</span>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.82)",
            flexShrink: 0,
          }}>Equity · ELSS</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "9px 12px 9px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.92)",
            flexShrink: 0,
          }}>Parag Parikh Liquid Fund</span>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.82)",
            flexShrink: 0,
          }}>Debt · Liquid</span>
        </div>
      </div>
    </div>
  );
}
export default Combobox;
