import * as React from 'react';
export interface DrawerProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "AR". */
  text1?: string;
  /** Text content; defaults to "Ashish Rao". */
  text2?: string;
  /** Text content; defaults to "NRI · KYC verified". */
  text3?: string;
  /** Text content; defaults to "Dashboard". */
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
export declare const Drawer: React.FC<DrawerProps>;
export default Drawer;
