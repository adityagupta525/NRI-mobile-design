import { Icon } from './Icon.jsx';

// figma node: 450:426 StepRow (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "status=" + __venc(p.status);

export function StepRow(_p = {}) {
  const props = { ..._p, status: _p.status ?? "done" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "10px 0px 10px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 20,
        overflow: "hidden",
        borderRadius: 9999,
        backgroundColor: "rgba(81,211,96,0.14)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
            color: "rgb(0,0,0)",
          }}>{props.icon1 ?? <Icon name={"check"} style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,255,255,0.82)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "PAN verified"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "10px 0px 10px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 20,
        overflow: "hidden",
        borderRadius: 9999,
        backgroundColor: "var(--accent-default)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
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
        color: "rgba(255,255,255,0.92)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "NSE exchange verification"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "10px 0px 10px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={20} viewBox="0 0 20 20" fill="none" style={{
        position: "relative",
        width: 20,
        overflow: "hidden",
        borderRadius: 9999,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
        color: "rgba(255,255,255,0.04)",
      }}>
        <path d={"M 0 10 C 0 4.477 4.477 0 10 0 L 10 0 C 15.523 0 20 4.477 20 10 L 20 10 C 20 15.523 15.523 20 10 20 L 10 20 C 4.477 20 0 15.523 0 10 L 0 10 Z"} fill="rgba(255,255,255,0.04)" fillRule="nonzero" />
        <path d={"M 0 10 M 20 10 M 20 10 M 0 10 M 10 0 M 20 10 M 10 20 M 0 10 M 10 20 L 10 19 C 5.029 19 1 14.971 1 10 L 0 10 L -1 10 C -1 16.075 3.925 21 10 21 L 10 20 Z M 20 10 L 19 10 C 19 14.971 14.971 19 10 19 L 10 20 L 10 21 C 16.075 21 21 16.075 21 10 L 20 10 Z M 10 0 L 10 1 C 14.971 1 19 5.029 19 10 L 20 10 L 21 10 C 21 3.925 16.075 -1 10 -1 L 10 0 Z M 10 0 L 10 -1 C 3.925 -1 -1 3.925 -1 10 L 0 10 L 1 10 C 1 5.029 5.029 1 10 1 L 10 0 Z"} fill="rgba(255,255,255,0.07)" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,255,255,0.35)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Ready to invest"}</span>
    </div>
  );
  const __impls = {
    // figma: Status=done
    "status=done": __body0,
    // figma: Status=active
    "status=active": __body1,
    // figma: Status=pending
    "status=pending": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default StepRow;
