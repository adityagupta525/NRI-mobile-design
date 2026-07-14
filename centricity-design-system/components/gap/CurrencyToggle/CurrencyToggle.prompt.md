CurrencyToggle switches the *display* currency for NRIs viewing portfolio value (₹/AED/SGD). It is indicative only — never implies FX conversion or a transactable rate; the underlying investment currency stays ₹, stated in the "Indicative · invested in ₹" label.

Motion: segment slide (150ms). Haptic: selection tick on change. Voice: fixed "indicative" label.

```jsx
<CurrencyToggle value="₹" onChange={setCur} onHaptic={haptic} />
```
