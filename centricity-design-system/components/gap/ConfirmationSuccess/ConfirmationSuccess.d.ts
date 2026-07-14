export interface SummaryRow {
  k: string;
  v: string;
  mono?: boolean;
}
export interface ConfirmationSuccessProps {
  title?: string;
  message?: string;
  summary?: SummaryRow[];
  onHaptic?: (kind: "success") => void;
  onPrimary?: () => void;
  primaryLabel?: string;
}
export function ConfirmationSuccess(props: ConfirmationSuccessProps): JSX.Element;
