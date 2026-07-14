// figma node: 201:89 OnboardingStepper
export function OnboardingStepper(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 343,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg height={4} viewBox="0 0 81.250 4" fill="none" style={{
          position: "relative",
          height: 4,
          overflow: "hidden",
          borderRadius: 2,
          flexGrow: 1,
          color: "rgb(255,255,255)",
        }}>
          <path d={"M 0 2 C 0 0.895 0.895 0 2 0 L 79.25 0 C 80.355 0 81.25 0.895 81.25 2 L 81.25 2 C 81.25 3.105 80.355 4 79.25 4 L 2 4 C 0.895 4 0 3.105 0 2 L 0 2 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg height={4} viewBox="0 0 81.250 4" fill="none" style={{
          position: "relative",
          height: 4,
          overflow: "hidden",
          borderRadius: 2,
          flexGrow: 1,
          color: "rgb(255,255,255)",
        }}>
          <path d={"M 0 2 C 0 0.895 0.895 0 2 0 L 79.25 0 C 80.355 0 81.25 0.895 81.25 2 L 81.25 2 C 81.25 3.105 80.355 4 79.25 4 L 2 4 C 0.895 4 0 3.105 0 2 L 0 2 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg height={4} viewBox="0 0 81.250 4" fill="none" style={{
          position: "relative",
          height: 4,
          overflow: "hidden",
          borderRadius: 2,
          flexGrow: 1,
          color: "rgba(255,255,255,0.12)",
        }}>
          <path d={"M 0 2 C 0 0.895 0.895 0 2 0 L 79.25 0 C 80.355 0 81.25 0.895 81.25 2 L 81.25 2 C 81.25 3.105 80.355 4 79.25 4 L 2 4 C 0.895 4 0 3.105 0 2 L 0 2 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg height={4} viewBox="0 0 81.250 4" fill="none" style={{
          position: "relative",
          height: 4,
          overflow: "hidden",
          borderRadius: 2,
          flexGrow: 1,
          color: "rgba(255,255,255,0.12)",
        }}>
          <path d={"M 0 2 C 0 0.895 0.895 0 2 0 L 79.25 0 C 80.355 0 81.25 0.895 81.25 2 L 81.25 2 C 81.25 3.105 80.355 4 79.25 4 L 2 4 C 0.895 4 0 3.105 0 2 L 0 2 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Tabular, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "0.300px",
            color: "var(--accent-default)",
            flexShrink: 0,
          }}>{props.text1 ?? "Step 2 of 4"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.200px",
            color: "rgba(255,255,255,0.92)",
            flexShrink: 0,
          }}>{props.text2 ?? "Verify your identity"}</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "rgb(0,0,0)",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)",
          display: "flex",
          flexDirection: "row",
          padding: "6px 12px 6px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.82)",
            flexShrink: 0,
          }}>{props.text3 ?? "Skip"}</span>
        </div>
      </div>
    </div>
  );
}
export default OnboardingStepper;
