import * as React from 'react';
export interface AvatarProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
  /** Text content; defaults to "AR". */
  text1?: string;
}
export declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
