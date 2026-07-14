// figma node: 166:64 Avatar (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size);

export function Avatar(_p = {}) {
  const props = { ..._p, size: _p.size ?? "sm" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 28,
      height: 28,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 28,
        height: 28,
        overflow: "hidden",
        borderRadius: 999,
        background: "var(--accent-metal)",
        boxShadow: "inset 0 0 0 1px rgba(110,85,56,0.55), 0px 3px 10px 0px rgba(182,147,119,0.3), inset 0px 1px 0px 1px rgba(255,255,255,0.4)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 10,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(36,28,18)",
          flexShrink: 0,
        }}>{props.text1 ?? "AR"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 36,
        height: 36,
        overflow: "hidden",
        borderRadius: 999,
        background: "var(--accent-metal)",
        boxShadow: "inset 0 0 0 1px rgba(110,85,56,0.55), 0px 3px 10px 0px rgba(182,147,119,0.3), inset 0px 1px 0px 1px rgba(255,255,255,0.4)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(36,28,18)",
          flexShrink: 0,
        }}>{props.text1 ?? "AR"}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 48,
        height: 48,
        overflow: "hidden",
        borderRadius: 999,
        background: "var(--accent-metal)",
        boxShadow: "inset 0 0 0 1px rgba(110,85,56,0.55), 0px 3px 10px 0px rgba(182,147,119,0.3), inset 0px 1px 0px 1px rgba(255,255,255,0.4)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(36,28,18)",
          flexShrink: 0,
        }}>{props.text1 ?? "AR"}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Size=sm
    "size=sm": __body0,
    // figma: Size=md
    "size=md": __body1,
    // figma: Size=lg
    "size=lg": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Avatar;
