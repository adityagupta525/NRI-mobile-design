import { Icon } from './Icon.jsx';
import { Toggle } from './Toggle.jsx';

// figma node: 450:677 NotifyRow
export function NotifyRow(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 343,
      borderRadius: 16,
      backgroundColor: "rgba(255,255,255,0.07)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "14px 16px 14px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Icon name={"bell"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.92)",
          flexShrink: 0,
        }}>{props.text1 ?? "Notify me when I'm ready"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--text-meta)",
          flexShrink: 0,
        }}>{props.text2 ?? "So you don't have to keep checking"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 52,
          height: 32,
          flexShrink: 0,
        }}>{props.icon2 ?? <Toggle state={"off"} />}</div>
    </div>
  );
}
export default NotifyRow;
