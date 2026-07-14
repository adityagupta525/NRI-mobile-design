import * as React from 'react';
export interface PortfolioCardProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "TOTAL PORTFOLIO VALUE". */
  text1?: string;
  /** Text content; defaults to "₹". */
  text2?: string;
  /** Text content; defaults to "⌄". */
  text3?: string;
  /** Text content; defaults to "₹". */
  text4?: string;
}
export declare const PortfolioCard: React.FC<PortfolioCardProps>;
export default PortfolioCard;
