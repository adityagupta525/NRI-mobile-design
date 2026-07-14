import * as React from 'react';
export interface BankCardProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "🏦". */
  text1?: string;
  /** Text content; defaults to "HDFC Bank". */
  text2?: string;
  /** Text content; defaults to "Savings •••• 4821". */
  text3?: string;
  /** Text content; defaults to "PRIMARY". */
  text4?: string;
}
export declare const BankCard: React.FC<BankCardProps>;
export default BankCard;
