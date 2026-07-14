import * as React from 'react';
export interface HoldingRowProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "pressed";
  /** Text content; defaults to "Parag Parikh Flexi Cap". */
  text1?: string;
  /** Text content; defaults to "142.56 units · Equity". */
  text2?: string;
  /** Text content; defaults to "₹4,28,900". */
  text3?: string;
  /** Text content; defaults to "▲". */
  text4?: string;
}
export declare const HoldingRow: React.FC<HoldingRowProps>;
export default HoldingRow;
