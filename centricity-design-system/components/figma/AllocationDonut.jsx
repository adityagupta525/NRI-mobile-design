// figma node: 121:9 AllocationDonut
export function AllocationDonut(_p = {}) {
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
        background: "conic-gradient(from 90deg at 50% 50%, rgb(182,147,119) 0.00deg, rgb(81,211,96) 144.00deg, rgb(204,144,0) 252.00deg, rgb(182,147,119) 360.00deg)",
      }} />
      <span style={{
        position: "absolute",
        left: 32,
        top: 34,
        width: 29,
        height: 24,
        fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,255,255,0.92)",
      }}>{props.text1 ?? "62%"}</span>
      <span style={{
        position: "absolute",
        left: 33,
        top: 54,
        width: 36,
        height: 14,
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,255,255,0.72)",
      }}>{props.text2 ?? "Equity"}</span>
    </div>
  );
}
export default AllocationDonut;
