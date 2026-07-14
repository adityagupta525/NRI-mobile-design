import * as React from 'react';
export interface FlatButtonsProps {
  className?: string;
  style?: React.CSSProperties;
  flatButtons?: "sm" | "md" | "big";
  color?: "black" | "white";
  /** Text content; defaults to "big button". */
  text1?: string;
}
export declare const FlatButtons: React.FC<FlatButtonsProps>;
export default FlatButtons;
