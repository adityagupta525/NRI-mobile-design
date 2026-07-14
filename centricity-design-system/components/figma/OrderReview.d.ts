import * as React from 'react';
export interface OrderReviewProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Review order". */
  text1?: string;
  /** Text content; defaults to "Parag Parikh Flexi Cap". */
  text2?: string;
  /** Text content; defaults to "Direct · Growth". */
  text3?: string;
  /** Text content; defaults to "ONE-TIME". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const OrderReview: React.FC<OrderReviewProps>;
export default OrderReview;
