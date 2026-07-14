export interface Locale {
  code: string;
  label: string;
  native: string;
  enabled: boolean;
  rtl?: boolean;
}
export const LOCALES: Locale[];

export interface LanguageSelectorProps {
  locales?: Locale[];
  value?: string;
  onChange?: (code: string) => void;
  title?: string;
}
export function LanguageSelector(props: LanguageSelectorProps): JSX.Element;
