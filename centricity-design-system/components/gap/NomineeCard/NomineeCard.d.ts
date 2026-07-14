export interface Nominee {
  name: string;
  relationship: string;
  allocation: number;
}
export interface NomineeCardProps {
  nominees?: Nominee[];
  onAdd?: () => void;
  onEdit?: (index: number) => void;
}
export function NomineeCard(props: NomineeCardProps): JSX.Element;
