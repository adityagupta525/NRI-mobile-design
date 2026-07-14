import * as React from 'react';
export interface NumericKeypadProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "1". */
  text1?: string;
  /** Text content; defaults to "2". */
  text2?: string;
  /** Text content; defaults to "3". */
  text3?: string;
  /** Text content; defaults to "4". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const NumericKeypad: React.FC<NumericKeypadProps>;
export default NumericKeypad;
