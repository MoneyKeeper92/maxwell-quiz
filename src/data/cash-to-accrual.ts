import type { Quiz } from "./types";

export const cashToAccrualQuiz: Quiz = {
  key: "cashtoaccrual",
  title: "Cash to Accrual",
  subtitle: "Converting between cash and accrual basis",
  discipline: "far",
  questions: [
    {
      id: "1",
      prompt: `Nova Inc. reported an accrual‐basis pretax income of $280,000 for the year. At December 31, its accounts receivable decreased by $30,000 and its accounts payable increased by $20,000 compared to the previous year‐end. What is Nova Inc.'s cash‐basis pretax income?`,
      choices: [
        `$280,000`,
        `$300,000`,
        `$330,000`,
        `$350,000`,
      ],
      correctIndex: 2,
      explanation: `<div style="font-family: 'Segoe UI', sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); border-radius: 10px;">
<!-- Header -->
<div style="background: linear-gradient(to right, #01506e, #0099d4); color: white; padding: 15px; border-radius: 10px 10px 0 0; margin-bottom: 20px;">
<h2 style="margin: 0; color: white;">Converting Accrual-Basis Income to Cash-Basis Income</h2>
</div>

<!-- Answers Section -->
<div style="background-color: #f9f9f9; padding: 15px; border-left: 5px solid #207bb5; border-radius: 5px; margin-bottom: 20px;">
<h3 style="color: #207bb5; margin-top: 0;">Answer Options</h3>
<ul style="list-style-type: none; padding-left: 0;">
<li style="margin-bottom: 10px; padding: 8px; border-radius: 5px; background-color: #f1f1f1; color: #555;">$280,000</li>
<li style="margin-bottom: 10px; padding: 8px; border-radius: 5px; background-color: #f1f1f1; color: #555;">$300,000</li>
<li style="margin-bottom: 10px; padding: 8px; border-radius: 5px; background-color: #e8f7ef; border: 1px solid #68d3a7; color: #2a7d50;"><strong>$330,000</strong> ✓</li>
<li style="margin-bottom: 10px; padding: 8px; border-radius: 5px; background-color: #f1f1f1; color: #555;">$350,000</li>
</ul>
</div>

<!-- Explanation -->
<div style="background-color: #f5f9fc; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
<h3 style="color: #207bb5; margin-top: 0;">Explanation</h3>
<p>To convert accrual-basis income to cash-basis income, we need to adjust for changes in accounts that represent timing differences between when transactions are recorded and when cash changes hands.</p>

<div style="background-color: #e8f7ef; padding: 15px; border-radius: 5px; border-left: 5px solid #68d3a7; margin: 15px 0;">
<h4 style="color: #4B556A; margin-top: 0;">Key Adjustments</h4>
<ul>
<li><strong>Accounts Receivable decrease of $30,000</strong>: This means more cash was collected than revenue recorded, so we <strong>add $30,000</strong> to accrual-basis income.</li>
<li><strong>Accounts Payable increase of $20,000</strong>: This means fewer expenses were paid in cash than recorded, so we <strong>add $20,000</strong> to accrual-basis income.</li>
</ul>
</div>
</div>

<!-- Calculation -->
<div style="background-color: #f0f7fa; padding: 15px; border-radius: 5px; border-left: 5px solid #0099d4; margin-bottom: 20px;">
<h3 style="color: #01506e; margin-top: 0;">Calculation</h3>
<div style="display: flex; align-items: center; margin-bottom: 10px;">
<div style="width: 200px;"><strong>Accrual-basis income:</strong></div>
<div>$280,000</div>
</div>
<div style="display: flex; align-items: center; margin-bottom: 10px;">
<div style="width: 200px;"><strong>Add: A/R decrease:</strong></div>
<div>$30,000</div>
</div>
<div style="display: flex; align-items: center; margin-bottom: 10px;">
<div style="width: 200px;"><strong>Add: A/P increase:</strong></div>
<div>$20,000</div>
</div>
<div style="display: flex; align-items: center; margin-top: 10px; padding-top: 10px; border-top: 1px solid #ccc;">
<div style="width: 200px;"><strong>Cash-basis income:</strong></div>
<div style="font-weight: bold; color: #2a7d50;">$330,000</div>
</div>
</div>

<!-- Journal Entries -->
<div style="background-color: #f5f5f7; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
<h3 style="color: #4B556A; margin-top: 0;">Journal Entries</h3>
<p>The following journal entries reflect the adjustments needed to convert accrual-basis to cash-basis:</p>

<div style="margin-bottom: 15px;">
<h4 style="color: #207bb5; margin-bottom: 10px;">For the Decrease in Accounts Receivable</h4>
<table style="width: 100%; border-collapse: collapse; border-radius: 5px; overflow: hidden;">
<thead style="background-color: #207bb5; color: white;">
<tr>
<th style="padding: 10px; text-align: left;">Account</th>
<th style="padding: 10px; text-align: right;">Debit</th>
<th style="padding: 10px; text-align: right;">Credit</th>
</tr>
</thead>
<tbody>
<tr style="background-color: #f9f9f9;">
<td style="padding: 10px; border-bottom: 1px solid #ddd;">Cash</td>
<td style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;">$30,000</td>
<td style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;"></td>
</tr>
<tr style="background-color: #f3f3f3;">
<td style="padding: 10px; border-bottom: 1px solid #ddd;">Accounts Receivable</td>
<td style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;"></td>
<td style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;">$30,000</td>
</tr>
</tbody>
</table>
</div>

<div>
<h4 style="color: #207bb5; margin-bottom: 10px;">For the Increase in Accounts Payable</h4>
<table style="width: 100%; border-collapse: collapse; border-radius: 5px; overflow: hidden;">
<thead style="background-color: #207bb5; color: white;">
<tr>
<th style="padding: 10px; text-align: left;">Account</th>
<th style="padding: 10px; text-align: right;">Debit</th>
<th style="padding: 10px; text-align: right;">Credit</th>
</tr>
</thead>
<tbody>
<tr style="background-color: #f9f9f9;">
<td style="padding: 10px; border-bottom: 1px solid #ddd;">Expenses</td>
<td style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;">$20,000</td>
<td style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;"></td>
</tr>
<tr style="background-color: #f3f3f3;">
<td style="padding: 10px; border-bottom: 1px solid #ddd;">Accounts Payable</td>
<td style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;"></td>
<td style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;">$20,000</td>
</tr>
</tbody>
</table>
</div>
</div>

<!-- Summary -->
<div style="background: linear-gradient(to right, #e8f7ef, #f5f9fc); padding: 15px; border-radius: 5px; border: 1px solid #68d3a7;">
<h3 style="color: #01506e; margin-top: 0;">Summary</h3>
<p>Nova Inc.'s cash-basis pretax income is <strong style="color: #2a7d50;">$330,000</strong>, which reflects the accrual-basis income adjusted for the timing differences in cash collection and payment:</p>
<ul>
<li>The decrease in accounts receivable ($30,000) means more cash was collected than revenue recorded.</li>
<li>The increase in accounts payable ($20,000) means fewer expenses were paid in cash than recorded.</li>
<li>Both adjustments increase the cash-basis income relative to the accrual-basis income.</li>
</ul>
</div>
</div>`,
    },
    {
      id: "2",
      prompt: `Wright Co. is a small, privately held entity established at the beginning of Year 1. Wright decided to prepare cash basis financial statements. At the end of Year 1, the company recorded receivables of $2,000,000 and accrued expenses of $900,000, which were included in the total expenses incurred for the year of $2,200,000, with $1,300,000 paid during the year. Cash sales of $1,200,000 were fully recognized for the year.

What is the company's cash-basis income/loss from operations at the end of Year 1?`,
      choices: [
        `A loss of $1,900,000.`,
        `A loss of $1,000,000.`,
        `A loss of $100,000.`,
        `Income of $1,000,000.`,
      ],
      correctIndex: 2,
      explanation: `<div style="font-family: 'Segoe UI', sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
<div style="background: linear-gradient(135deg, #01506e, #207bb5); color: white; padding: 15px; border-radius: 10px 10px 0 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
<h2 style="margin: 0; color: white;">Cash Basis Accounting Analysis</h2>
</div>

<div style="background-color: #f9f9f9; padding: 20px; border-left: 1px solid #ddd; border-right: 1px solid #ddd; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
<h3 style="color: #207bb5; border-bottom: 2px solid #68d3a7; padding-bottom: 8px;">Understanding the Question</h3>
<p>We need to determine Wright Co.'s cash-basis income/loss for Year 1. Under cash basis accounting, only actual cash received and cash paid are recognized.</p>

<h3 style="color: #207bb5; border-bottom: 2px solid #68d3a7; padding-bottom: 8px;">Analysis</h3>
<div style="background-color: #f0f7fa; border-left: 4px solid #0099d4; padding: 15px; margin: 15px 0; border-radius: 5px;">
<p>Cash basis accounting recognizes revenue when cash is received and expenses when cash is paid, regardless of when the goods or services are provided or received.</p>
</div>

<h4 style="color: #4B556A;">Step 1: Identify Cash Revenue</h4>
<p>Cash sales = $1,200,000</p>

<h4 style="color: #4B556A;">Step 2: Identify Cash Expenses</h4>
<p>Cash expenses paid = $1,300,000</p>

<h4 style="color: #4B556A;">Step 3: Calculate Cash Basis Income/Loss</h4>
<div style="background-color: #e8f4f8; border: 1px solid #0099d4; border-radius: 5px; padding: 15px; margin: 15px 0;">
<p>Cash Basis Income/Loss = Cash Revenue - Cash Expenses</p>
<p>Cash Basis Income/Loss = $1,200,000 - $1,300,000 = -$100,000</p>
</div>

<h3 style="color: #207bb5; border-bottom: 2px solid #68d3a7; padding-bottom: 8px;">Important Considerations</h3>
<ul style="list-style-type: none; padding-left: 0;">
<li style="padding: 8px 0; border-bottom: 1px dashed #ddd;">
✓ The $2,000,000 in receivables are NOT counted in cash basis accounting since no cash was received.
</li>
<li style="padding: 8px 0; border-bottom: 1px dashed #ddd;">
✓ The $900,000 in accrued expenses are NOT counted in cash basis accounting since no cash was paid.
</li>
<li style="padding: 8px 0;">
✓ Only actual cash transactions matter: $1,200,000 received and $1,300,000 paid.
</li>
</ul>

<div style="margin: 20px 0; background: linear-gradient(to right, #f0f7fa, white); padding: 15px; border-radius: 5px; border-left: 5px solid #207bb5;">
<h4 style="color: #01506e; margin-top: 0;">Comparison: Cash Basis vs. Accrual Basis</h4>
<table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
<tr style="background-color: #e8f4f8;">
<th style="border: 1px solid #0099d4; padding: 8px; text-align: left;">Item</th>
<th style="border: 1px solid #0099d4; padding: 8px; text-align: right;">Cash Basis</th>
<th style="border: 1px solid #0099d4; padding: 8px; text-align: right;">Accrual Basis</th>
</tr>
<tr>
<td style="border: 1px solid #ddd; padding: 8px;">Revenue</td>
<td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,200,000</td>
<td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,200,000</td>
</tr>
<tr>
<td style="border: 1px solid #ddd; padding: 8px;">Expenses</td>
<td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,300,000</td>
<td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,200,000</td>
</tr>
<tr style="font-weight: bold;">
<td style="border: 1px solid #ddd; padding: 8px;">Income/(Loss)</td>
<td style="border: 1px solid #ddd; padding: 8px; text-align: right;">($100,000)</td>
<td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,000,000</td>
</tr>
</table>
</div>

<h3 style="color: #207bb5; border-bottom: 2px solid #68d3a7; padding-bottom: 8px;">Answer</h3>
<div style="display: flex; flex-direction: column; gap: 10px; margin: 15px 0;">
<div style="padding: 10px; border-radius: 5px; background-color: #ffebee; color: #d32f2f; border-left: 4px solid #d32f2f;">
A loss of $1,900,000. - Incorrect
</div>
<div style="padding: 10px; border-radius: 5px; background-color: #ffebee; color: #d32f2f; border-left: 4px solid #d32f2f;">
A loss of $1,000,000. - Incorrect
</div>
<div style="padding: 10px; border-radius: 5px; background-color: #e8f5e9; color: #388e3c; border-left: 4px solid #68d3a7;">
A loss of $100,000. - Correct
</div>
<div style="padding: 10px; border-radius: 5px; background-color: #ffebee; color: #d32f2f; border-left: 4px solid #d32f2f;">
Income of $1,000,000. - Incorrect (This would be the accrual basis income)
</div>
</div>
</div>

<div style="background: linear-gradient(135deg, #207bb5, #0099d4); color: white; padding: 15px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
<h3 style="margin: 0; color: white;">Summary</h3>
<p style="margin-bottom: 0;">Under cash basis accounting, Wright Co. experienced a loss of $100,000 during Year 1, as the company received $1,200,000 in cash but paid out $1,300,000 in cash for expenses. Accounts receivable and accrued expenses are not recognized under cash basis accounting.</p>
</div>
</div>`,
    },
    {
      id: "3",
      prompt: `The company reports $310,000 cash‐basis pretax income for the current period. During the current period, accrued expenses increased by $5,000 and prepaid expenses decreased by $7,000. What is the accrual‐basis pretax income?`,
      choices: [
        `$298,000`,
        `$310,000`,
        `$322,000`,
        `$285,000`,
      ],
      correctIndex: 0,
      explanation: `<div style="border-radius:15px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; overflow:hidden">
<div style="background:linear-gradient(135deg, #01506e, #207bb5); border-top-left-radius:15px; border-top-right-radius:15px; color:white; padding:20px">
<h1 style="margin-left:0; margin-right:0">Cash to Accrual Accounting Conversion</h1>
</div>

<div style="background-color:#f9f9f9; padding:20px">
<div style="background-color:#eaf7ff; border-left:5px solid #0099d4; border-radius:5px; margin-bottom:20px; padding:15px">
<h3>Answer Analysis</h3>

<p><strong>✓ $298,000</strong> is the correct accrual-basis pretax income.</p>

<p><strong>✗ $310,000</strong> is the cash-basis income before adjustments.</p>

<p><strong>✗ $322,000</strong> is incorrect.</p>

<p><strong>✗ $285,000</strong> is incorrect.</p>
</div>

<h2>Explanation: Converting Cash Basis to Accrual Basis</h2>

<div style="margin-bottom:20px">
<h3>Step 1: Adjustment for Increase in Accrued Expenses</h3>

<p>An increase of $5,000 in accrued expenses means that expenses have been incurred but not yet paid. Under accrual accounting, we need to recognize these expenses in the current period.</p>

<div style="background-color:#f5f5f5; border-radius:8px; margin-bottom:15px; margin-left:0; margin-right:0; margin-top:15px; overflow:hidden">
<div style="background-color:#207bb5; color:white; font-weight:bold; padding:10px">Journal Entry</div>

<table cellspacing="0" style="border-collapse:collapse; text-align:left; width:100%">
	<tbody>
		<tr>
			<th style="width:60%">Account</th>
			<th style="width:20%">Debit</th>
			<th style="width:20%">Credit</th>
		</tr>
		<tr>
			<td>Expense</td>
			<td>$5,000</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>Accrued Liabilities</td>
			<td>&nbsp;</td>
			<td>$5,000</td>
		</tr>
	</tbody>
</table>
</div>
</div>

<div style="margin-bottom:20px">
<h3>Step 2: Adjustment for Decrease in Prepaid Expenses</h3>

<p>A decrease of $7,000 in prepaid expenses indicates that prepaid items have been consumed or used up during the period, thus becoming expenses.</p>

<div style="background-color:#f5f5f5; border-radius:8px; margin-bottom:15px; margin-left:0; margin-right:0; margin-top:15px; overflow:hidden">
<div style="background-color:#207bb5; color:white; font-weight:bold; padding:10px">Journal Entry</div>

<table cellspacing="0" style="border-collapse:collapse; text-align:left; width:100%">
	<tbody>
		<tr>
			<th style="width:60%">Account</th>
			<th style="width:20%">Debit</th>
			<th style="width:20%">Credit</th>
		</tr>
		<tr>
			<td>Expense</td>
			<td>$7,000</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>Prepaid Expenses</td>
			<td>&nbsp;</td>
			<td>$7,000</td>
		</tr>
	</tbody>
</table>
</div>
</div>

<div style="margin-bottom:20px">
<h3>Step 3: Compute Accrual-Basis Pretax Income</h3>

<p>To convert from cash-basis to accrual-basis income, we need to make the necessary adjustments for accrued and prepaid expenses.</p>

<div style="background-color:#f0f9f6; border-left:5px solid #68d3a7; border-radius:8px; padding:15px">
<table cellspacing="0" style="border-collapse:collapse; width:100%">
	<tbody>
		<tr>
			<td>Cash-Basis Pretax Income</td>
			<td style="text-align:right">$310,000</td>
		</tr>
		<tr>
			<td>Less: Increase in Accrued Expenses</td>
			<td style="text-align:right">($5,000)</td>
		</tr>
		<tr>
			<td>Less: Decrease in Prepaid Expenses</td>
			<td style="text-align:right">($7,000)</td>
		</tr>
		<tr>
			<td>Accrual-Basis Pretax Income</td>
			<td style="text-align:right">$298,000</td>
		</tr>
	</tbody>
</table>
</div>
</div>

<div style="background-color:#e9f5fb; border-radius:8px; border:1px solid #0099d4; margin-top:20px; padding:15px">
<h3>Key Concept: Cash vs. Accrual Accounting</h3>

<ul>
	<li><strong>Cash basis:</strong> Revenue and expenses are recorded when cash is received or paid.</li>
	<li><strong>Accrual basis:</strong> Revenue and expenses are recorded when earned or incurred, regardless of when cash changes hands.</li>
	<li><strong>Increases in accrued expenses</strong> represent additional expenses under accrual accounting.</li>
	<li><strong>Decreases in prepaid expenses</strong> represent additional expenses as prepaid items are consumed.</li>
</ul>
</div>

<div style="background-color:#f0f9f6; border-radius:8px; border:1px solid #68d3a7; margin-top:20px; padding:15px">
<h3>Summary</h3>

<p>Starting with cash-basis pretax income of $310,000, we subtracted $5,000 for the increase in accrued expenses and $7,000 for the decrease in prepaid expenses. This gives us the correct accrual-basis pretax income of <strong>$298,000</strong>.</p>
</div>
</div>
</div>`,
    },
    {
      id: "4",
      prompt: `In its first year of operations, TechNova Consulting recorded the following on an accrual basis:

	Unearned fees: $1,500

	Accounts receivable: $3,000

	Consulting fee revenue: $28,000

There were no beginning balances. What is TechNova’s cash-basis revenue for the year?`,
      choices: [
        `$30,500`,
        `$28,000`,
        `$23,500`,
        `$26,500`,
      ],
      correctIndex: 3,
      explanation: `<div style="border-radius:10px; border:1px solid #e0e0e0; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; overflow:hidden; padding:0"><!-- Header -->
<div style="background:linear-gradient(135deg, #01506e, #0099d4); border-bottom:4px solid #68d3a7; color:white; padding:20px">
<h1 style="margin-left:0; margin-right:0">Converting Accrual-Basis to Cash-Basis Revenue</h1>
</div>
<!-- Content -->

<div style="padding:20px"><!-- Question and Answer section -->
<div style="background-color:#f9f9f9; border-left:5px solid #207bb5; border-radius:8px; margin-bottom:20px; padding:15px">
<p><strong>Question:</strong> What is TechNova&#39;s cash-basis revenue for the year?</p>

<p><s>$30,500</s></p>

<p><s>$28,000</s></p>

<p><s>$23,500</s></p>

<p>$26,500 ✓</p>
</div>
<!-- Explanation -->

<div style="margin-bottom:20px">
<h3>Explanation</h3>

<p>To convert from accrual-basis revenue to cash-basis revenue, we need to adjust for timing differences between when revenue is earned (accrual basis) and when cash is collected (cash basis).</p>
</div>
<!-- Step by Step Analysis -->

<div style="margin-bottom:20px">
<h3>Step-by-Step Analysis</h3>

<div style="background-color:#f5f5f5; border-left:4px solid #68d3a7; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Step 1: Start with Accrual-Basis Revenue</h4>

<p>TechNova&#39;s accrual-basis revenue is <strong>$28,000</strong>. This represents all revenue earned during the year, regardless of when cash was received.</p>
</div>

<div style="background-color:#f5f5f5; border-left:4px solid #68d3a7; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Step 2: Adjust for Unearned Fees</h4>

<p>Unearned fees of <strong>$1,500</strong> represent cash received in advance that hasn&#39;t yet been recognized as revenue on the accrual basis. To convert to cash basis, we need to <strong>add</strong> this amount since the cash was received during the year.</p>

<div style="margin-bottom:10px; margin-left:0; margin-right:0; margin-top:10px">
<h5>Journal Entry (Accrual Basis) When Cash Was Received:</h5>

<table border="1" cellspacing="0" style="border-collapse:collapse; border-radius:5px; border:1px solid #e0e0e0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:right">Debit</th>
			<th style="text-align:right">Credit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-bottom:1px solid #e0e0e0">Cash</td>
			<td style="border-bottom:1px solid #e0e0e0; text-align:right">$1,500</td>
			<td style="border-bottom:1px solid #e0e0e0; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-bottom:1px solid #e0e0e0">Unearned Fees</td>
			<td style="border-bottom:1px solid #e0e0e0; text-align:right">&nbsp;</td>
			<td style="border-bottom:1px solid #e0e0e0; text-align:right">$1,500</td>
		</tr>
	</tbody>
</table>
</div>
</div>

<div style="background-color:#f5f5f5; border-left:4px solid #68d3a7; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Step 3: Adjust for Accounts Receivable</h4>

<p>Accounts receivable of <strong>$3,000</strong> represent revenue recognized on the accrual basis but not yet collected in cash. To convert to cash basis, we need to <strong>subtract</strong> this amount since the cash was not received during the year.</p>

<div style="margin-bottom:10px; margin-left:0; margin-right:0; margin-top:10px">
<h5>Journal Entry (Accrual Basis) When Revenue Was Earned:</h5>

<table border="1" cellspacing="0" style="border-collapse:collapse; border-radius:5px; border:1px solid #e0e0e0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:right">Debit</th>
			<th style="text-align:right">Credit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-bottom:1px solid #e0e0e0">Accounts Receivable</td>
			<td style="border-bottom:1px solid #e0e0e0; text-align:right">$3,000</td>
			<td style="border-bottom:1px solid #e0e0e0; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-bottom:1px solid #e0e0e0">Consulting Fee Revenue</td>
			<td style="border-bottom:1px solid #e0e0e0; text-align:right">&nbsp;</td>
			<td style="border-bottom:1px solid #e0e0e0; text-align:right">$3,000</td>
		</tr>
	</tbody>
</table>
</div>
</div>

<div style="background-color:#f5f5f5; border-left:4px solid #68d3a7; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Step 4: Calculate Cash-Basis Revenue</h4>

<p>Now we can calculate the cash-basis revenue:</p>

<div style="background-color:#e8f7f3; border-left:4px solid #68d3a7; border-radius:5px; padding:10px">
<p><strong>Cash-Basis Revenue = Accrual-Basis Revenue + Unearned Fees - Accounts Receivable</strong><br />
Cash-Basis Revenue = $28,000 + $1,500 - $3,000 = <strong>$26,500</strong></p>
</div>
</div>
</div>
<!-- Summary -->

<div style="background:linear-gradient(to right, #f9f9f9, #ffffff); border-left:5px solid #0099d4; border-radius:8px; padding:15px">
<h3>Summary</h3>

<p>TechNova&#39;s cash-basis revenue is <strong>$26,500</strong>. This represents the actual cash collected from consulting services during the year.</p>

<p>To convert from accrual-basis to cash-basis revenue:</p>

<ul>
	<li><strong>Add</strong> unearned fees ($1,500) - cash received but not yet counted as revenue on accrual basis</li>
	<li><strong>Subtract</strong> accounts receivable ($3,000) - revenue recognized but cash not yet received</li>
</ul>

<p>The cash-basis approach focuses on when cash changes hands, regardless of when services are performed.</p>
</div>
</div>
</div>`,
    },
    {
      id: "5",
      prompt: `Savor Co. had $100,000 in cash-basis pretax income for Year 2. At December 31, Year 2, accounts receivable had increased by $10,000 and accounts payable had decreased by $6,000 from their December 31, Year 1, balances. Compared to the accrual basis method of accounting, Savor's cash pretax income is:`,
      choices: [
        `Higher by $4,000.`,
        `Lower by $4,000.`,
        `Higher by $16,000.`,
        `Lower by $16,000.`,
      ],
      correctIndex: 3,
      explanation: `<div style="font-family: 'Segoe UI', sans-serif; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); overflow: hidden; max-width: 800px; margin: 20px auto; border: 1px solid #e0e0e0;">
<div style="background: linear-gradient(to right, #01506e, #207bb5); color: white; padding: 15px 20px; border-radius: 10px 10px 0 0;">
<h2 style="margin: 0; color: white;">Cash Basis vs. Accrual Basis Accounting Analysis</h2>
</div>

<div style="padding: 20px; background-color: #f9f9f9;">
<div style="background-color: #eaf7fd; border-left: 5px solid #0099d4; padding: 15px; margin-bottom: 20px; border-radius: 0 10px 10px 0;">
<h3 style="color: #207bb5; margin-top: 0;">Problem Summary</h3>
<p>Analyzing how cash-basis pretax income of $100,000 differs from accrual-basis income when accounts receivable increased by $10,000 and accounts payable decreased by $6,000.</p>
</div>

<h3 style="color: #01506e; border-bottom: 2px solid #68d3a7; padding-bottom: 8px;">Explanation of Cash vs. Accrual Differences</h3>

<p>To convert cash-basis income to accrual-basis income, we need to adjust for timing differences in revenue and expense recognition.</p>

<div style="display: flex; margin: 20px 0;">
<div style="flex: 1; background: linear-gradient(to bottom, #207bb5, #0099d4); color: white; padding: 15px; border-radius: 10px 0 0 10px;">
<h4 style="margin-top: 0; color: white;">Accounts Receivable Impact</h4>
<p>An increase in accounts receivable of $10,000 means revenue was earned but not yet collected in cash. Under accrual accounting, this revenue is recognized, making accrual income higher than cash income.</p>
</div>

<div style="flex: 1; background: linear-gradient(to bottom, #4B556A, #374259); color: white; padding: 15px; border-radius: 0 10px 10px 0;">
<h4 style="margin-top: 0; color: white;">Accounts Payable Impact</h4>
<p>A decrease in accounts payable of $6,000 means more expenses were paid than incurred. Under accrual accounting, only expenses incurred are recognized, making accrual income higher than cash income.</p>
</div>
</div>

<h3 style="color: #01506e; border-bottom: 2px solid #68d3a7; padding-bottom: 8px;">Journal Entries for Accrual Adjustments</h3>

<table style="width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
<tr style="background-color: #01506e; color: white;">
<th style="padding: 12px 15px; text-align: left;">Account</th>
<th style="padding: 12px 15px; text-align: right;">Debit</th>
<th style="padding: 12px 15px; text-align: right;">Credit</th>
</tr>
<tr style="background-color: #f2f2f2;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd;">Accounts Receivable</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: right;">$10,000</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: right;"></td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd;">Revenue</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: right;"></td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: right;">$10,000</td>
</tr>
<tr style="background-color: #f2f2f2;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd;">Expenses</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: right;">$6,000</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: right;"></td>
</tr>
<tr>
<td style="padding: 12px 15px;">Accounts Payable</td>
<td style="padding: 12px 15px; text-align: right;"></td>
<td style="padding: 12px 15px; text-align: right;">$6,000</td>
</tr>
</table>

<h3 style="color: #01506e; border-bottom: 2px solid #68d3a7; padding-bottom: 8px;">Calculation of Accrual-Basis Income</h3>

<table style="width: 100%; border-collapse: collapse; margin: 20px 0; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
<tr style="background-color: #207bb5; color: white;">
<th style="padding: 12px 15px; text-align: left;" colspan="2">Income Conversion</th>
</tr>
<tr style="background-color: #f2f2f2;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd;">Cash-basis pretax income</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: right;">$100,000</td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd;">Add: Increase in accounts receivable</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: right;">$10,000</td>
</tr>
<tr style="background-color: #f2f2f2;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd;">Add: Decrease in accounts payable</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: right;">$6,000</td>
</tr>
<tr style="background-color: #e8f7f1; font-weight: bold;">
<td style="padding: 12px 15px;">Accrual-basis pretax income</td>
<td style="padding: 12px 15px; text-align: right;">$116,000</td>
</tr>
</table>

<div style="background-color: #68d3a7; border-radius: 8px; padding: 15px; color: white; margin: 20px 0;">
<h3 style="margin-top: 0; color: white;">Conclusion</h3>
<p>Cash-basis pretax income is <span style="font-weight: bold; text-decoration: underline;">lower by $16,000</span> compared to accrual-basis income. This is because accrual accounting recognizes the additional $10,000 in revenue and $6,000 less in expenses, resulting in a total difference of $16,000.</p>
</div>

<div style="background-color: #f5f5f5; border-radius: 8px; padding: 15px; border-left: 5px solid #4B556A;">
<h3 style="color: #01506e; margin-top: 0;">Key Takeaway</h3>
<p>The difference between cash and accrual accounting lies in the timing of revenue and expense recognition. Cash accounting records transactions when cash changes hands, while accrual accounting recognizes revenue when earned and expenses when incurred, regardless of cash flow timing.</p>
</div>
</div>
</div>`,
    },
    {
      id: "6",
      prompt: `Crescent Corp. reported an accrual‐basis pretax income of $320,000 for the year. At year‐end, its prepaid expenses increased by $12,000 and its accrued expenses payable decreased by $18,000 compared to the previous year‐end. Both changes relate solely to operating expenses. What is Crescent Corp.'s cash‐basis pretax income?`,
      choices: [
        `$290,000`,
        `$300,000`,
        `$310,000`,
        `$320,000`,
      ],
      correctIndex: 0,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0, 0, 0, 0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; overflow:hidden"><!-- Header -->
<div style="background:linear-gradient(135deg, #01506e 0%, #0099d4 100%); border-radius:10px 10px 0 0; color:white; padding:20px">
<h2 style="margin-left:0; margin-right:0">Converting Accrual Basis to Cash Basis Income</h2>
</div>
<!-- Answer section -->

<div style="background-color:#f9f9f9; padding:20px">
<div style="display:flex; margin-bottom:20px">
<div style="background-color:#68d3a7; border-radius:10px; color:white; flex:1; font-weight:bold; margin-right:10px; padding:15px; text-align:center"><span style="color:white">Correct Answer: $290,000</span></div>

<div style="background-color:#ffdddd; border-radius:10px; color:#777777; flex:1; margin-left:10px; padding:15px; text-align:center; text-decoration:line-through">$300,000</div>

<div style="background-color:#ffdddd; border-radius:10px; color:#777777; flex:1; margin-left:10px; padding:15px; text-align:center; text-decoration:line-through">$310,000</div>

<div style="background-color:#ffdddd; border-radius:10px; color:#777777; flex:1; margin-left:10px; padding:15px; text-align:center; text-decoration:line-through">$320,000</div>
</div>
<!-- Explanation -->

<div style="background-color:white; border-left:5px solid #207bb5; border-radius:10px; margin-bottom:20px; padding:20px">
<h3>Explanation</h3>

<p>To convert accrual-basis income to cash-basis income, we need to adjust for timing differences related to prepaid expenses and accrued expenses:</p>

<ul style="list-style-type:none">
	<li><strong>Prepaid Expenses Increase ($12,000):</strong> An increase means more cash was paid than was expensed under accrual accounting. This reduces cash-basis income.</li>
	<li><strong>Accrued Expenses Decrease ($18,000):</strong> A decrease means more cash was paid than was expensed under accrual accounting. This further reduces cash-basis income.</li>
</ul>
</div>
<!-- Calculation -->

<div style="background-color:white; border-left:5px solid #0099d4; border-radius:10px; margin-bottom:20px; padding:20px">
<h3>Calculation</h3>

<div style="background-color:#f5f9fc; border-radius:8px; padding:15px">
<table cellspacing="0" style="border-collapse:collapse; margin-bottom:15px; width:100%">
	<tbody>
		<tr>
			<td>Accrual-Basis Pretax Income</td>
			<td style="text-align:right">$320,000</td>
		</tr>
		<tr>
			<td>Less: Increase in Prepaid Expenses</td>
			<td style="text-align:right">($12,000)</td>
		</tr>
		<tr>
			<td>Less: Decrease in Accrued Expenses</td>
			<td style="text-align:right">($18,000)</td>
		</tr>
		<tr>
			<td>Cash-Basis Pretax Income</td>
			<td style="text-align:right">$290,000</td>
		</tr>
	</tbody>
</table>
</div>
</div>
<!-- Journal Entries -->

<div style="background-color:white; border-left:5px solid #4b556a; border-radius:10px; margin-bottom:20px; padding:20px">
<h3>Journal Entries</h3>

<p>The following journal entries represent the accounting treatment of the changes in prepaid and accrued expenses:</p>

<div style="margin-bottom:15px">
<h4>1. For the increase in prepaid expenses:</h4>

<table border="1" cellspacing="0" style="border-collapse:collapse; border-radius:5px; border:1px solid #dddddd; overflow:hidden; width:100%">
	<tbody>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:right">Debit</th>
			<th style="text-align:right">Credit</th>
		</tr>
		<tr>
			<td style="border-bottom:1px solid #dddddd">Prepaid Expenses</td>
			<td style="border-bottom:1px solid #dddddd; text-align:right">$12,000</td>
			<td style="border-bottom:1px solid #dddddd; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td>Cash</td>
			<td style="text-align:right">&nbsp;</td>
			<td style="text-align:right">$12,000</td>
		</tr>
	</tbody>
</table>
</div>

<div>
<h4>2. For the decrease in accrued expenses:</h4>

<table border="1" cellspacing="0" style="border-collapse:collapse; border-radius:5px; border:1px solid #dddddd; overflow:hidden; width:100%">
	<tbody>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:right">Debit</th>
			<th style="text-align:right">Credit</th>
		</tr>
		<tr>
			<td style="border-bottom:1px solid #dddddd">Accrued Expenses</td>
			<td style="border-bottom:1px solid #dddddd; text-align:right">$18,000</td>
			<td style="border-bottom:1px solid #dddddd; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td>Cash</td>
			<td style="text-align:right">&nbsp;</td>
			<td style="text-align:right">$18,000</td>
		</tr>
	</tbody>
</table>
</div>
</div>
<!-- Summary -->

<div style="background:linear-gradient(135deg, #68d3a7 0%, #207bb5 100%); border-radius:10px; color:white; padding:15px">
<h3>Summary</h3>

<p>When converting from accrual-basis to cash-basis income, we must consider how timing differences affect cash flow:</p>

<ul>
	<li><strong>Increases in prepaid expenses</strong> reduce cash-basis income (cash outflow without expense recognition)</li>
	<li><strong>Decreases in accrued expenses</strong> reduce cash-basis income (paying off previously recognized expenses)</li>
</ul>

<p>Crescent Corp.&#39;s cash-basis pretax income is therefore $290,000.</p>
</div>
</div>
</div>`,
    },
    {
      id: "7",
      prompt: `Atlas Co. reported a cash‐basis pretax income of $180,000 for the current year. At year‐end, its accounts receivable increased by $25,000 and its accounts payable decreased by $15,000 compared to the previous year‐end. What is Atlas Co.'s accrual‐basis pretax income?`,
      choices: [
        `$180,000`,
        `$205,000`,
        `$220,000`,
        `$240,000`,
      ],
      correctIndex: 2,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',Arial,sans-serif; margin-bottom:20px; margin-left:20px; margin-right:20px; margin-top:20px; padding:20px">
<div style="background:linear-gradient(to right, #01506e, #207bb5); border-radius:8px 8px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">Cash-Basis to Accrual-Basis Conversion</h2>
</div>

<div style="background-color:#f9f9f9; border-left:5px solid #207bb5; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Solution Analysis</h3>

<p>To convert cash-basis income to accrual-basis income, adjustments must be made for changes in accounts receivable and accounts payable:</p>

<ul style="list-style-type:none">
	<li><strong>&rarr;</strong> Starting cash-basis pretax income: <strong>$180,000</strong></li>
	<li><strong>&rarr;</strong> Increase in accounts receivable: <strong>+$25,000</strong> (revenue earned but not received)</li>
	<li><strong>&rarr;</strong> Decrease in accounts payable: <strong>+$15,000</strong> (more cash paid than expenses incurred)</li>
</ul>
</div>

<div style="background-color:#f5f5f5; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Journal Entries</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin-top:10px; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:right">Debit</th>
			<th style="text-align:right">Credit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-bottom:1px solid #dddddd">Accounts Receivable</td>
			<td style="border-bottom:1px solid #dddddd; text-align:right">$25,000</td>
			<td style="border-bottom:1px solid #dddddd; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-bottom:1px solid #dddddd">Revenue</td>
			<td style="border-bottom:1px solid #dddddd; text-align:right">&nbsp;</td>
			<td style="border-bottom:1px solid #dddddd; text-align:right">$25,000</td>
		</tr>
		<tr>
			<td style="border-bottom:1px solid #dddddd">Expense</td>
			<td style="border-bottom:1px solid #dddddd; text-align:right">$15,000</td>
			<td style="border-bottom:1px solid #dddddd; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-bottom:1px solid #dddddd">Accounts Payable</td>
			<td style="border-bottom:1px solid #dddddd; text-align:right">&nbsp;</td>
			<td style="border-bottom:1px solid #dddddd; text-align:right">$15,000</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background-color:#f5f5f5; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Accrual Basis Calculation</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin-top:10px; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Item</th>
			<th style="text-align:right">Amount</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-bottom:1px solid #dddddd">Cash-basis pretax income</td>
			<td style="border-bottom:1px solid #dddddd; text-align:right">$180,000</td>
		</tr>
		<tr>
			<td style="border-bottom:1px solid #dddddd">Add: Increase in accounts receivable</td>
			<td style="border-bottom:1px solid #dddddd; text-align:right">$25,000</td>
		</tr>
		<tr>
			<td style="border-bottom:1px solid #dddddd">Add: Decrease in accounts payable</td>
			<td style="border-bottom:1px solid #dddddd; text-align:right">$15,000</td>
		</tr>
		<tr>
			<td>Accrual-basis pretax income</td>
			<td style="text-align:right">$220,000</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background-color:#f9f9f9; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Answer Options</h3>

<ul style="list-style-type:none">
	<li><span style="background-color:#ff6b6b; color:white">A</span>$180,000</li>
	<li><span style="background-color:#ff6b6b; color:white">B</span>$205,000</li>
	<li><span style="background-color:#68d3a7; color:white">C</span>$220,000 ✓</li>
	<li><span style="background-color:#ff6b6b; color:white">D</span>$240,000</li>
</ul>
</div>

<div style="background:linear-gradient(to right, #68d3a7, #207bb5); border-radius:8px; color:white; margin-top:20px; padding:15px">
<h3 style="margin-left:0; margin-right:0">Summary</h3>

<p>Atlas Co.&#39;s accrual-basis pretax income is <strong>$220,000</strong>, calculated by adjusting the cash-basis income of $180,000 for the $25,000 increase in accounts receivable and the $15,000 decrease in accounts payable.</p>
</div>
</div>`,
    },
    {
      id: "8",
      prompt: `River Corp. reported a cash‐basis pretax income of $750,000 for the current year. At December 31, its accounts receivable decreased by $50,000, accrued expenses increased by $20,000, and prepaid rent decreased by $15,000 compared to the previous year‐end. All three balance sheet changes relate solely to current‐year operating revenues and expenses. What is River Corp.'s accrual‐basis pretax income?`,
      choices: [
        `$665,000`,
        `$685,000`,
        `$705,000`,
        `$725,000`,
      ],
      correctIndex: 0,
      explanation: `<div style="border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; overflow:hidden">
<div style="background:linear-gradient(135deg, #01506e, #207bb5); border-top-left-radius:8px; border-top-right-radius:8px; color:white; padding:20px">
<h2 style="margin-left:0; margin-right:0">Converting Cash-Basis to Accrual-Basis Income</h2>
</div>

<div style="background-color:#f9f9f9; padding:20px">
<div style="background-color:#eaf6ff; border-left:5px solid #0099d4; border-radius:4px; margin-bottom:20px; padding:15px">
<h3>The Correct Answer is:</h3>

<p><span style="background-color:rgba(104, 211, 167, 0.1); color:#68d3a7">$665,000</span></p>
</div>

<h3>Explanation</h3>

<p>To convert from cash-basis to accrual-basis income, we need to adjust for changes in accounts that represent timing differences between when cash is received/paid and when revenue/expenses are recognized.</p>

<div style="background-color:#f0f7fa; border-radius:8px; border:1px solid #d1e6f3; margin-bottom:15px; margin-left:0; margin-right:0; margin-top:15px; padding:15px">
<h4>Analysis of Adjustments</h4>

<table cellspacing="0" style="border-collapse:collapse; margin:15px 0; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Adjustment Item</th>
			<th style="text-align:left">Change</th>
			<th style="text-align:left">Effect on Income</th>
			<th style="text-align:right">Amount</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px">Accounts Receivable</td>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px">Decreased by $50,000</td>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px">Decrease (less revenue was earned than collected)</td>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px; text-align:right">- $50,000</td>
		</tr>
		<tr>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px">Accrued Expenses</td>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px">Increased by $20,000</td>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px">Decrease (more expenses were incurred than paid)</td>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px; text-align:right">- $20,000</td>
		</tr>
		<tr>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px">Prepaid Rent</td>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px">Decreased by $15,000</td>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px">Decrease (more rent expense was recognized than paid)</td>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px; text-align:right">- $15,000</td>
		</tr>
	</tbody>
</table>
</div>

<h4>Calculation of Accrual-Basis Income</h4>

<div style="background-color:#f4f9f4; border-radius:8px; border:1px solid #68d3a7; margin-bottom:15px; margin-left:0; margin-right:0; margin-top:15px; padding:15px">
<p><strong>Cash-Basis Pretax Income:</strong> $750,000</p>

<p><strong>Adjustments:</strong></p>

<ul style="list-style-type:none">
	<li>&bull; Accounts Receivable Decrease: <span style="color:#d43939">- $50,000</span></li>
	<li>&bull; Accrued Expenses Increase: <span style="color:#d43939">- $20,000</span></li>
	<li>&bull; Prepaid Rent Decrease: <span style="color:#d43939">- $15,000</span></li>
</ul>

<p>Accrual-Basis Pretax Income: $665,000</p>
</div>

<h3>Journal Entries for the Adjustments</h3>

<div style="background-color:#f0f7fa; border-radius:8px; border:1px solid #d1e6f3; margin-bottom:15px; margin-left:0; margin-right:0; margin-top:15px; padding:15px">
<p><strong>1. For the Decrease in Accounts Receivable:</strong></p>

<table cellspacing="0" style="border-collapse:collapse; margin-bottom:15px; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:right">Debit</th>
			<th style="text-align:right">Credit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px">Revenue</td>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px; text-align:right">$50,000</td>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px">Accounts Receivable</td>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px; text-align:right">$50,000</td>
		</tr>
	</tbody>
</table>

<p><strong>2. For the Increase in Accrued Expenses:</strong></p>

<table cellspacing="0" style="border-collapse:collapse; margin-bottom:15px; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:right">Debit</th>
			<th style="text-align:right">Credit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px">Expense</td>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px; text-align:right">$20,000</td>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px">Accrued Expenses</td>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px; text-align:right">$20,000</td>
		</tr>
	</tbody>
</table>

<p><strong>3. For the Decrease in Prepaid Rent:</strong></p>

<table cellspacing="0" style="border-collapse:collapse; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:right">Debit</th>
			<th style="text-align:right">Credit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px">Rent Expense</td>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px; text-align:right">$15,000</td>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px">Prepaid Rent</td>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
			<td style="border-color:#d1e6f3; border-style:solid; border-width:1px; text-align:right">$15,000</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background-color:#eef7f2; border-radius:8px; border:1px solid #68d3a7; margin-bottom:15px; margin-left:0; margin-right:0; margin-top:15px; padding:15px">
<h3>Summary</h3>

<p>Under the accrual basis of accounting, we recognize revenue when earned and expenses when incurred, regardless of when cash changes hands. In this case, River Corp. needed to adjust its cash-basis income for:</p>

<ul>
	<li>Fewer sales than collections (accounts receivable decrease)</li>
	<li>More expenses incurred than paid (accrued expenses increase)</li>
	<li>More rent expense recognized than paid (prepaid rent decrease)</li>
</ul>

<p>All three adjustments reduced the cash-basis income, resulting in an accrual-basis pretax income of <strong>$665,000</strong>.</p>
</div>
</div>
</div>`,
    },
    {
      id: "9",
      prompt: `Lunar Inc. reported a cash‐basis pretax income of $250,000 for Year X. At December 31, Year X, its accrued expenses decreased by $12,000 and its prepaid expenses increased by $8,000 compared to the previous year‐end. What is Lunar's accrual‐basis pretax income?`,
      choices: [
        `$250,000`,
        `$258,000`,
        `$270,000`,
        `$284,000`,
      ],
      correctIndex: 2,
      explanation: `<div style="font-family: 'Segoe UI', sans-serif; max-width: 800px; margin: 20px auto; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
<div style="background: linear-gradient(135deg, #01506e, #207bb5); color: white; padding: 20px; border-top-left-radius: 8px; border-top-right-radius: 8px;">
<h2 style="margin: 0; color: white;">Converting Cash-Basis to Accrual-Basis Income</h2>
</div>

<div style="padding: 20px; background-color: #f9f9f9;">
<div style="background-color: white; border-radius: 8px; padding: 15px; margin-bottom: 20px; border-left: 5px solid #68d3a7;">
<h3 style="color: #207bb5; margin-top: 0;">Answer</h3>
<p>$250,000 - <span style="color: red;">Incorrect</span></p>
<p>$258,000 - <span style="color: red;">Incorrect</span></p>
<p>$270,000 - <span style="color: #68d3a7; font-weight: bold;">Correct</span></p>
<p>$284,000 - <span style="color: red;">Incorrect</span></p>
</div>

<div style="background-color: white; border-radius: 8px; padding: 15px; margin-bottom: 20px; border-left: 5px solid #207bb5;">
<h3 style="color: #207bb5; margin-top: 0;">Explanation</h3>
<p>To convert cash-basis income to accrual-basis income, we need to account for timing differences between when cash is received/paid and when revenue/expenses are recognized.</p>

<div style="background-color: #f0f7fa; border-radius: 8px; padding: 15px; margin: 15px 0; border: 1px solid #0099d4;">
<h4 style="color: #01506e; margin-top: 0;">Key Adjustments:</h4>
<ul>
<li><strong>Accrued expenses decreased by $12,000</strong>: This means cash payments exceeded the expense recognized, increasing accrual income.</li>
<li><strong>Prepaid expenses increased by $8,000</strong>: This means cash was paid for future expenses, increasing accrual income.</li>
</ul>
</div>
</div>

<div style="background-color: white; border-radius: 8px; padding: 15px; margin-bottom: 20px; border-left: 5px solid #0099d4;">
<h3 style="color: #207bb5; margin-top: 0;">Journal Entries</h3>
<p>The following journal entries reflect the adjustments needed:</p>

<table style="width: 100%; border-collapse: collapse; margin: 15px 0; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<thead style="background-color: #4B556A; color: white;">
<tr>
<th style="padding: 12px; text-align: left;">Account</th>
<th style="padding: 12px; text-align: right;">Debit</th>
<th style="padding: 12px; text-align: right;">Credit</th>
</tr>
</thead>
<tbody>
<tr style="background-color: #f9f9f9;">
<td style="padding: 12px; border-bottom: 1px solid #eee;">Accrued Expenses</td>
<td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right;">$12,000</td>
<td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right;"></td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="padding: 12px; border-bottom: 1px solid #eee;">Expense</td>
<td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right;"></td>
<td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right;">$12,000</td>
</tr>
<tr style="background-color: #f0f0f0;">
<td style="padding: 12px; border-bottom: 1px solid #eee;">Prepaid Expenses</td>
<td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right;">$8,000</td>
<td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right;"></td>
</tr>
<tr style="background-color: #f0f0f0;">
<td style="padding: 12px; border-bottom: 1px solid #eee;">Cash</td>
<td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right;"></td>
<td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right;">$8,000</td>
</tr>
</tbody>
</table>

<p><strong>Effect on Income:</strong></p>
<ul>
<li>Decrease in accrued expenses: <strong>+$12,000</strong> to income</li>
<li>Increase in prepaid expenses: <strong>+$8,000</strong> to income</li>
</ul>
</div>

<div style="background-color: white; border-radius: 8px; padding: 15px; margin-bottom: 20px; border-left: 5px solid #68d3a7;">
<h3 style="color: #207bb5; margin-top: 0;">Calculation</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<thead style="background-color: #4B556A; color: white;">
<tr>
<th style="padding: 12px; text-align: left;">Item</th>
<th style="padding: 12px; text-align: right;">Amount</th>
</tr>
</thead>
<tbody>
<tr style="background-color: #f9f9f9;">
<td style="padding: 12px; border-bottom: 1px solid #eee;">Cash-Basis Pretax Income</td>
<td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right;">$250,000</td>
</tr>
<tr style="background-color: #f0f0f0;">
<td style="padding: 12px; border-bottom: 1px solid #eee;">Add: Decrease in Accrued Expenses</td>
<td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right;">$12,000</td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="padding: 12px; border-bottom: 1px solid #eee;">Add: Increase in Prepaid Expenses</td>
<td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right;">$8,000</td>
</tr>
<tr style="background-color: #e6f7ef; font-weight: bold;">
<td style="padding: 12px;">Accrual-Basis Pretax Income</td>
<td style="padding: 12px; text-align: right;">$270,000</td>
</tr>
</tbody>
</table>
</div>

<div style="background-color: white; border-radius: 8px; padding: 15px; border-left: 5px solid #01506e;">
<h3 style="color: #207bb5; margin-top: 0;">Summary</h3>
<p>To convert from cash-basis to accrual-basis income:</p>
<ul>
<li>When accrued expenses <strong>decrease</strong>, add the decrease to cash-basis income</li>
<li>When prepaid expenses <strong>increase</strong>, add the increase to cash-basis income</li>
</ul>
<p>In this case, the total adjustment is +$20,000, resulting in an accrual-basis pretax income of $270,000.</p>
</div>
</div>
</div>`,
    },
    {
      id: "10",
      prompt: `Solar Inc. reported an accrual‐basis pretax income of $500,000 for the current year. At December 31, its accounts receivable increased by $40,000, inventory increased by $25,000, and accrued expenses increased by $30,000 compared to the previous year‐end. What is Solar Inc.'s cash‐basis pretax income?`,
      choices: [
        `$435,000`,
        `$465,000`,
        `$500,000`,
        `$520,000`,
      ],
      correctIndex: 1,
      explanation: `<div style="font-family: 'Segoe UI', sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
<div style="background: linear-gradient(135deg, #01506e, #207bb5); color: white; padding: 15px; border-radius: 8px 8px 0 0; margin-bottom: 20px;">
<h2 style="margin: 0; color: white;">Converting Accrual-Basis Income to Cash-Basis Income</h2>
</div>

<div style="background-color: #f9f9f9; padding: 15px; border-left: 5px solid #68d3a7; margin-bottom: 20px; border-radius: 5px;">
<h3 style="color: #4B556A; margin-top: 0;">Answer: <span style="color: #68d3a7; font-weight: bold;">$465,000</span></h3>
</div>

<div style="margin-bottom: 20px;">
<h3 style="color: #207bb5; border-bottom: 2px solid #207bb5; padding-bottom: 5px;">Explanation</h3>
<p>To convert accrual-basis pretax income to cash-basis pretax income, we need to adjust for changes in working capital accounts that affect the timing difference between when transactions are recorded and when cash changes hands.</p>
</div>

<div style="margin-bottom: 20px;">
<h3 style="color: #207bb5; border-bottom: 2px solid #207bb5; padding-bottom: 5px;">Calculation</h3>
<div style="background-color: #f5f7fa; padding: 15px; border-radius: 5px;">
<p><strong>Starting Point:</strong> Accrual-basis pretax income = $500,000</p>
<p><strong>Adjustments:</strong></p>
<ul style="list-style-type: none; padding-left: 10px;">
<li style="margin-bottom: 8px;">➖ Increase in accounts receivable: <strong>$40,000</strong> (revenue recognized but not collected yet)</li>
<li style="margin-bottom: 8px;">➖ Increase in inventory: <strong>$25,000</strong> (cash paid for inventory not yet expensed)</li>
<li style="margin-bottom: 8px;">➕ Increase in accrued expenses: <strong>$30,000</strong> (expenses recognized but not paid yet)</li>
</ul>
<p><strong>Cash-basis pretax income</strong> = $500,000 - $40,000 - $25,000 + $30,000 = <strong>$465,000</strong></p>
</div>
</div>

<div style="margin-bottom: 20px;">
<h3 style="color: #207bb5; border-bottom: 2px solid #207bb5; padding-bottom: 5px;">Journal Entries Explanation</h3>
<p>The following journal entries help explain the adjustments needed to convert accrual-basis to cash-basis:</p>

<div style="margin-bottom: 15px;">
<h4 style="color: #0099d4; margin-bottom: 5px;">1. Accounts Receivable Increase ($40,000)</h4>
<table style="width: 100%; border-collapse: collapse; margin-bottom: 10px; border-radius: 5px; overflow: hidden; box-shadow: 0 2px 3px rgba(0,0,0,0.1);">
<thead style="background-color: #4B556A; color: white;">
<tr>
<th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Account</th>
<th style="padding: 10px; text-align: right; border: 1px solid #ddd;">Debit</th>
<th style="padding: 10px; text-align: right; border: 1px solid #ddd;">Credit</th>
</tr>
</thead>
<tbody>
<tr style="background-color: #f9f9f9;">
<td style="padding: 10px; border: 1px solid #ddd;">Accounts Receivable</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;">$40,000</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;"></td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Revenue</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;"></td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;">$40,000</td>
</tr>
</tbody>
</table>
<p><em>Effect: Reduces cash-basis income because this revenue hasn't been collected in cash yet</em></p>
</div>

<div style="margin-bottom: 15px;">
<h4 style="color: #0099d4; margin-bottom: 5px;">2. Inventory Increase ($25,000)</h4>
<table style="width: 100%; border-collapse: collapse; margin-bottom: 10px; border-radius: 5px; overflow: hidden; box-shadow: 0 2px 3px rgba(0,0,0,0.1);">
<thead style="background-color: #4B556A; color: white;">
<tr>
<th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Account</th>
<th style="padding: 10px; text-align: right; border: 1px solid #ddd;">Debit</th>
<th style="padding: 10px; text-align: right; border: 1px solid #ddd;">Credit</th>
</tr>
</thead>
<tbody>
<tr style="background-color: #f9f9f9;">
<td style="padding: 10px; border: 1px solid #ddd;">Inventory</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;">$25,000</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;"></td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Cash/Accounts Payable</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;"></td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;">$25,000</td>
</tr>
</tbody>
</table>
<p><em>Effect: Reduces cash-basis income because cash was paid for inventory that hasn't been sold yet</em></p>
</div>

<div style="margin-bottom: 15px;">
<h4 style="color: #0099d4; margin-bottom: 5px;">3. Accrued Expenses Increase ($30,000)</h4>
<table style="width: 100%; border-collapse: collapse; margin-bottom: 10px; border-radius: 5px; overflow: hidden; box-shadow: 0 2px 3px rgba(0,0,0,0.1);">
<thead style="background-color: #4B556A; color: white;">
<tr>
<th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Account</th>
<th style="padding: 10px; text-align: right; border: 1px solid #ddd;">Debit</th>
<th style="padding: 10px; text-align: right; border: 1px solid #ddd;">Credit</th>
</tr>
</thead>
<tbody>
<tr style="background-color: #f9f9f9;">
<td style="padding: 10px; border: 1px solid #ddd;">Expense</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;">$30,000</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;"></td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Accrued Expenses</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;"></td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;">$30,000</td>
</tr>
</tbody>
</table>
<p><em>Effect: Adds to cash-basis income because these expenses were recognized but not paid in cash</em></p>
</div>
</div>

<div style="background: linear-gradient(135deg, #68d3a7, #207bb5); padding: 15px; border-radius: 5px; margin-bottom: 20px;">
<h3 style="color: white; margin-top: 0;">Summary</h3>
<p style="color: white; margin-bottom: 0;">The cash-basis pretax income for Solar Inc. is <strong>$465,000</strong>. This represents the actual cash flow from operations before considering taxes, after adjusting for timing differences in accounts receivable, inventory, and accrued expenses.</p>
</div>

<div style="background-color: #f0f5f9; padding: 15px; border-radius: 5px; border-left: 5px solid #01506e;">
<h3 style="color: #01506e; margin-top: 0;">Key Concept</h3>
<p style="margin-bottom: 0;">When converting from accrual to cash basis:</p>
<ul>
<li>Increase in assets (like accounts receivable, inventory) = <strong>subtract</strong> from accrual income</li>
<li>Decrease in assets = <strong>add</strong> to accrual income</li>
<li>Increase in liabilities (like accrued expenses) = <strong>add</strong> to accrual income</li>
<li>Decrease in liabilities = <strong>subtract</strong> from accrual income</li>
</ul>
</div>
</div>`,
    },
  ],
};
