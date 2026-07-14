import * as React from 'react';
export interface PaymentMethodRowProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "UPI · AutoPay". */
  text1?: string;
  /** Text content; defaults to "ashish@okhdfcbank". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const PaymentMethodRow: React.FC<PaymentMethodRowProps>;
export default PaymentMethodRow;
