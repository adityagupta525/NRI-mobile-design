import * as React from 'react';
export interface ActionTileProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Reports". */
  text1?: string;
}
export declare const ActionTile: React.FC<ActionTileProps>;
export default ActionTile;
