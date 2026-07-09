# PRD — Invest & First Order (core loop)

**Epic:** Explore/Filter → **Fund Detail** → Amount Input (SIP/lumpsum) → Order Review
(NRE/NRO + eligibility) → Payment → Receipt
**Author:** product-strategist (with fintech-ux, growth-hooks) · **Date:** 2026-07-08
**Status:** ✅ APPROVED (Ashish, 2026-07-08) · **Focus corridors:** UAE + Singapore (§C0)

**Approval decisions on open questions:**
- **Q4 (multi-currency on Amount): IN** — INR primary + **AED/SGD reference line** by residence.
  **Display only, no conversion engine.** (S8 updated.)
- **Q3 (S5 teaser wording):** draft during Fund Detail build, but **sign-off does NOT block the
  screen** — if wording isn't compliance-signed-off, ship the **S5 slot designed but
  feature-flagged/hidden.** (Noted in brief.)
- **Q1 (payment rails) & Q2 (eligibility data source):** external deps — design proceeds with
  **method-agnostic payment patterns** + an **assumed eligibility API**; both marked
  **[blocked on ops/tech]** in handoff.
**Source docs:** `voice-of-user.md`, `competitive-analysis.md`, `flows.md` §2, `journey-maps.md`
(Journey B), `hook-strategy.md`, `ia-sitemap.md`, `design-thesis.md`, rulebook 00/04/05/06.
**Kano key:** ⬜ Basic (must-have) · 🟦 Performance (more = better) · 🟪 Delight.
**Wave key:** **W0** = pipeline-proof (Fund Detail) · **W1** = core loop.

---

## 1. Problem & evidence
NRIs in our focus corridors *want* Indian MF exposure but the buy journey is where trust is
won or lost. Evidenced failure modes we must beat:
- **Plan-type distrust** — the "direct vs regular" objection is loud & quantified; incumbents
  are ARN/regular-only and **don't disclose it** → informed users churn. (`voice-of-user.md`
  Theme 9.)
- **Hidden fees erode trust** — Revolut's buried pricing vs **Wise's fee-on-the-button** clarity.
  (`competitive-analysis.md` §4.3.)
- **Late eligibility failure** — resident-first apps let users invest effort then reject by
  country. (Theme 2/8; INDmoney's auto-filter is the bar.)
- **Repatriation anxiety at the source choice** — "which account, and can I get it out?"
  (Theme 6.)
- **Peak-End matters** — Plum's "You're ready to invest!" vs a flat confirmation. (§4 steal.)

**Opportunity:** a calm, honest core loop that discloses plan-type, shows fees on-surface,
checks eligibility inline, labels repatriability at source, and lands a delightful receipt —
*private-bank calm* (design-thesis principles 1, 3, 4, 5, 7).

---

## 2. Goals
**North-star contribution:** this epic is the denominator+numerator of activation —
**% of KYC-completed users who place a first successful investment within 7 days.**

| Success metric | Target signal | Guardrail (counter-metric) |
|---|---|---|
| Explore → Fund Detail → Order conversion | 🟦 higher | drop-off per step |
| First-order completion rate | primary | order-abandon at Review/Payment |
| Fee/plan-type comprehension | users can state "regular (ARN)" + cost | support tickets "is this direct?" |
| Payment success | high | payment-failure rate (NRE/NRO gateway) |
| Receipt → next-action (set SIP/goal) | 🟪 uplift | — |

---

## 3. Users & context
**Focus personas (both DTAA-0%):** **Arjun (UAE)** — mass-affluent, mobile-first, tax-anxious;
**Sam (SG)** — HNI consolidator, wants correctness + repatriability. **Priya (US)** is **gated
pre-KYC (waitlist)** and **does not enter this epic** in Phase-1 (§C1).

**Entry states:** KYC-verified (primary), returning investor, dormant re-entry. *(Pre-KYC users
can browse Explore/Fund Detail read-only but hit the KYC/eligibility gate before Amount.)*

**Corridor differences that touch this epic:**
- UAE/SG = eligible for most AMCs; **no US/CA PFIC/FATCA block here** (that's the pre-KYC gate).
- Per-fund **country eligibility** still enforced (some funds restrict even beyond US/CA).
- **DTAA context** is a *teaser only* on Fund Detail (see §6); full mechanics live in Tax/Redemption.

---

## 4. Scope — user stories (Given/When/Then)

### 4.1 Explore / Filter — **W1**
- **S1 ⬜** *Given* a verified user, *when* they open Invest, *then* they can search/filter funds
  (category, risk, AMC) with **only country-eligible funds shown or clearly badged**.
  *AC:* ineligible funds are labelled, never silently missing without reason.
- **S2 🟦** *Given* a filter, *when* results render, *then* first paint < 400ms (skeletons;
  Doherty).

### 4.2 Fund Detail — **W0 (pipeline proof)**
- **S3 ⬜** *Given* a fund, *when* viewed, *then* returns, risk, min amount, and **explicit
  plan-type = "Regular (ARN)"** are shown. *AC:* plan-type is visible without scrolling to fine print.
- **S4 🟪 (Theme 9 strategy)** *Given* the plan-type, *when* the user taps "Why regular?",
  *then* a calm explainer owns the trade-off (guidance/compliance value: DTAA activation, KYC
  hand-holding, TDS clarity) — honesty as a trust proof, not a hidden liability.
  *AC:* no dark-pattern framing; states the commission exists.
- **S5 🟪 (H1 teaser — bounded)** *Given* a fund, *when* viewed, *then* an **indicative
  post-tax view** may be shown (illustrative, corridor-aware, hedged "consult a tax advisor").
  *AC:* **NO interactive/redemption-accurate TDS preview here** — that is the Redemption epic.
  Teaser is clearly labelled indicative.
- **S6 ⬜** gain/loss shown as **colour + arrow + sign** (rulebook 06; never colour-only).

### 4.3 Amount Input (SIP / lumpsum) — **W1**
- **S7 ⬜** *Given* Fund Detail, *when* user proceeds, *then* they choose **SIP or Lumpsum**;
  SWP/STP are **entry-point links only** (not built here). *AC:* amount validated (min/multiples).
- **S8 🟦** *Given* an amount, *when* entered, *then* numerals are **tabular, cream** and grouped
  Indian-style (rulebook 06); multi-currency (INR + AED/SGD) reference optional.

### 4.4 Order Review — **W1**
- **S9 ⬜ (eligibility inline)** *Given* an order, *when* reviewed, *then* per-fund **country
  eligibility is re-confirmed inline**; if ineligible, show a **blocker with alternatives**, not
  a dead-end or a post-payment failure.
- **S10 ⬜ (repatriable labeling)** *Given* source selection, *when* the user picks **NRE or
  NRO**, *then* each option shows a **repatriable label** (NRE = freely repatriable · NRO =
  capped/conditions). *AC:* label present at the moment of choice.
- **S11 ⬜ (fee-on-surface — Wise pattern)** *Given* the review, *then* **all charges/stamp
  duty are shown on the review/action surface** before confirm — no surprise fees.
- **S12 ⬜** *Given* a completed review, *when* user confirms, *then* **confirm-before-pay** with
  explicit mandate (for SIP) is required (rulebook 05).

### 4.5 Payment — **W1**
- **S13 ⬜** *Given* a confirmed order, *when* paying, *then* support NRE/NRO-compatible methods
  (net-banking / UPI / eNACH per availability). *AC:* method availability by bank surfaced.
- **S14 ⬜ (recover, never dead-end)** *Given* a payment failure, *then* offer retry / change
  method / **saved draft** — never a terminal error. (rulebook 05.)

### 4.6 Receipt — **W1 (Peak-End)**
- **S15 🟪 (peak-end spec)** *Given* a successful order, *when* the receipt shows, *then* it
  delivers a **calm delight moment** + a clear summary (fund, amount, plan-type, source,
  charges, "as of" timestamp) + **one next-action** (set SIP / attach goal). *AC:* celebratory
  but restrained (no confetti/gamification, rulebook 00); Peak-End (rulebook 04).
- **S16 ⬜** receipt is shareable/saveable; folio/order reference visible.

### Explicitly OUT (do not build in this epic)
- ❌ **Full pre-redemption TDS preview** → Redemption & Tax epic. (Only the S5 indicative teaser here.)
- ❌ **DTAA activation flow** (TRC/COR + Form 10F) → DTAA/Tax epic.
- ❌ SWP/STP execution, Switch, NFO → Portfolio epic (entry links only).
- ❌ Direct plans, GIFT City, US/CA serving → scope/§C1.
- ❌ Portfolio holdings/statements → separate epic.

---

## 5. Compliance constraints (with fintech-ux — regulatory reason each)
| Constraint | Regulatory reason |
|---|---|
| **Regular-plan (ARN) disclosure** | AMFI distributor norms; EUIN/ARN capture for advisor-assisted (BRD §3.2). |
| **Country eligibility per fund** | US/Canada + fund-level restrictions; no central feed → ops scheme-master (Platform-Notes NOTE 3). |
| **NRE/NRO source segregation** | Transaction-level NRE/NRO segregation (BRD §3.2; FEMA). |
| **Repatriable labelling** | NRO USD-1M/FY cap + 15CA/CB above; NRE unlimited (BRD §3.6). |
| **Confirm-before-pay + mandate (eNACH)** | Payment authorisation + NPCI mandate norms (rulebook 05). |
| **Fee/stamp-duty transparency** | Cost disclosure; stamp duty on MF purchase (rulebook 05). |
| **Risk disclosure + "as of" timestamps** | SEBI risk/suitability disclosure; data-freshness (BRD §3.2). |

---

## 6. Hook requirements (growth-hooks — what each screen proves in 5s)
- **Fund Detail:** "this is honest — I can see the plan type and an *indicative* after-tax
  sense, no fine-print games." (H1 teaser only.)
- **Order Review:** "no hidden fees, and I know exactly which account funds this and whether I
  can repatriate." (trust = conversion.)
- **Receipt:** "I did it, I know what I did, and here's my next smart step." (Peak-End → retention.)

---

## 7. Flows referenced + edge/failure branches
Primary: **`flows.md` §2 (First investment)**. Key branches this PRD owns:
- Eligibility fail → blocker + alternatives (S9). · Payment fail → recover/draft (S14). ·
  Confirm → edit loop back to Amount (flows.md CONF→AMT). · Source NRE/NRO decision (S10).
- Cross-ref: Redemption tax-preview flow (`flows.md` §3) is **referenced, not built here**.

---

## 8. Open questions (owner · deadline)
| Q | Owner | Deadline |
|---|---|---|
| Payment rails confirmed for NRE/NRO (Razorpay/BillDesk net-banking/UPI/eNACH)? | Tech + Finance (Platform-Notes NOTE 2) | before Payment build |
| Per-fund country-eligibility data source + refresh cadence | Compliance + Ops (NOTE 3) | before Order Review build |
| Indicative post-tax teaser (S5) — exact wording + hedge sign-off | content-voice + Compliance | before Fund Detail sign-off |
| Multi-currency reference on Amount (AED/SGD) — in or defer? | Ashish | before Amount build |

---

## 9. Design handoff block — what design may NOT change without a PRD revision
- Plan-type **"Regular (ARN)" disclosure** stays visible (S3) — not buried.
- **Eligibility is inline** (S9) — no post-payment eligibility failure.
- **Repatriable labels at source selection** (S10) — mandatory.
- **All fees on the review/action surface** before confirm (S11) — no surprise fees.
- **No full TDS preview / DTAA activation** in this epic (scope guard, S5 bound).
- **Confirm-before-pay** retained (S12). · Receipt is **Peak-End, no gamification** (S15).
- Gain/loss = colour + arrow + sign (S6). · Numerals tabular/cream (S8).

**On approval:** `/screen Fund Detail` (W0 pipeline proof) unlocks first, then the W1 loop.
