import { GlassSurface } from './GlassSurface.jsx';
import { GrainOverlay } from './GrainOverlay.jsx';
import { RadialGlow } from './RadialGlow.jsx';
import { StepRow } from './StepRow.jsx';

// figma node: 450:676 KYCStatusTracker (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function KYCStatusTracker(_p = {}) {
  const props = { ..._p, state: _p.state ?? "verifying" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 343,
      overflow: "hidden",
      borderRadius: 24,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 120,
          top: -40,
          width: 300,
          height: 240,
        }}>
        <RadialGlow style={{ transform: "scale(1.250, 1)", transformOrigin: "0 0" }} />
      </div>
      <GlassSurface style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 343,
          height: 370,
        }} />
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 343,
          height: 370,
        }}>
        <GrainOverlay style={{ transform: "scale(1, 1.233)", transformOrigin: "0 0" }} />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        lineHeight: "100%",
        color: "var(--accent-default)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "ALMOST THERE"}</span>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <StepRow
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          status={"done"}
        />
        <StepRow
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text1={"Identity & KYC"}
          status={"done"}
        />
        <StepRow
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text1={"Bank verified"}
          status={"done"}
        />
        <StepRow
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          status={"active"}
        />
        <StepRow
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          status={"pending"}
        />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "100%",
        color: "rgba(255,255,255,0.82)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "NSE is completing the final exchange check — nothing needed from you."}</span>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "rgba(255,255,255,0.07)",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)",
        display: "flex",
        flexDirection: "row",
        padding: "6px 12px 6px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--text-meta)",
          flexShrink: 0,
        }}>{props.text3 ?? "Usually within a few hours · latest by tomorrow 6:00 PM IST"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 343,
      overflow: "hidden",
      borderRadius: 24,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 120,
          top: -40,
          width: 300,
          height: 240,
        }}>
        <RadialGlow style={{ transform: "scale(1.250, 1)", transformOrigin: "0 0" }} />
      </div>
      <GlassSurface style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 343,
          height: 370,
        }} />
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 343,
          height: 370,
        }}>
        <GrainOverlay style={{ transform: "scale(1, 1.233)", transformOrigin: "0 0" }} />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        lineHeight: "100%",
        color: "var(--status-negative)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "VERIFICATION ISSUE"}</span>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <StepRow
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          status={"done"}
        />
        <StepRow
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text1={"Identity & KYC"}
          status={"done"}
        />
        <StepRow
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text1={"Bank verified"}
          status={"done"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          padding: "10px 0px 10px 0px",
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
            overflow: "hidden",
            borderRadius: 9999,
            backgroundColor: "rgb(0,0,0)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "var(--color-copper-200)",
              flexShrink: 0,
            }} />
          </div>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>NSE exchange verification</span>
        </div>
        <StepRow
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          status={"pending"}
        />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "100%",
        color: "var(--status-negative)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "There was an issue with your NSE verification. Please check and resubmit."}</span>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "rgba(255,255,255,0.07)",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)",
        display: "flex",
        flexDirection: "row",
        padding: "6px 12px 6px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--text-meta)",
          flexShrink: 0,
        }}>{props.text3 ?? "Fix this to continue · usually resolved in minutes"}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: State=verifying
    "state=verifying": __body0,
    // figma: State=rejected
    "state=rejected": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default KYCStatusTracker;
