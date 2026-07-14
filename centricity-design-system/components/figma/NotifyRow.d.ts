import * as React from 'react';
export interface NotifyRowProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Notify me when I'm ready". */
  text1?: string;
  /** Text content; defaults to "So you don't have to keep checking". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const NotifyRow: React.FC<NotifyRowProps>;
export default NotifyRow;
