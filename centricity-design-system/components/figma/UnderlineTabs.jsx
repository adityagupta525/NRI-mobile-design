// figma node: 44:3 UnderlineTabs
export function UnderlineTabs(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      padding: "4px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "center",
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
          color: "var(--accent-default)",
          flexShrink: 0,
        }}>{props.text1 ?? "MF"}</span>
        <div style={{
          position: "relative",
          width: 22,
          height: 1,
          borderRadius: 999,
          background: "linear-gradient(90deg, rgba(182,147,119,0) 0.00%, rgb(201,168,136) 50.00%, rgba(182,147,119,0) 100.00%)",
          boxShadow: "0px 0px 6px 0px rgba(201,168,136,0.5)",
          flexShrink: 0,
        }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "center",
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
          color: "rgba(255,255,255,0.72)",
          flexShrink: 0,
        }}>{props.text2 ?? "PMS"}</span>
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          opacity: 0,
          backgroundColor: "rgb(217,217,217)",
          flexShrink: 0,
        }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "center",
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
          color: "rgba(255,255,255,0.72)",
          flexShrink: 0,
        }}>{props.text3 ?? "AIF"}</span>
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          opacity: 0,
          backgroundColor: "rgb(217,217,217)",
          flexShrink: 0,
        }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "center",
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
          color: "rgba(255,255,255,0.72)",
          flexShrink: 0,
        }}>{props.text4 ?? "BONDS"}</span>
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          opacity: 0,
          backgroundColor: "rgb(217,217,217)",
          flexShrink: 0,
        }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "center",
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
          color: "rgba(255,255,255,0.72)",
          flexShrink: 0,
        }}>GIFT CITY</span>
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          opacity: 0,
          backgroundColor: "rgb(217,217,217)",
          flexShrink: 0,
        }} />
      </div>
    </div>
  );
}
export default UnderlineTabs;
