import * as React from 'react';
export interface FABProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Invest". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const FAB: React.FC<FABProps>;
export default FAB;
