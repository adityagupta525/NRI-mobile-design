# Top 10 Assumptions — Require Real User Interviews

**Sprint:** Discovery & Definition · Part A (Empathize)
**Owner of validation:** Ashish (primary research — you said you'll handle these)
**Date:** 2026-07-08

These are the load-bearing beliefs our Phase-1 design will rest on. Desk research
(`voice-of-user.md`) makes each *plausible*, but **none is confirmed by first-party
data.** If any of the top few are wrong, screens change materially. Each has a
**cheapest test** you can run with 5–8 real NRIs per segment (UAE / US / UK).

| # | Assumption | If FALSE, impact | Cheapest validation |
|---|---|---|---|
| **1** | **Tax/DTAA intelligence is a *primary* reason NRIs would switch apps** (not a nice-to-have). | Our core differentiator is wrong; premium positioning collapses. | 5×3 interviews: "walk me through your last India investment decision." Did tax come up unprompted? |
| **2** | **NRIs will complete DTAA activation in-app** (upload TRC + Form 10F) rather than defer to their CA. | The DTAA flow is built but unused; savings counter is vanity. | Prototype the TRC/10F upload; measure stated willingness + who they'd trust to do it. |
| **3** | **Showing estimated TDS *before* redemption meaningfully changes behaviour/trust** (vs. just informing). | The "shock-killer" is only cosmetic; less design investment warranted. | Show two redemption mocks (with/without pre-TDS estimate); measure confidence + intent. |
| **4** | **Onboarding abandonment is driven by *uncertainty/silence*, not raw step count.** | We'd optimise the wrong thing (fewer steps vs. status transparency). | 5-second + moderated test on a KYC flow with vs. without live status/ETA. |
| **5** | **US/Canada NRIs prefer an honest "you can't do X here" gate over a hopeful flow that fails later.** | Priya segment churns or distrusts us either way; lead-capture value unproven. | Interview 5 US NRIs: reaction to an upfront eligibility blocker vs. late rejection. |
| **6** | **NRE-vs-NRO / repatriable labelling on holdings materially reduces "can I get my money out?" anxiety.** | Labelling is noise; repatriation guidance under-used. | Comprehension test: can users correctly answer "how much of this is freely repatriable?" |
| **7** | **A "premium / calm / private-bank" tone reads as *trustworthy* to NRIs, not as *unserious/luxury fluff*.** | Obsidian-Copper visual bet misfires on trust. | Desirability test (Microsoft reaction cards) on 3 tone directions across segments. |
| **8** | **NRIs will consolidate scattered folios into a new app** (vs. inertia of existing AMC/bank apps). | Portfolio-consolidation value prop is weak; retention risk. | Interview: how many apps today? What would make you move? Switching cost tolerance. |
| **9** | **Visible SEBI/ARN credentials + security posture measurably raise willingness to fund** (given the scam wave). | Trust cues are decoration, not conversion levers. | A/B stated-intent test: fund screen with vs. without prominent regulatory/security cues. |
| **10** | **The 3-segment model (UAE / US / UK-type) captures the real variance** — we're not missing a dominant segment (e.g. Singapore, Australia, returning-NRI/RNOR, minor accounts). | Persona set is skewed; a key journey is unserved. | Recruit broadly; check whether pains cluster differently by country than assumed. |

---

## How to read the priority
- **#1–#4 are existential** — they validate the *core thesis* (tax intelligence +
  shock-removal + trust-through-transparency). Test these first.
- **#5–#7** shape *major flows and the visual/tone bet.*
- **#8–#10** de-risk *positioning and segmentation.*

## Suggested method (lightweight, 2 weeks)
1. **Recruit** 5–8 NRIs each in **UAE, US, UK** (LinkedIn, WhatsApp NRI groups, your
   existing leads). Screen for: invests (or wants to) in Indian MFs.
2. **45-min moderated interviews** — job-to-be-done + last-decision walkthrough +
   reaction to 2–3 rough mocks (DTAA activation, pre-TDS redemption, eligibility gate).
3. **Synthesise** into a validated/invalidated table; feed back into `personas.md`
   and `journey-maps.md` (Part C).

> Nothing in Part B–D should be treated as final until at least **#1–#4** are tested.
> I'll design to these assumptions explicitly and **flag every screen that depends on
> an unvalidated one.**
