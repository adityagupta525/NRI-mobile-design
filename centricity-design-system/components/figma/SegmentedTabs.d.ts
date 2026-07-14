import * as React from 'react';
export interface SegmentedTabsProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Value". */
  text1?: string;
  /** Text content; defaults to "Return". */
  text2?: string;
}
export declare const SegmentedTabs: React.FC<SegmentedTabsProps>;
export default SegmentedTabs;
