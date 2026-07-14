import * as React from 'react';
export interface CameraCaptureProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "guide" | "capturing" | "success" | "retry";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const CameraCapture: React.FC<CameraCaptureProps>;
export default CameraCapture;
