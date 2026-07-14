/* Invest / first-order flow — fund pick, amount, SIP/lumpsum, confirm sheet + biometric. */
(function(){
const C = window.CentricityDesignSystem_35f9eb;

function Invest() {
  const [mode, setMode] = React.useState(0); // 0 SIP, 1 Lumpsum
  const [amount, setAmount] = React.useState("50000");
  const [sheet, setSheet] = React.useState(null); // null | 'confirm' | 'biometric' | 'done'

  return (
    <div style={{ height: "100%", position: "relative" }}>
      <div style={{ paddingBottom: 130 }}>
        <div style={{ padding: "8px 16px 16px" }}>
          <div className="cent-type-title1" style={{ color: "var(--text-primary)" }}>Invest</div>
        </div>

        {/* Fund summary */}
        <C.Card style={{ margin: "0 16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: "var(--radius-sm)", background: "var(--surface-raised)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--copper-400)", fontSize: 20 }}>◆</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>Parag Parikh Flexi Cap</div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: 12, color: "var(--text-tertiary)" }}>Flexi Cap · Equity · Direct Growth</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div className="cent-type-micro" style={{ color: "var(--text-tertiary)" }}>3Y CAGR</div>
            <div style={{ fontFamily: "var(--font-numeral)", fontSize: 14, fontWeight: 600, color: "var(--sage-500)" }}>+22.4%</div>
          </div>
        </C.Card>

        <div style={{ padding: "0 16px 20px" }}>
          <C.ButtonGroup options={["Monthly SIP", "Lumpsum"]} defaultActive={mode} onChange={setMode} />
        </div>

        <C.Card style={{ margin: "0 16px 16px" }}>
          <C.AmountInput label={mode === 0 ? "Monthly SIP amount" : "Investment amount"} value={amount} onChange={setAmount} helperText={mode === 0 ? "Min. SIP ₹1,000" : "Min. lumpsum ₹5,000"} />
          <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
            {["10000", "25000", "50000", "100000"].map((q) => (
              <button key={q} onClick={() => setAmount(q)} style={{ flex: 1, height: 34, borderRadius: "var(--radius-full)", background: amount === q ? "var(--copper-500)" : "var(--surface-raised)", color: amount === q ? "var(--ink-900)" : "var(--text-secondary)", border: "none", fontFamily: "var(--font-numeral)", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                ₹{C.formatIndianCurrency(q)}
              </button>
            ))}
          </div>
        </C.Card>

        {mode === 0 && (
          <C.Card style={{ margin: "0 16px 16px" }}>
            <C.ActionListItem title="SIP date" subtitle="Every 5th of the month" onClick={() => {}} />
          </C.Card>
        )}

        {/* TDS preview */}
        <div style={{ padding: "0 16px" }}>
          <C.Alert intent="info" title="TDS preview" description="No TDS on purchase. DTAA lowers TDS on future gains for UAE residents." />
        </div>
      </div>

      {/* Thumb-zone CTA */}
      <div className="cent-glass" style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "14px 16px calc(14px + 34px)", borderRadius: 0, borderLeft: "none", borderRight: "none", borderBottom: "none" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <span style={{ fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--text-tertiary)" }}>{mode === 0 ? "Monthly" : "One-time"}</span>
          <span style={{ fontFamily: "var(--font-numeral)", fontSize: 17, fontWeight: 600, color: "var(--cream-100)" }}>₹{C.formatIndianCurrency(amount)}</span>
        </div>
        <C.Button variant="primary" size="large" fullWidth onClick={() => setSheet("confirm")}>
          {mode === 0 ? "Start SIP" : "Invest now"}
        </C.Button>
      </div>

      {/* Sheets */}
      {sheet === "confirm" && (
        <SheetOverlay>
          <C.BottomSheet title="Confirm order" onClose={() => setSheet(null)} footer={<C.Button fullWidth onClick={() => setSheet("biometric")}>Confirm & pay</C.Button>}>
            <Row k="Fund" v="Parag Parikh Flexi Cap" />
            <C.Divider />
            <Row k="Type" v={mode === 0 ? "Monthly SIP" : "Lumpsum"} />
            <C.Divider />
            <Row k="Amount" v={`₹${C.formatIndianCurrency(amount)}`} />
            <C.Divider />
            <Row k="From" v="HDFC •••• 4521 (NRE)" />
          </C.BottomSheet>
        </SheetOverlay>
      )}
      {sheet === "biometric" && (
        <SheetOverlay>
          <C.BottomSheet onClose={() => setSheet(null)} footer={<C.Button variant="secondary" fullWidth onClick={() => setSheet("done")}>Simulate authentication</C.Button>}>
            <C.BiometricPrompt type="faceid" title="Confirm with Face ID" subtitle={`Authorize ₹${C.formatIndianCurrency(amount)} to Parag Parikh Flexi Cap`} />
          </C.BottomSheet>
        </SheetOverlay>
      )}
      {sheet === "done" && (
        <SheetOverlay>
          <C.BottomSheet onClose={() => setSheet(null)} footer={<C.Button fullWidth onClick={() => setSheet(null)}>Done</C.Button>}>
            <C.EmptyState
              icon={<span style={{ color: "var(--sage-500)" }}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg></span>}
              title={mode === 0 ? "SIP started" : "Order placed"}
              description={`₹${C.formatIndianCurrency(amount)} · Parag Parikh Flexi Cap. You'll get units at today's NAV.`}
            />
          </C.BottomSheet>
        </SheetOverlay>
      )}
    </div>
  );
}

function SheetOverlay({ children }) {
  return <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", zIndex: 20 }}>{children}</div>;
}
function Row({ k, v }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0" }}>
      <span style={{ fontFamily: "var(--font-ui)", fontSize: 14, color: "var(--text-tertiary)" }}>{k}</span>
      <span style={{ fontFamily: "var(--font-ui)", fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>{v}</span>
    </div>
  );
}

Object.assign(window, { Invest });
})();
