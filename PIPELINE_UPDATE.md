# PM Layer — pipeline update
Unzip INTO repo root (merges with existing .claude/). Adds:
- agents: product-strategist (PM brain: domain R&D, PRD, prioritization), growth-hooks (why users come, home-screen hook, activation, retention — no dark patterns)
- commands: /discover [area] · /prd [epic]

## NEW pipeline order (product-first, design after)
1. /discover full app        → Discovery sprint (domain, community mining, competitive, hooks, IA, flows, thesis, backlog) — Ashish reviews each PART
2. Ashish's 30–40%           → taste, POV, real-user interviews from assumption-register
3. /prd [epic]               → PRD per epic; approval unlocks design for that epic
4. /screen [name]            → existing 12-step design pipeline, now steps 2–4 REFERENCE research/ + product/ docs instead of re-researching
5. /critique · /audit-apca   → unchanged gates

## CLAUDE.md — add these lines under "The studio"
- product-strategist (PM brain — runs BEFORE design on any new area) · growth-hooks (hook/activation/retention)
- New commands: /discover [area] · /prd [epic]. No /screen on an epic without an approved PRD.

## screen.md commands note
In .claude/commands/screen.md, step 2 (RESEARCH) and step 4 (REFERENCES): reference research/*.md and product/prd-*.md outputs; only fill gaps, never re-run full discovery per screen.
