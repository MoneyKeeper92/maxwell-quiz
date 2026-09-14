import type { Quiz } from "./types";

export const mostCommonFarQuiz: Quiz = {
  key: "most-common-far",
  title: "10 Most Common FAR Questions",
  subtitle: "High-frequency FAR MCQs covering cash flows, EPS, leases, inventory, and more",
  discipline: "far",
  course: "cpa",
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
      explanation: `<div class="maxwell-exp"><div class="header"><div class="qid">Question ID: 1</div><h2>Statement of Cash Flows: Indirect Method</h2></div>
<div class="answer"><p><strong>Answer:</strong> <strong>Choice B: $85,000</strong> is correct. Under the indirect method, Thompson starts with net income and adjusts for noncash items, gains and losses, and changes in operating working-capital accounts.</p></div>
<div class="section"><h3>What the Question Is Testing</h3>
<p>This question tests whether you can convert <strong>accrual-basis net income</strong> into <strong>cash provided by operating activities</strong> using the indirect method.</p>
<p>The key is to separate items into three categories:</p>
<ul>
<li><strong>Noncash income statement items</strong>: reverse their effect on net income.</li>
<li><strong>Changes in operating assets and liabilities</strong>: adjust for the difference between accrual accounting and cash movement.</li>
<li><strong>Investing or financing items</strong>: do not include the related cash flow in operating activities.</li>
</ul>
</div>
<div class="section"><h3>Step-by-Step Calculation</h3>
<table>
<thead><tr><th>Item</th><th>Adjustment</th><th>Reason</th></tr></thead>
<tbody>
<tr><td>Net income</td><td>$100,000</td><td>Starting point under the indirect method.</td></tr>
<tr><td>Depreciation expense</td><td>+$20,000</td><td>Depreciation reduced net income but did not use cash.</td></tr>
<tr><td>Gain on sale of equipment</td><td>−$15,000</td><td>The gain increased net income, but the sale itself belongs in investing activities.</td></tr>
<tr><td>Increase in accounts receivable</td><td>−$30,000</td><td>Revenue was recognized before the related cash was collected.</td></tr>
<tr><td>Increase in prepaid expenses</td><td>−$25,000</td><td>Cash was paid for costs that have not yet been fully expensed.</td></tr>
<tr><td>Increase in accounts payable</td><td>+$35,000</td><td>Expenses were recognized without paying all of the related cash yet.</td></tr>
</tbody>
</table>
<div class="calc"><strong>Net cash from operating activities:</strong><br>
$100,000 + $20,000 − $15,000 − $30,000 − $25,000 + $35,000 = <strong>$85,000</strong></div>
</div>
<div class="section"><h3>What About the $60,000 Increase in Nontrade Notes Payable?</h3>
<p>The increase in nontrade notes payable is <strong>not an operating adjustment</strong>. A nontrade note payable is generally associated with borrowing rather than normal trade operations, so the related cash flow is classified as a <strong>financing activity</strong>.</p>
<div class="tip"><strong>CPA Exam shortcut:</strong> Trade working-capital accounts such as A/R, prepaid expenses, and A/P normally affect operating cash flow. Borrowings such as notes payable generally belong in financing.</div>
</div>
<div class="answer-analysis"><h3>Answer Analysis</h3><table><thead><tr><th>Option</th><th>Analysis</th></tr></thead><tbody>
<tr><td>A. $90,000</td><td>Incorrect. Applying all of the required operating adjustments produces $85,000.</td></tr>
<tr class="correct-row"><td>B. $85,000</td><td>Correct. This is the result after adjusting net income for depreciation, the equipment gain, and the operating working-capital changes.</td></tr>
<tr><td>C. $105,000</td><td>Incorrect. This amount does not reflect the complete set of indirect-method adjustments.</td></tr>
<tr><td>D. $110,000</td><td>Incorrect. This amount does not reflect the complete set of indirect-method adjustments.</td></tr>
</tbody></table></div>
<div class="summary"><h3>Summary</h3><p>Start with net income, add back noncash expenses, remove gains included in net income, and adjust operating assets and liabilities. The $60,000 nontrade note payable increase is financing, so the correct operating cash flow is $85,000.</p></div></div>`,
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
      explanation: `<div class="maxwell-exp"><div class="header"><div class="qid">Question ID: 2</div><h2>Basic Earnings per Share: Weighted-Average Shares</h2></div>
<div class="answer"><p><strong>Answer:</strong> <strong>Choice B: $2.85</strong> is correct. Basic EPS equals income available to common shareholders divided by weighted-average common shares outstanding.</p></div>
<div class="section"><h3>Core Formula</h3>
<div class="formula"><strong>Basic EPS = (Net Income − Preferred Dividends) ÷ Weighted-Average Common Shares Outstanding</strong></div>
<p>Because the preferred stock is <strong>nonconvertible</strong>, it does not enter the denominator. However, the declared preferred dividend reduces the income available to common shareholders.</p>
</div>
<div class="section"><h3>Step 1: Calculate the Numerator</h3>
<p>Preferred dividends:</p>
<div class="calc">8,000 preferred shares × $4 = <strong>$32,000</strong></div>
<p>Income available to common shareholders:</p>
<div class="calc">$360,000 net income − $32,000 preferred dividends = <strong>$328,000</strong></div>
</div>
<div class="section"><h3>Step 2: Calculate Weighted-Average Common Shares</h3>
<p>The company had 100,000 common shares outstanding for the first six months. It then issued 30,000 additional shares on July 1, so 130,000 shares were outstanding for the final six months.</p>
<table>
<thead><tr><th>Period</th><th>Shares</th><th>Weight</th><th>Weighted Shares</th></tr></thead>
<tbody>
<tr><td>Jan. 1, Jun. 30</td><td>100,000</td><td>6/12</td><td>50,000</td></tr>
<tr><td>Jul. 1, Dec. 31</td><td>130,000</td><td>6/12</td><td>65,000</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>115,000</strong></td></tr>
</tbody>
</table>
</div>
<div class="section"><h3>Step 3: Calculate EPS</h3>
<div class="calc"><strong>EPS = $328,000 ÷ 115,000 = $2.85 per share</strong></div>
<div class="tip"><strong>CPA Exam trap:</strong> Do not use ending shares of 130,000 for the entire year. Shares issued during the year must be time-weighted.</div>
</div>
<div class="answer-analysis"><h3>Answer Analysis</h3><table><thead><tr><th>Option</th><th>Analysis</th></tr></thead><tbody>
<tr><td>A. $3.00</td><td>Incorrect. Basic EPS must use weighted-average common shares and must deduct the preferred dividend from net income.</td></tr>
<tr class="correct-row"><td>B. $2.85</td><td>Correct. $328,000 of income available to common shareholders divided by 115,000 weighted-average shares equals approximately $2.85.</td></tr>
<tr><td>C. $3.20</td><td>Incorrect. This does not use the proper numerator and weighted-average denominator together.</td></tr>
<tr><td>D. $3.40</td><td>Incorrect. This does not use the proper numerator and weighted-average denominator together.</td></tr>
</tbody></table></div>
<div class="summary"><h3>Summary</h3><p>Subtract declared preferred dividends from net income, then divide by weighted-average common shares. Here, $328,000 ÷ 115,000 = $2.85.</p></div></div>`,
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
      explanation: `<div class="maxwell-exp"><div class="header"><div class="qid">Question ID: 3</div><h2>Cash Basis to Accrual Basis Income</h2></div>
<div class="answer"><p><strong>Answer:</strong> <strong>Choice B: Higher by $15,000</strong> is correct. Accrual-basis income is $215,000, which is $15,000 higher than the $200,000 cash-basis income.</p></div>
<div class="section"><h3>What Changes When Converting to Accrual Accounting?</h3>
<p>Cash-basis income recognizes revenue when cash is received and expenses when cash is paid. Accrual accounting instead recognizes revenue when earned and expenses when incurred.</p>
<p>That means changes in receivables and payables help identify amounts that belong in accrual income even though the cash has not yet moved.</p>
</div>
<div class="section"><h3>Accounts Receivable Adjustment</h3>
<p>Accounts receivable increased by $25,000. An increase in A/R means the company recognized revenue that it <strong>earned but had not yet collected in cash</strong>.</p>
<div class="calc">Increase in A/R → <strong>Add $25,000</strong> to cash-basis income</div>
</div>
<div class="section"><h3>Accounts Payable Adjustment</h3>
<p>Accounts payable increased by $10,000. An increase in A/P means the company incurred expenses that it <strong>has not yet paid in cash</strong>.</p>
<div class="calc">Increase in A/P → <strong>Subtract $10,000</strong> from cash-basis income</div>
</div>
<div class="section"><h3>Final Calculation</h3>
<div class="calc">$200,000 + $25,000 − $10,000 = <strong>$215,000 accrual-basis income</strong></div>
<p>Compared with cash-basis income of $200,000, accrual income is <strong>$15,000 higher</strong>.</p>
<div class="tip"><strong>Memory aid:</strong> When converting cash income to accrual income, an increase in A/R generally increases income, while an increase in A/P generally decreases income.</div>
</div>
<div class="answer-analysis"><h3>Answer Analysis</h3><table><thead><tr><th>Option</th><th>Analysis</th></tr></thead><tbody>
<tr><td>A. Lower by $15,000</td><td>Incorrect. The net adjustment is positive $15,000, not negative $15,000.</td></tr>
<tr class="correct-row"><td>B. Higher by $15,000</td><td>Correct. +$25,000 for A/R and −$10,000 for A/P produces a net +$15,000 adjustment.</td></tr>
<tr><td>C. Higher by $35,000</td><td>Incorrect. The $10,000 increase in A/P must reduce the conversion adjustment rather than increase it.</td></tr>
<tr><td>D. Lower by $35,000</td><td>Incorrect. Both the direction and amount are inconsistent with the accrual conversion.</td></tr>
</tbody></table></div>
<div class="summary"><h3>Summary</h3><p>Add the increase in accounts receivable and subtract the increase in accounts payable. Accrual income is $215,000, or $15,000 higher than cash-basis income.</p></div></div>`,
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
      explanation: `<div class="maxwell-exp"><div class="header"><div class="qid">Question ID: 4</div><h2>Debt-to-Equity Ratio After a Share Issuance</h2></div>
<div class="answer"><p><strong>Answer:</strong> <strong>Choice A: 0.47</strong> is correct. Issuing shares increases assets and equity but does not increase liabilities, so the debt-to-equity ratio falls.</p></div>
<div class="section"><h3>Step 1: Determine Existing Equity</h3>
<div class="formula"><strong>Assets = Liabilities + Equity</strong></div>
<div class="calc">$800,000 − $320,000 = <strong>$480,000 existing equity</strong></div>
</div>
<div class="section"><h3>Step 2: Record the Effect of the Share Issue</h3>
<p>The company issues $200,000 of additional shares. The transaction increases cash by $200,000 and increases contributed equity by $200,000.</p>
<table>
<thead><tr><th>Account</th><th>Before</th><th>Change</th><th>After</th></tr></thead>
<tbody>
<tr><td>Total assets</td><td>$800,000</td><td>+$200,000</td><td>$1,000,000</td></tr>
<tr><td>Total liabilities</td><td>$320,000</td><td>$0</td><td>$320,000</td></tr>
<tr><td>Total equity</td><td>$480,000</td><td>+$200,000</td><td>$680,000</td></tr>
</tbody>
</table>
</div>
<div class="section"><h3>Step 3: Calculate the New Ratio</h3>
<div class="formula"><strong>Debt-to-Equity Ratio = Total Liabilities ÷ Total Equity</strong></div>
<div class="calc">$320,000 ÷ $680,000 = 0.4706 ≈ <strong>0.47</strong></div>
<div class="tip"><strong>Concept:</strong> An equity issuance improves this leverage ratio because the denominator increases while liabilities remain unchanged.</div>
</div>
<div class="answer-analysis"><h3>Answer Analysis</h3><table><thead><tr><th>Option</th><th>Analysis</th></tr></thead><tbody>
<tr class="correct-row"><td>A. 0.47</td><td>Correct. $320,000 of liabilities divided by $680,000 of post-issuance equity equals approximately 0.47.</td></tr>
<tr><td>B. 0.54</td><td>Incorrect. The share issuance must be added to equity before calculating the ratio.</td></tr>
<tr><td>C. 0.62</td><td>Incorrect. This does not use the correct post-issuance equity balance.</td></tr>
<tr><td>D. 0.71</td><td>Incorrect. The transaction reduces: not increases: the company&#x27;s debt relative to equity.</td></tr>
</tbody></table></div>
<div class="summary"><h3>Summary</h3><p>Compute equity first, add the $200,000 share issuance to equity, and leave liabilities unchanged. The new debt-to-equity ratio is $320,000 ÷ $680,000 = 0.47.</p></div></div>`,
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
      explanation: `<div class="maxwell-exp"><div class="header"><div class="qid">Question ID: 5</div><h2>Cash Balance: Postdated and NSF Checks</h2></div>
<div class="answer"><p><strong>Answer:</strong> <strong>Choice C: $13,000</strong> is correct. The $2,000 NSF check must be removed from the checkbook balance because the cash was never collected.</p></div>
<div class="section"><h3>Starting Point</h3>
<div class="calc">December 31 checkbook balance = <strong>$15,000</strong></div>
<p>The task is to determine whether either check should be included in cash at year-end.</p>
</div>
<div class="section"><h3>Postdated Check: $3,000</h3>
<p>The $3,000 check is dated January 5. As of December 31, it is a <strong>postdated check</strong> and is not available as cash at year-end.</p>
<p>However, the problem specifically says it was <strong>not included</strong> in the $15,000 checkbook balance. Therefore, no adjustment to the $15,000 balance is necessary.</p>
<div class="tip">Economically, the amount remains a receivable until the check becomes collectible.</div>
</div>
<div class="section"><h3>NSF Check: $2,000</h3>
<p>The $2,000 check had been deposited and included in the checkbook balance, but the bank returned it for <strong>non-sufficient funds (NSF)</strong>.</p>
<p>Because the customer payment failed, the company does not have the cash. The amount must be removed from cash and restored to a receivable.</p>
<div class="calc">$15,000 − $2,000 = <strong>$13,000</strong></div>
</div>
<div class="section"><h3>CPA Exam Focus</h3>
<p>Ask two questions for each item:</p>
<ol>
<li>Is the item actually cash as of the balance-sheet date?</li>
<li>Is it already included in the book/checkbook balance?</li>
</ol>
<p>An item can be noncash but require no adjustment if it was never included in the starting balance.</p>
</div>
<div class="answer-analysis"><h3>Answer Analysis</h3><table><thead><tr><th>Option</th><th>Analysis</th></tr></thead><tbody>
<tr><td>A. $15,000</td><td>Incorrect. The NSF check is still included in the checkbook balance and must be removed.</td></tr>
<tr><td>B. $18,000</td><td>Incorrect. The postdated check cannot be added to cash at December 31.</td></tr>
<tr class="correct-row"><td>C. $13,000</td><td>Correct. Subtract the $2,000 NSF check from the $15,000 checkbook balance.</td></tr>
<tr><td>D. $16,000</td><td>Incorrect. Neither year-end treatment supports a $1,000 net increase.</td></tr>
</tbody></table></div>
<div class="summary"><h3>Summary</h3><p>The postdated check was not in the starting balance, so it requires no adjustment. The NSF check was incorrectly included in cash, so subtract $2,000. Report cash of $13,000.</p></div></div>`,
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
      explanation: `<div class="maxwell-exp"><div class="header"><div class="qid">Question ID: 6</div><h2>Allowance for Doubtful Accounts: Aging Method</h2></div>
<div class="answer"><p><strong>Answer:</strong> <strong>Choice B: $3,200</strong> is correct. Under the aging method, first calculate the required ending allowance balance, then solve for the bad debt expense needed to reach that balance.</p></div>
<div class="section"><h3>Step 1: Compute the Required Ending Allowance</h3>
<table>
<thead><tr><th>Aging Category</th><th>Receivable</th><th>Estimated Uncollectible</th><th>Required Allowance</th></tr></thead>
<tbody>
<tr><td>1 to 30 days late</td><td>$30,000</td><td>2%</td><td>$600</td></tr>
<tr><td>31 to 60 days late</td><td>$40,000</td><td>5%</td><td>$2,000</td></tr>
<tr><td>61 to 90 days late</td><td>$20,000</td><td>8%</td><td>$1,600</td></tr>
<tr><td colspan="3"><strong>Required ending allowance</strong></td><td><strong>$4,200</strong></td></tr>
</tbody>
</table>
</div>
<div class="section"><h3>Step 2: Roll Forward the Allowance Account</h3>
<div class="formula"><strong>Beginning Allowance + Bad Debt Expense − Write-offs = Ending Allowance</strong></div>
<div class="calc">$3,000 + X − $2,000 = $4,200</div>
<div class="calc">X = $4,200 − $3,000 + $2,000 = <strong>$3,200</strong></div>
</div>
<div class="section"><h3>Why the Write-Off Matters</h3>
<p>A write-off reduces both accounts receivable and the allowance account. It does <strong>not</strong> create new bad debt expense at the moment of write-off under the allowance method.</p>
<p>Because $2,000 was written off during the year, the company needs enough bad debt expense to rebuild the allowance to the required ending credit balance of $4,200.</p>
</div>
<div class="section"><h3>Irrelevant Information</h3>
<p>The equipment purchase and common-stock issuance have no effect on the allowance for doubtful accounts or bad debt expense.</p>
<div class="tip"><strong>CPA Exam trap:</strong> Aging problems are usually a <em>balance-sheet approach</em>. The percentage calculation gives you the required ending allowance, not bad debt expense directly.</div>
</div>
<div class="answer-analysis"><h3>Answer Analysis</h3><table><thead><tr><th>Option</th><th>Analysis</th></tr></thead><tbody>
<tr><td>A. $4,200</td><td>Incorrect. $4,200 is the required ending allowance balance, not the current-year bad debt expense.</td></tr>
<tr class="correct-row"><td>B. $3,200</td><td>Correct. The allowance rollforward requires $3,200 of bad debt expense.</td></tr>
<tr><td>C. $5,000</td><td>Incorrect. This overstates the expense needed to reach the required $4,200 ending allowance.</td></tr>
<tr><td>D. $3,800</td><td>Incorrect. This does not reconcile the beginning allowance, write-offs, and required ending balance.</td></tr>
</tbody></table></div>
<div class="summary"><h3>Summary</h3><p>Aging produces a required ending allowance of $4,200. Starting with $3,000 and subtracting $2,000 of write-offs leaves $1,000 before the adjustment, so bad debt expense must be $3,200.</p></div></div>`,
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
      explanation: `<div class="maxwell-exp"><div class="header"><div class="qid">Question ID: 7</div><h2>FIFO Inventory: Cost of Goods Sold</h2></div>
<div class="answer"><p><strong>Answer:</strong> <strong>Choice C: $700,000</strong> is correct. FIFO assigns the oldest inventory costs to cost of goods sold first.</p></div>
<div class="section"><h3>Inventory Available for Sale</h3>
<table>
<thead><tr><th>Layer</th><th>Units</th><th>Unit Cost</th><th>Total Cost</th></tr></thead>
<tbody>
<tr><td>Beginning inventory</td><td>15,000</td><td>$14</td><td>$210,000</td></tr>
<tr><td>Feb. 15 purchase</td><td>25,000</td><td>$16</td><td>$400,000</td></tr>
<tr><td>Feb. 18 purchase</td><td>30,000</td><td>$18</td><td>$540,000</td></tr>
<tr><td><strong>Total</strong></td><td><strong>70,000</strong></td><td></td><td><strong>$1,150,000</strong></td></tr>
</tbody>
</table>
</div>
<div class="section"><h3>Apply FIFO to the 45,000 Units Sold</h3>
<p>FIFO means the <strong>first costs in are the first costs out</strong>.</p>
<table>
<thead><tr><th>Units Sold from Layer</th><th>Cost per Unit</th><th>COGS</th></tr></thead>
<tbody>
<tr><td>15,000</td><td>$14</td><td>$210,000</td></tr>
<tr><td>25,000</td><td>$16</td><td>$400,000</td></tr>
<tr><td>5,000</td><td>$18</td><td>$90,000</td></tr>
<tr><td colspan="2"><strong>Total COGS</strong></td><td><strong>$700,000</strong></td></tr>
</tbody>
</table>
</div>
<div class="section"><h3>Verify with Ending Inventory</h3>
<p>After selling 45,000 units, 25,000 units remain from the most recent $18 layer.</p>
<div class="calc">25,000 × $18 = <strong>$450,000 ending inventory</strong></div>
<div class="calc">$700,000 COGS + $450,000 ending inventory = $1,150,000 total cost available</div>
<p>The reconciliation confirms the FIFO calculation.</p>
</div>
<div class="section"><h3>What Information Does Not Affect COGS Here?</h3>
<p>The sales price of $22 per unit affects <strong>sales revenue</strong>, not the inventory cost assigned to COGS. FIFO uses the historical inventory costs of $14, $16, and $18.</p>
</div>
<div class="answer-analysis"><h3>Answer Analysis</h3><table><thead><tr><th>Option</th><th>Analysis</th></tr></thead><tbody>
<tr><td>A. $610,000</td><td>Incorrect. This does not assign enough of the older cost layers to the 45,000 units sold.</td></tr>
<tr><td>B. $810,000</td><td>Incorrect. This overstates FIFO COGS.</td></tr>
<tr class="correct-row"><td>C. $700,000</td><td>Correct. 15,000×$14 + 25,000×$16 + 5,000×$18 = $700,000.</td></tr>
<tr><td>D. $780,000</td><td>Incorrect. This does not reflect the FIFO layer sequence.</td></tr>
</tbody></table></div>
<div class="summary"><h3>Summary</h3><p>Under FIFO, sell the $14 layer first, then the $16 layer, then 5,000 units from the $18 layer. Total COGS is $700,000.</p></div></div>`,
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
      explanation: `<div class="maxwell-exp"><div class="header"><div class="qid">Question ID: 8</div><h2>Double-Declining-Balance Depreciation</h2></div>
<div class="answer"><p><strong>Answer:</strong> <strong>Choice C: $12,500</strong> is correct. The question gives mileage data, but it explicitly requires the double-declining-balance method.</p></div>
<div class="section"><h3>Step 1: Determine the DDB Rate</h3>
<p>Straight-line rate for an 8-year life:</p>
<div class="calc">1 ÷ 8 = 12.5%</div>
<p>Double the straight-line rate:</p>
<div class="calc">12.5% × 2 = <strong>25% DDB rate</strong></div>
</div>
<div class="section"><h3>Step 2: Apply the Rate to Beginning Book Value</h3>
<p>In Year 1, beginning book value equals the original cost of $50,000.</p>
<div class="calc">$50,000 × 25% = <strong>$12,500 depreciation expense</strong></div>
<p>Ending book value after Year 1:</p>
<div class="calc">$50,000 − $12,500 = <strong>$37,500</strong></div>
</div>
<div class="section"><h3>Why the Salvage Value Is Not Subtracted First</h3>
<p>Under double-declining balance, depreciation is generally computed by multiplying the accelerated rate by beginning book value rather than by first subtracting salvage value from cost.</p>
<p>The salvage value still matters as a <strong>floor</strong>: depreciation should not reduce the asset's carrying amount below its salvage value.</p>
</div>
<div class="section"><h3>Why the Mileage Data Is a Distractor</h3>
<p>The 80,000 estimated miles and 10,000 miles driven would matter under a units-of-activity method, but the question specifically requires DDB.</p>
<div class="tip"><strong>CPA Exam habit:</strong> Identify the required depreciation method before using any numerical data. Questions often include information relevant to a different method as a distractor.</div>
</div>
<div class="answer-analysis"><h3>Answer Analysis</h3><table><thead><tr><th>Option</th><th>Analysis</th></tr></thead><tbody>
<tr><td>A. $10,000</td><td>Incorrect. This is not the Year 1 result under a 25% DDB rate.</td></tr>
<tr><td>B. $11,250</td><td>Incorrect. DDB applies 25% to the $50,000 beginning book value in Year 1.</td></tr>
<tr class="correct-row"><td>C. $12,500</td><td>Correct. $50,000 × 25% = $12,500.</td></tr>
<tr><td>D. $8,750</td><td>Incorrect. This is not the result of the required double-declining-balance calculation.</td></tr>
</tbody></table></div>
<div class="summary"><h3>Summary</h3><p>For an 8-year asset, the DDB rate is 25%. Apply that rate to the $50,000 beginning book value: Year 1 depreciation is $12,500.</p></div></div>`,
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
      explanation: `<div class="maxwell-exp"><div class="header"><div class="qid">Question ID: 9</div><h2>Finance Lease: First-Year Interest Expense</h2></div>
<div class="answer"><p><strong>Answer:</strong> <strong>Choice B: $12,637</strong> is correct. First-year interest expense equals the beginning lease liability multiplied by the lease interest rate.</p></div>
<div class="section"><h3>Step 1: Measure the Initial Lease Liability</h3>
<p>The annual payments are made at year-end, so the supplied annuity factor is applied to the five $50,000 payments.</p>
<div class="calc">$50,000 × 4.21236 = <strong>$210,618 initial lease liability</strong></div>
<p>The problem also states that the present value equals the machinery's fair value.</p>
</div>
<div class="section"><h3>Step 2: Understand the Initial Entry</h3>
<table>
<thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Right-of-use asset</td><td>$210,618</td><td></td></tr>
<tr><td>Lease liability</td><td></td><td>$210,618</td></tr>
</tbody>
</table>
</div>
<div class="section"><h3>Step 3: Calculate Year 1 Interest</h3>
<p>Because the first payment occurs at the <strong>end</strong> of Year 1, the full beginning lease liability accrues interest for the year.</p>
<div class="calc">$210,618 × 6% = $12,637.08 ≈ <strong>$12,637</strong></div>
</div>
<div class="section"><h3>Step 4: Split the First Payment</h3>
<table>
<thead><tr><th>Payment Component</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Total cash payment</td><td>$50,000</td></tr>
<tr><td>Interest expense</td><td>($12,637)</td></tr>
<tr><td>Principal reduction</td><td><strong>$37,363</strong></td></tr>
</tbody>
</table>
<p>Remaining lease liability:</p>
<div class="calc">$210,618 − $37,363 = <strong>$173,255</strong></div>
<div class="tip"><strong>Core idea:</strong> Interest is based on the outstanding lease liability, not on the annual cash payment.</div>
</div>
<div class="answer-analysis"><h3>Answer Analysis</h3><table><thead><tr><th>Option</th><th>Analysis</th></tr></thead><tbody>
<tr><td>A. $15,000</td><td>Incorrect. Interest must be based on the beginning lease liability of $210,618, not on an arbitrary portion of the payments.</td></tr>
<tr class="correct-row"><td>B. $12,637</td><td>Correct. $210,618 × 6% = approximately $12,637.</td></tr>
<tr><td>C. $13,561</td><td>Incorrect. This does not equal 6% of the initial lease liability.</td></tr>
<tr><td>D. $18,106</td><td>Incorrect. This overstates first-year interest based on the stated liability and rate.</td></tr>
</tbody></table></div>
<div class="summary"><h3>Summary</h3><p>First find the present value of the lease payments: $210,618. Then multiply the beginning lease liability by 6%. First-year interest expense is approximately $12,637.</p></div></div>`,
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
      explanation: `<div class="maxwell-exp"><div class="header"><div class="qid">Question ID: 10</div><h2>Correction of a Prior-Period Depreciation Error</h2></div>
<div class="answer"><p><strong>Answer:</strong> <strong>Choice B: Debit Retained Earnings $20,000; Credit Accumulated Depreciation $20,000</strong> is correct. The omitted depreciation relates to prior periods, so the correction is made through beginning retained earnings rather than current-year depreciation expense.</p></div>
<div class="section"><h3>Step 1: Calculate Annual Depreciation</h3>
<p>The vehicle cost $40,000, has a 4-year life, and has no salvage value.</p>
<div class="calc">$40,000 ÷ 4 years = <strong>$10,000 annual depreciation</strong></div>
</div>
<div class="section"><h3>Step 2: Determine the Prior-Period Error</h3>
<p>Using the treatment in the question, depreciation was missed in Year 2 and Year 3:</p>
<table>
<thead><tr><th>Year</th><th>Missed Depreciation</th></tr></thead>
<tbody>
<tr><td>Year 2</td><td>$10,000</td></tr>
<tr><td>Year 3</td><td>$10,000</td></tr>
<tr><td><strong>Total prior-period understatement</strong></td><td><strong>$20,000</strong></td></tr>
</tbody>
</table>
</div>
<div class="section"><h3>Step 3: Record the Correction in Year 4</h3>
<table>
<thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Retained Earnings</td><td>$20,000</td><td></td></tr>
<tr><td>Accumulated Depreciation</td><td></td><td>$20,000</td></tr>
</tbody>
</table>
<p>The debit to retained earnings corrects the cumulative overstatement of prior-period income. The credit to accumulated depreciation corrects the understated contra-asset balance.</p>
</div>
<div class="section"><h3>Why Not Debit Current-Year Depreciation Expense?</h3>
<p>The $20,000 omission belongs to prior periods. Charging it to Year 4 depreciation expense would incorrectly make the current year's operating results absorb an error from earlier years.</p>
<p>Year 4's normal depreciation is recorded separately as the current-period expense.</p>
<div class="tip"><strong>CPA Exam distinction:</strong> A prior-period accounting <em>error</em> is different from a change in estimate. Errors are corrected retrospectively through the appropriate beginning equity balance when necessary.</div>
</div>
<div class="answer-analysis"><h3>Answer Analysis</h3><table><thead><tr><th>Option</th><th>Analysis</th></tr></thead><tbody>
<tr><td>A. Dr. Retained Earnings $30,000; Cr. Accumulated Depreciation $30,000</td><td>Incorrect. The missed prior-period depreciation in the question totals $20,000, not $30,000.</td></tr>
<tr class="correct-row"><td>B. Dr. Retained Earnings $20,000; Cr. Accumulated Depreciation $20,000</td><td>Correct. This corrects the two prior years of omitted $10,000 annual depreciation.</td></tr>
<tr><td>C. Dr. Depreciation Expense $20,000; Cr. Accumulated Depreciation $20,000</td><td>Incorrect. Prior-period depreciation should not be charged to current-year depreciation expense.</td></tr>
<tr><td>D. Dr. Depreciation Expense $30,000; Cr. Accumulated Depreciation $30,000</td><td>Incorrect. Both the amount and the use of current depreciation expense are incorrect.</td></tr>
</tbody></table></div>
<div class="summary"><h3>Summary</h3><p>Annual depreciation is $10,000. Two prior years were omitted, so the cumulative error is $20,000. Correct it by debiting retained earnings and crediting accumulated depreciation for $20,000.</p></div></div>`,
    },
  ],
};
