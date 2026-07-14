import { Icon } from './Icon.jsx';

// figma node: 168:147 KYCStepper
export function KYCStepper(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 343,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
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
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 32,
          height: 32,
          overflow: "hidden",
          borderRadius: 999,
          background: "var(--accent-metal)",
          boxShadow: "inset 0px 1px 0px 1px rgba(255,255,255,0.4)",
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
              color: "rgb(36,28,18)",
            }}>{props.icon1 ?? <Icon name={"check"} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          letterSpacing: "0.300px",
          color: "rgba(255,255,255,0.82)",
          flexShrink: 0,
        }}>{props.text1 ?? "PAN"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 32,
          height: 32,
          overflow: "hidden",
          borderRadius: 999,
          background: "var(--accent-metal)",
          boxShadow: "inset 0px 1px 0px 1px rgba(255,255,255,0.4)",
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
              color: "rgb(36,28,18)",
            }}>{props.icon2 ?? <Icon name={"check"} />}</div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          letterSpacing: "0.300px",
          color: "rgba(255,255,255,0.82)",
          flexShrink: 0,
        }}>{props.text2 ?? "Aadhaar"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 32,
          height: 32,
          overflow: "hidden",
          borderRadius: 999,
          boxShadow: "inset 0 0 0 2px var(--accent-default), 0px 0px 12px 0px rgba(182,147,119,0.4)",
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
            fontWeight: 600,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--accent-default)",
            flexShrink: 0,
          }}>{props.text3 ?? "3"}</span>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          letterSpacing: "0.300px",
          color: "var(--accent-default)",
          flexShrink: 0,
        }}>{props.text4 ?? "Bank"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 32,
          height: 32,
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
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--text-meta)",
            flexShrink: 0,
          }}>4</span>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          letterSpacing: "0.300px",
          color: "var(--text-meta)",
          flexShrink: 0,
        }}>Selfie</span>
      </div>
    </div>
  );
}
export default KYCStepper;
