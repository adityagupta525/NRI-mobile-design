export interface KYCProgressBannerProps {
  title?: string;
  subtitle?: string;
  notify?: boolean;
  onNotifyChange?: (on: boolean) => void;
}
export function KYCProgressBanner(props: KYCProgressBannerProps): JSX.Element;
