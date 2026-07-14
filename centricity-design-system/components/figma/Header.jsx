// figma node: 116:3 Header
export function Header(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 343,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 40,
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgb(217,184,140) 0.00%, rgb(115,87,61) 71.43%)",
          boxShadow: "inset 0 0 0 1px var(--accent-default), 0px 2px 8px 0px rgba(0,0,0,0.3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 15,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.92)",
            flexShrink: 0,
          }}>{props.text1 ?? "Hi, Ashish"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.72)",
            flexShrink: 0,
          }}>{props.text2 ?? "IST 15:22"}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 40,
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "var(--bg-elevated)",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07), 0px 2px 6px 0px rgba(0,0,0,0.2), inset 0px 1px 0px 0px rgba(255,255,255,0.05)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            borderRadius: 4,
            flexShrink: 0,
            color: "rgba(255,255,255,0.92)",
          }}>
            <path d={"M 4 0 L 4 1.6 L 12 1.6 L 12 0 L 12 -1.6 L 4 -1.6 L 4 0 Z M 16 4 L 14.4 4 L 14.4 12 L 16 12 L 17.6 12 L 17.6 4 L 16 4 Z M 12 16 L 12 14.4 L 4 14.4 L 4 16 L 4 17.6 L 12 17.6 L 12 16 Z M 0 12 L 1.6 12 L 1.6 4 L 0 4 L -1.6 4 L -1.6 12 L 0 12 Z M 4 16 L 4 14.4 C 2.675 14.4 1.6 13.325 1.6 12 L 0 12 L -1.6 12 C -1.6 15.093 0.907 17.6 4 17.6 L 4 16 Z M 16 12 L 14.4 12 C 14.4 13.325 13.325 14.4 12 14.4 L 12 16 L 12 17.6 C 15.093 17.6 17.6 15.093 17.6 12 L 16 12 Z M 12 0 L 12 1.6 C 13.325 1.6 14.4 2.675 14.4 4 L 16 4 L 17.6 4 C 17.6 0.907 15.093 -1.6 12 -1.6 L 12 0 Z M 4 0 L 4 -1.6 C 0.907 -1.6 -1.6 0.907 -1.6 4 L 0 4 L 1.6 4 C 1.6 2.675 2.675 1.6 4 1.6 L 4 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "var(--bg-elevated)",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07), 0px 2px 6px 0px rgba(0,0,0,0.2), inset 0px 1px 0px 0px rgba(255,255,255,0.05)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            borderRadius: 4,
            flexShrink: 0,
            color: "rgba(255,255,255,0.92)",
          }}>
            <path d={"M 4 0 L 4 1.6 L 12 1.6 L 12 0 L 12 -1.6 L 4 -1.6 L 4 0 Z M 16 4 L 14.4 4 L 14.4 12 L 16 12 L 17.6 12 L 17.6 4 L 16 4 Z M 12 16 L 12 14.4 L 4 14.4 L 4 16 L 4 17.6 L 12 17.6 L 12 16 Z M 0 12 L 1.6 12 L 1.6 4 L 0 4 L -1.6 4 L -1.6 12 L 0 12 Z M 4 16 L 4 14.4 C 2.675 14.4 1.6 13.325 1.6 12 L 0 12 L -1.6 12 C -1.6 15.093 0.907 17.6 4 17.6 L 4 16 Z M 16 12 L 14.4 12 C 14.4 13.325 13.325 14.4 12 14.4 L 12 16 L 12 17.6 C 15.093 17.6 17.6 15.093 17.6 12 L 16 12 Z M 12 0 L 12 1.6 C 13.325 1.6 14.4 2.675 14.4 4 L 16 4 L 17.6 4 C 17.6 0.907 15.093 -1.6 12 -1.6 L 12 0 Z M 4 0 L 4 -1.6 C 0.907 -1.6 -1.6 0.907 -1.6 4 L 0 4 L 1.6 4 C 1.6 2.675 2.675 1.6 4 1.6 L 4 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default Header;
