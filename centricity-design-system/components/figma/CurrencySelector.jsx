import { Icon } from './Icon.jsx';

// figma node: 190:141 CurrencySelector
export function CurrencySelector(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 999,
      backgroundColor: "rgb(0,0,0)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,255,255,0.92)",
        flexShrink: 0,
      }}>{props.text1 ?? "🇮🇳"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,255,255,0.92)",
        flexShrink: 0,
      }}>{props.text2 ?? "INR"}</span>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(0,0,0)",
        }}>{props.icon1 ?? <Icon name={"caret-down"} />}</div>
    </div>
  );
}
export default CurrencySelector;
