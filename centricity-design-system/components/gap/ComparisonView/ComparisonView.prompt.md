ComparisonView is a strict 2-fund side-by-side for the 375px frame — sticky fund headers on scroll, metric rows (NAV, CAGR, expense ratio, exit load, risk) with mono micro-labels, and a subtle copper "better value" pill (never a green/red comparison table).

Motion: none (scannable). Haptic: none. Voice: n/a.

```jsx
<ComparisonView funds={[{name:"Parag Parikh Flexi",sub:"FLEXI CAP"},{name:"Axis Bluechip",sub:"LARGE CAP"}]}
  metrics={[
    { label:"3Y CAGR", values:["+22.4%","+14.1%"], better:0 },
    { label:"Expense ratio", values:["0.68%","1.02%"], better:0 },
  ]} />
```
