/* KYC onboarding — 7-step flow condensed to an interactive stepper with per-step content. */
(function(){
const C = window.CentricityDesignSystem_35f9eb;

const KYC_STEPS = ["PAN", "Aadhaar", "Selfie", "Bank", "Signature", "FATCA", "Review"];

function Kyc({ onExit }) {
  const [step, setStep] = React.useState(0);
  const [otpDone, setOtpDone] = React.useState(false);
  const [docs, setDocs] = React.useState({ pan: false, aadhaar: false });
  const [fatca, setFatca] = React.useState(false);

  const next = () => setStep((s) => Math.min(s + 1, KYC_STEPS.length - 1));
  const back = () => (step === 0 ? onExit && onExit() : setStep((s) => s - 1));

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Nav */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 16px 12px" }}>
        <C.IconButton size={40} onClick={back}><window.Icon.back s={20} /></C.IconButton>
        <div style={{ flex: 1 }} />
        <span style={{ fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--text-tertiary)" }}>Complete your KYC</span>
      </div>
      <div style={{ padding: "0 16px 20px" }}>
        <C.ProgressStepper steps={KYC_STEPS} activeIndex={step} />
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "0 16px" }}>
        <div className="cent-type-title1" style={{ color: "var(--text-primary)", marginBottom: 8 }}>{stepTitle(step)}</div>
        <div className="cent-type-callout" style={{ color: "var(--text-secondary)", marginBottom: 24, lineHeight: "18px" }}>{stepSubtitle(step)}</div>
        {stepBody(step, { otpDone, setOtpDone, docs, setDocs, fatca, setFatca })}
      </div>

      {/* Thumb-zone CTA */}
      <div style={{ padding: "16px 16px calc(16px + 34px)" }}>
        <C.Button variant="primary" size="large" fullWidth onClick={step === KYC_STEPS.length - 1 ? onExit : next}>
          {step === KYC_STEPS.length - 1 ? "Submit for verification" : "Continue"}
        </C.Button>
      </div>
    </div>
  );
}

function stepTitle(s) {
  return ["Verify your PAN", "Aadhaar verification", "Take a quick selfie", "Link your bank", "Add your signature", "Tax residency (FATCA)", "Review & submit"][s];
}
function stepSubtitle(s) {
  return [
    "Enter your PAN as printed on the card. We verify it instantly with the Income Tax database.",
    "We'll send an OTP to your Aadhaar-linked mobile number for e-verification.",
    "Match your face to your PAN photo. Good lighting helps.",
    "NRE / NRO account for repatriable and non-repatriable investments.",
    "Upload a clear image of your signature on white paper.",
    "Declare your tax residency. Required under SEBI/AMFI for NRI accounts.",
    "Confirm everything is correct before we send it for verification.",
  ][s];
}

function stepBody(s, ctx) {
  if (s === 0)
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <C.TextInput label="PAN Number" placeholder="ABCDE1234F" necessity="required" />
        <C.TextInput label="Full name (as per PAN)" placeholder="Ashish Kumar" />
        <C.DocUploadCard label="PAN card" hint="Clear photo, all corners visible" uploaded={ctx.docs.pan} onUpload={() => ctx.setDocs((d) => ({ ...d, pan: true }))} />
      </div>
    );
  if (s === 1)
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <C.TextInput label="Aadhaar-linked mobile" placeholder="+971 50 000 0000" />
        <div>
          <div style={{ fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--text-secondary)", marginBottom: 10 }}>Enter the 6-digit OTP</div>
          <C.OTPInput length={6} onComplete={() => ctx.setOtpDone(true)} />
          {ctx.otpDone && <div style={{ marginTop: 12 }}><C.StatusChip tone="positive" dot="verified">Verified</C.StatusChip></div>}
        </div>
      </div>
    );
  if (s === 2)
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, paddingTop: 20 }}>
        <div className="cent-rim-glow" style={{ width: 200, height: 200, borderRadius: "50%", background: "var(--surface-raised)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-tertiary)" }}>
          <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><circle cx="12" cy="9" r="4"/><path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6"/></svg>
        </div>
        <C.StatusChip tone="processing" dot="processing">Position your face in the circle</C.StatusChip>
      </div>
    );
  if (s === 3)
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <C.TextInput label="Account number" placeholder="XXXX XXXX 4521" />
        <C.TextInput label="IFSC code" placeholder="HDFC0001234" />
        <div style={{ display: "flex", gap: 20, marginTop: 4 }}>
          <C.Radio checked label="NRE (repatriable)" onChange={() => {}} />
          <C.Radio label="NRO" onChange={() => {}} />
        </div>
      </div>
    );
  if (s === 4)
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <C.DocUploadCard label="Signature" hint="On white paper, dark ink" />
        <C.Alert intent="info" title="Tip" description="Sign exactly as you would on official bank documents." />
      </div>
    );
  if (s === 5)
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <C.TextInput label="Country of tax residence" placeholder="United Arab Emirates" />
        <C.TextInput label="Tax Identification Number (TIN)" placeholder="784-XXXX-XXXXXXX-X" />
        <C.Checkbox checked={ctx.fatca} onChange={ctx.setFatca} label="I confirm I am a tax resident of the country above and the details are accurate." />
      </div>
    );
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <ReviewRow label="PAN" value="ABCDE1234F" />
      <C.Divider />
      <ReviewRow label="Aadhaar" value="Verified" tone="positive" />
      <C.Divider />
      <ReviewRow label="Bank" value="HDFC •••• 4521 (NRE)" />
      <C.Divider />
      <ReviewRow label="Tax residency" value="UAE" />
      <div style={{ marginTop: 12 }}>
        <C.Alert intent="warning" title="Verification takes up to 48 hours" description="You can browse and shortlist funds meanwhile." />
      </div>
    </div>
  );
}

function ReviewRow({ label, value, tone }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0" }}>
      <span style={{ fontFamily: "var(--font-ui)", fontSize: 14, color: "var(--text-tertiary)" }}>{label}</span>
      <span style={{ fontFamily: "var(--font-ui)", fontSize: 14, fontWeight: 600, color: tone === "positive" ? "var(--sage-500)" : "var(--text-primary)" }}>{value}</span>
    </div>
  );
}

Object.assign(window, { Kyc });
})();
