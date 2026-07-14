import * as React from 'react';
export interface MarketTickerProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "NIFTY 50". */
  text1?: string;
  /** Text content; defaults to "24,318". */
  text2?: string;
  /** Text content; defaults to "▲0.74%". */
  text3?: string;
  /** Text content; defaults to "SENSEX". */
  text4?: string;
}
export declare const MarketTicker: React.FC<MarketTickerProps>;
export default MarketTicker;
