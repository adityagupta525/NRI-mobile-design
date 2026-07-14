import { Icon } from './Icon.jsx';

// figma node: 349:867 CameraCapture (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function CameraCapture(_p = {}) {
  const props = { ..._p, state: _p.state ?? "guide" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 180,
      height: 180,
      overflow: "hidden",
      borderRadius: 90,
      outline: "2px dashed var(--accent-default)",
      outlineOffset: "-2px",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 66,
          top: 66,
          width: 48,
          height: 48,
        }}>{props.icon1 ?? <Icon name={"camera"} style={{ transform: "scale(2, 2)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 180,
      height: 180,
      overflow: "hidden",
      borderRadius: 90,
      boxShadow: "inset 0 0 0 2px var(--accent-default)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 66,
          top: 66,
          width: 48,
          height: 48,
        }}>{props.icon1 ?? <Icon name={"camera"} style={{ transform: "scale(2, 2)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 180,
      height: 180,
      overflow: "hidden",
      borderRadius: 90,
      boxShadow: "inset 0 0 0 2px var(--status-positive)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 66,
          top: 66,
          width: 48,
          height: 48,
        }}>{props.icon1 ?? <Icon name={"check-circle"} style={{ transform: "scale(2, 2)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 180,
      height: 180,
      overflow: "hidden",
      borderRadius: 90,
      boxShadow: "inset 0 0 0 2px var(--status-negative)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 66,
          top: 66,
          width: 48,
          height: 48,
        }}>{props.icon1 ?? <Icon name={"x-circle"} style={{ transform: "scale(2, 2)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __impls = {
    // figma: State=guide
    "state=guide": __body0,
    // figma: State=capturing
    "state=capturing": __body1,
    // figma: State=success
    "state=success": __body2,
    // figma: State=retry
    "state=retry": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default CameraCapture;
