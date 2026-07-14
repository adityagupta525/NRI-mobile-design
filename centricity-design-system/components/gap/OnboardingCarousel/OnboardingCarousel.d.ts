export interface OnboardingSlide {
  art: React.ReactNode;
  title: string;
  body: string;
}
export interface OnboardingCarouselProps {
  slides?: OnboardingSlide[];
  onSkip?: () => void;
  onDone?: () => void;
  ctaLabel?: string;
}
export function OnboardingCarousel(props: OnboardingCarouselProps): JSX.Element;
