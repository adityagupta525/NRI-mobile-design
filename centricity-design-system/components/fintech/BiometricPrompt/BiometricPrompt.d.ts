export interface BiometricPromptProps {
  type?: "faceid" | "fingerprint";
  title?: string;
  subtitle?: string;
}
export function BiometricPrompt(props: BiometricPromptProps): JSX.Element;
