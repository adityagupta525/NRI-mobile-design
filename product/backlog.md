# Prioritized Screen Backlog — RICE (Part D)

**Sprint:** Discovery & Definition · Part D (Synthesis) · product-strategist
**Method:** RICE = (Reach × Impact × Confidence) ÷ Effort. **Reach is weighted to the FOCUS
corridors (UAE + Singapore, §C0)** — DTAA-0% screens score high because focus users *are* the
DTAA-0% segment.

> **Scales.** Reach 1–10 (proxy: share of focus-corridor users touching it in first ~90 days).
> Impact {3 massive · 2.5 · 2 · 1.5 · 1 · 0.5}. Confidence {0.9 · 0.8 · 0.7 · 0.5}. Effort 1–5
> (screen-build units incl. states/motion/critique).
> **All scores are directional [assumption]** — Impact/Confidence on B1/B2 depend on
> existential assumptions #1–#3 (`assumption-register.md`). Re-score after real interviews.

---

## 1. RICE table (sorted)

| Rank | Screen / capability | R | I | C | E | **RICE** | Prio |
|---|---|---|---|---|---|---|---|
| 1 | **Pre-KYC eligibility check** (country gate, §C1) | 10 | 2 | .9 | 1 | **18.0** | P0 |
| 2 | **Live KYC status tracker** (B3) | 10 | 3 | .85 | 2 | **12.8** | P0 |
| 3 | **Fund Detail** *(pipeline-proof, CLAUDE.md first-run)* | 9 | 3 | .9 | 2 | **12.2** | P0 |
| 4 | Global state frames (empty/loading/error/offline) | 10 | 2 | .85 | 2 | **8.5** | P1 |
| 4 | Amount Input (SIP/lumpsum) | 8 | 2.5 | .85 | 2 | **8.5** | P0 |
| 6 | Payment · Receipt (Peak-End) | 8 | 2.5 | .8 | 2 | **8.0** | P0 |
| 7 | Order Review (NRE/NRO + eligibility) | 8 | 3 | .85 | 3 | **6.8** | P0 |
| 7 | Explore / Search / Filter | 8 | 2 | .85 | 2 | **6.8** | P1 |
| 9 | Holdings · Holding Detail (after-tax/repat labels) | 9 | 2.5 | .85 | 3 | **6.4** | P0 |
| 10 | Auth stack (Splash→Login→OTP→MPIN→biometric) | 10 | 2 | .9 | 3 | **6.0** | P1 |
| 10 | SIP setup | 6 | 2.5 | .8 | 2 | **6.0** | P1 |
| 12 | **Pre-redemption TDS preview (B1 — spearhead)** | 7 | 3 | .8 | 3 | **5.6** | P0 |
| 13 | KYC 7-step flow | 10 | 3 | .85 | 5 | **5.1** | P0 |
| 14 | Home dashboard (state-machine) | 10 | 2.5 | .8 | 4 | **5.0** | P0 |
| 15 | **DTAA module (B2 — differentiator, UAE MoF / SG COR)** | 8 | 3 | .7 | 4 | **4.2** | P1 |
| 16 | Profile · Settings · Support | 7 | 1.5 | .85 | 2 | **4.5** | P1 |
| 16 | Portfolio transactions · statements | 7 | 1.5 | .85 | 2 | **4.5** | P1 |
| 18 | Nominee · repatriation (15CA/CB) guidance | 5 | 1.5 | .75 | 2 | **2.8** | P2 |
| 19 | Other Products / CA lead sheets (capture) | 3 | 1 | .8 | 1 | **2.4** | P2 |
| 20 | Utilities (currency converter · world clock) | 5 | 1 | .85 | 2 | **2.1** | P2 |
| 21 | US/CA waitlist + PFIC/FAPI disclosure | 2 | 1 | .9 | 1 | **1.8** | P2 |
| 22 | Tax simulator · capital-gains view | 5 | 1.5 | .7 | 3 | **1.8** | P2 |
| 23 | Switch (intra-AMC) · NFO subscription | 4 | 1 | .75 | 2 | **1.5** | P2 |

---

## 2. RICE ≠ the whole story (override notes)
RICE **under-rates strategic differentiators and foundations** — read these overrides:
- **B1 (TDS preview) & B2 (DTAA module)** rank mid (5.6 / 4.2) only because Effort is high and
  Confidence is discounted (unvalidated). **They ARE the moat** (design-thesis B1/B2) — do NOT
  defer them to P2. Confidence rises → RICE rises the moment assumptions #1–#3 validate.
- **KYC 7-step (5.1) & Home (5.0)** are **foundational** — everything depends on them regardless
  of RICE. Sequence, not score, governs them.
- **Effort is buildable-in-parallel** for independent leaf screens (utilities, lead sheets).

---

## 3. Strategy-adjusted build order (respects dependencies + bets)

**Wave 0 — Pipeline proof (1 screen):**
`Fund Detail` — highest-value single screen; proves tokens → components → motion → APCA → critique
→ handoff end-to-end (CLAUDE.md first-run).

**Wave 1 — Trust foundation + core invest loop:**
Pre-KYC eligibility → Auth → **KYC 7-step + live status tracker** → Home state-machine →
Explore → (Fund Detail) → Amount → Order Review → Payment/Receipt → global state frames.
*Goal: a UAE/SG user can onboard honestly and complete a first investment.* (North-star:
first invest ≤7d of KYC.)

**Wave 2 — The differentiators + portfolio:**
**Pre-redemption TDS preview (B1)** → **DTAA module (B2, UAE/SG branches)** → Holdings/Holding
Detail (after-tax + repatriable labels) → SIP setup → Portfolio transactions/statements.
*Goal: the after-tax truth + 0%-tax activation that no competitor ships.*

**Wave 3 — Round out Phase-1:**
Tax simulator / capital-gains → Switch / NFO → Nominee / repatriation guidance → Utilities →
Profile/Support → lead sheets → US/CA waitlist screen.

---

## 4. What unlocks the next stage
- Each Wave-1 epic needs a **PRD (`/prd`)** before `/screen` (pipeline rule, CLAUDE.md).
- **Validate assumptions #1–#4** (real UAE/SG interviews, Ashish) — re-score B1/B2 confidence.
- Recommended first PRDs: **Onboarding & KYC** (Wave 1 spine) and **Invest / Fund Detail**
  (Wave 0 pipeline proof).

*Scores directional; this backlog is the argument for build order, not a fixed contract.*
