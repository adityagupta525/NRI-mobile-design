export interface RatingPromptProps {
  title?: string;
  body?: string;
  /** 4-5 → app store; ≤3 → in-app feedback (route accordingly) */
  onRate?: (stars: number) => void;
  onDismiss?: () => void;
}
export function RatingPrompt(props: RatingPromptProps): JSX.Element;
