export interface StatusChipProps {
  tone?: "positive" | "negative" | "warning" | "processing" | "neutral";
  dot?: "verified" | "pending" | "failed" | "processing";
  children: React.ReactNode;
}
export function StatusChip(props: StatusChipProps): JSX.Element;

export interface BadgeProps {
  tone?: "positive" | "negative" | "warning" | "processing" | "neutral";
  children: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;

export const Chip: { StatusChip: typeof StatusChip; Badge: typeof Badge };
