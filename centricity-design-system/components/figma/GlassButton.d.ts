import * as React from 'react';
export interface GlassButtonProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "icon" | "text";
  /** Text content; defaults to "Continue with Google". */
  text1?: string;
}
export declare const GlassButton: React.FC<GlassButtonProps>;
export default GlassButton;
