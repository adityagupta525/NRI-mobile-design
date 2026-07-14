// figma node: 22:5 RadialGlow
export function RadialGlow(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 240,
      height: 240,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 240,
        height: 240,
        borderRadius: "50%",
        backgroundColor: "rgb(217,217,217)",
      }} />
    </div>
  );
}
export default RadialGlow;
