import * as React from 'react';
export interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Hi, Ashish". */
  text1?: string;
  /** Text content; defaults to "IST 15:22". */
  text2?: string;
}
export declare const Header: React.FC<HeaderProps>;
export default Header;
