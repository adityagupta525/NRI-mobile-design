FundSearchBar is the glass fund/AMC/goal search — on focus it reveals recent-search glass chips, or a motivating empty state ("Search 4,000+ funds, AMCs & goals") when there's no history. (Named FundSearchBar to avoid collision with the figma SearchBar family.)

Motion: border copper on focus (150ms). Haptic: selection tick on recent-chip tap. Voice: `voice.empty.search`.

```jsx
<FundSearchBar recent={["Parag Parikh Flexi Cap","ELSS","Retirement"]} value={q} onChange={setQ} onSubmit={run} />
```
