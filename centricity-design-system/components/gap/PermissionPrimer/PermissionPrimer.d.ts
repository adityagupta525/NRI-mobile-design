export interface PermissionPrimerProps {
  icon?: React.ReactNode;
  title: string;
  body: string;
  allowLabel?: string;
  denyLabel?: string;
  onAllow?: () => void;
  onDeny?: () => void;
}
export function PermissionPrimer(props: PermissionPrimerProps): JSX.Element;
