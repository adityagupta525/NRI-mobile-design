import { Icon } from './Icon.jsx';

// figma node: 189:127 PaymentMethodRow
export function PaymentMethodRow(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 343,
      borderRadius: 12,
      backgroundColor: "var(--bg-surface)",
      boxShadow: "inset 0 0 0 1px var(--accent-default), inset 0px 1px 0px 1px rgba(255,255,255,0.04), 0px 0px 12px 0px rgba(182,147,119,0.15)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "14px 14px 14px 14px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 40,
        overflow: "hidden",
        borderRadius: 10,
        backgroundColor: "rgba(182,147,119,0.1)",
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
            width: 24,
            height: 24,
            flexShrink: 0,
            color: "rgb(0,0,0)",
          }}>{props.icon1 ?? <Icon name={"bank"} />}</div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.92)",
          flexShrink: 0,
        }}>{props.text1 ?? "UPI · AutoPay"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.72)",
          flexShrink: 0,
        }}>{props.text2 ?? "ashish@okhdfcbank"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        overflow: "hidden",
        borderRadius: 999,
        background: "var(--accent-metal)",
        boxShadow: "inset 0 0 0 2px rgb(182,147,119)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 9,
          height: 9,
          borderRadius: "50%",
          backgroundColor: "rgb(217,217,217)",
          flexShrink: 0,
        }} />
      </div>
    </div>
  );
}
export default PaymentMethodRow;
