import * as React from 'react';
export interface ToolkitCardProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Your analysis toolkit". */
  text1?: string;
  /** Text content; defaults to "Portfolio overlap, what-if analysis & liquidity pro-grade insights, made simple.". */
  text2?: string;
  /** Text content; defaults to "Discover tools". */
  text3?: string;
}
export declare const ToolkitCard: React.FC<ToolkitCardProps>;
export default ToolkitCard;
