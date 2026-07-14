/* Portfolio screen — holdings, allocation, performance chart, transactions. */
(function(){
const C = window.CentricityDesignSystem_35f9eb;

function Portfolio() {
  const [tab, setTab] = React.useState(0);
  const [period, setPeriod] = React.useState(2);
  return (
    <div style={{ paddingBottom: 110 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 16px 16px" }}>
        <div className="cent-type-title1" style={{ color: "var(--text-primary)" }}>Portfolio</div>
      </div>

      {/* Hero performance card — the one rim-glow on this screen */}
      <C.Card glow style={{ margin: "0 16px 20px" }}>
        <div className="cent-type-caption" style={{ color: "var(--text-tertiary)", marginBottom: 6 }}>Current value</div>
        <div style={{ fontFamily: "var(--font-numeral)", fontVariantNumeric: "tabular-nums", fontSize: 30, fontWeight: 500, color: "var(--cream-100)" }}>₹3,42,18,650</div>
        <div style={{ fontFamily: "var(--font-numeral)", fontSize: 13, fontWeight: 600, color: "var(--sage-500)", marginBottom: 14 }}>+₹56,200 · +24.8% all time</div>
        <C.LineChart points={[10,12,11,14,13,17,16,20,19,24,22,27]} width={311} height={110} />
        <div style={{ marginTop: 14 }}>
          <C.ButtonGroup options={["1M","3M","6M","1Y","All"]} defaultActive={period} onChange={setPeriod} />
        </div>
      </C.Card>

      {/* Allocation */}
      <C.Card style={{ margin: "0 16px 20px" }}>
        <div className="cent-type-headline" style={{ color: "var(--text-primary)", marginBottom: 16 }}>Asset allocation</div>
        <C.AllocationBar segments={[
          { label: "Equity", pct: 62, color: "var(--copper-500)" },
          { label: "Debt", pct: 24, color: "var(--copper-300)" },
          { label: "Gold", pct: 8, color: "var(--grey-400)" },
          { label: "Intl", pct: 6, color: "var(--grey-600)" },
        ]} />
      </C.Card>

      {/* Holdings / Transactions tabs */}
      <div style={{ padding: "0 16px" }}>
        <C.Tabs items={["Holdings", "Transactions"]} defaultActive={tab} onChange={setTab} />
        <div style={{ marginTop: 8 }}>
          {tab === 0 ? (
            <React.Fragment>
              <Holding name="Parag Parikh Flexi Cap" units="1,240.55 units" value="₹1,42,18,650" delta="+22.4%" up />
              <C.Divider />
              <Holding name="HDFC Mid-cap Opportunities" units="820.10 units" value="₹98,40,000" delta="+18.1%" up />
              <C.Divider />
              <Holding name="Axis Bluechip Fund" units="540.00 units" value="₹1,01,60,000" delta="−1.2%" up={false} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <C.TransactionRow title="SIP — Parag Parikh Flexi Cap" subtitle="Processed · 3 Jul" amount="₹5,000" direction="debit" status="verified" />
              <C.Divider />
              <C.TransactionRow title="Dividend — HDFC Mid-cap" subtitle="Credited · 28 Jun" amount="₹1,240" direction="credit" status="verified" />
              <C.Divider />
              <C.TransactionRow title="Redemption — Axis Bluechip" subtitle="Processing · 27 Jun" amount="₹40,000" direction="credit" status="processing" />
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

function Holding({ name, units, value, delta, up }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0" }}>
      <div>
        <div style={{ fontFamily: "var(--font-ui)", fontSize: 15, fontWeight: 500, color: "var(--text-primary)" }}>{name}</div>
        <div style={{ fontFamily: "var(--font-numeral)", fontSize: 12, color: "var(--text-tertiary)", marginTop: 2 }}>{units}</div>
      </div>
      <div style={{ textAlign: "right" }}>
        <div style={{ fontFamily: "var(--font-numeral)", fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>{value}</div>
        <div style={{ fontFamily: "var(--font-numeral)", fontSize: 12, fontWeight: 600, color: up ? "var(--sage-500)" : "var(--brick-500)", marginTop: 2 }}>{delta}</div>
      </div>
    </div>
  );
}

Object.assign(window, { Portfolio });
})();
