import * as React from 'react';
export interface PhoneInputProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "MOBILE NUMBER". */
  text1?: string;
  /** Text content; defaults to "🇮🇳". */
  text2?: string;
  /** Text content; defaults to "+91". */
  text3?: string;
  /** Text content; defaults to "98220 40321". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const PhoneInput: React.FC<PhoneInputProps>;
export default PhoneInput;
