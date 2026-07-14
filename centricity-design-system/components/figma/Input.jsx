// figma node: 42:33 Input (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function Input(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 343,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "1.200px",
        color: "rgba(255,255,255,0.82)",
        flexShrink: 0,
      }}>{props.text1 ?? "AMOUNT"}</span>
      <div style={{
        position: "relative",
        height: 52,
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "rgba(86,86,86,0.3)",
        backdropFilter: "blur(18px)",
        boxShadow: "0px 14px 36px 0px rgba(0,0,0,0.45), inset 0px 1px 0px 1px rgba(255,255,255,0.05)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.72)",
          flexShrink: 0,
        }}>{props.text2 ?? "₹"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 15,
          lineHeight: "100%",
          color: "rgba(255,255,255,0.72)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "Enter amount"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 10,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "0.200px",
        color: "var(--text-meta)",
        flexShrink: 0,
      }}>{props.text4 ?? "Min ₹500 · Max ₹1,00,000"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 343,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "1.200px",
        color: "rgba(255,255,255,0.82)",
        flexShrink: 0,
      }}>{props.text1 ?? "AMOUNT"}</span>
      <div style={{
        position: "relative",
        height: 52,
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "rgba(86,86,86,0.3)",
        backdropFilter: "blur(18px)",
        boxShadow: "0px 0px 12px 0px rgba(182,147,119,0.35), 0px 14px 36px 0px rgba(0,0,0,0.45), inset 0px 1px 0px 1px rgba(255,255,255,0.05)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 161px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.72)",
          flexShrink: 0,
        }}>{props.text2 ?? "₹"}</span>
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
            lineHeight: "100%",
            color: "rgba(255,255,255,0.72)",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}>{props.text3 ?? "Enter amount"}</span>
          <div style={{
            position: "relative",
            width: 1,
            height: 20,
            backgroundColor: "var(--accent-default)",
            flexShrink: 0,
          }} />
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 10,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "0.200px",
        color: "var(--text-meta)",
        flexShrink: 0,
      }}>{props.text4 ?? "Min ₹500 · Max ₹1,00,000"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 343,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "1.200px",
        color: "rgba(255,255,255,0.82)",
        flexShrink: 0,
      }}>{props.text1 ?? "AMOUNT"}</span>
      <div style={{
        position: "relative",
        height: 52,
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "rgba(86,86,86,0.3)",
        backdropFilter: "blur(18px)",
        boxShadow: "0px 14px 36px 0px rgba(0,0,0,0.45), inset 0px 1px 0px 1px rgba(255,255,255,0.05)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.72)",
          flexShrink: 0,
        }}>{props.text2 ?? "₹"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 15,
          lineHeight: "100%",
          color: "rgba(255,255,255,0.92)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "25,000"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 10,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "0.200px",
        color: "var(--text-meta)",
        flexShrink: 0,
      }}>{props.text4 ?? "Min ₹500 · Max ₹1,00,000"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 343,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "1.200px",
        color: "rgba(255,255,255,0.82)",
        flexShrink: 0,
      }}>{props.text1 ?? "AMOUNT"}</span>
      <div style={{
        position: "relative",
        height: 52,
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "rgba(86,86,86,0.3)",
        backdropFilter: "blur(18px)",
        boxShadow: "0px 14px 36px 0px rgba(0,0,0,0.45), inset 0px 1px 0px 1px rgba(255,255,255,0.05)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.72)",
          flexShrink: 0,
        }}>{props.text2 ?? "₹"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 15,
          lineHeight: "100%",
          color: "rgba(255,255,255,0.92)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "25,000"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 10,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "0.200px",
        color: "var(--status-negative)",
        flexShrink: 0,
      }}>{props.text4 ?? "⚠ Minimum SIP is ₹500"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 343,
      opacity: 0.5,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "1.200px",
        color: "rgba(255,255,255,0.82)",
        flexShrink: 0,
      }}>{props.text1 ?? "AMOUNT"}</span>
      <div style={{
        position: "relative",
        height: 52,
        opacity: 0.55,
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "rgba(86,86,86,0.3)",
        backdropFilter: "blur(18px)",
        boxShadow: "0px 14px 36px 0px rgba(0,0,0,0.45), inset 0px 1px 0px 1px rgba(255,255,255,0.05)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.72)",
          flexShrink: 0,
        }}>{props.text2 ?? "₹"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 15,
          lineHeight: "100%",
          color: "rgba(255,255,255,0.72)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "Enter amount"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 10,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "0.200px",
        color: "var(--text-meta)",
        flexShrink: 0,
      }}>{props.text4 ?? "Min ₹500 · Max ₹1,00,000"}</span>
    </div>
  );
  const __impls = {
    // figma: State=default
    "state=default": __body0,
    // figma: State=focused
    "state=focused": __body1,
    // figma: State=filled
    "state=filled": __body2,
    // figma: State=error
    "state=error": __body3,
    // figma: State=disabled
    "state=disabled": __body4,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Input;
