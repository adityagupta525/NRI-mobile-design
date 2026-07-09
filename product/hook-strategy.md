# Hook & Activation Strategy — Phase-1 (Part C)

**Sprint:** Discovery & Definition · Part C (Define) · growth-hooks × product-strategist
**Grounded in:** `voice-of-user.md`, `personas.md`, `competitive-analysis.md`,
rulebook `00-pov-art-direction`, `04-laws-of-ux`, `05-fintech-nri`
**Rule:** every hook survives the trust test — *would a private bank do this?* No dark
patterns, no fake urgency, no gamified coins. Variable reward = **insight**, never casino.

---

## 1. Hook thesis (the week-1 thought)

> **"Finally — an app that shows exactly what I'll *keep* after tax, before I commit."**

Wealth clarity for NRIs isn't "what's my return"; it's **"what's actually mine after
India's TDS, and can I get it out?"** That anxiety (Themes 4–6, `voice-of-user.md`) is the
hook nobody else pulls.

**Candidate hooks, ranked (evidence → confidence):**
| # | Hook | Evidence | Confidence |
|---|---|---|---|
| **H1** | **See your after-tax reality** — estimated **TDS before you redeem** + DTAA "tax saved" | Theme 4/5 shock; BRD §3.3/3.4 mandate; no competitor does it | 🟢 **co-spearhead** |
| **H2** | **Activate 0% tax** — guided DTAA (TRC/COR + Form 10F) with a live savings counter | Theme 5; **Arjun (UAE) + Sam (SG)**; BRD §3.4.5 | 🟢 **co-spearhead (focus corridors)** |
| **H3** | **Know before you start** — country-of-residence eligibility in 60s (no wasted KYC) | Theme 2/8; INDmoney proves demand | 🟠 **priority ↓** (see note) |
| **H4** | **One calm home for scattered India wealth** — repatriable/NRE-NRO labelled, "as of" honest | Theme 6/8; Sam | 🟡 |

**Corridor-focus (decision §C0):** focus = **UAE + Singapore** — *both DTAA-0% corridors*, so
**H1 + H2 are CO-SPEARHEADS** here (Arjun activates; Sam consolidates + activates). **H3's
priority drops** because UAE/SG are **not restricted** — the eligibility gate is now mainly the
**US/Canada waitlist** entry (Path B, §C1), not a focus-corridor hook. **H4** serves Sam's
consolidation need.

> **UAE vs SG — the DTAA/TRC difference H2 must handle** (both reach 0% CG, but activation differs):
> - **UAE:** TRC issued by the **MoF**, **only for the *previous* year** → timing trap; prompt
>   users to obtain it **~60 days before** redeeming (BRD §3.4.4).
> - **Singapore:** TRC = **Certificate of Residence (COR)** issued by **IRAS**; tax ID = **NRIC**;
>   must be **SG-resident in the year the gain arises** + **no PE in India**.
> - **Common:** both need **Form 10F + no-PE self-declaration + ITR disclosure**, obtained
>   **before redemption**; always hedged (ITAT under appeal). The DTAA flow branches on corridor.

---

## 2. Home-screen hook spec — what the first 5 seconds must PROVE, per state

Home is a **state machine**, not one screen. Each state has ONE focal point (rulebook 00:
one focal point per screen; Von Restorff: one standout action).

| State | First-5-second job | Focal element | "Needs your attention" slot |
|---|---|---|---|
| **Pre-KYC** (new) | "This is legit and built for *my* country" | Country-eligibility CTA + SEBI/ARN trust strip (rulebook 05) | Start KYC (time estimate: "~7 steps, ~10 min") |
| **KYC-pending** | "My application is *alive*, not a black hole" | **Live KYC status tracker** (kills SBNRI's #1 failure) | Next required action + ETA |
| **Invested** (active) | "Here's my wealth, honestly — and what's actually mine" | Portfolio value (tabular cream numerals) + **after-tax/repatriable strip** | Contextual: DTAA-expiry, SIP-due, TDS-estimate on pending redemption |
| **Dormant** (idle) | "One relevant, non-spammy reason to return" | Single insight card (NAV milestone / tax-season / DTAA saving available) | One CTA only |

**Attention-slot rules (honest):** max one primary + one secondary; each card earns its
place with *insight or a required action*; every card is dismissible; no red-dot spam.
Metric per card = CTR **vs** dismiss-rate (counter-metric).

---

## 3. Activation path — signup → aha, and defending the 7-step KYC

**Aha moment (Phase-1 definition):** *the user sees a real, personalised number they trust*
— either (a) **estimated TDS/DTAA on a real fund** pre-investment, or (b) **first successful
order confirmation + receipt** (rulebook 04 Peak-End; rulebook 05 confirm-before-pay).

**KYC is where motivation dies — the 7 steps and their defenders** (rulebook 05: 14→7 steps;
Laws: Hick = chunk, Doherty = fast feedback, Aesthetic-Usability = polish builds trust):

| Step | Motivation risk | Defender (design requirement) |
|---|---|---|
| 1 PAN | "why so much?" | "why we ask" microcopy (Acorns/Nutmeg pattern) |
| 2 CKYC fetch | dead air | optimistic UI + skeleton (<400ms feel), "we found your KYC" win |
| 3 DigiLocker / Video-KYC + IPV | overseas friction, IPV confusion | clear ETA, "do this from anywhere" reassurance, human fallback |
| 4 Bank penny-drop | "is my money safe?" | encryption + regulated-entity cue; small-amount explainer |
| 5 Nominee | dead-end risk (SBNRI failure) | skippable-with-reason, never circular |
| 6 NRI status | confusion | plain corridor picker; feeds eligibility |
| 7 FATCA/CRS (+PFIC for US) | fear | Nutmeg/Plum "foreign status / treaty" framing, honest US gate |

**Progress must be visible at all times** (N1 + Zeigarnik-free): step x/7, time remaining,
"you can pause and resume." **Peak-End:** end KYC on a celebratory, calm "You're verified —
here's your first insight" (not a dead "under review" if avoidable).

---

## 4. Re-engagement loops (honest triggers only)

| Trigger | Loop | Why it's not a dark pattern |
|---|---|---|
| **SIP due / bounce risk** | reminder + fund-ahead nudge | genuine utility (avoids failed SIP) |
| **NAV / goal milestone** | "your goal crossed X%" insight | real progress, not manufactured |
| **Tax-season (Jan–Jul)** | TDS estimate, DTAA renewal, capital-gains view | time-sensitive real value |
| **TRC expiry −60 days** | DTAA renewal prompt | prevents losing 0% benefit (BRD §3.4.4) |
| **India-visit context** | dual-timezone / repatriation touch | contextual, opt-in |

**Banned:** fake urgency, streak-guilt, coins/points, notification spam. **Premium trust IS
the retention strategy** (rulebook 00; growth-hooks DNA).

---

## 5. Measurement — the ONE metric + guardrails

**North-star (Phase-1 activation):** **% of KYC-completed users who place a first
successful investment within 7 days.**

| Layer | Metric | Counter-metric (guardrail) |
|---|---|---|
| Acquisition | eligibility-check starts | — |
| Activation | **first invest ≤7d of KYC** (north-star) | KYC drop-off rate per step |
| Hook (H1) | pre-redemption TDS-estimate views | redemption-confirm abandonment |
| Hook (H2) | DTAA activations started/completed | TRC-upload failure rate |
| Trust | fund-screen → order conversion | support tickets per order |
| Retention | 30/90-day return rate | notification dismiss/opt-out rate |

> **Dependencies:** H1/H2 impact rests on assumptions **#1–#3** (`assumption-register.md`) —
> validate with real NRIs before over-investing craft budget. Flagged, not assumed.
