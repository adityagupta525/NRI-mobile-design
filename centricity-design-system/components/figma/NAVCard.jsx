import { Icon } from './Icon.jsx';

// figma node: 190:147 NAVCard
export function NAVCard(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 164,
      borderRadius: 16,
      backgroundColor: "var(--bg-surface)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07), inset 0px 1px 0px 1px rgba(255,255,255,0.04), 0px 4px 16px 0px rgba(0,0,0,0.18)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.72)",
          flexShrink: 0,
        }}>{props.text1 ?? "Today's NAV"}</span>
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
            color: "rgb(0,0,0)",
          }}>{props.icon1 ?? <Icon name={"info"} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 22,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.400px",
        color: "var(--color-grey-92-2)",
        flexShrink: 0,
      }}>{props.text2 ?? "₹68.42"}</span>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgba(81,211,96,0.14)",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        padding: "3px 7px 3px 7px",
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
          color: "var(--status-positive)",
          flexShrink: 0,
        }}>{props.text3 ?? "▲ 0.84 (1.24%)"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 9,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--text-meta)",
        flexShrink: 0,
      }}>{props.text4 ?? "As of 13 Jun 2026"}</span>
    </div>
  );
}
export default NAVCard;
