// figma node: 26:7 MetalAvatar
export function MetalAvatar(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 64,
      height: 64,
      borderRadius: 9999,
      boxShadow: "0px 0px 14px 0px rgba(181,148,120,0.2)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 24,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(26,19,12)",
        flexShrink: 0,
      }}>{props.text1 ?? "A"}</span>
    </div>
  );
}
export default MetalAvatar;
