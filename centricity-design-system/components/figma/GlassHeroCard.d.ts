import * as React from 'react';
export interface GlassHeroCardProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "with-glow";
  /** Text content; defaults to "NAV". */
  text1?: string;
  /** Text content; defaults to "₹68.42". */
  text2?: string;
}
export declare const GlassHeroCard: React.FC<GlassHeroCardProps>;
export default GlassHeroCard;
