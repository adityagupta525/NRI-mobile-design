import * as React from 'react';
export interface GoalRingProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "68%". */
  text1?: string;
  /** Text content; defaults to "of goal". */
  text2?: string;
}
export declare const GoalRing: React.FC<GoalRingProps>;
export default GoalRing;
