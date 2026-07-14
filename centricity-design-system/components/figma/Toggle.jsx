// figma node: 41:8 Toggle (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function Toggle(_p = {}) {
  const props = { ..._p, state: _p.state ?? "on" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 52,
      height: 32,
      borderRadius: 999,
      backgroundColor: "var(--accent-default)",
      boxShadow: "inset 0px 1px 3px 0px rgba(0,0,0,0.35)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 23,
        top: 3,
        width: 26,
        height: 26,
        borderRadius: "50%",
        background: "linear-gradient(180deg, rgb(255,255,255) 0.00%, rgb(217,217,219) 100.00%)",
        boxShadow: "inset 0px 1px 0px 0px rgba(255,255,255,0.6), 0px 1px 3px 0px rgba(0,0,0,0.35)",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 52,
      height: 32,
      borderRadius: 999,
      backgroundColor: "rgba(255,255,255,0.07)",
      boxShadow: "inset 0px 1px 3px 0px rgba(0,0,0,0.35)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 3,
        top: 3,
        width: 26,
        height: 26,
        borderRadius: "50%",
        background: "linear-gradient(180deg, rgb(255,255,255) 0.00%, rgb(217,217,219) 100.00%)",
        boxShadow: "inset 0px 1px 0px 0px rgba(255,255,255,0.6), 0px 1px 3px 0px rgba(0,0,0,0.35)",
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 52,
      height: 32,
      opacity: 0.4,
      borderRadius: 999,
      backgroundColor: "rgba(255,255,255,0.07)",
      boxShadow: "inset 0px 1px 3px 0px rgba(0,0,0,0.35)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 3,
        top: 3,
        width: 26,
        height: 26,
        borderRadius: "50%",
        background: "linear-gradient(180deg, rgb(255,255,255) 0.00%, rgb(217,217,219) 100.00%)",
        boxShadow: "inset 0px 1px 0px 0px rgba(255,255,255,0.6), 0px 1px 3px 0px rgba(0,0,0,0.35)",
      }} />
    </div>
  );
  const __impls = {
    // figma: State=on
    "state=on": __body0,
    // figma: State=off
    "state=off": __body1,
    // figma: State=disabled
    "state=disabled": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Toggle;
