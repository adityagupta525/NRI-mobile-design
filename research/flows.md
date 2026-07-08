# End-to-End Flows — Phase-1 (Part C)

**Sprint:** Discovery & Definition · Part C (Define)
**Grounded in:** `scope.md`, BRD §3, `05-fintech-nri`, `04-laws-of-ux`, `competitive-analysis.md`

**Legend:** ⬥ decision · ⚠ failure/recover branch · 🛡 compliance checkpoint · ★ peak-end
moment · 💡 hook moment. Failure branches **recover, never dead-end** (rulebook 05).

---

## 1. Onboarding + KYC (7-step smart flow)

```mermaid
flowchart TD
  S([Login done]) --> C0{{"🛡 Country of residence?"}}
  C0 -->|US/CA| USCA["⚠ US/CA gate (assumption-register §C1)<br/>Path A eligible-AMCs OR Path B waitlist + PFIC disclosure"]
  C0 -->|Other| K1
  USCA -->|Path B| WL[Waitlist captured] --> ENDL([Exit: honest, lead saved])
  USCA -->|Path A| K1

  K1["1 · PAN entry<br/>(why we ask)"] --> K2
  K2["2 · CKYC fetch"] --> K2Q{{"CKYC found?"}}
  K2Q -->|yes 💡| K3["prefilled — 'we found your KYC'"]
  K2Q -->|no ⚠| K2M["manual details capture"] --> K3
  K3["3 · DigiLocker / Video-KYC + IPV 🛡"] --> K3Q{{"Verified?"}}
  K3Q -->|fail ⚠| K3R["retry + human fallback + ETA"] --> K3
  K3Q -->|ok| K4["4 · Bank penny-drop 🛡<br/>(NRE/NRO)"]
  K4 --> K4Q{{"Penny-drop match?"}}
  K4Q -->|no ⚠| K4R["re-enter / different account"] --> K4
  K4Q -->|yes| K5["5 · Nominee (skippable-with-reason)"]
  K5 --> K6["6 · NRI status + corridor"]
  K6 --> K7["7 · FATCA/CRS declarations 🛡<br/>(+PFIC gate if US)"]
  K7 --> KV{{"All checks pass?"}}
  KV -->|under review ⚠| KP["status tracker: step-by-step + ETA<br/>(kills SBNRI silence)"] --> KV
  KV -->|verified ★| DONE(["★ 'You're verified — here's your first insight' → Home"])
```
**Notes:** progress x/7 always visible (N1); Hick — one thing per screen; Doherty —
optimistic UI + skeletons; re-KYC reuses steps 3/6/7 as touchpoints.

---

## 2. First investment (Explore → Receipt)

```mermaid
flowchart TD
  H([Home / Invest]) --> E["Explore · search · filter"]
  E --> FD["Fund Detail 💡<br/>(returns, risk, plan-type disclosure)"]
  FD --> PLAN{{"🛡 Regular-plan (ARN) disclosed + 'why regular' owned"}}
  PLAN --> AMT["Amount Input ⬥ SIP or Lumpsum (SWP/STP entry)"]
  AMT --> ELIG{{"🛡 Fund eligible for user's country?"}}
  ELIG -->|no ⚠| EBLK["eligibility blocker + alternatives<br/>(not a dead-end)"] --> E
  ELIG -->|yes| SRC{{"⬥ Source: NRE or NRO?"}}
  SRC --> OR["Order Review 🛡<br/>(NRE/NRO source, repatriability, charges, mandate)"]
  OR --> CONF{{"Confirm before pay 🛡"}}
  CONF -->|edit| AMT
  CONF -->|confirm| PAY["Payment (net-banking / UPI / eNACH)"]
  PAY --> PAYQ{{"Payment ok?"}}
  PAYQ -->|fail ⚠| PAYR["recover: retry / change method / saved draft"] --> PAY
  PAYQ -->|success ★| RCP(["★ Receipt + 'invested' delight + next-step (set SIP / goal)"])
```
**Notes:** SWP/STP are *entry points* only (Phase-1). Peak-End on receipt (rulebook 04).
Fee/charge transparency on the action surface (Wise pattern; rulebook 05).

---

## 3. Redemption WITH tax preview (the differentiator)

```mermaid
flowchart TD
  P([Portfolio / Holding]) --> RD["Redeem — select units / amount"]
  RD --> CALC["🛡 Compute holding period + gain type<br/>(STCG/LTCG, equity vs debt)"]
  CALC --> DTAA{{"⬥ DTAA status?"}}
  DTAA -->|UAE/SG active| TDS0["💡 TDS estimate ≈ 0 + 'DTAA saved ₹X'"]
  DTAA -->|not activated 💡| PROMPT["prompt: activate DTAA (est. saving ₹X)<br/>→ TRC + Form 10F flow"]
  DTAA -->|UK/US/other| TDSN["💡 Estimated TDS shown (rate × gain + surcharge/cess)"]
  PROMPT --> TDSN
  TDS0 --> PREV
  TDSN --> PREV["★💡 Pre-redemption TDS PREVIEW<br/>(net proceeds shown BEFORE confirm) + 'consult a tax advisor' hedge"]
  PREV --> RCONF{{"Confirm redemption? 🛡"}}
  RCONF -->|reconsider| P
  RCONF -->|confirm| REX["Execute — AMC deducts TDS at source"]
  REX --> RRQ{{"ok?"}}
  RRQ -->|fail ⚠| RRR["recover + support"] --> REX
  RRQ -->|success ★| RR(["★ Receipt: gross, TDS withheld, net credited + repatriability note"])
```
**Notes:** this flow is **H1 (spearhead hook)** — the pre-confirm net-of-TDS number is the
whole thesis. Always hedge (ITAT under appeal, BRD §3.4.2). DTAA prompt = H2.

---

## 4. SIP setup

```mermaid
flowchart TD
  ST([Fund Detail / Amount]) --> S1["SIP amount + frequency + date ⬥"]
  S1 --> S2{{"🛡 Eligible + NRE/NRO source + mandate"}}
  S2 --> S3["eNACH / mandate registration 🛡"]
  S3 --> S3Q{{"Mandate ok?"}}
  S3Q -->|fail ⚠| S3R["recover: retry / alt bank / e-mandate help"] --> S3
  S3Q -->|ok| S4["Review: first-debit date, amount, fund, plan-type"]
  S4 --> S4C{{"Confirm 🛡"}}
  S4C -->|confirm ★| S5(["★ 'SIP live' + calendar + pause/skip control visible"])
  S5 --> RL["re-engagement: SIP-due + bounce-risk nudge (honest)"]
```
**Notes:** surface **pause/skip** up-front (N3 user control) — reduces anxiety, not churn.
Bounce-risk nudge is honest utility (hook-strategy §4).

---

## Cross-flow compliance checkpoints (🛡 summary)
- **Country eligibility** enforced at KYC (step 6) *and* per-fund at order (BRD; Platform-Notes NOTE 3).
- **NRE/NRO source** explicit at every order/SIP (BRD §2.1).
- **Confirm-before-pay + mandate** on all money movement (rulebook 05).
- **TDS at source** shown *before* redemption confirm (BRD §3.3).
- **DTAA** = TRC + Form 10F states, always hedged (BRD §3.4).
- **FATCA/CRS + PFIC (US)** at onboarding (BRD §3.5).

## Peak-End moments (★ to design with craft)
KYC-verified · first-investment receipt · SIP-live · redemption receipt (net clarity) ·
DTAA-activated ("₹X saved this FY").
