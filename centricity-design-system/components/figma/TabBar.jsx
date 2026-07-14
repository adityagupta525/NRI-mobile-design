// figma node: 45:2 TabBar
export function TabBar(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--icon-accent)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(18px)",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.09), 0px 8px 24px 0px rgba(0,0,0,0.45), inset 0px 1px 1px 0px rgba(255,255,255,0.05)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "12px 22px 12px 22px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 5,
          padding: "0px 10px 0px 10px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={18} height={9} viewBox="0 0 18 9" fill="none" style={{
              position: "absolute",
              left: 2,
              top: 2,
              width: 18,
              height: 9,
            }}>
              <path d={"M 9 0 L 16.794 6.75 L 1.206 6.75 L 9 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
              position: "absolute",
              left: 5,
              top: 10,
              width: 12,
              height: 8,
              borderRadius: "1px 1px 0px 0px",
              backgroundColor: "var(--icon-accent)",
            }} />
          </div>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "0.200px",
            color: "var(--nav-active)",
            flexShrink: 0,
          }}>{props.text1 ?? "Home"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 5,
          padding: "0px 10px 0px 10px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 3,
              top: 12,
              width: 4,
              height: 8,
              borderRadius: 1,
              backgroundColor: "rgba(255,255,255,0.6)",
            }} />
            <div style={{
              position: "absolute",
              left: 10,
              top: 6,
              width: 4,
              height: 14,
              borderRadius: 1,
              backgroundColor: "rgba(255,255,255,0.6)",
            }} />
            <div style={{
              position: "absolute",
              left: 17,
              top: 9,
              width: 4,
              height: 11,
              borderRadius: 1,
              backgroundColor: "rgba(255,255,255,0.6)",
            }} />
          </div>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "0.200px",
            color: "rgba(255,255,255,0.68)",
            flexShrink: 0,
          }}>{props.text2 ?? "Invest"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 5,
          padding: "0px 10px 0px 10px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 3,
              top: 3,
              width: 16,
              height: 16,
              borderRadius: "50%",
              boxShadow: "inset 0 0 0 2.400px rgba(255,255,255,0.6)",
            }} />
          </div>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "0.200px",
            color: "rgba(255,255,255,0.68)",
            flexShrink: 0,
          }}>{props.text3 ?? "Portfolio"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 5,
          padding: "0px 10px 0px 10px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 4,
              top: 2,
              width: 14,
              height: 18,
              borderRadius: 2,
              boxShadow: "inset 0 0 0 1.800px rgba(255,255,255,0.6)",
            }} />
            <div style={{
              position: "absolute",
              left: 7,
              top: 7,
              width: 8,
              height: 1.6,
              backgroundColor: "rgba(255,255,255,0.6)",
            }} />
            <div style={{
              position: "absolute",
              left: 7,
              top: 11,
              width: 8,
              height: 1.6,
              backgroundColor: "rgba(255,255,255,0.6)",
            }} />
          </div>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "0.200px",
            color: "rgba(255,255,255,0.68)",
            flexShrink: 0,
          }}>{props.text4 ?? "Tax"}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 56,
        height: 56,
        overflow: "hidden",
        borderRadius: 9999,
        backgroundColor: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(18px)",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.09), 0px 8px 24px 0px rgba(0,0,0,0.45)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 34,
          height: 34,
          borderRadius: "50%",
          backgroundColor: "rgb(217,217,217)",
          flexShrink: 0,
        }} />
      </div>
    </div>
  );
}
export default TabBar;
