import * as React from 'react';
export interface DateRangeFieldProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "PERFORMANCE PERIOD". */
  text1?: string;
  /** Text content; defaults to "12 Jun 2026  —  03 Jul 2026". */
  text2?: string;
  /** Text content; defaults to "7D". */
  text3?: string;
  /** Text content; defaults to "1M". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const DateRangeField: React.FC<DateRangeFieldProps>;
export default DateRangeField;
