import type { Quiz } from "../types";

export const statementOfCashFlowsQuiz: Quiz = {
  key: "statement-of-cash-flows",
  title: "Statement of Cash Flows",
  subtitle: "Statement of Cash Flows",
  discipline: "intermediate",
  course: "intermediate",
  questions: [
    {
      id: "5130",
      prompt: `How should the amortization of a bond discount on long-term debt be reported in a statement of cash flows prepared using the indirect method?`,
      choices: [
        `Added to net income in the operating activities section`,
        `Deducted from net income in the operating activities section`,
        `Shown as a cash outflow in the financing activities section`,
        `Shown as a cash inflow in the investing activities section`,
      ],
      correctIndex: 0,
      explanation: `<h3 class="exp-title">Bond Discount Amortization on the Statement of Cash Flows</h3><p>Answer:</p><p>Added to net income in the operating activities section</p><p>Explanation</p><p>Amortization of a bond discount is a non-cash expense that affects net income but does not involve an actual cash outflow when it occurs. When using the indirect method for the statement of cash flows, we start with net income and adjust for non-cash items.</p><p>Since the amortization of a bond discount increases interest expense (a non-cash portion), it reduces net income without using cash. Therefore, we need to add it back to net income when calculating cash flows from operating activities.</p><p>Journal Entry Analysis</p><p>When a bond discount is amortized, the following journal entry is recorded:</p><p>Account<br>Debit<br>Credit</p><p>| Interest Expense<br>| $XXX<br>|</p><p>| Discount on Bonds Payable<br>|<br>| $XXX</p><p>This entry increases interest expense (reducing net income) and reduces the discount on bonds payable (a contra-liability account). Since it&#x27;s a non-cash expense, it needs to be added back when using the indirect method.</p><p>Statement of Cash Flows Presentation</p><p>Indirect Method Format Example:</p><p>Cash flows from operating activities:<br>Net income $XXX,XXX<br>Adjustments to reconcile net income to net cash:<br>Depreciation expense XX,XXX<br>Amortization of bond discount X,XXX<br>(Other adjustments...) XX,XXX<br>Net cash provided by operating activities $XXX,XXX</p><p>Summary</p><p>✓ Bond discount amortization is a non-cash expense that reduces net income</p><p>✓ Using the indirect method, non-cash expenses are added back to net income</p><p>✓ It appears in the operating activities section, not financing or investing</p><p>✓ It follows the same treatment as other non-cash expenses like depreciation</p>`,
    },
    {
      id: "5126",
      prompt: `How should a gain from the sale of used equipment for cash be reported in a statement of cash flows using the indirect method?`,
      choices: [
        `In investment activities as a reduction of the cash inflow from the sale.`,
        `In investment activities as a cash outflow.`,
        `In operating activities as a deduction from income.`,
        `In operating activities as an addition to income.`,
      ],
      correctIndex: 2,
      explanation: `<h3 class="exp-title">Statement of Cash Flows: Reporting Gains on Sale of Equipment</h3><p>Correct Answer</p><p>In operating activities as a deduction from income.</p><p>Explanation</p><p>When using the indirect method for preparing a statement of cash flows, we start with net income and adjust it to arrive at cash flows from operating activities. Since a gain on sale of equipment is already included in the net income but does not represent an operating cash inflow, we must remove it from operating activities.</p><p>The gain represents the excess of the cash received over the book value of the equipment. Since the entire cash received from the sale is reported in the investing section, we must deduct the gain from net income in the operating section to avoid double-counting.</p><p>Example</p><p>Assume a company sells equipment with a book value of $8,000 for $10,000 cash, resulting in a $2,000 gain.</p><p>Journal Entry for the Sale:</p><p>Account<br>Debit<br>Credit</p><p>| Cash<br>| $10,000<br>|</p><p>| Accumulated Depreciation<br>| [Amount]<br>|</p><p>| Equipment<br>|<br>| [Original Cost]</p><p>| Gain on Sale of Equipment<br>|<br>| $2,000</p><p>Statement of Cash Flows Presentation (Indirect Method):</p><p>Statement of Cash Flows (Partial)</p><p>| Cash flows from operating activities:</p><p>| Net income<br>| $XXXX</p><p>| Adjustments to reconcile net income to net cash provided by operating activities:<br>|</p><p>| Gain on sale of equipment<br>| ($2,000)</p><p>| Cash flows from investing activities:</p><p>| Proceeds from sale of equipment<br>| $10,000</p><p>Why the Other Options Are Incorrect</p><p>In investment activities as a reduction of the cash inflow from the sale: Incorrect. The entire proceeds are shown in investing activities, not just the book value. The gain adjustment occurs in operating activities.</p><p>In investment activities as a cash outflow: Incorrect. The gain is not a cash outflow; it&#x27;s a non-cash item that needs to be removed from the operating section.</p><p>In operating activities as an addition to income: Incorrect. The gain is already included in net income, so it needs to be deducted, not added.</p><p>Summary</p><p>When using the indirect method for a statement of cash flows:</p><p>A gain on sale of equipment is deducted from net income in the operating activities section</p><p>The entire cash proceeds from the sale are reported in the investing activities section</p><p>This approach prevents double-counting of the gain portion of the proceeds</p><p>Gains and losses on sales of non-current assets are always adjustments to net income in the operating section when using the indirect method</p>`,
    },
    {
      id: "5129",
      prompt: `Dove Co. issued 2,000 shares of its $20 par value common stock for $25 per share in cash. How should this transaction be reported in Dove's statement of cash flows for the year of issuance?`,
      choices: [
        `Cash inflow of $50,000 in operating activities`,
        `Cash inflow of $40,000 in financing activities`,
        `Cash inflow of $50,000 in financing activities`,
        `Cash inflow of $40,000 in operating activities`,
      ],
      correctIndex: 2,
      explanation: `<h3 class="exp-title">Cash Flow Classification: Stock Issuance</h3><p>Answer Analysis</p><p>The correct answer is: Cash inflow of $50,000 in financing activities</p><p>Explanation</p><p>When a company issues stock for cash, this transaction is classified as a financing activity on the statement of cash flows. The issuance of stock represents a way for the company to raise capital from investors, which is a core financing function.</p><p>In this case, Dove Co. issued 2,000 shares at $25 per share, resulting in total cash proceeds of:</p><p>2,000 shares × $25 per share = $50,000</p><p>Journal Entry</p><p>Account<br>Debit<br>Credit</p><p>| Cash<br>| $50,000<br>|</p><p>| Common Stock ($20 par value)<br>|<br>| $40,000</p><p>| Additional Paid-in Capital<br>|<br>| $10,000</p><p>Note: The Common Stock account is credited for the par value (2,000 shares × $20 = $40,000) and Additional Paid-in Capital is credited for the excess over par (2,000 shares × $5 = $10,000).</p><p>Other Options Analysis</p><p>Incorrect: Cash inflow of $50,000 in operating activities - Stock issuances are not operating activities.</p><p>Incorrect: Cash inflow of $40,000 in financing activities - This represents only the par value portion, not the full proceeds.</p><p>Incorrect: Cash inflow of $40,000 in operating activities - Incorrect classification and incorrect amount.</p><p>Key Concept Summary</p><p>Cash Flow Classification Rules:</p><p>Operating activities: Transactions related to producing and delivering goods/services (income statement items)</p><p>Investing activities: Transactions involving long-term assets (purchasing/selling PP&amp;E, investments)</p><p>Financing activities: Transactions involving equity and debt (stock issuance, borrowing, dividends)</p><p>Stock issuance always represents a financing activity on the statement of cash flows.</p>`,
    },
    {
      id: "5090",
      prompt: `During the year, Coffee Co. sold a building for $150,000 resulting in a gain of $10,000. Using the indirect method for cash flows, what amount should the company record in the investing activities section?`,
      choices: [
        `$140,000`,
        `$10,000`,
        `$160,000`,
        `$150,000`,
      ],
      correctIndex: 3,
      explanation: `<h3 class="exp-title">Cash Flow from Sale of Building - Investing Activities</h3><p>Question Analysis</p><p>When a building is sold for $150,000 with a gain of $10,000, what amount should be recorded in the investing activities section of the cash flow statement?</p><p>$140,000 ❌</p><p>$10,000 ❌</p><p>$160,000 ❌</p><p>$150,000 ✓</p><p>Key Concept</p><p>For cash flow statement purposes, investing activities include the actual cash received from the sale of long-term assets like buildings, equipment, or land. The gain or loss on sale affects the operating section, not the investing section.</p><p>Explanation</p><p>When a company sells a fixed asset:</p><p>The entire cash proceeds from the sale ($150,000) are reported in the investing activities section.</p><p>The gain or loss on the sale is an adjustment in the operating activities section when using the indirect method.</p><p>Net book value ($140,000) represents the carrying value of the asset being sold.</p><p>Sale Calculation:</p><p>Component<br>Amount</p><p>| Cash proceeds (reported in investing)<br>| $150,000</p><p>| Net book value of building<br>| $140,000</p><p>| Gain on sale (adjustment in operating)<br>| $10,000</p><p>Journal Entries</p><p>The journal entry for the sale of the building would be:</p><p>Account<br>Debit<br>Credit</p><p>| Cash<br>| $150,000<br>|</p><p>| Accumulated Depreciation<br>| *<br>|</p><p>| Building<br>|<br>| *</p><p>| Gain on Sale of Building<br>|<br>| $10,000</p><p>* Amounts depend on the original cost and accumulated depreciation of the building, but the net book value equals $140,000.</p><p>Cash Flow Statement Impact</p><p>On the statement of cash flows (indirect method):</p><p>Section<br>Treatment<br>Amount</p><p>| Operating Activities<br>| Gain on sale of building (subtracted)<br>| ($10,000)</p><p>| Investing Activities<br>| Proceeds from sale of building<br>| $150,000</p><p>The gain is subtracted in the operating section because it&#x27;s already included in net income but doesn&#x27;t represent an operating cash flow. The full $150,000 cash received is shown in the investing section.</p><p>Summary</p><p>The cash flow statement shows the actual cash movement between the company and external parties.</p><p>The investing section reports the full proceeds of $150,000 from the sale of the building.</p><p>The $10,000 gain requires an adjustment in the operating section to avoid double-counting.</p><p>The net book value ($140,000) is not directly reported in the cash flow statement.</p>`,
    },
    {
      id: "5086",
      prompt: `During the year, Verity Co. purchased $200,000 of Otra Co. bonds at par and $50,000 of U.S. Treasury bills. Verity classified the Otra bonds as available-for-sale securities and the Treasury bills as cash equivalents. In Verity's statement of cash flows, what amount should it report as net cash used in investing activities?`,
      choices: [
        `$0`,
        `$150,000`,
        `$200,000`,
        `$250,000`,
      ],
      correctIndex: 2,
      explanation: `<h3 class="exp-title">Cash Flow Classification: Investing Activities</h3><p>Answer</p><p>❌ $0</p><p>❌ $150,000</p><p>✅ $200,000</p><p>❌ $250,000</p><p>Explanation</p><p>The key to solving this question is understanding the classification of cash equivalents versus investments on the statement of cash flows.</p><p>Cash Equivalents Definition</p><p>Cash equivalents are short-term, highly liquid investments that are:</p><p>Readily convertible to known amounts of cash</p><p>Subject to insignificant risk of changes in value</p><p>Have original maturities of three months or less from acquisition date</p><p>Analysis of Transactions</p><p>Item<br>Amount<br>Classification<br>Impact on Cash Flows</p><p>| Otra Co. bonds<br>| $200,000<br>| Available-for-sale securities<br>| Investing activity outflow</p><p>| U.S. Treasury bills<br>| $50,000<br>| Cash equivalents<br>| Not an investing activity</p><p>Since U.S. Treasury bills were classified as cash equivalents, they do not represent cash used in investing activities. Rather, they represent a movement within the &quot;cash and cash equivalents&quot; category on the balance sheet.</p><p>The Otra Co. bonds, classified as available-for-sale securities, represent an investment and thus the $200,000 spent to acquire them is reported as a cash outflow from investing activities.</p><p>Journal Entries</p><p>Purchase of Otra Co. Bonds:</p><p>Account<br>Debit<br>Credit</p><p>| Investment in Available-for-Sale Securities<br>| $200,000<br>|</p><p>| Cash<br>|<br>| $200,000</p><p>Purchase of U.S. Treasury Bills:</p><p>Account<br>Debit<br>Credit</p><p>| Cash Equivalents<br>| $50,000<br>|</p><p>| Cash<br>|<br>| $50,000</p><p>Summary</p><p>The purchase of cash equivalents (Treasury bills) is not considered an investing activity on the statement of cash flows, but rather a transfer within cash and cash equivalents.</p><p>Only the $200,000 purchase of Otra Co. bonds should be reported as net cash used in investing activities.</p><p>Available-for-sale securities are considered investments and their purchase represents an investing cash outflow.</p>`,
    },
    {
      id: "8553",
      prompt: `Karr, Inc. reported net income of $300,000 for Year 2. Additional information:

During Year 2, Karr sold equipment costing $25,000, with accumulated depreciation of $12,000, for a gain of $5,000.

Depreciation expense for the year was $52,000.

Other changes (such as equipment, note payable, and accumulated depreciation changes) relate to investing or financing activities.

In Karr's Year 2 statement of cash flows, net cash provided by operating activities should be:`,
      choices: [
        `$347,000`,
        `$352,000`,
        `$340,000`,
        `$357,000`,
      ],
      correctIndex: 0,
      explanation: `<h3 class="exp-title">Statement of Cash Flows: Operating Activities</h3><p>Correct Answer</p><p>$347,000</p><p>Explanation</p><p>To calculate net cash provided by operating activities using the indirect method, we start with net income and adjust for non-cash items and gains/losses from investing and financing activities.</p><p>Calculation Process</p><p>Item<br>Amount</p><p>| Net Income<br>| $300,000</p><p>| Less: Gain on Sale of Equipment<br>| ($5,000)</p><p>| Add: Depreciation Expense<br>| $52,000</p><p>| Net Cash Provided by Operating Activities<br>| $347,000</p><p>Analysis of Adjustments</p><p>Gain on Sale of Equipment</p><p>When calculating cash flows using the indirect method, gains on sale of equipment must be subtracted from net income because:</p><p>The gain is included in net income</p><p>The entire proceeds from the sale are reported in investing activities</p><p>To avoid double-counting, we remove the gain from operating activities</p><p>Depreciation Expense</p><p>Depreciation is a non-cash expense that reduced reported net income but did not use cash. Therefore, we add it back to net income when calculating cash from operations.</p><p>Journal Entries Related to Equipment Sale</p><p>Account<br>Debit<br>Credit</p><p>| Cash<br>| 18,000<br>|</p><p>| Accumulated Depreciation<br>| 12,000<br>|</p><p>| Equipment<br>|<br>| 25,000</p><p>| Gain on Sale of Equipment<br>|<br>| 5,000</p><p>Journal entry for the sale of equipment</p><p>Indirect vs. Direct Method</p><p>Indirect Method (Used Here)</p><p>Starts with net income</p><p>Adjusts for non-cash items</p><p>Adjusts for gains/losses from investing/financing</p><p>More commonly used in practice</p><p>Direct Method</p><p>Shows actual cash receipts and payments</p><p>Shows cash collected from customers</p><p>Shows cash paid to suppliers</p><p>More intuitive but less commonly used</p><p>Summary</p><p>Using the indirect method for preparing the statement of cash flows, we started with net income of $300,000 and made the following adjustments:</p><p>Subtracted the $5,000 gain on sale of equipment (as this cash will be reported in investing activities)</p><p>Added back the $52,000 non-cash depreciation expense</p><p>This resulted in net cash provided by operating activities of $347,000.</p>`,
    },
    {
      id: "5121",
      prompt: `Martin Co. had net income of $70,000 during the year. Depreciation expense was $10,000. The following information is available:

| Accounts receivable increase
| $20,000

| Equipment gain on sale increase
| 10,000

| Nontrade notes payable increase
| 50,000

| Prepaid insurance increase
| 40,000

| Accounts payable increase
| 30,000

What amount should Martin report as net cash provided by operating activities in its statement of cash flows for the year?`,
      choices: [
        `$0`,
        `$40,000`,
        `$50,000`,
        `$100,000`,
      ],
      correctIndex: 1,
      explanation: `<h3 class="exp-title">Cash Flow from Operating Activities - Indirect Method</h3><p>Solution Analysis</p><p>The correct answer is: $40,000</p><p>Calculation of Net Cash Provided by Operating Activities</p><p>Item<br>Effect on Cash<br>Amount<br>Running Total</p><p>| Net Income<br>| Starting point<br>| $70,000<br>| $70,000</p><p>| Depreciation Expense<br>| Add (non-cash expense)<br>| $10,000<br>| $80,000</p><p>| Accounts Receivable Increase<br>| Subtract (cash not received)<br>| ($20,000)<br>| $60,000</p><p>| Prepaid Insurance Increase<br>| Subtract (cash paid)<br>| ($40,000)<br>| $20,000</p><p>| Accounts Payable Increase<br>| Add (cash not paid)<br>| $30,000<br>| $50,000</p><p>| Gain on Sale of Equipment<br>| Subtract (non-operating gain)<br>| ($10,000)<br>| $40,000</p><p>| Nontrade Notes Payable Increase<br>| No effect (financing activity)<br>| -<br>| $40,000</p><p>| Net Cash Provided by Operating Activities<br>| $40,000</p><p>Explanation of Adjustments to Net Income</p><p>When preparing the operating section of the statement of cash flows using the indirect method, we start with net income and make adjustments to convert accrual-based net income to cash basis.</p><p>Categories of Adjustments:</p><p>Non-cash expenses and revenues: Add back non-cash expenses (depreciation) and subtract non-cash revenues.</p><p>Changes in current assets and liabilities:</p><p>Increase in current assets → Subtract from net income (uses cash)</p><p>Decrease in current assets → Add to net income (provides cash)</p><p>Increase in current liabilities → Add to net income (provides cash)</p><p>Decrease in current liabilities → Subtract from net income (uses cash)</p><p>Non-operating items: Remove gains/losses from investing and financing activities.</p><p>Relevant Journal Entries</p><p>For increased clarity, here are the relevant journal entries representing the transactions in this problem:</p><p>Accounts Receivable Increase:</p><p>Account<br>Debit<br>Credit</p><p>| Accounts Receivable<br>| $20,000<br>|</p><p>| Revenue<br>|<br>| $20,000</p><p>Prepaid Insurance Increase:</p><p>Account<br>Debit<br>Credit</p><p>| Prepaid Insurance<br>| $40,000<br>|</p><p>| Cash<br>|<br>| $40,000</p><p>Summary</p><p>Martin Co. reports net cash provided by operating activities of $40,000. This amount represents the actual cash generated from the company&#x27;s primary business operations after adjusting net income for non-cash items, changes in working capital, and non-operating items.</p><p>Key adjustments included:</p><p>Adding back $10,000 of depreciation expense (non-cash)</p><p>Subtracting $20,000 increase in accounts receivable (cash not received)</p><p>Subtracting $40,000 increase in prepaid insurance (cash outflow)</p><p>Adding $30,000 increase in accounts payable (cash not paid)</p><p>Subtracting $10,000 gain on sale of equipment (non-operating gain)</p><p>Excluding the $50,000 increase in nontrade notes payable (financing activity)</p>`,
    },
    {
      id: "5125",
      prompt: `Fara Co. reported bonds payable of $47,000 at December 31, Year 1, and $50,000 at December 31, Year 2. During Year 2, Fara issued $20,000 of bonds payable in exchange for equipment. There was no amortization of bond premium or discount during the year. What amount should Fara report in its Year 2 statement of cash flows for redemption of bonds payable?`,
      choices: [
        `$3,000`,
        `$17,000`,
        `$20,000`,
        `$23,000`,
      ],
      correctIndex: 1,
      explanation: `<h3 class="exp-title">Statement of Cash Flows - Bond Redemption Analysis</h3><p>Understanding the Question</p><p>We need to determine the amount Fara Co. should report for redemption of bonds payable in its Year 2 statement of cash flows.</p><p>Key Information Analysis</p><p>Bonds payable at December 31, Year 1: $47,000</p><p>Bonds payable at December 31, Year 2: $50,000</p><p>Bonds issued for equipment (non-cash transaction): $20,000</p><p>No amortization of bond premium or discount</p><p>Calculation Method</p><p>To find the amount of bonds redeemed, we need to analyze the change in the bonds payable account and adjust for any non-cash transactions:</p><p>Bonds Payable Analysis<br>Amount</p><p>| Beginning balance (Dec 31, Year 1)<br>| $47,000</p><p>| Add: Bonds issued during Year 2 (non-cash for equipment)<br>| +$20,000</p><p>| Less: Ending balance (Dec 31, Year 2)<br>| -$50,000</p><p>| Bonds redeemed (cash outflow)<br>| $17,000</p><p>Journal Entries Analysis</p><p>To better understand the transactions affecting bonds payable during Year 2:</p><p>Bond Issuance for Equipment (Non-cash):</p><p>Account<br>Debit<br>Credit</p><p>| Equipment<br>| $20,000<br>|</p><p>| Bonds Payable<br>|<br>| $20,000</p><p>Bond Redemption (Cash):</p><p>Account<br>Debit<br>Credit</p><p>| Bonds Payable<br>| $17,000<br>|</p><p>| Cash<br>|<br>| $17,000</p><p>Answer Analysis</p><p>$3,000</p><p>Incorrect. This is just the net change in bonds payable ($50,000 - $47,000) without considering non-cash transactions.</p><p>$17,000</p><p>Correct! This represents the redemption amount after accounting for the $20,000 non-cash bond issuance.</p><p>$20,000</p><p>Incorrect. This is the amount of bonds issued for equipment (a non-cash transaction).</p><p>$23,000</p><p>Incorrect. This adds the non-cash issuance and net change incorrectly.</p><p>Summary</p><p>To determine bond redemptions on the statement of cash flows, we must:</p><p>Analyze changes in the bonds payable account</p><p>Add back any non-cash bond issuances</p><p>Account for any non-cash amortization (none in this case)</p><p>In this case: $47,000 (beginning) + $20,000 (non-cash issuance) - $50,000 (ending) = $17,000 in cash redemptions</p>`,
    },
    {
      id: "8557",
      prompt: `Polk Co. acquires a forklift from Quest Co. for $30,000. The terms require Polk to pay $3,000 down and finance the remaining $27,000. On March 1, Year 1, Polk pays the $3,000 down and accepts delivery of the forklift. Polk signed a note that requires it to pay principal payments of $1,000 per month for 27 months beginning July 1, Year 1.

What amount should Polk report as an investing activity in the statement of cash flows for the year ended December 31, Year 1?`,
      choices: [
        `$3,000`,
        `$30,000`,
        `$9,000`,
        `$12,000`,
      ],
      correctIndex: 0,
      explanation: `<h3 class="exp-title">Cash Flow Statement: Investing Activities Analysis</h3><p>Answer Analysis</p><p>$3,000 is correct</p><p>$30,000</p><p>$9,000</p><p>$12,000</p><p>Explanation</p><p>For the statement of cash flows, only actual cash payments for long-term assets are reported as investing activities. When analyzing the forklift acquisition:</p><p>•<br>Total acquisition cost: $30,000</p><p>•<br>Down payment (cash portion): $3,000</p><p>•<br>Financed portion: $27,000</p><p>Only the $3,000 down payment represents an actual cash flow during Year 1 related to the acquisition of the asset. The financed portion ($27,000) doesn&#x27;t involve cash outflow at acquisition.</p><p>Journal Entries</p><p>March 1, Year 1 - Initial acquisition:</p><p>Account<br>Debit<br>Credit</p><p>| Equipment (Forklift)<br>| $30,000<br>|</p><p>| Cash<br>|<br>| $3,000</p><p>| Note Payable<br>|<br>| $27,000</p><p>July-December, Year 1 - Principal payments:</p><p>Account<br>Debit<br>Credit</p><p>| Note Payable<br>| $6,000<br>|</p><p>| Cash<br>|<br>| $6,000</p><p>| (For 6 monthly payments of $1,000 each from July-December)</p><p>Cash Flow Classification</p><p>Transaction<br>Amount<br>Classification</p><p>| Down payment for forklift<br>| $3,000<br>| Investing Activity</p><p>| Principal payments on note<br>| $6,000<br>| Financing Activity</p><p>Note: The principal payments on the note ($6,000 for July-December) would be classified as financing activities, not investing activities.</p><p>Summary</p><p>For the statement of cash flows for the year ended December 31, Year 1, Polk Co. should report $3,000 as an investing cash outflow for the acquisition of the forklift. This represents the only cash payment made for the acquisition of the long-term asset. The financed portion ($27,000) and subsequent principal payments ($6,000) do not affect the investing section of the cash flow statement.</p><p>The monthly principal payments of $1,000 (totaling $6,000 for the six months from July to December) would be reported as financing activities in the cash flow statement, not investing activities.</p>`,
    },
    {
      id: "8554",
      prompt: `During Year 2, Xan, Inc. had the following financing-related activities:

Payment for early retirement of long-term bonds payable (carrying amount $370,000): $375,000

Distribution of cash dividend declared in Year 1 to preferred shareholders: $31,000

Conversion of convertible preferred stock into common shares

Proceeds from sale of treasury stock (carrying amount at cost $43,000): $50,000

What amount should Xan report as net cash used in financing activities in its Year 2 statement of cash flows?`,
      choices: [
        `$358,000`,
        `$356,000`,
        `$296,000`,
        `$265,000`,
      ],
      correctIndex: 1,
      explanation: `<h3 class="exp-title">Statement of Cash Flows: Financing Activities Analysis</h3><p>Question Answer</p><p>The correct answer is: $356,000</p><p>Explanation</p><p>To determine the net cash used in financing activities, we need to analyze all financing-related transactions and identify their cash flow effects.</p><p>Financing Activity<br>Cash Flow Effect</p><p>| Early retirement of long-term bonds payable<br>| ($375,000)</p><p>| Distribution of cash dividend to preferred shareholders<br>| ($31,000)</p><p>| Conversion of convertible preferred stock into common shares<br>| $0</p><p>| Proceeds from sale of treasury stock<br>| $50,000</p><p>| Net Cash Used in Financing Activities<br>| ($356,000)</p><p>Analysis of Each Transaction</p><p>1. Early Retirement of Bonds</p><p>When a company retires bonds early, the cash paid is a financing outflow. The company paid $375,000 to retire bonds with a carrying amount of $370,000.</p><p>Journal Entry for Bond Retirement:</p><p>| Bonds Payable<br>| 370,000<br>|</p><p>| Loss on Bond Retirement<br>| 5,000<br>|</p><p>| Cash<br>|<br>| 375,000</p><p>2. Distribution of Cash Dividend</p><p>The payment of previously declared dividends is a financing outflow of $31,000.</p><p>Journal Entry for Dividend Payment:</p><p>| Dividends Payable<br>| 31,000<br>|</p><p>| Cash<br>|<br>| 31,000</p><p>3. Conversion of Preferred Stock</p><p>The conversion of preferred stock to common stock is a non-cash transaction. It involves moving amounts from one equity account to another with no cash flow effect.</p><p>4. Sale of Treasury Stock</p><p>The sale of treasury stock generated $50,000 cash, which is a financing inflow.</p><p>Journal Entry for Treasury Stock Sale:</p><p>| Cash<br>| 50,000<br>|</p><p>| Treasury Stock<br>|<br>| 43,000</p><p>| Additional Paid-in Capital<br>|<br>| 7,000</p><p>Summary Calculation</p><p>Net Cash Used in Financing Activities = Cash Inflows - Cash Outflows</p><p>Net Cash Used in Financing Activities = $50,000 - ($375,000 + $31,000) = $50,000 - $406,000 = ($356,000)</p><p>The negative amount indicates that Xan, Inc. used $356,000 in financing activities during Year 2.</p><p>Key Takeaways</p><p>✓ Cash outflows from financing activities include debt repayments and dividend distributions</p><p>✓ Cash inflows from financing activities include proceeds from stock issuances and treasury stock sales</p><p>✓ Non-cash financing transactions (like stock conversions) have no impact on the statement of cash flows</p><p>✓ When total financing outflows exceed inflows, the result is &quot;net cash used in financing activities&quot;</p>`,
    },
  ],
};
