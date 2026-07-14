import * as React from 'react';
export interface AvatarGroupProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "AR". */
  text1?: string;
  /** Text content; defaults to "VK". */
  text2?: string;
  /** Text content; defaults to "SM". */
  text3?: string;
  /** Text content; defaults to "+5". */
  text4?: string;
}
export declare const AvatarGroup: React.FC<AvatarGroupProps>;
export default AvatarGroup;
