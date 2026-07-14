import { Icon } from './Icon.jsx';

// figma node: 202:132 Drawer
export function Drawer(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 288,
      borderRadius: "0px 24px 24px 0px",
      backgroundColor: "var(--bg-elevated)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07), 12px 0px 40px 0px rgba(0,0,0,0.5)",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "20px 16px 20px 16px",
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
        gap: 12,
        padding: "8px 0px 8px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 44,
          height: 44,
          overflow: "hidden",
          borderRadius: 999,
          background: "var(--accent-metal)",
          boxShadow: "inset 0 0 0 1px rgba(110,85,56,0.55)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 15,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(36,28,18)",
            flexShrink: 0,
          }}>{props.text1 ?? "AR"}</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
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
          }}>{props.text2 ?? "Ashish Rao"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--accent-default)",
            flexShrink: 0,
          }}>{props.text3 ?? "NRI · KYC verified"}</span>
        </div>
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
        borderRadius: 10,
        backgroundColor: "var(--accent-default)",
        boxShadow: "inset 0 0 0 0.600px var(--accent-default)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 12px 12px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
            color: "rgb(0,0,0)",
          }}>{props.icon1 ?? <Icon name={"chart-pie-slice"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.92)",
          flexShrink: 0,
        }}>{props.text4 ?? "Dashboard"}</span>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 12px 12px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
            color: "rgb(0,0,0)",
          }}>{props.icon2 ?? <Icon name={"wallet"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.82)",
          flexShrink: 0,
        }}>My Portfolio</span>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 12px 12px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
            color: "rgb(0,0,0)",
          }}>{props.icon3 ?? <Icon name={"chart-line-up"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.82)",
          flexShrink: 0,
        }}>Explore Funds</span>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 12px 12px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
            color: "rgb(0,0,0)",
          }}>{props.icon4 ?? <Icon name={"receipt"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.82)",
          flexShrink: 0,
        }}>Transactions</span>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 12px 12px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
            color: "rgb(0,0,0)",
          }}>
          <Icon
            style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0", color: "rgb(0,0,0)" }}
            name={"target"}
          />
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.82)",
          flexShrink: 0,
        }}>Goals &amp; SIP</span>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 12px 12px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
            color: "rgb(0,0,0)",
          }}>
          <Icon
            style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0", color: "rgb(0,0,0)" }}
            name={"bank"}
          />
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.82)",
          flexShrink: 0,
        }}>Bank &amp; Payments</span>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 12px 12px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
            color: "rgb(0,0,0)",
          }}>
          <Icon
            style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0", color: "rgb(0,0,0)" }}
            name={"gear"}
          />
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.82)",
          flexShrink: 0,
        }}>Settings</span>
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
        gap: 12,
        padding: "12px 12px 12px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
            color: "rgb(0,0,0)",
          }}>
          <Icon
            style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0", color: "rgb(0,0,0)" }}
            name={"sign-out"}
          />
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--status-negative)",
          flexShrink: 0,
        }}>Sign out</span>
      </div>
    </div>
  );
}
export default Drawer;
