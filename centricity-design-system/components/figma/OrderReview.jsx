import { Icon } from './Icon.jsx';

// figma node: 178:157 OrderReview
export function OrderReview(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 343,
      borderRadius: 20,
      backgroundColor: "var(--bg-surface)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07), inset 0px 1px 0px 1px rgba(255,255,255,0.04), 0px 4px 16px 0px rgba(0,0,0,0.18)",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "18px 18px 18px 18px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.200px",
        color: "rgba(255,255,255,0.92)",
        flexShrink: 0,
      }}>{props.text1 ?? "Review order"}</span>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 38,
          height: 38,
          overflow: "hidden",
          borderRadius: 10,
          backgroundColor: "rgba(182,147,119,0.14)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "rgb(0,0,0)",
            }}>{props.icon1 ?? <Icon name={"chart-line-up"} />}</div>
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
            color: "rgba(255,255,255,0.92)",
            flexShrink: 0,
          }}>{props.text2 ?? "Parag Parikh Flexi Cap"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.72)",
            flexShrink: 0,
          }}>{props.text3 ?? "Direct · Growth"}</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "rgba(182,147,119,0.14)",
          display: "flex",
          flexDirection: "row",
          padding: "4px 8px 4px 8px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 9,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "0.600px",
            color: "var(--accent-default)",
            flexShrink: 0,
          }}>{props.text4 ?? "ONE-TIME"}</span>
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
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.82)",
          flexShrink: 0,
        }}>Amount</span>
        <span style={{
          position: "relative",
          fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-grey-92-2)",
          flexShrink: 0,
        }}>₹25,000</span>
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
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.82)",
          flexShrink: 0,
        }}>Est. units @ NAV ₹68.30</span>
        <span style={{
          position: "relative",
          fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-grey-92-2)",
          flexShrink: 0,
        }}>366.02</span>
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
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.82)",
          flexShrink: 0,
        }}>Transaction charges</span>
        <span style={{
          position: "relative",
          fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--status-positive)",
          flexShrink: 0,
        }}>₹0</span>
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
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.82)",
          flexShrink: 0,
        }}>Stamp duty (0.005%)</span>
        <span style={{
          position: "relative",
          fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-grey-92-2)",
          flexShrink: 0,
        }}>₹1.25</span>
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
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.92)",
          flexShrink: 0,
        }}>Total payable</span>
        <span style={{
          position: "relative",
          fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-grey-92-2)",
          flexShrink: 0,
        }}>₹25,001.25</span>
      </div>
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
        flexShrink: 0,
        alignSelf: "stretch",
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
        }}>Confirm &amp; Pay</span>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgb(0,0,0)",
          }}>{props.icon2 ?? <Icon name={"lock-simple"} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 10,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--text-meta)",
          flexShrink: 0,
        }}>Secured by 256-bit encryption · SEBI regulated</span>
      </div>
    </div>
  );
}
export default OrderReview;
