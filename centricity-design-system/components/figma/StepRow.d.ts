import * as React from 'react';
export interface StepRowProps {
  className?: string;
  style?: React.CSSProperties;
  status?: "done" | "active" | "pending";
  /** Text content; defaults to "PAN verified". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const StepRow: React.FC<StepRowProps>;
export default StepRow;
