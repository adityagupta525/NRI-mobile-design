import { GlassSurface } from './GlassSurface.jsx';
import { LineChart } from '../fintech/Charts/Charts.jsx';
import { RadialGlow } from './RadialGlow.jsx';
import { SegmentedTabs } from './SegmentedTabs.jsx';

// figma node: 437:191 GlassHeroCard (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function GlassHeroCard(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 343,
      height: 404,
      overflow: "hidden",
      borderRadius: 24,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <GlassSurface style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 343,
          height: 404,
        }} />
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--text-meta)",
        flexShrink: 0,
      }}>{props.text1 ?? "NAV"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 32,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(242,238,227)",
        flexShrink: 0,
      }}>{props.text2 ?? "₹68.42"}</span>
      <LineChart style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }} />
      <SegmentedTabs style={{ position: "relative", flexShrink: 0 }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 343,
      height: 404,
      overflow: "hidden",
      borderRadius: 24,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 120,
          top: -40,
          width: 300,
          height: 240,
        }}>
        <RadialGlow style={{ transform: "scale(1.250, 1)", transformOrigin: "0 0" }} />
      </div>
      <GlassSurface style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 343,
          height: 404,
        }} />
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--text-meta)",
        flexShrink: 0,
      }}>{props.text1 ?? "NAV"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 32,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(242,238,227)",
        flexShrink: 0,
      }}>{props.text2 ?? "₹68.42"}</span>
      <LineChart style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }} />
      <SegmentedTabs style={{ position: "relative", flexShrink: 0 }} />
    </div>
  );
  const __impls = {
    // figma: State=default
    "state=default": __body0,
    // figma: State=with-glow
    "state=with-glow": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default GlassHeroCard;
