MaintenanceState is a full-screen planned-downtime state with an optional ETA slot — "your portfolio is untouched", single retry CTA.

Motion: fade-in. Haptic: none. Voice: `voice.error.maintenance`.

```jsx
<MaintenanceState eta="6:30 PM GST" onRetry={refetch} />
```
