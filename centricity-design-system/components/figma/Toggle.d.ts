import * as React from 'react';
export interface ToggleProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "on" | "off" | "disabled";
}
export declare const Toggle: React.FC<ToggleProps>;
export default Toggle;
