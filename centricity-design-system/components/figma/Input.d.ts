import * as React from 'react';
export interface InputProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "focused" | "filled" | "error" | "disabled";
  /** Text content; defaults to "AMOUNT". */
  text1?: string;
  /** Text content; defaults to "₹". */
  text2?: string;
  /** Text content; defaults to "Enter amount". */
  text3?: string;
  /** Text content; defaults to "Min ₹500 · Max ₹1,00,000". */
  text4?: string;
}
export declare const Input: React.FC<InputProps>;
export default Input;
