export interface PasswordInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorText?: string;
}
export function PasswordInput(props: PasswordInputProps): JSX.Element;
