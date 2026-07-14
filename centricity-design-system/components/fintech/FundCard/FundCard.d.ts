/**
 * @startingPoint section="Components" subtitle="Mutual fund summary card — CAGR, min SIP" viewport="700x220"
 */
export interface FundCardProps {
  icon?: React.ReactNode;
  name: string;
  category: string;
  cagr: string;
  minSip: string;
  style?: React.CSSProperties;
}
export function FundCard(props: FundCardProps): JSX.Element;
