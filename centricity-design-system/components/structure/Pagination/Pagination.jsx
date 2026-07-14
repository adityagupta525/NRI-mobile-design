import React from "react";

const Arrow = ({ dir }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: dir === "left" ? "none" : "rotate(180deg)" }}><path d="M15 18l-6-6 6-6"/></svg>
);

/** Pagination — page control for statements / paginated fund lists. */
export function Pagination({ page = 1, total = 1, onChange }) {
  const go = (p) => p >= 1 && p <= total && onChange && onChange(p);
  const pages = [];
  for (let i = 1; i <= total; i++) pages.push(i);
  const shown = total <= 5 ? pages : [1, page - 1, page, page + 1, total].filter((p, i, a) => p >= 1 && p <= total && a.indexOf(p) === i);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <PageBtn disabled={page === 1} onClick={() => go(page - 1)}><Arrow dir="left" /></PageBtn>
      {shown.map((p, i) => {
        const gap = i > 0 && p - shown[i - 1] > 1;
        return (
          <React.Fragment key={p}>
            {gap && <span style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-numeral)" }}>…</span>}
            <PageBtn active={p === page} onClick={() => go(p)}>{p}</PageBtn>
          </React.Fragment>
        );
      })}
      <PageBtn disabled={page === total} onClick={() => go(page + 1)}><Arrow dir="right" /></PageBtn>
    </div>
  );
}

function PageBtn({ active, disabled, onClick, children }) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      style={{
        minWidth: 36,
        height: 36,
        borderRadius: "var(--radius-sm)",
        border: active ? "1px solid var(--copper-shimmer)" : "1px solid transparent",
        background: active ? "rgba(182,147,119,0.14)" : "var(--surface-raised)",
        color: active ? "var(--copper-300)" : disabled ? "var(--text-disabled)" : "var(--text-secondary)",
        fontFamily: "var(--font-numeral)",
        fontSize: 13,
        fontWeight: 600,
        cursor: disabled ? "not-allowed" : "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 8px",
      }}
    >
      {children}
    </button>
  );
}
