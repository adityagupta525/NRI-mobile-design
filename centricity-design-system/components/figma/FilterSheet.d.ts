import * as React from 'react';
export interface FilterSheetProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Filter funds". */
  text1?: string;
  /** Text content; defaults to "Reset". */
  text2?: string;
  /** Text content; defaults to "CATEGORY". */
  text3?: string;
  /** Text content; defaults to "Equity". */
  text4?: string;
}
export declare const FilterSheet: React.FC<FilterSheetProps>;
export default FilterSheet;
