import { Icon } from './Icon.jsx';

// figma node: 168:49 NumericKeypad
export function NumericKeypad(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 343,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
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
          width: 107,
          height: 56,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "rgb(0,0,0)",
          boxShadow: "0px 2px 6px 0px rgba(0,0,0,0.25), inset 0px 1px 0px 1px rgba(255,255,255,0.05)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 22,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>{props.text1 ?? "1"}</span>
        </div>
        <div style={{
          position: "relative",
          width: 107,
          height: 56,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "rgb(0,0,0)",
          boxShadow: "0px 2px 6px 0px rgba(0,0,0,0.25), inset 0px 1px 0px 1px rgba(255,255,255,0.05)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 22,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>{props.text2 ?? "2"}</span>
        </div>
        <div style={{
          position: "relative",
          width: 107,
          height: 56,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "rgb(0,0,0)",
          boxShadow: "0px 2px 6px 0px rgba(0,0,0,0.25), inset 0px 1px 0px 1px rgba(255,255,255,0.05)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 22,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>{props.text3 ?? "3"}</span>
        </div>
      </div>
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
          width: 107,
          height: 56,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "rgb(0,0,0)",
          boxShadow: "0px 2px 6px 0px rgba(0,0,0,0.25), inset 0px 1px 0px 1px rgba(255,255,255,0.05)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 22,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>{props.text4 ?? "4"}</span>
        </div>
        <div style={{
          position: "relative",
          width: 107,
          height: 56,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "rgb(0,0,0)",
          boxShadow: "0px 2px 6px 0px rgba(0,0,0,0.25), inset 0px 1px 0px 1px rgba(255,255,255,0.05)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 22,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>5</span>
        </div>
        <div style={{
          position: "relative",
          width: 107,
          height: 56,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "rgb(0,0,0)",
          boxShadow: "0px 2px 6px 0px rgba(0,0,0,0.25), inset 0px 1px 0px 1px rgba(255,255,255,0.05)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 22,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>6</span>
        </div>
      </div>
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
          width: 107,
          height: 56,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "rgb(0,0,0)",
          boxShadow: "0px 2px 6px 0px rgba(0,0,0,0.25), inset 0px 1px 0px 1px rgba(255,255,255,0.05)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 22,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>7</span>
        </div>
        <div style={{
          position: "relative",
          width: 107,
          height: 56,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "rgb(0,0,0)",
          boxShadow: "0px 2px 6px 0px rgba(0,0,0,0.25), inset 0px 1px 0px 1px rgba(255,255,255,0.05)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 22,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>8</span>
        </div>
        <div style={{
          position: "relative",
          width: 107,
          height: 56,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "rgb(0,0,0)",
          boxShadow: "0px 2px 6px 0px rgba(0,0,0,0.25), inset 0px 1px 0px 1px rgba(255,255,255,0.05)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 22,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>9</span>
        </div>
      </div>
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
          width: 107,
          height: 56,
          overflow: "hidden",
          borderRadius: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "rgb(0,0,0)",
            }}>{props.icon1 ?? <Icon name={"shield-check"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
        <div style={{
          position: "relative",
          width: 107,
          height: 56,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "rgb(0,0,0)",
          boxShadow: "0px 2px 6px 0px rgba(0,0,0,0.25), inset 0px 1px 0px 1px rgba(255,255,255,0.05)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 22,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>0</span>
        </div>
        <div style={{
          position: "relative",
          width: 107,
          height: 56,
          overflow: "hidden",
          borderRadius: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "rgb(0,0,0)",
            }}>{props.icon2 ?? <Icon name={"arrow-left"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
}
export default NumericKeypad;
