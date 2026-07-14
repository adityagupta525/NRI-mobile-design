import * as React from 'react';
export interface RiskGaugeProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Moderate". */
  text1?: string;
  /** Text content; defaults to "Risk level 3 / 5". */
  text2?: string;
}
export declare const RiskGauge: React.FC<RiskGaugeProps>;
export default RiskGauge;
