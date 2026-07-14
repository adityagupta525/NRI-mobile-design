import React from "react";

const Check = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>;

/** LanguageSelector — i18n prep (English now; Hindi/Arabic future per UAE corridor).
 *  Single-select list keyed by locale code so it maps to the localizable voice-token layer. */
export const LOCALES = [
  { code: "en", label: "English", native: "English", enabled: true },
  { code: "hi", label: "Hindi", native: "हिन्दी", enabled: false },
  { code: "ar", label: "Arabic", native: "العربية", enabled: false, rtl: true },
];

export function LanguageSelector({ locales = LOCALES, value = "en", onChange, title = "App language" }) {
  return (
    <div style={{ fontFamily: "var(--font-ui)" }}>
      <div className="cent-type-datalabel" style={{ color: "var(--text-meta)", padding: "0 4px 10px" }}>{title}</div>
      {locales.map((l) => {
        const on = l.code === value;
        const disabled = !l.enabled;
        return (
          <button
            key={l.code}
            onClick={() => l.enabled && onChange && onChange(l.code)}
            disabled={disabled}
            style={{
              width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "14px 12px", marginBottom: 6, background: on ? "rgba(182,147,119,0.10)" : "var(--surface-card)",
              border: `1px solid ${on ? "var(--copper-shimmer)" : "var(--border-hairline)"}`, borderRadius: "var(--radius-md)",
              cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, textAlign: "left",
            }}
          >
            <div>
              <div style={{ fontSize: 15, fontWeight: 600, color: on ? "var(--copper-200)" : "var(--text-primary)" }}>{l.label}</div>
              <div style={{ fontSize: 13, color: "var(--text-tertiary)", marginTop: 2, direction: l.rtl ? "rtl" : "ltr" }}>{l.native}{disabled ? " · coming soon" : ""}</div>
            </div>
            {on && <span style={{ color: "var(--copper-400)" }}><Check /></span>}
          </button>
        );
      })}
    </div>
  );
}
