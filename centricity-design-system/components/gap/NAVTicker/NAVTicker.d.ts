export interface NAVTickerItem {
  label: string;
  value: string;
  change: string;
  /** overrides sign detection */
  up?: boolean;
}
export interface NAVTickerProps {
  items: NAVTickerItem[];
}
export function NAVTicker(props: NAVTickerProps): JSX.Element;
