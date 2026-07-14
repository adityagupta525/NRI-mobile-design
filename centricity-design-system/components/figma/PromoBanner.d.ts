import * as React from 'react';
export interface PromoBannerProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Are you overpaying tax on your India investments?". */
  text1?: string;
  /** Text content; defaults to "Check my savings". */
  text2?: string;
  /** Text content; defaults to "India Gate". */
  text3?: string;
}
export declare const PromoBanner: React.FC<PromoBannerProps>;
export default PromoBanner;
