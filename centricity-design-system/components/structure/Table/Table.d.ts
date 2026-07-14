export interface TableColumn {
  key: string;
  label: string;
  align?: "left" | "right" | "center";
  flex?: number;
  numeric?: boolean;
}
export interface TableProps {
  columns: TableColumn[];
  rows: Record<string, any>[];
  renderCell?: (key: string, value: any, row: Record<string, any>) => React.ReactNode;
}
export function Table(props: TableProps): JSX.Element;
