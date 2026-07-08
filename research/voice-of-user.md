# Voice of the User — NRI Investors (Desk Research)

**Sprint:** Discovery & Definition · Part A (Empathize)
**Product:** Obsidian · Copper — Phase-1 NRI investor mobile app
**Date:** 2026-07-08
**Author:** Design research (desk study)

---

## 0. Method & honest limitations (read first)

This is **desk research**, not primary research. It mines publicly available
community and review content to surface what NRI investors actually complain
about. Treat it as a *hypothesis generator*, not validated truth.

**What I could access**
- Web search across NRI tax/finance publishers, competitor blogs, and app-store /
  Trustpilot review summaries.

**What I could NOT access (hard limits this session)**
- **Reddit is blocked** for direct fetch — I could not pull verbatim r/nri or
  r/IndiaInvestments threads. Reddit-specific claims below are **absent**, not
  summarised.
- **Quora, Belong, AppGrooves and several blogs returned HTTP 403** — I could not
  extract verbatim quotes with usernames/dates.
- Therefore **there are no fabricated "real quotes" in this document.** Where I
  show quote-style text it is explicitly labelled as **[Paraphrased]** from a cited
  source or **[Synthesised]** representative language — never attributed to a named
  individual I did not actually read.

**Confidence legend**
- 🟢 **[Community-evidenced]** — multiple independent public sources describe this
  pain concretely.
- 🟡 **[Weakly evidenced]** — appears in vendor/blog content (may be marketing-shaped);
  plausible but needs corroboration.
- 🔴 **[Assumption]** — reasonable inference; **requires real user interviews.**

> **Ashish — the single biggest gap:** we have zero first-party interview data.
> Everything here must be pressure-tested against real NRIs before we treat any of
> it as a requirement. The Top-10 assumptions list (`assumptions-to-validate.md`)
> is what I need you to run real interviews on.

---

## 1. Pain themes (ranked by evidence strength × design leverage)

### Theme 1 — Onboarding & KYC friction is the #1 abandonment driver 🟢
NRIs hit friction that resident-Indian apps never impose on their users.

- **PAN ↔ passport name mismatch** silently fails KYC — even a middle-name or
  initial difference triggers rejection. [Community-evidenced]
- **In-person verification (IPV) expectation** is jarring for someone overseas —
  guidance still tells NRIs they may need to visit an **Indian embassy/consulate**
  to complete verification. [Community-evidenced]
- **"Sign on white paper and upload"** — reviewers of an incumbent NRI app ask why a
  "digital startup" still needs a scanned wet signature.
  *[Paraphrased — SBNRI app-store review summaries]* 🟢
- **Silence after document upload** — reviewers describe uploading documents, the
  app going unresponsive, and **"months of unanswered emails"** with no account ever
  opening. *[Paraphrased — SBNRI review summaries]* 🟢
- **Nominee dead-ends** — one flow reportedly wouldn't let the user open an account
  without a nominee after telling them they could opt out — "went in circles for a
  week." *[Paraphrased — SBNRI review summaries]* 🟡

> **Representative complaint (synthesised):** *"I gave them my passport, my PAN, my
> address proof, a selfie — then nothing. No status, no human, just a spinner and
> silence."* — **[Synthesised]** from the review themes above; not a verbatim quote.

**Design leverage:** highest. Onboarding is where trust is won or lost in the first
10 minutes.

---

### Theme 2 — US / Canada NRIs are effectively locked out (FATCA) 🟢
- Many AMCs **reject US/Canada NRIs outright** because FATCA reporting is onerous;
  some accept the application and **freeze the account later**. [Community-evidenced]
- For those allowed in, **PFIC** treatment (US) and **FAPI** (Canada) make Indian MFs
  punitive to hold — a compliance minefield most apps never explain. [Community-evidenced;
  corroborated by BRD §3.5]

**Design leverage:** high — but partly a *policy/eligibility* problem. Our job is to
**tell the user the truth early** (country-eligibility blocker before they invest
time), not to pretend the restriction doesn't exist.

---

### Theme 3 — Residency-status limbo freezes money 🟢
- Failing to convert folios/bank mapping from resident → NRI (NRE/NRO) means
  **SIPs and redemptions get disabled or rejected** until status is fixed.
  [Community-evidenced]
- Status conversion can take **2–4 weeks**; non-compliance penalties are quoted as
  **₹1.5–2 lakh plus up to 3× the transaction amount.** [Community-evidenced]

**Design leverage:** high — a proactive "your status looks out of sync" nudge + a
guided conversion flow is concrete whitespace.

---

### Theme 4 — TDS "shock" at redemption 🟢
- TDS on NRI MF redemptions is deducted **at source under Sec 195** *before* proceeds
  are credited — investors see a smaller number than they expected. [Community-evidenced;
  BRD §3.3]
- Post-23-Jul-2024: **equity LTCG 12.5%**, **STCG 20%**, **debt at slab (up to 30%)**.
  [Community-evidenced; BRD §3.3]
- Excess TDS is only recoverable by **filing an ITR and waiting 3–6 months** (interest
  of 0.5%/month only if the refund crosses 120 days). [Community-evidenced]
- The pro move — a **Sec 197 / Form 13 lower-TDS certificate** — is invisible to most
  retail NRIs. [Community-evidenced]

> **Illustrative scenario (sourced):** ₹50L income taxed at 10% TDS = ₹5L withheld,
> but if the real liability is ₹1L, **₹4L sits with the government for up to 9 months**
> before refund. *[Paraphrased — lower-TDS-certificate explainer]* 🟢

**Design leverage:** **this is our differentiator.** Showing **estimated TDS before
the investor confirms redemption** directly kills the shock. (BRD §3.3 mandates it.)

---

### Theme 5 — DTAA is a superpower nobody understands 🟢
- **UAE & Singapore** (and Gulf states) NRIs can legally pay **0% capital-gains tax**
  on Indian MF gains under the DTAA residual clause — but **the benefit is not
  automatic.** [Community-evidenced; BRD §3.4]
- Blockers: needs **TRC + Form 10F + no-PE self-declaration + correct ITR
  disclosure**; and the **UAE issues TRCs only for the *previous* year**, so timing
  bites — advice is "apply ~60 days before redeeming." [Community-evidenced]

**Design leverage:** very high. A **DTAA activation flow + "tax saved this FY"
counter** turns dense treaty law into a visible win. (BRD §3.4.5.)

---

### Theme 6 — Repatriation confusion (NRE vs NRO, 15CA/CB) 🟢
- **NRE** proceeds: freely repatriable, no cap. **NRO:** capped at **USD 1M / FY**
  and above that needs **Form 15CB (CA-certified) + 15CA filing.** [Community-evidenced;
  BRD §3.6]
- The NRE/NRO distinction, and *which* account funded *which* investment, is a
  persistent source of "can I take my money out?" anxiety. 🟡→🟢

**Design leverage:** high — **repatriable-vs-NRO labelling** on every holding + a
15CA/CB guidance path (guidance UX only, per scope).

---

### Theme 7 — Trust, scams & data-privacy fear 🟢
- India is in a **fake-investment-app wave**: reporting cited **30,000+ victims and
  ₹1,500 cr lost in ~18 months**; an NRI from Canada defrauded of **₹1.23 cr.**
  [Community-evidenced]
- Fraud rings use **leaked NRI data** for targeted scams; the stated red flag is
  **"if a platform can't show verifiable SEBI/RBI/IFSCA registration, walk away."**
  [Community-evidenced]

**Design leverage:** high — **visible regulatory credentials (ARN/SEBI), security
posture, and calm/premium tone** are trust cues, not decoration.

---

### Theme 8 — Platform fragmentation & wasted effort 🟢
- A widely-repeated anecdote: an NRI **"from Dubai spent three weeks, downloaded four
  apps, started KYC on two, and got rejected on one."** *[Paraphrased — Belong 2026
  NRI guide]* 🟢
- Incumbent NRI apps are **regular-plan / ARN only** (no direct plans), and don't
  always make that explicit. [Community-evidenced]

**Design leverage:** medium-high — "one app that actually works for *my* country,"
with **honest eligibility up front**, is the positioning wedge.

---

## 2. Competitor sentiment snapshot (from review/search signal)
*(Full teardown lands in Part B; this is only the user-sentiment slice.)*

| Player | Signal (paraphrased/sourced) | Confidence |
|---|---|---|
| **SBNRI** | Info-consolidation + WhatsApp reports praised; **account-opening delays, wet-signature, unresponsive support, nominee dead-ends** heavily criticised | 🟢 |
| **Groww** | "Slickest interface," transparent live INR rate & conversion cost; loved by younger investors | 🟡 (vendor-shaped) |
| **Zerodha Coin** | Powerful for residents but **"skip for NRI MF"** — limited, complex non-PIS setup | 🟡 |
| **iNRI (goinri)** | Onboarding/KYC described as **"seamless, smooth, fast"** | 🟡 (Trustpilot + blog) |
| **Aspora (ex-Vance)** | 4.4★ / 1,116 reviews; near-instant verification, great FX; **"customer service needs work"** — but it's **remittance-first, not investing** | 🟢 |

**Read:** incumbents split into *smooth-but-shallow remittance/UI apps* and
*deep-but-painful compliance apps*. **Nobody owns "deep compliance intelligence +
premium, calm UX" together** — that is our lane.

---

## 3. Top user pains, ranked (design priority)
1. **KYC/onboarding uncertainty & silence** (abandonment) 🟢
2. **TDS shock at redemption** — money smaller than expected 🟢
3. **DTAA benefit left on the table** (0% tax unclaimed) 🟢
4. **Country eligibility (US/Canada) discovered too late** 🟢
5. **Residency-status limbo freezing SIPs/redemptions** 🟢
6. **Repatriation "can I get my money out?" anxiety (NRE/NRO, 15CA/CB)** 🟢
7. **Trust/scam fear & data-privacy** 🟢
8. **Regular-vs-direct & fee transparency** 🟡

---

## Sources
- Belong — [Buy Mutual Funds in India as an NRI (2026 Guide)](https://getbelong.com/blog/how-to-buy-mutual-funds-in-india-as-an-nri-2026-guide/)
- Belong — [Investment App Checklist](https://getbelong.com/blog/checklist-before-choosing-any-new-investment-app/)
- Belong — [Returns Taxable for NRIs](https://getbelong.com/blog/mutual-funds/returns-taxable/) · [DTAA benefits](https://getbelong.com/blog/mutual-funds/dtaa-benefits-on-capital-gains-for-nris/)
- SBNRI — [App reviews (App Store)](https://apps.apple.com/us/app/sbnri-nri-mutual-fund-tax/id1537966413?see-all=reviews) · [What happens to MFs when you become NRI](https://sbnri.com/blog/nri-mutual-fund/mutual-funds-after-you-become-nri)
- Investmates — [TDS for NRIs 2026](https://investmates.io/blog/tds-for-nri)
- PKC — [NRI Taxation in Mutual Funds](https://pkcindia.com/blogs/nri-taxation-mutual-funds/)
- Ushma & Associates — [UAE/Singapore NRIs zero capital-gains tax](https://ushmaassociates.com/how-uae-and-singapore-nris-may-legally-pay-zero-capital-gains-tax-on-indian-mutual-fund-investments/)
- KMG CO LLP — [UAE NRIs 0% tax practical guide](https://kmgcollp.com/nris-in-the-uae-how-to-legally-pay-0-tax-on-indian-mutual-fund-gains-a-practical-guide/)
- Scripbox — [Zero tax for UAE residents](https://scripbox.com/nri/zero-tax-for-uae-residents-on-indian-mutual-funds/)
- MostlyNRI — [7 Steps to Claim a TDS Refund](https://mostlynri.com/tds-refund-for-nri/) · [Protect investments from scams](https://mostlynri.com/nri-protect-indian-investments-from-scams/)
- ndsavlaa — [Lower TDS Certificate (Sec 197 / Form 13)](https://ndsavlaa.com/lower-tax-deduction-certificate-2/)
- Motilal Oswal — [NRI TDS Guide 2026](https://www.motilaloswal.com/learning-centre/2026/3/new-tds-and-dividend-tax-rules-for-nris-in-2026)
- Quora — [Why is investing in India so challenging for NRI](https://www.quora.com/Why-is-investing-in-India-so-challenging-for-NRI) *(403 — title only)*
- Trustpilot — [iNRI (goinri)](https://www.trustpilot.com/review/goinri.com)
- Gulf News — [‘Digital Arrest’ scams soar in India](https://gulfnews.com/your-money/saving-investment/digital-arrest-scams-soar-in-india-should-nris-in-uae-be-worried-1.500340869)
- Reddit r/nri, r/IndiaInvestments — **attempted, blocked this session (no data pulled).**
