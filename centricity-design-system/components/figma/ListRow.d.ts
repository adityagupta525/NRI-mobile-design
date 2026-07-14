import * as React from 'react';
export interface ListRowProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Row label text". */
  text1?: string;
  /** Text content; defaults to "›". */
  text2?: string;
}
export declare const ListRow: React.FC<ListRowProps>;
export default ListRow;
