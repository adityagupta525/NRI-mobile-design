NomineeCard lists nominees (name, relationship, allocation %) with a validation banner that enforces a 100% total, plus an "Add nominee" ghost CTA. SEBI-sensitive field — copy stays factual, no persuasion.

Motion: none. Haptic: warning on invalid total. Voice: factual validation copy.

```jsx
<NomineeCard nominees={[
  { name:"Aarav Sharma", relationship:"Son", allocation:60 },
  { name:"Meera Sharma", relationship:"Spouse", allocation:40 },
]} onAdd={add} onEdit={edit} />
```
