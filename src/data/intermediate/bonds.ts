import type { Quiz } from "../types";

export const bondsQuiz: Quiz = {
  key: "bonds",
  title: "Bonds / Long-Term Debt",
  subtitle: "Bonds / Long-Term Debt",
  discipline: "intermediate",
  course: "intermediate",
  questions: [
    {
      id: "5045",
      prompt: `A company issues bonds at 98, with a maturity value of $50,000. The entry the company uses to record the original issue should include which of the following?`,
      choices: [
        `A debit to bond discount of $1,000.`,
        `A credit to bonds payable of $49,000.`,
        `A credit to bond premium of $1,000.`,
        `A debit to bonds payable of $50,000.`,
      ],
      correctIndex: 0,
      explanation: `<h3 class="exp-title">Bond Issuance at a Discount - Analysis</h3><p>Answer Analysis</p><p>The correct answer is: A debit to bond discount of $1,000</p><p>Explanation</p><p>When bonds are issued at a discount (less than face value), the difference between the issue price and face value is recorded as a Bond Discount. In this case:</p><p>Face/Maturity Value: $50,000</p><p>Issue Price: 98% of face value = 0.98 × $50,000 = $49,000</p><p>Discount Amount: $50,000 - $49,000 = $1,000</p><p>Journal Entry Analysis</p><p>The correct journal entry to record the bond issuance would be:</p><p>Account<br>Debit<br>Credit</p><p>| Cash<br>| $49,000<br>|</p><p>| Bond Discount<br>| $1,000<br>|</p><p>| Bonds Payable<br>|<br>| $50,000</p><p>Evaluation of Answer Choices</p><p>A debit to bond discount of $1,000 - ✓ CORRECT: The discount of $1,000 is debited to reflect the difference between face value and issue price.</p><p>A credit to bonds payable of $49,000 - ✗ INCORRECT: Bonds Payable should be credited for the face value ($50,000), not the issue price.</p><p>A credit to bond premium of $1,000 - ✗ INCORRECT: This is a discount situation, not a premium. A premium would occur if bonds were issued above face value.</p><p>A debit to bonds payable of $50,000 - ✗ INCORRECT: Bonds Payable should be credited, not debited, when bonds are issued.</p><p>Summary</p><p>When bonds are issued at a discount:</p><p>The company receives less cash than the face value of the bonds</p><p>Bonds Payable is recorded at face value (maturity value)</p><p>The difference is recorded as a Bond Discount (a contra-liability account)</p><p>The Bond Discount will be amortized over the life of the bond, gradually decreasing the discount</p><p>This accounting treatment properly reflects both the legal obligation to pay the full face value at maturity and the economic reality that the effective interest rate is higher than the stated rate.</p>`,
    },
    {
      id: "5053",
      prompt: `When debt is issued at a discount, interest expense over the term of debt equals the cash interest paid:`,
      choices: [
        `Minus discount.`,
        `Minus discount minus par value.`,
        `Plus discount.`,
        `Plus discount plus par value.`,
      ],
      correctIndex: 2,
      explanation: `<h3 class="exp-title">Debt Issued at a Discount: Interest Expense Analysis</h3><p>Key Concept</p><p>When debt is issued at a discount, the total interest expense includes both the cash interest paid AND the amortization of the discount.</p><p>Understanding Interest Expense with Discounted Debt</p><p>When bonds are issued at a discount (below face value), the actual interest expense is higher than just the cash interest payments. This is because the discount represents additional interest that must be recognized over the life of the bond.</p><p>The Correct Formula</p><p>Total Interest Expense = Cash Interest Paid + Discount Amortization</p><p>Analyzing the Answer Choices</p><p>Answer Choice<br>Analysis<br>Status</p><p>| Interest expense equals cash interest paid minus discount<br>| Incorrect. Interest expense should be more than cash paid, not less.<br>| ❌</p><p>| Interest expense equals cash interest paid minus discount minus par value<br>| Incorrect. Par value is not directly part of the interest expense calculation.<br>| ❌</p><p>| Interest expense equals cash interest paid plus discount<br>| Correct. Interest expense includes both cash paid and the amortized discount.<br>| ✓</p><p>| Interest expense equals cash interest paid plus discount plus par value<br>| Incorrect. Par value should not be added to interest expense.<br>| ❌</p><p>Journal Entries: Discount Bond Example</p><p>Let&#x27;s illustrate with an example of a 3-year, $10,000 bond issued at a discount of $300, with annual interest payments of $500.</p><p>At Issuance:</p><p>Account<br>Debit<br>Credit</p><p>| Cash<br>| $9,700<br>|</p><p>| Discount on Bonds Payable<br>| $300<br>|</p><p>| Bonds Payable<br>|<br>| $10,000</p><p>Annual Interest Payment (assuming straight-line amortization, $300 ÷ 3 years = $100 per year):</p><p>Account<br>Debit<br>Credit</p><p>| Interest Expense<br>| $600<br>|</p><p>| Discount on Bonds Payable<br>|<br>| $100</p><p>| Cash<br>|<br>| $500</p><p>Note: The $600 interest expense consists of $500 cash payment plus $100 amortization of the discount.</p><p>How Discount Amortization Works</p><p>When a bond is issued at a discount:</p><p>1. The issuer receives less cash than the face value (par value) of the bond.</p><p>2. The difference between face value and issue price is the discount.</p><p>3. This discount is amortized (allocated) over the life of the bond.</p><p>4. Amortizing a discount increases interest expense beyond the cash paid.</p><p>Summary</p><p>✓ Total Interest Expense = Cash Interest Paid + Discount Amortization</p><p>✓ Amortizing a discount increases interest expense</p><p>✓ The discount is systematically allocated over the bond&#x27;s life</p><p>✓ This accounting ensures the carrying value of the bond equals par value at maturity</p>`,
    },
    {
      id: "5063",
      prompt: `When the effective interest method of amortization is used for bonds issued at a discount, the amount of interest expense for an interest period is calculated by multiplying the:`,
      choices: [
        `Carrying value of the bonds at the beginning of the period by the effective interest rate`,
        `Face value of the bonds by the stated interest rate`,
        `Carrying value of the bonds at the end of the period by the effective interest rate`,
        `Face value of the bonds by the effective interest rate`,
      ],
      correctIndex: 0,
      explanation: `<h3 class="exp-title">Bond Amortization: Effective Interest Method</h3><p>Answer:</p><p>✓ Carrying value of the bonds at the beginning of the period by the effective interest rate</p><p>✗ Face value of the bonds by the stated interest rate</p><p>✗ Carrying value of the bonds at the end of the period by the effective interest rate</p><p>✗ Face value of the bonds by the effective interest rate</p><p>Explanation of Effective Interest Method</p><p>The effective interest method of bond amortization calculates interest expense by multiplying the carrying value (book value) of the bonds at the beginning of the period by the effective interest rate.</p><p>This method results in a constant rate of interest over the life of the bond while gradually adjusting the carrying value toward the face value by the maturity date.</p><p>Key Concepts</p><p>Carrying Value: Face value minus unamortized discount (or plus unamortized premium)</p><p>Effective Interest Rate: The market rate at issuance that equates the present value of cash flows with the bond&#x27;s issue price</p><p>Stated Interest Rate: The contractual rate used to calculate periodic cash interest payments</p><p>Example Calculation</p><p>Let&#x27;s illustrate with a simplified example:</p><p>Details<br>Amount</p><p>| Face Value of Bond<br>| $100,000</p><p>| Bond Discount<br>| $5,000</p><p>| Initial Carrying Value<br>| $95,000</p><p>| Stated Interest Rate<br>| 6%</p><p>| Effective Interest Rate<br>| 7%</p><p>For the first interest period:</p><p>Interest Expense = Carrying Value × Effective Interest Rate = $95,000 × 7% = $6,650</p><p>Cash Interest Payment = Face Value × Stated Interest Rate = $100,000 × 6% = $6,000</p><p>Discount Amortization = Interest Expense − Cash Interest Payment = $6,650 − $6,000 = $650</p><p>Journal Entry</p><p>Account<br>Debit<br>Credit</p><p>| Interest Expense<br>| $6,650<br>|</p><p>| Cash<br>|<br>| $6,000</p><p>| Discount on Bonds Payable<br>|<br>| $650</p><p>After this entry, the carrying value increases to $95,650 ($95,000 + $650) as the discount is partially amortized.</p><p>Analysis</p><p>The effective interest method has several important characteristics:</p><p>It results in varying discount amortization amounts each period, but a constant effective interest rate</p><p>Early periods have smaller discount amortization and larger periods have larger amortization</p><p>The carrying value gradually approaches the face value over the bond&#x27;s life</p><p>It better reflects the economic reality of bond financing than the straight-line method</p><p>Summary</p><p>When using the effective interest method for bonds issued at a discount, interest expense is calculated by multiplying the carrying value of the bonds at the beginning of the period by the effective interest rate. This method provides a more economically accurate representation of interest expense compared to the straight-line method.</p>`,
    },
    {
      id: "4987",
      prompt: `On September 30, World Co. borrowed $1,000,000 on a 9% note payable. World paid the first of four quarterly payments of $264,200 when due on December 30. In its income statement for the year, what amount should World report as interest expense?`,
      choices: [
        `$0`,
        `$14,200`,
        `$22,500`,
        `$30,000`,
      ],
      correctIndex: 2,
      explanation: `<h3 class="exp-title">Interest Expense Calculation for Notes Payable</h3><p>The Correct Answer</p><p>$0</p><p>$14,200</p><p>$22,500 ✓</p><p>$30,000</p><p>Explanation</p><p>To calculate interest expense, we need to apply the interest rate to the outstanding principal for the appropriate time period.</p><p>Formula</p><p>Interest Expense = Outstanding Principal × Interest Rate × Time Period</p><p>Calculation</p><p>• Principal: $1,000,000</p><p>• Annual Interest Rate: 9%</p><p>• Time Period: 3 months (1/4 of a year)</p><p>Interest Expense = $1,000,000 × 9% × (1/4) = $22,500</p><p>Journal Entries</p><p>September 30 - Initial Loan</p><p>Account<br>Debit<br>Credit</p><p>| Cash<br>| $1,000,000<br>|</p><p>| Notes Payable<br>|<br>| $1,000,000</p><p>December 30 - First Quarterly Payment</p><p>Account<br>Debit<br>Credit</p><p>| Interest Expense<br>| $22,500<br>|</p><p>| Notes Payable<br>| $241,700<br>|</p><p>| Cash<br>|<br>| $264,200</p><p>Summary</p><p>The company borrowed $1,000,000 on September 30 with a 9% interest rate. By December 31 (the end of the fiscal year), exactly 3 months of interest had accrued, which is one-quarter of a year. Therefore, the appropriate interest expense to report on the income statement is $22,500.</p><p>Key Point: When calculating interest expense for financial statements, only include interest for the time period that has passed during the reporting period.</p>`,
    },
    {
      id: "5047",
      prompt: `The market price of a bond issued at a discount is the present value of its principal amount at the market (effective) rate of interest:`,
      choices: [
        `Less the present value of all future interest payments at the market (effective) rate of interest.`,
        `Less the present value of all future interest payments at the rate of interest stated on the bond.`,
        `Plus the present value of all future interest payments at the market (effective) rate of interest.`,
        `Plus the present value of all future interest payments at the rate of interest stated on the bond.`,
      ],
      correctIndex: 2,
      explanation: `<h3 class="exp-title">Bond Pricing: Discount Bonds Explained</h3><p>Understanding Bond Pricing</p><p>When bonds are issued at a discount, the market price is less than the face value (par value). This occurs when the stated interest rate on the bond is lower than the current market interest rate.</p><p>Correct Formula for Bond Price:</p><p>Bond Price = PV of Principal + PV of Interest Payments</p><p>Incorrect Components:</p><p>- Less the PV of all future interest payments at the market rate</p><p>- Less the PV of all future interest payments at the stated rate</p><p>Calculation Process</p><p>For a bond issued at a discount:</p><p>Calculate PV of the principal amount (face value) using the market interest rate</p><p>Calculate PV of all interest payments using the market interest rate</p><p>Sum these values to get the bond price</p><p>Example Journal Entry</p><p>When a bond is issued at a discount, the journal entry would be:</p><p>Account<br>Debit<br>Credit</p><p>| Cash<br>| $97,000<br>|</p><p>| Discount on Bonds Payable<br>| $3,000<br>|</p><p>| Bonds Payable<br>|<br>| $100,000</p><p>(Example assumes a $100,000 face value bond sold for $97,000)</p><p>Key Factors Affecting Bond Price</p><p>Market Interest Rate</p><p>When the market rate exceeds the stated rate, the bond sells at a discount.</p><p>Time to Maturity</p><p>Longer maturities increase the impact of interest rate differences on bond price.</p><p>Summary</p><p>A discount bond&#x27;s market price is the sum of the present values of its principal and interest payments, both calculated using the market interest rate</p><p>The discount occurs because the stated interest rate is less than the market interest rate</p><p>The discount is recorded as a contra-liability account and amortized over the life of the bond</p>`,
    },
    {
      id: "5054",
      prompt: `On January 1, Year 1, Boston Group issued $100,000 par value, 5% five-year bonds when the market rate of interest was 8%. Interest is payable annually on December 31. The following present value information is available:

|
| 5%
| 8%

| Present value of $1 (n = 5)
| 0.78353
| 0.68058

| Present value of an ordinary annuity (n = 5)
| 4.32948
| 3.99271

What amount is the value of net bonds payable at the end of Year 1?`,
      choices: [
        `$88,022`,
        `$90,064`,
        `$92,540`,
        `$110,638`,
      ],
      correctIndex: 1,
      explanation: `Bond Valuation and Amortization Analysis

Discount Bond Amortization Using Effective Interest Method

Video Explanation

Your browser does not support the video tag.

Correct Answer

$90,064

Net bonds payable at the end of Year 1

Problem Overview

Calculate the net bonds payable at the end of Year 1 for bonds issued at a discount using the effective interest method.

Bond Specifications

💰 Face Value: $100,000

📊 Stated Rate: 5% annually

📈 Market Rate: 8% annually

⏳ Term: 5 years

📅 Interest Payment: December 31 annually

🔻 Issue Type: Discount (market > stated rate)

Why Bonds Sell at Discount

Stated Rate

5%

<

Market Rate

8%

=

Discount

Below Par

Since the bond's stated rate (5%) is lower than the market rate (8%), investors will only buy the bond if it's priced below face value to compensate for the lower interest payments.

Step-by-Step Analysis

Step 1: Calculate Initial Bond Value

The bond value is the present value of future cash flows discounted at the market rate (8%):

| Component
| Calculation
| Present Value

| Principal Payment
| $100,000 × 0.68058
| $68,058

| Interest Payments
| $5,000 × 3.99271
| $19,964

| Initial Bond Value
| $68,058 + $19,964
| $88,022

Note: PV factors are based on 8% market rate for 5 periods

Step 2: Year 1 Amortization Analysis

Using the effective interest method to calculate Year 1 activity:

Date
Cash Interest
Interest Expense
Amortization
Carrying Value

| Jan 1, Year 1
| -
| -
| -
| $88,022

| Dec 31, Year 1
| $5,000
| $7,042
| $2,042
| $90,064

Calculation Details:

Cash Interest: $100,000 × 5% = $5,000

Interest Expense: $88,022 × 8% = $7,042

Amortization: $7,042 - $5,000 = $2,042

New Carrying Value: $88,022 + $2,042 = $90,064

Journal Entries

January 1, Year 1 - Bond Issuance

Account
Debit
Credit

| Cash
| $88,022
|

| Discount on Bonds Payable
| $11,978
|

| Bonds Payable
|
| $100,000

December 31, Year 1 - Interest Payment & Amortization

Account
Debit
Credit

| Interest Expense
| $7,042
|

| Discount on Bonds Payable
|
| $2,042

| Cash
|
| $5,000

Note: The $2,042 credit to Discount on Bonds Payable reduces the discount balance, increasing the net carrying value of the bonds.

Answer Analysis

A. $88,022

Incorrect - This is the initial carrying value, not the end of Year 1 value

B. $90,064 ✓

Correct - Initial value ($88,022) plus Year 1 amortization ($2,042)

C. $92,540

Incorrect - This would result from using straight-line rather than effective interest method

D. $110,638

Incorrect - This appears to be an erroneous calculation

Balance Sheet Presentation (December 31, Year 1)

| Long-term Liabilities

| Bonds Payable
| $100,000

| Less: Discount on Bonds Payable
| ($9,936)

| Net Bonds Payable
| $90,064

Note: Discount balance = $11,978 initial - $2,042 Year 1 amortization = $9,936

Key Takeaways

Discount Bonds: When market rate > stated rate, bonds sell below face value

Effective Interest Method: Interest expense = Carrying value × Market rate

Amortization Effect: Discount amortization increases the bond's carrying value each period

Balance Sheet Impact: Net bonds payable = Face value - Unamortized discount

Convergence to Par: Carrying value approaches face value as discount is amortized

Final Answer: $90,064

Net bonds payable at December 31, Year 1`,
    },
    {
      id: "9441",
      prompt: `On January 1, ABC Co. issued $200,000, seven-year bonds at 6%, with interest payable annually. The bonds sold for $211,573 when the market rate of interest was 5%. ABC Co. uses the effective interest method for amortizing premiums on bonds payable. What is the interest expense for year 2 of the bond?`,
      choices: [
        `$10,355`,
        `$10,579`,
        `$10,508`,
        `$10,433`,
      ],
      correctIndex: 2,
      explanation: `<h3 class="exp-title">Bond Premium Amortization</h3><p>Effective Interest Method - Interest Expense Calculation</p><p>Correct Answer:</p><p>✓ Interest Expense for Year 2: $10,508</p><p>Given Information</p><p>Item<br>Details</p><p>| Face value of bonds<br>| $200,000</p><p>| Stated interest rate<br>| 6%</p><p>| Market interest rate<br>| 5%</p><p>| Issue price<br>| $211,573</p><p>| Term / Interest payment<br>| 7 years / Annually</p><p>Why Bonds Sold at a Premium</p><p>The bonds sold for more than face value because the stated rate (6%) is higher than the market rate (5%). Investors pay a premium to receive above-market interest payments.</p><p>| Issue price<br>| $211,573</p><p>| Less: Face value<br>| ($200,000)</p><p>| Bond premium<br>| $11,573</p><p>Effective Interest Method - Premium</p><p>For bonds sold at a premium:</p><p>Interest Expense = Carrying Value × Market Rate (5%)</p><p>Cash Payment = Face Value × Stated Rate (6%)</p><p>Premium Amortization = Cash Payment - Interest Expense</p><p>New Carrying Value = Old Carrying Value - Premium Amortization</p><p>Key Difference: Premium amortization decreases the carrying value toward face value, while discount amortization increases it.</p><p>Bond Premium Amortization Schedule</p><p>Year<br>Beg Carrying Value<br>Interest Expense<br>Cash Payment<br>Premium Amort.<br>End Carrying Value</p><p>| Yr 1<br>| $211,573<br>| $10,579<br>| $12,000<br>| $1,421<br>| $210,152</p><p>| Yr 2<br>| $210,152<br>| $10,508<br>| $12,000<br>| $1,492<br>| $208,659</p><p>| Yr 3<br>| $208,659<br>| $10,433<br>| $12,000<br>| $1,567<br>| $207,092</p><p>| Yr 4<br>| $207,092<br>| $10,355<br>| $12,000<br>| $1,645<br>| $205,447</p><p>| Yr 5<br>| $205,447<br>| $10,272<br>| $12,000<br>| $1,728<br>| $203,719</p><p>| Yr 6<br>| $203,719<br>| $10,186<br>| $12,000<br>| $1,814<br>| $201,905</p><p>| Yr 7<br>| $201,905<br>| $10,095<br>| $12,000<br>| $1,905<br>| $200,000</p><p>Year 2 Calculation Detail</p><p>| Beginning carrying value<br>| $210,152</p><p>| Multiply by: Market rate<br>| × 5%</p><p>| Interest expense for Year 2<br>| $10,508</p><p>Journal Entries</p><p>Initial Entry (January 1)</p><p>Account<br>Debit<br>Credit</p><p>| Cash<br>| $211,573<br>|</p><p>| Premium on Bonds Payable<br>|<br>| $11,573</p><p>| Bonds Payable<br>|<br>| $200,000</p><p>End of Year 1</p><p>Account<br>Debit<br>Credit</p><p>| Interest Expense<br>| $10,579<br>|</p><p>| Premium on Bonds Payable<br>| $1,421<br>|</p><p>| Cash<br>|<br>| $12,000</p><p>End of Year 2 ✓</p><p>Account<br>Debit<br>Credit</p><p>| Interest Expense<br>| $10,508<br>|</p><p>| Premium on Bonds Payable<br>| $1,492<br>|</p><p>| Cash<br>|<br>| $12,000</p><p>Summary</p><p>ABC Co.&#x27;s interest expense for Year 2 is $10,508, calculated by multiplying the Year 2 beginning carrying value ($210,152) by the market rate (5%). The premium is gradually amortized each year, reducing the carrying value from $211,573 toward the face value of $200,000 at maturity. Notice that interest expense decreases each year as the carrying value decreases.</p>`,
    },
    {
      id: "8595",
      prompt: `On January 1, a company issued a $50,000 face value, 8% five-year bond for $46,139 that will yield 10%. Interest is payable on June 30 and December 31. What is the bond carrying amount on December 31 of the current year?`,
      choices: [
        `$47,106`,
        `$46,768`,
        `$46,446`,
        `$46,139`,
      ],
      correctIndex: 1,
      explanation: `Bond Carrying Value Calculation

Answer

The correct answer is $46,768.

$47,106

$46,768

$46,446

$46,139

Explanation

This problem involves calculating the carrying amount of a bond after one year using the effective interest method. Since the bond was issued at a discount (issue price $46,139 < face value $50,000), we need to track how this discount is amortized over time.

Bond Details:

Face value: $50,000

Coupon rate: 8% (paid semiannually on June 30 and December 31)

Term: 5 years

Issue price: $46,139

Effective interest rate (yield): 10%

Calculation

Using the effective interest method, we need to calculate interest expense, cash payment, and discount amortization for each period:

Date
Carrying Value (Beginning)
Interest Expense (10%)
Cash Payment (8%)
Discount Amortization
Carrying Value (Ending)

| 01/01
| $46,139
| -
| -
| -
| $46,139

| 06/30
| $46,139
| $2,307 (46,139 × 10% × 6/12)
| $2,000 (50,000 × 8% × 6/12)
| $307
| $46,446

| 12/31
| $46,446
| $2,322 (46,446 × 10% × 6/12)
| $2,000 (50,000 × 8% × 6/12)
| $322
| $46,768

For each period, we calculate:

Interest expense = Beginning carrying value × Effective interest rate × Time period

Cash payment = Face value × Coupon rate × Time period

Discount amortization = Interest expense - Cash payment

Ending carrying value = Beginning carrying value + Discount amortization

Journal Entries

June 30 (First Interest Payment)

Account
Debit
Credit

| Interest Expense
| $2,307
|

| Cash
|
| $2,000

| Discount on Bonds Payable
|
| $307

December 31 (Second Interest Payment)

Account
Debit
Credit

| Interest Expense
| $2,322
|

| Cash
|
| $2,000

| Discount on Bonds Payable
|
| $322

Summary

After one year (December 31), the bond's carrying amount is $46,768. This represents the original issue price ($46,139) plus the total discount amortization for the year ($307 + $322 = $629).

The carrying value will continue to increase over the life of the bond until it reaches the face value of $50,000 at maturity. This process of gradually writing off the bond discount is known as discount amortization under the effective interest method.`,
    },
    {
      id: "5050",
      prompt: `On June 1 of the current year, Cross Corp. issued $300,000 of 8% bonds payable at par with interest payment dates of April 1 and October 1. In its income statement for the current year ended December 31, what amount of interest expense should Cross report?`,
      choices: [
        `$6,000`,
        `$8,000`,
        `$12,000`,
        `$14,000`,
      ],
      correctIndex: 3,
      explanation: `<h3 class="exp-title">Bond Interest Expense Calculation</h3><p>Answer: $14,000 ✓</p><p>Options:</p><p>$6,000 ✗</p><p>$8,000 ✗</p><p>$12,000 ✗</p><p>$14,000 ✓</p><p>Explanation</p><p>To calculate the interest expense for bonds, we need to determine how many months of interest accrued during the reporting period.</p><p>Bond issue date: June 1</p><p>Interest payment dates: April 1 and October 1</p><p>Reporting period end: December 31</p><p>Bond principal: $300,000</p><p>Interest rate: 8% per annum</p><p>For the current year, we need to calculate interest expense from June 1 to December 31, which is 7 months.</p><p>Calculation</p><p>Annual interest = Principal × Rate = $300,000 × 8% = $24,000</p><p>Monthly interest = $24,000 ÷ 12 = $2,000 per month</p><p>Interest expense for 7 months (June through December) = $2,000 × 7 = $14,000</p><p>Journal Entries</p><p>The company would have made the following journal entries related to this bond during the year:</p><p>June 1 - Bond Issuance:</p><p>Account<br>Debit<br>Credit</p><p>| Cash<br>| $300,000<br>|</p><p>| Bonds Payable<br>|<br>| $300,000</p><p>October 1 - First Interest Payment (4 months of interest):</p><p>Account<br>Debit<br>Credit</p><p>| Interest Expense<br>| $8,000<br>|</p><p>| Cash<br>|<br>| $8,000</p><p>December 31 - Year-end Accrual (3 months since last payment):</p><p>Account<br>Debit<br>Credit</p><p>| Interest Expense<br>| $6,000<br>|</p><p>| Interest Payable<br>|<br>| $6,000</p><p>Summary</p><p>The total interest expense for the year is $14,000, calculated as follows:</p><p>Interest paid on October 1: $8,000 (4 months: June, July, August, September)</p><p>Interest accrued at December 31: $6,000 (3 months: October, November, December)</p><p>Total interest expense: $8,000 + $6,000 = $14,000</p><p>Note: Interest expense is recognized in the period it is incurred, regardless of when it is paid. Therefore, the total interest expense for the year ended December 31 is $14,000.</p>`,
    },
    {
      id: "4980",
      prompt: `On October 1, Year 1, Gold Co. borrowed $900,000 to be repaid in three equal, annual installments. The note payable bears interest at 5% annually. Gold paid the first installment of $300,000 plus interest on September 30, Year 2. What amount should Gold report as a current liability on December 31, Year 2?`,
      choices: [
        `$330,000`,
        `$307,500`,
        `$303,750`,
        `$300,000`,
      ],
      correctIndex: 1,
      explanation: `<h3 class="exp-title">Current Liability Calculation for Notes Payable</h3><p>Answer: $307,500</p><p>The correct amount to report as a current liability on December 31, Year 2 is $307,500, which consists of:</p><p>Next principal payment: $300,000</p><p>Accrued interest: $7,500</p><p>Explanation</p><p>To determine the current liability, we need to identify the principal due within the next year plus any accrued interest as of the reporting date.</p><p>Loan Details:</p><p>Original loan: $900,000 on October 1, Year 1</p><p>Repayment: Three equal annual installments of $300,000 plus interest</p><p>Interest rate: 5% annually</p><p>First payment made: September 30, Year 2</p><p>Reporting date: December 31, Year 2</p><p>Analysis</p><p>Principal Component:</p><p>After the first payment on September 30, Year 2, the remaining principal is $600,000. The next payment of $300,000 is due within the next 12 months, making it a current liability.</p><p>Interest Component:</p><p>Interest accrues on the outstanding balance. After the first payment, the principal balance is $600,000.</p><p>Accrued interest from September 30 to December 31 (3 months):</p><p>$600,000 × 5% × (3/12) = $600,000 × 0.05 × 0.25 = $7,500</p><p>Journal Entry for Accrued Interest</p><p>Account<br>Debit<br>Credit</p><p>| Interest Expense<br>| 7,500<br>|</p><p>| Interest Payable<br>|<br>| 7,500</p><p>To record accrued interest from Sept 30 to Dec 31, Year 2</p><p>Summary</p><p>As of December 31, Year 2, Gold Co. should report a current liability of $307,500, consisting of:</p><p>Component<br>Amount</p><p>| Next principal payment<br>| $300,000</p><p>| Accrued interest (3 months)<br>| $7,500</p><p>| Total current liability<br>| $307,500</p><p>Answer Choices Analysis</p><p>$330,000 - Incorrect. This may include an incorrect calculation of interest.</p><p>$307,500 - Correct. This is the sum of the $300,000 principal payment plus $7,500 in accrued interest.</p><p>$303,750 - Incorrect. This may represent a partial interest calculation.</p><p>$300,000 - Incorrect. This includes only the principal payment and omits the accrued interest.</p>`,
    },
  ],
};
