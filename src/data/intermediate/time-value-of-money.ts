import type { Quiz } from "../types";

export const timeValueOfMoneyQuiz: Quiz = {
  key: "time-value-of-money",
  title: "Time Value of Money",
  subtitle: "Time Value of Money",
  discipline: "intermediate",
  course: "intermediate",
  questions: [
    {
      id: "5043",
      prompt: `Young Co. issues $800,000 of 10% bonds dated January 1, Year 1. Interest is payable semiannually on June 30 and December 31. The bonds mature in five years. The current market for similar bonds is 8%. The entire issue is sold on the date of issue. The following values are given:

|
| Present value of ordinary annuity
| Present value of $1

| N = 10; i = 0.04
| 8.11090
| 0.67556

| N = 10; i = 0.05
| 7.72173
| 0.61391

What amount of proceeds on the sale of bonds should Young report?`,
      choices: [
        `$799,997`,
        `$815,564`,
        `$849,317`,
        `$864,884`,
      ],
      correctIndex: 3,
      explanation: `<h3 class="exp-title">Bond Pricing Analysis</h3><p>Situation Overview</p><p>Young Co. has issued $800,000 of 10% bonds with semiannual interest payments. We need to determine the proceeds from the bond sale when market interest rate is 8%.</p><p>Key Information</p><p>Bond face value: $800,000</p><p>Stated interest rate: 10% annually (5% semiannually)</p><p>Market interest rate: 8% annually (4% semiannually)</p><p>Term: 5 years (10 semiannual periods)</p><p>Interest payment: Semiannual (June 30 and December 31)</p><p>Calculation Analysis</p><p>Since the market interest rate (8%) is lower than the stated rate (10%), the bonds will sell at a premium.</p><p>To calculate the bond price, we need to find the present value of:</p><p>The semiannual interest payments</p><p>The principal payment at maturity</p><p>Step 1: Calculate the present value of interest payments</p><p>Semiannual interest payment = $800,000 × 10% ÷ 2 = $40,000</p><p>Present value of annuity = $40,000 × 8.11090 = $324,436</p><p>Step 2: Calculate the present value of the principal</p><p>Present value of principal = $800,000 × 0.67556 = $540,448</p><p>Step 3: Total bond price</p><p>Bond price = $324,436 + $540,448 = $864,884</p><p>Journal Entry</p><p>Account<br>Debit<br>Credit</p><p>| Cash<br>| $864,884<br>|</p><p>| Bonds Payable<br>|<br>| $800,000</p><p>| Premium on Bonds Payable<br>|<br>| $64,884</p><p>Answer Evaluation</p><p>$799,997 - Incorrect</p><p>$815,564 - Incorrect</p><p>$849,317 - Incorrect</p><p>$864,884 - Correct ✓</p><p>Summary</p><p>The proceeds from the bond sale are $864,884. When the market interest rate (8%) is lower than the stated rate (10%), the bonds sell at a premium. The premium of $64,884 will be amortized over the 5-year life of the bonds, reducing interest expense each period.</p>`,
    },
    {
      id: "8600",
      prompt: `The following information pertains to Camp Corp.'s issuance of bonds on July 1:

Face amount: $800,000

Term: 10 years

Stated interest rate: 6%

Interest payment dates: Annually on July 1

Yield: 9%

The present value factors are as follows:

At 6%: Present value of $1 for 10 periods = 0.558; Future value of $1 for 10 periods = 1.791; Present value of an ordinary annuity of $1 for 10 periods = 7.360

At 9%: Present value of $1 for 10 periods = 0.422; Future value of $1 for 10 periods = 2.367; Present value of an ordinary annuity of $1 for 10 periods = 6.418

What should be the issue price for each $1,000 bond?`,
      choices: [
        `$1,000`,
        `$864`,
        `$807`,
        `$700`,
      ],
      correctIndex: 2,
      explanation: `Bond Pricing at a Discount

Correct Answer

$807 per $1,000 bond

Bond Pricing Calculation Breakdown

When bonds are issued at a discount (stated rate < market yield):

Present value of principal: $422 ($1,000 × 0.422)

Present value of interest payments: $385 ($60 annual interest × 6.418)

Issue price = $807 per $1,000 bond

Why This Works

The bond is priced at a discount because the stated interest rate (6%) is lower than the market yield (9%). Investors require higher returns than what the coupon offers, resulting in a price below face value.

Bond Components

Principal component: $1,000 to be received in 10 years, discounted at 9%

Interest component: $60 annual payment (6% of $1,000) for 10 years, discounted at 9%

Journal Entry at Issuance

Account
Debit
Credit

| Cash
| 807,000
|

| Discount on Bonds Payable
| 193,000
|

| Bonds Payable
|
| 1,000,000

Amortization of Discount

Over the 10-year life of the bond, the $193,000 discount will be amortized using the effective interest method, increasing interest expense beyond the coupon payments.

Summary of Bond Pricing Fundamentals

When stated rate < market yield: Bond issued at a discount (below par)

When stated rate = market yield: Bond issued at par

When stated rate > market yield: Bond issued at a premium (above par)`,
    },
    {
      id: "8601",
      prompt: `Grant Co. issued $500,000 face-value, five-year, 8% bonds on December 31, Year 1. The bonds pay interest annually, and were sold to yield 7%. Present value factors are as follows:

At 7%: Present value of $1 for five periods = 0.712986; Present value of an ordinary annuity of $1 for five periods = 4.100197; Present value of an annuity due of $1 for five periods = 4.387211

At 8%: Present value of $1 for five periods = 0.680583; Present value of an ordinary annuity of $1 for five periods = 3.992710; Present value of an annuity due of $1 for five periods = 4.312127

What amount of long-term liability should Grant report on December 31, Year 1, for this sale?`,
      choices: [
        `$500,000`,
        `$512,777`,
        `$520,501`,
        `$531,981`,
      ],
      correctIndex: 2,
      explanation: `<h3 class="exp-title">Bond Valuation at Premium</h3><p>Correct Answer: $520,501</p><p>The bonds were issued at a premium because the stated rate (8%) is higher than the market yield rate (7%).</p><p>Explanation</p><p>When bonds are issued, their value is determined by the present value of all future cash flows:</p><p>Present value of the principal amount to be paid at maturity</p><p>Present value of all interest payments over the life of the bond</p><p>Calculation</p><p>Bond Face Value: $500,000</p><p>Annual Interest Payment: $500,000 × 8% = $40,000</p><p>Market Yield Rate: 7%</p><p>Value of Bond = PV of Principal + PV of Interest Payments</p><p>PV of Principal = $500,000 × 0.712986 = $356,493</p><p>PV of Interest Payments = $40,000 × 4.100197 = $164,008</p><p>Total Bond Value = $356,493 + $164,008 = $520,501</p><p>Journal Entry at Issuance</p><p>Account<br>Debit<br>Credit</p><p>| Cash<br>| $520,501<br>|</p><p>| Bonds Payable<br>|<br>| $500,000</p><p>| Premium on Bonds Payable<br>|<br>| $20,501</p><p>Analysis of Answer Options</p><p>$500,000</p><p>Incorrect. This is just the face value without considering the premium.</p><p>$512,777</p><p>Incorrect. This amount doesn&#x27;t match the proper bond valuation.</p><p>$520,501</p><p>Correct. This represents the present value of all future cash flows.</p><p>$531,981</p><p>Incorrect. This amount is too high.</p><p>Summary</p><p>Grant Co. should report a long-term liability of $520,501 on December 31, Year 1. This consists of:</p><p>Bonds Payable (face value): $500,000</p><p>Premium on Bonds Payable: $20,501</p><p>The premium exists because the stated interest rate (8%) exceeds the market yield rate (7%), making the bonds more attractive to investors.</p>`,
    },
  ],
};
