export interface DocUploadCardProps {
  label: string;
  hint?: string;
  uploaded?: boolean;
  onUpload?: () => void;
}
export function DocUploadCard(props: DocUploadCardProps): JSX.Element;
