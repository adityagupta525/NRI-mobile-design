import * as React from 'react';
export interface BreadcrumbsProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Invest". */
  text1?: string;
  /** Text content; defaults to "Equity". */
  text2?: string;
  /** Text content; defaults to "Flexi Cap". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Breadcrumbs: React.FC<BreadcrumbsProps>;
export default Breadcrumbs;
