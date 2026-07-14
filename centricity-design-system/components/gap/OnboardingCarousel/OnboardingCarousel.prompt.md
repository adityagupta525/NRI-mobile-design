OnboardingCarousel is the 3-4 slide intro — copper pagination dots (active elongates), Skip + Next, swipe gesture; the final slide's Next becomes the primary CTA.

Motion: slide crossfade, dot width transition. Haptic: selection tick on swipe. Voice: `voice.onboarding.*`.

```jsx
<OnboardingCarousel onSkip={skip} onDone={start} slides={[
  { art:"🌏", title:"Your India. Fully claimed.", body:"Invest in Indian mutual funds from the UAE & Singapore." },
]} />
```
