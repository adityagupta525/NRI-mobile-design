import { Icon } from './Icon.jsx';

// figma node: 165:158 PhoneInput
export function PhoneInput(_p = {}) {
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
        color: "rgba(255,255,255,0.72)",
        flexShrink: 0,
      }}>{props.text1 ?? "MOBILE NUMBER"}</span>
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
          display: "flex",
          flexDirection: "row",
          gap: 6,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.92)",
            flexShrink: 0,
          }}>{props.text2 ?? "🇮🇳"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.92)",
            flexShrink: 0,
          }}>{props.text3 ?? "+91"}</span>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "rgb(0,0,0)",
            }}>{props.icon1 ?? <Icon name={"caret-down"} />}</div>
        </div>
        <div style={{
          position: "relative",
          width: 1,
          height: 22,
          backgroundColor: "rgba(255,255,255,0.15)",
          flexShrink: 0,
        }} />
        <span style={{
          position: "relative",
          fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "100%",
          color: "var(--color-grey-92-2)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text4 ?? "98220 40321"}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(0,0,0)",
          }}>{props.icon2 ?? <Icon name={"check"} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 10,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--text-meta)",
        flexShrink: 0,
      }}>OTP will be sent to this number</span>
    </div>
  );
}
export default PhoneInput;
