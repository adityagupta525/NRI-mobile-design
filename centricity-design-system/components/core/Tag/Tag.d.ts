export interface TagProps {
  /** Copper-only: `neutral` (glass) or `copper` accent. Never green/brick — those are for gain/loss data. */
  tone?: "neutral" | "copper";
  onDismiss?: () => void;
  leading?: React.ReactNode;
  children: React.ReactNode;
}
export function Tag(props: TagProps): JSX.Element;
