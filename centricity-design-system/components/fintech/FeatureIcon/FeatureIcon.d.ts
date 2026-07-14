/** Available 3D feature-icon asset names (assets/feature-icons/<name>.png):
 *  "retirement" | "dream-house" | "child-education" | "reports" */

export interface FeatureIconProps {
  /** maps to assets/feature-icons/<name>.png */
  name: "retirement" | "dream-house" | "child-education" | "reports";
  label?: string;
  size?: number;
  /** relative path to the feature-icons asset folder from the consuming page */
  basePath?: string;
  /** wrap in an obsidian rounded tile with a caption */
  tile?: boolean;
}
export function FeatureIcon(props: FeatureIconProps): JSX.Element;
