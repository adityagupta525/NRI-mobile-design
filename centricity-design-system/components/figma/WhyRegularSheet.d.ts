import * as React from 'react';
export interface WhyRegularSheetProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Why a Regular plan?". */
  text1?: string;
  /** Text content; defaults to "This is a Regular (ARN) plan — a small distributor commission is built into the expense ratio. In return you get guided onboarding, DTAA activation help, pre-tax clarity, and human support. Direct (no-ARN) plans are out of scope for this app.". */
  text2?: string;
}
export declare const WhyRegularSheet: React.FC<WhyRegularSheetProps>;
export default WhyRegularSheet;
