export interface SortOption {
  value: string;
  label: string;
}
export interface SortControlProps {
  options: SortOption[];
  value?: string;
  onChange?: (value: string) => void;
  title?: string;
}
export function SortControl(props: SortControlProps): JSX.Element;
