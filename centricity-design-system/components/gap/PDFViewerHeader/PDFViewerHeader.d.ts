export interface PDFViewerHeaderProps {
  title: string;
  page?: number;
  pageCount?: number;
  onClose?: () => void;
  onDownload?: () => void;
  onShare?: () => void;
}
export function PDFViewerHeader(props: PDFViewerHeaderProps): JSX.Element;
