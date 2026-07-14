export interface ToastProps {
  intent?: "positive" | "negative" | "info";
  message: string;
  visible?: boolean;
}
export function Toast(props: ToastProps): JSX.Element | null;
