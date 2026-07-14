export interface FilterGroup {
  key: string;
  label: string;
  options: string[];
}
export interface FundFilterSheetProps {
  groups: FilterGroup[];
  selected?: Record<string, string[]>;
  onToggle?: (groupKey: string, option: string) => void;
  onApply?: () => void;
  onClear?: () => void;
  /** number of active filters, shown in the Apply CTA */
  count?: number;
}
export function FundFilterSheet(props: FundFilterSheetProps): JSX.Element;
