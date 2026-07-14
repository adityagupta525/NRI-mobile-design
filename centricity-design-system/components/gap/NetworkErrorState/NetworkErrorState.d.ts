export interface NetworkErrorStateProps {
  title?: string;
  body?: string;
  onRetry?: () => void;
}
export function NetworkErrorState(props: NetworkErrorStateProps): JSX.Element;
