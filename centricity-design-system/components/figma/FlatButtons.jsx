// figma node: 24:10 Flat buttons (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "flatButtons=" + __venc(p.flatButtons) + '|' + "color=" + __venc(p.color);

export function FlatButtons(_p = {}) {
  const props = { ..._p, flatButtons: _p.flatButtons ?? "sm", color: _p.color ?? "black" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 100,
      backgroundColor: "rgb(0,0,0)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 40px 16px 40px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Gilroy-Medium, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "0.005em",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "big button"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 100,
      background: "var(--accent-metal)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 40px 16px 40px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Gilroy-Medium, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "0.005em",
        color: "rgb(42,45,47)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "big button"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 100,
      backgroundColor: "rgb(0,0,0)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "12px 24px 12px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Gilroy-Medium, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "0.025em",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "medium button"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 100,
      background: "var(--accent-metal)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "12px 24px 12px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Gilroy-Medium, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "0.025em",
        color: "rgb(42,45,47)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "medium button"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 100,
      backgroundColor: "rgb(0,0,0)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 24px 8px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Gilroy-Medium, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "0.005em",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "small button"}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 100,
      background: "var(--accent-metal)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 24px 8px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Gilroy-Medium, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "0.005em",
        color: "rgb(42,45,47)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "small button"}</span>
    </div>
  );
  const __impls = {
    // figma: Flat buttons=Big, Color=Black
    "flatButtons=big|color=black": __body0,
    // figma: Flat buttons=Big, Color=White
    "flatButtons=big|color=white": __body1,
    // figma: Flat buttons=Medium, Color=Black
    "flatButtons=md|color=black": __body2,
    // figma: Flat buttons=Medium, Color=White
    "flatButtons=md|color=white": __body3,
    // figma: Flat buttons=Small, Color=Black
    "flatButtons=sm|color=black": __body4,
    // figma: Flat buttons=Small, Color=White
    "flatButtons=sm|color=white": __body5,
  };
  return (__impls[__vkey(props)] ?? __body4)();
}
export default FlatButtons;
