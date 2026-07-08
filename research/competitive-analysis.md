# Competitive Analysis — NRI Investing (Part B)

**Sprint:** Discovery & Definition · Part B (Market)
**Product:** Obsidian · Copper — Phase-1 NRI investor mobile app
**Date:** 2026-07-08
**Companion to:** `voice-of-user.md`, `personas.md`, `assumption-register.md`

> **Confidence tags:** **[evidence]** = cited public source / real screen I actually
> viewed · **[assumption]** = inference to validate. Step-counts marked **[~]** are
> approximate (full flows not all walkable this session — several stores 403'd; Mobbin
> gave real screens for Wise + analogous investing onboarders).
> **Rulebook note:** `design-system/rulebook/*` (Laws of UX file) isn't in the repo yet,
> so the heuristic eval uses the standard Nielsen-10 + canonical Laws of UX; swap to the
> rulebook's exact wording when that file lands.

---

## 1. The field (3 groups)

| Group | Players | Core job today |
|---|---|---|
| **Direct NRI** | SBNRI, iNRI (goinri), Belong, Vance/**Aspora**, ICICI/HDFC NRI | NRI onboarding + India products (or GIFT City / remittance) |
| **India DIY** | Groww, INDmoney, Kuvera, Zerodha Coin | Slick resident-first MF/stock investing, NRI bolted on |
| **Global benchmark** | Wise, Revolut, Interactive Brokers | World-class cross-border onboarding, trust & fee UX |

---

## 2. Teardowns

Legend: **Steps** = onboarding-to-first-invest friction · **US/CA** = US/Canada NRI handling.

### Direct NRI competitors

**SBNRI** — *the incumbent, and the cautionary tale*
- **Steps [~]:** long; app→documents→**manual/assisted KYC**. **Wet signature on white paper** still required. [evidence]
- **KYC:** digitised "up to KYC," then regulated-product steps go manual. [evidence]
- **NRE/NRO:** supported; regular plans only (ARN), **no direct plans**, not always disclosed. [evidence]
- **Tax:** consolidated info + WhatsApp weekly reports (liked); no pre-redemption TDS preview surfaced. [evidence]/[assumption]
- **Trust cues:** info-consolidation praised. **Erodes trust via:** "months of unanswered emails," unresponsive-after-upload, **nominee dead-end loop**. [evidence]
- **Fails NRIs:** silence + wet-signature + support black-hole = abandonment. **← our #1 opening.**

**iNRI (goinri)**
- **Steps [~]:** "seamless, smooth, fast" digital onboarding (self-reported/Trustpilot). [evidence — weak, vendor/review]
- **KYC:** fully digital, paperless positioning. **NRE/NRO:** MF across equity/debt. [evidence]
- **Tax:** NRI-tax content; DTAA/TDS depth unverified this session. [assumption]
- **Fails NRIs:** breadth/tax-intelligence depth unclear; not a premium/trust-led brand. [assumption]

**Belong** — *the GIFT-City play (different lane)*
- **Steps [~]:** "fast 100% digital," CKYC + Video-KYC live. **No NRE/NRO needed** — invests via **GIFT City** (USD FDs ~6% p.a., inbound MFs from $500). [evidence]
- **Tax:** GIFT-City = **tax-free in India / no PFIC** angle; INR-depreciation hedge. [evidence]
- **Regulator:** **IFSCA** (not SEBI-ARN India MF). [evidence]
- **Fails NRIs (for OUR scope):** doesn't solve India-domestic SEBI MF + DTAA/TDS/repatriation — it *sidesteps* them. **GIFT City is our Phase-2/3, their Phase-1** → they own a lane we've deferred. [evidence + scope.md]

**Vance / Aspora** — *remittance-first, not investing*
- **Steps:** near-instant verification; 4.4★ / 1,116 reviews. [evidence]
- **Strength:** "Google rate" FX, £3 flat / first transfer free — **best-in-class money-movement UX**. [evidence]
- **Fails NRIs:** **it's transfers, not MF investing**; "customer service needs work." Adjacent, not direct — but sets the **speed/transparency bar** we're judged against. [evidence]

**ICICI / HDFC NRI (3-in-1)**
- **Steps [~]:** heavy — bank + PIS/Non-PIS + demat + trading. [evidence]
- **NRE/NRO:** native (they're the bank); MF via Non-PINS. **US/CA: MF disabled.** [evidence]
- **Trust:** high (regulated bank) — **but** legacy, form-heavy, not mobile-craft. [evidence]/[assumption]
- **Fails NRIs:** clunky, fragmented, no tax-intelligence layer, no premium mobile experience. **← our craft + tax opening.**

### India DIY (resident-first)

**Groww**
- **Steps [~]:** "slickest interface," selfie + passport scan, verify NRE/NRO → invest. [evidence — weak/vendor]
- **Transparency:** dedicated **live INR rate + estimated conversion cost** page (loved). [evidence]
- **US/CA:** restricted (FATCA). **Tax:** basic; no DTAA/TDS-preview intelligence. [assumption]
- **Fails NRIs:** resident-first; NRI is a bolt-on, not the brain. No compliance intelligence.

**INDmoney**
- **Steps [~]:** streamlined; **auto-filters funds by country of residence after NRI KYC** (strong). **Free UAE doorstep document pickup.** [evidence]
- **KYC:** Aadhaar eSign (in-India) / courier (elsewhere); physical docs only for SEBI products. [evidence]
- **Breadth:** India + 5,000+ US stocks/ETFs; NRE/NRO explained well. [evidence]
- **Fails NRIs:** broad-but-shallow on **DTAA/TDS/repatriation intelligence**; busy, feature-dense (not calm/premium). [assumption]
- **Steal:** **country-eligibility auto-filter** is exactly Priya's "tell me early" need. [evidence]

**Kuvera**
- **Steps [~]:** fast paperless even if you haven't visited India; **direct plans** (0-commission), **2FA by default**. [evidence]
- **Transparency:** obsessive — fees/hidden costs upfront; free TDS-saving/refund guides. [evidence]
- **Fails NRIs (for us):** **direct plans = no ARN** → **out of our scope** (we're regular/ARN). Utilitarian, not premium. Great *content*, thin *guided compliance flows*. [evidence + scope.md]

**Zerodha Coin**
- **Verdict:** "skip for NRI MF" — powerful for residents, **limited & complex non-PIS setup** for NRIs. [evidence]
- **Fails NRIs:** not built for the NRI journey.

### Global benchmark (learn the craft, not the product)

**Wise** *(real screens viewed)*
- **KYC:** progressive, plain-language — "**What's the purpose for using Wise?**" (AML), yearly-volume band, **Set Passcode** security step, clean single-field-per-screen. [evidence — Mobbin]
- **Transparency:** **fee shown on the action button** ("Including a 1.50 SGD fee"), mid-market rate published. **70% of users correctly identify total cost** (vs Revolut uncertainty). [evidence]
- **Steal:** radical fee transparency + "why we ask" microcopy + one-thing-per-screen KYC.

**Revolut**
- **Trust:** now a full UK bank (2026) + EU licence. **Transparency weaker** — plan maze (5 tiers), weekend FX surcharge, fees "take too long to find → erodes trust." [evidence]
- **Steal (inverted):** *don't* bury pricing behind plans; *don't* out-of-hours surprise fees.

**Interactive Brokers**
- **Strength:** deepest global instrument access + regulatory heft. **Weakness:** notoriously complex/intimidating onboarding & UI — the opposite of calm/premium. [assumption — well-known reputation]
- **Steal (inverted):** power without the intimidation.

### Positive patterns from real onboarding screens (steal these)
- **Nutmeg** — dedicated **"Tax residency status"** (country + "add another country" + "I confirm no other jurisdictions") and **"Nationality"** screens with *"regulations require us to verify…"* framing. → our FATCA/CRS + country-of-residence step, done calmly. [evidence — Mobbin](https://mobbin.com/flows/49238182-5ddc-4a85-8bb8-38e32b7c0a4e)
- **Plum** — **"Foreign status"** toggle: *"I certify I am not a US person… submitting Form W8… claim treaty benefits,"* a consolidated **"The legal stuff"** consent checklist, and a celebratory **"You're ready to invest!"** peak-end. → our PFIC/DTAA declaration + peak-end moment. [evidence — Mobbin](https://mobbin.com/flows/f2b07474-70f9-4e57-a38c-5aad2c42b950)
- **Acorns** — scary field (SSN) wrapped in trust copy: *"We're legally required… We encrypt your data to keep your information safe."* → our PAN/passport/bank steps. [evidence — Mobbin](https://mobbin.com/flows/6895f974-a0ce-41a7-b6ca-25be267d811d)
- **Wise** — fee-on-the-button transparency. [evidence — Mobbin](https://mobbin.com/flows/24d9850e-a8df-40e4-8a6f-601c6fcb2910)

---

## 3. Positioning map & wedge

**Axis X:** Money-movement / breadth  ←→  **Compliance intelligence (DTAA·TDS·FEMA as product)**
**Axis Y:** Utilitarian / dense  ←→  **Premium · calm · trust-led craft**

```
                 PREMIUM / CALM / TRUST-LED (craft)
                              ▲
                  Nutmeg·Plum │        ◇ OBSIDIAN·COPPER  ← our target
                  (craft, not │           (deep compliance + premium)
                   NRI/India) │
   Aspora ●  Belong ◆         │
 (remittance) (GIFT City)     │
 ───────────────────────────┼───────────────────────────►
  BREADTH / MONEY-MOVEMENT    │      COMPLIANCE INTELLIGENCE (DTAA/TDS/FEMA)
                              │  ● INDmoney (auto-eligibility)
   Groww ● (slick, shallow)   │  ● Kuvera (transparent, direct-plan)
   Coin ● (resident-first)    │  ● SBNRI/iNRI (NRI-focused, painful/plain)
                  ICICI/HDFC ●│  (bank-deep, low craft)
                              ▼
                 UTILITARIAN / DENSE
```
**The whitespace = top-right:** *deep NRI compliance intelligence delivered with
private-bank calm.* Nobody occupies it — DIY apps are bottom/left (shallow or dense),
NRI incumbents are mid/low-craft, GIFT-City & remittance players sit in adjacent lanes.
[evidence — synthesised from teardowns]

**Wedge — where & why we take a user:**
| From | We win because | Persona |
|---|---|---|
| **SBNRI** | No silence, no wet-signature, live KYC status + human — *trust through transparency* | Arjun, Sam |
| **Groww/Coin** | We're **NRI-native**: country-eligibility + DTAA/TDS *intelligence*, not a resident app with an NRI toggle | Arjun, Priya |
| **INDmoney** | Same eligibility smarts **but calm & premium**, with a real DTAA-activation + pre-redemption-TDS flow | Arjun |
| **Kuvera** | Guided *compliance flows* (TRC/10F, 15CA/CB), not just PDFs — done beautifully | Sam |
| **ICICI/HDFC** | Modern mobile craft + tax layer vs legacy 3-in-1 forms | Sam |
| **Belong/Aspora** | We own India-domestic SEBI MF + DTAA/repatriation (their gap); match their speed/transparency bar | Arjun |

---

## 4. Heuristic evaluation — top-3 onboardings (violations = our openings)

Nielsen-10 (N#) + Laws of UX. Each violation → the opportunity it hands us.

### 4.1 SBNRI (direct NRI incumbent)
| Violation | Heuristic / Law | Our opening |
|---|---|---|
| App goes silent after upload; "months of unanswered emails" | **N1 Visibility of status**; **Zeigarnik** (open loops nag) | **Live KYC tracker** with per-step status + ETA + human fallback |
| Wet signature on white paper | **N4 Consistency w/ digital norms**; **Tesler's Law** (don't push complexity to user) | Fully digital e-sign; absorb the complexity |
| Nominee dead-end / circular guidance | **N5 Error prevention**; **N3 User control** | Skippable-with-reason nominee; clear back/out paths |
| Regular-vs-direct not disclosed | **N1/ N8 Transparency** | Plain "regular plan (ARN)" disclosure + why |

### 4.2 Groww / Kuvera (India DIY bar)
| Violation (for the NRI) | Heuristic / Law | Our opening |
|---|---|---|
| Resident-first; NRI eligibility discovered late / restricted | **N9 Help users recover**; **N1** | **Country-of-residence gate up front** (INDmoney does this — beat it on calm) |
| Tax = generic content, no pre-redemption TDS preview | **N10 Help & docs → but better: inline intelligence** | **Estimated TDS before confirm** + DTAA "tax saved" |
| Dense, utilitarian surfaces (esp. INDmoney) | **Aesthetic-Usability**; **Miller's Law** (chunking) | Calm, chunked, premium hierarchy; tabular money |
| Direct-plan model (Kuvera) | scope mismatch | We're ARN/regular — position on *guidance + trust*, not fee-zero |

### 4.3 Wise / Revolut (global benchmark)
| Observation | Heuristic / Law | Our move |
|---|---|---|
| Wise: fee on the button, one-thing-per-screen, "why we ask" | **N1, N6 Recognition, Doherty** | **Adopt** as our KYC + order-review standard |
| Revolut: pricing buried in plan maze, weekend FX surprise | **N8 Aesthetic/minimalist → hidden cost**; **trust erosion** | **Never** surprise-fee; show cost at decision point |
| Both: pricing "confusing to everyday user" | **N2 Match real world** | Plain-language INR/USD, no jargon |

**Cross-cutting laws we'll lean on:** **Jakob's Law** (match Groww/Wise conventions NRIs already know), **Peak-End** (Plum's "You're ready to invest!" → our first-investment + DTAA-activation moments), **Doherty Threshold** (<400ms feedback in KYC/order), **Peak trust** (Acorns-style "why we ask + we encrypt" on every sensitive field).

---

## 5. Part B takeaways (feed Part C)
1. **Whitespace confirmed:** *deep compliance intelligence × premium calm* is unoccupied. [evidence]
2. **Table-stakes to match:** INDmoney's country-eligibility auto-filter, Kuvera's fee transparency, Wise's one-thing-per-screen + fee-on-button, Nutmeg/Plum tax-residency framing.
3. **Differentiators to own:** pre-redemption **TDS preview**, **DTAA activation + "tax saved"**, **repatriable/NRE-NRO labelling + 15CA/CB guidance**, **live KYC status** (kills SBNRI's #1 failure).
4. **Scope guardrails:** GIFT City (Belong) and remittance (Aspora) are adjacent lanes = **Phase 2/3**; direct plans (Kuvera) are **out**. Don't chase them; beat the India-domestic SEBI-MF journey.
5. **Trust is the moat:** in a scam-wave market, visible SEBI/ARN + "why we ask" + no surprise fees convert. [evidence]

## Sources
- INDmoney — [NRI features](https://www.indmoney.com/features/nri) · [NRI guide](https://www.indmoney.com/blog/nri/how-can-nris-invest-in-mutual-funds-stocks-india)
- Belong — [home](https://getbelong.com/) · [GIFT City MFs](https://getbelong.com/tools/gift-city-mutual-funds/) · [USD FDs](https://getbelong.com/products/usd-fixed-deposits/) · [best platforms](https://getbelong.com/blog/mutual-funds/best-investment-platform/)
- Kuvera — [site](https://kuvera.in/) · [NRI MF checklist](https://kuvera.in/blog/nri-mutual-fund-investments/) · [direct vs regular](https://kuvera.in/blog/direct-plans-better/)
- Groww vs Kuvera — [manikarthik](https://manikarthik.com/blog/groww-vs-kuvera/)
- ICICI — [3-in-1 NRI](https://www.icicidirect.com/open-nri-account) · HDFC — [3-in-1 NRI](https://www.hdfcsec.com/open-nri-3-in-1-investment-account)
- Aspora/Vance — [review](https://sendabroad.co.uk/reviews/aspora-review) · [App Store](https://apps.apple.com/us/app/aspora-nri-banking/id6444683240)
- iNRI — [Trustpilot](https://www.trustpilot.com/review/goinri.com)
- Wise vs Revolut — [moneyzine](https://moneyzine.com/money-transfers/wise-vs-revolut/) · [fee-transparency UX (Lyssna)](https://www.lyssna.com/blog/fee-transparency-ux-wise-vs-revolut/)
- Mobbin (real screens) — [Nutmeg onboarding](https://mobbin.com/flows/49238182-5ddc-4a85-8bb8-38e32b7c0a4e) · [Plum investment account](https://mobbin.com/flows/f2b07474-70f9-4e57-a38c-5aad2c42b950) · [Acorns onboarding](https://mobbin.com/flows/6895f974-a0ce-41a7-b6ca-25be267d811d) · [Wise account creation](https://mobbin.com/flows/24d9850e-a8df-40e4-8a6f-601c6fcb2910)
