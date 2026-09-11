import type { Quiz } from "../types";

export const financialStatementsQuiz: Quiz = {
  key: "financial-statements",
  title: "Financial Statements",
  subtitle: "Financial Statements",
  discipline: "intermediate",
  course: "intermediate",
  questions: [
    {
      id: "8447",
      prompt: `Below is a list of account balances for Orion Global:

Buildings, net: $200,000

Accounts Payable: $20,000

Prepaid Expenses: $25,000

Land: $120,000

Common Stock: $250,000

Patents: $50,000

Inventory: $75,000

Retained Earnings: $180,000

Equipment, net: $150,000

Accounts Receivable: $90,000

Unearned Revenue: $15,000

Cash: $40,000

What are the total current assets and total noncurrent assets for Orion Global?`,
      choices: [
        `Current Assets: $260,000; Noncurrent Assets: $520,000`,
        `Current Assets: $230,000; Noncurrent Assets: $520,000`,
        `Current Assets: $240,000; Noncurrent Assets: $500,000`,
        `Current Assets: $230,000; Noncurrent Assets: $540,000`,
      ],
      correctIndex: 1,
      explanation: `<h3 class="exp-title">Asset Classification Analysis</h3><p>Asset Classification Process</p><p>To determine the total current and noncurrent assets, we need to identify and classify the asset accounts from Orion Global&#x27;s balance sheet items.</p><p>Step 1: Identify Asset Accounts</p><p>From the provided list, these are the asset accounts:</p><p>Cash: $40,000</p><p>Accounts Receivable: $90,000</p><p>Inventory: $75,000</p><p>Prepaid Expenses: $25,000</p><p>Land: $120,000</p><p>Equipment, net: $150,000</p><p>Buildings, net: $200,000</p><p>Patents: $50,000</p><p>Classification of Assets</p><p>Current Assets</p><p>Assets expected to be converted to cash or used up within one year:</p><p>Cash: $40,000</p><p>Accounts Receivable: $90,000</p><p>Inventory: $75,000</p><p>Prepaid Expenses: $25,000</p><p>Total Current Assets = $230,000</p><p>Noncurrent Assets</p><p>Assets that provide long-term benefits:</p><p>Land: $120,000</p><p>Equipment, net: $150,000</p><p>Buildings, net: $200,000</p><p>Patents: $50,000</p><p>Total Noncurrent Assets = $520,000</p><p>Summary of Asset Classification</p><p>Asset Category<br>Included Accounts<br>Total Amount</p><p>| Current Assets<br>| Cash, Accounts Receivable, Inventory, Prepaid Expenses<br>| $230,000</p><p>| Noncurrent Assets<br>| Land, Equipment, Buildings, Patents<br>| $520,000</p><p>Answer Analysis</p><p>Based on our calculations:</p><p>✓ Current Assets: $230,000; Noncurrent Assets: $520,000 (Correct)</p><p>✗ Current Assets: $260,000; Noncurrent Assets: $520,000 (Incorrect)</p><p>✗ Current Assets: $240,000; Noncurrent Assets: $500,000 (Incorrect)</p><p>✗ Current Assets: $230,000; Noncurrent Assets: $540,000 (Incorrect)</p><p>Key Takeaways</p><p>Current assets are expected to be converted to cash or used within one year</p><p>Noncurrent assets provide long-term benefits to the company</p><p>Proper classification is essential for financial statement analysis and determining liquidity</p>`,
    },
    {
      id: "8511",
      prompt: `A company reports the following information as of December 31:

Sales revenue: $800,000

Cost of goods sold: $600,000

Operating expenses: $90,000

Unrealized holding gain on available-for-sale debt securities, net of tax: $30,000

What amount should the company report as comprehensive income as of December 31?`,
      choices: [
        `$140,000`,
        `$200,000`,
        `$110,000`,
        `$30,000`,
      ],
      correctIndex: 0,
      explanation: `<h3 class="exp-title">Comprehensive Income Calculation</h3><p>Answer Analysis</p><p>✓ $140,000 - Correct answer</p><p>✗ $200,000 - Incorrect</p><p>✗ $110,000 - Incorrect (This is only the net income)</p><p>✗ $30,000 - Incorrect (This is only the OCI component)</p><p>Explanation</p><p>Step 1: Calculate Net Income</p><p>| Sales Revenue<br>| $800,000</p><p>| Less: Cost of Goods Sold<br>| ($600,000)</p><p>| Gross Profit<br>| $200,000</p><p>| Less: Operating Expenses<br>| ($90,000)</p><p>| Net Income<br>| $110,000</p><p>Step 2: Identify Other Comprehensive Income (OCI)</p><p>The company has one OCI item: Unrealized holding gain on available-for-sale debt securities, net of tax: $30,000</p><p>Step 3: Calculate Comprehensive Income</p><p>Comprehensive Income = Net Income + Other Comprehensive Income</p><p>$110,000 + $30,000 = $140,000</p><p>Journal Entry</p><p>The unrealized gain on available-for-sale debt securities would be recorded with the following journal entry:</p><p>Account<br>Debit<br>Credit</p><p>| Investment in Available-for-Sale Debt Securities<br>| $30,000<br>|</p><p>| Unrealized Holding Gain - OCI<br>|<br>| $30,000</p><p>Note: This journal entry assumes the $30,000 is already net of tax. In practice, a deferred tax liability may also be recorded.</p><p>Key Concept: Comprehensive Income</p><p>Comprehensive Income includes all changes in equity during a period except those resulting from investments by owners and distributions to owners. It consists of:</p><p>Net income (from the income statement)</p><p>Other comprehensive income items (bypass the income statement)</p><p>Common OCI items include:</p><p>Unrealized gains/losses on available-for-sale debt securities</p><p>Foreign currency translation adjustments</p><p>Pension liability adjustments</p><p>Gains/losses on derivatives used in cash flow hedges</p><p>Summary</p><p>The company&#x27;s comprehensive income of $140,000 represents the total change in equity from non-owner sources, including both the traditional net income of $110,000 and the unrealized holding gain on available-for-sale debt securities of $30,000.</p><p>This represents a more complete picture of the company&#x27;s performance than net income alone.</p>`,
    },
    {
      id: "8505",
      prompt: `Which of the following statements is correct regarding reporting comprehensive income?`,
      choices: [
        `Comprehensive income must include all changes in stockholders' equity for the period.`,
        `A separate statement of comprehensive income is required.`,
        `Accumulated other comprehensive income is reported in the stockholders' equity section of the balance sheet.`,
        `Comprehensive income is reported in the year-end statements but not in the interim statements.`,
      ],
      correctIndex: 2,
      explanation: `<h3 class="exp-title">Comprehensive Income Reporting</h3><p>Multiple Choice Analysis</p><p>✗ Choice 1: Comprehensive income must include all changes in stockholders&#x27; equity for the period.</p><p>✗ Choice 2: A separate statement of comprehensive income is required.</p><p>✓ Choice 3: Accumulated other comprehensive income is reported in the stockholders&#x27; equity section of the balance sheet.</p><p>✗ Choice 4: Comprehensive income is reported in the year-end statements but not in the interim statements.</p><p>Explanation</p><p>The correct statement is that Accumulated Other Comprehensive Income (AOCI) is reported in the stockholders&#x27; equity section of the balance sheet.</p><p>Why the other statements are incorrect:</p><p>Choice 1: Comprehensive income includes net income plus other comprehensive income, not all changes in stockholders&#x27; equity. Items like dividends and stock issuances affect equity but are not part of comprehensive income.</p><p>Choice 2: A separate statement of comprehensive income is not required. Companies can present comprehensive income in one of several formats, including as part of the income statement or as a separate statement.</p><p>Choice 4: Comprehensive income must be reported in both interim and annual financial statements, not just year-end statements.</p><p>Components of Comprehensive Income</p><p>Comprehensive income consists of:</p><p>Net income</p><p>Other comprehensive income (OCI), which includes:</p><p>Foreign currency translation adjustments</p><p>Unrealized gains/losses on available-for-sale securities</p><p>Changes in the fair value of qualifying hedges</p><p>Pension and other postretirement benefit adjustments</p><p>Presentation Options for Comprehensive Income</p><p>Companies have three options for reporting comprehensive income:</p><p>Single continuous statement - Net income followed by OCI items</p><p>Two separate but consecutive statements - Income statement followed by a statement of comprehensive income</p><p>Statement of changes in equity (no longer permitted for public companies under US GAAP)</p><p>Example: Accumulated Other Comprehensive Income in Balance Sheet</p><p>ABC Company - Stockholders&#x27; Equity Section<br>Amount ($)</p><p>| Common Stock<br>| 100,000</p><p>| Additional Paid-in Capital<br>| 250,000</p><p>| Retained Earnings<br>| 375,000</p><p>| Accumulated Other Comprehensive Income<br>| 25,000</p><p>| Total Stockholders&#x27; Equity<br>| 750,000</p><p>Journal Entry Examples</p><p>When a company has other comprehensive income items, they will eventually be recorded in AOCI. For example, when there&#x27;s an unrealized gain on available-for-sale securities:</p><p>Account<br>Debit<br>Credit</p><p>| Investment in Available-for-Sale Securities<br>| 10,000<br>|</p><p>| Unrealized Gain on Available-for-Sale Securities (OCI)<br>|<br>| 10,000</p><p>At the end of the period, OCI items are transferred to AOCI:</p><p>Account<br>Debit<br>Credit</p><p>| Unrealized Gain on Available-for-Sale Securities (OCI)<br>| 10,000<br>|</p><p>| Accumulated Other Comprehensive Income<br>|<br>| 10,000</p><p>Summary</p><p>Accumulated Other Comprehensive Income (AOCI) is correctly reported in the stockholders&#x27; equity section of the balance sheet. It represents the cumulative balance of other comprehensive income items that have not yet been recognized in the income statement. Companies must report comprehensive income in both interim and annual financial statements, and have options for how to present it, but a separate statement is not strictly required.</p>`,
    },
    {
      id: "9482",
      prompt: `A company provided the following financial information as of and for the year ended December 31, year 1:

Retained earnings (beginning): $14,000

Revenues: $14,000

Expenses: $10,000

Contributed capital: $5,000

Dividends paid: $3,000

Cash: $14,000

Property, plant and equipment, net: $8,000

Accounts payable: $2,000

What amount of total liabilities and stockholders’ equity should the company report in its balance sheet as of December 31, year 1?`,
      choices: [
        `$25,000`,
        `$22,000`,
        `$20,000`,
        `$18,000`,
      ],
      correctIndex: 1,
      explanation: `<h3 class="exp-title">Total Liabilities and Stockholders&#x27; Equity</h3><p>Answer: $22,000 is the correct amount of total liabilities and stockholders&#x27; equity.</p><p>Strategy: Build the Right Side of the Balance Sheet</p><p>The question gives us a mix of balance sheet accounts and income statement accounts. The cleanest approach is to add up the liability and equity accounts directly rather than relying on the asset side, because we cannot be certain every asset account has been listed.</p><p>The one trap to avoid: beginning retained earnings is given, not ending retained earnings. We have to roll it forward before plugging it into the balance sheet.</p><p>Step 1: Calculate Ending Retained Earnings</p><p>Ending RE = Beginning RE + Net Income - Dividends</p><p>Beginning Retained Earnings: $14,000</p><p>Plus: Net Income ($14,000 - $10,000): $4,000</p><p>Less: Dividends Paid: ($3,000)</p><p>Ending Retained Earnings: $15,000</p><p>Step 2: Build the Balance Sheet</p><p>Sorting each item provided into the right balance sheet bucket:</p><p>Account<br>Amount</p><p>| Assets</p><p>| Cash<br>| $14,000</p><p>| Property, Plant and Equipment, net<br>| $8,000</p><p>| Total Assets<br>| $22,000</p><p>| Liabilities</p><p>| Accounts Payable<br>| $2,000</p><p>| Stockholders&#x27; Equity</p><p>| Contributed Capital<br>| $5,000</p><p>| Retained Earnings (ending)<br>| $15,000</p><p>| Total Liabilities and Stockholders&#x27; Equity<br>| $22,000</p><p>Notice that revenues, expenses, and dividends do not appear on the balance sheet directly. They flow through net income and the retained earnings rollforward, which is already captured in the $15,000 ending retained earnings figure.</p><p>Common Trap: Beginning vs. Ending Retained Earnings</p><p>When a problem provides beginning retained earnings alongside revenues, expenses, and dividends, it is signaling that you must roll the balance forward. The balance sheet always reports the ending retained earnings balance, never the beginning balance. Plugging in $14,000 directly is the most common mistake on this type of question.</p><p>Answer Analysis</p><p>Option<br>Analysis</p><p>| $25,000<br>| Incorrect. This results from forgetting to subtract dividends in the retained earnings rollforward: $14,000 + $4,000 + $5,000 + $2,000 = $25,000.</p><p>| $22,000<br>| Correct. AP ($2,000) + Contributed Capital ($5,000) + Ending RE ($15,000) = $22,000. This also ties to total assets of $22,000.</p><p>| $20,000<br>| Incorrect. This results from omitting accounts payable: Ending RE ($15,000) + Contributed Capital ($5,000) = $20,000.</p><p>| $18,000<br>| Incorrect. This uses beginning retained earnings instead of ending: $14,000 + $5,000 - $2,000, or it improperly treats accounts payable as a contra account.</p><p>Summary</p><p>Total liabilities and stockholders&#x27; equity equals $22,000. The key step is rolling beginning retained earnings of $14,000 forward by adding net income of $4,000 and subtracting dividends of $3,000 to arrive at ending retained earnings of $15,000. From there, simply add accounts payable ($2,000), contributed capital ($5,000), and ending retained earnings ($15,000). This also confirms total assets of $22,000, since the balance sheet must balance.</p>`,
    },
    {
      id: "8686",
      prompt: `During the current year, Cooley Co. had an unrealized gain of $100,000 on a debt investment classified as available‑for‑sale. Cooley's corporate tax rate is 25%. What amount of the gain should be included in Cooley's net income and other comprehensive income at the end of the current year?`,
      choices: [
        `Net income: $0; Other comprehensive income: $75,000`,
        `Net income: $75,000; Other comprehensive income: $25,000`,
        `Net income: $100,000; Other comprehensive income: $0`,
        `Net income: $25,000; Other comprehensive income: $75,000`,
      ],
      correctIndex: 0,
      explanation: `<h3 class="exp-title">Available-for-Sale Debt Securities: Accounting Treatment</h3><p>Answer Analysis</p><p>Net income: $75,000; OCI: $25,000 ❌</p><p>Net income: $100,000; OCI: $0 ❌</p><p>Net income: $25,000; OCI: $75,000 ❌</p><p>Net income: $0; OCI: $75,000 ✓</p><p>Explanation</p><p>For available-for-sale (AFS) debt securities, unrealized gains and losses are recorded in Other Comprehensive Income (OCI), not in net income. This is a key concept in ASC 320 and ASC 326.</p><p>Key Accounting Treatment</p><p>Unrealized gains/losses on AFS debt securities flow through OCI</p><p>Only realized gains/losses (upon sale) and credit losses flow through net income</p><p>Tax effects on OCI items must be considered</p><p>Calculation</p><p>Item<br>Amount</p><p>| Unrealized gain on AFS debt security<br>| $100,000</p><p>| Tax effect (25%)<br>| ($25,000)</p><p>| Net effect on OCI<br>| $75,000</p><p>Journal Entries</p><p>Account<br>Debit<br>Credit</p><p>| Investment in AFS Debt Securities<br>| $100,000<br>|</p><p>| Unrealized Gain on AFS Securities (OCI)<br>|<br>| $100,000</p><p>| Deferred Tax Expense (OCI)<br>| $25,000<br>|</p><p>| Deferred Tax Liability<br>|<br>| $25,000</p><p>Why Other Options Are Incorrect</p><p>Net income: $75,000; OCI: $25,000 - Incorrect because this reverses the proper treatment. Unrealized gains on AFS debt securities are recognized in OCI, not in net income.</p><p>Net income: $100,000; OCI: $0 - Incorrect because this would be the treatment for trading securities, not AFS debt securities.</p><p>Net income: $25,000; OCI: $75,000 - Incorrect because there should be no impact on net income from an unrealized gain on an AFS debt security (assuming no credit impairment).</p><p>Key Takeaway</p><p>For available-for-sale debt securities, unrealized gains and losses are reported in Other Comprehensive Income (net of tax), not in net income. Only when the securities are sold or impaired would gains or losses affect the income statement.</p>`,
    },
    {
      id: "8507",
      prompt: `What is the purpose of reporting comprehensive income?`,
      choices: [
        `To reconcile the difference between net income and cash flows provided from operating activities.`,
        `To provide a consolidation of the income of the firm's segments.`,
        `To provide information for each segment of the business.`,
        `To summarize all changes in equity from nonowner sources.`,
      ],
      correctIndex: 3,
      explanation: `<h3 class="exp-title">Comprehensive Income Reporting</h3><p>Question: What is the purpose of reporting comprehensive income?</p><p>❌ To reconcile the difference between net income and cash flows provided from operating activities.</p><p>❌ To provide a consolidation of the income of the firm&#x27;s segments.</p><p>❌ To provide information for each segment of the business.</p><p>✅ To summarize all changes in equity from nonowner sources.</p><p>Explanation</p><p>Comprehensive income captures all changes in equity during a period except those resulting from investments by owners and distributions to owners. It provides a complete picture of a company&#x27;s financial performance by including both net income and other comprehensive income items.</p><p>Components of Comprehensive Income</p><p>Net Income</p><p>Revenues, expenses, gains, and losses reported on the income statement</p><p>Other Comprehensive Income</p><p>Items excluded from net income but affecting equity</p><p>Examples of Other Comprehensive Income Items</p><p>Foreign currency translation adjustments</p><p>Unrealized gains/losses on available-for-sale securities</p><p>Changes in pension liability</p><p>Certain hedge/derivative instruments gains and losses</p><p>Sample Journal Entries</p><p>When recording an unrealized gain on available-for-sale securities (part of other comprehensive income):</p><p>Account<br>Debit<br>Credit</p><p>| Investment in Available-for-Sale Securities<br>| 10,000<br>|</p><p>| Unrealized Gain - Other Comprehensive Income<br>|<br>| 10,000</p><p>Importance in Financial Reporting</p><p>Provides a more complete picture of a company&#x27;s financial performance</p><p>Captures economic events that might affect equity but aren&#x27;t yet realized</p><p>Helps users distinguish between operating results and other economic events</p><p>Enhances transparency in financial reporting</p><p>Summary</p><p>Comprehensive income reporting serves to summarize all changes in equity from nonowner sources, providing a complete view of a company&#x27;s financial performance beyond just net income from operations.</p>`,
    },
    {
      id: "8410",
      prompt: `Phoenix Systems Inc. has the following trial balance information for its income statement accounts for the year ended December 31, Year 1:

Sales: $720,000

Cost of goods sold: $320,000

Administrative expenses: $90,000

Sales commissions: $60,000

Freight out: $20,000

Bad debt expense: $20,000

Loss on sale of equipment: $15,000

Interest revenue: $35,000

Loss on early retirement of long-term debt: $25,000

The income tax rate is 30%.

Using a multiple‐step income statement format, what is the income from continuing operations for Phoenix Systems Inc. for Year 1?`,
      choices: [
        `$143,500`,
        `$138,500`,
        `$150,000`,
        `$130,000`,
      ],
      correctIndex: 0,
      explanation: `<h3 class="exp-title">Multiple-Step Income Statement Analysis</h3><p>The Answer is $143,500</p><p>Step-by-Step Calculation</p><p>Step 1: Calculate Gross Profit</p><p>Gross Profit = Sales − Cost of Goods Sold</p><p>Gross Profit = $720,000 − $320,000 = $400,000</p><p>Step 2: Determine Total Operating Expenses</p><p>Administrative expenses: $90,000</p><p>Sales commissions: $60,000</p><p>Freight out: $20,000</p><p>Bad debt expense: $20,000</p><p>Loss on sale of equipment: $15,000</p><p>Total Operating Expenses = $90,000 + $60,000 + $20,000 + $20,000 + $15,000 = $205,000</p><p>Step 3: Compute Operating Income</p><p>Operating Income = Gross Profit − Operating Expenses</p><p>Operating Income = $400,000 − $205,000 = $195,000</p><p>Step 4: Include Nonoperating Items</p><p>Interest revenue: $35,000 (income)</p><p>Loss on early retirement of long-term debt: $25,000 (expense)</p><p>Net Nonoperating Items = $35,000 − $25,000 = $10,000</p><p>Step 5: Calculate Income Before Tax</p><p>Income Before Tax = Operating Income + Net Nonoperating Items</p><p>Income Before Tax = $195,000 + $10,000 = $205,000</p><p>Step 6: Compute Income Tax Expense</p><p>Income Tax Expense = 30% × $205,000 = $61,500</p><p>Step 7: Determine Income from Continuing Operations</p><p>Income from Continuing Operations = Income Before Tax − Income Tax Expense</p><p>Income from Continuing Operations = $205,000 − $61,500 = $143,500</p><p>Multiple-Step Income Statement Format</p><p>Item<br>Amount</p><p>| Sales<br>| $720,000</p><p>| Cost of Goods Sold<br>| ($320,000)</p><p>| Gross Profit<br>| $400,000</p><p>| Administrative Expenses<br>| $90,000</p><p>| Sales Commissions<br>| $60,000</p><p>| Freight Out<br>| $20,000</p><p>| Bad Debt Expense<br>| $20,000</p><p>| Loss on Sale of Equipment<br>| $15,000</p><p>| Total Operating Expenses<br>| ($205,000)</p><p>| Operating Income<br>| $195,000</p><p>| Interest Revenue<br>| $35,000</p><p>| Loss on Retirement of Debt<br>| ($25,000)</p><p>| Net Nonoperating Items<br>| $10,000</p><p>| Income Before Tax<br>| $205,000</p><p>| Income Tax Expense (30%)<br>| ($61,500)</p><p>| Income from Continuing Operations<br>| $143,500</p><p>Answer Analysis</p><p>$143,500 - CORRECT</p><p>This is the correct income from continuing operations calculated following the proper multiple-step income statement format.</p><p>$138,500 - INCORRECT</p><p>This answer likely comes from an error in calculating operating expenses or nonoperating items.</p><p>$150,000 - INCORRECT</p><p>This answer may result from incorrectly treating the loss on sale of equipment as a nonoperating expense.</p><p>$130,000 - INCORRECT</p><p>This answer likely comes from calculation errors in one or more steps.</p><p>Summary</p><p>The income from continuing operations for Phoenix Systems Inc. is $143,500. This was calculated by determining gross profit ($400,000), subtracting operating expenses ($205,000) to get operating income ($195,000), adding net nonoperating items ($10,000) to determine income before tax ($205,000), and finally deducting income tax expense ($61,500).</p><p>The multiple-step income statement format provides more detailed information about a company&#x27;s operations by separating operating activities from nonoperating activities, giving users better insight into the company&#x27;s core business performance.</p>`,
    },
    {
      id: "4964",
      prompt: `Newt Co. sold a warehouse and used the proceeds to acquire a new warehouse. The excess of the proceeds over the carrying amount of the warehouse sold should be reported as a(an):`,
      choices: [
        `Reduction of the cost of the new warehouse.`,
        `Gain from discontinued operations, net of income taxes.`,
        `Part of continuing operations.`,
        `Part of other comprehensive income.`,
      ],
      correctIndex: 2,
      explanation: `<h3 class="exp-title">Accounting for Asset Sales and Proceeds</h3><p>Correct Answer:</p><p>✓ Part of continuing operations</p><p>Explanation</p><p>When a company sells a warehouse (or any operational asset) and generates proceeds that exceed the asset&#x27;s carrying amount, the excess amount is recognized as a gain on the income statement under continuing operations. This transaction is considered part of the company&#x27;s normal business activities, even if the sale of buildings happens infrequently.</p><p>The gain is typically shown in the &quot;Other Income&quot; or &quot;Other Revenue&quot; section of the income statement, rather than being treated as part of operations from discontinued business segments or as a reduction of the cost of newly acquired assets.</p><p>Journal Entries</p><p>When Newt Co. sold the warehouse, the following journal entry would be recorded:</p><p>Account<br>Debit<br>Credit</p><p>| Cash<br>| XXX<br>|</p><p>| Accumulated Depreciation - Warehouse<br>| XXX<br>|</p><p>| Warehouse (original cost)<br>|<br>| XXX</p><p>| Gain on Sale of Warehouse<br>|<br>| XXX</p><p>The purchase of the new warehouse would be recorded in a separate transaction:</p><p>Account<br>Debit<br>Credit</p><p>| Warehouse (new)<br>| XXX<br>|</p><p>| Cash<br>|<br>| XXX</p><p>Analysis of Other Options</p><p>Reduction of the cost of the new warehouse</p><p>This is incorrect. Under GAAP, the gain from selling the old warehouse cannot be used to reduce the cost basis of the new warehouse. The new warehouse should be recorded at its purchase price, and the gain from selling the old warehouse should be recognized separately in the income statement.</p><p>Gain from discontinued operations, net of income taxes</p><p>This is incorrect. Discontinued operations refer to a component of a business that has either been disposed of or is classified as held for sale, and represents a separate major line of business or geographical area of operations. A simple sale of a warehouse generally doesn&#x27;t qualify as a discontinued operation unless the entire business segment associated with the warehouse is being discontinued.</p><p>Part of other comprehensive income</p><p>This is incorrect. Other comprehensive income includes revenues, expenses, gains, and losses that are excluded from net income under GAAP. Gains from sales of operational assets like warehouses are included in the income statement under continuing operations, not in other comprehensive income.</p><p>Summary</p><p>When a company sells an operational asset like a warehouse for more than its carrying amount, the excess is recorded as a gain.</p><p>This gain is reported on the income statement as part of continuing operations, typically under &quot;Other Income.&quot;</p><p>The gain is not used to reduce the cost of newly acquired assets.</p><p>The gain does not qualify as discontinued operations unless the entire business segment is being discontinued.</p><p>The gain is not reported as part of other comprehensive income.</p>`,
    },
    {
      id: "5297",
      prompt: `In 2022, XYZ Corporation decided to discontinue one of its divisions. The division reported an operating loss of $150,000 for the year. How should XYZ Corporation report this in its financial statements?`,
      choices: [
        `Deduct $150,000 from the income of continuing operations.`,
        `Report a $150,000 loss as part of discontinued operations.`,
        `Add $150,000 to the income of continuing operations.`,
        `No reporting is required until the division is sold.`,
      ],
      correctIndex: 1,
      explanation: `<h3 class="exp-title">Reporting Discontinued Operations</h3><p>Answer Analysis</p><p>Correct Answer: Report a $150,000 loss as part of discontinued operations.</p><p>Incorrect Options:</p><p>❌ Deduct $150,000 from the income of continuing operations.</p><p>❌ Add $150,000 to the income of continuing operations.</p><p>❌ No reporting is required until the division is sold.</p><p>Explanation</p><p>Under US GAAP (Generally Accepted Accounting Principles), when a company decides to discontinue a division or component of its business, it must report the results of that component separately in the financial statements. This separation helps financial statement users distinguish between the ongoing performance of the company and the effects of business components that will no longer contribute to future operations.</p><p>Key Reporting Requirements:</p><p>Results of discontinued operations must be reported separately from continuing operations</p><p>Reporting is required in the period when management commits to a plan to dispose of the component</p><p>All income and expenses related to the discontinued component must be segregated</p><p>This separate reporting continues until disposal is completed</p><p>Financial Statement Presentation</p><p>On the income statement, XYZ Corporation should present the $150,000 operating loss from the discontinued division after income from continuing operations but before net income.</p><p>Income Statement Section<br>Amount ($)</p><p>| Revenue from continuing operations<br>| X</p><p>| Expenses from continuing operations<br>| (X)</p><p>| Income from continuing operations<br>| XXX</p><p>| Loss from discontinued operations<br>| (150,000)</p><p>| Net income<br>| XXX</p><p>Journal Entries</p><p>While specific journal entries depend on the nature of the discontinued operations, here&#x27;s a simplified example of how the loss would be recorded:</p><p>Account<br>Debit ($)<br>Credit ($)</p><p>| Loss from Discontinued Operations<br>| 150,000<br>|</p><p>| Various Assets/Liabilities<br>|<br>| 150,000</p><p>| To record operating loss from discontinued division</p><p>Summary</p><p>Under US GAAP, discontinued operations must be reported separately from continuing operations</p><p>The $150,000 operating loss should be presented after income from continuing operations on the income statement</p><p>Reporting begins when management commits to the plan to discontinue, not when the division is actually sold</p><p>This separate presentation provides more transparent information to financial statement users about the company&#x27;s ongoing operations</p>`,
    },
    {
      id: "8495",
      prompt: `In Baer Food Co.'s single-step income statement, the section titled "Revenues" consisted of the following items as currently presented:

Net sales revenue: $187,000

Results from discontinued operations:

Loss from operations of component (net of $1,200 tax effect): ($2,400)

Gain on disposal of component (net of $7,200 tax effect): $14,400

Total from discontinued operations: $12,000

Interest revenue: $10,200

Gain on sale of equipment: $4,700

Total revenues as reported: $213,900

In the revenues section of its income statement, how much should Baer Food have reported as the correct amount of total revenues?`,
      choices: [
        `$201,900`,
        `$203,700`,
        `$215,400`,
        `$216,300`,
      ],
      correctIndex: 0,
      explanation: `<h3 class="exp-title">Single-Step Income Statement: Revenue Classification</h3><p>Revenue Classification Analysis</p><p>According to proper accounting principles for single-step income statements, we need to properly classify which items belong in the revenue section.</p><p>Answer Explanation</p><p>The correct answer is: $201,900</p><p>When preparing a single-step income statement, we need to understand what items should be included in the revenue section:</p><p>Include in Revenues:</p><p>Net sales revenue ($187,000)</p><p>Interest revenue ($10,200)</p><p>Gains from asset sales, such as equipment ($4,700)</p><p>Do Not Include in Revenues:</p><p>Discontinued operations - these are reported separately after income from continuing operations</p><p>Calculation Details</p><p>Revenue Component<br>Amount</p><p>| Net sales revenue<br>| $187,000</p><p>| Interest revenue<br>| $10,200</p><p>| Gain on sale of equipment<br>| $4,700</p><p>| Correct Total Revenues<br>| $201,900</p><p>Important: The $12,000 from discontinued operations ($14,400 gain - $2,400 loss) should be excluded from revenues and reported separately as &quot;Results from discontinued operations&quot; after income from continuing operations.</p><p>Other Answer Choices</p><p>$203,700 - Incorrect. This likely includes some but not all discontinued operations items or uses an incorrect combination of components.</p><p>$215,400 - Incorrect. This appears to include the discontinued operations that should be reported separately.</p><p>$216,300 - Incorrect. This may include discontinued operations plus other calculation errors.</p><p>Key Concept: Single-Step Income Statement Structure</p><p>In a single-step income statement, all revenues and gains are grouped together, and all expenses and losses are grouped together. However, discontinued operations are always reported separately, after income from continuing operations, regardless of the income statement format.</p><p>Summary</p><p>The proper total for revenues in Baer Food Co.&#x27;s single-step income statement should be $201,900, which includes net sales revenue, interest revenue, and gain on sale of equipment, but excludes the results from discontinued operations.</p>`,
    },
  ],
};
