// figma node: 121:13 GoalRing
export function GoalRing(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 96,
      height: 96,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 96,
        height: 96,
        borderRadius: "50%",
        backgroundColor: "rgba(255,255,255,0.12)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 96,
        height: 96,
        borderRadius: "50%",
        backgroundColor: "rgb(217,217,217)",
      }} />
      <span style={{
        position: "absolute",
        left: 31,
        top: 32,
        width: 29,
        height: 24,
        fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-grey-92-2)",
      }}>{props.text1 ?? "68%"}</span>
      <span style={{
        position: "absolute",
        left: 34,
        top: 54,
        width: 25,
        height: 12,
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 9,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,255,255,0.72)",
      }}>{props.text2 ?? "of goal"}</span>
    </div>
  );
}
export default GoalRing;
