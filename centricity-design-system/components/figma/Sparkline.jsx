// figma node: 121:3 Sparkline
export function Sparkline(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 120,
      height: 44,
      position: "relative",
      ...props.style,
    }}>
      <svg width={120} height={38} viewBox="0 0 120 38" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 6,
        width: 120,
        height: 38,
      }}>
        <path d={"M 0 28 L 20 20 L 40 24 L 60 8 L 80 14 L 100 0 L 120 6 L 120 38 L 0 38 L 0 28 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={120} height={28} viewBox="0 0 120 28" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 6,
        width: 120,
        height: 28,
        color: "rgb(81,211,96)",
      }}>
        <path d={"M -0.371 27.072 C -0.884 27.277 -1.134 27.859 -0.928 28.371 C -0.723 28.884 -0.141 29.134 0.371 28.928 L 0 28 L -0.371 27.072 Z M 20 20 L 20.196 19.019 L 19.905 18.961 L 19.629 19.072 L 20 20 Z M 40 24 L 39.804 24.981 L 40.261 25.072 L 40.625 24.781 L 40 24 Z M 60 8 L 60.287 7.042 L 59.785 6.891 L 59.375 7.219 L 60 8 Z M 80 14 L 79.713 14.958 L 80.177 15.097 L 80.573 14.819 L 80 14 Z M 100 0 L 100.287 -0.958 L 99.823 -1.097 L 99.427 -0.819 L 100 0 Z M 119.713 6.958 C 120.242 7.117 120.799 6.816 120.958 6.287 C 121.117 5.758 120.816 5.201 120.287 5.042 L 120 6 L 119.713 6.958 Z M 0 28 L 0.371 28.928 L 20.371 20.928 L 20 20 L 19.629 19.072 L -0.371 27.072 L 0 28 Z M 20 20 L 19.804 20.981 L 39.804 24.981 L 40 24 L 40.196 23.019 L 20.196 19.019 L 20 20 Z M 40 24 L 40.625 24.781 L 60.625 8.781 L 60 8 L 59.375 7.219 L 39.375 23.219 L 40 24 Z M 60 8 L 59.713 8.958 L 79.713 14.958 L 80 14 L 80.287 13.042 L 60.287 7.042 L 60 8 Z M 80 14 L 80.573 14.819 L 100.573 0.819 L 100 0 L 99.427 -0.819 L 79.427 13.181 L 80 14 Z M 100 0 L 99.713 0.958 L 119.713 6.958 L 120 6 L 120.287 5.042 L 100.287 -0.958 L 100 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default Sparkline;
