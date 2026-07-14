export interface AlertProps {
  intent?: "info" | "warning" | "negative" | "positive";
  title: string;
  description?: string;
  action?: React.ReactNode;
}
export function Alert(props: AlertProps): JSX.Element;
