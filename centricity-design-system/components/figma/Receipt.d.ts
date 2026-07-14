import * as React from 'react';
export interface ReceiptProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Payment successful". */
  text1?: string;
  /** Text content; defaults to "₹". */
  text2?: string;
  /** Text content; defaults to "25,001". */
  text3?: string;
  /** Text content; defaults to "13 Jun 2026, 9:04 AM". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const Receipt: React.FC<ReceiptProps>;
export default Receipt;
