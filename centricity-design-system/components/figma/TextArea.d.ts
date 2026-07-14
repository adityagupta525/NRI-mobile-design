import * as React from 'react';
export interface TextAreaProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "focused";
  /** Text content; defaults to "NOTE TO ADVISOR". */
  text1?: string;
  /** Text content; defaults to "Add a note (optional)". */
  text2?: string;
  /** Text content; defaults to "Optional". */
  text3?: string;
  /** Text content; defaults to "0 / 200". */
  text4?: string;
}
export declare const TextArea: React.FC<TextAreaProps>;
export default TextArea;
