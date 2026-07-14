import { Icon } from './Icon.jsx';

// figma node: 165:37 Select (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function Select(_p = {}) {
  const props = { ..._p, state: _p.state ?? "closed" };
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
        fontWeight: 500,
        fontSize: 10,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "1.200px",
        color: "rgba(255,255,255,0.72)",
        flexShrink: 0,
      }}>{props.text1 ?? "FUND CATEGORY"}</span>
      <div style={{
        position: "relative",
        height: 52,
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "rgba(86,86,86,0.3)",
        boxShadow: "inset 0px 1px 0px 1px rgba(255,255,255,0.05)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 14px 0px 14px",
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
          fontSize: 14,
          lineHeight: "100%",
          color: "rgba(255,255,255,0.92)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Flexi Cap · Equity"}</span>
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
            color: "rgb(0,0,0)",
          }}>{props.icon1 ?? <Icon name={"caret-down"} />}</div>
      </div>
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
        fontWeight: 500,
        fontSize: 10,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "1.200px",
        color: "rgba(255,255,255,0.72)",
        flexShrink: 0,
      }}>{props.text1 ?? "FUND CATEGORY"}</span>
      <div style={{
        position: "relative",
        height: 52,
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "rgba(86,86,86,0.3)",
        boxShadow: "inset 0 0 0 1.200px var(--accent-default), inset 0px 1px 0px 1px rgba(255,255,255,0.05)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 14px 0px 14px",
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
          fontSize: 14,
          lineHeight: "100%",
          color: "rgba(255,255,255,0.92)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Flexi Cap · Equity"}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(0,0,0)",
          }}>{props.icon1 ?? <Icon name={"caret-up"} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "var(--bg-elevated)",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07), inset 0px 1px 0px 1px rgba(255,255,255,0.05), 0px 16px 40px 0px rgba(0,0,0,0.5)",
        display: "flex",
        flexDirection: "column",
        padding: "6px 6px 6px 6px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--accent-default)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "12px 12px 12px 12px",
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
            fontSize: 13,
            lineHeight: "100%",
            color: "rgba(255,255,255,0.92)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text3 ?? "Flexi Cap · Equity"}</span>
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
          overflow: "hidden",
          borderRadius: 8,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "12px 12px 12px 12px",
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
            fontSize: 13,
            lineHeight: "100%",
            color: "rgba(255,255,255,0.82)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text4 ?? "Mid Cap · Equity"}</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "12px 12px 12px 12px",
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
            fontSize: 13,
            lineHeight: "100%",
            color: "rgba(255,255,255,0.82)",
            flexGrow: 1,
          }}>ELSS · Tax Saver</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "12px 12px 12px 12px",
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
            fontSize: 13,
            lineHeight: "100%",
            color: "rgba(255,255,255,0.82)",
            flexGrow: 1,
          }}>Debt · Liquid</span>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: State=closed
    "state=closed": __body0,
    // figma: State=open
    "state=open": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Select;
