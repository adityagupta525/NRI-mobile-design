/* Centricity — Voice & Copy Tokens
 * ---------------------------------------------------------------------------
 * A localizable copy LAYER. Components read these keys, never hardcode strings —
 * so copy is swappable and ready for the UAE (Arabic) + Singapore corridors and
 * Hindi, without touching component code.
 *
 * COMPLIANCE (SEBI/AMFI distributor — non-negotiable):
 *   • Never promise or imply guaranteed returns.
 *   • Growth/savings are ESTIMATES: "estimated", "based on current DTAA rates",
 *     "past performance". TDS/DTAA copy shows a CALCULATION, not a promise —
 *     "You could keep ₹X more*", never "You will earn/save".
 *   • Any screen showing projected numbers or an invest CTA must render
 *     COPY.disclaimer.market (and the asterisk gloss where "*" appears).
 *
 * VOICE: second person, confident plain-English with Indian warmth.
 *   Jargon always earns a one-line plain gloss. Errors reassure + give the next
 *   action, never blame. Empty states motivate with exactly one CTA.
 *
 * Each token carries `emotion`: calm | trust | momentum | celebration —
 * the felt target that motion, haptics and copy align to for that moment.
 */

export const COPY = {
  /* ---- Mandated disclaimers & glosses (render verbatim) ---- */
  disclaimer: {
    market: {
      text: "Mutual fund investments are subject to market risks. Read all scheme related documents carefully.",
      emotion: "trust",
      usage: "Invest, confirm-order, and any projection screen — pinned, non-dismissible.",
    },
    asterisk: {
      text: "*Estimated figure based on current DTAA rates and your declared tax residency. Not a guarantee. Actual amounts depend on prevailing tax law at the time of redemption.",
      emotion: "trust",
      usage: "Footnote wherever a '*' projected number appears (TDS/DTAA/returns).",
    },
    pastPerformance: {
      text: "Past performance is not indicative of future returns.",
      emotion: "trust",
      usage: "Under every CAGR / historical return figure and fund performance chart.",
    },
  },

  /* ---- Empty states — motivate, one CTA ---- */
  empty: {
    portfolio: {
      title: "Your India portfolio starts here",
      body: "Start a SIP from as little as \u20B91,000 a month and watch it grow, all from the UAE.",
      cta: "Explore funds",
      emotion: "momentum",
    },
    watchlist: {
      title: "Nothing on your watchlist yet",
      body: "Tap the bookmark on any fund to keep an eye on it here.",
      cta: "Browse funds",
      emotion: "calm",
    },
    transactions: {
      title: "No transactions so far",
      body: "Your SIP debits, redemptions and dividends will show up here once you begin.",
      cta: "Make your first investment",
      emotion: "momentum",
    },
    goals: {
      title: "Give your money a purpose",
      body: "A home in Kochi, your child\u2019s education, retirement back home \u2014 set a goal and we\u2019ll map the SIP to reach it.",
      cta: "Set a goal",
      emotion: "momentum",
    },
    search: {
      title: "No funds match that",
      body: "Try a fund house, a category like \u2018flexi cap\u2019, or clear a filter.",
      cta: "Clear filters",
      emotion: "calm",
    },
  },

  /* ---- Error states — reassure, give the next action, never blame ---- */
  error: {
    network: {
      title: "You\u2019re offline",
      body: "Your data is safe. We\u2019ll reconnect the moment you\u2019re back.",
      cta: "Try again",
      emotion: "calm",
    },
    payment: {
      title: "That payment didn\u2019t go through",
      body: "No money has left your account. This usually clears on a second try.",
      cta: "Retry payment",
      emotion: "calm",
    },
    kycRejected: {
      title: "We need a clearer document",
      body: "The name on your PAN and Aadhaar didn\u2019t match. Re-upload and you\u2019ll be verified within 48 hours.",
      cta: "Re-upload documents",
      emotion: "trust",
    },
    otp: {
      title: "That code didn\u2019t match",
      body: "Check the last SMS from us, or resend a fresh code.",
      cta: "Resend code",
      emotion: "calm",
    },
    maintenance: {
      title: "Back in a few minutes",
      body: "We\u2019re making Centricity better. Your investments are untouched and safe.",
      cta: "Notify me when ready",
      emotion: "trust",
    },
    generic: {
      title: "Something slipped",
      body: "That\u2019s on us, not you. Give it another go.",
      cta: "Try again",
      emotion: "calm",
    },
  },

  /* ---- KYC 7-step — reduce anxiety with time + prep cues ---- */
  kyc: {
    intro: {
      title: "Let\u2019s get you verified",
      body: "7 quick steps, about 4 minutes. Keep your PAN and passport handy \u2014 you can pause anytime.",
      cta: "Start verification",
      emotion: "calm",
    },
    step1: { label: "PAN", title: "Your PAN number", cue: "About 30 seconds \u2014 keep your PAN card handy.", emotion: "calm" },
    step2: { label: "Aadhaar", title: "Verify with Aadhaar OTP", cue: "1 minute \u2014 we\u2019ll send an OTP to your Aadhaar-linked mobile.", emotion: "calm" },
    step3: { label: "Selfie", title: "A quick selfie", cue: "20 seconds \u2014 find even light and look straight at the camera.", emotion: "calm" },
    step4: { label: "Bank", title: "Link your bank account", cue: "1 minute \u2014 keep your NRE/NRO account details ready.", emotion: "trust" },
    step5: { label: "Signature", title: "Add your signature", cue: "20 seconds \u2014 sign on-screen or upload a photo.", emotion: "calm" },
    step6: { label: "FATCA", title: "Tax residency (FATCA)", cue: "1 minute \u2014 this confirms where you pay tax, so we apply the right DTAA rate.", emotion: "trust" },
    step7: { label: "Review", title: "Review and submit", cue: "Check your details \u2014 verification completes within 48 hours.", emotion: "trust" },
    submitted: {
      title: "You\u2019re all set in motion",
      body: "We\u2019re verifying your details \u2014 usually done within 48 hours. We\u2019ll nudge you the moment you can invest.",
      emotion: "trust",
    },
  },

  /* ---- TDS / DTAA — calculation, never promise (asterisk mandatory) ---- */
  tax: {
    dtaaEligible: {
      title: "Your DTAA benefit is ready to claim",
      body: "Based on current India\u2013UAE DTAA rates and your declared residency, you could keep \u20B94,25,250 more* on this redemption versus the standard TDS rate.",
      cta: "Activate DTAA rate",
      emotion: "trust",
      note: "asterisk", // renders COPY.disclaimer.asterisk
    },
    tdsPreview: {
      title: "Here\u2019s the tax picture before you redeem",
      body: "Estimated TDS on this \u20B940,00,000 redemption is \u20B94,250, leaving an estimated \u20B939,95,750 to your account.",
      cta: "Continue to redeem",
      emotion: "calm",
      note: "asterisk",
    },
    dtaaActivated: {
      title: "Lower tax rate applied",
      body: "Your DTAA rate is now active on eligible redemptions. Keep more of what\u2019s yours.",
      emotion: "celebration",
    },
  },

  /* ---- Success / confirmation — momentum & the one celebration ---- */
  success: {
    firstOrder: {
      title: "Your India, fully claimed",
      body: "Your first investment is placed. Welcome to Centricity \u2014 we\u2019ll take it from here.",
      cta: "View portfolio",
      emotion: "celebration", // the ONE copper particle moment
    },
    orderPlaced: {
      title: "Order placed",
      body: "You\u2019ll see units credited in 2\u20133 working days. We\u2019ll notify you when they land.",
      cta: "Done",
      emotion: "momentum",
    },
    sipStarted: {
      title: "Your SIP is live",
      body: "\u20B95,000 will invest automatically on the 5th of every month. Change or pause it anytime.",
      cta: "Done",
      emotion: "momentum",
    },
    kycVerified: {
      title: "You\u2019re verified",
      body: "Everything\u2019s open now \u2014 funds, SIPs, the lot. Let\u2019s put your money to work.",
      cta: "Start investing",
      emotion: "celebration",
    },
  },
};

/* Resolve a dotted key, e.g. resolveCopy("kyc.step4") -> { label, title, cue, emotion } */
export function resolveCopy(path) {
  return path.split(".").reduce((o, k) => (o == null ? o : o[k]), COPY);
}

export default COPY;
