FundFilterSheet is a bottom sheet (never a dropdown) with multi-select chip groups for fund category / AMC / risk, a sticky "Apply (n)" copper CTA and a "Clear all" ghost. The trigger button carries the active-filter count badge.

Motion: sheet spring-up + scrim. Haptic: selection tick per chip, medium on Apply. Voice: n/a.

```jsx
<FundFilterSheet count={3} groups={[
  { key:"cat", label:"Category", options:["Flexi Cap","Large Cap","Mid Cap","ELSS","Debt"] },
  { key:"risk", label:"Risk", options:["Low","Moderate","High","Very High"] },
]} selected={sel} onToggle={toggle} onApply={apply} onClear={clear} />
```
