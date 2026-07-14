import * as React from 'react';
export interface StatTileProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "INVESTED". */
  text1?: string;
  /** Text content; defaults to "₹2,86,40,000". */
  text2?: string;
  /** Text content; defaults to "▲". */
  text3?: string;
  /** Text content; defaults to "+11.8%". */
  text4?: string;
}
export declare const StatTile: React.FC<StatTileProps>;
export default StatTile;
