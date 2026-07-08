---
description: Author a PRD for one epic/flow from Discovery outputs. Required before /screen on that area.
argument-hint: [epic, e.g. "Onboarding & KYC"]
---
As product-strategist, write product/prd-$ARGUMENTS.md using research/ outputs (run /discover first if missing — do not fabricate evidence). Structure:
1. Problem & evidence (link voice-of-user, competitive gaps)
2. Goals: north-star contribution, success metrics + guardrails
3. Users & context: personas, entry states, corridor differences (UAE vs US mattering for FATCA/PFIC)
4. Scope: user stories with acceptance criteria (Given/When/Then), explicitly OUT items
5. Compliance constraints (with fintech-ux): regulatory reason per constraint
6. Hook requirements (from growth-hooks): what each key screen must prove in 5 seconds
7. Flows referenced (research/flows.md) + edge/failure branches
8. Open questions with owner + deadline
9. Design handoff block: what design may NOT change without PRD revision

Kano-tag each story (basic/performance/delight). Keep it decision-first and tight — a PRD Ashish can approve in one read. After approval, /screen unlocks for this epic's screens.
