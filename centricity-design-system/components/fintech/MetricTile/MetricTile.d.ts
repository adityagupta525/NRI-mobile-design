export interface MetricTileProps {
  label: string;
  value: string;
  delta?: string;
  deltaTone?: "positive" | "negative" | "warning";
}
export function MetricTile(props: MetricTileProps): JSX.Element;
