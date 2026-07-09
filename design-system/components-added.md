# Components added during screen builds (running changelog)
> Rule (figma-master): when a screen needs a component the 85-library lacks, BUILD it properly
> as a new library component (tokens-bound, variants + states), ADD to `✦ 2 Components`, THEN
> instance it. Never draw one-off shapes on a screen frame. Log every addition here.

| Date | Component | Variants / states | Tokens bound | Added for screen | Notes |
|---|---|---|---|---|---|
| 2026-07-09 | **GlassHeroCard** (`437:191`) | State = default / **with-glow** | reuses **GlassSurface `22:4`** (glass recipe, bound stroke/radius vars) + **RadialGlow `22:5`**; NAV numerals cream | Fund Detail | Composite hero: NAV label+value + LineChart + range toggle on frosted glass. `text.number` var name unmatched → cream literal fallback (flag). |
| 2026-07-09 | **WhyRegularSheet** (`438:178`) | single (BottomSheet-style) | reuses **GlassSurface `22:4`**; title→`text.primary`, body→`text.secondary` (bound); metal CTA instance | Fund Detail (S4) | Glass sheet: grabber + "Why a Regular plan?" + body + metal "Got it". |
| 2026-07-09 | **GrainOverlay** (`439:179`) | single | image fill (generated 32×32 RGBA noise PNG, TILE, OVERLAY ~4%) | Fund Detail hero | Real film-grain via in-sandbox PNG (not a flat placeholder). Overlay on elevated surfaces. |
| _example_ | GlassSegmentedControl | 2/3-segment · default/active | glass recipe, copperShimmer | — | (template row) |

All three built on `✦ 2 · Components` (page `3:3`) reusing existing GlassSurface + RadialGlow
(no glass/glow recreated). Re-instanced on Fund Detail: flat NAV+chart+toggle → one
**GlassHeroCard (with-glow)** + **GrainOverlay**; one copper glow (restraint); anti-drift OK
(copper only, no purple/blue/teal). `npm run apca` now wired (0 errors) + `npm run lint:design` 0.
