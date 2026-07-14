export interface FundSearchBarProps {
  placeholder?: string;
  recent?: string[];
  value?: string;
  onChange?: (v: string) => void;
  onSubmit?: (v: string) => void;
  onRecent?: (term: string) => void;
}
export function FundSearchBar(props: FundSearchBarProps): JSX.Element;
