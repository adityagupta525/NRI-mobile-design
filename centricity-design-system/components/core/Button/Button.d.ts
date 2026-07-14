/**
 * @startingPoint section="Components" subtitle="Primary CTA — brushed copper, one per screen" viewport="700x260"
 */
export interface ButtonProps {
  /** Visual treatment. Only one `primary` button should appear per screen. */
  variant?: "primary" | "secondary" | "tertiary" | "ghost" | "destructive";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}
export function Button(props: ButtonProps): JSX.Element;
