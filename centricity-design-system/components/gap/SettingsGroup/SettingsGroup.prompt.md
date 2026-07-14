SettingsGroup is a titled card of setting rows — icon, label, optional value or trailing control (Switch, chevron). Compose several for a settings screen.

Motion: none. Haptic: light on row tap. Voice: n/a.

```jsx
<SettingsGroup title="Account" items={[
  { icon:<Bank/>, label:"Bank accounts", value:"2 linked", onClick:go },
  { label:"Biometric unlock", trailing:<Switch checked={bio} onChange={setBio}/> },
  { label:"Log out", destructive:true, onClick:logout },
]} />
```
