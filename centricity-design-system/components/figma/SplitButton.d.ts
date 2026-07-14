import * as React from 'react';
export interface SplitButtonProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Invest ₹25,000". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const SplitButton: React.FC<SplitButtonProps>;
export default SplitButton;
