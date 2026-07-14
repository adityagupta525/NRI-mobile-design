import * as React from 'react';
export interface StatementRowProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "June 2026 Statement". */
  text1?: string;
  /** Text content; defaults to "Portfolio · PDF · 248 KB". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const StatementRow: React.FC<StatementRowProps>;
export default StatementRow;
