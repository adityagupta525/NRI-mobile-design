import * as React from 'react';
export interface ExplorePillsProps {
  className?: string;
  style?: React.CSSProperties;
  tone?: "new" | "upcoming" | "top";
  /** Text content; defaults to "New offer fund". */
  text1?: string;
}
export declare const ExplorePills: React.FC<ExplorePillsProps>;
export default ExplorePills;
