import React, { useState } from "react";

const SearchIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>;
const Clock = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;

/** FundSearchBar — glass fund/AMC/goal search with recent-search chips and a motivating
 *  empty state. Named FundSearchBar to avoid collision with the figma SearchBar family.
 *  Voice token: voice.empty.search ("Search 4,000+ funds, AMCs & goals"). */
export function FundSearchBar({ placeholder = "Search funds, AMCs, goals", recent = [], value = "", onChange, onSubmit, onRecent }) {
  const [focused, setFocused] = useState(false);
  const showRecent = focused && !value && recent.length > 0;
  const showEmpty = focused && !value && recent.length === 0;
  return (
    <div style={{ fontFamily: "var(--font-ui)" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          height: 48,
          padding: "0 14px",
          borderRadius: "var(--radius-md)",
          background: "var(--surface-glass-input)",
          border: `1px solid ${focused ? "var(--border-focus)" : "var(--border-hairline)"}`,
          backdropFilter: "blur(var(--blur-glass))",
          transition: "border-color var(--duration-fast) var(--easing-standard)",
        }}
      >
        <span style={{ color: focused ? "var(--copper-400)" : "var(--text-tertiary)" }}><SearchIcon /></span>
        <input
          value={value}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          onChange={(e) => onChange && onChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSubmit && onSubmit(value)}
          style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "var(--text-primary)", fontFamily: "var(--font-ui)", fontSize: 15 }}
        />
        {value && <button onClick={() => onChange && onChange("")} style={{ background: "none", border: "none", color: "var(--text-tertiary)", cursor: "pointer", fontSize: 16 }}>✕</button>}
      </div>

      {showRecent && (
        <div style={{ marginTop: 12 }}>
          <div className="cent-type-datalabel" style={{ color: "var(--text-meta)", marginBottom: 8 }}>Recent</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {recent.map((r) => (
              <button
                key={r}
                onClick={() => onRecent && onRecent(r)}
                style={{ display: "inline-flex", alignItems: "center", gap: 6, height: 32, padding: "0 12px", borderRadius: "var(--radius-full)", background: "var(--surface-glass-input)", border: "1px solid var(--border-hairline)", color: "var(--text-secondary)", fontFamily: "var(--font-ui)", fontSize: 13, cursor: "pointer" }}
              >
                <span style={{ color: "var(--text-tertiary)" }}><Clock /></span>{r}
              </button>
            ))}
          </div>
        </div>
      )}

      {showEmpty && (
        <div style={{ marginTop: 16, textAlign: "center", color: "var(--text-tertiary)", fontSize: 14 }}>
          Search <span style={{ color: "var(--copper-300)", fontFamily: "var(--font-numeral)", fontWeight: 600 }}>4,000+</span> funds, AMCs &amp; goals
        </div>
      )}
    </div>
  );
}
