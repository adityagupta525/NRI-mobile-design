// figma node: 166:65 AvatarGroup
export function AvatarGroup(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: -10,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 32,
        overflow: "hidden",
        borderRadius: 999,
        background: "var(--accent-metal)",
        boxShadow: "inset 0 0 0 2px rgb(8,9,13)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 10,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(36,28,18)",
          flexShrink: 0,
        }}>{props.text1 ?? "AR"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 32,
        opacity: 0.85,
        overflow: "hidden",
        borderRadius: 999,
        background: "var(--accent-metal)",
        boxShadow: "inset 0 0 0 2px rgb(8,9,13)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 10,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(36,28,18)",
          flexShrink: 0,
        }}>{props.text2 ?? "VK"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 32,
        opacity: 0.7,
        overflow: "hidden",
        borderRadius: 999,
        background: "var(--accent-metal)",
        boxShadow: "inset 0 0 0 2px rgb(8,9,13)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 10,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(36,28,18)",
          flexShrink: 0,
        }}>{props.text3 ?? "SM"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 32,
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "var(--bg-elevated)",
        boxShadow: "inset 0 0 0 2px rgb(8,9,13)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.82)",
          flexShrink: 0,
        }}>{props.text4 ?? "+5"}</span>
      </div>
    </div>
  );
}
export default AvatarGroup;
