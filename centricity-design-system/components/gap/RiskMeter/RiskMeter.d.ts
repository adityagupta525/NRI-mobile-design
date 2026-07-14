/** SEBI risk levels, verbatim & fixed order. */
export const RISK_LEVELS: readonly ["Low","Low to Moderate","Moderate","Moderately High","High","Very High"];

export interface RiskMeterProps {
  /** 0=Low … 5=Very High */
  levelIndex?: number;
  size?: number;
}
export function RiskMeter(props: RiskMeterProps): JSX.Element;
