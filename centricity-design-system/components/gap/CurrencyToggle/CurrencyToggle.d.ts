export interface CurrencyToggleProps {
  options?: string[];
  value?: string;
  onChange?: (currency: string) => void;
  onHaptic?: (kind: "selection") => void;
}
export function CurrencyToggle(props: CurrencyToggleProps): JSX.Element;
