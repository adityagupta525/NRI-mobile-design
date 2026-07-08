# CLAUDE.md — centricity-obsidian-copper

Design workspace for the **Obsidian · Copper** design system powering the
Phase-1 NRI investor mobile app (375px). This file is the entry brief for any
agent working in this repo.

## Non-negotiables (top)
- Read `scope.md` before any screen work — it is the Phase-1 boundary. Out-of-scope
  requests get **flagged, not silently designed**. If BRD and `scope.md` conflict,
  `scope.md` wins for design work; flag the conflict.
- **Never claim a gate passed without pasting script output / screenshot evidence.**
- Never build a screen in a Figma file that has no component library attached.
  Confirm the library first (`figma-use` skill).

## Toolchain
- `npm run tokens:build` → builds `build/{css,js,rn,ios,android}` from
  `design-system/tokens/tokens.json`. Must print the sanity line:
  `✓ ... sanity: space-4=16px, touch-min=44px`.
- `npm run lint:design` → token discipline + build-integrity (×16 regression guard)
  + screen-brief completeness. Must be 0 errors.
- Delete stale `build/` before rebuilding if the old ×16-corrupt outputs exist.

## Layout
- `design-system/tokens/` — `tokens.json` (source) + `build.mjs` (Style Dictionary).
- `design-system/DESIGN_BRAIN.md` — the design brain (screen backlog §11, rulebook refs).
- `scripts/design-lint.mjs` — real lint checks.
- `scope.md` — Phase-1 design boundary.
- `screens/` — per-screen briefs (must have all required sections; see lint).
- `.claude/` — agents, commands, skills, settings.
- `docs/` — source BRD v2.0 + platform notes.
- `research/` · `product/` — Discovery & PRD outputs (see below).

## The studio
Agents: design-director · fintech-ux · figma-master · motion-designer · research-hcd
· design-critique · content-voice · tokens-handoff
- product-strategist (PM brain — runs BEFORE design on any new area) · growth-hooks (hook/activation/retention)

Commands: /screen · /critique · /audit-apca · /tokens-build · /reference
- New commands: /discover [area] · /prd [epic]. No /screen on an epic without an approved PRD.

## Known doc inconsistency (decided, encoded in lint)
Rulebook 06 says "LH snaps to 4px grid" but the LOCKED type scale contains 10/14 and
12/18 (not %4). **Decision: the locked scale wins; %4 applies only to NEW sizes
outside the table.** Lint enforces exactly this.

## Non-negotiable brand facts
- Dark-first (Obsidian) with Copper accent; tabular numerals for money.
- Spacing/radius/size tokens are **raw px numbers** in source (16 = 16px), never rem.
- Touch target min 44px.
