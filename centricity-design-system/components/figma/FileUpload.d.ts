import * as React from 'react';
export interface FileUploadProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "empty" | "uploaded";
  /** Text content; defaults to "PAN CARD". */
  text1?: string;
  /** Text content; defaults to "Tap to upload PAN card". */
  text2?: string;
  /** Text content; defaults to "PNG, JPG or PDF · max 5 MB". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const FileUpload: React.FC<FileUploadProps>;
export default FileUpload;
