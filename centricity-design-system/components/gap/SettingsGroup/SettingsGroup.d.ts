export interface SettingsItem {
  icon?: React.ReactNode;
  label: string;
  value?: string;
  trailing?: React.ReactNode;
  onClick?: () => void;
  destructive?: boolean;
}
export interface SettingsGroupProps {
  title?: string;
  items: SettingsItem[];
}
export function SettingsGroup(props: SettingsGroupProps): JSX.Element;
