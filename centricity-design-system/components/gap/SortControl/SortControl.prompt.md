SortControl is the bottom-sheet single-select sort picker (1Y/3Y/5Y returns, AUM, expense ratio, rating) — active row gets a copper check.

Motion: sheet spring-up. Haptic: selection tick on choose. Voice: n/a.

```jsx
<SortControl value={sort} onChange={setSort} options={[
  { value:"ret3y", label:"3Y returns (high → low)" },
  { value:"aum", label:"Fund size (AUM)" },
  { value:"expense", label:"Expense ratio (low → high)" },
]} />
```
