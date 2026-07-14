import * as React from 'react';
export interface WatchlistRowProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Quant Small Cap". */
  text1?: string;
  /** Text content; defaults to "NAV ₹312.55". */
  text2?: string;
  /** Text content; defaults to "▲". */
  text3?: string;
  /** Text content; defaults to "2.8%". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const WatchlistRow: React.FC<WatchlistRowProps>;
export default WatchlistRow;
