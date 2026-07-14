FolioSelector is a single-select bottom-sheet list of folios (AMC + folio number) — used when a fund is held under multiple folios.

Motion: sheet spring-up. Haptic: selection tick. Voice: n/a.

```jsx
<FolioSelector value={folio} onChange={setFolio} folios={[
  { amc:"Parag Parikh MF", folio:"91002345/0" },
  { amc:"HDFC MF", folio:"55120098/2" },
]} />
```
