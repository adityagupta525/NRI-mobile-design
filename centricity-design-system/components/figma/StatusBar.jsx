// figma node: 253:119 StatusBar
export function StatusBar(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 375,
      height: 54,
      display: "flex",
      flexDirection: "row",
      padding: "16px 20px 6px 24px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,255,255,0.92)",
        flexShrink: 0,
      }}>{props.text1 ?? "9:41"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 1.5,
          alignItems: "flex-end",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 3,
            height: 4,
            borderRadius: 1,
            backgroundColor: "rgba(255,255,255,0.92)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            width: 3,
            height: 6,
            borderRadius: 1,
            backgroundColor: "rgba(255,255,255,0.92)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            width: 3,
            height: 8,
            borderRadius: 1,
            backgroundColor: "rgba(255,255,255,0.92)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            width: 3,
            height: 10,
            borderRadius: 1,
            backgroundColor: "rgba(255,255,255,0.92)",
            flexShrink: 0,
          }} />
        </div>
        <div style={{
          position: "relative",
          width: 16,
          height: 11,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 16,
            height: 16,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.92)",
          }} />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 24,
            height: 12,
            overflow: "hidden",
            borderRadius: 3,
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.35)",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 2,
              top: 2,
              width: 18,
              height: 8,
              borderRadius: 1.5,
              backgroundColor: "rgba(255,255,255,0.92)",
            }} />
          </div>
          <div style={{
            position: "relative",
            width: 2,
            height: 4,
            borderRadius: 1,
            backgroundColor: "rgba(255,255,255,0.35)",
            flexShrink: 0,
          }} />
        </div>
      </div>
    </div>
  );
}
export default StatusBar;
