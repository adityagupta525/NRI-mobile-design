export interface TransactionRowProps {
  title: string;
  subtitle: string;
  amount: string;
  direction?: "debit" | "credit";
  status?: "verified" | "pending" | "failed" | "processing";
}
export function TransactionRow(props: TransactionRowProps): JSX.Element;
