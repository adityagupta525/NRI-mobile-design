NAVTicker is the index/NAV strip (NIFTY 50, SENSEX, USD/INR) — mono tabular numerals, gain/loss data colors. Marquee animates only when content overflows; otherwise it sits still.

Motion: `cent-marquee` 22s linear (overflow only). Haptic: none (passive). Voice: n/a.

```jsx
<NAVTicker items={[
  { label: "NIFTY 50", value: "24,010.60", change: "+0.74%" },
  { label: "SENSEX", value: "79,032.10", change: "−0.12%" },
]} />
```
