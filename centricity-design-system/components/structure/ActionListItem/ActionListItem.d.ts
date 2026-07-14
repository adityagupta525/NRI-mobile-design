export interface ActionListItemProps {
  leading?: React.ReactNode;
  title: string;
  subtitle?: string;
  trailing?: "chevron" | React.ReactNode | null;
  onClick?: () => void;
  destructive?: boolean;
}
export function ActionListItem(props: ActionListItemProps): JSX.Element;
