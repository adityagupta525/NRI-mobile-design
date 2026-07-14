/**
 * @startingPoint section="Components" subtitle="Sheet surface, grab handle — replaces modals/dropdowns" viewport="400x360"
 */
export interface BottomSheetProps {
  open?: boolean;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  onClose?: () => void;
}
export function BottomSheet(props: BottomSheetProps): JSX.Element | null;
