export interface GoalProgressCardProps {
  goal: string;
  target: number;
  current: number;
  targetDate: string;
  status?: "on-track" | "behind";
}
export function GoalProgressCard(props: GoalProgressCardProps): JSX.Element;
