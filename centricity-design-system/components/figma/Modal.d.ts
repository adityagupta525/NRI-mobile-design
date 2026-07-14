import * as React from 'react';
export interface ModalProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Pause SIP?". */
  text1?: string;
  /** Text content; defaults to "Your ₹25,000 monthly SIP in Parag Parikh Flexi Cap will pause from August. You can resume anytime — no charges.". */
  text2?: string;
  /** Text content; defaults to "Keep active". */
  text3?: string;
  /** Text content; defaults to "Pause SIP". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Modal: React.FC<ModalProps>;
export default Modal;
