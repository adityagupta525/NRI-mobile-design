import { Icon } from './Icon.jsx';

// figma node: 201:119 SplitButton
export function SplitButton(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "8px 0px 0px 8px",
        background: "var(--accent-metal)",
        boxShadow: "inset 0 0 0 1px rgba(110,85,56,0.55)",
        display: "flex",
        flexDirection: "row",
        padding: "13px 22px 13px 22px",
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
          alignSelf: "stretch",
        }}>{props.text1 ?? "Invest ₹25,000"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 1,
        backgroundColor: "rgba(110,85,56,0.5)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        width: 46,
        overflow: "hidden",
        borderRadius: "0px 8px 8px 0px",
        background: "linear-gradient(171.870deg, rgb(242,230,206) -128.57%, rgb(216,188,156) -42.86%, rgb(182,147,119) 50.00%, rgb(138,111,85) 128.57%, rgb(201,168,136) 228.57%)",
        boxShadow: "inset 0 0 0 1px rgba(110,85,56,0.55)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(36,28,18)",
          }}>{props.icon1 ?? <Icon name={"caret-down"} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
}
export default SplitButton;
