import * as React from 'react';
export interface TabBarProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Home". */
  text1?: string;
  /** Text content; defaults to "Invest". */
  text2?: string;
  /** Text content; defaults to "Portfolio". */
  text3?: string;
  /** Text content; defaults to "Tax". */
  text4?: string;
}
export declare const TabBar: React.FC<TabBarProps>;
export default TabBar;
