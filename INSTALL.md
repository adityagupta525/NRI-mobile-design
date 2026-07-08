# Scaffold install — centricity-obsidian-copper
Unzip INTO the repo root (`~/Desktop/NRI Brain/centricity-obsidian-copper`). It adds/overwrites:

- `.claude/agents/` — 8 agents (design-director, fintech-ux, figma-master, motion-designer, research-hcd, design-critique, content-voice, tokens-handoff)
- `.claude/commands/` — /screen /critique /audit-apca /tokens-build /reference
- `.claude/settings.json` — safe permissions (token/apca/lint scripts allowed; rm -rf, git push denied)
- `.claude/skills/figma-use/SKILL.md` — the MCP contract + gotchas
- `scope.md` — Phase-1 design boundary (BRD ke 25–30%)
- `design-system/tokens/build.mjs` — **OVERWRITES old one. Old build had a ×16 unit bug** (dimensions treated as rem): --space-4 was 256px-equivalent, TouchMin=704, RadiusPill=15984, and Tokens.swift had invalid Obj-C syntax. Fixed build outputs true px/dp/points + a sanity gate.
- `scripts/design-lint.mjs` — **OVERWRITES the stub.** Real checks: token grid + locked type-scale pairs, ×16 regression guard, Obj-C-in-Swift guard, screen-brief completeness.

## After unzip
1. `npm install` (if not already)
2. `npm run tokens:build` → must print `✓ ... sanity: space-4=16px, touch-min=44px`
3. `npm run lint:design` → should be 0 errors
4. **Delete stale build outputs first** if they exist (`rm -rf build/`) so nothing consumes the old corrupt values.
5. Add these 2 lines to CLAUDE.md "Non-negotiables" (top):
   - Read `scope.md` before any screen work — Phase-1 boundary; out-of-scope requests get flagged, not silently designed.
   - Never claim a gate passed without pasting script output / screenshot evidence.
6. Duplicate file cleanup: `CENTRICITY_OBSIDIAN_COPPER_BRAIN.md` is byte-identical to `design-system/DESIGN_BRAIN.md` — keep one, delete the other (two copies WILL drift).

## Known doc inconsistency (decided, encoded in lint)
Rulebook 06 says "LH snaps to 4px grid" but the LOCKED scale itself contains 10/14 and 12/18 (not %4). Decision: the locked scale wins; %4 applies only to NEW sizes outside the table. Lint enforces exactly this.

## First run in Claude Code
`claude` → `/tokens-build` → `/screen Fund Detail` (full pipeline proof).
