import * as React from 'react';
export interface ProgressBarProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "SIP Goal". */
  text1?: string;
  /** Text content; defaults to "₹6.8L / ₹10L". */
  text2?: string;
}
export declare const ProgressBar: React.FC<ProgressBarProps>;
export default ProgressBar;
