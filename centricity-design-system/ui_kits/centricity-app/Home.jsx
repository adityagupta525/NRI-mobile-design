/* Home screen — recreates the Centricity home for an existing (invested) user. */
(function(){
const C = window.CentricityDesignSystem_35f9eb;

function PortfolioValueCard() {
  return (
    <C.Card style={{ margin: "0 16px 16px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div className="cent-type-datalabel" style={{ color: "var(--text-meta)" }}>Total portfolio value</div>
        <div style={{ display: "flex", gap: 8 }}>
          <span style={{ width: 32, height: 32, borderRadius: "var(--radius-full)", background: "var(--surface-raised)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-secondary)" }}>{window.Icon.eye({ s: 16 })}</span>
          <span style={{ height: 32, padding: "0 10px", borderRadius: "var(--radius-full)", background: "var(--surface-raised)", display: "flex", alignItems: "center", gap: 4, color: "var(--text-secondary)", fontFamily: "var(--font-numeral)", fontSize: 13 }}>₹ ▾</span>
        </div>
      </div>
      <div style={{ fontFamily: "var(--font-numeral)", fontVariantNumeric: "tabular-nums", fontSize: 34, fontWeight: 500, letterSpacing: "-0.4px", color: "var(--cream-100)" }}>₹3,42,18,650</div>
      <div style={{ fontFamily: "var(--font-numeral)", fontSize: 14, fontWeight: 600, color: "var(--sage-500)", marginTop: 4 }}>+₹56,200 (+24.8%)</div>
      <div style={{ display: "flex", justifyContent: "space-between", margin: "18px 0" }}>
        <C.MetricTile label="Invested" value="₹2,86,40,000" />
        <C.MetricTile label="Today's G/L" value="₹24,000" delta="+11.8%" />
        <C.MetricTile label="XIRR" value="14.82%" deltaTone="warning" />
      </div>
      <button style={{ width: "100%", height: 52, borderRadius: "var(--radius-md)", background: "var(--surface-raised)", border: "1px solid rgba(201,161,94,0.25)", display: "flex", alignItems: "center", gap: 10, padding: "0 14px", cursor: "pointer" }}>
        <span style={{ width: 24, height: 24 }}><C.DonutChart segments={[{value:2,color:'var(--amber-500)'},{value:8,color:'var(--obsidian-700)'}]} size={24} thickness={5} /></span>
        <span style={{ flex: 1, textAlign: "left", fontFamily: "var(--font-ui)", fontSize: 14, fontWeight: 600, color: "var(--amber-500)" }}>2 FUNDS NEED ATTENTION!</span>
        <span style={{ color: "var(--text-tertiary)" }}>{window.Icon.chevRight()}</span>
      </button>
    </C.Card>
  );
}

function ToolkitCard() {
  return (
    <div className="cent-grain" style={{ margin: "0 16px 24px", borderRadius: "var(--radius-lg)", background: "linear-gradient(160deg, #17130F 0%, #0C0B0A 60%)", padding: 20, position: "relative", overflow: "hidden", boxShadow: "var(--shadow-card)" }}>
      <div style={{ position: "absolute", right: -20, top: 10, width: 180, height: 120, background: "radial-gradient(circle at 60% 40%, rgba(224,168,125,0.25), transparent 65%)" }} />
      <div className="cent-type-title2" style={{ color: "var(--cream-100)", marginBottom: 6 }}>Your analysis toolkit</div>
      <div className="cent-type-callout" style={{ color: "var(--text-secondary)", maxWidth: 240, marginBottom: 60 }}>Performance, fund overlap, what-if analysis & liquidity — pro-grade insights, made simple.</div>
      <div className="cent-copper-cta" style={{ height: 52, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 15 }}>Discover tools</div>
    </div>
  );
}

function TaxBanner() {
  return (
    <div style={{ margin: "0 16px 24px", borderRadius: "var(--radius-lg)", overflow: "hidden", position: "relative", padding: 20, background: "linear-gradient(120deg, #6E4A38 0%, #3A2A22 100%)" }}>
      <div className="cent-type-title2" style={{ color: "var(--cream-100)", maxWidth: 200, marginBottom: 16 }}>Are you overpaying tax on your India investments?</div>
      <div style={{ display: "inline-flex", height: 40, padding: "0 18px", alignItems: "center", borderRadius: "var(--radius-sm)", background: "var(--obsidian-950)", color: "var(--cream-100)", fontFamily: "var(--font-ui)", fontSize: 14, fontWeight: 600 }}>Check my savings</div>
    </div>
  );
}

function KnowYourMoney() {
  const tiles = [
    { label: "Reports", icon: window.Icon.reports },
    { label: "Goals", icon: window.Icon.goals },
    { label: "Vault", icon: window.Icon.vault },
    { label: "Calculator", icon: window.Icon.calc },
  ];
  return (
    <div style={{ marginBottom: 24 }}>
      <window.SectionHeader title="Know your money" />
      <div style={{ display: "flex", gap: 12, padding: "0 16px" }}>
        {tiles.map((t) => (
          <div key={t.label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <div className="cent-grain" style={{ width: "100%", aspectRatio: "1", borderRadius: "var(--radius-md)", background: "var(--surface-card)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--cream-200)" }}><t.icon /></div>
            <span style={{ fontFamily: "var(--font-ui)", fontSize: 12, color: "var(--text-secondary)" }}>{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Home({ onStartKyc }) {
  return (
    <div style={{ paddingBottom: 110 }}>
      <div onClick={onStartKyc} style={{ cursor: "pointer" }}>
        <C.KYCProgressBanner title="Finish your KYC to start investing" subtitle="7 quick steps · about 4 minutes" />
      </div>
      <window.AppHeader />
      <div style={{ marginBottom: 20 }}><window.MarketTicker /></div>
      <PortfolioValueCard />
      <div style={{ marginBottom: 24 }}>
        <window.SectionHeader title="Popular with NRIs" />
        <div style={{ display: "flex", gap: 12, padding: "0 16px", overflowX: "auto" }}>
          <C.FundCard name="Parag Parikh Flexi Cap growth fund" category="Flexi Cap | Equity" cagr="+22.4%" minSip="₹1,000" icon={<span style={{color:'var(--copper-400)'}}>◆</span>} />
          <C.FundCard name="HDFC Mid-cap Opportunities" category="Thematic | Debt" cagr="+18.1%" minSip="₹500" icon={<span style={{color:'var(--copper-400)'}}>◆</span>} />
        </div>
      </div>
      <TaxBanner />
      <KnowYourMoney />
      <ToolkitCard />
    </div>
  );
}

Object.assign(window, { Home });
})();
