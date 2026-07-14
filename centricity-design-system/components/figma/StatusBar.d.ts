import * as React from 'react';
export interface StatusBarProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "9:41". */
  text1?: string;
}
export declare const StatusBar: React.FC<StatusBarProps>;
export default StatusBar;
