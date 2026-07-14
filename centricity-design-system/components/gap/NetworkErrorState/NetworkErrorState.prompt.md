NetworkErrorState is a full-screen reassuring offline/failed-request state — "your data is safe", single retry CTA, never blames the user.

Motion: fade-in. Haptic: none. Voice: `voice.error.network`.

```jsx
<NetworkErrorState onRetry={refetch} />
```
