import * as React from 'react';
export interface MenuProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Download statement". */
  text1?: string;
  /** Text content; defaults to "Share portfolio". */
  text2?: string;
  /** Text content; defaults to "Edit SIP". */
  text3?: string;
  /** Text content; defaults to "Remove fund". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const Menu: React.FC<MenuProps>;
export default Menu;
