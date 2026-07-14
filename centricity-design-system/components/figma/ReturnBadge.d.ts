import * as React from 'react';
export interface ReturnBadgeProps {
  className?: string;
  style?: React.CSSProperties;
  direction?: "up" | "down" | "flat";
  style2?: "soft" | "solid";
  /** Text content; defaults to "▲". */
  text1?: string;
  /** Text content; defaults to "+22.4%". */
  text2?: string;
}
export declare const ReturnBadge: React.FC<ReturnBadgeProps>;
export default ReturnBadge;
