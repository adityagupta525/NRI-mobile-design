import * as React from 'react';
export interface NAVCardProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Today's NAV". */
  text1?: string;
  /** Text content; defaults to "₹68.42". */
  text2?: string;
  /** Text content; defaults to "▲ 0.84 (1.24%)". */
  text3?: string;
  /** Text content; defaults to "As of 13 Jun 2026". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const NAVCard: React.FC<NAVCardProps>;
export default NAVCard;
