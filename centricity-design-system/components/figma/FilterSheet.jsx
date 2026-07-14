// figma node: 168:114 FilterSheet
export function FilterSheet(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 375,
      borderRadius: "24px 24px 0px 0px",
      backgroundColor: "var(--bg-elevated)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07), 0px -8px 40px 0px rgba(0,0,0,0.5)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "12px 20px 24px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 40,
          height: 4,
          borderRadius: 2,
          backgroundColor: "rgba(255,255,255,0.12)",
          flexShrink: 0,
        }} />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.92)",
          flexShrink: 0,
        }}>{props.text1 ?? "Filter funds"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--accent-default)",
          flexShrink: 0,
        }}>{props.text2 ?? "Reset"}</span>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          letterSpacing: "1.200px",
          color: "rgba(255,255,255,0.72)",
          flexShrink: 0,
        }}>{props.text3 ?? "CATEGORY"}</span>
        <div style={{
          position: "relative",
          width: 331,
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "wrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 999,
            background: "var(--accent-metal)",
            boxShadow: "inset 0px 1px 0px 1px rgba(255,255,255,0.35)",
            display: "flex",
            flexDirection: "row",
            padding: "8px 14px 8px 14px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(36,28,18)",
              flexShrink: 0,
            }}>{props.text4 ?? "Equity"}</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 999,
            backgroundColor: "rgb(0,0,0)",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)",
            display: "flex",
            flexDirection: "row",
            padding: "8px 14px 8px 14px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgba(255,255,255,0.82)",
              flexShrink: 0,
            }}>Debt</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 999,
            backgroundColor: "rgb(0,0,0)",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)",
            display: "flex",
            flexDirection: "row",
            padding: "8px 14px 8px 14px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgba(255,255,255,0.82)",
              flexShrink: 0,
            }}>Hybrid</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 999,
            background: "var(--accent-metal)",
            boxShadow: "inset 0px 1px 0px 1px rgba(255,255,255,0.35)",
            display: "flex",
            flexDirection: "row",
            padding: "8px 14px 8px 14px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(36,28,18)",
              flexShrink: 0,
            }}>ELSS</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 999,
            backgroundColor: "rgb(0,0,0)",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)",
            display: "flex",
            flexDirection: "row",
            padding: "8px 14px 8px 14px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgba(255,255,255,0.82)",
              flexShrink: 0,
            }}>Index</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          letterSpacing: "1.200px",
          color: "rgba(255,255,255,0.72)",
          flexShrink: 0,
        }}>RISK</span>
        <div style={{
          position: "relative",
          width: 292,
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "wrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 999,
            backgroundColor: "rgb(0,0,0)",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)",
            display: "flex",
            flexDirection: "row",
            padding: "8px 14px 8px 14px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgba(255,255,255,0.82)",
              flexShrink: 0,
            }}>Low</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 999,
            background: "var(--accent-metal)",
            boxShadow: "inset 0px 1px 0px 1px rgba(255,255,255,0.35)",
            display: "flex",
            flexDirection: "row",
            padding: "8px 14px 8px 14px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(36,28,18)",
              flexShrink: 0,
            }}>Moderate</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 999,
            backgroundColor: "rgb(0,0,0)",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)",
            display: "flex",
            flexDirection: "row",
            padding: "8px 14px 8px 14px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgba(255,255,255,0.82)",
              flexShrink: 0,
            }}>High</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 999,
            backgroundColor: "rgb(0,0,0)",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)",
            display: "flex",
            flexDirection: "row",
            padding: "8px 14px 8px 14px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgba(255,255,255,0.82)",
              flexShrink: 0,
            }}>Very High</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
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
          overflow: "hidden",
          borderRadius: 8,
          background: "var(--accent-metal)",
          boxShadow: "inset 0 0 0 1px rgba(110,85,56,0.55)",
          display: "flex",
          flexDirection: "row",
          padding: "13px 20px 13px 20px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(36,28,18)",
            flexShrink: 0,
          }}>Show 24 funds</span>
        </div>
      </div>
    </div>
  );
}
export default FilterSheet;
