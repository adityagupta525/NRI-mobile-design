export interface ShareSheetProps {
  heading?: string;
  previewTitle?: string;
  previewValue?: string;
  channels?: string[];
  onShare?: (channel: string, amountsHidden: boolean) => void;
  hideByDefault?: boolean;
}
export function ShareSheet(props: ShareSheetProps): JSX.Element;
