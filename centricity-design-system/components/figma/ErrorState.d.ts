import * as React from 'react';
export interface ErrorStateProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "⚠". */
  text1?: string;
  /** Text content; defaults to "Something went wrong". */
  text2?: string;
  /** Text content; defaults to "We couldn’t load your portfolio. Check your connection and try again.". */
  text3?: string;
  /** Text content; defaults to "Retry". */
  text4?: string;
}
export declare const ErrorState: React.FC<ErrorStateProps>;
export default ErrorState;
