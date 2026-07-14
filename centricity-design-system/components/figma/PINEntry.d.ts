import * as React from 'react';
export interface PINEntryProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "error";
  /** Text content; defaults to "Enter your MPIN". */
  text1?: string;
  /** Text content; defaults to "Forgot MPIN?". */
  text2?: string;
}
export declare const PINEntry: React.FC<PINEntryProps>;
export default PINEntry;
