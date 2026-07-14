// figma node: 83:2 PortfolioCard
export function PortfolioCard(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 343,
      overflow: "hidden",
      borderRadius: 24,
      backgroundColor: "var(--bg-surface)",
      boxShadow: "inset 0 0 0 0.500px rgba(255,255,255,0.07), inset 0px 1px 0px 1px rgba(255,255,255,0.05), 0px 8px 24px 0px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: -30,
        top: -50,
        width: 200,
        height: 200,
        borderRadius: "50%",
        backgroundColor: "rgb(217,217,217)",
      }} />
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
          fontWeight: 500,
          fontSize: 10,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          letterSpacing: "1.200px",
          color: "rgba(255,255,255,0.72)",
          flexShrink: 0,
        }}>{props.text1 ?? "TOTAL PORTFOLIO VALUE"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 36,
            height: 28,
            overflow: "hidden",
            borderRadius: 999,
            backgroundColor: "var(--bg-elevated)",
            boxShadow: "inset 0 0 0 1.500px rgb(0,0,0), -3px -3px 12px 0px rgba(255,255,255,0.04), 6px 6px 12px 0px rgba(0,0,0,0.16)",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "0px 8px 0px 8px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 18,
              height: 12,
              borderRadius: "50%",
              boxShadow: "inset 0 0 0 1.500px rgba(255,255,255,0.6)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "absolute",
              left: 15,
              top: 11,
              width: 5,
              height: 5,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.6)",
            }} />
          </div>
          <div style={{
            position: "relative",
            width: 47,
            height: 28,
            overflow: "hidden",
            borderRadius: 999,
            backgroundColor: "var(--bg-elevated)",
            boxShadow: "inset 0 0 0 1.500px rgb(0,0,0), -3px -3px 12px 0px rgba(255,255,255,0.04), 6px 6px 12px 0px rgba(0,0,0,0.16)",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "0px 8px 0px 8px",
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
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgba(255,255,255,0.82)",
              flexShrink: 0,
            }}>{props.text2 ?? "₹"}</span>
            <span style={{
              position: "relative",
              fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgba(255,255,255,0.6)",
              flexShrink: 0,
            }}>{props.text3 ?? "⌄"}</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 15,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.92)",
            flexShrink: 0,
          }}>{props.text4 ?? "₹"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 22,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.400px",
            color: "rgba(255,255,255,0.92)",
            flexShrink: 0,
          }}>3,42,18,650</span>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          letterSpacing: "-0.100px",
          color: "var(--status-positive)",
          flexShrink: 0,
        }}>+₹56,200 </span>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 9,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          letterSpacing: "0.200px",
          color: "var(--text-meta)",
          flexShrink: 0,
        }}>Updated 3:45 PM IST</span>
      </div>
      <div style={{
        position: "relative",
        height: 1,
        backgroundColor: "rgba(255,255,255,0.12)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.72)",
            flexShrink: 0,
          }}>Invested</span>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>₹2,86,40,000</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.72)",
            flexShrink: 0,
          }}>Today’s G/L</span>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--color-grey-92-2)",
              flexShrink: 0,
            }}>₹24,000</span>
            <span style={{
              position: "relative",
              fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--status-positive)",
              flexShrink: 0,
            }}>+11.8%</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-end",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.72)",
            flexShrink: 0,
          }}>XIRR</span>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--accent-default)",
            flexShrink: 0,
          }}>14.82%</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 12,
        background: "linear-gradient(90deg, rgba(43,43,43,0.4) 0.00%, rgba(182,147,119,0.24) 50.00%, rgba(43,43,43,0.4) 100.00%)",
        display: "flex",
        flexDirection: "row",
        padding: "12px 12px 12px 16px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 18,
            height: 18,
            borderRadius: "50%",
            backgroundColor: "var(--status-warning)",
            flexShrink: 0,
          }} />
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.240px",
            color: "var(--status-warning)",
            flexShrink: 0,
          }}>2 FUNDS NEED ATTENTION!</span>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--status-warning)",
          flexShrink: 0,
        }}>›</span>
      </div>
    </div>
  );
}
export default PortfolioCard;
