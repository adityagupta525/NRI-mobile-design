import { Icon } from './Icon.jsx';

// figma node: 165:38 Calendar
export function Calendar(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 343,
      borderRadius: 16,
      backgroundColor: "var(--bg-surface)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07), inset 0px 1px 0px 1px rgba(255,255,255,0.04), 0px 4px 16px 0px rgba(0,0,0,0.18)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
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
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(0,0,0)",
          }}>{props.icon1 ?? <Icon name={"caret-left"} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.92)",
          flexShrink: 0,
        }}>{props.text1 ?? "July 2026"}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(0,0,0)",
          }}>{props.icon2 ?? <Icon name={"caret-right"} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
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
          width: 40,
          height: 20,
          overflow: "hidden",
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
            fontWeight: 500,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "0.500px",
            color: "var(--text-meta)",
            flexShrink: 0,
          }}>{props.text2 ?? "S"}</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 20,
          overflow: "hidden",
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
            fontWeight: 500,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "0.500px",
            color: "var(--text-meta)",
            flexShrink: 0,
          }}>{props.text3 ?? "M"}</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 20,
          overflow: "hidden",
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
            fontWeight: 500,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "0.500px",
            color: "var(--text-meta)",
            flexShrink: 0,
          }}>{props.text4 ?? "T"}</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 20,
          overflow: "hidden",
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
            fontWeight: 500,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "0.500px",
            color: "var(--text-meta)",
            flexShrink: 0,
          }}>W</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 20,
          overflow: "hidden",
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
            fontWeight: 500,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "0.500px",
            color: "var(--text-meta)",
            flexShrink: 0,
          }}>T</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 20,
          overflow: "hidden",
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
            fontWeight: 500,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "0.500px",
            color: "var(--text-meta)",
            flexShrink: 0,
          }}>F</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 20,
          overflow: "hidden",
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
            fontWeight: 500,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "0.500px",
            color: "var(--text-meta)",
            flexShrink: 0,
          }}>S</span>
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
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--text-meta)",
            flexShrink: 0,
          }}>28</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--text-meta)",
            flexShrink: 0,
          }}>29</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--text-meta)",
            flexShrink: 0,
          }}>30</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>1</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
          boxShadow: "inset 0 0 0 1.200px var(--accent-default)",
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>2</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
          background: "var(--accent-metal)",
          boxShadow: "0px 4px 12px 0px rgba(182,147,119,0.35), inset 0px 1px 0px 1px rgba(255,255,255,0.4)",
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(36,28,18)",
            flexShrink: 0,
          }}>3</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>4</span>
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
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>5</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>6</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>7</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>8</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>9</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>10</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>11</span>
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
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>12</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>13</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>14</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>15</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>16</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>17</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>18</span>
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
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>19</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>20</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>21</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>22</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>23</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>24</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>25</span>
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
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>26</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>27</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>28</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>29</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>30</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-grey-92-2)",
            flexShrink: 0,
          }}>31</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 999,
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
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--text-meta)",
            flexShrink: 0,
          }}>1</span>
        </div>
      </div>
    </div>
  );
}
export default Calendar;
