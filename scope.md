# scope.md — Design scope boundary (READ BEFORE ANY SCREEN WORK)
> The BRD (v2.0) describes the FULL platform vision. **We are designing only ~25–30% of it** — the Phase-1 investor mobile app. If a request maps to the ❌ list, say so before starting; don't silently design out-of-scope surface.

## ✅ IN design scope (Phase-1 investor app, 375px mobile)
**Flows (= the screen backlog in DESIGN_BRAIN §11):**
1. Auth: Splash → Login (+91 PhoneInput) → OTP → PIN/MPIN → biometric enable
2. Onboarding/KYC: 7-step smart flow (PAN → CKYC fetch → DigiLocker/Video-KYC+IPV → bank penny-drop → nominee → NRI status + FATCA/CRS declarations) · re-KYC touchpoints
3. Home/Dashboard (built — Home_Dashboard.md; pending state-frames)
4. Invest: Explore/search/filter → Fund detail → AmountInput (SIP/lumpsum; SWP/STP entry) → OrderReview (incl. NRE/NRO source selection + country-eligibility blockers) → Payment → Receipt
5. Portfolio: holdings, transactions, statements; switch (intra-AMC); NFO subscription entry
6. **Tax module (THE differentiator):** pre-redemption TDS estimate (shown before confirm), DTAA module (TRC + Form 10F upload states), tax simulator, capital-gains view — always with "consult a tax advisor" hedging (ITAT position under appeal)
7. Goals & SIP management
8. Profile/Settings/Support · nominee management · repatriation guidance (15CA/CB) as guidance UX
9. Lead-capture sheets: Other Products (PMS/AIF/bonds/REITs → RM) and Tax/CA services — capture forms only
10. Utilities: currency converter, world clock (dual-timezone), multi-currency display (INR/USD/AED), repatriable-vs-NRO labeling

## ❌ OUT of design scope (do not design, even if the BRD describes it)
- Resident-Indian anything · direct plans (no-ARN)
- Actual execution of PMS/AIF/unlisted/bonds/NCDs/REITs/InvITs (capture-only)
- CA service delivery flows (Phase 2) · GIFT City/IFSC investing (Phase 2) · international remittance integration (Phase 3)
- Operations portal, RM portal, reconciliation/reverse-feed tooling, brokerage/revenue back-office (separate products, not this app)
- Web/responsive/desktop — anything
- AI features (six intelligence layers) beyond where a Phase-1 screen needs a slot for them — design the slot, not the AI product

## Ambiguous → ask Ashish first
Held-away/account-aggregation views · model portfolios · engagement/notification center depth · India-visit mode as a full mode vs. contextual touches.

*Source: BRD v2.0 §2.1/§2.2 + NRI_Platform_Notes. If BRD and this file conflict, this file wins for design work; flag the conflict.*
