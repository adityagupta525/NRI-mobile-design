# Journey Maps — Onboard & First-Invest (Part C)

**Sprint:** Discovery & Definition · Part C (Define)
**Pains are EVIDENCED** (tagged to `voice-of-user.md` themes), not invented. Lead persona
**Arjun (UAE/DTAA)**; **Sam (SG/HNI)** co-primary divergences noted; **Priya (US)** is
**waitlist-only** — she exits at the early eligibility gate and does not run these journeys
in Phase-1 (§C1).
Emotion scale: 😟 anxious · 😐 neutral · 🙂 reassured · 😀 delight.

---

## Journey A — Onboarding & KYC (first 10 minutes)

| Stage | User action | Thinking | Emotion | Evidenced pain | Opportunity (design) |
|---|---|---|---|---|---|
| **Trigger** | Downloads app after seeing DTAA/tax angle | "Can I *legit* invest in India from here?" | 😐 | Theme 2/8 — apps reject NRIs / don't work abroad | Trust strip (SEBI/ARN) + "built for NRIs" up front |
| **Eligibility** | Picks country of residence | "Will this even work for my country?" | 😟 | Theme 2 — US/CA lockout; "found out too late" | **Country gate in 60s** (H3); honest US/CA path (§C1) |
| **PAN / identity** | Enters PAN, passport | "Why do they need all this? Is it safe?" | 😟 | Theme 1 — name-mismatch fails; data-privacy fear (Theme 7) | "Why we ask" microcopy + encryption cue (Acorns/Nutmeg) |
| **CKYC fetch** | Waits | "Is it stuck?" | 😐→😟 | Theme 1 — silence/dead air | Optimistic UI + "we found your KYC" 💡 win |
| **Video-KYC + IPV** | Does liveness / verification | "IPV? Do I need to visit an embassy?!" | 😟 | Theme 1 — embassy-IPV confusion | "Do this from anywhere" + ETA + human fallback |
| **Bank penny-drop** | Links NRE/NRO | "Which account? Is a debit safe?" | 😐 | Theme 6 — NRE/NRO confusion | Plain NRE/NRO explainer + small-amount reassurance |
| **Nominee** | Adds / skips | "Do I have to?" | 😐 | SBNRI **nominee dead-end loop** | Skippable-with-reason, never circular |
| **FATCA/CRS (+PFIC)** | Declares | "Will this trigger a tax problem?" | 😟 | Theme 2 — PFIC/FATCA dread | Nutmeg/Plum "foreign status / treaty" framing; honest US disclosure |
| **Wait / review** | Sees status | "Did it go into a black hole?" (SBNRI!) | 😟😟 | Theme 1 — **"months of unanswered emails"** | **★ Live KYC tracker** (step-by-step + ETA) — our #1 opening |
| **Verified** | Lands on Home | "Okay — this actually worked." | 🙂→😀 | — | **★ Peak-End:** "You're verified — here's your first insight" |

**Priya (US) — waitlist path:** she never enters KYC — the **early eligibility gate** routes
her to the honest "not yet" + PFIC disclosure + waitlist, and her journey ends there in
Phase-1 (§C1). **Sam (SG) divergence:** less friction-sensitive, larger sums — lean trust cues
+ support access; also a **DTAA-0% activator** (COR/IRAS), so surface H2 during onboarding.

**Emotional arc:** starts anxious, dips hard at Video-KYC/IPV + "review" wait, recovers only if
status is *visible*. **The whole game is removing silence.**

---

## Journey B — First investment (browse → invested)

| Stage | User action | Thinking | Emotion | Evidenced pain | Opportunity (design) |
|---|---|---|---|---|---|
| **Intent** | Opens Invest / a fund | "Where do I even start?" | 😐 | Theme 8 — fragmentation, 4-apps fatigue | Calm Explore, one focal point (rulebook 00) |
| **Fund detail** | Reads returns, plan | "Is this *regular*? What's it costing me?" | 😟 | **Theme 9 — direct-vs-regular objection (loud)** | **Own it**: plain "regular (ARN)" + "why regular" value story |
| **Amount** | Enters SIP/lumpsum | "SIP or one-time? How much?" | 🙂 | — | Clear SIP/lumpsum toggle; tabular numerals |
| **Eligibility check** | — | "Am I allowed from my country?" | 😟 | Theme 2 — late rejection | Inline eligibility (not a late fail) |
| **Source select** | NRE vs NRO | "Which account — and can I repatriate later?" | 😟 | Theme 6 — repatriation anxiety | NRE/NRO picker + **repatriable label** on the choice |
| **Order review** | Reviews charges, mandate | "Any hidden fee? What exactly am I signing?" | 😐 | Wise/Revolut lesson — hidden fees erode trust | Fee-on-surface transparency; confirm-before-pay 🛡 |
| **Payment** | Pays (net-banking/UPI) | "Will this NRI payment even go through?" | 😟 | Platform-Notes NOTE 2 — NRE/NRO gateway uncertainty | Recover-never-dead-end on failure; saved draft |
| **Receipt** | Sees confirmation | "Done — and I know what I did." | 😀 | — | **★ Peak-End receipt** + next step (set SIP / attach goal) |
| **Post** | Returns later | "What's it worth — and what's mine after tax?" | 🙂 | Theme 4 — after-tax reality | Portfolio after-tax/repatriable strip; TDS preview on redeem (H1) |

**Arjun (UAE) divergence:** at fund detail / post, surface **DTAA 0% opportunity** (H2). **Sam
(SG) divergence:** wants consolidated view + **capital-gains export** for his CA, and DTAA-0%
activation (COR) — no FTC needed (SG has no CG tax). **Priya (US):** gated pre-KYC — she does
not reach this flow in Phase-1.

**Emotional arc:** anxiety spikes at **plan-type (Theme 9)**, **source/repatriation (Theme 6)**,
and **payment**; delight is earnable at the **receipt** if we've been transparent throughout.

---

## What both journeys tell Part D
1. **Remove silence** (KYC tracker) and **remove tax/plan surprise** (pre-TDS, own "regular") —
   these two moves address the highest-emotion dips, both evidenced.
2. **Eligibility + NRE/NRO + repatriability** must be *inline and early*, never late failures.
3. **Peak-End** lives at: KYC-verified, first receipt, redemption net-clarity — design these with
   the most craft (rulebook 04).
4. Every high-anxiety step has a **trust-cue or "why we ask" defender** (rulebook 05).

*Pains here map 1:1 to `voice-of-user.md`; assumptions behind the fixes are in
`assumption-register.md` (#1–#4 existential).*
