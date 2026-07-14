import * as React from 'react';
export interface ConfirmDialogProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "!". */
  text1?: string;
  /** Text content; defaults to "Confirm redemption?". */
  text2?: string;
  /** Text content; defaults to "Redeeming ₹1,50,000 may attract exit load & STCG tax. This cannot be undone.". */
  text3?: string;
  /** Text content; defaults to "Cancel". */
  text4?: string;
}
export declare const ConfirmDialog: React.FC<ConfirmDialogProps>;
export default ConfirmDialog;
