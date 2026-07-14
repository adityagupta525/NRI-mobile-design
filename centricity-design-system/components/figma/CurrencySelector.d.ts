import * as React from 'react';
export interface CurrencySelectorProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "🇮🇳". */
  text1?: string;
  /** Text content; defaults to "INR". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const CurrencySelector: React.FC<CurrencySelectorProps>;
export default CurrencySelector;
