export interface CarouselProps {
  children: React.ReactNode;
  showDots?: boolean;
}
export function Carousel(props: CarouselProps): JSX.Element;

export interface PageDotsProps {
  count: number;
  active?: number;
}
export function PageDots(props: PageDotsProps): JSX.Element;
