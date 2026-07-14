import * as React from 'react';
export interface IconProps {
  className?: string;
  style?: React.CSSProperties;
  name?: "house" | "chart-pie-slice" | "wallet" | "receipt" | "user" | "magnifying-glass" | "bell" | "gear" | "caret-right" | "caret-down" | "caret-left" | "caret-up" | "x" | "check" | "plus" | "minus" | "arrow-up" | "arrow-down" | "arrow-left" | "funnel" | "sliders-horizontal" | "eye" | "eye-slash" | "lock-simple" | "info" | "warning-circle" | "calendar-blank" | "clock" | "trend-up" | "trend-down" | "bank" | "credit-card" | "coins" | "chart-line-up" | "shield-check" | "seal-check" | "target" | "arrow-clockwise" | "pencil-simple" | "trash" | "copy" | "download-simple" | "share-network" | "sign-out" | "plus-circle" | "currency-inr" | "hand-coins" | "star" | "bookmark-simple" | "fingerprint" | "identification-card" | "file-text" | "arrow-right" | "check-circle" | "x-circle" | "dots-three-vertical" | "list" | "gift" | "question" | "camera" | "upload-simple" | "envelope-simple" | "phone" | "map-pin" | "globe-hemisphere-east" | "qr-code" | "umbrella" | "graduation-cap" | "handshake" | "arrows-left-right" | "scan" | "chat-circle" | "crown-simple" | "airplane-tilt" | "currency-circle-dollar" | "sparkle" | "medal" | "sign-in" | "note-pencil" | "rocket-launch" | "lock-key" | "password" | "selection-all" | "cardholder" | "buildings" | "chart-donut" | "percent" | "calendar-check" | "headset";
}
export declare const Icon: React.FC<IconProps>;
export default Icon;
