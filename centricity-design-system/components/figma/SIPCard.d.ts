import * as React from 'react';
export interface SIPCardProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Parag Parikh Flexi Cap". */
  text1?: string;
  /** Text content; defaults to "Monthly SIP". */
  text2?: string;
  /** Text content; defaults to "ACTIVE". */
  text3?: string;
  /** Text content; defaults to "₹". */
  text4?: string;
}
export declare const SIPCard: React.FC<SIPCardProps>;
export default SIPCard;
