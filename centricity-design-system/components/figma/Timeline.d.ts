import * as React from 'react';
export interface TimelineProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Order placed". */
  text1?: string;
  /** Text content; defaults to "12 Jun, 3:45 PM". */
  text2?: string;
  /** Text content; defaults to "Payment received". */
  text3?: string;
  /** Text content; defaults to "12 Jun, 3:46 PM". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const Timeline: React.FC<TimelineProps>;
export default Timeline;
