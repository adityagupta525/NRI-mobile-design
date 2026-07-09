# Screen Brief — Fund Detail

**Epic:** Invest & First Order (`product/prd-invest-first-order.md`) · **Wave 0 (pipeline proof)**
**Corridors:** UAE + Singapore focus · **Frame:** 375px, 16px margins → 343 content · dark
**Pipeline:** /screen · design-director orchestrating · built on Figma `✦ 5 · Screens` (3:6)

## References
See `reference/reference-log.md` (Fund Detail row): Wealthsimple, Acorns, Kakao Pay (Mobbin) +
Nutmeg/Plum honesty patterns. Also `research/flows.md` §2 (First investment), `journey-maps.md`
Journey B (fund-detail dip = plan-type distrust, Theme 9). **Only fill gaps — no re-discovery.**

## Structure (top → bottom, single scroll + sticky footer)
1. **Top app bar** — back · fund short-name · save(bookmark) + share (IconButton).
2. **Fund identity** — AMC logo (MetalAvatar), fund name, category, **Chip: "Regular · ARN"**
   (taps → "Why regular?" BottomSheet).
3. **NAV block** — NAVCard: NAV value (tabular cream), day change (ReturnBadge), **"as of" ts**.
4. **Performance** — LineChart (copper gradient) + **range SegmentedTabs** (1M/6M/1Y/3Y/5Y).
5. **Returns stats row** — 3× StatTile (1Y/3Y/5Y) each with ReturnBadge (arrow+sign+colour).
6. **Section tabs** — UnderlineTabs: Overview · Holdings · Tax. (Overview default.)
7. **Risk** — RiskGauge + one-line risk label.
8. **H1 teaser (bounded)** — InlineBanner(info): *indicative* post-tax view, corridor-aware,
   hedged. **Feature-flaggable** (hidden if S5 wording not compliance-signed-off).
9. **Key details** — Table/rows: min SIP, min lumpsum, expense ratio, exit load, fund size, AMC.
10. **Trust strip** — TrustFooter (SEBI/AMFI · ARN · encrypted).
11. **Sticky footer CTA** — metal Button (lg): "Invest" (+ secondary "Start SIP").

## Components used (all from `claude` library — assemble, never redraw)
Header `116:3` · IconButton `43:15` · Icon set `159:154` · MetalAvatar `26:7` · Chip `40:50` ·
NAVCard `190:147` · ReturnBadge `115:21` · LineChart `189:63` · SegmentedTabs `44:20` ·
StatTile `119:3` · UnderlineTabs `44:3` · RiskGauge `189:106` · InlineBanner `121:42` ·
Table `178:118` · Divider `166:51` · TrustFooter `122:57` · Button `36:98` (metal lg) ·
BottomSheet `122:31` ("Why regular?").

## States & edge cases
- **Loading:** skeletons on NAV/chart/stats (<400ms feel, Doherty).
- **Ineligible for corridor:** eligibility handled at Order (never a Fund Detail dead-end);
  if a fund is corridor-restricted, show InlineBanner(warning) + disabled Invest with reason.
- **H1 teaser off:** slot hidden via flag; layout reflows cleanly.
- **Data stale / no chart:** "as of" + empty chart state, never blank.
- **Negative returns:** ReturnBadge down (red + down-arrow + "−"), never colour-only.
- **Pre-KYC browse:** read-only; Invest routes to KYC/eligibility gate.

## Copy (English; content-voice)
- Plan chip: **"Regular · ARN"**. Sheet title: **"Why a Regular plan?"** body owns the
  trade-off (guidance, DTAA activation, KYC help) — states commission exists; no dark framing.
- H1 teaser: *"Indicative post-tax value for UAE/Singapore residents — illustrative only.
  Your actual tax depends on DTAA status; consult a tax advisor."*
- NAV: "NAV ₹XX.XX · as of DD Mon, 6:00 PM IST".
- CTA: **"Invest"** / **"Start SIP"**. Risk: "Very High risk" etc.

## Motion (motion-designer; tokens)
- Range/section tab change: content cross-fade 150ms `standard` easing; underline slides 200ms.
- Chart draw-in: stroke path 300ms `decelerate` on first paint only.
- "Why regular?" sheet: slide-up 300ms `standard`, scrim 60%.
- CTA press: state-layer 12% (M3), 100ms.
- Reduced-motion: cross-fades only, no path draw.

## Gates
- [ ] Built from `claude` library instances only (no raw shapes for components)
- [ ] APCA: body |Lc| ≥ 75, large ≥ 60 (`npm run apca` — see handoff: script not yet wired)
- [ ] `npm run lint:design` 0 errors
- [ ] design-critique P0/P1 resolved + reference test
- [ ] tokens/text-styles bound; no hardcoded hex/raw sizes
- [ ] gain/loss = colour + arrow + sign; numerals tabular/cream
