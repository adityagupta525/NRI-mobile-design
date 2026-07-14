export interface MaintenanceStateProps {
  title?: string;
  body?: string;
  /** optional ETA string, e.g. "6:30 PM GST" */
  eta?: string;
  onRetry?: () => void;
}
export function MaintenanceState(props: MaintenanceStateProps): JSX.Element;
