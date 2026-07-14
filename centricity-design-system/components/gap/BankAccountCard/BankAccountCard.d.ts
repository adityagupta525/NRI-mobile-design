export interface BankAccountCardProps {
  bankName: string;
  logo?: React.ReactNode;
  /** NRI account types */
  accountType?: "NRE" | "NRO" | "FCNR" | "Savings";
  masked: string;
  state?: "verified" | "pending" | "failed";
  primary?: boolean;
  onClick?: () => void;
}
export function BankAccountCard(props: BankAccountCardProps): JSX.Element;
