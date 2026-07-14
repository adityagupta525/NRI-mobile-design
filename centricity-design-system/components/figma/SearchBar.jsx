// figma node: 43:2 SearchBar
export function SearchBar(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 343,
      height: 42,
      borderRadius: 999,
      backgroundColor: "rgba(255,255,255,0.04)",
      boxShadow: "0px 4px 12px 0px rgba(0,0,0,0.2), inset 0px 1px 0px 0px rgba(255,255,255,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(255,255,255,0.6)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 18,
        height: 18,
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 1,
          top: 1,
          width: 12,
          height: 12,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 1.600px rgba(255,255,255,0.6)",
        }} />
        <svg width={5} height={1.600} viewBox="0 -0.800 5 1.600" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.707,0.707,-0.707,0.707,11,15)",
          transformOrigin: "0 0",
          width: 5,
          height: 1.600000023841858,
        }}>
          <path d={"M 0.8 -1.6 C 0.358 -1.6 0 -1.242 0 -0.8 C 0 -0.358 0.358 0 0.8 0 L 0.8 -0.8 L 0.8 -1.6 Z M 4.2 0 C 4.642 0 5 -0.358 5 -0.8 C 5 -1.242 4.642 -1.6 4.2 -1.6 L 4.2 -0.8 L 4.2 0 Z M 0.8 -0.8 L 0.8 0 L 4.2 0 L 4.2 -0.8 L 4.2 -1.6 L 0.8 -1.6 L 0.8 -0.8 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "100%",
        color: "rgba(255,255,255,0.72)",
        flexGrow: 1,
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Search funds, AMCs…"}</span>
    </div>
  );
}
export default SearchBar;
