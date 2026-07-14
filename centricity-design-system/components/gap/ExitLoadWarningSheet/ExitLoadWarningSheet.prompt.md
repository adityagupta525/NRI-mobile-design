ExitLoadWarningSheet is a SEBI-sensitive informational bottom sheet (amber, not brick — it's a warning, not an error). Factual only: exit-load %, holding period, redemption amount, and the actual charge on this redemption; reuses `voice.disclaimer`.

Motion: sheet spring-up. Haptic: warning on present. Voice: `voice.disclaimer`.

```jsx
<ExitLoadWarningSheet exitLoadPct="1% (< 365 days)" holdingPeriod="182 days held" redemptionAmount="₹40,000" chargeAmount="₹400" onProceed={go} onCancel={close} />
```
