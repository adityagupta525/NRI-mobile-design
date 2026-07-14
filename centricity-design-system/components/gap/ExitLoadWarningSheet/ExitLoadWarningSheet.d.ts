export interface ExitLoadWarningSheetProps {
  exitLoadPct: string;
  holdingPeriod: string;
  redemptionAmount: string;
  chargeAmount: string;
  onProceed?: () => void;
  onCancel?: () => void;
  disclaimer?: string;
}
export function ExitLoadWarningSheet(props: ExitLoadWarningSheetProps): JSX.Element;
