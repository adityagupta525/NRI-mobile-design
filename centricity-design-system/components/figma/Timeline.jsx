import { Icon } from './Icon.jsx';

// figma node: 190:103 Timeline
export function Timeline(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 343,
      borderRadius: 16,
      backgroundColor: "var(--bg-surface)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)",
      display: "flex",
      flexDirection: "column",
      padding: "16px 16px 16px 16px",
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
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            borderRadius: 999,
            backgroundColor: "var(--accent-default)",
            boxShadow: "inset 0 0 0 1px var(--accent-default)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                width: 14,
                height: 14,
                flexShrink: 0,
                color: "rgb(0,0,0)",
              }}>{props.icon1 ?? <Icon name={"check"} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            width: 2,
            height: 34,
            backgroundColor: "var(--accent-default)",
            flexShrink: 0,
          }} />
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "0px 0px 18px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.92)",
            flexShrink: 0,
          }}>{props.text1 ?? "Order placed"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.72)",
            flexShrink: 0,
          }}>{props.text2 ?? "12 Jun, 3:45 PM"}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            borderRadius: 999,
            backgroundColor: "var(--accent-default)",
            boxShadow: "inset 0 0 0 1px var(--accent-default)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                width: 14,
                height: 14,
                flexShrink: 0,
                color: "rgb(0,0,0)",
              }}>{props.icon2 ?? <Icon name={"check"} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            width: 2,
            height: 34,
            backgroundColor: "var(--accent-default)",
            flexShrink: 0,
          }} />
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "0px 0px 18px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.92)",
            flexShrink: 0,
          }}>{props.text3 ?? "Payment received"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.72)",
            flexShrink: 0,
          }}>{props.text4 ?? "12 Jun, 3:46 PM"}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            borderRadius: 999,
            backgroundColor: "var(--accent-default)",
            boxShadow: "inset 0 0 0 1px var(--accent-default)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                width: 14,
                height: 14,
                flexShrink: 0,
                color: "rgb(0,0,0)",
              }}>{props.icon3 ?? <Icon name={"check"} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            width: 2,
            height: 34,
            backgroundColor: "var(--accent-default)",
            flexShrink: 0,
          }} />
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "0px 0px 18px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.92)",
            flexShrink: 0,
          }}>Units allotted</span>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.72)",
            flexShrink: 0,
          }}>13 Jun, 9:00 AM</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            borderRadius: 999,
            boxShadow: "inset 0 0 0 1.500px rgba(255,255,255,0.12)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "var(--text-meta)",
              flexShrink: 0,
            }} />
          </div>
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
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.82)",
            flexShrink: 0,
          }}>Reflecting in portfolio</span>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.72)",
            flexShrink: 0,
          }}>Expected 14 Jun</span>
        </div>
      </div>
    </div>
  );
}
export default Timeline;
