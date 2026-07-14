import * as React from 'react';
export interface SuccessCheckProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "✓". */
  text1?: string;
  /** Text content; defaults to "Investment successful". */
  text2?: string;
  /** Text content; defaults to "₹25,000 invested in Parag Parikh Flexi Cap. Units allotted in 2 working days.". */
  text3?: string;
  /** Text content; defaults to "View portfolio". */
  text4?: string;
}
export declare const SuccessCheck: React.FC<SuccessCheckProps>;
export default SuccessCheck;
