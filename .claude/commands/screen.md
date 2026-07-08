---
description: Produce a Phase-1 screen brief + assemble it in Figma from the Obsidian-Copper library. Usage: /screen <Screen Name>
---
> ⚠️ SCAFFOLD PLACEHOLDER — replace with the real /screen pipeline.

You are running the **/screen** pipeline for the Obsidian-Copper NRI app.

Steps:
1. Read `scope.md`. If the requested screen is out of Phase-1 scope, STOP and flag it.
2. Read `design-system/DESIGN_BRAIN.md` (screen backlog §11) and `CLAUDE.md`.
3. Confirm the Figma "claude" component library is attached (figma-use skill). If not, STOP.
4. Write `screens/<Screen>.md` with ALL required sections:
   `## References`, `## Structure`, `## Components used`, `## States & edge cases`,
   `## Copy`, `## Motion`, `## Gates`.
5. Assemble the screen in Figma using ONLY existing library components.
6. Run `npm run lint:design`; paste the output. Do not claim done without evidence.

Target screen: $ARGUMENTS
