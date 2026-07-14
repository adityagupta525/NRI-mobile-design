import { Button } from '../core/Button/Button.jsx';
import { GlassSurface } from './GlassSurface.jsx';

// figma node: 438:178 WhyRegularSheet
export function WhyRegularSheet(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 375,
      overflow: "hidden",
      borderRadius: "28px 28px 0px 0px",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "12px 20px 24px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <GlassSurface style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 375,
          height: 400,
        }} />
      <svg width={40} height={4} viewBox="0 0 40 4" fill="none" style={{
        position: "relative",
        width: 40,
        height: 4,
        overflow: "hidden",
        borderRadius: 999,
        flexShrink: 0,
        color: "rgba(255,255,255,0.22)",
      }}>
        <path d={"M 0 2 C 0 0.895 0.895 0 2 0 L 38 0 C 39.105 0 40 0.895 40 2 L 40 2 C 40 3.105 39.105 4 38 4 L 2 4 C 0.895 4 0 3.105 0 2 L 0 2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 20,
        lineHeight: "100%",
        color: "rgba(255,255,255,0.92)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Why a Regular plan?"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "rgba(255,255,255,0.82)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "This is a Regular (ARN) plan — a small distributor commission is built into the expense ratio. In return you get guided onboarding, DTAA activation help, pre-tax clarity, and human support. Direct (no-ARN) plans are out of scope for this app."}</span>
      <Button
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"Got it"}
        variant={"metal"}
        size={"md"}
        state={"default"}
      />
    </div>
  );
}
export default WhyRegularSheet;
