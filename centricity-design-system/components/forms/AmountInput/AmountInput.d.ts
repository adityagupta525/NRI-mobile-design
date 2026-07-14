export function formatIndianCurrency(n: string | number): string;

export interface AmountInputProps {
  label?: string;
  value?: string | number;
  onChange?: (raw: string) => void;
  helperText?: string;
  size?: "large" | "medium";
}
export function AmountInput(props: AmountInputProps): JSX.Element;
