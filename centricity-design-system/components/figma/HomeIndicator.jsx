// figma node: 253:136 HomeIndicator
export function HomeIndicator(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 375,
      height: 34,
      display: "flex",
      flexDirection: "row",
      padding: "21px 0px 8px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 134,
        opacity: 0.9,
        borderRadius: 3,
        backgroundColor: "rgba(255,255,255,0.92)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
}
export default HomeIndicator;
