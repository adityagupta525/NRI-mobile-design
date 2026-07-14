// figma node: 446:529 ListRow
export function ListRow(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 343,
      borderTop: "1px solid rgba(255,255,255,0.07)",
      borderRight: "1px solid rgba(255,255,255,0.07)",
      borderBottom: "1px solid rgba(255,255,255,0.07)",
      borderLeft: "1px solid rgba(255,255,255,0.07)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "14px 16px 14px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={20} viewBox="0 0 20 20" fill="none" style={{
        position: "relative",
        width: 20,
        overflow: "hidden",
        borderRadius: 4,
        flexShrink: 0,
        alignSelf: "stretch",
        color: "var(--icon-accent)",
      }}>
        <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 16 0 C 18.209 0 20 1.791 20 4 L 20 16 C 20 18.209 18.209 20 16 20 L 4 20 C 1.791 20 0 18.209 0 16 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "rgba(255,255,255,0.92)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Row label text"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--text-meta)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "›"}</span>
    </div>
  );
}
export default ListRow;
