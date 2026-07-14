import * as React from 'react';
export interface GoalCardProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Retirement Fund". */
  text1?: string;
  /** Text content; defaults to "₹6.8L". */
  text2?: string;
  /** Text content; defaults to "of ₹10L". */
  text3?: string;
  /** Text content; defaults to "ON TRACK". */
  text4?: string;
}
export declare const GoalCard: React.FC<GoalCardProps>;
export default GoalCard;
