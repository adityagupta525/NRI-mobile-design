export interface CompareFund {
  name: string;
  sub: string;
}
export interface CompareMetric {
  label: string;
  values: [string, string];
  /** index of the better value (copper highlight), or null for neutral */
  better?: 0 | 1 | null;
  hint?: string;
}
export interface ComparisonViewProps {
  funds: [CompareFund, CompareFund];
  metrics: CompareMetric[];
}
export function ComparisonView(props: ComparisonViewProps): JSX.Element;
