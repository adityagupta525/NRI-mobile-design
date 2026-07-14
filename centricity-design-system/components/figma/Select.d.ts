import * as React from 'react';
export interface SelectProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "closed" | "open";
  /** Text content; defaults to "FUND CATEGORY". */
  text1?: string;
  /** Text content; defaults to "Flexi Cap · Equity". */
  text2?: string;
  /** Text content; defaults to "Flexi Cap · Equity". */
  text3?: string;
  /** Text content; defaults to "Mid Cap · Equity". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Select: React.FC<SelectProps>;
export default Select;
