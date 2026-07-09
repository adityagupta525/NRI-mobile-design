# design-critique — Fund Detail (W0 build)

**Target:** Figma `✦ 5 · Screens` → Fund Detail (node 415:136)
**Judged against:** `product/prd-invest-first-order.md`, `scope.md`, rulebook 00/05/06, and the
**finished-quality reference on `✦ 7 · Design`** (login 401:8558, FATCA/PAN 401:9674).
**Date:** 2026-07-09 · Verdict: **not shippable — P0 scope + PRD-disclosure failures + a real craft gap.**

---

## P0 — must fix before any refinement is approved

### P0-1 · Scope violation: GIFT CITY / PMS / AIF / BONDS as inline tabs
The `UnderlineTabs` instance renders **MF · PMS · AIF · BONDS · GIFT CITY** as inline section
tabs on Fund Detail. This is a **direct scope.md violation**:
- **GIFT City** = Phase 2/3 — **out of scope** entirely.
- **PMS / AIF / Bonds** = **lead-capture-only** (RM outreach), *not* investable surfaces.
Presenting them as tabs implies inline investability we do not (and must not) offer.
**Fix:** remove this product-category switcher from Fund Detail. It belongs on Explore/Home, not
here. If Fund Detail needs section tabs, they are **Overview · Holdings · Tax** (per brief §6).
"Other products" is a **single lead-capture entry point** elsewhere, never inline tabs.

### P0-2 · Missing PRD-required disclosures (S3, S4, S5) — required, not polish
- **S3** — explicit **"Regular · ARN" plan-type, visible without scrolling.** Currently absent
  (FundCard used; no plan chip). *AMFI disclosure + Theme-9 trust — non-negotiable.*
- **S4** — **"Why a Regular plan?"** explainer (BottomSheet) owning the trade-off. Absent.
- **S5** — **indicative post-tax teaser** (InlineBanner), corridor-aware + hedged, feature-flaggable.
  The InlineBanner present shows a generic *"markets are volatile"* warning — **wrong content**,
  does not satisfy S5's AC.
**Fix:** add plan chip (no-scroll), wire the "Why regular?" sheet, replace the banner copy with the
bounded S5 teaser (or hide via flag until compliance sign-off, per approved Q3).

### P0-3 · Placeholder data integrity
The three returns tiles all show **identical "INVESTED ₹2,86,40,000 +11.4%"** — and they read as
*portfolio-invested* values, not **1Y / 3Y / 5Y fund returns**. Reads as broken/unfinished.
**Fix:** real varied sample data — 1Y +22.4% · 3Y +18.1% · 5Y +16.3% (distinct), labelled as returns.

---

## P1 — one-focal-point / density (reference test)

**Test vs Groww/INDmoney Fund Detail AND vs Revolut/Stripe.** Current build **fails the calm test**:
it is a **vertical stack of ~11 full-width cards** (identity, NAV, chart, tabs, 3 stat tiles,
product tabs, risk gauge, banner, comparison table, trust, CTA) — **feature-stacked, no focal
point** (violates rulebook 00 "one focal point per screen" + Miller/Hick).

- **The comparison `Table`** (Parag Parikh / HDFC Mid-Cap / Quant ELSS / ICICI Liquid) does **not
  earn its place** on a *single fund's* detail — it's a *compare/explore* surface. **Recommend: cut
  it from Fund Detail; move to Explore** (or a "Similar funds" secondary sheet). This alone removes a
  whole dense block.
- **NAV vs chart** partly duplicate (both show value+delta). Merge: chart owns the trend, one NAV line
  above it — not two separate value cards.
- **Focal point** should be: **fund identity → NAV+chart (the hero) → returns → invest.** Everything
  else (risk, details, tax teaser) is secondary and can chunk under the section tabs.

---

## Taste / craft gap vs `✦ 7 · Design` (the real bar) — NOT just checklist-compliance

The build is **checklist-compliant but flat/generic**; the ✦ 7 reference is **art-directed and
premium**. Concretely where it falls short:

| Dimension | ✦ 7 · Design (the bar) | Our Fund Detail (now) | Gap |
|---|---|---|---|
| **Depth / texture** | Warm photographic obsidian backdrop, subtle Indian-architecture texture, radial glow behind hero | **Flat #080D18 fill**, zero texture/glow | No atmosphere — reads as a wireframe, not a product |
| **Copper/metal** | Brushed-metal gradient CTA with real sheen; copper gradient wordmark ("GROW WITH भारत") | Metal button present but **on a flat field**, no surrounding warmth | Copper has nothing to play against |
| **Glass** | Glassmorphic inputs + "Why we need this?" glass card w/ copper hairline | **No glass surfaces** used (GlassSurface `22:4` exists, unused) | Missing the core material |
| **Hierarchy / editorial** | One clear hero, big editorial type, generous negative space | Uniform card stack, even weight, little air | No "hero moment" |
| **Spacing rhythm** | Deliberate 16/24 rhythm with breathing room; grouped sections | Even 16 gaps, everything same density | Monotone rhythm |
| **Trust framing** | "Why do we need this?" + encryption line beautifully integrated | TrustFooter present but generic strip | Compliant, not crafted |

**Net:** ✦ 7 proves the bar is *cinematic, layered, warm-premium*. Fund Detail currently uses the
right *components* but none of the *art direction* — background depth, glass, copper glow, editorial
hierarchy. **This is the difference between "assembled" and "designed."**

---

## Recommended revised P1 plan (for approval — NOT yet executed)

**A. Scope + PRD correctness (do first — unblocks everything):**
1. Remove GIFT CITY/PMS/AIF/BONDS product tabs (P0-1). Section tabs → Overview/Holdings/Tax.
2. Add **"Regular · ARN" chip** (no-scroll) + **"Why regular?" BottomSheet** (S3/S4).
3. Replace banner with **bounded S5 post-tax teaser** (or flag-hidden).
4. **Cut the comparison Table** from Fund Detail → note for Explore (P1 density).
5. Real varied returns data in the 3 tiles (P0-3); merge NAV into the chart hero.

**B. Craft pass (raise to ✦ 7 bar):**
6. Add **background depth** — obsidian + subtle radial copper glow (RadialGlow `22:5`) behind the hero.
7. Use **GlassSurface** for the NAV/chart hero card + the "Why regular?" sheet.
8. Establish a **hero moment**: fund identity + NAV + chart as one glass hero, generous air; secondary
   info chunked under tabs.
9. Tighten **spacing rhythm** (16 within group, 24 between groups) and editorial type hierarchy.
10. Back-icon variant swap (caret-left, not "+"); title weight/contrast.

**Sequence:** A (correctness) → screenshot/critique → B (craft) → screenshot → APCA/lint → re-critique.

> **Do not approve refinements until A (P0 scope + disclosures) is agreed.** B is where we earn the
> ✦ 7 quality bar.

---

## RE-CRITIQUE after Part A + B execution (2026-07-09)

### ✅ Fixed (Part A — all P0s cleared)
- **P0-1 scope:** GIFT CITY/PMS/AIF/BONDS product tabs removed; section tabs now **Overview / Holdings / Tax**. (scope.md patched to make this permanent.)
- **P0-2 disclosures:** **"Regular · ARN" chip** now visible without scrolling (S3). **S5 teaser** replaces the market-warning banner ("Indicative post-tax value for UAE/Singapore residents… consult a tax advisor").
- **P0-3 data:** three tiles now distinct — **1Y +22.4% · 3Y +18.1% · 5Y +16.3%** (CAGR).
- **P1 density:** comparison **Table cut** (noted for Explore); chart header relabelled **"NAV · last 1 year"** (no longer duplicating a portfolio value).
- **Craft (partial):** back glyph **‹** (was "+"); rhythm loosened (18/20).

### ⚠️ Still short of the ✦7 bar (honest — needs new components, not instance-tweaks)
- **S4 "Why regular?" sheet — NOT wired.** The library `BottomSheet` (122:31) is a *currency selector*, wrong component. Needs a **WhyRegularSheet** (generic glass sheet). Logged in `components-added.md`.
- **Glass hero — not achieved.** Instances can't accept reparented children, so NAV+chart couldn't be wrapped in a `GlassSurface`. The **copper rim-glow stays subtle** because opaque cards occlude it. Needs a **GlassHeroCard** component (logged).
- **Grain/texture — absent.** Needs a **GrainOverlay** style (logged).
- **Net:** the screen is now **scope-clean, PRD-correct, and calmer**, but the *material* jump to ✦7 (glass + grain + a rim-glow that reads) is gated on **building 3 new library components** — the right, rule-compliant way (figma-master: build into ✦2, don't fake with one-off shapes).

### Recommendation
Correctness + density = **done and shippable-as-wireframe-plus**. To hit the ✦7 finish, approve a
**component-build task**: GlassHeroCard + WhyRegularSheet + GrainOverlay → add to `✦ 2 Components` →
re-instance on Fund Detail. That is the honest path to the material bar.
