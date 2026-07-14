import { GoalRing } from './GoalRing.jsx';

// figma node: 122:18 GoalCard
export function GoalCard(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 300,
      borderRadius: 20,
      backgroundColor: "var(--bg-surface)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07), inset 0px 1px 0px 1px rgba(255,255,255,0.04), 0px 4px 16px 0px rgba(0,0,0,0.18)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <GoalRing style={{
          position: "relative",
          width: 96,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }} />
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.92)",
          flexShrink: 0,
        }}>{props.text1 ?? "Retirement Fund"}</span>
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
            fontWeight: 600,
            fontSize: 15,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>{props.text2 ?? "₹6.8L"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.72)",
            flexShrink: 0,
          }}>{props.text3 ?? "of ₹10L"}</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "rgba(81,211,96,0.14)",
          display: "flex",
          flexDirection: "row",
          padding: "3px 8px 3px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "0.200px",
            color: "var(--status-positive)",
            flexShrink: 0,
          }}>{props.text4 ?? "ON TRACK"}</span>
        </div>
      </div>
    </div>
  );
}
export default GoalCard;
