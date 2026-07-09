# Components added during screen builds (running changelog)
> Rule (figma-master): when a screen needs a component the 85-library lacks, BUILD it properly
> as a new library component (tokens-bound, variants + states), ADD to `✦ 2 Components`, THEN
> instance it. Never draw one-off shapes on a screen frame. Log every addition here.

| Date | Component | Variants / states | Tokens bound | Added for screen | Notes |
|---|---|---|---|---|---|
| _example_ | GlassSegmentedControl | 2/3-segment · default/active | glass recipe, copperShimmer | Fund Detail | frosted toggle per ART_DIRECTION §glass |

## Deferred — needed but NOT yet built (honest status; Fund Detail taste pass 2026-07-09)
No new components were *added* this pass — the taste pass used existing instances. These need
proper library components (variants + states, tokens-bound) before the ✦7 material bar is met.
Instances can't accept reparented children, so a real glass hero can't be faked on a screen frame.

| Component | Why needed | Unblocks |
|---|---|---|
| **GlassHeroCard** | Wrap NAV + chart as one frosted-glass hero so the copper rim-glow actually reads (ART_DIRECTION §3/§5). Current opaque cards occlude the glow → it stays subtle. | true hero moment + glass material |
| **WhyRegularSheet** (or generic content BottomSheet) | S4 explainer. Library `BottomSheet` 122:31 is a currency-selector, not a generic container. Need a blank glass sheet with title/body/CTA slots. | S4 wiring |
| **GrainOverlay** (style/effect) | ~3–5% film-grain on elevated surfaces (ART_DIRECTION §2) — the ✦7 signature texture. | tactile depth |
