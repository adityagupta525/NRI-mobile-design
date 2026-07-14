export interface RadioProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}
export function Radio(props: RadioProps): JSX.Element;
