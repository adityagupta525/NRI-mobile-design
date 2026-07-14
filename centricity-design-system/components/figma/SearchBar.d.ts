import * as React from 'react';
export interface SearchBarProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Search funds, AMCs…". */
  text1?: string;
}
export declare const SearchBar: React.FC<SearchBarProps>;
export default SearchBar;
