import * as React from 'react';
export interface SliderProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Monthly SIP". */
  text1?: string;
  /** Text content; defaults to "₹25,000". */
  text2?: string;
  /** Text content; defaults to "₹500". */
  text3?: string;
  /** Text content; defaults to "₹1,00,000". */
  text4?: string;
}
export declare const Slider: React.FC<SliderProps>;
export default Slider;
