import * as React from 'react';
export interface OnboardingStepperProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Step 2 of 4". */
  text1?: string;
  /** Text content; defaults to "Verify your identity". */
  text2?: string;
  /** Text content; defaults to "Skip". */
  text3?: string;
}
export declare const OnboardingStepper: React.FC<OnboardingStepperProps>;
export default OnboardingStepper;
