// figma node: 22:4 GlassSurface
export function GlassSurface(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 220,
      height: 140,
      borderRadius: 24,
      backgroundColor: "rgba(17,17,17,0.3)",
      backdropFilter: "blur(24px)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12), inset 0px 1px 1px 0px rgba(255,255,255,0.05), 0px 4px 20px 0px rgba(0,0,0,0.3)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
}
export default GlassSurface;
