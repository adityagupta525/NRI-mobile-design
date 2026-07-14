import * as React from 'react';
export interface RowCardProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Label text". */
  text1?: string;
  /** Text content; defaults to "›". */
  text2?: string;
}
export declare const RowCard: React.FC<RowCardProps>;
export default RowCard;
