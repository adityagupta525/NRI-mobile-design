import * as React from 'react';
export interface AllocationDonutProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "62%". */
  text1?: string;
  /** Text content; defaults to "Equity". */
  text2?: string;
}
export declare const AllocationDonut: React.FC<AllocationDonutProps>;
export default AllocationDonut;
