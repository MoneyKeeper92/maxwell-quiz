import type { Quiz } from "./types";

export const mostCommonFarQuiz: Quiz = {
  key: "most-common-far",
  title: "10 Most Common FAR Questions",
  subtitle: "High-frequency FAR MCQs covering cash flows, EPS, leases, inventory, and more",
  discipline: "far",
  questions: [
    {
      id: "1",
      prompt: `Thompson Co. had net income of $100,000 during the year. Depreciation expense was $20,000. The following information is available:

• Accounts receivable increase: $30,000

• Equipment gain on sale: $15,000

• Nontrade notes payable increase: $60,000

• Prepaid expenses increase: $25,000

• Accounts payable increase: $35,000

What amount should Thompson report as net cash provided by operating activities in its statement of cash flows for the year?`,
      choices: [
        `$90,000`,
        `$85,000`,
        `$105,000`,
        `$110,000`,
      ],
      correctIndex: 1,
      explanation: `<p style="margin:0 0 0.65rem; line-height:1.7;">To find the net cash provided by operating activities using the indirect method, we start with net income and make adjustments:</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">• Start with Net Income: $100,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Add: Depreciation expense: +$20,000 (non-cash expense)</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Subtract: Gain on sale of equipment: -$15,000 (investing activity)</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Subtract: Increase in Accounts Receivable: -$30,000 (uncollected revenue)</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Subtract: Increase in Prepaid Expenses: -$25,000 (cash paid out)</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Add: Increase in Accounts Payable: +$35,000 (unpaid expenses)</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Note: The nontrade notes payable increase is a financing activity and not included in operating activities.</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Calculation:</p><p style="margin:0 0 0.65rem; line-height:1.7;">$100,000 + $20,000 - $15,000 - $30,000 - $25,000 + $35,000 = $85,000</p>`,
    },
    {
      id: "2",
      prompt: `Elm Co. had 100,000 shares of common stock outstanding at January 1. On July 1, it issued 30,000 additional shares of common stock. Outstanding all year were 8,000 shares of nonconvertible preferred stock on which a dividend of $4 per share was declared during the year. Net income for the year was $360,000. What should Elm report as earnings per share (EPS) for the year?`,
      choices: [
        `$3.00`,
        `$2.85`,
        `$3.20`,
        `$3.40`,
      ],
      correctIndex: 1,
      explanation: `<p style="margin:0 0 0.65rem; line-height:1.7;">Formula: EPS = (Net Income - Preferred Dividends) / Weighted-Average Common Shares Outstanding</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Step 1: Calculate Preferred Dividends</p><p style="margin:0 0 0.65rem; line-height:1.7;">• 8,000 shares × $4 per share = $32,000</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Step 2: Calculate Numerator (Income available to common shareholders)</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Net Income: $360,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Less: Preferred Dividends: -$32,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Income available to common: $328,000</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Step 3: Calculate Weighted-Average Common Shares</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Jan 1 - Jun 30 (6 months): 100,000 shares × (6/12) = 50,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Jul 1 - Dec 31 (6 months): 130,000 shares × (6/12) = 65,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Total weighted-average shares: 115,000</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Step 4: Calculate EPS</p><p style="margin:0 0 0.65rem; line-height:1.7;">• EPS = $328,000 / 115,000 shares = $2.85</p>`,
    },
    {
      id: "3",
      prompt: `Merton Co. had $200,000 in cash-basis pretax income for the year. At the current year-end, accounts receivable increased by $25,000 and accounts payable increased by $10,000 from their previous year-end balances. Compared to the cash-basis method of accounting, Merton's accrual-basis income is:`,
      choices: [
        `Lower by $15,000`,
        `Higher by $15,000`,
        `Higher by $35,000`,
        `Lower by $35,000`,
      ],
      correctIndex: 1,
      explanation: `<p style="margin:0 0 0.65rem; line-height:1.7;">To convert from cash-basis to accrual-basis income, adjust for changes in operating assets and liabilities:</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Starting Point:</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Cash-basis income: $200,000</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Adjustments:</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Increase in Accounts Receivable: +$25,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">  (Revenue earned but not yet collected - add to recognize revenue)</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Increase in Accounts Payable: -$10,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">  (Expenses incurred but not yet paid - subtract to recognize expenses)</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Calculation:</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Accrual Income = $200,000 + $25,000 - $10,000 = $215,000</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Comparison:</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Accrual-basis income: $215,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Cash-basis income: $200,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Difference: $15,000 higher</p>`,
    },
    {
      id: "4",
      prompt: `XYZ Corp. has total assets of $800,000 and total liabilities of $320,000. If the company issues additional shares worth $200,000, what will be its debt-to-equity ratio post the share issue?`,
      choices: [
        `0.47`,
        `0.54`,
        `0.62`,
        `0.71`,
      ],
      correctIndex: 0,
      explanation: `<p style="margin:0 0 0.65rem; line-height:1.7;">Formula: Debt-to-Equity Ratio = Total Liabilities / Total Equity</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Initial Position:</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Total Assets: $800,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Total Liabilities: $320,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Total Equity: $800,000 - $320,000 = $480,000</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Effect of Share Issuance:</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Cash (Asset) increases: +$200,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Common Stock/APIC (Equity) increases: +$200,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Liabilities remain unchanged</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Post-Issuance Position:</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Total Assets: $800,000 + $200,000 = $1,000,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Total Liabilities: $320,000 (unchanged)</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Total Equity: $480,000 + $200,000 = $680,000</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Final Calculation:</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Debt-to-Equity Ratio = $320,000 / $680,000 = 0.47 (rounded)</p>`,
    },
    {
      id: "5",
      prompt: `Frost Co.'s checkbook balance on December 31 was $15,000. On that date, Frost held the following items in its safe:

• A $3,000 check payable to Frost, postdated January 5, and not included in the December 31 checkbook balance, in collection of a sale made in December.

• A $2,000 check payable to Frost, deposited December 20 and included in the December 31 checkbook balance, but returned by the bank on December 28 stamped "NSF." The check was redeposited on January 4 and cleared on January 10.

What amount should Frost report as cash in its December 31 balance sheet?`,
      choices: [
        `$15,000`,
        `$18,000`,
        `$13,000`,
        `$16,000`,
      ],
      correctIndex: 2,
      explanation: `<p style="margin:0 0 0.65rem; line-height:1.7;">To determine the correct cash balance for the balance sheet, you must start with the checkbook balance and adjust for items that are not considered cash as of December 31.</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Step 1: Start with the Checkbook Balance</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Unadjusted cash balance: $15,000</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Step 2: Analyze the Postdated Check ($3,000)</p><p style="margin:0 0 0.65rem; line-height:1.7;">• A postdated check is a check with a future date (January 5)</p><p style="margin:0 0 0.65rem; line-height:1.7;">• It cannot be legally cashed until that date</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Therefore, it is NOT considered cash on December 31</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Should be treated as a receivable instead</p><p style="margin:0 0 0.65rem; line-height:1.7;">• The problem states this check was NOT included in the checkbook balance</p><p style="margin:0 0 0.65rem; line-height:1.7;">• No adjustment needed</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Step 3: Analyze the NSF Check ($2,000)</p><p style="margin:0 0 0.65rem; line-height:1.7;">• NSF (Non-Sufficient Funds) means the check "bounced"</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Although Frost initially recorded $2,000 as cash, the bank returned it</p><p style="margin:0 0 0.65rem; line-height:1.7;">• The funds were never actually collected</p><p style="margin:0 0 0.65rem; line-height:1.7;">• This amount is incorrectly included in the $15,000 balance</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Must be subtracted and reclassified as a receivable</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Final Calculation:</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Checkbook Balance: $15,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Subtract NSF Check: -$2,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Correct Cash Balance: $13,000 🏦</p>`,
    },
    {
      id: "6",
      prompt: `Orion Inc. has accounts receivable aging as follows:

• $30,000 that are 1-30 days late, estimated to be 2% uncollectible

• $40,000 that are 31-60 days late, estimated to be 5% uncollectible

• $20,000 that are 61-90 days late, estimated to be 8% uncollectible

The beginning balance in the allowance for doubtful accounts is $3,000, and during the year, the company wrote off $2,000 as uncollectible. During the year, Orion Inc. also purchased new equipment for $250,000 and issued 1,500 shares of common stock. What is the bad debt expense for the year?`,
      choices: [
        `$4,200`,
        `$3,200`,
        `$5,000`,
        `$3,800`,
      ],
      correctIndex: 1,
      explanation: `<p style="margin:0 0 0.65rem; line-height:1.7;">To calculate bad debt expense using the aging method, first determine the required ending balance in the allowance account, then work backwards.</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Step 1: Calculate Required Ending Balance (based on aging)</p><p style="margin:0 0 0.65rem; line-height:1.7;">• 1-30 days late: $30,000 × 2% = $600</p><p style="margin:0 0 0.65rem; line-height:1.7;">• 31-60 days late: $40,000 × 5% = $2,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• 61-90 days late: $20,000 × 8% = $1,600</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Required ending balance: $600 + $2,000 + $1,600 = $4,200</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Step 2: Calculate Bad Debt Expense</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Beginning balance in allowance: $3,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Add: Bad debt expense (unknown): X</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Subtract: Write-offs during year: -$2,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Ending balance needed: $4,200</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Solving for X:</p><p style="margin:0 0 0.65rem; line-height:1.7;">$3,000 + X - $2,000 = $4,200</p><p style="margin:0 0 0.65rem; line-height:1.7;">X = $4,200 - $3,000 + $2,000 = $3,200</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Note: Equipment purchase and stock issuance are irrelevant to bad debt expense calculation.</p>`,
    },
    {
      id: "7",
      prompt: `Maple Co. uses a perpetual inventory system. The following are inventory transactions for the month of February:

• 2/1 Beginning inventory: 15,000 units at $14

• 2/15 Purchase: 25,000 units at $16

• 2/18 Purchase: 30,000 units at $18

• 2/28 Sales at $22 per unit: 45,000 units

Maple uses the FIFO method to determine the value of its inventory. What amount should Maple report as cost of goods sold on its income statement for the month of February?`,
      choices: [
        `$610,000`,
        `$810,000`,
        `$700,000`,
        `$780,000`,
      ],
      correctIndex: 2,
      explanation: `<p style="margin:0 0 0.65rem; line-height:1.7;">Under FIFO (First-In, First-Out), the oldest inventory costs are assigned to cost of goods sold first.</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Step 1: Identify Available Inventory (in chronological order)</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Beginning inventory: 15,000 units @ $14 = $210,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• 2/15 Purchase: 25,000 units @ $16 = $400,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• 2/18 Purchase: 30,000 units @ $18 = $540,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Total available: 70,000 units</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Step 2: Calculate COGS for 45,000 units sold (using FIFO)</p><p style="margin:0 0 0.65rem; line-height:1.7;">Sell oldest inventory first:</p><p style="margin:0 0 0.65rem; line-height:1.7;">• First: 15,000 units @ $14 = $210,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Next: 25,000 units @ $16 = $400,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Finally: 5,000 units @ $18 = $90,000</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Total COGS: $210,000 + $400,000 + $90,000 = $700,000</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Step 3: Verify Ending Inventory</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Remaining: 25,000 units @ $18 = $450,000</p>`,
    },
    {
      id: "8",
      prompt: `On January 1, Apex Co. purchased a forklift for $50,000. The forklift's salvage value is $5,000, and its estimated useful life is 8 years. The productive life of the forklift is estimated to be 80,000 miles. During the first year, the forklift was driven 10,000 miles. Apex uses the double-declining balance method of depreciation. What amount of depreciation expense should Apex record for the first year?`,
      choices: [
        `$10,000`,
        `$11,250`,
        `$12,500`,
        `$8,750`,
      ],
      correctIndex: 2,
      explanation: `<p style="margin:0 0 0.65rem; line-height:1.7;">The question mentions units of activity data (80,000 miles, 10,000 miles driven) but specifies using the double-declining balance method.</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Under Double-Declining Balance:</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Depreciation rate = 2 × (1 / Useful Life)</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Depreciation rate = 2 × (1/8) = 25%</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Year 1 Calculation:</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Beginning book value: $50,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Depreciation rate: 25%</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Year 1 depreciation: $50,000 × 25% = $12,500</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Book Value at End of Year 1:</p><p style="margin:0 0 0.65rem; line-height:1.7;">• $50,000 - $12,500 = $37,500</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Note About Alternative Methods:</p><p style="margin:0 0 0.65rem; line-height:1.7;">If using units of activity instead:</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Depreciable base: $50,000 - $5,000 = $45,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Rate per mile: $45,000 / 80,000 = $0.5625</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Year 1: 10,000 miles × $0.5625 = $5,625</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">However, the question explicitly states to use double-declining balance, so the answer is $12,500.</p>`,
    },
    {
      id: "9",
      prompt: `Ocean Co. acquired machinery under a finance lease for five years. The minimum lease payments are $50,000 payable annually at year-end. The interest rate is 6% with an annuity factor for five years of 4.21236. The present value of the payments is equal to the fair market value of the machinery. What amount should Ocean report as interest expense at the end of the first year of the lease?`,
      choices: [
        `$15,000`,
        `$12,637`,
        `$13,561`,
        `$18,106`,
      ],
      correctIndex: 1,
      explanation: `<p style="margin:0 0 0.65rem; line-height:1.7;">For a finance lease with year-end payments, interest expense is calculated on the lease liability balance.</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Step 1: Calculate Initial Lease Liability (Present Value)</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Annual payment: $50,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• PV factor (ordinary annuity, 5 years, 6%): 4.21236</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Initial lease liability = $50,000 × 4.21236 = $210,618</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Step 2: Record Initial Entry</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Debit: Right-of-use Asset $210,618</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Credit: Lease Liability $210,618</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Step 3: Calculate Year 1 Interest Expense</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Beginning lease liability: $210,618</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Interest rate: 6%</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Interest expense = $210,618 × 6% = $12,637.08 ≈ $12,637</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Step 4: Year-End Payment Allocation</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Total payment: $50,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Less: Interest expense: -$12,637</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Principal reduction: $37,363</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Remaining liability: $210,618 - $37,363 = $173,255</p>`,
    },
    {
      id: "10",
      prompt: `In early Year 4, a company realized that it had failed to record depreciation on a vehicle purchased in Year 2 for $40,000 with a 4-year life and no salvage value. What journal entry should be made in Year 4 upon discovering this error?`,
      choices: [
        `Debit Retained Earnings $30,000; Credit Accumulated Depreciation $30,000`,
        `Debit Retained Earnings $20,000; Credit Accumulated Depreciation $20,000`,
        `Debit Depreciation Expense $20,000; Credit Accumulated Depreciation $20,000`,
        `Debit Depreciation Expense $30,000; Credit Accumulated Depreciation $30,000`,
      ],
      correctIndex: 1,
      explanation: `<p style="margin:0 0 0.65rem; line-height:1.7;">This is a correction of a prior period error. Since depreciation was not recorded for prior years, we must correct the error through Retained Earnings.</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Given Information:</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Vehicle purchased in Year 2: $40,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Useful life: 4 years</p><p style="margin:0 0 0.65rem; line-height:1.7;">• No salvage value</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Error discovered in Year 4</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Step 1: Calculate Annual Depreciation</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Annual depreciation = $40,000 / 4 years = $10,000 per year</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Step 2: Determine Missed Depreciation (Prior Years)</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Year 2 depreciation: $10,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Year 3 depreciation: $10,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Total missed depreciation: $10,000 + $10,000 = $20,000</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Step 3: Correcting Entry in Year 4</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Debit: Retained Earnings $20,000</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Credit: Accumulated Depreciation $20,000</p><br><p style="margin:0 0 0.65rem; line-height:1.7;">Why Retained Earnings?</p><p style="margin:0 0 0.65rem; line-height:1.7;">• The error affected Years 2 and 3 (prior periods)</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Prior period errors are corrected through Retained Earnings, not current Depreciation Expense</p><p style="margin:0 0 0.65rem; line-height:1.7;">• Year 4 depreciation ($10,000) will be recorded separately as a normal expense</p>`,
    },
  ],
};
