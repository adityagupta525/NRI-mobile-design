import { Icon } from './Icon.jsx';
import { Sparkline } from './Sparkline.jsx';

// figma node: 189:113 WatchlistRow
export function WatchlistRow(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 343,
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
      position: "relative",
      ...props.style,
    }}>
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
        }}>{props.text1 ?? "Quant Small Cap"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(255,255,255,0.72)",
          flexShrink: 0,
        }}>{props.text2 ?? "NAV ₹312.55"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 120,
          height: 32,
          flexShrink: 0,
        }}>
        <Sparkline style={{ transform: "scale(1, 0.727)", transformOrigin: "0 0" }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-end",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 6,
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
          }}>{props.text3 ?? "▲"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--status-positive)",
            flexShrink: 0,
          }}>{props.text4 ?? "2.8%"}</span>
        </div>
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
            color: "rgb(0,0,0)",
          }}>{props.icon1 ?? <Icon name={"star"} />}</div>
      </div>
    </div>
  );
}
export default WatchlistRow;
