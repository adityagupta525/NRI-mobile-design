Three chart primitives for portfolio performance: LineChart (NAV/portfolio value over time, copper gradient fill), BarChart (SIP contributions), DonutChart (allocation ring with center value).

```jsx
<LineChart points={[10,12,11,14,18,16,20,24]} />
<BarChart values={[4,6,5,8,7,9]} />
<DonutChart segments={[{value:62,color:'var(--copper-500)'},{value:38,color:'var(--copper-300)'}]} centerValue="62%" centerLabel="Equity" />
```
