ConfirmationSuccess is THE single celebration moment (per the motion system) — reserved for the first order placed. Copper particle burst + checkmark draw-on (~600ms spring) with an order-summary slot (fund, amount, folio). Never reuse for routine confirmations — those get a Toast.

Motion: `cent-pop-in` ring + `cent-check-draw` + particle burst, 600ms spring. Haptic: `success` notification on mount. Voice: success copy.

```jsx
<ConfirmationSuccess title="Order placed" message="Your first investment is on its way."
  summary={[{k:"FUND",v:"Parag Parikh Flexi Cap"},{k:"AMOUNT",v:"₹50,000",mono:true},{k:"FOLIO",v:"91002345/0",mono:true}]}
  onHaptic={haptic} onPrimary={goPortfolio} />
```
