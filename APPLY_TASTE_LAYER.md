# Apply taste layer — instructions for Claude Code
Unzip into repo root (merges, add-only except the intentional ART_DIRECTION replacement).

## Files
- `reference/ART_DIRECTION.md` — **REPLACES** the old stub (which had empty "fill per project" placeholders). v2 has the full material system calibrated from ✦7 + moodboard.
- `.claude/commands/taste.md` — NEW `/taste [screen]` command; runs after build, before critique.
- `design-system/components-added.md` — NEW running changelog for library additions.

## Two patches to apply after unzip
1. **`.claude/agents/figma-master.md`** — add under "Hard rules":
   - "When a needed component doesn't exist in the 85-library, BUILD it properly as a new library component (tokens-bound, variants + states, per ART_DIRECTION + rulebook 06/00), add to ✦ 2 Components, then instance it. Never draw one-off shapes on a screen frame. Log additions in design-system/components-added.md."
   - "PRIMARY visual benchmark = ✦ 7 · Design (Ashish's finished Home + Onboarding). Match its material quality — grain, glass, copper-metal, rim-glow, depth — not just token compliance."
   - "Material system is mandatory: no flat-black rectangles. Apply depth stack + grain + glass + one copper rim-glow per ART_DIRECTION."

2. **`.claude/commands/screen.md`** — insert a new step between BUILD (6) and VISUAL POLISH (7):
   - "6.5 TASTE PASS — run /taste [screen]: benchmark against ✦7, apply the ART_DIRECTION material system, cut density, anti-drift check (no purple/blue/teal), one brave move."
   Renumber subsequent steps.

## After applying
Report: confirm ART_DIRECTION replaced, /taste registered as a slash command, both patches applied, and paste screen.md's final numbered step list.
