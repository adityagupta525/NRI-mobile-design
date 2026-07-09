---
description: Full screen pipeline — research → references → build → motion → copy → audits → critique → handoff
argument-hint: [screen name]
---
Build the screen "$ARGUMENTS" through the FULL pipeline. Start as design-director; do not skip or reorder gates (design-system/quality/quality-gates.md):

1. Check scope.md — confirm "$ARGUMENTS" is Phase-1 design scope; if not, stop and say so.
2. research-hcd: JTBD + persona + journey grounding → sign-off. Reference existing research/*.md and product/prd-*.md outputs; only fill gaps, never re-run full discovery per screen.
3. fintech-ux: compliance requirements + trust cues + failure states for this screen.
4. Reference pass: 4–6 real refs (Mobbin MCP if available, else reference/inspiration-sources.md apps), log borrow/avoid/our-POV in reference/reference-log.md. Reference existing research/*.md and product/prd-*.md outputs; only fill gaps, never re-run full discovery per screen.
5. Create/fill screens/$ARGUMENTS.md from screens/_TEMPLATE.md.
6. figma-master: build on ✦ 5 · Screens from instances (read figma-use skill first). Screenshot.
6.5 TASTE PASS — run /taste [screen]: benchmark against ✦7, apply the ART_DIRECTION material system, cut density, anti-drift check (no purple/blue/teal), one brave move.
7. motion-designer: motion spec with tokens.
8. content-voice: all copy incl. edge states.
9. Run `npm run apca` and `npm run lint:design` — paste outputs into the brief.
10. design-critique: P0–P3 + reference test + brave move. Fix P0/P1, re-verify.
11. tokens-handoff: handoff notes.
12. Report to Ashish in Hinglish: what's done, what's honestly NOT (unbuilt state frames etc.), screenshot, open follow-ups.
