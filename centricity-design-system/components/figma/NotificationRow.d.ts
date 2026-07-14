import * as React from 'react';
export interface NotificationRowProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "2 funds need attention". */
  text1?: string;
  /** Text content; defaults to "Your Mid-cap allocation drifted 8% above target. Review to rebalance.". */
  text2?: string;
  /** Text content; defaults to "2h ago". */
  text3?: string;
}
export declare const NotificationRow: React.FC<NotificationRowProps>;
export default NotificationRow;
