export interface WatchlistSwipeRowProps {
  name: string;
  meta: string;
  nav: string;
  change: string;
  up?: boolean;
  onInvest?: () => void;
  onRemove?: () => void;
  /** called with "selection" when the swipe crosses the reveal threshold */
  onHaptic?: (kind: "selection") => void;
}
export function WatchlistSwipeRow(props: WatchlistSwipeRowProps): JSX.Element;
