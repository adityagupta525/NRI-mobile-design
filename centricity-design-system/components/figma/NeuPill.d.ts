import * as React from 'react';
export interface NeuPillProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "pressed";
  /** Text content; defaults to "1Y". */
  text1?: string;
}
export declare const NeuPill: React.FC<NeuPillProps>;
export default NeuPill;
