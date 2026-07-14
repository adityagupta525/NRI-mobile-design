import * as React from 'react';
export interface KYCStatusTrackerProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "verifying" | "rejected";
  /** Text content; defaults to "ALMOST THERE". */
  text1?: string;
  /** Text content; defaults to "NSE is completing the final exchange check — nothing needed from you.". */
  text2?: string;
  /** Text content; defaults to "Usually within a few hours · latest by tomorrow 6:00 PM IST". */
  text3?: string;
}
export declare const KYCStatusTracker: React.FC<KYCStatusTrackerProps>;
export default KYCStatusTracker;
