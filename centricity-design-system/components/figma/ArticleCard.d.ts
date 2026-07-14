import * as React from 'react';
export interface ArticleCardProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "MARKET OUTLOOK". */
  text1?: string;
  /** Text content; defaults to "Where is the market headed in H2 2026?". */
  text2?: string;
  /** Text content; defaults to "By Centricity Research". */
  text3?: string;
  /** Text content; defaults to "4 min read". */
  text4?: string;
}
export declare const ArticleCard: React.FC<ArticleCardProps>;
export default ArticleCard;
