BankAccountCard is the NRI bank account row/card — NRE/NRO/FCNR type chip, masked account number, bank-logo slot, verification state (verified sage / pending amber / failed brick) and optional PRIMARY badge. Pairs with the "Select bank account" BottomSheet.

Motion: none (informational). Haptic: light on select. Voice: factual state labels.

```jsx
<BankAccountCard bankName="Emirates NBD" accountType="NRE" masked="•••• 7788" state="verified" primary />
<BankAccountCard bankName="HDFC Bank" accountType="NRO" masked="•••• 4521" state="pending" />
```
