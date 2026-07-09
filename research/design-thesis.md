# Design Thesis — Phase-1 NRI App (Part D)

**Sprint:** Discovery & Definition · Part D (Synthesis)
**One-pager.** Distils `voice-of-user`, `personas`, `competitive-analysis`, `flows`,
`journey-maps`, `hook-strategy` into principles, bets, and non-goals. Grounded in rulebook
`00-pov-art-direction`. **Focus corridors: UAE + Singapore** (§C0).

---

## The thesis in one line
> **Show an NRI what they'll actually *keep* — after tax, and getting it home — with
> private-bank calm and zero silence.** Trust, not features, is the moat.

---

## Design principles (evidence-derived — not generic)

1. **Truth early.** Eligibility, plan-type, TDS, repatriability — surfaced *before* the user
   spends effort or money. *(Journey dips at eligibility/plan/source; Priya + Arjun.)*
2. **Kill the silence.** Every async step (KYC, payment, redemption) shows live status + ETA +
   human fallback. *(SBNRI's #1 failure = "months of unanswered emails.")*
3. **The after-tax number is the hero.** Pre-redemption TDS + DTAA "tax saved" are the product,
   not a footnote. *(Theme 4/5; H1/H2; no competitor does it.)*
4. **Private-bank calm.** One focal point per screen, numbers as heroes (tabular cream),
   metal CTAs, no gamification. *(rulebook 00.)*
5. **Own the trade-offs.** Say "regular plan (ARN)" and *why*; hedge DTAA (ITAT under appeal).
   Honesty *is* the premium signal. *(Theme 9; scam-wave trust bar.)*
6. **Corridor-aware.** Branch by country of residence; UAE + SG (DTAA-0%) first-class; US/CA
   honest waitlist. *(§C0/§C1; both focus personas are DTAA-0% activators.)*
7. **Recover, never dead-end.** Every failure (KYC, penny-drop, payment, mandate) has a way
   forward. *(rulebook 05.)*

---

## Top-5 experience bets (where craft budget goes)

| # | Bet | Why it wins | Persona | Depends on |
|---|---|---|---|---|
| **B1** | **Pre-redemption TDS preview** (net-of-tax before confirm) | Kills the #1 money shock; nobody else does it | Arjun, Sam | assumption #3 |
| **B2** | **DTAA activation + "tax saved this FY"** (UAE MoF vs SG COR) | Turns dense treaty law into a visible win in *both* focus corridors | Arjun, Sam | #1, #2 |
| **B3** | **Live KYC status tracker** | Removes the abandonment driver; trust from transparency | all onboarders | #4 |
| **B4** | **Early honest eligibility gate** | "Tell me before I waste effort"; converts a hard truth into trust | Priya (waitlist) + all | §C1 |
| **B5** | **Calm premium home + repatriable/NRE-NRO labelling** | The "one honest home for my India wealth" feeling | Sam, Arjun | #6 |

---

## What we will explicitly NOT do (non-goals)

**Product scope (scope.md):**
- ❌ GIFT City / IFSC investing, remittance, direct (no-ARN) plans, PMS/AIF/bonds *execution*
  (capture-only), full US/CA serve — all **Phase 2/3**.
- ❌ Resident-Indian anything · web / responsive / desktop.
- ❌ An "AI product" — design the *slot* where a Phase-1 screen needs it, not the six AI layers.

**Craft / UX (rulebook 00 anti-patterns + our DNA):**
- ❌ Gamification — coins, streaks, points, confetti-as-reward. Variable reward = *insight* only.
- ❌ Dark patterns — fake urgency, hidden fees, forced choices, notification spam.
- ❌ Gradient soup, neon, sticker emojis, dense trading-terminal dashboards, decorative charts,
  generic Dribbble gloss.
- ❌ Color-only signals — gain/loss = colour **+ arrow + sign** always.
- ❌ Fabricated tax certainty — DTAA/ITAT positions are **always hedged** ("consult a tax advisor").

---

## The test (rulebook 00)
> Beside **Stripe / Linear / Revolut**, does it hold? If it feels safe, **make one brave move.**
> Our brave move: **the after-tax truth, shown before you commit** — calm, not clever.

*Bets B1–B2 rest on existential assumptions #1–#3 (`assumption-register.md`) — validate with
real UAE/SG NRIs before over-committing craft budget.*
