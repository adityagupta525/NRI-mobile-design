export interface AllocationSegment {
  label: string;
  pct: number;
  color: string;
}
export interface AllocationBarProps {
  segments: AllocationSegment[];
}
export function AllocationBar(props: AllocationBarProps): JSX.Element;
