/**
 * @startingPoint section="Components" subtitle="Elevated obsidian card with 4% grain" viewport="700x200"
 */
export interface CardProps {
  padding?: string;
  /** Applies the single copper rim-glow — use on at most one hero card per screen. */
  glow?: boolean;
  children: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
