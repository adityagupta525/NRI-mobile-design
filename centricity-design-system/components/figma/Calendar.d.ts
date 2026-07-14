import * as React from 'react';
export interface CalendarProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "July 2026". */
  text1?: string;
  /** Text content; defaults to "S". */
  text2?: string;
  /** Text content; defaults to "M". */
  text3?: string;
  /** Text content; defaults to "T". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Calendar: React.FC<CalendarProps>;
export default Calendar;
