import * as React from 'react';
export interface InlineBannerProps {
  className?: string;
  style?: React.CSSProperties;
  tone?: "info" | "warning" | "positive" | "negative";
  /** Text content; defaults to "ⓘ". */
  text1?: string;
  /** Text content; defaults to "Markets are volatile today. Review before large orders.". */
  text2?: string;
}
export declare const InlineBanner: React.FC<InlineBannerProps>;
export default InlineBanner;
