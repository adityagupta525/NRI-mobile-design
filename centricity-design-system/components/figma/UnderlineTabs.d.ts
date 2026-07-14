import * as React from 'react';
export interface UnderlineTabsProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "MF". */
  text1?: string;
  /** Text content; defaults to "PMS". */
  text2?: string;
  /** Text content; defaults to "AIF". */
  text3?: string;
  /** Text content; defaults to "BONDS". */
  text4?: string;
}
export declare const UnderlineTabs: React.FC<UnderlineTabsProps>;
export default UnderlineTabs;
