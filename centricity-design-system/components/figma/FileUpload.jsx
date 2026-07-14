import { Icon } from './Icon.jsx';

// figma node: 165:215 FileUpload (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function FileUpload(_p = {}) {
  const props = { ..._p, state: _p.state ?? "empty" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 343,
      display: "flex",
      flexDirection: "column",
      gap: 10,
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
      }}>{props.text1 ?? "PAN CARD"}</span>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "rgb(0,0,0)",
        outline: "1px dashed var(--accent-default)",
        outlineOffset: "-1px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "20px 20px 20px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 44,
          height: 44,
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "var(--accent-default)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
              color: "rgb(0,0,0)",
            }}>{props.icon1 ?? <Icon name={"arrow-up"} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.92)",
          flexShrink: 0,
        }}>{props.text2 ?? "Tap to upload PAN card"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--text-meta)",
          flexShrink: 0,
        }}>{props.text3 ?? "PNG, JPG or PDF · max 5 MB"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 343,
      display: "flex",
      flexDirection: "column",
      gap: 10,
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
      }}>{props.text1 ?? "PAN CARD"}</span>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "var(--bg-surface)",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07), inset 0px 1px 0px 1px rgba(255,255,255,0.04)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 14px 12px 14px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 36,
          height: 36,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--accent-default)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
              color: "rgb(0,0,0)",
            }}>{props.icon1 ?? <Icon name={"receipt"} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 2,
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
          }}>{props.text2 ?? "pan_card.pdf"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--status-positive)",
            flexShrink: 0,
          }}>{props.text3 ?? "2.1 MB · Uploaded"}</span>
        </div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(0,0,0)",
          }}>{props.icon2 ?? <Icon name={"x"} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __impls = {
    // figma: State=empty
    "state=empty": __body0,
    // figma: State=uploaded
    "state=uploaded": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default FileUpload;
