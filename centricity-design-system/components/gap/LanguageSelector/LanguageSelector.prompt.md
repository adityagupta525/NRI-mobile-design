LanguageSelector is i18n prep — English active now, Hindi/Arabic marked "coming soon" (UAE corridor). Keyed by locale code so it maps directly onto the localizable voice-token layer (Batch 2); Arabic row previews RTL.

Motion: none. Haptic: selection tick. Voice: drives locale for the voice tokens.

```jsx
<LanguageSelector value={locale} onChange={setLocale} />
```
