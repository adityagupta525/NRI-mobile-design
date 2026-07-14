PermissionPrimer is the soft pre-permission ask (camera for KYC, notifications) shown BEFORE the OS prompt to explain the benefit and cut denial rates. Benefit-led copy, one primary Allow + ghost Not now.

Motion: pop-in. Haptic: medium on Allow. Voice: `voice.permission.*`.

```jsx
<PermissionPrimer title="Scan your PAN in seconds" body="Camera access lets you capture documents for instant KYC — no typing." onAllow={ask} onDeny={skip} />
```
