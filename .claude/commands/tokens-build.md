---
description: Rebuild design tokens for all platforms and sanity-check
---
Run `npm run tokens:build`. Confirm the sanity line (space-4=16px, touch-min=44px) printed. Show a 5-line diff sample of build/css/tokens.css if tokens.json changed this session. If the sanity gate fails, STOP and diagnose transforms in design-system/tokens/build.mjs before any screen work.
