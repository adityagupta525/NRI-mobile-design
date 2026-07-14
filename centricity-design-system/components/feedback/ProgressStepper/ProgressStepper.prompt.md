ProgressStepper drives the 7-step KYC onboarding — horizontal rail for the top-of-screen progress bar, vertical for a full checklist view.

```jsx
<ProgressStepper steps={["PAN","Aadhaar","Selfie","Bank","Signature","FATCA","Review"]} activeIndex={2} />
<ProgressStepper orientation="vertical" steps={[...]} activeIndex={2} />
```
