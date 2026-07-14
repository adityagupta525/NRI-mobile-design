import * as React from 'react';
export interface TrustFooterProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "🛡". */
  text1?: string;
  /** Text content; defaults to "SEBI". */
  text2?: string;
  /** Text content; defaults to "🛡". */
  text3?: string;
  /** Text content; defaults to "AMFI ARN". */
  text4?: string;
}
export declare const TrustFooter: React.FC<TrustFooterProps>;
export default TrustFooter;
