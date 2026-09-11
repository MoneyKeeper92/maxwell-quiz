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
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family: Arial, Helvetica, sans-serif; overflow:hidden"><div style="background-color:#01506e; border-radius:8px 8px 0 0; color:white; padding:20px"><h1 style="color:white; margin:0">Bond Pricing Analysis</h1></div><div style="background-color:white; padding:20px"><div style="background-color:#f9f9f9; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px"><h3 style="color:#01506e; margin:0 0 12px 0">Correct Answer</h3><p style="margin:0"><span style="color:#4caf50; font-weight:bold">✓</span> <span style="color:#4caf50; font-weight:bold">$864,884</span></p></div><div style="background-color:#f0f7fa; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px"><h3 style="color:#01506e; margin:0 0 12px 0">Situation Overview</h3><p style="margin:0">Young Co. has issued $800,000 of 10% bonds with semiannual interest payments. We need to determine the proceeds from the bond sale when market interest rate is 8%.</p></div><div style="background-color:#f9f9f9; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px"><h3 style="color:#01506e; margin:0 0 12px 0">Key Information</h3><ul style="margin:0 0 12px 0; padding-left:22px"><li style="margin:0 0 8px 0">Bond face value: $800,000</li><li style="margin:0 0 8px 0">Stated interest rate: 10% annually (5% semiannually)</li><li style="margin:0 0 8px 0">Market interest rate: 8% annually (4% semiannually)</li><li style="margin:0 0 8px 0">Term: 5 years (10 semiannual periods)</li><li style="margin:0 0 8px 0">Interest payment: Semiannual (June 30 and December 31)</li><li style="margin:0 0 8px 0">Calculation Analysis</li></ul><p style="margin:0">Since the market interest rate (8%) is lower than the stated rate (10%), the bonds will sell at a premium.</p><ul style="margin:0 0 12px 0; padding-left:22px"><li style="margin:0 0 8px 0">To calculate the bond price, we need to find the present value of:</li><li style="margin:0 0 8px 0">The semiannual interest payments</li><li style="margin:0 0 8px 0">The principal payment at maturity</li></ul></div><div style="background-color:#f0f8ff; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:20px"><div style="color:#01506e; font-size:1.05em; font-weight:bold; margin-bottom:12px">Step 1: Calculate the present value of interest payments</div><div style="background-color:white; border:1px solid #dddddd; border-radius:5px; font-family:monospace; margin:0 0 12px 0; padding:12px; text-align:center"><strong>Semiannual interest payment = $800,000 × 10% ÷ 2 = $40,000</strong></div><div style="background-color:white; border:1px solid #dddddd; border-radius:5px; font-family:monospace; margin:0 0 12px 0; padding:12px; text-align:center"><strong>Present value of annuity = $40,000 × 8.11090 = $324,436</strong></div></div><div style="background-color:#f0f8ff; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:20px"><div style="color:#01506e; font-size:1.05em; font-weight:bold; margin-bottom:12px">Step 2: Calculate the present value of the principal</div><div style="background-color:white; border:1px solid #dddddd; border-radius:5px; font-family:monospace; margin:0 0 12px 0; padding:12px; text-align:center"><strong>Present value of principal = $800,000 × 0.67556 = $540,448</strong></div></div><div style="background-color:#f0f8ff; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:20px"><div style="color:#01506e; font-size:1.05em; font-weight:bold; margin-bottom:12px">Step 3: Total bond price</div><div style="background-color:white; border:1px solid #dddddd; border-radius:5px; font-family:monospace; margin:0 0 12px 0; padding:12px; text-align:center"><strong>Bond price = $324,436 + $540,448 = $864,884</strong></div></div><div style="background-color:#01506e; border-radius:0 0 8px 8px; color:white; padding:15px"><h3 style="color:white; margin:0 0 12px 0">Summary</h3><p style="margin:0">The proceeds from the bond sale are $864,884. When the market interest rate (8%) is lower than the stated rate (10%), the bonds sell at a premium. The premium of $64,884 will be amortized over the 5-year life of the bonds, reducing interest expense each period.</p></div></div></div>`,
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
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family: Arial, Helvetica, sans-serif; overflow:hidden"><div style="background-color:#01506e; border-radius:8px 8px 0 0; color:white; padding:20px"><h1 style="color:white; margin:0">Bond Pricing at a Discount</h1></div><div style="background-color:white; padding:20px"><div style="background-color:#f9f9f9; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px"><h3 style="color:#01506e; margin:0 0 12px 0">Correct Answer</h3><p style="margin:0"><span style="color:#4caf50; font-weight:bold">✓</span> <span style="color:#4caf50; font-weight:bold">$807</span></p></div><div style="background-color:#f0f7fa; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px"><h3 style="color:#01506e; margin:0 0 12px 0">Why This Works</h3><p style="margin:0">The bond is priced at a discount because the stated interest rate (6%) is lower than the market yield (9%). Investors require higher returns than what the coupon offers, resulting in a price below face value.</p><ul style="margin:0 0 12px 0; padding-left:22px"><li style="margin:0 0 8px 0">Bond Components</li><li style="margin:0 0 8px 0">Principal component: $1,000 to be received in 10 years, discounted at 9%</li><li style="margin:0 0 8px 0">Interest component: $60 annual payment (6% of $1,000) for 10 years, discounted at 9%</li><li style="margin:0 0 8px 0">Journal Entry at Issuance</li></ul></div><div style="background-color:#f9f9f9; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px"><h3 style="color:#01506e; margin:0 0 12px 0">Amortization of Discount</h3><p style="margin:0">Over the 10-year life of the bond, the $193,000 discount will be amortized using the effective interest method, increasing interest expense beyond the coupon payments.</p><ul style="margin:0 0 12px 0; padding-left:22px"><li style="margin:0 0 8px 0">Summary of Bond Pricing Fundamentals</li><li style="margin:0 0 8px 0">When stated rate &lt; market yield: Bond issued at a discount (below par)</li><li style="margin:0 0 8px 0">When stated rate = market yield: Bond issued at par</li><li style="margin:0 0 8px 0">When stated rate &gt; market yield: Bond issued at a premium (above par)</li></ul></div></div></div>`,
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
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family: Arial, Helvetica, sans-serif; overflow:hidden"><div style="background-color:#01506e; border-radius:8px 8px 0 0; color:white; padding:20px"><h1 style="color:white; margin:0">Bond Valuation at Premium</h1></div><div style="background-color:white; padding:20px"><div style="background-color:#f9f9f9; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px"><h3 style="color:#01506e; margin:0 0 12px 0">Correct Answer</h3><p style="margin:0"><span style="color:#4caf50; font-weight:bold">✓</span> <span style="color:#4caf50; font-weight:bold">$520,501</span></p></div><div style="background-color:#f0f7fa; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px"><p style="margin:0">The bonds were issued at a premium because the stated rate (8%) is higher than the market yield rate (7%).</p></div><div style="background-color:#f9f9f9; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px"><h3 style="color:#01506e; margin:0 0 12px 0">Explanation</h3><ul style="margin:0 0 12px 0; padding-left:22px"><li style="margin:0 0 8px 0">When bonds are issued, their value is determined by the present value of all future cash flows:</li><li style="margin:0 0 8px 0">Present value of the principal amount to be paid at maturity</li><li style="margin:0 0 8px 0">Present value of all interest payments over the life of the bond</li></ul></div><div style="background-color:#f5f9fc; border-left:5px solid #207bb5; border-radius:8px; margin-bottom:20px; padding:15px"><h3 style="color:#01506e; margin:0 0 12px 0">Calculation</h3><p style="margin:0">Bond Face Value: $500,000</p><div style="background-color:white; border:1px solid #dddddd; border-radius:5px; font-family:monospace; margin:0 0 12px 0; padding:12px; text-align:center"><strong>Annual Interest Payment: $500,000 × 8% = $40,000</strong></div><ul style="margin:0 0 12px 0; padding-left:22px"><li style="margin:0 0 8px 0">Market Yield Rate: 7%</li><li style="margin:0 0 8px 0">Value of Bond = PV of Principal + PV of Interest Payments</li></ul><div style="background-color:white; border:1px solid #dddddd; border-radius:5px; font-family:monospace; margin:0 0 12px 0; padding:12px; text-align:center"><strong>PV of Principal = $500,000 × 0.712986 = $356,493</strong></div><div style="background-color:white; border:1px solid #dddddd; border-radius:5px; font-family:monospace; margin:0 0 12px 0; padding:12px; text-align:center"><strong>PV of Interest Payments = $40,000 × 4.100197 = $164,008</strong></div><div style="background-color:white; border:1px solid #dddddd; border-radius:5px; font-family:monospace; margin:0 0 12px 0; padding:12px; text-align:center"><strong>Total Bond Value = $356,493 + $164,008 = $520,501</strong></div></div><div style="background-color:#01506e; border-radius:0 0 8px 8px; color:white; padding:15px"><h3 style="color:white; margin:0 0 12px 0">Summary</h3><ul style="margin:0 0 12px 0; padding-left:22px"><li style="margin:0 0 8px 0">Grant Co. should report a long-term liability of $520,501 on December 31, Year 1. This consists of:</li><li style="margin:0 0 8px 0">Bonds Payable (face value): $500,000</li><li style="margin:0 0 8px 0">Premium on Bonds Payable: $20,501</li></ul><p style="margin:0">The premium exists because the stated interest rate (8%) exceeds the market yield rate (7%), making the bonds more attractive to investors.</p></div></div></div>`,
    },
  ],
};
