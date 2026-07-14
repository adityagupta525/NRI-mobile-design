export interface IconButtonProps {
  size?: number;
  active?: boolean;
  /** shows a small copper notification dot */
  badge?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}
export function IconButton(props: IconButtonProps): JSX.Element;
