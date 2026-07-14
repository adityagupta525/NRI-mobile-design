export interface Folio {
  amc: string;
  folio: string;
}
export interface FolioSelectorProps {
  folios?: Folio[];
  value?: string;
  onChange?: (folio: string) => void;
  title?: string;
}
export function FolioSelector(props: FolioSelectorProps): JSX.Element;
