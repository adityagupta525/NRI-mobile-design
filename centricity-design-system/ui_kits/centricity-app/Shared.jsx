/* Shared chrome, icons, and helpers for the Centricity app UI kit. Exposes to window. */

(function(){
const C = window.CentricityDesignSystem_35f9eb;

// ---- Icons (outline, ~1.8 stroke, matching product) ----
const Icon = {
  search: (p) => <svg width={p?.s||20} height={p?.s||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>,
  bell: (p) => <svg width={p?.s||20} height={p?.s||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 01-3.4 0"/></svg>,
  home: (p) => <svg width={p?.s||22} height={p?.s||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg>,
  portfolio: (p) => <svg width={p?.s||22} height={p?.s||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3a9 9 0 109 9h-9z"/><path d="M12 3v9h9"/></svg>,
  invest: (p) => <svg width={p?.s||22} height={p?.s||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.5c0-1.1 1.1-2 2.5-2s2.5.9 2.5 2-1.1 2-2.5 2-2.5.9-2.5 2 1.1 2 2.5 2 2.5-.9 2.5-2"/></svg>,
  tax: (p) => <svg width={p?.s||22} height={p?.s||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h6M9 11h6M9 15h4"/></svg>,
  back: (p) => <svg width={p?.s||22} height={p?.s||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>,
  chevRight: (p) => <svg width={p?.s||18} height={p?.s||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>,
  arrowUp: (p) => <svg width={p?.s||16} height={p?.s||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8"/></svg>,
  eye: (p) => <svg width={p?.s||18} height={p?.s||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>,
  spark: (p) => <svg width={p?.s||16} height={p?.s||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 17l5-5 3 3 8-8"/></svg>,
  reports: (p) => <svg width={p?.s||24} height={p?.s||24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/><path d="M14 3v5h5M9 13l2 2 3-4"/></svg>,
  goals: (p) => <svg width={p?.s||24} height={p?.s||24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>,
  vault: (p) => <svg width={p?.s||24} height={p?.s||24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="12" cy="12" r="4"/><path d="M12 8v1M12 15v1"/></svg>,
  calc: (p) => <svg width={p?.s||24} height={p?.s||24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h2M12 11h2M8 15h2M12 15h2"/></svg>,
  check: (p) => <svg width={p?.s||16} height={p?.s||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>,
};

// ---- iOS status bar ----
function StatusBar({ dark = true }) {
  return (
    <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px 0 28px", color: "var(--cream-100)", fontFamily: "var(--font-numeral)", fontSize: 15, fontWeight: 600, flexShrink: 0 }}>
      <span>9:41</span>
      <span style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor"><rect x="0" y="6" width="3" height="5" rx="1"/><rect x="4.5" y="4" width="3" height="7" rx="1"/><rect x="9" y="2" width="3" height="9" rx="1"/><rect x="13.5" y="0" width="3" height="11" rx="1"/></svg>
        <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor"><path d="M8 2.2c2 0 3.9.8 5.3 2.1l1.2-1.3C13.8 1.2 11 0 8 0S2.2 1.2.5 3l1.2 1.3C3.1 3 5 2.2 8 2.2z" opacity="0.9"/><path d="M8 5.5c1 0 2 .4 2.7 1.1l1.2-1.3C10.8 4.2 9.5 3.7 8 3.7s-2.8.5-3.9 1.6l1.2 1.3C6 5.9 7 5.5 8 5.5z"/><circle cx="8" cy="9.2" r="1.6"/></svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke="currentColor" opacity="0.4"/><rect x="2" y="2" width="18" height="8" rx="1.5" fill="currentColor"/><rect x="23" y="4" width="1.5" height="4" rx="0.75" fill="currentColor" opacity="0.6"/></svg>
      </span>
    </div>
  );
}

// ---- Bottom tab bar (glass) ----
function TabBar({ active, onChange }) {
  const tabs = [
    { id: "home", label: "Home", icon: Icon.home },
    { id: "portfolio", label: "Portfolio", icon: Icon.portfolio },
    { id: "invest", label: "Invest", icon: Icon.invest },
    { id: "tax", label: "Taxation", icon: Icon.tax },
  ];
  return (
    <div className="cent-glass" style={{ position: "absolute", left: 0, right: 0, bottom: 0, paddingBottom: 34, paddingTop: 10, display: "flex", justifyContent: "space-around", borderRadius: 0, borderLeft: "none", borderRight: "none", borderBottom: "none" }}>
      {tabs.map((t) => {
        const on = active === t.id;
        return (
          <button key={t.id} onClick={() => onChange(t.id)} style={{ background: "none", border: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, color: on ? "var(--copper-400)" : "var(--grey-500)", cursor: "pointer" }}>
            <t.icon s={22} />
            <span style={{ fontFamily: "var(--font-ui)", fontSize: 10, fontWeight: on ? 600 : 500 }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ---- Market ticker row ----
function MarketTicker() {
  const items = [
    { k: "NIFTY 50", v: "24,318", d: "+0.74%", up: true },
    { k: "SENSEX", v: "79,842", d: "+0.74%", up: true },
    { k: "USD/INR", v: "94.47", d: "−0.74%", up: false },
  ];
  return (
    <div style={{ display: "flex", gap: 8, padding: "0 16px" }}>
      {items.map((it) => (
        <div key={it.k} style={{ flex: 1, display: "flex", gap: 6, alignItems: "center" }}>
          <span style={{ color: it.up ? "var(--sage-500)" : "var(--brick-500)" }}>{Icon.spark({ s: 14 })}</span>
          <div>
            <div className="cent-type-datalabel-sm" style={{ color: "var(--text-meta)" }}>{it.k}</div>
            <div style={{ fontFamily: "var(--font-numeral)", fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }}>{it.v} <span style={{ color: it.up ? "var(--green-base)" : "var(--red-base)", fontSize: 10 }}>{it.d}</span></div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ---- App header ----
function AppHeader() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 16px 16px" }}>
      <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--surface-raised)", flexShrink: 0, overflow: "hidden", border: "1px solid var(--copper-shimmer)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--copper-400)", fontFamily: "var(--font-ui)", fontWeight: 700 }}>A</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "var(--font-ui)", fontSize: 17, fontWeight: 600, color: "var(--text-primary)" }}>Hi, Ashish</div>
        <div style={{ fontFamily: "var(--font-numeral)", fontSize: 12, color: "var(--text-tertiary)" }}>IST 15:22</div>
      </div>
      <C.IconButton><Icon.search /></C.IconButton>
      <C.IconButton badge><Icon.bell /></C.IconButton>
    </div>
  );
}

function SectionHeader({ title, action = "See all" }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", marginBottom: 14 }}>
      <div className="cent-type-title2" style={{ color: "var(--text-primary)" }}>{title}</div>
      {action && <span style={{ display: "flex", alignItems: "center", gap: 4, color: "var(--copper-400)", fontFamily: "var(--font-ui)", fontSize: 13, fontWeight: 600 }}>{action} {Icon.chevRight({ s: 14 })}</span>}
    </div>
  );
}

Object.assign(window, { Icon, StatusBar, TabBar, MarketTicker, AppHeader, SectionHeader });
})();
