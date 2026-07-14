# Centricity Design System

**Centricity** is a D2C mobile app for **NRI mutual-fund investing** across the UAE and Singapore corridors. The product is compliance-heavy (SEBI / AMFI / NSE): 7-step KYC onboarding, TDS preview, DTAA activation, an invest / first-order flow, and portfolio performance with multiple chart types. The aesthetic is **premium, dark, quiet-luxury fintech** — layered obsidian surfaces, ~4% film grain, frosted glass, brushed-copper CTAs, and exactly one warm copper rim-glow per screen. Everything is designed at a **375×812 iPhone reference frame**, mobile-first and vertical, to iOS-grade polish.

This design system is **dark-first and single-theme** for v1 (a light theme would be a future semantic remap over unchanged primitives).

---

## Sources

This system was built from the following inputs. You don't need access to them to use the system, but they're recorded here in case you do:

- **Visual identity (source of truth):** `claude.fig` (Centricity's own Figma) plus the authoritative written specs `ART_DIRECTION.md` and `DESIGN_TOKENS.md` (provided in the `files/` codebase). Token values, the obsidian+copper theme, iconography style and existing screens come from here and must not be changed.
- **Component architecture (structure only):** the **Blade Design System (Community)** Figma by Razorpay — used purely as a reference for component inventory, variant logic, token tiering (base → semantic → component) and state coverage. It is a web system; its visual language, its blue/purple/teal palette, and its web-only patterns (hover, modals, dropdowns) were **not** copied. Every component here is re-skinned to Centricity and adapted web→mobile (bottom sheets instead of modals/dropdowns, bottom tab bar, OTP inputs, pressed/disabled/loading/error instead of hover).
- **Uploaded brand assets:** Centricity wordmark (`assets/logos/`), Figtree + Tabular font families (`assets/fonts/`), and three real product home screens (`assets/reference/`).
- **GitHub references** (explore for deeper product/architecture context):
  - https://github.com/razorpay/blade — Blade component/token architecture
  - https://github.com/adityagupta525/NRI-mobile-design — NRI mobile design patterns
  - https://github.com/figma/mcp-server-guide
  - https://github.com/edenspiekermann/Skills · https://github.com/nextlevelbuilder/ui-ux-pro-max-skill · https://github.com/pbakaus/impeccable · https://github.com/Leonxlnx/taste-skill · https://github.com/emilkowalski/skills

---

## Content fundamentals (voice & copy)

- **Second person, warm and direct.** "Hi, Ashish", "Build your wealth in India", "Are you overpaying tax on your India investments?", "See all your mutual fund holdings in one place." The app talks *to* the user about *their* money.
- **Confident, plain-English finance.** Jargon (XIRR, DTAA, TDS, NAV, SIP, lumpsum) is used but always earns a plain-language gloss nearby ("pro-grade insights, made simple"). Never condescending.
- **Sentence case for prose; UPPERCASE micro-labels** for data captions and legal (`NIFTY 50`, `3Y CAGR`, `MIN. SIP`, `TOTAL PORTFOLIO VALUE`).
- **NRI-corridor specificity.** Copy references UAE / Singapore / Gulf, NRE vs NRO accounts, repatriation, DTAA — this specificity is a feature, not filler.
- **No emoji.** Iconography is line-based SVG. Currency is always ₹ with Indian digit grouping (₹3,42,18,650).
- **Restraint.** One focal point per screen; vast negative space is intentional. Don't add tiles, toggles or tables that aren't earning their place.

---

## Visual foundations

- **Layered obsidian depth.** The canvas is near-black obsidian (`#0A0A0B`), never flat `#000`. Depth is built in tiers: canvas → raised (`#101013`) → card (`#16161A`) → sheet (`#1C1C21`) → pressed (`#26262C`). Each step is a slightly lighter surface plus a soft shadow — **never a hard border**. Flat fills on elevated surfaces are forbidden.
- **Film grain.** Elevated surfaces (cards, tiles, sheets) carry ~4% monochrome film grain (`.cent-grain`, via `assets/textures/grain.png` at `mix-blend-mode: overlay`). The base canvas can stay clean; grain signals "this surface is material."
- **Frosted glass** (`.cent-glass`) for toggles, chips, tooltips, segmented controls, the tab bar and floating pills: backdrop blur + a 1px inner top highlight + a faint warm **copper shimmer** outer stroke. Never pure-white glass; always warm-tinted.
- **Brushed-copper CTA** (`.cent-copper-cta`): copper sheen gradient (`--accent-sheen`, copper-600→400→300), radius 8, 1px inner top highlight, **ink-colored label** (near-black, never white). **Exactly one per screen.**
- **One copper rim-glow per screen** (`.cent-rim-glow` / `--glow-copper`): a single hero element gets the warm glow; it marks the focal point. Never two.
- **Hero numerals:** cream (`#F2EDE4`), Tabular figures, Indian grouping (₹X,XX,XX,XXX.XX), tabular-aligned.
- **Color:** copper is the sole accent. Sage/brick/amber are **data-semantic only** (gain / loss / warning-pending) and desaturated for dark. Zero purple/blue/teal/lime/green decorative color.
- **Type:** exactly two families — Figtree (UI, headings, body, and uppercase micro data-labels via `.cent-type-datalabel`, wide tracking) and Tabular (all numerals/currency). No third/mono family.
- **Spacing:** 4pt grid (4/8/12/16/20/24/32/40/48/64), 16px side gutters, 12px between cards.
- **Radii:** xs 4, sm 8 (CTA), md 12 (cards), lg 16 (sheets), xl 24 (hero tiles), full 999 (pills/chips).
- **Elevation:** shadow.raised / card / sheet ramp; blur 20 for glass.
- **Motion:** fast 150 / base 250 / slow 400ms; standard easing `cubic-bezier(0.2,0,0,1)`; spring reserved for sheet presentations. No hover states — mobile uses pressed (scale 0.97 / pressed surface), disabled, loading, error.
- **Imagery:** copper-sepia desaturation; no full-color photography. (Promo banners in the UI kit use copper-tinted gradient placeholders — swap in real sepia art.)

---

## Iconography — two tiers

1. **Copper line icons** — the ~88-glyph Phosphor-style set materialized from claude.fig (`components/figma/Icon.jsx`, `<Icon name="…" />`), thin ~1.6–2px copper strokes on a 24px grid, outline style (no fills, no emoji, no unicode glyphs). Used for utility tiles (Vault, Calculator, Goals-list, Reports-nav), bottom-nav, list rows and inline affordances.
2. **3D feature icons** — obsidian-and-copper rendered bitmaps extracted verbatim from claude.fig into `assets/feature-icons/` (`retirement`, `dream-house`, `child-education`, `reports`), rendered via the `FeatureIcon` component. Reserved for hero goal/feature tiles — never used where a line icon belongs.

There is **no icon font** in the source; if you need extra line glyphs beyond the set, match this stroke/outline style (Lucide is the closest CDN match). The Centricity wordmark lives in `assets/logos/` (white-on-obsidian and black-on-light) — never redraw or recolor it.

---

## Tokens

Root entry `styles.css` is an `@import` list only. Token files under `tokens/`:
- `colors.css` — obsidian, copper, cream, grey, hairline, semantic data colors (Tier 1) + semantic aliases (Tier 2).
- `fonts.css` — `@font-face` for Figtree & Tabular, `--font-ui` / `--font-numeral`.
- `typography.css` — type-scale variables + `.cent-type-*` classes + `.cent-numeral`.
- `spacing.css` — spacing, radius, frame/layout constants.
- `effects.css` — shadows, glow, blur, grain; utilities `.cent-grain`, `.cent-glass`, `.cent-copper-cta`, `.cent-rim-glow`.
- `base.css` — resets, link colors, keyframes.

Tier discipline (Razorpay Blade principle): components consume **semantic/component** tokens, never Tier-1 primitives directly; no hardcoded hex/px/radius.

---

## Components

React primitives under `components/<group>/<Name>/`, mounted via `window.CentricityDesignSystem_35f9eb`. Full inventory:

**Core** — `Button` (primary champagne-metal · secondary solid off-white · tertiary glass · ghost · destructive), `IconButton`, `Chip` (`StatusChip` + `Badge`), `Tag`
**Forms** — `TextInput`, `OTPInput`, `PasswordInput`, `AmountInput` (+ `formatIndianCurrency`), `Switch`, `Checkbox`, `Radio`
**Structure** — `Card`, `Divider`, `Accordion`, `Tabs`, `ActionListItem`, `ButtonGroup`, `Table`, `Pagination`, `Carousel` (+ `PageDots`)
**Feedback** — `Alert`, `Toast`, `Spinner`, `Skeleton`, `ProgressStepper`
**Overlays** — `BottomSheet`, `Tooltip`
**Gap (Batch 3)** — `NAVTicker`, `FundSearchBar`, `RiskMeter` (SEBI 6-level), `FundFilterSheet`, `SortControl`, `WatchlistSwipeRow` (swipe actions), `ComparisonView`
**Gap (Batch 4)** — `CurrencyToggle` (₹/AED/SGD indicative), `BankAccountCard` (NRE/NRO/FCNR + verification states), `NomineeCard` (100% allocation validation), `SIPCalculatorSlider` (estimate + disclaimer), `GoalProgressCard`, `FolioSelector`, `LanguageSelector`, `ProfileHeader`, `SettingsGroup`, `InboxNotificationRow`
**Gap (Batch 5)** — `ConfirmationSuccess` (the one celebration moment), `ExitLoadWarningSheet` (SEBI-factual), `NetworkErrorState`, `MaintenanceState`, `RatingPrompt`, `ShareSheet`, `PermissionPrimer`, `PDFViewerHeader`, `OnboardingCarousel`
**Fintech** — `FundCard`, `MetricTile`, `TransactionRow`, `AllocationBar`, `Charts` (`LineChart` + `BarChart` + `DonutChart`), `DocUploadCard`, `BiometricPrompt`, `EmptyState`, `KYCProgressBanner`, `FeatureIcon` (3D goal/report bitmaps)

### Identity is sourced from claude.fig (supreme source of truth)
Token values are sampled verbatim from `claude.fig` (materialized into `tokens/figma/fig-tokens.css`, 296 variables incl. a full light-theme mode for a future web remap — the base→semantic architecture is platform-agnostic): copper accent **#B69377** (champagne, not orange), obsidian canvas **#0D0D0D** / surface #111 / card #191919 / sheet #212121, gain **#51D360**, alert/loss **#FF6038**, warning **#CC9000**. The primary CTA is the brushed **champagne-metal** gradient with a dark ink label (`--accent-metal` / `.cent-copper-cta`), secondary is solid off-white, glass is tertiary. Uppercase data micro-labels (NIFTY 50, TOTAL PORTFOLIO VALUE, 3Y CAGR) render in **Figtree** with wide tracking (`.cent-type-datalabel`) — there is no mono family. (The `--font-mono` token name is a legacy alias kept only for back-compat; it resolves to Figtree via `--font-ui`.)

### Intentional additions (confirmed, not oversights)
These components have no 1:1 name in the claude.fig kit — they are deliberate Centricity-domain additions, each with a reason: `FundCard` (fund listings), `MetricTile` (portfolio stat rows), `TransactionRow` (order history), `AllocationBar` + `Charts`/`DonutChart` (portfolio performance/allocation viz), `DocUploadCard` (KYC document capture), `BiometricPrompt` (Face ID / fingerprint auth), `ProgressStepper` (7-step KYC rail), `AmountInput` (Indian-grouped currency entry), `EmptyState` (no-data views), `KYCProgressBanner` (KYC-in-progress banner), `Switch` (settings/notify toggles), `Toast` (transient confirmations), `Alert` (inline compliance/status banners), `Tag` (filter/category tokens). The design-system check flags these ~14 names as "named after nothing in the kit" — that is expected and confirmed intentional; renaming them to kit vocabulary would erase the fintech/compliance semantics they exist to carry.

### Coverage vs claude.fig (105 of 107 families; 2 intentionally skipped)
claude.fig defines **107 component families**; this system builds **105**. My hand-curated, mobile-adapted set (below) covers the core primitives; every remaining family was materialized 1:1 from the file into **`components/figma/`**, with the icon glyphs in `components/figma/Icon.jsx`. The **2 unbuilt** are non-product leftovers embedded in the file — `Component 7` (a CRED "visit store" promo card) and `Disabled` (a bare state artifact) — intentionally skipped. Token coverage is complete: all 296 kit variables (both theme modes) are in `tokens/figma/fig-tokens.css`.

**Curated core** (`components/core|forms|structure|feedback|overlays|fintech/`): Button, IconButton, Chip, StatusChip, Badge, Tag, TextInput, OTPInput, PasswordInput, AmountInput, Switch, Checkbox, Radio, Card, Divider, Accordion, Tabs, ActionListItem, ButtonGroup, Table, Pagination, Carousel, PageDots, Alert, Toast, Spinner, Skeleton, ProgressStepper, BottomSheet, Tooltip, FundCard, MetricTile, TransactionRow, AllocationBar, LineChart, BarChart, DonutChart, DocUploadCard, BiometricPrompt, EmptyState, KYCProgressBanner.

**Materialized from claude.fig** (`components/figma/`): ActionTile, AllocationDonut, ArticleCard, Avatar, AvatarGroup, BankCard, Breadcrumbs, Calendar, CameraCapture, Combobox, ConfirmDialog, CurrencySelector, DateRangeField, Drawer, ErrorState, ExplorePills, FAB, FileUpload, FilterSheet, FlatButtons, GlassButton, GlassHeroCard, GlassSurface, GoalCard, GoalRing, GrainOverlay, Header, HoldingRow, HomeIndicator, InlineBanner, Input, KYCStatusTracker, KYCStepper, ListRow, MarketTicker, Menu, MetalAvatar, Modal, NAVCard, NeuPill, NotificationRow, NotifyRow, NumericKeypad, OnboardingStepper, OrderReview, PINEntry, PaymentMethodRow, PhoneInput, PortfolioCard, ProgressBar, PromoBanner, RadialGlow, Receipt, ReturnBadge, RiskGauge, RowCard, SIPCard, SearchBar, SegmentedTabs, Select, Slider, Snackbar, Sparkline, SplitButton, StatTile, StatementRow, StatusBar, StepRow, SuccessCheck, TabBar, TextArea, Timeline, Toggle, ToolkitCard, TrustFooter, UnderlineTabs, WatchlistRow, WhyRegularSheet. **Icons** (`components/figma/Icon.jsx`): `Icon` — 88 Phosphor-style kebab-named line glyphs via `<Icon name="house" style={{width:22,height:22}} />`.

---

## UI kits

- **`ui_kits/centricity-app/`** — the interactive NRI invest app at 375×812. Screens: **Home** (existing invested user — portfolio value, market ticker, Popular-with-NRIs funds, tax banner, analysis toolkit, KYC-continue banner), **Portfolio** (performance line chart, asset allocation, holdings/transactions tabs), **Invest** (fund pick, SIP/Lumpsum toggle, Indian-grouped amount, confirm sheet → biometric → success), **KYC** (7-step onboarding stepper: PAN, Aadhaar+OTP, selfie, bank, signature, FATCA, review), and **Taxation** (DTAA activation, TDS/capital-gains reports). Bottom tab bar navigates Home/Portfolio/Invest/Taxation.

---

## Index / manifest

- `styles.css` — global CSS entry (import list)
- `tokens/` — colors, fonts, typography, spacing, effects, base
- `components/` — core · forms · structure · feedback · overlays · fintech (each `<Name>/` has `.jsx`, `.d.ts`, `.prompt.md`, `.card.html`)
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `docs/` — Blade-level component doc cards (Docs group): anatomy · variants/states · do&don't · spacing redlines · a11y · motion/haptic · prop table. Flagships: Button, AmountInput, BottomSheet, RiskMeter (shared `doc.css`)
- `ui_kits/centricity-app/` — interactive app recreation
- `flows/` — flow-assembly storyboards (Flows group): First Investment · Onboarding→KYC · Portfolio deep-dive · Redemption+TDS — screen sequences with transition annotations (shared `flow.css`)
- `assets/` — `logos/`, `fonts/`, `textures/grain.png`, `reference/` (real product screens)
- `SKILL.md` — Agent Skills entry point

---

## Caveats

- **Font substitution:** none — Figtree and Tabular were both provided and are used verbatim.
- **Token values are from claude.fig** (materialized into `tokens/figma/fig-tokens.css` — copper #B69377, obsidian #0D0D0D, mint/red/amber data colors, champagne-metal CTA gradient), which supersedes the earlier `DESIGN_TOKENS.md` approximations. Where the two disagree, the Figma file wins.
- **fig_* materialization complete:** the full component set was materialized 1:1 from claude.fig into `components/figma/` (79 component files) with the Icon set in `components/figma/Icon.jsx`, plus all 296 token variables. Earlier sessions had intermittent `fig_*` outages; those are resolved.
- **3D feature icons extracted:** the real obsidian-and-copper 3D bitmaps (Retirement, Dream House, Child Education, Reports) are copied verbatim from claude.fig into `assets/feature-icons/` and rendered via `FeatureIcon`. Utility tiles (Vault, Calculator, Goals-list) intentionally use copper line icons, matching the source. Promo banners still use copper-tinted gradients as placeholders where the source had no dedicated bitmap.
- **Superseded caveat (was): imagery is placeholder** — the 3D feature icons (Reports/Goals/Vault/Calculator/Retirement/Dream House/Child Education) are bitmap renders that can be copied from the file with fig_copy_files when needed.
- **Coverage is 105 of 107 families** — the 2 unbuilt (`Component 7`, a CRED "visit store" promo card, and `Disabled`, a bare state artifact) are non-product leftovers embedded in the file, intentionally skipped (see the coverage note above).
