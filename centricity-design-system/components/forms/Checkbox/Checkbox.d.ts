export interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
