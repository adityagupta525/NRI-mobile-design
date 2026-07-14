export interface TextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  helpText?: string;
  errorText?: string;
  disabled?: boolean;
  necessity?: "required" | "optional";
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}
export function TextInput(props: TextInputProps): JSX.Element;
