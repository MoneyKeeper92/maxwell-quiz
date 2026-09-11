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

Present value of ordinary annuity
Present value of $1

N = 10; i = 0.04
8.11090
0.67556

N = 10; i = 0.05
7.72173
0.61391

What amount of proceeds on the sale of bonds should Young report?`,
      promptHtml: `<p style="margin:0 0 12px 0">Young Co. issues $800,000 of 10% bonds dated January 1, Year 1. Interest is payable semiannually on June 30 and December 31. The bonds mature in five years. The current market for similar bonds is 8%. The entire issue is sold on the date of issue. The following values are given:</p><table cellspacing="0" style="border-collapse:collapse; margin-top:15px; width:100%"><thead><tr><th style="border-bottom:2px solid #01506e; padding:10px; text-align:left"></th><th style="border-bottom:2px solid #01506e; padding:10px; text-align:left">Present value of ordinary annuity</th><th style="border-bottom:2px solid #01506e; padding:10px; text-align:left">Present value of $1</th></tr></thead><tbody><tr><td style="border-bottom:1px solid #dddddd; padding:10px">N = 10; i = 0.04</td><td style="border-bottom:1px solid #dddddd; padding:10px">8.11090</td><td style="border-bottom:1px solid #dddddd; padding:10px">0.67556</td></tr><tr><td style="border-bottom:1px solid #dddddd; padding:10px">N = 10; i = 0.05</td><td style="border-bottom:1px solid #dddddd; padding:10px">7.72173</td><td style="border-bottom:1px solid #dddddd; padding:10px">0.61391</td></tr></tbody></table><p style="margin:0 0 12px 0">What amount of proceeds on the sale of bonds should Young report?</p>`,
      choices: [
        `$799,997`,
        `$815,564`,
        `$849,317`,
        `$864,884`,
      ],
      correctIndex: 3,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family: Arial, Helvetica, sans-serif; overflow:hidden"><div style="background-color:#01506e; border-radius:8px 8px 0 0; color:white; padding:20px"><h1 style="color:white; margin:0">Bond Pricing Analysis</h1></div><div style="background-color:white; padding:20px"><div style="background-color:#f9f9f9; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px"><h3 style="color:#01506e; margin:0 0 12px 0">Correct Answer</h3><p style="margin:0"><span style="color:#4caf50; font-weight:bold">✓</span> <span style="color:#4caf50; font-weight:bold">$864,884</span></p></div><div style="background-color:#f0f7fa; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px"><h3 style="color:#01506e; margin:0 0 12px 0">Situation Overview</h3><p style="margin:0">Young Co. has issued $800,000 of 10% bonds with semiannual interest payments. We need to determine the proceeds from the bond sale when market interest rate is 8%.</p></div><div style="background-color:#f9f9f9; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px"><h3 style="color:#01506e; margin:0 0 12px 0">Key Information</h3><ul style="margin:0 0 12px 0; padding-left:22px"><li style="margin:0 0 8px 0">Bond face value: $800,000</li><li style="margin:0 0 8px 0">Stated interest rate: 10% annually (5% semiannually)</li><li style="margin:0 0 8px 0">Market interest rate: 8% annually (4% semiannually)</li><li style="margin:0 0 8px 0">Term: 5 years (10 semiannual periods)</li><li style="margin:0 0 8px 0">Interest payment: Semiannual (June 30 and December 31)</li><li style="margin:0 0 8px 0">Calculation Analysis</li></ul><p style="margin:0">Since the market interest rate (8%) is lower than the stated rate (10%), the bonds will sell at a premium.</p><p style="margin:0">To calculate the bond price, we need to find the present value of:</p><ul style="margin:0 0 12px 0; padding-left:22px"><li style="margin:0 0 8px 0">The semiannual interest payments</li><li style="margin:0 0 8px 0">The principal payment at maturity</li></ul></div><div style="background-color:#f0f8ff; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:20px"><div style="color:#01506e; font-size:1.05em; font-weight:bold; margin-bottom:12px">Step 1: Calculate the present value of interest payments</div><div style="background-color:white; border:1px solid #dddddd; border-radius:5px; font-family:monospace; margin:0 0 12px 0; padding:12px; text-align:center"><strong>Semiannual interest payment = $800,000 × 10% ÷ 2 = $40,000</strong></div><div style="background-color:white; border:1px solid #dddddd; border-radius:5px; font-family:monospace; margin:0 0 12px 0; padding:12px; text-align:center"><strong>Present value of annuity = $40,000 × 8.11090 = $324,436</strong></div></div><div style="background-color:#f0f8ff; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:20px"><div style="color:#01506e; font-size:1.05em; font-weight:bold; margin-bottom:12px">Step 2: Calculate the present value of the principal</div><div style="background-color:white; border:1px solid #dddddd; border-radius:5px; font-family:monospace; margin:0 0 12px 0; padding:12px; text-align:center"><strong>Present value of principal = $800,000 × 0.67556 = $540,448</strong></div></div><div style="background-color:#f0f8ff; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:20px"><div style="color:#01506e; font-size:1.05em; font-weight:bold; margin-bottom:12px">Step 3: Total bond price</div><div style="background-color:white; border:1px solid #dddddd; border-radius:5px; font-family:monospace; margin:0 0 12px 0; padding:12px; text-align:center"><strong>Bond price = $324,436 + $540,448 = $864,884</strong></div></div><div style="background-color:#01506e; border-radius:0 0 8px 8px; color:white; padding:15px"><h3 style="color:white; margin:0 0 12px 0">Summary</h3><p style="margin:0">The proceeds from the bond sale are $864,884. When the market interest rate (8%) is lower than the stated rate (10%), the bonds sell at a premium. The premium of $64,884 will be amortized over the 5-year life of the bonds, reducing interest expense each period.</p></div></div></div>`,
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
      promptHtml: `<p style="margin:0 0 12px 0">The following information pertains to Camp Corp.&#x27;s issuance of bonds on July 1:</p><ul style="margin:0 0 12px 0; padding-left:22px"><li style="margin:0 0 8px 0">Face amount: $800,000</li><li style="margin:0 0 8px 0">Term: 10 years</li><li style="margin:0 0 8px 0">Stated interest rate: 6%</li><li style="margin:0 0 8px 0">Interest payment dates: Annually on July 1</li><li style="margin:0 0 8px 0">Yield: 9%</li></ul><p style="margin:0 0 12px 0">The present value factors are as follows:</p><ul style="margin:0 0 12px 0; padding-left:22px"><li style="margin:0 0 8px 0">At 6%: Present value of $1 for 10 periods = 0.558; Future value of $1 for 10 periods = 1.791; Present value of an ordinary annuity of $1 for 10 periods = 7.360</li><li style="margin:0 0 8px 0">At 9%: Present value of $1 for 10 periods = 0.422; Future value of $1 for 10 periods = 2.367; Present value of an ordinary annuity of $1 for 10 periods = 6.418</li></ul><p style="margin:0 0 12px 0">What should be the issue price for each $1,000 bond?</p>`,
      choices: [
        `$1,000`,
        `$864`,
        `$807`,
        `$700`,
      ],
      correctIndex: 2,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family: Arial, Helvetica, sans-serif; overflow:hidden"><div style="background-color:#01506e; border-radius:8px 8px 0 0; color:white; padding:20px"><h1 style="color:white; margin:0">Bond Pricing at a Discount</h1></div><div style="background-color:white; padding:20px"><div style="background-color:#f9f9f9; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px"><h3 style="color:#01506e; margin:0 0 12px 0">Correct Answer</h3><p style="margin:0"><span style="color:#4caf50; font-weight:bold">✓</span> <span style="color:#4caf50; font-weight:bold">$807</span></p></div><div style="background-color:#f0f7fa; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px"><h3 style="color:#01506e; margin:0 0 12px 0">Why This Works</h3><p style="margin:0">The bond is priced at a discount because the stated interest rate (6%) is lower than the market yield (9%). Investors require higher returns than what the coupon offers, resulting in a price below face value.</p><ul style="margin:0 0 12px 0; padding-left:22px"><li style="margin:0 0 8px 0">Bond Components</li><li style="margin:0 0 8px 0">Principal component: $1,000 to be received in 10 years, discounted at 9%</li><li style="margin:0 0 8px 0">Interest component: $60 annual payment (6% of $1,000) for 10 years, discounted at 9%</li></ul></div><div style="background-color:#f9f9f9; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px"><h3 style="color:#01506e; margin:0 0 12px 0">Amortization of Discount</h3><p style="margin:0">Over the 10-year life of the bond, the $193,000 discount will be amortized using the effective interest method, increasing interest expense beyond the coupon payments.</p><ul style="margin:0 0 12px 0; padding-left:22px"><li style="margin:0 0 8px 0">Summary of Bond Pricing Fundamentals</li><li style="margin:0 0 8px 0">When stated rate &lt; market yield: Bond issued at a discount (below par)</li><li style="margin:0 0 8px 0">When stated rate = market yield: Bond issued at par</li><li style="margin:0 0 8px 0">When stated rate &gt; market yield: Bond issued at a premium (above par)</li></ul></div></div></div>`,
    },
    {
      id: "8601",
      prompt: `Grant Co. issued $500,000 face-value, five-year, 8% bonds on December 31, Year 1. The bonds pay interest annually, and were sold to yield 7%. Present value factors are as follows:

At 7%: Present value of $1 for five periods = 0.712986; Present value of an ordinary annuity of $1 for five periods = 4.100197; Present value of an annuity due of $1 for five periods = 4.387211

At 8%: Present value of $1 for five periods = 0.680583; Present value of an ordinary annuity of $1 for five periods = 3.992710; Present value of an annuity due of $1 for five periods = 4.312127

What amount of long-term liability should Grant report on December 31, Year 1, for this sale?`,
      promptHtml: `<p style="margin:0 0 12px 0">Grant Co. issued $500,000 face-value, five-year, 8% bonds on December 31, Year 1. The bonds pay interest annually, and were sold to yield 7%. Present value factors are as follows:</p><ul style="margin:0 0 12px 0; padding-left:22px"><li style="margin:0 0 8px 0">At 7%: Present value of $1 for five periods = 0.712986; Present value of an ordinary annuity of $1 for five periods = 4.100197; Present value of an annuity due of $1 for five periods = 4.387211</li><li style="margin:0 0 8px 0">At 8%: Present value of $1 for five periods = 0.680583; Present value of an ordinary annuity of $1 for five periods = 3.992710; Present value of an annuity due of $1 for five periods = 4.312127</li></ul><p style="margin:0 0 12px 0">What amount of long-term liability should Grant report on December 31, Year 1, for this sale?</p>`,
      choices: [
        `$500,000`,
        `$512,777`,
        `$520,501`,
        `$531,981`,
      ],
      correctIndex: 2,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family: Arial, Helvetica, sans-serif; overflow:hidden"><div style="background-color:#01506e; border-radius:8px 8px 0 0; color:white; padding:20px"><h1 style="color:white; margin:0">Bond Valuation at Premium</h1></div><div style="background-color:white; padding:20px"><div style="background-color:#f9f9f9; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px"><h3 style="color:#01506e; margin:0 0 12px 0">Correct Answer</h3><p style="margin:0"><span style="color:#4caf50; font-weight:bold">✓</span> <span style="color:#4caf50; font-weight:bold">$520,501</span></p></div><div style="background-color:#f0f7fa; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px"><p style="margin:0">The bonds were issued at a premium because the stated rate (8%) is higher than the market yield rate (7%).</p></div><div style="background-color:#f9f9f9; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px"><h3 style="color:#01506e; margin:0 0 12px 0">Explanation</h3><p style="margin:0">When bonds are issued, their value is determined by the present value of all future cash flows:</p><ul style="margin:0 0 12px 0; padding-left:22px"><li style="margin:0 0 8px 0">Present value of the principal amount to be paid at maturity</li><li style="margin:0 0 8px 0">Present value of all interest payments over the life of the bond</li></ul></div><div style="background-color:#f5f9fc; border-left:5px solid #207bb5; border-radius:8px; margin-bottom:20px; padding:15px"><h3 style="color:#01506e; margin:0 0 12px 0">Calculation</h3><p style="margin:0">Bond Face Value: $500,000</p><div style="background-color:white; border:1px solid #dddddd; border-radius:5px; font-family:monospace; margin:0 0 12px 0; padding:12px; text-align:center"><strong>Annual Interest Payment: $500,000 × 8% = $40,000</strong></div><ul style="margin:0 0 12px 0; padding-left:22px"><li style="margin:0 0 8px 0">Market Yield Rate: 7%</li><li style="margin:0 0 8px 0">Value of Bond = PV of Principal + PV of Interest Payments</li></ul><div style="background-color:white; border:1px solid #dddddd; border-radius:5px; font-family:monospace; margin:0 0 12px 0; padding:12px; text-align:center"><strong>PV of Principal = $500,000 × 0.712986 = $356,493</strong></div><div style="background-color:white; border:1px solid #dddddd; border-radius:5px; font-family:monospace; margin:0 0 12px 0; padding:12px; text-align:center"><strong>PV of Interest Payments = $40,000 × 4.100197 = $164,008</strong></div><div style="background-color:white; border:1px solid #dddddd; border-radius:5px; font-family:monospace; margin:0 0 12px 0; padding:12px; text-align:center"><strong>Total Bond Value = $356,493 + $164,008 = $520,501</strong></div></div><div style="background-color:#01506e; border-radius:0 0 8px 8px; color:white; padding:15px"><h3 style="color:white; margin:0 0 12px 0">Summary</h3><p style="margin:0">Grant Co. should report a long-term liability of $520,501 on December 31, Year 1. This consists of:</p><ul style="margin:0 0 12px 0; padding-left:22px"><li style="margin:0 0 8px 0">Bonds Payable (face value): $500,000</li><li style="margin:0 0 8px 0">Premium on Bonds Payable: $20,501</li></ul><p style="margin:0">The premium exists because the stated interest rate (8%) exceeds the market yield rate (7%), making the bonds more attractive to investors.</p></div></div></div>`,
    },
    {
      id: "IA-TVM-01",
      prompt: `Hartwell Company invests $20,000 today in a savings account that earns 6% interest compounded annually. How much will the account be worth at the end of 4 years?

FV of $1 factor (6%, 4 periods): 1.26248`,
      choices: [
        `$25,250`,
        `$24,800`,
        `$20,000`,
        `$24,000`,
      ],
      correctIndex: 0,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family: Arial, Helvetica, sans-serif; overflow:hidden"><div style="background-color:#01506e; border-radius:8px 8px 0 0; color:white; padding:20px"><h1 style="color:white; margin:0">Time Value of Money</h1></div><div style="background-color:white; padding:20px"><div style="background-color:#f9f9f9; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px"><h3 style="color:#01506e; margin:0 0 12px 0">Correct Answer</h3><p style="margin:0"><span style="color:#4caf50; font-weight:bold">✓</span> <span style="color:#4caf50; font-weight:bold">$25,250</span></p></div><div style="background-color:#f0f7fa; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px"><div style="background-color:white; border:1px solid #dddddd; border-radius:5px; font-family:monospace; margin:0 0 12px 0; padding:12px; text-align:center"><strong>The future value of a single lump sum is calculated by multiplying the present amount by the FV of $1 factor: $20,000 × 1.26248 = $25,249.60, which rounds to $25,250 (Option A).</strong></div><div style="background-color:white; border:1px solid #dddddd; border-radius:5px; font-family:monospace; margin:0 0 12px 0; padding:12px; text-align:center"><strong>Option B ($24,800) is wrong because it applies simple interest for 4 years rather than compounding: $20,000 × 0.06 × 4 = $4,800 of interest, giving $20,000 + $4,800 = $24,800. This ignores the compounding of interest on interest.</strong></div><p style="margin:0">Option C ($20,000) is wrong because it returns only the original principal with no growth applied: a fundamental conceptual error.</p><div style="background-color:white; border:1px solid #dddddd; border-radius:5px; font-family:monospace; margin:0 0 12px 0; padding:12px; text-align:center"><strong>Option D ($24,000) is wrong because it appears to apply a flat 20% total return (perhaps mistakenly using 5% × 4 years instead of 6% × 4 years under simple interest): $20,000 × 1.20 = $24,000. Neither the rate nor the compounding convention matches the problem.</strong></div></div></div></div>`,
    },
    {
      id: "IA-TVM-02",
      prompt: `Meridian Company will receive $50,000 in 5 years. The appropriate discount rate is 8% compounded annually. What is the present value of this future receipt today?

PV of $1 factor (8%, 5 periods): 0.68058`,
      choices: [
        `$34,029`,
        `$50,000`,
        `$46,000`,
        `$32,000`,
      ],
      correctIndex: 0,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family: Arial, Helvetica, sans-serif; overflow:hidden"><div style="background-color:#01506e; border-radius:8px 8px 0 0; color:white; padding:20px"><h1 style="color:white; margin:0">Time Value of Money</h1></div><div style="background-color:white; padding:20px"><div style="background-color:#f9f9f9; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px"><h3 style="color:#01506e; margin:0 0 12px 0">Correct Answer</h3><p style="margin:0"><span style="color:#4caf50; font-weight:bold">✓</span> <span style="color:#4caf50; font-weight:bold">$34,029</span></p></div><div style="background-color:#f0f7fa; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px"><div style="background-color:white; border:1px solid #dddddd; border-radius:5px; font-family:monospace; margin:0 0 12px 0; padding:12px; text-align:center"><strong>The present value of a single future amount is the future amount multiplied by the PV of $1 factor. $50,000 × 0.68058 = $34,029. Option B is wrong because it ignores discounting entirely and returns the undiscounted future amount. Option C is wrong because it subtracts only one period of simple interest ($50,000 × 8% × 1 = $4,000), which is not the correct discounting method. Option D is wrong because it uses a rough simple-interest deduction over all five periods ($50,000 − $50,000 × 8% × 5 = $30,000 is closer, but $32,000 reflects an arbitrary approximation that ignores compound discounting).</strong></div></div></div></div>`,
    },
    {
      id: "IA-TVM-03",
      prompt: `Two payment streams both consist of $5,000 per year for 6 years at a discount rate of 7%. Stream A payments occur at the end of each year (ordinary annuity). Stream B payments occur at the beginning of each year (annuity due). Which statement is correct?`,
      choices: [
        `Stream B has a higher present value because each payment is discounted for one fewer period.`,
        `Stream A has a higher present value because the payments last one additional period.`,
        `Both streams have the same present value because the total cash paid is identical.`,
        `Stream B has a lower present value because beginning-of-period payments carry more risk.`,
      ],
      correctIndex: 0,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family: Arial, Helvetica, sans-serif; overflow:hidden"><div style="background-color:#01506e; border-radius:8px 8px 0 0; color:white; padding:20px"><h1 style="color:white; margin:0">Time Value of Money</h1></div><div style="background-color:white; padding:20px"><div style="background-color:#f9f9f9; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px"><h3 style="color:#01506e; margin:0 0 12px 0">Correct Answer</h3><p style="margin:0"><span style="color:#4caf50; font-weight:bold">✓</span> <span style="color:#4caf50; font-weight:bold">Stream B has a higher present value because each payment is discounted for one fewer period.</span></p></div><div style="background-color:#f0f7fa; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px"><p style="margin:0">An annuity due (Stream B) has a higher present value than an otherwise identical ordinary annuity (Stream A) because each payment arrives one period earlier. Discounting each payment for one fewer period produces a larger present value. The annuity-due PV factor equals the ordinary-annuity PV factor multiplied by (1 + i). Option B is wrong because both streams contain the same number of payments; ordinary annuity payments are not spread over an extra period. Option C is wrong because timing differences cause present values to differ even when total cash is equal. Option D is wrong because receiving money sooner: not later: reduces discounting and increases present value; it has nothing to do with risk.</p></div></div></div>`,
    },
    {
      id: "IA-TVM-04",
      prompt: `Each year for 5 years, Oakdale Company deposits $8,000 into a fund at the end of the year. The fund earns 5% interest compounded annually. What is the total accumulated balance in the fund at the end of Year 5?

FV of ordinary annuity of $1 factor (5%, 5 periods): 5.52563`,
      choices: [
        `$44,205`,
        `$40,000`,
        `$42,000`,
        `$46,000`,
      ],
      correctIndex: 0,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family: Arial, Helvetica, sans-serif; overflow:hidden"><div style="background-color:#01506e; border-radius:8px 8px 0 0; color:white; padding:20px"><h1 style="color:white; margin:0">Time Value of Money</h1></div><div style="background-color:white; padding:20px"><div style="background-color:#f9f9f9; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px"><h3 style="color:#01506e; margin:0 0 12px 0">Correct Answer</h3><p style="margin:0"><span style="color:#4caf50; font-weight:bold">✓</span> <span style="color:#4caf50; font-weight:bold">$44,205</span></p></div><div style="background-color:#f0f7fa; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px"><div style="background-color:white; border:1px solid #dddddd; border-radius:5px; font-family:monospace; margin:0 0 12px 0; padding:12px; text-align:center"><strong>The future value of an ordinary annuity equals the periodic payment multiplied by the FV of ordinary annuity factor. $8,000 × 5.52563 = $44,205.04, which rounds to $44,205. Option B is wrong because it sums only the deposits without adding any interest ($8,000 × 5 = $40,000). Option C is wrong because it adds a rough, understated interest estimate to the total deposits. Option D is wrong because it overstates the interest by applying the full 5% rate to all deposits for all five years simultaneously, ignoring that early deposits earn interest for more years than later deposits.</strong></div></div></div></div>`,
    },
    {
      id: "IA-TVM-05",
      prompt: `Crestview Company wins a legal settlement that will pay $15,000 at the end of each year for 6 years. The appropriate discount rate is 9% per year. What is the present value of the settlement today?

PV of ordinary annuity of $1 factor (9%, 6 periods): 4.48592`,
      choices: [
        `$67,289`,
        `$90,000`,
        `$73,500`,
        `$62,000`,
      ],
      correctIndex: 0,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family: Arial, Helvetica, sans-serif; overflow:hidden"><div style="background-color:#01506e; border-radius:8px 8px 0 0; color:white; padding:20px"><h1 style="color:white; margin:0">Time Value of Money</h1></div><div style="background-color:white; padding:20px"><div style="background-color:#f9f9f9; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px"><h3 style="color:#01506e; margin:0 0 12px 0">Correct Answer</h3><p style="margin:0"><span style="color:#4caf50; font-weight:bold">✓</span> <span style="color:#4caf50; font-weight:bold">$67,289</span></p></div><div style="background-color:#f0f7fa; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px"><div style="background-color:white; border:1px solid #dddddd; border-radius:5px; font-family:monospace; margin:0 0 12px 0; padding:12px; text-align:center"><strong>The present value of an ordinary annuity equals the periodic payment multiplied by the PV of ordinary annuity factor. $15,000 × 4.48592 = $67,288.80, which rounds to $67,289. Option B is wrong because it sums the undiscounted payments ($15,000 × 6 = $90,000) without applying any discounting. Option C is wrong because it applies an incorrect, lower annuity factor, understating the number of periods or the factor. Option D is wrong because it uses a PV of a single-sum factor instead of an annuity factor, treating the entire $90,000 as one lump sum discounted at an arbitrary rate.</strong></div></div></div></div>`,
    },
    {
      id: "IA-TVM-07",
      prompt: `Ridgeway Company will need $40,000 in 3 years. The account earns 10% per year compounded semiannually. What amount must Ridgeway deposit today to accumulate $40,000 at the end of 3 years?

Factors for a single sum at 10% annually, 3 periods: 0.75131
Factors for a single sum at 5% semiannually, 6 periods: 0.74622`,
      choices: [
        `$29,849`,
        `$30,052`,
        `$40,000`,
        `$36,000`,
      ],
      correctIndex: 0,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family: Arial, Helvetica, sans-serif; overflow:hidden"><div style="background-color:#01506e; border-radius:8px 8px 0 0; color:white; padding:20px"><h1 style="color:white; margin:0">Time Value of Money</h1></div><div style="background-color:white; padding:20px"><div style="background-color:#f9f9f9; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px"><h3 style="color:#01506e; margin:0 0 12px 0">Correct Answer</h3><p style="margin:0"><span style="color:#4caf50; font-weight:bold">✓</span> <span style="color:#4caf50; font-weight:bold">$29,849</span></p></div><div style="background-color:#f0f7fa; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px"><div style="background-color:white; border:1px solid #dddddd; border-radius:5px; font-family:monospace; margin:0 0 12px 0; padding:12px; text-align:center"><strong>When compounding is semiannual, the periodic rate is the annual rate divided by 2 (10% / 2 = 5%) and the number of periods is years multiplied by 2 (3 × 2 = 6 periods). The correct PV factor is therefore the one at 5% for 6 periods: 0.74622. $40,000 × 0.74622 = $29,848.80, which rounds to $29,849. Option B is wrong because it uses the annual factor (10%, 3 periods: 0.75131), failing to adjust for semiannual compounding; $40,000 × 0.75131 = $30,052. Option C is wrong because it deposits the full future amount today with no discounting. Option D is wrong because it deducts only one period of simple interest ($40,000 × 10% = $4,000) from the future amount, which does not reflect proper discounting.</strong></div></div></div></div>`,
    },
    {
      id: "IA-TVM-06",
      prompt: `A company will pay $10,000 at the BEGINNING of each year for 4 years. The annual discount rate is 8%. The following factors are provided: PV of ordinary annuity of $1 (8%, 4 periods) = 3.31213; PV of annuity due of $1 (8%, 4 periods) = 3.57710; PV of $1 (8%, 4 periods) = 0.73503. What is the present value today of these four payments?`,
      choices: [
        `$33,121`,
        `$40,000`,
        `$35,771`,
        `$29,401`,
      ],
      correctIndex: 2,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family: Arial, Helvetica, sans-serif; overflow:hidden"><div style="background-color:#01506e; border-radius:8px 8px 0 0; color:white; padding:20px"><h1 style="color:white; margin:0">Time Value of Money</h1></div><div style="background-color:white; padding:20px"><div style="background-color:#f9f9f9; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px"><h3 style="color:#01506e; margin:0 0 12px 0">Correct Answer</h3><p style="margin:0"><span style="color:#4caf50; font-weight:bold">✓</span> <span style="color:#4caf50; font-weight:bold">$35,771</span></p></div><div style="background-color:#f0f7fa; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px"><div style="background-color:white; border:1px solid #dddddd; border-radius:5px; font-family:monospace; margin:0 0 12px 0; padding:12px; text-align:center"><strong>Because payments are made at the BEGINNING of each period, this is an annuity due. The correct factor to apply is the PV of annuity due of $1 (8%, 4 periods) = 3.57710. Correct calculation: $10,000 x 3.57710 = $35,771 (option C). Option A ($33,121) is wrong because it uses the ordinary annuity factor of 3.31213, which applies only when payments occur at the END of each period: $10,000 x 3.31213 = $33,121.30, rounded to $33,121. An ordinary annuity factor understates the present value here because it discounts each payment one period too many. Option B ($40,000) is wrong because it simply sums the four undiscounted payments ($10,000 x 4 = $40,000) and ignores the time value of money entirely. Option D ($29,401) is wrong because it treats the total undiscounted cash flow of $40,000 as a single lump sum received at the end of period 4 and applies the PV of $1 factor: $40,000 x 0.73503 = $29,401.20, rounded to $29,401. This approach incorrectly collapses four separate payments into one and applies a single-sum factor rather than an annuity factor.</strong></div></div></div></div>`,
    },
  ],
};
