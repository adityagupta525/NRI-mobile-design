// figma node: 168:101 PINEntry (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function PINEntry(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 343,
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,255,255,0.82)",
        flexShrink: 0,
      }}>{props.text1 ?? "Enter your MPIN"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 16,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          height: 16,
          overflow: "hidden",
          borderRadius: 999,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          filter: "drop-shadow(0px 2px 8px rgba(182,147,119,0.4))",
          color: "rgb(255,255,255)",
        }}>
          <path d={"M 0 8 C 0 3.582 3.582 0 8 0 L 8 0 C 12.418 0 16 3.582 16 8 L 16 8 C 16 12.418 12.418 16 8 16 L 8 16 C 3.582 16 0 12.418 0 8 L 0 8 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          height: 16,
          overflow: "hidden",
          borderRadius: 999,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          filter: "drop-shadow(0px 2px 8px rgba(182,147,119,0.4))",
          color: "rgb(255,255,255)",
        }}>
          <path d={"M 0 8 C 0 3.582 3.582 0 8 0 L 8 0 C 12.418 0 16 3.582 16 8 L 16 8 C 16 12.418 12.418 16 8 16 L 8 16 C 3.582 16 0 12.418 0 8 L 0 8 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          height: 16,
          overflow: "hidden",
          borderRadius: 999,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          color: "rgba(255,255,255,0.12)",
        }}>
          <path d={"M 8 16 L 8 14.5 C 4.41 14.5 1.5 11.59 1.5 8 L 0 8 L -1.5 8 C -1.5 13.247 2.753 17.5 8 17.5 L 8 16 Z M 16 8 L 14.5 8 C 14.5 11.59 11.59 14.5 8 14.5 L 8 16 L 8 17.5 C 13.247 17.5 17.5 13.247 17.5 8 L 16 8 Z M 8 0 L 8 1.5 C 11.59 1.5 14.5 4.41 14.5 8 L 16 8 L 17.5 8 C 17.5 2.753 13.247 -1.5 8 -1.5 L 8 0 Z M 8 0 L 8 -1.5 C 2.753 -1.5 -1.5 2.753 -1.5 8 L 0 8 L 1.5 8 C 1.5 4.41 4.41 1.5 8 1.5 L 8 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          height: 16,
          overflow: "hidden",
          borderRadius: 999,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          color: "rgba(255,255,255,0.12)",
        }}>
          <path d={"M 8 16 L 8 14.5 C 4.41 14.5 1.5 11.59 1.5 8 L 0 8 L -1.5 8 C -1.5 13.247 2.753 17.5 8 17.5 L 8 16 Z M 16 8 L 14.5 8 C 14.5 11.59 11.59 14.5 8 14.5 L 8 16 L 8 17.5 C 13.247 17.5 17.5 13.247 17.5 8 L 16 8 Z M 8 0 L 8 1.5 C 11.59 1.5 14.5 4.41 14.5 8 L 16 8 L 17.5 8 C 17.5 2.753 13.247 -1.5 8 -1.5 L 8 0 Z M 8 0 L 8 -1.5 C 2.753 -1.5 -1.5 2.753 -1.5 8 L 0 8 L 1.5 8 C 1.5 4.41 4.41 1.5 8 1.5 L 8 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,255,255,0.82)",
        flexShrink: 0,
      }}>{props.text2 ?? "Forgot MPIN?"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 343,
      height: 115,
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,255,255,0.82)",
        flexShrink: 0,
      }}>{props.text1 ?? "Incorrect MPIN"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 16,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          height: 16,
          overflow: "hidden",
          borderRadius: 999,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          color: "var(--status-negative)",
        }}>
          <path d={"M 0 8 C 0 3.582 3.582 0 8 0 L 8 0 C 12.418 0 16 3.582 16 8 L 16 8 C 16 12.418 12.418 16 8 16 L 8 16 C 3.582 16 0 12.418 0 8 L 0 8 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          height: 16,
          overflow: "hidden",
          borderRadius: 999,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          color: "var(--status-negative)",
        }}>
          <path d={"M 0 8 C 0 3.582 3.582 0 8 0 L 8 0 C 12.418 0 16 3.582 16 8 L 16 8 C 16 12.418 12.418 16 8 16 L 8 16 C 3.582 16 0 12.418 0 8 L 0 8 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          height: 16,
          overflow: "hidden",
          borderRadius: 999,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          color: "var(--status-negative)",
        }}>
          <path d={"M 0 8 C 0 3.582 3.582 0 8 0 L 8 0 C 12.418 0 16 3.582 16 8 L 16 8 C 16 12.418 12.418 16 8 16 L 8 16 C 3.582 16 0 12.418 0 8 L 0 8 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          height: 16,
          overflow: "hidden",
          borderRadius: 999,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          color: "var(--status-negative)",
        }}>
          <path d={"M 0 8 C 0 3.582 3.582 0 8 0 L 8 0 C 12.418 0 16 3.582 16 8 L 16 8 C 16 12.418 12.418 16 8 16 L 8 16 C 3.582 16 0 12.418 0 8 L 0 8 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--status-negative)",
        flexShrink: 0,
      }}>{props.text2 ?? "2 attempts remaining"}</span>
    </div>
  );
  const __impls = {
    // figma: State=default
    "state=default": __body0,
    // figma: State=error
    "state=error": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default PINEntry;
