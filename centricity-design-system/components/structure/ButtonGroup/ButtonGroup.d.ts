export interface ButtonGroupProps {
  options: string[];
  defaultActive?: number;
  onChange?: (index: number) => void;
  fullWidth?: boolean;
}
export function ButtonGroup(props: ButtonGroupProps): JSX.Element;
