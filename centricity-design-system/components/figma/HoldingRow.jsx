// figma node: 166:127 HoldingRow (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function HoldingRow(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 343,
      height: 81,
      borderRadius: 16,
      backgroundColor: "var(--bg-surface)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07), inset 0px 1px 0px 1px rgba(255,255,255,0.04), 0px 4px 16px 0px rgba(0,0,0,0.18)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 14px 12px 14px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={38} height={38} viewBox="0 0 38 38" fill="none" style={{
        position: "relative",
        width: 38,
        height: 38,
        overflow: "hidden",
        borderRadius: 12,
        flexShrink: 0,
        color: "rgba(255,255,255,0.07)",
      }}>
        <path d={"M 0 12 C 0 5.373 5.373 0 12 0 L 26 0 C 32.627 0 38 5.373 38 12 L 38 26 C 38 32.627 32.627 38 26 38 L 12 38 C 5.373 38 0 32.627 0 26 L 0 12 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 12 0 L 12 1 L 26 1 L 26 0 L 26 -1 L 12 -1 L 12 0 Z M 38 12 L 37 12 L 37 26 L 38 26 L 39 26 L 39 12 L 38 12 Z M 26 38 L 26 37 L 12 37 L 12 38 L 12 39 L 26 39 L 26 38 Z M 0 26 L 1 26 L 1 12 L 0 12 L -1 12 L -1 26 L 0 26 Z M 12 38 L 12 37 C 5.925 37 1 32.075 1 26 L 0 26 L -1 26 C -1 33.18 4.82 39 12 39 L 12 38 Z M 38 26 L 37 26 C 37 32.075 32.075 37 26 37 L 26 38 L 26 39 C 33.18 39 39 33.18 39 26 L 38 26 Z M 26 0 L 26 1 C 32.075 1 37 5.925 37 12 L 38 12 L 39 12 C 39 4.82 33.18 -1 26 -1 L 26 0 Z M 12 0 L 12 -1 C 4.82 -1 -1 4.82 -1 12 L 0 12 L 1 12 C 1 5.925 5.925 1 12 1 L 12 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 3,
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
        }}>{props.text1 ?? "Parag Parikh Flexi Cap"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.72)",
          flexShrink: 0,
        }}>{props.text2 ?? "142.56 units · Equity"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-end",
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
          color: "var(--color-grey-92-2)",
          flexShrink: 0,
        }}>{props.text3 ?? "₹4,28,900"}</span>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "rgba(81,211,96,0.14)",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          padding: "3px 7px 3px 7px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 8,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--status-positive)",
            flexShrink: 0,
          }}>{props.text4 ?? "▲"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--status-positive)",
            flexShrink: 0,
          }}>+22.4%</span>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 343,
      height: 81,
      borderRadius: 16,
      backgroundColor: "var(--bg-elevated)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07), inset 0px 2px 6px 0px rgba(0,0,0,0.3)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 14px 12px 14px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={38} height={38} viewBox="0 0 38 38" fill="none" style={{
        position: "relative",
        width: 38,
        height: 38,
        overflow: "hidden",
        borderRadius: 12,
        flexShrink: 0,
        color: "rgba(255,255,255,0.07)",
      }}>
        <path d={"M 0 12 C 0 5.373 5.373 0 12 0 L 26 0 C 32.627 0 38 5.373 38 12 L 38 26 C 38 32.627 32.627 38 26 38 L 12 38 C 5.373 38 0 32.627 0 26 L 0 12 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 12 0 L 12 1 L 26 1 L 26 0 L 26 -1 L 12 -1 L 12 0 Z M 38 12 L 37 12 L 37 26 L 38 26 L 39 26 L 39 12 L 38 12 Z M 26 38 L 26 37 L 12 37 L 12 38 L 12 39 L 26 39 L 26 38 Z M 0 26 L 1 26 L 1 12 L 0 12 L -1 12 L -1 26 L 0 26 Z M 12 38 L 12 37 C 5.925 37 1 32.075 1 26 L 0 26 L -1 26 C -1 33.18 4.82 39 12 39 L 12 38 Z M 38 26 L 37 26 C 37 32.075 32.075 37 26 37 L 26 38 L 26 39 C 33.18 39 39 33.18 39 26 L 38 26 Z M 26 0 L 26 1 C 32.075 1 37 5.925 37 12 L 38 12 L 39 12 C 39 4.82 33.18 -1 26 -1 L 26 0 Z M 12 0 L 12 -1 C 4.82 -1 -1 4.82 -1 12 L 0 12 L 1 12 C 1 5.925 5.925 1 12 1 L 12 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 3,
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
        }}>{props.text1 ?? "Parag Parikh Flexi Cap"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.72)",
          flexShrink: 0,
        }}>{props.text2 ?? "142.56 units · Equity"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-end",
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
          color: "var(--color-grey-92-2)",
          flexShrink: 0,
        }}>{props.text3 ?? "₹4,28,900"}</span>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "rgba(81,211,96,0.14)",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          padding: "3px 7px 3px 7px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 8,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--status-positive)",
            flexShrink: 0,
          }}>{props.text4 ?? "▲"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--status-positive)",
            flexShrink: 0,
          }}>+22.4%</span>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: State=default
    "state=default": __body0,
    // figma: State=pressed
    "state=pressed": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default HoldingRow;
