FeatureIcon renders the 3D obsidian-and-copper feature/goal bitmaps extracted from claude.fig (Retirement, Dream House, Child Education, Reports). Use for hero goal tiles. Utility tiles (Vault, Calculator, Goals list) use copper LINE icons via the `Icon` set instead — not this.

Set `basePath` to the relative path from the consuming page to `assets/feature-icons/`.

```jsx
<FeatureIcon name="retirement" label="Retirement" tile basePath="../assets/feature-icons" />
<FeatureIcon name="dream-house" size={48} basePath="assets/feature-icons" />
```
