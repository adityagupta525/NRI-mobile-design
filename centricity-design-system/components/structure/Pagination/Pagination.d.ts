export interface PaginationProps {
  page?: number;
  total?: number;
  onChange?: (page: number) => void;
}
export function Pagination(props: PaginationProps): JSX.Element;
