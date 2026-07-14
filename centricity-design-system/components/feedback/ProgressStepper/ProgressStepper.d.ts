/**
 * @startingPoint section="Components" subtitle="7-step KYC progress rail" viewport="700x260"
 */
export interface ProgressStepperProps {
  steps: string[];
  activeIndex: number;
  orientation?: "horizontal" | "vertical";
}
export function ProgressStepper(props: ProgressStepperProps): JSX.Element;
