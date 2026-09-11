import type { Quiz } from "../types";

export const cashQuiz: Quiz = {
  key: "cash",
  title: "Cash",
  subtitle: "Cash",
  discipline: "intermediate",
  course: "intermediate",
  questions: [
    {
      id: "8608",
      prompt: `Star Corp. had the following accounts and balances in its general ledger as of December 31:

Petty cash: $500

XYZ Bank—checking account: $20,000

Marketable equity security: $10,000

Marketable debt security: $7,500

ABC Bank—depository account: $5,000

What amount should Star report as cash and cash equivalents in the balance sheet as of December 31?`,
      choices: [
        `$42,500`,
        `$35,000`,
        `$25,500`,
        `$25,000`,
      ],
      correctIndex: 2,
      explanation: `<h3 class="exp-title">Explanation:</h3><p>Under U.S. GAAP, &quot;Cash and Cash Equivalents&quot; includes currency, demand deposits, and highly liquid investments with an original maturity of three months or less.</p><p>Analysis of Accounts:</p><p>✅ Petty cash ($500): Included as it is currency on hand.</p><p>✅ XYZ Bank—checking account ($20,000): Included as it is a demand deposit.</p><p>✅ ABC Bank—depository account ($5,000): Included as it is a demand deposit.</p><p>❌ Marketable equity security ($10,000): Excluded. Equity securities have no maturity date and their value fluctuates, so they cannot be converted to a &quot;known&quot; amount of cash.</p><p>❌ Marketable debt security ($7,500): Excluded. To be a cash equivalent, this security must have an original maturity of three months or less. Since the maturity is not given, it cannot be included.</p><p>Calculation:</p><p>Total = $500 (Petty Cash) + $20,000 (Checking) + $5,000 (Depository) = $25,500.</p><p>Correct Answer: $25,50</p>`,
    },
    {
      id: "4898",
      prompt: `Which of the following would typically be added to the balance per books during a bank reconciliation?`,
      choices: [
        `Service charges`,
        `Non-Sufficient Funds (NSF) check`,
        `Bank credits`,
        `Outstanding checks`,
      ],
      correctIndex: 2,
      explanation: `<h3 class="exp-title">Bank Reconciliation: Items Added to Book Balance</h3><p>Explanation</p><p>During a bank reconciliation, certain items need to be added to the balance per books to reconcile with the bank statement. These are typically items that have been recorded by the bank but not yet in the company&#x27;s books.</p><p>Correct Answer Analysis</p><p>Bank credits (Correct)</p><p>Bank credits such as interest earned on the account, cash back rewards, or automatic deposits are typically recorded by the bank but may not yet be recorded in the company&#x27;s books. During reconciliation, these amounts need to be added to the balance per books to match the bank&#x27;s records.</p><p>Incorrect Answer Analysis</p><p>Service charges (Incorrect)</p><p>Service charges are fees imposed by the bank that reduce the account balance. These are typically deducted from (not added to) the balance per books during reconciliation, as they have reduced the bank balance but haven&#x27;t yet been recorded in the company&#x27;s books.</p><p>Non-Sufficient Funds (NSF) checks (Incorrect)</p><p>NSF checks represent customer payments that were initially recorded as receipts but later bounced due to insufficient funds. These amounts should be deducted from (not added to) the balance per books during reconciliation to reverse the original receipt entry.</p><p>Outstanding checks (Incorrect)</p><p>Outstanding checks are checks that have been issued by the company but have not yet cleared the bank. These are deducted from the balance per bank (not added to the balance per books) during reconciliation.</p><p>Journal Entry Example</p><p>When bank credits are identified during reconciliation, the following journal entry would be made:</p><p>Account<br>Debit<br>Credit</p><p>| Cash<br>| $XXX<br>|</p><p>| Interest Income (or other appropriate account)<br>|<br>| $XXX</p><p>| To record bank interest earned as shown on bank statement</p><p>Summary</p><p>In a bank reconciliation, items added to the balance per books include:</p><p>Bank credits (interest earned)</p><p>Direct deposits not recorded in books</p><p>Collection of notes receivable by bank</p><p>Positive adjustments made by the bank</p><p>Understanding which items to add or subtract from the book balance is crucial for accurate bank reconciliation and maintaining proper financial records.</p>`,
    },
    {
      id: "4901",
      prompt: `ABC Corp. received its bank statement with a balance of $45,000. After analyzing the statement, ABC found there was a $2,000 deposit in transit and outstanding checks of $3,000. What is the adjusted cash balance in ABC's books?`,
      choices: [
        `$42,000`,
        `$44,000`,
        `$46,000`,
        `$49,000`,
      ],
      correctIndex: 1,
      explanation: `<h3 class="exp-title">Bank Reconciliation Calculation</h3><p>The Correct Answer: $44,000</p><p>The adjusted cash balance is calculated by starting with the bank statement balance and making necessary adjustments for items not yet recorded by the bank.</p><p>Bank Reconciliation Explanation</p><p>When reconciling bank statements with company records, we need to adjust the bank balance to reflect transactions that haven&#x27;t been processed by the bank yet:</p><p>Deposits in transit: Money collected and recorded by the company but not yet reflected in the bank statement</p><p>Outstanding checks: Checks written and recorded by the company but not yet cleared by the bank</p><p>Calculation</p><p>Item<br>Amount</p><p>| Bank Statement Balance<br>| $45,000</p><p>| Add: Deposits in Transit<br>| + $2,000</p><p>| Less: Outstanding Checks<br>| - $3,000</p><p>| Adjusted Cash Balance<br>| $44,000</p><p>Analysis of All Options</p><p>Option<br>Analysis</p><p>| $42,000<br>| Incorrect. This would result if you subtracted both the deposit in transit and the outstanding checks ($45,000 - $2,000 - $3,000).</p><p>| $44,000<br>| Correct. Bank balance + Deposits in transit - Outstanding checks: $45,000 + $2,000 - $3,000 = $44,000</p><p>| $46,000<br>| Incorrect. This would result if you added the outstanding checks rather than subtracting them ($45,000 + $2,000 - $1,000).</p><p>| $49,000<br>| Incorrect. This would result from adding both adjustments ($45,000 + $2,000 + $2,000), which is not the proper treatment for outstanding checks.</p><p>Summary</p><p>When reconciling a bank statement, the formula for calculating the adjusted cash balance is:</p><p>Bank Statement Balance + Deposits in Transit - Outstanding Checks = Adjusted Cash Balance</p><p>$45,000 + $2,000 - $3,000 = $44,000</p><p>This adjusted cash balance of $44,000 should match the cash balance in the company&#x27;s books after all reconciling items are accounted for.</p>`,
    },
    {
      id: "8604",
      prompt: `Cook Co. had the following balances at December 31, Year 2:

Cash in checking account: $350,000

Cash in money market account: $250,000

U.S. Treasury bill, purchased 12/1/Year 2, maturing 2/28/Year 3: $800,000

U.S. Treasury bond, purchased 3/1/Year 2, maturing 2/28/Year 3: $500,000

Cook's policy is to treat as cash equivalents all highly liquid investments with a maturity of three months or less when purchased. What amount should Cook report as cash and cash equivalents in its December 31, Year 2, balance sheet?`,
      choices: [
        `$600,000`,
        `$1,150,000`,
        `$1,400,000`,
        `$1,900,000`,
      ],
      correctIndex: 2,
      explanation: `<h3 class="exp-title">Cash and Cash Equivalents Classification</h3><p>Analysis of Cash and Cash Equivalents</p><p>Company Policy</p><p>Per Cook Co.&#x27;s policy, cash equivalents include highly liquid investments with a maturity of three months or less when purchased.</p><p>Item<br>Amount<br>Classification<br>Reason</p><p>| Cash in checking account<br>| $350,000<br>| Cash<br>| Immediate availability</p><p>| Cash in money market account<br>| $250,000<br>| Cash<br>| Immediate availability</p><p>| U.S. Treasury bill<br>| $800,000<br>| Cash Equivalent<br>| Purchased 12/1/Year 2, maturity is 2/28/Year 3 (less than 3 months from purchase)</p><p>| U.S. Treasury bond<br>| $500,000<br>| Not Cash Equivalent<br>| Purchased 3/1/Year 2, maturity 2/28/Year 3 (almost 12 months maturity from purchase)</p><p>Calculation</p><p>Items Included in Cash &amp; Cash Equivalents</p><p>Cash in checking account: $350,000</p><p>Cash in money market account: $250,000</p><p>U.S. Treasury bill: $800,000</p><p>Total: $1,400,000</p><p>Items Excluded</p><p>U.S. Treasury bond: $500,000</p><p>Reason: Maturity exceeds three months from purchase date</p><p>Answer Options</p><p>$600,000</p><p>Includes only cash accounts, omits Treasury bill</p><p>$1,150,000</p><p>Incorrectly includes the wrong Treasury instrument</p><p>$1,400,000</p><p>Correctly includes cash accounts and Treasury bill</p><p>$1,900,000</p><p>Incorrectly includes all instruments</p><p>Correct Answer</p><p>$1,400,000</p><p>Key Takeaways</p><p>Cash equivalents are short-term, highly liquid investments that are readily convertible to known amounts of cash.</p><p>The three-month maturity rule is measured from the purchase date, not the reporting date.</p><p>Treasury bills with original maturities of three months or less qualify as cash equivalents.</p><p>Balance sheet presentation combines cash and cash equivalents as a single line item.</p>`,
    },
    {
      id: "8605",
      prompt: `The following are held by Smite Co. The bond sinking fund is restricted for long-term debt retirement and is not available for general use:

Cash in checking account: $20,000

Cash in bond sinking fund account: $30,000

Post-dated check from customer dated one month from balance sheet date: $250

Petty cash: $200

Commercial paper (matures in two months): $7,000

Certificate of deposit (matures in six months): $5,000

What amount should be reported as cash and cash equivalents on Smite's balance sheet?`,
      choices: [
        `$32,200`,
        `$27,200`,
        `$57,200`,
        `$27,450`,
      ],
      correctIndex: 1,
      explanation: `<h3 class="exp-title">Cash and Cash Equivalents: Classification Analysis</h3><p>Correct Answer:</p><p>$27,200</p><p>Explanation</p><p>To determine the amount to be reported as cash and cash equivalents, we must include only items that are either cash or can be readily converted to cash within a three-month period from the balance sheet date.</p><p>Analysis of Items</p><p>Item<br>Amount<br>Classification<br>Reasoning</p><p>| Cash in checking account<br>| $20,000<br>| Cash equivalent<br>| Immediately available cash</p><p>| Cash in bond sinking fund account<br>| $30,000<br>| Not a cash equivalent<br>| Restricted for specific purpose</p><p>| Post-dated check (one month)<br>| $250<br>| Not a cash equivalent<br>| Not currently negotiable</p><p>| Petty cash<br>| $200<br>| Cash equivalent<br>| Immediately available cash</p><p>| Commercial paper (two months)<br>| $7,000<br>| Cash equivalent<br>| Matures within 3 months</p><p>| Certificate of deposit (six months)<br>| $5,000<br>| Not a cash equivalent<br>| Matures beyond 3 months</p><p>Calculation</p><p>Cash and cash equivalents = Cash in checking account + Petty cash + Commercial paper</p><p>Cash and cash equivalents = $20,000 + $200 + $7,000 = $27,200</p><p>Key Accounting Principles</p><p>• Cash includes currency, coins, checking accounts, and petty cash.</p><p>• Cash equivalents are short-term, highly liquid investments that are readily convertible to known amounts of cash and so near maturity (typically within 3 months) that they present insignificant risk of changes in value.</p><p>• Restricted cash (such as bond sinking funds) is generally excluded from cash and cash equivalents.</p><p>• Post-dated checks are typically classified as receivables until the date when they become negotiable.</p><p>Summary</p><p>When classifying items as cash and cash equivalents, only include cash and investments that mature within three months. Restricted funds, post-dated checks, and longer-term investments are excluded from this classification. In this case, the total amount of cash and cash equivalents is $27,200.</p>`,
    },
    {
      id: "4907",
      prompt: `Mountain Co.'s monthly bank statement shows a balance of $60,000. Reconciliation of the statement with company books reveals the following:

Bank service charge: $20

Insufficient funds check: $700

Checks outstanding: $2,000

Deposits in transit: $400

A check deposited by Mountain and cleared by the bank for $150 was improperly recorded by Mountain as $105. What is the correct (adjusted) cash balance after completing the bank reconciliation?`,
      choices: [
        `$58,400`,
        `$57,775`,
        `$57,825`,
        `$60,000`,
      ],
      correctIndex: 0,
      explanation: `<h3 class="exp-title">Bank Reconciliation Analysis</h3><p>Explanation</p><p>To determine the correct cash balance after reconciliation, we need to adjust the bank statement balance with items not yet reflected in either the bank&#x27;s or company&#x27;s records.</p><p>Bank Reconciliation Analysis</p><p>Item<br>Amount<br>Effect on Reconciliation</p><p>| Bank statement balance<br>| $60,000<br>| Starting point</p><p>| Add: Deposits in transit<br>| +$400<br>| Not yet recorded by bank</p><p>| Less: Outstanding checks<br>| -$2,000<br>| Not yet cleared by bank</p><p>| Bank service charge<br>| $20<br>| Already reflected in bank balance</p><p>| NSF check<br>| $700<br>| Already reflected in bank balance</p><p>| Check recording error ($150 vs $105)<br>| $45<br>| Already correct amount in bank balance</p><p>For reconciliation purposes:</p><p>The bank service charge and NSF check are already reflected in the bank statement balance of $60,000.</p><p>The recording error is already reflected correctly in the bank&#x27;s records as $150.</p><p>We only need to adjust for deposits in transit (add) and outstanding checks (subtract).</p><p>Calculation</p><p>Bank Statement Balance: $60,000</p><p>Add: Deposits in Transit: +$400</p><p>Less: Outstanding Checks: -$2,000</p><p>Reconciled Cash Balance: $58,400</p><p>The company will need to make the following journal entry to account for items it hasn&#x27;t yet recorded:</p><p>Account<br>Debit<br>Credit</p><p>| Cash<br>| 45<br>|</p><p>| Bank Service Charge Expense<br>| 20<br>|</p><p>| Accounts Receivable<br>| 700<br>|</p><p>| Cash<br>|<br>| 720</p><p>Summary</p><p>After proper reconciliation, Mountain Co.&#x27;s correct cash balance is $58,400.</p><p>✓ $58,400</p><p>✗ $57,775</p><p>✗ $57,825</p><p>✗ $60,000</p>`,
    },
    {
      id: "4897",
      prompt: `On December 31, a company has the following bank accounts and corresponding cash balances:

| Florida Bank
|

| Operating Account - Orlando
| ($400,000)

| Operating Account - Tampa
| 300,000

| Operating Account - Miami
| 50,000

| Savings Account
| 500,000

| Georgia Bank
|

| Checking
| ($375,000)

How should the company report the above bank account balances in the balance sheet at December 31?`,
      choices: [
        `Cash of $75,000.`,
        `Cash of $450,000 and a liability of $375,000.`,
        `Cash of $850,000 and a liability of $775,000.`,
        `Cash of $800,000 and a liability of $725,000.`,
      ],
      correctIndex: 1,
      explanation: `<h3 class="exp-title">Bank Account Balance Reporting</h3><p>Explanation</p><p>When presenting bank account balances in a balance sheet, we need to carefully consider how to treat negative balances (overdrafts). Generally, if a company has multiple accounts with the same financial institution, these can be netted together. However, accounts at different financial institutions should be presented separately.</p><p>Analysis of Bank Accounts</p><p>Financial Institution<br>Account<br>Balance</p><p>| Florida Bank<br>| Operating Account - Orlando<br>| ($400,000)</p><p>| Operating Account - Tampa<br>| $300,000</p><p>| Operating Account - Miami<br>| $50,000</p><p>| Savings Account<br>| $500,000</p><p>| Georgia Bank<br>| Checking<br>| ($375,000)</p><p>Netting Calculation:</p><p>Florida Bank (Net): ($400,000) + $300,000 + $50,000 + $500,000 = $450,000</p><p>Georgia Bank: ($375,000) = $375,000 liability (overdraft)</p><p>Balance Sheet Presentation</p><p>Assets section:</p><p>Cash (Florida Bank) - $450,000</p><p>Liabilities section:</p><p>Bank Overdraft (Georgia Bank) - $375,000</p><p>Conclusion</p><p>The correct presentation is Cash of $450,000 and a liability of $375,000. The Florida Bank accounts can be netted together to show a cash asset of $450,000, while the Georgia Bank overdraft must be presented as a separate liability of $375,000.</p><p>Note: Bank overdrafts should be reported as current liabilities unless they can be netted against positive balances in other accounts at the same financial institution, as we did with the Florida Bank accounts.</p>`,
    },
    {
      id: "4906",
      prompt: `On December 31, Stein Co.'s checkbook balance was $12,000. In its safe, Stein held the following items:

A $5,000 check payable to Stein, postdated January 5, and not included in the December 31 checkbook balance, from a sale made in December.

A $2,000 check payable to Stein, deposited December 17 and included in the December 31 checkbook balance, but returned by the bank on December 29 marked "NSF."

The check was redeposited on January 3 and cleared on January 10. What amount should Stein report as cash in its December 31 balance sheet?`,
      choices: [
        `$12,000`,
        `$10,000`,
        `$15,000`,
        `$17,000`,
      ],
      correctIndex: 1,
      explanation: `<h3 class="exp-title">Cash Reporting on Balance Sheet</h3><p>Explanation</p><p>To determine the correct cash balance for the balance sheet, we need to analyze each item and determine which should be included in cash as of December 31.</p><p>Analysis of Items</p><p>Item<br>Treatment<br>Amount</p><p>| December 31 checkbook balance<br>| Starting point<br>| $12,000</p><p>| $5,000 postdated check from December sale<br>| Exclude - not available until January 5<br>| $0</p><p>| $2,000 NSF check in checkbook balance<br>| Deduct - not collectable as of December 31<br>| ($2,000)</p><p>| Cash balance for balance sheet<br>|<br>| $10,000</p><p>Reasoning:</p><p>Postdated Check ($5,000): This check cannot be included in the December 31 cash balance because it is not available for use until January 5. Even though it represents a sale made in December, the check is not legally negotiable until the date shown on the check.</p><p>NSF Check ($2,000): This check was returned by the bank marked &quot;Not Sufficient Funds&quot; on December 29, meaning it was not honored by the bank. Even though it was included in the checkbook balance, it does not represent available cash as of December 31 and must be subtracted.</p><p>Correct Answer</p><p>$12,000</p><p>$10,000 ✓</p><p>$15,000</p><p>$17,000</p><p>Summary</p><p>For financial reporting purposes, cash should include only those items that are available for immediate use as of the balance sheet date. The postdated check is not available for use until January 5, and the NSF check has already been rejected by the bank. Therefore, Stein Co. should report a cash balance of $10,000 ($12,000 checkbook balance - $2,000 NSF check) on its December 31 balance sheet.</p>`,
    },
    {
      id: "8606",
      prompt: `The following information pertains to Grey Co. at December 31, Year 1:

Checkbook balance: $12,000

Bank statement balance: $16,000

Check drawn on Grey's account, payable to a vendor, dated and recorded 12/31/Year 1 but not mailed until 1/10/Year 2: $1,800

On Grey's December 31, Year 1, balance sheet, what amount should be reported as cash?`,
      choices: [
        `$16,000`,
        `$13,800`,
        `$14,200`,
        `$12,000`,
      ],
      correctIndex: 1,
      explanation: `<h3 class="exp-title">Cash Reporting on the Balance Sheet</h3><p>Answer Options:</p><p>A) $16,000</p><p>B) $13,800 ✓</p><p>C) $14,200</p><p>D) $12,000</p><p>Understanding Cash Reporting</p><p>Before diving into the solution, it&#x27;s important to understand the fundamental concepts of cash reporting:</p><p>Book Balance: The company&#x27;s internal record of cash. While this is the starting point, it must be adjusted for items that do not meet the definition of a disbursement at year-end.</p><p>The &quot;Held Check&quot; Rule: For a check to reduce cash on the balance sheet, it must be written, recorded, AND delivered or mailed to the payee. If a check is &quot;held&quot; in-house, the company still maintains control over the funds.</p><p>Cash Reporting Principle: The balance sheet must reflect the actual cash available to the company as of the reporting date. Funds represented by unmailed checks are still considered assets of the company.</p><p>Step-by-Step Solution</p><p>Step 1: Identify the Status of the $1,800 Check</p><p>The check for $1,800 was recorded on 12/31/Year 1, which means it has already been deducted from the $12,000 book balance. However, the facts state it was not mailed until 1/10/Year 2.</p><p>Because the check was still in Grey Co.&#x27;s possession on December 31, no actual payment occurred from a financial reporting perspective. The company still had the legal right and physical ability to void that check or use those funds for other purposes.</p><p>Step 2: Determine the Necessary Adjustment</p><p>Since the book balance was reduced by a check that was never sent, we must &quot;add back&quot; that amount to reach the correct cash balance for the balance sheet:</p><p>Reported Checkbook Balance: $12,000</p><p>Add: Held/Unmailed Check: $1,800</p><p>Adjusted Cash Balance: $13,800</p><p>Step 3: Journal Entry Perspective</p><p>To report this correctly, the company should effectively reverse the initial entry at year-end:</p><p>Account<br>Debit<br>Credit</p><p>| Cash<br>| $1,800<br>|</p><p>| Accounts Payable<br>|<br>| $1,800</p><p>Analysis of Answer Choices</p><p>A) $16,000 - Incorrect</p><p>This is the bank statement balance. While the bank balance does not yet reflect the $1,800 check, it also doesn&#x27;t account for other potential timing differences (like deposits in transit) that might be missing from the prompt.</p><p>B) $13,800 - Correct</p><p>This takes the book balance ($12,000) and adds back the $1,800 check. Because the check was not mailed, the cash is still considered an asset of Grey Co. on 12/31.</p><p>C) $14,200 - Incorrect</p><p>This is a distractor amount often calculated by incorrectly adjusting the bank balance ($16,000 - $1,800), which ignores the starting point of the company&#x27;s records.</p><p>D) $12,000 - Incorrect</p><p>This is the unadjusted book balance. It is incorrect because it reflects a deduction for a check that was never mailed/delivered to the vendor by year-end.</p><p>Key Takeaways</p><p>The Mailing Requirement: For a payment to be considered &quot;disbursed,&quot; the check must be out of the control of the company. Held checks must be added back to the cash balance.</p><p>Control over Assets: If you can still walk to a desk and tear up the check, the cash is still yours.</p><p>Adjusted Book Balance: On the CPA exam, always check if &quot;book balance&quot; items meet the criteria for recognition before reporting them on the financial statements.</p><p>The correct amount to report as cash on Grey&#x27;s December 31, Year 1, balance sheet is $13,800.</p>`,
    },
    {
      id: "8838",
      prompt: `A corporation has the following balances at year end:

Item
Amount

| Cash in bank
| $3,000

| Petty cash
| $120

| Money market account
| $10,000

The cashier is holding postdated checks from customers totaling $500 to be deposited on the date of the check. Further, $5,000 of the money market account is subject to a compensating-balance arrangement for a loan due in three years.

What amount should be reported as cash and cash equivalents in the year-end balance sheet?`,
      choices: [
        `$8,120`,
        `$8,500`,
        `$8,620`,
        `$18,620`,
      ],
      correctIndex: 0,
      explanation: `<h3 class="exp-title">Cash and Cash Equivalents: What to Include?</h3><p>Overview: Cash and cash equivalents are assets that are immediately available to pay bills or run daily operations. Think: cash in the bank, petty cash, and certain highly liquid investments.</p><p>Step-by-Step Analysis</p><p>Start with the total of all possible cash-like items: Cash in bank: $3,000 (Yes, fully available), Petty cash: $120 (Yes, on hand and available), Money market account: $10,000 (Partially, see below), Postdated checks: $500 (No, not usable until check date).</p><p>Identify restrictions: $5,000 of the money market account is set aside (restricted) as a compensating balance for a loan due in three years. This means it&#x27;s not available for immediate use.</p><p>Calculate cash and cash equivalents: Cash in bank + Petty cash + (Money market account - Restricted portion) = $3,000 + $120 + ($10,000 - $5,000) = $8,120.</p><p>Calculation Summary</p><p>Item<br>Amount<br>Included?<br>Reason</p><p>| Cash in bank<br>| $3,000<br>| ✓ Yes<br>| Fully available</p><p>| Petty cash<br>| $120<br>| ✓ Yes<br>| On hand and available</p><p>| Money market account (unrestricted)<br>| $5,000<br>| ✓ Yes<br>| Liquid portion available for use</p><p>| Money market account (restricted)<br>| $5,000<br>| ✗ No<br>| Compensating balance for loan</p><p>| Postdated checks<br>| $500<br>| ✗ No<br>| Not yet available for use</p><p>| Total Cash &amp; Cash Equivalents<br>| $8,120<br>|</p><p>Common Mistakes</p><p>Mistake: Including postdated checks. Why wrong: Postdated checks aren&#x27;t available until their date arrives—think of them as &#x27;future money.&#x27;</p><p>Mistake: Including both postdated checks and restricted cash. Why wrong: Neither are available now.</p><p>Mistake: Adding up everything, ignoring restrictions and timing. Why wrong: Overstates available cash by including restricted and unavailable funds.</p><p>Key Takeaways</p><p>Only include cash and investments that are available for immediate use.</p><p>Exclude: Restricted funds (e.g., compensating balances for long-term loans), Postdated checks (not cash yet).</p><p>Remember: If you can&#x27;t spend it right now, it&#x27;s NOT a cash equivalent.</p><p>Correct Answer: $8,120</p>`,
    },
  ],
};
