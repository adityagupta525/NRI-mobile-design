# Assumption Register — NRI App (Phase-1)

**Sprint:** Discovery & Definition
**Owner of validation:** Ashish (primary user interviews)
**Tag convention:** every load-bearing belief is tagged **[evidence]** (backed by a cited
public source in `voice-of-user.md`) or **[assumption]** (inference — needs a real user
interview). Each carries a **risk level** = (likelihood we're wrong × blast radius on design).
**Supersedes:** the earlier `assumptions-to-validate.md`.

---

## A. What we currently believe, and on what basis

| ID | Belief | Tag | Risk |
|---|---|---|---|
| B1 | Onboarding/KYC **silence & uncertainty** (not raw step-count) drives NRI abandonment | **[evidence]** (SBNRI review themes: "months of unanswered emails"; embassy-IPV guidance) | Med |
| B2 | **TDS deducted at source** makes redemption proceeds look smaller than expected → "shock" | **[evidence]** (BRD §3.3; multiple tax explainers) | Low |
| B3 | **UAE/Singapore/Gulf NRIs can reach 0% CG tax** via DTAA residual clause, but it's **not automatic** (TRC + Form 10F + timing) | **[evidence]** (Ushma, KMG, Scripbox; BRD §3.4) | Low |
| B4 | **US/Canada NRIs are frequently rejected/frozen** (FATCA) and hit PFIC/FAPI complexity | **[evidence]** (Belong guide; BRD §3.5) | Low |
| B5 | **Residency-status limbo freezes SIP/redemption** until folios convert | **[evidence]** (SBNRI/Belong/ICICI explainers) | Low |
| B6 | **Repatriation anxiety** (NRE unlimited vs NRO USD 1M + 15CA/CB) is a real recurring worry | **[evidence]** (BRD §3.6; explainers) — *intensity* is **[assumption]** | Med |
| B7 | **Scam-wave + data-privacy fear** raises the trust bar; verifiable SEBI/ARN cues matter | **[evidence]** (Gulf News; MostlyNRI) | Med |
| B8 | Market splits into *smooth-shallow* (Groww/Aspora) vs *deep-painful* (SBNRI); **nobody owns "deep compliance + premium calm UX"** | **[evidence]** (review/positioning signal) — *to be hardened in Part B* | Med |

---

## B. Top 10 assumptions — ONLY real user interviews can validate these

Each: the belief · why it matters · **risk** · **cheapest test** (5–8 real NRIs per corridor: UAE / US / UK).

| # | Assumption | Risk | If FALSE → impact | Cheapest test |
|---|---|---|---|---|
| **1** | **Tax/DTAA intelligence is a *primary* switch reason**, not a nice-to-have | 🔴 High | Core differentiator + premium positioning collapse | "Walk me through your last India investment decision" — did tax arise *unprompted*? |
| **2** | NRIs will **complete DTAA activation in-app** (TRC + Form 10F) vs deferring to a CA | 🔴 High | DTAA flow built but unused; savings counter is vanity | Prototype TRC/10F upload; measure willingness + who they trust to do it |
| **3** | **Pre-redemption TDS estimate changes behaviour/trust** (vs merely informing) | 🔴 High | "Shock-killer" is cosmetic; less craft budget warranted | Two redemption mocks (with/without pre-TDS); measure confidence + intent |
| **4** | Abandonment is driven by **uncertainty/silence, not step count** | 🔴 High | We optimise the wrong lever | KYC flow with vs without live status/ETA — moderated |
| **5** | US/Canada NRIs **prefer an honest upfront "can't do X" gate** over a hopeful flow that fails later | 🟠 Med | Priya segment churns/distrusts either way | 5 US-NRI interviews: reaction to early blocker vs late rejection |
| **6** | **NRE/NRO repatriable labelling reduces "can I get my money out?" anxiety** | 🟠 Med | Labelling is noise; repat guidance under-used | Comprehension test: "how much of this is freely repatriable?" |
| **7** | **Premium/calm "private-bank" tone reads as trustworthy** (not luxury fluff) to NRIs | 🟠 Med | Obsidian-Copper visual bet misfires on trust | Desirability (reaction cards) on 3 tone directions × corridor |
| **8** | NRIs will **consolidate scattered folios into a new app** (vs inertia) | 🟠 Med | Consolidation value prop weak; retention risk | "How many apps today? What would make you move?" switching-cost tolerance |
| **9** | **Visible SEBI/ARN + security posture raises willingness to fund** | 🟠 Med | Trust cues are decoration, not conversion levers | Stated-intent A/B: fund screen with vs without regulatory/security cues |
| **10** | The **3-corridor model (UAE/US/UK) captures real variance** — no missing dominant segment (SG, Australia, returning-NRI/RNOR, minor a/c) | 🟠 Med | Persona set skewed; a key journey unserved | Recruit broadly; check whether pains cluster differently than assumed |

**Test order:** #1–#4 are existential (validate the core thesis) → run first. #5–#7 shape major
flows + the visual/tone bet. #8–#10 de-risk positioning/segmentation.

> Nothing in Part B–D is final until at least **#1–#4** are tested with real NRIs.
> Every screen that depends on an unvalidated assumption will be flagged in its brief.

---

## C. Open strategic decisions (business-owned, block relevant design)

### C0 — Focus markets (DECIDED 2026-07-08, Ashish/business)
**FOCUS = UAE + Singapore** (both DTAA-0% capital-gains corridors — our sharpest wedge).
UK and other DTAA corridors remain **in scope but not focus**. **US/Canada = in scope but
NOT focus → Path B only** (see C1). RICE *reach* scores weight UAE + SG demand first.

### C1 — US/Canada NRI stance in Phase-1 — **DECIDED: Path B (graceful gate + waitlist)**
**Owner: Business** (with Compliance). **Status: ✅ DECIDED 2026-07-08 — Path B.**
US/CA users get an **honest early eligibility gate + PFIC/FAPI disclosure + waitlist / lead
capture**, with **full serve-with-restrictions (Path A) deferred to a later phase** once the
US legal review + AMC-allowance list land. (Path A spec retained below for that future phase.)

**Why it matters:** ~4.5M+ Indians in the US and ~1.7M in Canada are a huge slice of the
market, but FATCA makes most Indian AMCs **reject US/CA NRIs**, and Indian MFs are **PFICs**
(US) / **FAPI** (Canada) — punitive to hold. (BRD §3.5; `voice-of-user.md` Theme 2.) The
choice changes the *entire* first-run for Priya's segment.

**Which AMCs allow US/CA (verify with ops — [assumption] until confirmed):** a *minority*
accept US/CA NRIs, typically with **offline/physical forms + additional declarations** — e.g.
historically **SBI MF, ICICI Prudential, Aditya Birla SL, UTI, Sundaram, Navi** have been
cited as accepting; most others decline. **No central feed exists** — ops must maintain this
in the scheme master (BRD / Platform-Notes NOTE 3). This list **must be sourced from AMCs
directly and dated** before we promise anything in UX.

**Two UX paths (design both as options, ship one after the decision):**

| | **Path A — Serve with restrictions** | **Path B — Graceful waitlist** |
|---|---|---|
| Entry | Country-of-residence → if US/CA, **filter to only US/CA-eligible AMCs** | Country → if US/CA, **honest "not yet" + waitlist capture** |
| Core UX | Prominent **PFIC/FAPI risk disclosure** (Plum-style Form-W8/foreign-status pattern), offline-form handling, "why fewer funds" explainer, eligibility badge per fund | Plain "we can't serve US/CA compliantly yet," **email/phone capture**, expectation-set, optional GIFT-City (Phase 2/3) interest tag |
| Compliance load | High — US legal sign-off is a **hard dependency** (BRD §3.5) | Low — no execution, just lead capture |
| Risk | Over-promise → frozen accounts, the exact SBNRI failure | Under-serve a large segment; competitor captures them |
| Kano | Basic (honesty) + Performance (eligible-fund filter) | Basic (honesty) |

**Decision (recorded):** **Path B for Phase-1** (honest early gate + waitlist + PFIC
disclosure + GIFT-City interest tag) — US legal sign-off is a hard blocker and the US
persona's validated pain is *"found out too late,"* so a truthful gate beats a hopeful flow
that fails. **Path A (serve-with-restrictions) is deferred**, to be revisited once the AMC
list + US legal review land. Gate placement = **early pre-KYC eligibility check** (see
`ia-sitemap.md`). Still validate the *waitlist conversion* assumption (#5) with real US NRIs.
