import * as React from 'react';
export interface SnackbarProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "✓". */
  text1?: string;
  /** Text content; defaults to "SIP started successfully". */
  text2?: string;
  /** Text content; defaults to "Undo". */
  text3?: string;
}
export declare const Snackbar: React.FC<SnackbarProps>;
export default Snackbar;
