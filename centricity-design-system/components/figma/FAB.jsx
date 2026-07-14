import { Icon } from './Icon.jsx';

// figma node: 190:98 FAB
export function FAB(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 999,
      boxShadow: "inset 0 0 0 1px rgba(110,85,56,0.55)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "16px 22px 16px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(36,28,18)",
        }}>{props.icon1 ?? <Icon name={"plus"} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(36,28,18)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Invest"}</span>
    </div>
  );
}
export default FAB;
