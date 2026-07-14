export interface TabsProps {
  items: string[];
  defaultActive?: number;
  onChange?: (index: number) => void;
}
export function Tabs(props: TabsProps): JSX.Element;
