import * as React from 'react';
export interface KYCStepperProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "PAN". */
  text1?: string;
  /** Text content; defaults to "Aadhaar". */
  text2?: string;
  /** Text content; defaults to "3". */
  text3?: string;
  /** Text content; defaults to "Bank". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const KYCStepper: React.FC<KYCStepperProps>;
export default KYCStepper;
