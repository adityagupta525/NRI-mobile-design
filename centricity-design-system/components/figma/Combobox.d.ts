import * as React from 'react';
export interface ComboboxProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "SEARCH FUND". */
  text1?: string;
  /** Text content; defaults to "parag". */
  text2?: string;
  /** Text content; defaults to "Parag Parikh Flexi Cap". */
  text3?: string;
  /** Text content; defaults to "Equity · Flexi Cap". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Combobox: React.FC<ComboboxProps>;
export default Combobox;
