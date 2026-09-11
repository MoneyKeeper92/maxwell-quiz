import type { Quiz } from "./types";

export const aicpaFar2026Quiz: Quiz = {
  key: "aicpa-far-2026",
  title: "2026 Official AICPA FAR Questions",
  subtitle: "Released AICPA FAR multiple-choice questions",
  discipline: "far",
  course: "cpa",
  questions: [
    {
      id: "14093",
      prompt: `The fair value option can be applied only to`,
      choices: [
        `An entire instrument.`,
        `Specified risks of an instrument.`,
        `Investments in subsidiaries requiring consolidation.`,
        `Postemployment benefits.`,
      ],
      correctIndex: 0,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; padding:20px">
<div style="background:linear-gradient(to right, #01506e, #207bb5); border-radius:10px 10px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">Scope of the Fair Value Option</h2>
</div>

<div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Answer:</strong> <strong>Choice A</strong> is correct. The fair value option can be applied only to an entire instrument, not to specific risk components, consolidated subsidiaries, or postemployment benefits.</p>
</div>

<div style="margin-bottom:20px">
<h3>What is the Fair Value Option in Plain Terms</h3>

<p>Many financial instruments are normally reported at amortized cost or under some other historical-cost-based method. For example, a held-to-maturity bond sits on the books at amortized cost, and an equity method investment is adjusted for the investor&#39;s share of earnings rather than fair value.</p>

<p>The fair value option is essentially a switch that lets a company say, &quot;I would rather report this item at fair value with changes flowing through net income each period.&quot; Once the switch is flipped, the default accounting rules are overridden and the item is marked to fair value going forward. The election is made at specific eligibility dates (such as when the instrument is first acquired) and is generally irrevocable for that instrument.</p>

<p>Companies use this option to align the accounting with how they manage the asset or liability, to reduce earnings volatility caused by mismatched measurement bases, or simply because fair value provides more useful information for that particular instrument.</p>
</div>

<div style="margin-bottom:20px">
<h3>All-or-Nothing Rule</h3>

<p>When the fair value option is elected, it must be applied to the entire instrument. A company cannot pick and choose which risks within an instrument to mark to fair value. For example, on a bond:</p>

<div style="background-color:#ffebee; border-left:5px solid #f44336; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Not Allowed</h4>

<p style="margin-left:0; margin-right:0">&quot;We elect the fair value option for the interest rate risk component of our bond, but want to keep the credit risk component at amortized cost.&quot;</p>
</div>

<div style="background-color:#e8f5e9; border-left:5px solid #4caf50; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Allowed</h4>

<p style="margin-left:0; margin-right:0">&quot;We elect the fair value option for the entire bond, capturing all changes in fair value (including interest rate, credit, liquidity, and any other risks) in net income.&quot;</p>
</div>
</div>

<div style="margin-bottom:20px">
<h3>Items Eligible for the Fair Value Option</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Eligible Item</th>
			<th style="text-align:left">Default Accounting</th>
			<th style="text-align:left">With FVO Elected</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Recognized financial assets and liabilities (e.g., debt securities, loans, debt issued)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Amortized cost or AFS</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Fair value with changes through net income</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Equity method investments</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Equity method (share of investee earnings)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Fair value with changes through net income</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Firm commitments involving financial instruments</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Generally not recognized</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Recognized at fair value with changes through net income</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Written loan commitments</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Often not at fair value</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Fair value with changes through net income</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Host instruments in hybrid financial instruments</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Bifurcation required</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Fair value option avoids bifurcation</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Insurance contracts (certain types)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Specialized insurance accounting</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Fair value with changes through net income</td>
		</tr>
	</tbody>
</table>
</div>

<div style="margin-bottom:20px">
<h3>Items NOT Eligible for the Fair Value Option</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Excluded Item</th>
			<th style="text-align:left">Reason for Exclusion</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Investments in subsidiaries requiring consolidation</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Subsidiaries are consolidated, not measured separately at fair value.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Investments in variable interest entities that are consolidated</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Same logic as consolidated subsidiaries.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Pension and other postemployment benefit obligations</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Subject to specialized accounting under ASC 715.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Stock-based compensation arrangements</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Governed by ASC 718, not the fair value option framework.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Lease assets and lease liabilities</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Specialized lease accounting under ASC 842.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Deposit liabilities of depository institutions</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Specifically excluded by the standard.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Financial instruments classified in equity (e.g., common stock issued)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Equity components are not subject to fair value remeasurement.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Specific risk components within an instrument</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">All-or-nothing rule. The election applies to the entire instrument.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background-color:#fffde7; border-left:5px solid #e8980a; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Why Choose the Fair Value Option</h3>

<p style="margin-left:0; margin-right:0"><strong>Eliminate accounting mismatches:</strong> If a company holds a debt security at fair value (trading) but its related debt is at amortized cost, gains and losses on one side don&#39;t offset the other. Electing fair value on the debt brings both sides into alignment.</p>

<p style="margin-left:0; margin-right:0"><strong>Simplify hybrid instrument accounting:</strong> Some instruments contain embedded derivatives that would need to be bifurcated. Electing fair value on the entire instrument avoids that complexity.</p>

<p style="margin-left:0; margin-right:0"><strong>Reflect how the asset is managed:</strong> If management views an investment in fair value terms day-to-day, electing the fair value option lets the financial statements match that perspective.</p>
</div>

<div style="margin-bottom:20px">
<h3>Answer Analysis</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Option</th>
			<th style="text-align:left">Analysis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">A. An entire instrument</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Correct. The fair value option is an all-or-nothing election that applies to the entire instrument.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">B. Specified risks of an instrument</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. The election cannot be limited to a specific risk component such as interest rate or credit risk.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">C. Investments in subsidiaries requiring consolidation</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. Consolidated subsidiaries are explicitly excluded because they are reported through consolidation, not separate measurement.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">D. Postemployment benefits</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. Postemployment benefits are governed by their own specialized accounting under ASC 715 and are not eligible for the fair value option.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background:linear-gradient(to right, #68d3a7, #50b190); border-radius:8px; padding:15px">
<h3>Summary</h3>

<p>The fair value option is a switch that lets companies override the default accounting for an eligible item and instead measure it at fair value with changes flowing through net income. It must be applied to the entire instrument, not to selected risk components. The option is available for most recognized financial assets and liabilities, equity method investments, firm commitments involving financial instruments, and certain insurance contracts. It is not available for consolidated subsidiaries, pension and other postemployment benefits, leases, stock-based compensation, deposit liabilities, or items classified in equity.</p>
</div>
</div>`,
    },
    {
      id: "119050",
      prompt: `On January 31, year 2, before the year 1 financial statements were issued, Hiller Co. agreed to settle a class action lawsuit filed in year 1 over false advertising claims. No liability had been previously accrued. The settlement will result in the dismissal of all claims against Hiller in exchange for $12 million. How should Hiller report this material liability in its year 1 financial statements?`,
      choices: [
        `The liability should not be recorded or reported.`,
        `Record a liability and loss, and disclose in the notes.`,
        `Disclose in the notes, but not record a liability and loss.`,
        `Record a liability and loss, but not disclose in the notes.`,
      ],
      correctIndex: 1,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; padding:20px">
<div style="background:linear-gradient(to right, #01506e, #207bb5); border-radius:10px 10px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">Subsequent Event: Lawsuit Settlement</h2>
</div>

<div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Answer:</strong> <strong>Choice B</strong> is correct. Hiller should record the liability and loss in its Year 1 financial statements and disclose the settlement in the notes.</p>
</div>

<div style="margin-bottom:20px">
<h3>Two Frameworks Working Together</h3>

<p>This question sits at the intersection of two accounting topics: <strong>contingencies</strong> (ASC 450) and <strong>subsequent events</strong> (ASC 855). Both must be applied to reach the right answer.</p>

<p>The contingency framework determines whether a loss must be accrued. The subsequent events framework determines whether information that became known after the balance sheet date but before the financial statements were issued should be reflected in those statements.</p>
</div>

<div style="margin-bottom:20px">
<h3>Step 1: Subsequent Events Analysis</h3>

<p>Subsequent events fall into two categories:</p>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left; width:30%">Type</th>
			<th style="text-align:left">Definition</th>
			<th style="text-align:left">Treatment</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Recognized (Type I)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Provides additional evidence about conditions that existed at the balance sheet date</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Adjust the financial statements</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Nonrecognized (Type II)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Indicates conditions that arose after the balance sheet date</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Disclose only, do not adjust</td>
		</tr>
	</tbody>
</table>

<p>The lawsuit was filed in Year 1, meaning the underlying condition (the alleged false advertising) existed at the December 31, Year 1 balance sheet date. The January 31, Year 2 settlement provides additional evidence about how that pre-existing situation will resolve. This makes it a <strong>recognized subsequent event</strong>, requiring adjustment of the Year 1 financial statements.</p>
</div>

<div style="margin-bottom:20px">
<h3>Step 2: Contingency Analysis</h3>

<p>For loss contingencies, ASC 450 sets up a probability-based framework:</p>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left; width:25%">Probability</th>
			<th style="text-align:left">Estimable</th>
			<th style="text-align:left">Treatment</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Probable</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Yes</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Accrue (record liability and loss) and disclose</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Probable</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">No</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Disclose only</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Reasonably Possible</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">N/A</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Disclose only</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Remote</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">N/A</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">No accrual or disclosure required</td>
		</tr>
	</tbody>
</table>

<p>Once the settlement was reached on January 31, Year 2, the loss became both <strong>probable</strong> (the company actually agreed to pay) and <strong>reasonably estimable</strong> ($12 million is the exact amount). Both criteria for accrual are clearly met.</p>
</div>

<div style="margin-bottom:20px">
<h3>Putting Both Together</h3>

<p>The pre-existing condition (the lawsuit) plus the recognized subsequent event (the settlement that confirms the loss) means Hiller must do two things:</p>

<ol>
	<li>Record a $12 million liability and a $12 million loss in the Year 1 financial statements</li>
	<li>Disclose the settlement in the notes so users understand the nature of the settlement and when it occurred</li>
</ol>
</div>

<div style="margin-bottom:20px">
<h3>Year 1 Journal Entry</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:right">Debit</th>
			<th style="text-align:right">Credit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Loss from Lawsuit Settlement</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$12,000,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Liability for Lawsuit Settlement</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$12,000,000</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background-color:#fffde7; border-left:5px solid #e8980a; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Key Distinction: Disclosure is Required Even When Accruing</h3>

<p style="margin-left:0; margin-right:0">A common misconception is that disclosure is needed only when there is no accrual. In reality, when a material loss is accrued, disclosure is also required so that users understand the nature of the contingency, the amount accrued, and any remaining uncertainty. The accrual and the disclosure are complementary, not alternatives.</p>
</div>

<div style="margin-bottom:20px">
<h3>Walking Through Each Choice</h3>

<div style="background-color:#ffebee; border-left:5px solid #f44336; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Liability should not be recorded or reported</h4>

<p style="margin-left:0; margin-right:0">Wrong. Ignoring the settlement entirely would be misleading. The condition existed at the balance sheet date, and the settlement before issuance confirms the loss is both probable and estimable.</p>
</div>

<div style="background-color:#e8f5e9; border-left:5px solid #4caf50; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Record a liability and loss, and disclose in the notes (Correct)</h4>

<p style="margin-left:0; margin-right:0">Correct. The settlement is a recognized subsequent event tied to a pre-existing condition. The contingency criteria (probable and estimable) are met, requiring accrual. Disclosure is also required for material loss contingencies.</p>
</div>

<div style="background-color:#ffebee; border-left:5px solid #f44336; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Disclose in the notes, but not record a liability and loss</h4>

<p style="margin-left:0; margin-right:0">Wrong. Disclosure-only treatment is appropriate when a loss is reasonably possible but not probable, or when probable but not estimable. Here, both criteria for accrual are met, so disclosure alone is insufficient.</p>
</div>

<div style="background-color:#ffebee; border-left:5px solid #f44336; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Record a liability and loss, but not disclose in the notes</h4>

<p style="margin-left:0; margin-right:0">Wrong. Recording without disclosure would leave users without context to understand a material item. Disclosure is required alongside the accrual.</p>
</div>
</div>

<div style="margin-bottom:20px">
<h3>Answer Analysis</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Option</th>
			<th style="text-align:left">Analysis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">A</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. Ignoring the settlement would understate liabilities and overstate net income materially.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">B</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Correct. The settlement is a recognized subsequent event and the contingency is both probable and estimable. Accrual and disclosure are both required.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">C</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. Disclosure alone is for losses that are only reasonably possible or where the amount cannot be reliably estimated.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">D</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. Material loss contingencies that are accrued must also be disclosed in the notes.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background:linear-gradient(to right, #68d3a7, #50b190); border-radius:8px; padding:15px">
<h3>Summary</h3>

<p>Hiller should record a $12 million liability and loss in its Year 1 financial statements and disclose the settlement in the notes. The lawsuit was filed in Year 1, so the underlying condition existed at the balance sheet date. The January 31, Year 2 settlement provides additional evidence about that pre-existing condition before the financial statements were issued, making it a recognized subsequent event that requires adjustment. Once accrued, the contingency must also be disclosed because of its material nature.</p>
</div>
</div>`,
    },
    {
      id: "121051",
      prompt: `On September 30, year 2, Mead Corp. recognized an $80,000 gain from the disposal of a business segment. In addition, Mead estimated that it will pay annual employee bonuses totaling $48,000 for the full year ending December 31, year 2; the bonuses are earned ratably throughout the year based on current-year service. Mead's effective income tax rate is 35%. What is the effect of these two events on Mead's net income for the nine-month interim period ended September 30, year 2?`,
      choices: [
        `$15,600`,
        `$20,800`,
        `$28,600`,
        `$32,000`,
      ],
      correctIndex: 2,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; padding:20px">
<div style="background:linear-gradient(to right, #01506e, #207bb5); border-radius:10px 10px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">Interim Period Net Income Effect</h2>
</div>

<div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Answer:</strong> <strong>$28,600</strong> is the net effect on Mead&#39;s net income for the nine-month interim period.</p>
</div>

<div style="margin-bottom:20px">
<h3>The Core Principle of Interim Reporting</h3>

<p>Interim financial statements treat each interim period as an integral part of the annual reporting period rather than as a discrete standalone period. This drives two different treatments depending on the type of event:</p>

<div style="background-color:#f5f5f5; border-radius:8px; margin-bottom:15px; margin-left:0; margin-right:0; margin-top:15px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Discrete events</strong> (one-time, non-recurring): Recognized fully in the interim period in which they occur. No allocation across the year.</p>

<p style="margin-left:0; margin-right:0"><strong>Annual costs benefiting the full year</strong>: Allocated proportionally across interim periods so each period absorbs its share.</p>
</div>
</div>

<div style="margin-bottom:20px">
<h3>Step 1: Classify Each Event</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Event</th>
			<th style="text-align:left">Classification</th>
			<th style="text-align:left">Treatment</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$80,000 gain on disposal of business segment</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Discrete, non-recurring</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Recognize 100% in Q3 (when it occurred)</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$48,000 annual employee bonus</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Annual cost benefiting full year</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Allocate 9/12 to the interim period</td>
		</tr>
	</tbody>
</table>

<p>The disposal gain is a one-time event tied to a specific date (September 30). Annual bonuses are earned ratably as employees provide service throughout the year, so the portion attributable to services rendered through September 30 must be accrued.</p>
</div>

<div style="margin-bottom:20px">
<h3>Step 2: Calculate the Allocated Bonus Expense</h3>

<div style="background-color:#f5f5f5; border-radius:8px; margin-bottom:15px; margin-left:0; margin-right:0; margin-top:15px; padding:15px">
<p style="margin-left:0; margin-right:0">$48,000 &times; (9 months / 12 months) = $36,000</p>
</div>

<p>Nine months of bonus expense ($36,000) must be accrued through September 30 to match the cost against the service period that has elapsed.</p>
</div>

<div style="margin-bottom:20px">
<h3>Step 3: Combine and Apply Tax</h3>

<ul style="list-style-type:none">
	<li><strong>Gain on disposal:</strong> <span style="color:#0099d4">$80,000</span></li>
	<li><strong>Less: Bonus expense (9/12 &times; $48,000):</strong> <span style="color:#0099d4">($36,000)</span></li>
	<li><strong>Pre-tax effect:</strong> <span style="color:#0099d4">$44,000</span></li>
	<li><strong>Less: Tax expense ($44,000 &times; 35%):</strong> <span style="color:#0099d4">($15,400)</span></li>
	<li>Net effect on net income: <span style="color:#68d3a7">$28,600</span></li>
</ul>
</div>

<div style="background-color:#fffde7; border-left:5px solid #e8980a; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Key Distinction: Discrete vs. Allocated Events</h3>

<p style="margin-left:0; margin-right:0">Major, non-recurring events are recognized fully in the period they occur. These include:</p>

<ul style="margin-left:0; margin-right:0">
	<li>Gains and losses on disposals</li>
	<li>Casualty losses</li>
	<li>Fixed asset impairments</li>
	<li>Goodwill impairments</li>
	<li>Permanent inventory impairments</li>
</ul>

<p style="margin-left:0; margin-right:0">Costs that benefit the entire year, such as annual bonuses, property taxes, major repairs, and advertising tied to multiple periods, are allocated across interim periods on a rational basis.</p>
</div>

<div style="margin-bottom:20px">
<h3>Answer Analysis</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Option</th>
			<th style="text-align:left">Analysis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$15,600</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This is the after-tax effect if you incorrectly allocate the gain across 9 of 12 months: ($80,000 &times; 9/12 - $36,000) &times; 65% = $15,600. Disposal gains are not allocated.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$20,800</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This results from recognizing the full $48,000 bonus in the interim period rather than only the 9-month portion: ($80,000 - $48,000) &times; 65% = $20,800.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$28,600</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Correct. Recognize the full $80,000 gain (discrete event) and accrue 9/12 of the $48,000 bonus, then apply the 35% tax rate: ($80,000 - $36,000) &times; 65% = $28,600.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$32,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This is the pre-tax amount when no bonus is accrued at all: $80,000 - $48,000 = $32,000. It also ignores the tax effect entirely.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background:linear-gradient(to right, #68d3a7, #50b190); border-radius:8px; padding:15px">
<h3>Summary</h3>

<p>Mead&#39;s net income for the nine-month interim period is increased by $28,600. The $80,000 disposal gain is a discrete event recognized in full when it occurred, while the $48,000 annual bonus is allocated proportionally so that nine months of expense ($36,000) is matched against the service period through September 30. After applying the 35% effective tax rate to the $44,000 pre-tax amount, the net effect on net income is $28,600.</p>
</div>
</div>`,
    },
    {
      id: "113050",
      prompt: `ALR Co. began the year with $12,000 in cash and had the following activities during the year:

	Depreciation expense: $20,000

	Proceeds from sale of plant assets: $50,000

	Gain on sale of plant assets: $5,300

	Purchase of equipment: $75,000

	Net increase in accounts receivable: $11,000

	Decrease in accounts payable: $5,500

	Decrease in inventory: $6,400

	Net income: $325,000

	Payment of cash dividend: $62,700

	Issuance of common stock: $42,600

What amount would be ALR's cash flow from financing activities for the year?`,
      choices: [
        `($25,000)`,
        `($20,100)`,
        `($13,000)`,
        `$4,600`,
      ],
      correctIndex: 1,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; padding:20px">
<div style="background:linear-gradient(to right, #01506e, #207bb5); border-radius:10px 10px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">ALR Co. Cash Flow from Financing Activities</h2>
</div>

<div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Answer:</strong> <strong>($20,100)</strong> is the cash outflow from financing activities for the year.</p>
</div>

<div style="margin-bottom:20px">
<h3>Strategy: Sort Each Item Into the Right Bucket</h3>

<p>The cash flow statement has three sections, each capturing a different type of activity:</p>

<ul>
	<li><strong>Operating:</strong> Day-to-day activities, including changes in current operating assets and liabilities</li>
	<li><strong>Investing:</strong> Buying and selling long-term assets</li>
	<li><strong>Financing:</strong> Raising and returning capital from owners and creditors</li>
</ul>

<p>The question asks specifically about financing, but building the entire statement reinforces how each item flows through the right section.</p>
</div>

<div style="margin-bottom:20px">
<h3>Classifying Every Item</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Item</th>
			<th style="text-align:right">Amount</th>
			<th style="text-align:left">Section / Treatment</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Net income</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$325,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Operating (starting point)</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Depreciation expense</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$20,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Operating (add back, non-cash)</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Gain on sale of plant assets</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$5,300</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Operating (subtract, reclassify to investing)</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Increase in accounts receivable</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$11,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Operating (decrease)</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Decrease in accounts payable</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$5,500</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Operating (decrease)</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Decrease in inventory</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$6,400</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Operating (increase)</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Proceeds from sale of plant assets</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$50,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Investing (inflow)</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Purchase of equipment</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$75,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Investing (outflow)</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Issuance of common stock</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$42,600</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Financing (inflow)</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Payment of cash dividend</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$62,700</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Financing (outflow)</td>
		</tr>
	</tbody>
</table>
</div>

<div style="margin-bottom:20px">
<h3>Underlying Sale of Plant Assets Entry</h3>

<p>The $50,000 in proceeds and $5,300 gain both come from one transaction. Visualizing the journal entry helps explain why the gain is removed from operating and the full proceeds appear in investing:</p>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:right">Debit</th>
			<th style="text-align:right">Credit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Cash</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$50,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Plant Assets, net (book value)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$44,700</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Gain on Sale</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$5,300</td>
		</tr>
	</tbody>
</table>

<p style="margin-left:0; margin-right:0"><em>The gain inflated net income by $5,300 but is not a true operating activity. It must be subtracted from operating so the entire $50,000 cash inflow can be reported once in investing, where it belongs.</em></p>
</div>

<div style="margin-bottom:20px">
<h3>Complete Cash Flow Statement</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Description</th>
			<th style="text-align:right">Amount</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td colspan="2" style="border-color:#1a6499; border-style:solid; border-width:1px">Operating Activities</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Net income</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$325,000</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Add: Depreciation expense</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$20,000</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Less: Gain on sale of plant assets</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">($5,300)</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Less: Increase in accounts receivable</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">($11,000)</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Less: Decrease in accounts payable</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">($5,500)</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Add: Decrease in inventory</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$6,400</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Net Cash from Operating Activities</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$329,600</td>
		</tr>
		<tr>
			<td colspan="2" style="background-color:white; border-style:none">&nbsp;</td>
		</tr>
		<tr>
			<td colspan="2" style="border-color:#b87808; border-style:solid; border-width:1px">Investing Activities</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Proceeds from sale of plant assets</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$50,000</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Purchase of equipment</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">($75,000)</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Net Cash from Investing Activities</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">($25,000)</td>
		</tr>
		<tr>
			<td colspan="2" style="background-color:white; border-style:none">&nbsp;</td>
		</tr>
		<tr>
			<td colspan="2" style="border-color:#4ba886; border-style:solid; border-width:1px">Financing Activities</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Issuance of common stock</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$42,600</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Payment of cash dividend</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">($62,700)</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Net Cash from Financing Activities</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">($20,100)</td>
		</tr>
		<tr>
			<td colspan="2" style="background-color:white; border-style:none">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Net Change in Cash</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$284,500</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background-color:#fffde7; border-left:5px solid #e8980a; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Quick Rule for Financing Section</h3>

<p style="margin-left:0; margin-right:0">Financing activities capture cash exchanges with the company&#39;s owners (issuing or repurchasing stock, paying dividends) and long-term creditors (issuing or repaying debt). Anything that changes the right side of the balance sheet related to long-term capital sources flows through this section.</p>
</div>

<div style="margin-bottom:20px">
<h3>Answer Analysis</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Option</th>
			<th style="text-align:left">Analysis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">($25,000)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This is the net cash used in investing activities ($50,000 - $75,000), not financing.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">($20,100)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Correct. Stock issuance of $42,600 less dividends paid of $62,700 produces a net financing outflow of $20,100.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">($13,000)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This figure does not match any logical combination of the financing items provided.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$4,600</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This results from incorrectly subtracting issuance from a different number, or treating dividends as a financing inflow.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background:linear-gradient(to right, #68d3a7, #50b190); border-radius:8px; padding:15px">
<h3>Summary</h3>

<p>Cash flow from financing activities is ($20,100), driven by the $42,600 inflow from issuing common stock partially offsetting the $62,700 outflow for dividends paid. Building the full statement reinforces the bigger picture: depreciation gets added back as a non-cash expense, the gain on sale is removed from operating so the full $50,000 of proceeds shows up in investing, and changes in working capital accounts (AR, AP, inventory) adjust operating cash flow based on whether they consumed or freed up cash.</p>
</div>
</div>`,
    },
    {
      id: "121050",
      prompt: `Pursuant to the Securities Exchange Act of 1934, which of the following statements is correct regarding registrant filing requirements with the U.S. Securities and Exchange Commission?`,
      choices: [
        `A Form 10-K is filed annually, a Form 10-Q is filed quarterly, and a Form 8-K is filed monthly.`,
        `A company's independent accountants must audit and provide a report on Forms 10-K, 10-Q, and 8-K.`,
        `Accelerated filers have shorter timeframes and faster deadlines than other filers for filing Forms 10-K, 10-Q, and 8-K.`,
        `Forms 10-K, 10-Q, and 8-K contain information about a registrant's business operations and material business developments.`,
      ],
      correctIndex: 3,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; padding:20px">
<div style="background:linear-gradient(to right, #01506e, #207bb5); border-radius:10px 10px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">SEC Filing Requirements: 10-K, 10-Q, and 8-K</h2>
</div>

<div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Answer:</strong> <strong>Choice 4</strong> is correct. Forms 10-K, 10-Q, and 8-K all contain information about a registrant&#39;s business operations and material business developments.</p>
</div>

<div style="margin-bottom:20px">
<h3>The Three Core Filings Under the 1934 Act</h3>

<p>The Securities Exchange Act of 1934 governs the ongoing reporting obligations of public companies after they have gone public. Three filings carry most of the load: an annual report, a quarterly report, and a current report for material events as they happen.</p>
</div>

<div style="margin-bottom:20px">
<h3>Comparing the Three Forms</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left; width:18%">Feature</th>
			<th style="text-align:left">Form 10-K</th>
			<th style="text-align:left">Form 10-Q</th>
			<th style="text-align:left">Form 8-K</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Frequency</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Annually</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Quarterly (first three quarters)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">As needed when material events occur</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Auditor Involvement</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Audited financial statements</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Reviewed (not audited)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">No auditor involvement required</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Typical Content</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Comprehensive annual review of business, risk factors, MD&amp;A, and full audited financials</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Condensed quarterly financial statements and updated MD&amp;A</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Material events such as acquisitions, executive changes, bankruptcies, and major contracts</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Standard Deadline</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">60 to 90 days after fiscal year end (depends on filer status)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">40 to 45 days after quarter end (depends on filer status)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Generally within 4 business days of the triggering event</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background-color:#f0f7fa; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>What Choice 4 Captures</h3>

<p style="margin-left:0; margin-right:0">The common thread across all three forms is that each provides information about the registrant&#39;s business operations and material developments. The 10-K covers an entire fiscal year, the 10-Q updates investors on quarterly performance, and the 8-K alerts the market to specific material events as they occur. Different time horizons, but each delivers business and material development information to investors and the SEC.</p>
</div>

<div style="margin-bottom:20px">
<h3>Filer Categories and Deadlines</h3>

<p>Filing deadlines for the 10-K and 10-Q vary by filer category. The SEC categorizes registrants based on the public float of their equity:</p>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Filer Category</th>
			<th style="text-align:left">10-K Deadline</th>
			<th style="text-align:left">10-Q Deadline</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Large Accelerated Filer ($700M+ public float)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">60 days</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">40 days</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Accelerated Filer ($75M to $700M public float)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">75 days</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">40 days</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Non-Accelerated Filer (under $75M public float)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">90 days</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">45 days</td>
		</tr>
	</tbody>
</table>

<p>Form 8-K does not have different deadlines based on filer category. All filers must report material events within roughly 4 business days regardless of size.</p>
</div>

<div style="margin-bottom:20px">
<h3>Answer Analysis</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Option</th>
			<th style="text-align:left">Analysis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Choice 1</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. The 10-K and 10-Q descriptions are right, but Form 8-K is not filed on a monthly schedule. It is filed within roughly 4 business days of a material triggering event.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Choice 2</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. Independent accountants audit the 10-K, but they only review the 10-Q. The 8-K is not subject to an audit or review requirement.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Choice 3</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. Accelerated filers do have faster deadlines than non-accelerated filers, but only for the 10-K and 10-Q. The 8-K deadline does not differ by filer status, so the statement is too broad.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Choice 4</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Correct. All three forms communicate information about the registrant&#39;s business operations and material business developments, just at different intervals and levels of detail.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background:linear-gradient(to right, #68d3a7, #50b190); border-radius:8px; padding:15px">
<h3>Summary</h3>

<p>The correct answer is Choice 4. The 10-K, 10-Q, and 8-K each communicate business operations and material developments to investors and the SEC, even though they differ in frequency, level of audit involvement, and deadline. The 10-K is annual and audited, the 10-Q is quarterly and reviewed, and the 8-K is event-driven and filed within 4 business days of a triggering event.</p>
</div>
</div>`,
    },
    {
      id: "126050",
      prompt: `A corporation historically has had a gross profit margin of 80%. In the current period, the gross profit margin decreased to 75%. Which of the following is the most likely cause of this decrease?`,
      choices: [
        `Sales decreased by 25%.`,
        `Sales returns increased by 25%.`,
        `Cost of goods sold increased by 25%.`,
        `Sales commissions increased by 25%.`,
      ],
      correctIndex: 2,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; padding:20px">
<div style="background:linear-gradient(to right, #01506e, #207bb5); border-radius:10px 10px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">Cause of Gross Profit Margin Decrease</h2>
</div>

<div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Answer:</strong> <strong>Cost of goods sold increased by 25%</strong> is the most likely cause of the gross profit margin dropping from 80% to 75%.</p>
</div>

<div style="margin-bottom:20px">
<h3>Strategy: Plug in Real Numbers</h3>

<p>Percentage-only questions are easier to solve when you assign concrete dollar amounts. Pick a clean baseline that produces the historical 80% margin, then test each answer choice by adjusting one variable at a time and recalculating the margin.</p>

<div style="background-color:#f5f5f5; border-radius:8px; margin-bottom:15px; margin-left:0; margin-right:0; margin-top:15px; padding:15px">
<p style="margin-left:0; margin-right:0">Gross Profit Margin = (Sales - COGS) / Sales</p>
</div>
</div>

<div style="margin-bottom:20px">
<h3>Baseline (Historical 80% Margin)</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Line Item</th>
			<th style="text-align:right">Amount</th>
			<th style="text-align:right">% of Sales</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Sales</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$100</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">100%</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">COGS</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">($20)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">20%</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Gross Profit</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$80</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">80%</td>
		</tr>
	</tbody>
</table>
</div>

<div style="margin-bottom:20px">
<h3>Scenario A: Sales Decreased by 25%</h3>

<p>If sales drop by 25% to $75, COGS would also drop proportionally because fewer units are being sold. With a 25% decline in volume, COGS falls from $20 to $15 (also a 25% reduction).</p>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Line Item</th>
			<th style="text-align:right">Amount</th>
			<th style="text-align:right">% of Sales</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Sales</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$75</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">100%</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">COGS</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">($15)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">20%</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Gross Profit</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$60</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">80%</td>
		</tr>
	</tbody>
</table>

<p><strong>Result:</strong> Margin stays at 80%. Volume changes affect both sales and COGS proportionally, so the margin holds steady.</p>
</div>

<div style="margin-bottom:20px">
<h3>Scenario B: Sales Returns Increased by 25%</h3>

<p>Returns reduce both sales and COGS at the same rate. When a customer returns merchandise, both the revenue and the cost of that merchandise come off the books. Assume returns of $25 means $25 less in sales and $5 less in COGS (proportional to the historical 20% COGS rate).</p>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Line Item</th>
			<th style="text-align:right">Amount</th>
			<th style="text-align:right">% of Sales</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Sales (net of returns)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$75</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">100%</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">COGS</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">($15)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">20%</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Gross Profit</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$60</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">80%</td>
		</tr>
	</tbody>
</table>

<p><strong>Result:</strong> Margin stays at 80%. Sales returns reverse both sides of the original transaction, so the relationship between sales and COGS does not change.</p>
</div>

<div style="margin-bottom:20px">
<h3>Scenario C: COGS Increased by 25%</h3>

<p>Now isolate COGS while keeping sales constant at $100. A 25% increase in COGS means rising from $20 to $25 (a $5 increase, or 25% of the original $20).</p>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Line Item</th>
			<th style="text-align:right">Amount</th>
			<th style="text-align:right">% of Sales</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Sales</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$100</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">100%</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">COGS</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">($25)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">25%</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Gross Profit</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$75</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">75%</td>
		</tr>
	</tbody>
</table>

<p><strong>Result:</strong> Margin drops to exactly 75%. This matches the scenario described in the question. When COGS rises faster than sales, gross profit absorbs the entire hit.</p>
</div>

<div style="margin-bottom:20px">
<h3>Scenario D: Sales Commissions Increased by 25%</h3>

<p>Sales commissions are part of selling expenses (often classified as G&amp;A or operating expenses), which sit <strong>below</strong> the gross profit line. They affect operating income and net income, but they have no impact on the gross profit margin calculation.</p>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Line Item</th>
			<th style="text-align:right">Amount</th>
			<th style="text-align:right">% of Sales</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Sales</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$100</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">100%</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">COGS</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">($20)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">20%</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Gross Profit (unchanged)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$80</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">80%</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Sales Commissions (selling expense)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">Below gross profit line</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">N/A</td>
		</tr>
	</tbody>
</table>

<p><strong>Result:</strong> Margin stays at 80%. Commissions live below gross profit, so they cannot move the gross profit margin.</p>
</div>

<div style="background-color:#fffde7; border-left:5px solid #e8980a; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Income Statement Layout Reminder</h3>

<p style="margin-left:0; margin-right:0">Gross profit is calculated using only sales and COGS. Anything above the gross profit line (sales, returns, COGS) can move the margin. Anything below (selling expenses, G&amp;A, interest, taxes) cannot. When evaluating gross margin questions, mentally draw a line and ignore everything underneath it.</p>
</div>

<div style="margin-bottom:20px">
<h3>Answer Analysis</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Option</th>
			<th style="text-align:left">Analysis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Sales decreased by 25%</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. A volume drop reduces sales and COGS proportionally, leaving the margin at 80%.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Sales returns increased by 25%</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. Returns reverse both revenue and the cost of those returned goods, keeping the relationship between sales and COGS intact.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Cost of goods sold increased by 25%</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Correct. With sales constant at $100 and COGS climbing from $20 to $25, gross profit drops to $75 and the margin lands at exactly 75%.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Sales commissions increased by 25%</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. Commissions are an operating expense below the gross profit line and have no impact on gross profit margin.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background:linear-gradient(to right, #68d3a7, #50b190); border-radius:8px; padding:15px">
<h3>Summary</h3>

<p>Cost of goods sold increasing by 25% is the only scenario that produces exactly the 5-point margin decrease described in the question. Plugging in concrete numbers ($100 sales, $20 COGS as a baseline) makes the comparison straightforward. Volume changes and returns affect sales and COGS together, so they cannot move the margin. Commissions sit below the gross profit line and never enter the calculation. Only an isolated increase in COGS pulls the margin down from 80% to 75%.</p>
</div>
</div>`,
    },
    {
      id: "11050",
      prompt: `A company performed a reconciliation of its cash balance shown in its bank statement to the cash balance recorded in the general ledger. Which of the following items could cause the bank statement balance to be higher than the general ledger balance?`,
      choices: [
        `A deposit in transit.`,
        `An outstanding check.`,
        `An unrecorded bank fee.`,
        `A scheduled bank loan payment.`,
      ],
      correctIndex: 1,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; padding:20px">
<div style="background:linear-gradient(to right, #01506e, #207bb5); border-radius:10px 10px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">Bank Reconciliation: Cause of a Higher Bank Balance</h2>
</div>

<div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Answer:</strong> <strong>An outstanding check</strong> is the item that would cause the bank statement balance to be higher than the general ledger balance.</p>
</div>

<div style="margin-bottom:20px">
<h3>The Reconciliation Framework</h3>

<p>A bank reconciliation compares two records of the same cash account: the bank&#39;s records (the bank statement) and the company&#39;s records (the general ledger). The two balances rarely match because of timing differences and items recorded by one party but not yet by the other. The goal is to identify which adjustments belong on each side.</p>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Reconciling Item</th>
			<th style="text-align:left">Adjustment Side</th>
			<th style="text-align:left">Effect</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Deposit in transit</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Bank side</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Add to bank balance</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Outstanding check</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Bank side</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Subtract from bank balance</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Unrecorded bank fee</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Book side</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Subtract from book balance</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Scheduled bank loan payment</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Book side</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Subtract from book balance (if not yet recorded)</td>
		</tr>
	</tbody>
</table>
</div>

<div style="margin-bottom:20px">
<h3>Why an Outstanding Check Causes the Bank Balance to be Higher</h3>

<p>An outstanding check is one the company has written and recorded (cash credited in the general ledger), but the recipient has not yet cashed it at the bank. The company has already reduced its book balance, but the bank has not yet seen the check come through.</p>

<p>The result: the bank statement still shows the cash, while the books have already removed it. The bank balance is therefore higher than the book balance.</p>

<div style="background-color:#f5f5f5; border-radius:8px; margin-bottom:15px; margin-left:0; margin-right:0; margin-top:15px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Quick Example:</strong></p>

<ul style="margin-left:0; margin-right:0">
	<li>Company has $10,000 in cash on the books and at the bank</li>
	<li>Company writes a $1,000 check on June 28, recording cash at $9,000</li>
	<li>Recipient does not deposit the check until July 3</li>
	<li>On June 30, the bank statement shows $10,000 but the books show $9,000</li>
	<li>Bank balance is $1,000 higher than book balance</li>
</ul>
</div>
</div>

<div style="margin-bottom:20px">
<h3>Working Through Each Choice</h3>

<div style="background-color:#ffebee; border-left:5px solid #f44336; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Deposit in Transit</h4>

<p style="margin-left:0; margin-right:0">A deposit in transit is cash the company has received and recorded, but the bank has not yet processed. The book balance is higher than the bank balance, the opposite of what the question asks. This adjusts the bank side upward to reach the true cash balance.</p>
</div>

<div style="background-color:#e8f5e9; border-left:5px solid #4caf50; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Outstanding Check (Correct)</h4>

<p style="margin-left:0; margin-right:0">The company already removed the cash from the books when the check was written, but the bank still shows the cash because the check has not cleared. The bank balance is higher than the book balance until the check clears.</p>
</div>

<div style="background-color:#ffebee; border-left:5px solid #f44336; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Unrecorded Bank Fee</h4>

<p style="margin-left:0; margin-right:0">The bank has already deducted the fee from the bank balance, but the company has not yet recorded the expense. The book balance is higher than the bank balance, again the opposite of what the question is asking. This adjusts the book side downward.</p>
</div>

<div style="background-color:#ffebee; border-left:5px solid #f44336; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Scheduled Bank Loan Payment</h4>

<p style="margin-left:0; margin-right:0">If the bank has automatically withdrawn the loan payment but the company has not yet recorded it, the bank has already reduced its balance while the books have not. Just like an unrecorded fee, the book balance is higher than the bank balance, which is the opposite of what the question is asking.</p>
</div>
</div>

<div style="background-color:#fffde7; border-left:5px solid #e8980a; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Quick Mental Test</h3>

<p style="margin-left:0; margin-right:0">Ask yourself, &quot;Who recorded the transaction first, the company or the bank?&quot; Whichever party recorded it first has the lower balance. If the company recorded a check before the bank cleared it, the company is &quot;ahead&quot; in reducing cash, so the bank balance is higher. If the bank deducted a fee before the company recorded it, the bank is ahead, so the book balance is higher.</p>
</div>

<div style="margin-bottom:20px">
<h3>Answer Analysis</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Option</th>
			<th style="text-align:left">Analysis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">A deposit in transit</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. Causes the book balance to exceed the bank balance, not the reverse.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">An outstanding check</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Correct. The company has reduced its books, but the bank has not yet seen the check clear, so the bank balance remains higher.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">An unrecorded bank fee</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. The bank has already deducted the fee, so the book balance is higher than the bank balance.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">A scheduled bank loan payment</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. If processed by the bank but not yet recorded by the company, the book balance is higher than the bank balance.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background:linear-gradient(to right, #68d3a7, #50b190); border-radius:8px; padding:15px">
<h3>Summary</h3>

<p>An outstanding check is the only choice that causes the bank balance to be higher than the general ledger balance. The company recorded the check first, reducing its book balance, while the bank still shows the original amount until the recipient cashes it. Deposits in transit, unrecorded bank fees, and scheduled loan payments all create the opposite situation, where the book balance exceeds the bank balance.</p>
</div>
</div>`,
    },
    {
      id: "16050",
      prompt: `Jahn Co. is sponsoring a management retreat on July 15. Jahn was required to pay $5,000 when the contract is signed on June 15. Jahn will be invoiced for the remaining $15,000 balance of the contract on August 15. Payment in full is due on September 15. What amount should Jahn recognize as an expense in the third quarter of the year?`,
      choices: [
        `$5,000`,
        `$10,000`,
        `$15,000`,
        `$20,000`,
      ],
      correctIndex: 3,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; padding:20px">
<div style="background:linear-gradient(to right, #01506e, #207bb5); border-radius:10px 10px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">Expense Recognition for Management Retreat</h2>
</div>

<div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Answer:</strong> <strong>$20,000</strong> should be recognized as an expense in the third quarter.</p>
</div>

<div style="margin-bottom:20px">
<h3>The Core Principle: Expense When Incurred, Not When Paid</h3>

<p>Under accrual accounting, expenses are recognized when they are <strong>incurred</strong>, meaning when the underlying service has been delivered or the benefit has been consumed. The timing of cash payments is irrelevant to expense recognition. Cash can move before, during, or after the expense is incurred, and none of those timing differences affect the period in which the expense lands.</p>

<p>The retreat takes place on July 15, which falls in the third quarter (July through September). All $20,000 of the expense was incurred on that single day. The full amount belongs in Q3 regardless of when the cash was paid.</p>
</div>

<div style="margin-bottom:20px">
<h3>Walking Through the Three Dates</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Date</th>
			<th style="text-align:left">Quarter</th>
			<th style="text-align:left">Event</th>
			<th style="text-align:left">Treatment</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">June 15</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Q2</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Pay $5,000 deposit</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Record as prepaid expense (asset)</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">July 15</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Q3</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Retreat takes place</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Recognize full $20,000 expense</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">August 15</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Q3</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Receive $15,000 invoice</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Already accrued at the retreat date</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">September 15</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Q3</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Pay $15,000 balance</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Settle the payable; no expense impact</td>
		</tr>
	</tbody>
</table>
</div>

<div style="margin-bottom:20px">
<h3>Journal Entries</h3>

<h4>June 15: Pay the Deposit</h4>

<p>Cash leaves the books, but no service has been received yet. The $5,000 sits in prepaid expenses (an asset) waiting for the service to be delivered.</p>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:right">Debit</th>
			<th style="text-align:right">Credit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Prepaid Expense</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$5,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Cash</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$5,000</td>
		</tr>
	</tbody>
</table>

<h4>July 15: Recognize the Full Expense</h4>

<p>The retreat happens, so the full $20,000 expense is recognized. The prepaid expense is cleared out, and the remaining $15,000 is accrued as a payable since the invoice has not yet been received.</p>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:right">Debit</th>
			<th style="text-align:right">Credit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Retreat Expense</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$20,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Prepaid Expense</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$5,000</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Accounts Payable</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$15,000</td>
		</tr>
	</tbody>
</table>

<h4>September 15: Pay the Remaining Balance</h4>

<p>Cash leaves the books to settle the payable. No expense is recorded because the expense was already recognized on July 15 when the retreat actually took place.</p>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:right">Debit</th>
			<th style="text-align:right">Credit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Accounts Payable</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$15,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Cash</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$15,000</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background-color:#fffde7; border-left:5px solid #e8980a; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Cash Timing is Irrelevant</h3>

<p style="margin-left:0; margin-right:0">The expense recognition rule is simple: book the expense when the service is delivered or the benefit is consumed. Cash payment dates affect the cash flow statement and the balance sheet (through prepaid expenses or accounts payable), but they do not move the timing of expense recognition. Even if Jahn had paid 100% of the contract on day one or never paid until next year, the entire $20,000 still hits the income statement in Q3.</p>
</div>

<div style="margin-bottom:20px">
<h3>Answer Analysis</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Option</th>
			<th style="text-align:left">Analysis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$5,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This is just the deposit paid in Q2. Treating only the deposit as the Q3 expense ignores both the accrual principle and the additional $15,000 incurred at the retreat.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$10,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This number does not match any logical combination of the contract amounts.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$15,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This is the remaining balance owed after the deposit, not the total expense for the retreat. The full $20,000 service is delivered in Q3.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$20,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Correct. The retreat occurred in Q3, so the entire contract value is recognized as an expense in that quarter regardless of payment timing.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background:linear-gradient(to right, #68d3a7, #50b190); border-radius:8px; padding:15px">
<h3>Summary</h3>

<p>Jahn should recognize the full $20,000 as an expense in Q3 because the retreat took place on July 15. Under accrual accounting, expenses are recognized when incurred, not when paid. The $5,000 deposit paid in Q2 was simply a prepaid asset until the retreat happened, and the $15,000 balance paid in September is just settling a payable that was already accrued in July. Cash timing affects the balance sheet, never the expense recognition.</p>
</div>
</div>`,
    },
    {
      id: "14092",
      prompt: `Alpha Co. acquires a 20% interest in Beta Co., which is owned by two individuals. Alpha's president becomes one of three voting members of Beta's board of directors. Alpha has not elected the fair value option. How should Alpha account for its investment in Beta?`,
      choices: [
        `As a cost-basis investment.`,
        `As an equity method investment.`,
        `At fair value.`,
        `As a consolidated subsidiary.`,
      ],
      correctIndex: 1,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; padding:20px">
<div style="background:linear-gradient(to right, #01506e, #207bb5); border-radius:10px 10px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">Accounting Method for an Investment in Beta</h2>
</div>

<div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Answer:</strong> <strong>Choice B</strong> is correct. Alpha should account for the investment using the equity method.</p>
</div>

<div style="margin-bottom:20px">
<h3>The Three Levels of Influence</h3>

<p>The accounting method for an investment in another entity depends on the level of influence the investor has over the investee. The level of influence drives the accounting treatment, not just the percentage of ownership.</p>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Level of Influence</th>
			<th style="text-align:left">Typical Ownership</th>
			<th style="text-align:left">Accounting Method</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">No significant influence</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Less than 20%</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Fair value (or cost basis if no readily determinable fair value)</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Significant influence</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">20% to 50%</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Equity method</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Control</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">More than 50%</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Consolidation</td>
		</tr>
	</tbody>
</table>
</div>

<div style="margin-bottom:20px">
<h3>Why Significant Influence Applies Here</h3>

<p>Two facts in this scenario both point toward significant influence:</p>

<div style="background-color:#f0f7fa; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Fact 1: 20% Ownership</h4>

<p style="margin-left:0; margin-right:0">Owning 20% of an entity creates a presumption of significant influence under GAAP. The 20% threshold is a guideline, not a strict rule, but it is the benchmark for triggering the presumption.</p>
</div>

<div style="background-color:#f0f7fa; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Fact 2: Board Representation</h4>

<p style="margin-left:0; margin-right:0">Alpha&#39;s president holds one of three voting seats on Beta&#39;s board. That is one-third of the voting power on a board that controls the operating and financial decisions of the company. Board representation is one of the strongest indicators of significant influence under ASC 323.</p>
</div>

<p>Both signals point in the same direction. Even if the 20% ownership alone could be debated, the board seat removes any doubt. Significant influence exists, and the equity method is required.</p>
</div>

<div style="margin-bottom:20px">
<h3>Indicators of Significant Influence</h3>

<p>Beyond the 20% ownership presumption, ASC 323 lists specific indicators that significant influence exists:</p>

<ul>
	<li>Representation on the board of directors</li>
	<li>Participation in policy-making processes</li>
	<li>Material intercompany transactions</li>
	<li>Interchange of managerial personnel</li>
	<li>Technological dependency</li>
</ul>

<p>The presence of any one of these indicators may be enough to establish significant influence even when ownership is below 20%. Conversely, the absence of these indicators may rebut the presumption when ownership is between 20% and 50%.</p>
</div>

<div style="background-color:#fffde7; border-left:5px solid #e8980a; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Note on the Fair Value Option</h3>

<p style="margin-left:0; margin-right:0">Companies are allowed to elect the fair value option for equity method investments, which would let them carry the investment at fair value with changes flowing through net income. The question explicitly states that Alpha did not elect this option, so the standard equity method applies.</p>
</div>

<div style="margin-bottom:20px">
<h3>Quick Recap of the Equity Method</h3>

<p>Under the equity method, the investor records its share of the investee&#39;s earnings as income each period and reduces the investment by its share of any dividends received. The investment account on the balance sheet rolls forward over time:</p>

<div style="background-color:#f5f5f5; border-radius:8px; margin-bottom:15px; margin-left:0; margin-right:0; margin-top:15px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Beginning Investment</strong><br />
+ Investor&#39;s share of investee net income<br />
- Investor&#39;s share of investee dividends<br />
= <strong>Ending Investment</strong></p>
</div>
</div>

<div style="margin-bottom:20px">
<h3>Answer Analysis</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Option</th>
			<th style="text-align:left">Analysis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">A. Cost-basis investment</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. Cost basis would only apply to an equity investment without a readily determinable fair value where no significant influence exists. With 20% ownership and a board seat, significant influence is clearly present.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">B. Equity method investment</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Correct. The 20% ownership creates the presumption of significant influence, and the board seat confirms it. The equity method is the required treatment.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">C. At fair value</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. Fair value is the default treatment for equity investments where no significant influence exists. Alpha did not elect the fair value option, and significant influence is present, so this method is not appropriate.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">D. Consolidated subsidiary</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. Consolidation is required when the investor controls the investee, typically through more than 50% ownership. Alpha owns only 20% and has just one of three board seats, which falls well short of control.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background:linear-gradient(to right, #68d3a7, #50b190); border-radius:8px; padding:15px">
<h3>Summary</h3>

<p>Alpha should use the equity method. The 20% ownership creates the presumption of significant influence under GAAP, and Alpha&#39;s president holding one of three board seats reinforces that significant influence exists. With the fair value option not elected, the equity method is the required treatment. Under this method, Alpha will record its 20% share of Beta&#39;s net income as investment income and reduce the investment account for any dividends received.</p>
</div>
</div>`,
    },
    {
      id: "17050",
      prompt: `Which of the following statements is correct regarding the impact to a lessee of a residual value guarantee included in a lease?`,
      choices: [
        `A significant residual value guarantee by the lessee will not affect the eligibility of an arrangement to be a sale leaseback transaction.`,
        `A change in the probable amount owed by the lessee under the residual value guarantee requires remeasurement of the lease payments.`,
        `A change in the probable amount owed by the lessee under the residual value guarantee requires updating the discount rate for the lease.`,
        `The existence and terms and conditions of the residual value guarantee provided by the lessee are not required to be disclosed in the notes to the lessee's financial statements.`,
      ],
      correctIndex: 1,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; padding:20px">
<div style="background:linear-gradient(to right, #01506e, #207bb5); border-radius:10px 10px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">Residual Value Guarantee in a Lease</h2>
</div>

<div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Answer:</strong> <strong>Choice B</strong> is correct. A change in the probable amount owed under the residual value guarantee triggers remeasurement of the lease payments.</p>
</div>

<div style="margin-bottom:20px">
<h3>What is a Residual Value Guarantee in Plain Terms</h3>

<p>When you lease something like a vehicle or piece of equipment, the lessor expects the asset to be worth a certain amount when the lease ends (the residual value). A <strong>residual value guarantee</strong> is the lessee promising the lessor that the asset will actually be worth that amount when the lease term ends. If it isn&#39;t, the lessee makes up the difference.</p>

<p>Think of it like this: &quot;I guarantee that when I return this equipment in five years, it will still be worth $10,000. If you can only sell it for $7,000, I will pay you the $3,000 shortfall.&quot;</p>

<p>The guarantee creates a future cash outflow possibility for the lessee. Because the lessee is on the hook for that potential payment, the present value of the expected guarantee amount must be folded into the initial lease liability calculation, just like the regular lease payments.</p>
</div>

<div style="margin-bottom:20px">
<h3>Concrete Example</h3>

<div style="background-color:#f5f5f5; border-radius:8px; margin-bottom:15px; margin-left:0; margin-right:0; margin-top:15px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Scenario: Equipment Lease</strong></p>

<p style="margin-left:0; margin-right:0">A company leases equipment for 5 years with annual payments of $20,000 and a 6% discount rate. As part of the deal, the lessee guarantees that the equipment will be worth at least $10,000 at the end of the lease term. Based on initial expectations, the lessee believes the actual value will be $10,000, meaning $0 will probably be owed under the guarantee.</p>

<p style="margin-left:0; margin-right:0"><strong>Initial lease liability calculation:</strong></p>

<ul style="margin-left:0; margin-right:0">
	<li>Present value of the five $20,000 annual payments at 6% = $84,247</li>
	<li>Plus: Probable payment under the guarantee = $0 (none expected)</li>
	<li>Total initial lease liability = $84,247</li>
</ul>

<p style="margin-left:0; margin-right:0">Three years later, market conditions change and the lessee now expects the equipment to be worth only $6,000 at lease end, meaning the lessee will probably owe $4,000 under the guarantee. This change in expected payment triggers remeasurement.</p>
</div>
</div>

<div style="margin-bottom:20px">
<h3>Why Remeasurement is Required</h3>

<p>The lease liability represents the lessee&#39;s obligation to make future payments. When the probable payment amount changes, the liability is no longer accurately stated, and remeasurement is required to bring it back into alignment.</p>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Trigger</th>
			<th style="text-align:left">Action</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Change in probable amount owed under residual value guarantee</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Remeasure lease payments using the original discount rate</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Change in lease term or purchase option assessment</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Remeasure using updated discount rate</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Change in floating index or rate that resets payments</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Remeasure using original discount rate</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background-color:#fffde7; border-left:5px solid #e8980a; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Critical Distinction: Discount Rate Stays the Same</h3>

<p style="margin-left:0; margin-right:0">When remeasurement is triggered solely by a change in the probable amount owed under the residual value guarantee, the lessee uses the <strong>original</strong> discount rate, not an updated one. The discount rate is updated only when remeasurement is triggered by a change in lease term, a reassessment of a purchase option, or certain other events. This is why Choice C is incorrect: it correctly identifies that remeasurement is required but wrongly says the discount rate is updated.</p>
</div>

<div style="margin-bottom:20px">
<h3>Walking Through Each Choice</h3>

<div style="background-color:#ffebee; border-left:5px solid #f44336; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Choice A: Sale-Leaseback Eligibility</h4>

<p style="margin-left:0; margin-right:0">Incorrect. A significant residual value guarantee by the seller-lessee can prevent the transaction from qualifying as a sale, because the guarantee suggests the lessee retains substantial risk in the asset. The guarantee absolutely matters for sale-leaseback analysis under ASC 842.</p>
</div>

<div style="background-color:#e8f5e9; border-left:5px solid #4caf50; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Choice B: Remeasurement (Correct)</h4>

<p style="margin-left:0; margin-right:0">Correct. When the probable amount owed under the residual value guarantee changes, the lease payments must be remeasured to capture the updated obligation.</p>
</div>

<div style="background-color:#ffebee; border-left:5px solid #f44336; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Choice C: Discount Rate Update</h4>

<p style="margin-left:0; margin-right:0">Incorrect. The lease payments are remeasured, but the original discount rate is retained. The discount rate is only updated when triggered by certain other events such as a change in lease term or a purchase option reassessment.</p>
</div>

<div style="background-color:#ffebee; border-left:5px solid #f44336; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Choice D: No Disclosure Required</h4>

<p style="margin-left:0; margin-right:0">Incorrect. The existence and terms of the residual value guarantee must be disclosed in the lessee&#39;s notes. Disclosure requirements under ASC 842 are extensive and specifically include information about residual value guarantees because they create material future cash flow obligations.</p>
</div>
</div>

<div style="margin-bottom:20px">
<h3>Answer Analysis</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Option</th>
			<th style="text-align:left">Analysis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">A</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. A significant residual value guarantee can affect sale-leaseback eligibility because it indicates retained risk.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">B</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Correct. A change in the probable amount owed under the guarantee requires remeasurement of the lease payments.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">C</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. The original discount rate is retained when remeasurement is triggered by a change in the residual value guarantee.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">D</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. Residual value guarantees must be disclosed in the lessee&#39;s notes to the financial statements.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background:linear-gradient(to right, #68d3a7, #50b190); border-radius:8px; padding:15px">
<h3>Summary</h3>

<p>A residual value guarantee is the lessee&#39;s promise that the leased asset will be worth a specified amount at the end of the lease, with the lessee covering any shortfall. The probable amount owed is included in the initial lease liability at present value. When the probable amount changes during the lease, ASC 842 requires the lessee to remeasure the lease payments using the original discount rate (not an updated one). The other choices fail because they incorrectly state that residual value guarantees don&#39;t affect sale-leasebacks, that the discount rate must be updated, or that disclosure is not required.</p>
</div>
</div>`,
    },
    {
      id: "19050",
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
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; padding:20px">
<div style="background:linear-gradient(to right, #01506e, #207bb5); border-radius:10px 10px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">Total Liabilities and Stockholders&#39; Equity</h2>
</div>

<div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Answer:</strong> <strong>$22,000</strong> is the correct amount of total liabilities and stockholders&#39; equity.</p>
</div>

<div style="margin-bottom:20px">
<h3>Strategy: Build the Right Side of the Balance Sheet</h3>

<p>The question gives us a mix of balance sheet accounts and income statement accounts. The cleanest approach is to add up the liability and equity accounts directly rather than relying on the asset side, because we cannot be certain every asset account has been listed.</p>

<p>The one trap to avoid: <strong>beginning</strong> retained earnings is given, not ending retained earnings. We have to roll it forward before plugging it into the balance sheet.</p>
</div>

<div style="margin-bottom:20px">
<h3>Step 1: Calculate Ending Retained Earnings</h3>

<div style="background-color:#f5f5f5; border-radius:8px; margin-bottom:15px; margin-left:0; margin-right:0; margin-top:15px; padding:15px">
<p style="margin-left:0; margin-right:0">Ending RE = Beginning RE + Net Income - Dividends</p>
</div>

<ul style="list-style-type:none">
	<li><strong>Beginning Retained Earnings:</strong> <span style="color:#0099d4">$14,000</span></li>
	<li><strong>Plus: Net Income ($14,000 - $10,000):</strong> <span style="color:#0099d4">$4,000</span></li>
	<li><strong>Less: Dividends Paid:</strong> <span style="color:#0099d4">($3,000)</span></li>
	<li>Ending Retained Earnings: <span style="color:#68d3a7">$15,000</span></li>
</ul>
</div>

<div style="margin-bottom:20px">
<h3>Step 2: Build the Balance Sheet</h3>

<p>Sorting each item provided into the right balance sheet bucket:</p>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:right">Amount</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td colspan="2" style="border-color:#dddddd; border-style:solid; border-width:1px">Assets</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Cash</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$14,000</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Property, Plant and Equipment, net</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$8,000</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Total Assets</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$22,000</td>
		</tr>
		<tr>
			<td colspan="2" style="border-color:#dddddd; border-style:solid; border-width:1px">Liabilities</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Accounts Payable</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$2,000</td>
		</tr>
		<tr>
			<td colspan="2" style="border-color:#dddddd; border-style:solid; border-width:1px">Stockholders&#39; Equity</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Contributed Capital</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$5,000</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Retained Earnings (ending)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$15,000</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Total Liabilities and Stockholders&#39; Equity</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$22,000</td>
		</tr>
	</tbody>
</table>

<p style="margin-left:0; margin-right:0"><em>Notice that revenues, expenses, and dividends do not appear on the balance sheet directly. They flow through net income and the retained earnings rollforward, which is already captured in the $15,000 ending retained earnings figure.</em></p>
</div>

<div style="background-color:#fffde7; border-left:5px solid #e8980a; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Common Trap: Beginning vs. Ending Retained Earnings</h3>

<p>When a problem provides beginning retained earnings alongside revenues, expenses, and dividends, it is signaling that you must roll the balance forward. The balance sheet always reports the <strong>ending</strong> retained earnings balance, never the beginning balance. Plugging in $14,000 directly is the most common mistake on this type of question.</p>
</div>

<div style="margin-bottom:20px">
<h3>Answer Analysis</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Option</th>
			<th style="text-align:left">Analysis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$25,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This results from forgetting to subtract dividends in the retained earnings rollforward: $14,000 + $4,000 + $5,000 + $2,000 = $25,000.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$22,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Correct. AP ($2,000) + Contributed Capital ($5,000) + Ending RE ($15,000) = $22,000. This also ties to total assets of $22,000.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$20,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This results from omitting accounts payable: Ending RE ($15,000) + Contributed Capital ($5,000) = $20,000.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$18,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This uses beginning retained earnings instead of ending: $14,000 + $5,000 - $2,000, or it improperly treats accounts payable as a contra account.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background:linear-gradient(to right, #68d3a7, #50b190); border-radius:8px; padding:15px">
<h3>Summary</h3>

<p>Total liabilities and stockholders&#39; equity equals $22,000. The key step is rolling beginning retained earnings of $14,000 forward by adding net income of $4,000 and subtracting dividends of $3,000 to arrive at ending retained earnings of $15,000. From there, simply add accounts payable ($2,000), contributed capital ($5,000), and ending retained earnings ($15,000). This also confirms total assets of $22,000, since the balance sheet must balance.</p>
</div>
</div>`,
    },
    {
      id: "19051",
      prompt: `As of January 1, year 1, a company had a beginning balance of $250,000 for its $10 par value common stock. During year 1, the following transactions affecting common stock occurred:

	The company issued 10,000 shares in exchange for equipment with a fair value of $350,000.

	The company repurchased 500 shares at $40 per share and formally retired the shares.

The repurchased shares had originally been issued at $36 per share. The company's accounting policy is to allocate the cost of retired shares against additional paid-in capital and retained earnings. Which of the following amounts should be reported as common stock as of December 31, year 1?`,
      choices: [
        `$332,000`,
        `$345,000`,
        `$580,000`,
        `$595,000`,
      ],
      correctIndex: 1,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; padding:20px">
<div style="background:linear-gradient(to right, #01506e, #207bb5); border-radius:10px 10px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">Common Stock Balance with Issuance and Retirement</h2>
</div>

<div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Answer:</strong> <strong>$345,000</strong> is the ending common stock balance reported on December 31, Year 1.</p>
</div>

<div style="margin-bottom:20px">
<h3>Establishing the Starting Point</h3>

<p>Before tackling the two transactions, set the foundation. The $250,000 common stock balance with a $10 par value tells us the company has 25,000 shares outstanding ($250,000 &divide; $10). Those shares were originally issued at $36 each, so $26 per share went to APIC. That builds out the starting equity picture:</p>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:right">Calculation</th>
			<th style="text-align:right">Amount</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Common Stock</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">25,000 shares &times; $10 par</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$250,000</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">APIC</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">25,000 shares &times; $26 excess</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$650,000</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Total from Initial Issuance</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$900,000</td>
		</tr>
	</tbody>
</table>
</div>

<div style="margin-bottom:20px">
<h3>Transaction 1: Issue 10,000 Shares for Equipment ($350,000 FV)</h3>

<p>When shares are issued in a non-cash transaction, common stock is locked at the par value amount and APIC absorbs whatever is left. With 10,000 shares at $10 par, common stock must be credited for exactly $100,000. The remaining $250,000 plugs to APIC.</p>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:right">Debit</th>
			<th style="text-align:right">Credit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Equipment</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$350,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Common Stock (10,000 &times; $10)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$100,000</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">APIC (plug)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$250,000</td>
		</tr>
	</tbody>
</table>

<p style="margin-left:0; margin-right:0"><em>Cash flow statement note: Since no cash changed hands, this transaction does not appear in the financing activities section. Instead, it is reported as a supplemental non-cash disclosure at the bottom of the cash flow statement, alongside items like taxes paid and interest paid.</em></p>
</div>

<div style="margin-bottom:20px">
<h3>Transaction 2: Repurchase and Retire 500 Shares at $40 Per Share</h3>

<p>Retirement is a two-step process. First the shares are bought back into treasury, then they are formally cancelled. The goal of retirement is to remove every trace of those shares from the books, which means reversing both the original common stock and APIC at the original issuance amounts.</p>

<h4>Step 2a: Repurchase the Shares</h4>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:right">Debit</th>
			<th style="text-align:right">Credit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Treasury Stock (500 &times; $40)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$20,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Cash</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$20,000</td>
		</tr>
	</tbody>
</table>

<h4>Step 2b: Retire the Shares</h4>

<p>To retire, reverse the original issuance amounts: $10 par per share to common stock and $26 of APIC per share. The treasury stock account is closed out at its $20,000 cost. The difference between what we paid ($20,000) and the original issuance impact ($5,000 + $13,000 = $18,000) is a $2,000 plug. Since this is a debit plug, it goes to retained earnings.</p>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:right">Debit</th>
			<th style="text-align:right">Credit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Common Stock (500 &times; $10)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$5,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">APIC (500 &times; $26)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$13,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Retained Earnings (plug)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$2,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Treasury Stock</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$20,000</td>
		</tr>
	</tbody>
</table>

<p style="margin-left:0; margin-right:0"><em>The retirement could be combined into a single entry by crediting cash directly for $20,000 instead of routing through treasury stock. The two-step approach shown here makes the underlying mechanics clearer.</em></p>
</div>

<div style="background-color:#fffde7; border-left:5px solid #e8980a; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Key Rule: The Plug for Retirement</h3>

<p style="margin-left:0; margin-right:0">When retiring shares above the original issuance price, the difference is debited to retained earnings (just like a dividend distribution). When shares are retired below the original issuance price, the difference is credited to APIC. This is why the company&#39;s accounting policy statement about allocating cost against APIC and retained earnings does not change the answer here, because the cost ($40) exceeds the original issuance price ($36), forcing the plug to retained earnings.</p>
</div>

<div style="margin-bottom:20px">
<h3>Common Stock Rollforward</h3>

<ul style="list-style-type:none">
	<li><strong>Beginning balance (Jan 1):</strong> <span style="color:#0099d4">$250,000</span></li>
	<li><strong>Plus: Issuance for equipment (10,000 &times; $10):</strong> <span style="color:#0099d4">$100,000</span></li>
	<li><strong>Less: Retirement (500 &times; $10):</strong> <span style="color:#0099d4">($5,000)</span></li>
	<li>Ending balance (Dec 31): <span style="color:#68d3a7">$345,000</span></li>
</ul>
</div>

<div style="background:linear-gradient(to right, #68d3a7, #50b190); border-radius:8px; padding:15px">
<h3>Summary</h3>

<p>The ending common stock balance is $345,000. Common stock movements always tie back to par value because that figure is fixed by the share count. Issuing 10,000 shares for equipment increased common stock by $100,000 (10,000 shares &times; $10 par). Retiring 500 shares decreased common stock by $5,000 (500 shares &times; $10 par). The repurchase price of $40 and the original issuance price of $36 affect APIC and retained earnings, but they do not change the par value math that drives common stock.</p>
</div>
</div>`,
    },
    {
      id: "125050",
      prompt: `Certain items are recognized as assets in the government-wide statement of net position but are not recognized in the governmental funds balance sheet because`,
      choices: [
        `Assets are defined differently for governmental funds financial reporting than for government-wide financial reporting.`,
        `The materiality threshold for financial reporting is typically smaller for government-wide financial statements than for governmental funds financial statements.`,
        `Assets are recognized using the current financial resources measurement focus for the governmental funds balance sheet and the economic resources measurement focus for the government-wide statement of net position.`,
        `The reliability threshold of information reported in a governmental funds balance sheet is set at a higher level than for government-wide reporting.`,
      ],
      correctIndex: 2,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; padding:20px">
<div style="background:linear-gradient(to right, #01506e, #207bb5); border-radius:10px 10px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">Measurement Focus: Governmental Funds vs. Government-Wide</h2>
</div>

<div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Answer:</strong> <strong>Choice C</strong>&nbsp;is correct. The difference arises because governmental funds use the current financial resources measurement focus, while the government-wide statements use the economic resources measurement focus.</p>
</div>

<div style="margin-bottom:20px">
<h3>The Core Concept: Two Different Lenses</h3>

<p>Governmental accounting requires two different sets of financial statements that look at the same underlying activity through different lenses. The lens being applied is called the <strong>measurement focus</strong>, and it determines which assets and liabilities show up on each balance sheet.</p>
</div>

<div style="margin-bottom:20px">
<h3>Side by Side Comparison</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left; width:30%">Feature</th>
			<th style="text-align:left">Governmental Funds Balance Sheet</th>
			<th style="text-align:left">Government-Wide Statement of Net Position</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Measurement Focus</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Current financial resources</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Economic resources</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Basis of Accounting</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Modified accrual</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Full accrual</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Assets Reported</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Current financial resources only (cash, short-term receivables)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">All economic resources, including capital assets and long-term receivables</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Liabilities Reported</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Liabilities payable from current resources</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">All liabilities, including long-term debt</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Capital Assets</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Not reported (expenditure when purchased)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Reported and depreciated</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Long-Term Debt</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Not reported (other financing source when issued)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Reported as liability</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background-color:#f0f7fa; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>What Each Lens is Trying to Show</h3>

<p style="margin-left:0; margin-right:0"><strong>Current Financial Resources Focus:</strong> Answers the question, &quot;How much can the government spend right now?&quot; It captures only spendable, near-term resources. Capital assets do not help fund next month&#39;s payroll, so they are not included.</p>

<p style="margin-left:0; margin-right:0"><strong>Economic Resources Focus:</strong> Answers the question, &quot;What is the government&#39;s overall financial position?&quot; It captures everything the government owns and owes, similar to a corporate balance sheet, including buildings, infrastructure, and bonds payable.</p>
</div>

<div style="margin-bottom:20px">
<h3>Concrete Example</h3>

<p>A city purchases a fire truck for $400,000 in cash and issues $5 million in long-term bonds to build a new library.</p>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Item</th>
			<th style="text-align:left">Governmental Funds Balance Sheet</th>
			<th style="text-align:left">Government-Wide Net Position</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Fire Truck ($400,000)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Not reported as asset; treated as expenditure</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Reported as capital asset, depreciated over useful life</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Bonds Payable ($5,000,000)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Not reported as liability; treated as other financing source</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Reported as long-term liability</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background-color:#fffde7; border-left:5px solid #e8980a; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>The Key Mental Hook</h3>

<p style="margin-left:0; margin-right:0">Governmental funds focus on <strong>budget accountability</strong>: did the government spend within its means this period? Government-wide statements focus on <strong>operational accountability</strong>: how is the government doing as an overall entity? Different goals require different measurement focuses, which means different assets and liabilities appear on each statement.</p>
</div>

<div style="margin-bottom:20px">
<h3>Answer Analysis</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Option</th>
			<th style="text-align:left">Analysis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Choice 1</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. Assets are not defined differently between the two statements. The definition of an asset is consistent. The reason certain items appear on one statement but not the other is the measurement focus, not the definition.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Choice 2</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. Materiality thresholds are not the driver here. The difference is structural, not based on size of items.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Choice 3</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Correct. Governmental funds use the current financial resources measurement focus, while government-wide statements use the economic resources measurement focus. This is the precise reason items like capital assets and long-term debt appear on one but not the other.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Choice 4</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. Both sets of statements require reliable information. Reliability standards are not what cause certain assets to appear in one statement and not the other.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background:linear-gradient(to right, #68d3a7, #50b190); border-radius:8px; padding:15px">
<h3>Summary</h3>

<p>The correct answer is Choice C. Governmental funds use the current financial resources measurement focus and modified accrual basis, capturing only short-term spendable resources and the liabilities payable from those resources. Government-wide statements use the economic resources measurement focus and full accrual basis, capturing all assets and liabilities like a corporate balance sheet. That difference in measurement focus is what causes capital assets, long-term receivables, and long-term debt to appear in the government-wide statement of net position but not in the governmental funds balance sheet.</p>
</div>
</div>`,
    },
    {
      id: "12050",
      prompt: `A company sold its trade receivables with a carrying amount of $200,000 to a factoring company without recourse. The factoring entity remitted 80% of the trade receivables, and the remaining 20% was retained to cover its 5% factoring fee and provide for possible returns and price adjustments. Which of the following journal entries should be prepared by the company to record the factoring transaction?`,
      choices: [
        `Debit cash $160,000; debit sales returns and allowances $40,000; credit receivables $200,000.`,
        `Debit cash $160,000; debit interest expense $10,000; debit receivable from factor $30,000; credit trade receivables $200,000.`,
        `Debit cash $160,000; debit interest expense $10,000; debit sales returns and allowances $30,000; credit trade receivables $200,000.`,
        `Debit cash $160,000; debit loss on sale of receivables $10,000; debit receivable from factor $30,000; credit trade receivables $200,000.`,
      ],
      correctIndex: 3,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; padding:20px">
<div style="background:linear-gradient(to right, #01506e, #207bb5); border-radius:10px 10px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">Journal Entry for Factoring Without Recourse</h2>
</div>

<div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Answer:</strong> <strong>Choice D</strong>&nbsp;is correct: Debit cash $160,000; debit loss on sale of receivables $10,000; debit receivable from factor $30,000; credit trade receivables $200,000.</p>
</div>

<div style="margin-bottom:20px">
<h3>What Factoring Actually Means</h3>

<p>Factoring is a financing arrangement where a company sells its receivables to a factor (typically a bank or specialty finance company) to get cash now instead of waiting for customers to pay. The factor charges a fee for the service, then takes responsibility for collecting from the customers.</p>

<p>The phrase <strong>&quot;without recourse&quot;</strong> is the key term. It means if a customer fails to pay, the factor absorbs the loss. The seller is off the hook, so the receivables come fully off the seller&#39;s books. This is treated as a sale, not a borrowing.</p>
</div>

<div style="margin-bottom:20px">
<h3>Breaking Down the Numbers</h3>

<p>The factor remits 80% of the receivables in cash and holds back 20% as a reserve. From that 20% holdback, the factor charges a 5% fee. The remaining 15% is held as a buffer for potential returns or price adjustments and will eventually be paid back to the seller. That buffer is recorded as a &quot;due from factor&quot; (also called receivable from factor).</p>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Component</th>
			<th style="text-align:right">% of $200,000</th>
			<th style="text-align:right">Amount</th>
			<th style="text-align:left">Treatment</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Cash remitted to seller</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">80%</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$160,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Debit Cash</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Factoring fee retained</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">5%</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$10,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Debit Loss on Sale</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Holdback for returns/adjustments</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">15%</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$30,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Debit Receivable from Factor</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Trade receivables removed</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">100%</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$200,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Credit Trade Receivables</td>
		</tr>
	</tbody>
</table>
</div>

<div style="margin-bottom:20px">
<h3>The Journal Entry</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:right">Debit</th>
			<th style="text-align:right">Credit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Cash</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$160,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Loss on Sale of Receivables</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$10,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Receivable from Factor</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$30,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Trade Receivables</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$200,000</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background-color:#fffde7; border-left:5px solid #e8980a; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Why &quot;Loss on Sale&quot; and Not &quot;Interest Expense&quot;</h3>

<p style="margin-left:0; margin-right:0">Without recourse means the transfer of receivables is treated as a sale, not as a borrowing collateralized by receivables. Because it is a sale, the factoring fee is recognized as a loss on sale of receivables, not as interest expense. Interest expense would be appropriate only if the factor had recourse against the seller, since that arrangement is treated as a financing transaction rather than a sale.</p>
</div>

<div style="margin-bottom:20px">
<h3>Why &quot;Receivable from Factor&quot; and Not &quot;Sales Returns&quot;</h3>

<p>The 15% holdback is a buffer the factor keeps in case customers later return goods or negotiate price adjustments. If returns are minimal, the company eventually collects this amount from the factor. Because the cash is expected to come back, it is recorded as a receivable from the factor, not as sales returns. Sales returns would only be recorded later if and when actual returns occur.</p>
</div>

<div style="margin-bottom:20px">
<h3>Answer Analysis</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Option</th>
			<th style="text-align:left">Analysis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Choice 1</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This treats the entire 20% holdback as sales returns, which is wrong. Most of the holdback is a receivable from the factor, and the fee should be recorded as a loss on sale.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Choice 2</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. The structure is right, but interest expense is the wrong account. Without recourse, the transaction is a sale, so the fee is a loss on sale of receivables, not interest.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Choice 3</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. Two errors here: interest expense instead of loss on sale, and sales returns instead of a receivable from factor.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Choice 4</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Correct. Cash of $160,000, loss on sale of $10,000 for the fee, receivable from factor of $30,000 for the holdback, and full removal of the $200,000 trade receivable.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background:linear-gradient(to right, #68d3a7, #50b190); border-radius:8px; padding:15px">
<h3>Summary</h3>

<p>Choice 4 is correct. Factoring without recourse is treated as a sale, so the fee is recognized as a loss on sale of receivables rather than interest expense. The 80% remitted in cash is straightforward, the 5% fee is the loss, and the remaining 15% buffer is recorded as a receivable from the factor since the company expects to collect it later if returns and adjustments stay manageable. The full $200,000 of trade receivables is removed because the seller has transferred all risk to the factor.</p>
</div>
</div>`,
    },
    {
      id: "15050",
      prompt: `Four years ago, Egan Co. purchased equipment with a useful life of 12 years for $18,000. At the beginning of year 5, it was sold for $17,000. Egan uses the straight-line depreciation method with no salvage value. What amount should Egan report as a gain or loss on the disposal of the equipment?`,
      choices: [
        `$1,000 loss.`,
        `$11,000 gain.`,
        `$6,500 gain.`,
        `$5,000 gain.`,
      ],
      correctIndex: 3,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; padding:20px">
<div style="background:linear-gradient(to right, #01506e, #207bb5); border-radius:10px 10px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">Gain or Loss on Disposal of Equipment</h2>
</div>

<div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Answer:</strong> <strong>$5,000 gain</strong> on the disposal of the equipment.</p>
</div>

<div style="margin-bottom:20px">
<h3>The Gain/Loss Formula</h3>

<div style="background-color:#f5f5f5; border-radius:8px; margin-bottom:15px; margin-left:0; margin-right:0; margin-top:15px; padding:15px">
<p style="margin-left:0; margin-right:0">Gain (Loss) on Disposal = Sale Proceeds - Book Value at Sale</p>
</div>

<p>Book value (also called carrying amount) is the original cost minus accumulated depreciation. The two key calculations are figuring out how much depreciation has accumulated and what the asset is worth on the books at the time of sale.</p>
</div>

<div style="margin-bottom:20px">
<h3>Step 1: Calculate Annual Depreciation</h3>

<p>Straight-line depreciation with no salvage value spreads the entire cost evenly across the useful life.</p>

<div style="background-color:#f5f5f5; border-radius:8px; margin-bottom:15px; margin-left:0; margin-right:0; margin-top:15px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Annual Depreciation:</strong> $18,000 &divide; 12 years = $1,500 per year</p>
</div>
</div>

<div style="margin-bottom:20px">
<h3>Step 2: Calculate Accumulated Depreciation at Sale</h3>

<p>The equipment was purchased four years ago and sold at the beginning of year 5. That means four full years of depreciation have been recorded.</p>

<div style="background-color:#f5f5f5; border-radius:8px; margin-bottom:15px; margin-left:0; margin-right:0; margin-top:15px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Accumulated Depreciation:</strong> $1,500 &times; 4 years = $6,000</p>
</div>
</div>

<div style="margin-bottom:20px">
<h3>Step 3: Calculate Book Value</h3>

<ul style="list-style-type:none">
	<li><strong>Original cost:</strong> <span style="color:#0099d4">$18,000</span></li>
	<li><strong>Less: Accumulated depreciation:</strong> <span style="color:#0099d4">($6,000)</span></li>
	<li>Book value at sale: <span style="color:#68d3a7">$12,000</span></li>
</ul>
</div>

<div style="margin-bottom:20px">
<h3>Step 4: Compare Sale Proceeds to Book Value</h3>

<ul style="list-style-type:none">
	<li><strong>Sale proceeds:</strong> <span style="color:#0099d4">$17,000</span></li>
	<li><strong>Less: Book value:</strong> <span style="color:#0099d4">($12,000)</span></li>
	<li>Gain on disposal: <span style="color:#68d3a7">$5,000</span></li>
</ul>

<p>Sale proceeds exceed book value, so the result is a gain.</p>
</div>

<div style="margin-bottom:20px">
<h3>Journal Entry for the Disposal</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:right">Debit</th>
			<th style="text-align:right">Credit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Cash</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$17,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Accumulated Depreciation</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$6,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Equipment</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$18,000</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Gain on Sale of Equipment</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$5,000</td>
		</tr>
	</tbody>
</table>

<p style="margin-left:0; margin-right:0"><em>The disposal removes both the original cost ($18,000 credit to Equipment) and the related accumulated depreciation ($6,000 debit) from the books. The cash received plus the gain plug balances the entry.</em></p>
</div>

<div style="background-color:#fffde7; border-left:5px solid #e8980a; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Watch the Timing of the Sale</h3>

<p style="margin-left:0; margin-right:0">The phrase &quot;beginning of year 5&quot; tells you exactly four full years of depreciation have been recorded, with no partial-year depreciation needed. If the sale had been mid-year 5, an extra partial-year adjustment would have been required to bring depreciation up to date through the sale date.</p>
</div>

<div style="margin-bottom:20px">
<h3>Answer Analysis</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Option</th>
			<th style="text-align:left">Analysis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$1,000 loss</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This treats the $18,000 original cost as the book value and subtracts the $17,000 sale proceeds, ignoring depreciation entirely.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$11,000 gain</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This results from depreciating only one year of the asset&#39;s life ($18,000 - $1,500 = $16,500 book value, leading to a $500 gain), or from skipping the book value calculation entirely. Neither path is correct.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$6,500 gain</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This results from using five years of depreciation ($1,500 &times; 5 = $7,500) instead of four, producing an incorrect book value of $10,500.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$5,000 gain</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Correct. Sale proceeds of $17,000 minus book value of $12,000 ($18,000 - $6,000 accumulated depreciation) equals a $5,000 gain.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background:linear-gradient(to right, #68d3a7, #50b190); border-radius:8px; padding:15px">
<h3>Summary</h3>

<p>Egan reports a $5,000 gain on the disposal. After four years of straight-line depreciation at $1,500 per year, accumulated depreciation totals $6,000, leaving a book value of $12,000. Selling for $17,000 produces a $5,000 gain. The structure of any disposal question is the same: calculate accumulated depreciation, derive book value, and compare sale proceeds to that book value.</p>
</div>
</div>`,
    },
    {
      id: "14091",
      prompt: `A company holds the following debt securities:

	
		
			Investment
			Maturity
		
	
	
		
			Corporate bonds
			20 years
		
		
			Municipal securities
			15 years
		
		
			U.S. Treasury bonds
			10 years
		
		
			Convertible debt
			4 years
		
		
			Commercial paper
			10 months
		
	

Management would like to hold all investments until maturity, but financial uncertainty could require the sale of the U.S. Treasury bonds and the convertible debt before their maturity dates. Based on this information, which of the following is a complete and accurate list of the investments that should be reported as held-to-maturity securities?`,
      choices: [
        `The corporate bonds, the convertible debt, and the municipal securities.`,
        `The corporate bonds, the convertible debt, and the U.S. Treasury bonds.`,
        `The corporate bonds, the municipal securities, and the commercial paper.`,
        `The corporate bonds, the municipal securities, and the U.S. Treasury bonds.`,
      ],
      correctIndex: 2,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; padding:20px">
<div style="background:linear-gradient(to right, #01506e, #207bb5); border-radius:10px 10px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">Held-to-Maturity Classification</h2>
</div>

<div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Answer:</strong> <strong>Choice C</strong> is correct: the corporate bonds, the municipal securities, and the commercial paper qualify as held-to-maturity securities.</p>
</div>

<div style="margin-bottom:20px">
<h3>The HTM Test</h3>

<p>A debt security can be classified as held-to-maturity only when the company has both the <strong>positive intent</strong> and the <strong>ability</strong> to hold the security until its maturity date. Both conditions must be met. If there is any meaningful possibility the company may need to sell before maturity, HTM classification is off the table and the security defaults to available-for-sale (or trading).</p>
</div>

<div style="margin-bottom:20px">
<h3>Walking Through Each Security</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Security</th>
			<th style="text-align:left">Maturity</th>
			<th style="text-align:center">HTM?</th>
			<th style="text-align:left">Reasoning</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Corporate bonds</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">20 years</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:center">Yes</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Management intends to hold to maturity, no liquidity concern flagged.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Municipal securities</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">15 years</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:center">Yes</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Management intends to hold to maturity, no liquidity concern flagged.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">U.S. Treasury bonds</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">10 years</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:center">No</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Financial uncertainty could force a sale before maturity. Fails the ability test.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Convertible debt</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">4 years</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:center">No</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Could be sold before maturity. Convertible debt also typically cannot be HTM because the conversion feature is inconsistent with hold-to-maturity intent.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Commercial paper</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">10 months</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:center">Yes</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Management intends to hold to maturity, no liquidity concern flagged. Short maturity does not disqualify HTM.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background-color:#f0f7fa; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Two Reasons HTM Fails</h3>

<p style="margin-left:0; margin-right:0"><strong>1. Lack of intent or ability:</strong> If management thinks they may need to sell the security before maturity for liquidity, strategic, or other business reasons, HTM is not appropriate. The Treasury bonds and convertible debt fail this test because management has flagged that they may need to be sold.</p>

<p style="margin-left:0; margin-right:0"><strong>2. Nature of the security itself:</strong> Convertible debt typically cannot be classified as HTM even when the company intends to hold it. The holder has a right to convert the debt into equity, which is inherently inconsistent with holding to maturity. The holder might choose conversion at any time, undermining the HTM premise.</p>
</div>

<div style="background-color:#fffde7; border-left:5px solid #e8980a; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Why HTM Classification Matters</h3>

<p style="margin-left:0; margin-right:0">HTM debt securities are reported at amortized cost, not fair value. That keeps unrealized gains and losses off both the income statement and the balance sheet, providing income statement stability. AFS debt securities, by contrast, are marked to fair value with unrealized gains and losses going to OCI. The classification is consequential, which is why GAAP imposes strict requirements before allowing HTM treatment.</p>
</div>

<div style="margin-bottom:20px">
<h3>Answer Analysis</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Option</th>
			<th style="text-align:left">Analysis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Choice A</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. Convertible debt cannot be HTM, both because management may need to sell it and because convertible debt fails HTM classification by nature. Commercial paper is also missing.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Choice B</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. Both U.S. Treasury bonds and convertible debt may need to be sold before maturity, so neither qualifies for HTM. Municipal securities are missing.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Choice C</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Correct. Corporate bonds, municipal securities, and commercial paper all meet both the intent and ability requirements for HTM.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Choice D</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. U.S. Treasury bonds may need to be sold before maturity, so they fail the ability test. Commercial paper is missing.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background:linear-gradient(to right, #68d3a7, #50b190); border-radius:8px; padding:15px">
<h3>Summary</h3>

<p>Choice C is correct. HTM classification requires both intent and ability to hold the debt security until maturity. The Treasury bonds and convertible debt are excluded because management may need to sell them before maturity, and convertible debt has the additional disqualifier that its conversion feature is inconsistent with HTM treatment. The corporate bonds, municipal securities, and commercial paper meet both criteria and are reported at amortized cost as HTM securities.</p>
</div>
</div>`,
    },
    {
      id: "117050",
      prompt: `For a customer to have obtained control of a product in a bill-and-hold arrangement, each of the following criteria should be met, except:`,
      choices: [
        `The reason for the bill-and-hold arrangement must be substantive.`,
        `The product must be identified separately as belonging to the customer.`,
        `The entity cannot have the ability to direct the product to another customer.`,
        `A fixed schedule for delivery of the good must exist and be consistent with the buyer's business purpose.`,
      ],
      correctIndex: 3,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; padding:20px">
<div style="background:linear-gradient(to right, #01506e, #207bb5); border-radius:10px 10px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">Bill-and-Hold Arrangement Criteria</h2>
</div>

<div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Answer:</strong> <strong>Choice D</strong> is correct. A fixed delivery schedule is NOT one of the required criteria for a customer to have obtained control in a bill-and-hold arrangement.</p>
</div>

<div style="margin-bottom:20px">
<h3>What is a Bill-and-Hold Arrangement?</h3>

<p>A bill-and-hold arrangement is exactly what it sounds like: the seller bills the customer for goods, but holds onto the physical product for a period before actually shipping it. The customer has paid for and taken legal ownership of the goods, but the goods remain at the seller&#39;s location.</p>

<p>The accounting question is when the seller can recognize revenue. The general rule is that revenue is recognized when control transfers, which usually means when the goods physically leave the seller&#39;s premises. Bill-and-hold breaks that link, so ASC 606 imposes specific criteria to determine whether control has truly passed despite the goods still being on site.</p>
</div>

<div style="margin-bottom:20px">
<h3>A Concrete Example</h3>

<div style="background-color:#f5f5f5; border-radius:8px; margin-bottom:15px; margin-left:0; margin-right:0; margin-top:15px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Scenario: Steel Fabricator and Construction Company</strong></p>

<p style="margin-left:0; margin-right:0">Apex Steel manufactures custom steel beams for Granite Construction&#39;s new high-rise project. The beams are completed in September, but Granite&#39;s construction site is not yet ready to receive them because foundation work is delayed. Granite asks Apex to hold the beams at Apex&#39;s warehouse until November.</p>

<p style="margin-left:0; margin-right:0"><strong>Walking through each criterion:</strong></p>

<ul style="margin-left:0; margin-right:0">
	<li><strong>Substantive reason:</strong> Yes, Granite has no on-site storage and the foundation is not ready. This is a real business reason, not a way to inflate revenue.</li>
	<li><strong>Separately identified:</strong> Yes, the beams are tagged with Granite&#39;s purchase order number, separated from inventory, and stored in a designated section of the warehouse.</li>
	<li><strong>Ready for physical transfer:</strong> Yes, the beams are fully fabricated, inspected, and could be loaded onto a truck and shipped within hours of Granite&#39;s request.</li>
	<li><strong>Cannot be redirected:</strong> Yes, the beams are custom-fabricated to Granite&#39;s specifications. Apex literally cannot sell them to another customer.</li>
</ul>

<p style="margin-left:0; margin-right:0">All four criteria are met, so Apex can recognize revenue in September even though the beams are still in its warehouse.</p>
</div>
</div>

<div style="margin-bottom:20px">
<h3>The Four Actual Criteria Under ASC 606</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left; width:30%">Criterion</th>
			<th style="text-align:left">What it Means</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Substantive reason</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">There is a real business purpose for the customer requesting the bill-and-hold arrangement, not just to accelerate revenue.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Separately identified</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">The product is set aside and clearly identifiable as belonging to the customer, not commingled with regular inventory.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Ready for physical transfer</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">The product is in its finished state and can be shipped immediately when the customer asks for it.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Cannot be redirected</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">The seller does not have the ability to use the product itself or sell it to another customer.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background-color:#fffde7; border-left:5px solid #e8980a; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Why a Fixed Delivery Schedule is NOT Required</h3>

<p style="margin-left:0; margin-right:0">In many bill-and-hold scenarios, the customer doesn&#39;t even know exactly when they&#39;ll need the goods delivered. Returning to the Apex/Granite example: Granite might say &quot;ship them as soon as the foundation passes inspection,&quot; which could be late October or early November. There is no fixed schedule, but the arrangement still satisfies the control criteria. What matters is that the goods are <strong>ready to be transferred</strong> the moment the customer requests them, not that a specific calendar date is locked in.</p>
</div>

<div style="margin-bottom:20px">
<h3>Common Bill-and-Hold Scenarios</h3>

<ul>
	<li><strong>Custom equipment:</strong> A manufacturer completes specialized equipment but the buyer&#39;s facility isn&#39;t yet ready for installation</li>
	<li><strong>Seasonal merchandise:</strong> A retailer purchases inventory in advance but lacks warehouse space until closer to the selling season</li>
	<li><strong>Construction materials:</strong> Building components are ready before the project site can accept them</li>
	<li><strong>Limited storage:</strong> A small business buys a year&#39;s worth of supplies at a discount but asks the supplier to release them in batches</li>
</ul>

<p>In each case, the customer has a legitimate business reason for the seller to hold the goods, and the seller can recognize revenue if all four criteria are met.</p>
</div>

<div style="margin-bottom:20px">
<h3>Answer Analysis</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Option</th>
			<th style="text-align:left">Analysis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">A. Substantive reason</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">This is a real criterion. Without a substantive business purpose, the arrangement looks like revenue manipulation.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">B. Separately identified</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">This is a real criterion. The customer&#39;s goods must be physically segregated and identifiable.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">C. Cannot be directed elsewhere</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">This is a real criterion. If the seller could redirect the goods to another customer, control hasn&#39;t truly passed.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">D. Fixed delivery schedule</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Correct (the exception). A fixed delivery schedule is not required. The actual criterion is that the product must be ready for physical transfer at any time, not that a specific shipping date must be agreed upon.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background:linear-gradient(to right, #68d3a7, #50b190); border-radius:8px; padding:15px">
<h3>Summary</h3>

<p>Choice D is the exception. The four real criteria are a substantive reason, separately identified inventory, readiness for physical transfer, and the seller&#39;s inability to redirect the goods. A fixed delivery schedule is a common but unnecessary feature; many bill-and-hold arrangements have flexible delivery timing because the customer&#39;s need for the goods is uncertain. What matters is that the seller could ship the goods at a moment&#39;s notice when the customer requests them, not that a specific delivery date has been committed in advance.</p>
</div>
</div>`,
    },
    {
      id: "119051",
      prompt: `In a situation when a nonmonetary asset is destroyed in one accounting period and the insurance proceeds are not determinable until a subsequent accounting period, a gain or loss is recognized in accordance with accounting for`,
      choices: [
        `Contingencies.`,
        `Estimates.`,
        `Impairments.`,
        `Disposal of long-lived assets.`,
      ],
      correctIndex: 0,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; padding:20px">
<div style="background:linear-gradient(to right, #01506e, #207bb5); border-radius:10px 10px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">Insurance Recovery on a Destroyed Nonmonetary Asset</h2>
</div>

<div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Answer:</strong> <strong>Choice A: Contingencies</strong> is correct. The recovery is treated as a gain contingency that cannot be recognized until the proceeds are realized or realizable.</p>
</div>

<div style="margin-bottom:20px">
<h3>Setting the Scene</h3>

<p>A nonmonetary asset is anything other than cash or a claim to a fixed amount of cash. Common examples include buildings, equipment, vehicles, inventory, and land. When one of these assets is destroyed (think a fire that consumes a warehouse), the company faces two separate accounting issues: removing the destroyed asset from the books and recognizing whatever insurance recovery eventually comes through.</p>

<p>The catch is that those two events often happen in different accounting periods. The destruction happens in an instant, but insurance claims can take months to settle. Different rules apply to each side of the transaction.</p>
</div>

<div style="margin-bottom:20px">
<h3>Example: A Warehouse Destroyed by Fire</h3>

<p>Assume a company owns a warehouse with the following balances when it is destroyed by fire on December 1, Year 1:</p>

<ul>
	<li>Original cost: $500,000</li>
	<li>Accumulated depreciation: $100,000</li>
	<li>Book value: $400,000</li>
</ul>

<p>The insurance claim is filed, but the insurance company does not finalize the settlement until March, Year 2, when they agree to pay $450,000.</p>
</div>

<div style="margin-bottom:20px">
<h3>Journal Entry 1: Record the Destruction (Year 1)</h3>

<p>The asset must be removed from the books in the period it was destroyed. The loss is recognized immediately, even though the insurance proceeds are still uncertain. Loss recognition cannot be delayed waiting on the insurance company.</p>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:right">Debit</th>
			<th style="text-align:right">Credit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Loss from Fire (or Casualty Loss)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$400,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Accumulated Depreciation</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$100,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Building</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$500,000</td>
		</tr>
	</tbody>
</table>

<p><em>Notice that no insurance receivable is recorded. Even though the company expects to receive proceeds, the amount is not yet determinable. Recording an estimate would violate the gain contingency rule.</em></p>
</div>

<div style="margin-bottom:20px">
<h3>Journal Entry 2: Record the Insurance Recovery (Year 2)</h3>

<p>Once the insurance settlement is finalized in Year 2 and the proceeds become determinable, the gain is recognized. The amount of the gain equals whatever cash is received above and beyond the loss already recognized.</p>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:right">Debit</th>
			<th style="text-align:right">Credit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Cash</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$450,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Gain on Insurance Recovery</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$450,000</td>
		</tr>
	</tbody>
</table>

<p><em>The gain is recognized in Year 2, the period in which the proceeds became determinable, not in Year 1 when the asset was destroyed. The economic outcome (a $50,000 net positive: $450,000 received minus $400,000 book value) is split across two periods because of the contingency rule.</em></p>
</div>

<div style="margin-bottom:20px">
<h3>Compare: If the Asset Had Just Been Sold for Cash</h3>

<p>Now imagine the company simply sold the warehouse for $450,000 cash on December 1, Year 1, instead of having it destroyed. The accounting would have been completely different: a single journal entry, all in one period, with no contingency complications.</p>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:right">Debit</th>
			<th style="text-align:right">Credit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Cash</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$450,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Accumulated Depreciation</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$100,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Building</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$500,000</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Gain on Sale of Building</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$50,000</td>
		</tr>
	</tbody>
</table>

<p><em>One entry, one period, immediate recognition of the $50,000 net gain. There is no contingency because the cash and the disposal happen at the same time. This is straightforward disposal of long-lived assets accounting.</em></p>
</div>

<div style="background-color:#fffde7; border-left:5px solid #e8980a; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>The Critical Asymmetry</h3>

<p style="margin-left:0; margin-right:0"><strong>Loss contingencies:</strong> If probable and reasonably estimable, recognize them. Conservative principle says do not delay bad news.</p>

<p style="margin-left:0; margin-right:0"><strong>Gain contingencies:</strong> Do not recognize until realized or virtually certain. Conservative principle says do not anticipate gains. This is exactly why the insurance recovery cannot be accrued at the time of the fire, even when the company expects a payout.</p>
</div>

<div style="margin-bottom:20px">
<h3>Why Each Other Choice Misses the Mark</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Option</th>
			<th style="text-align:left">Analysis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Contingencies</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Correct. The insurance recovery is a gain contingency. Under ASC 450, gains are not recognized until realized or virtually certain, which is exactly why the recovery sits in the next period instead of being accrued at the time of the fire.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Estimates</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. Changes in estimates relate to revising prior assumptions about useful lives, salvage values, or bad debt percentages. Insurance recovery does not fit this framework.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Impairments</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. Impairment applies to assets the company still holds whose carrying value exceeds recoverable amount. A destroyed asset is being fully removed, not impaired.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Disposal of long-lived assets</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. The disposal accounting handles the removal of the destroyed asset itself, but the question is specifically about how to handle the insurance proceeds. The proceeds are governed by contingency rules, not disposal rules.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background:linear-gradient(to right, #68d3a7, #50b190); border-radius:8px; padding:15px">
<h3>Summary</h3>

<p>When a nonmonetary asset is destroyed in one period and the insurance proceeds are not determinable until a later period, the recovery is accounted for as a contingency. The destruction itself is recorded immediately by writing the asset off the books and recognizing a loss. The insurance recovery, however, is a gain contingency and cannot be recognized until the proceeds are realized or virtually certain. This contrasts sharply with a straightforward cash sale, where both sides of the transaction happen simultaneously in a single journal entry. The contingency framework is what forces the timing mismatch.</p>
</div>
</div>`,
    },
    {
      id: "121052",
      prompt: `Which of the following financial statements has been prepared under a special purpose framework?`,
      choices: [
        `The statement of financial position.`,
        `The statement of net assets.`,
        `The statement of assets and liabilities arising from cash transactions.`,
        `The statement of comprehensive income.`,
      ],
      correctIndex: 2,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; padding:20px">
<div style="background:linear-gradient(to right, #01506e, #207bb5); border-radius:10px 10px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">Identifying a Special Purpose Framework Statement</h2>
</div>

<div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Answer:</strong> <strong>Choice C</strong> is correct. The statement of assets and liabilities arising from cash transactions is prepared under a special purpose framework (specifically, the cash basis).</p>
</div>

<div style="margin-bottom:20px">
<h3>What is a Special Purpose Framework?</h3>

<p>A special purpose framework (SPF) is any financial reporting framework other than GAAP. The AICPA refers to these as &quot;other comprehensive bases of accounting&quot; (OCBOA). They are used when GAAP is either unnecessary or not practical for the entity&#39;s reporting needs.</p>

<p>The most common special purpose frameworks include:</p>

<ul>
	<li><strong>Cash basis</strong> and modified cash basis</li>
	<li><strong>Tax basis</strong> (financial statements prepared on the same basis as the entity&#39;s tax return)</li>
	<li><strong>Regulatory basis</strong> (used for filings with regulatory agencies)</li>
	<li><strong>Contractual basis</strong> (required by a specific contract)</li>
</ul>
</div>

<div style="margin-bottom:20px">
<h3>The Telltale Sign in Statement Titles</h3>

<p>Special purpose framework statements use distinctive titles that signal they are not prepared under GAAP. The phrase &quot;<strong>arising from cash transactions</strong>&quot; is a clear flag that the cash basis is being used. GAAP statement titles never include language like that.</p>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Framework</th>
			<th style="text-align:left">Typical Statement Title</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">GAAP (for-profit)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Balance Sheet or Statement of Financial Position</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">GAAP (not-for-profit)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Statement of Financial Position; Statement of Activities</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">GAAP (governmental)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Statement of Net Position</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Cash Basis (SPF)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Statement of Assets and Liabilities Arising from Cash Transactions</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Tax Basis (SPF)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Statement of Assets, Liabilities, and Equity - Income Tax Basis</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background-color:#fffde7; border-left:5px solid #e8980a; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Quick Recognition Tip</h3>

<p style="margin-left:0; margin-right:0">If a statement title includes phrases like &quot;arising from cash transactions,&quot; &quot;income tax basis,&quot; &quot;regulatory basis,&quot; or &quot;modified cash basis,&quot; it is a special purpose framework statement. GAAP statements use clean titles like balance sheet, income statement, or statement of comprehensive income without those qualifiers.</p>
</div>

<div style="margin-bottom:20px">
<h3>Answer Analysis</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Option</th>
			<th style="text-align:left">Analysis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">A. Statement of Financial Position</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This is a GAAP statement, commonly used by not-for-profit entities and as an alternative title to the balance sheet under GAAP.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">B. Statement of Net Assets</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This is a GAAP statement title. Variations of this name are used in governmental and not-for-profit reporting.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">C. Statement of Assets and Liabilities Arising from Cash Transactions</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Correct. The phrase &quot;arising from cash transactions&quot; identifies this as a cash basis statement, which is a special purpose framework.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">D. Statement of Comprehensive Income</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This is a core GAAP financial statement that reports net income and other comprehensive income items.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background:linear-gradient(to right, #68d3a7, #50b190); border-radius:8px; padding:15px">
<h3>Summary</h3>

<p>Choice C is correct. Special purpose framework statements use distinctive titles that signal a non-GAAP basis of accounting. The phrase &quot;arising from cash transactions&quot; is the giveaway that the cash basis is being used, which is one of the most common special purpose frameworks alongside tax basis, regulatory basis, and contractual basis.</p>
</div>
</div>`,
    },
    {
      id: "13050",
      prompt: `Texas Electronics resold specialized auto parts. The inventory was as follows:

	
		
			Date
			Description
			Units
			Cost per unit
			Total cost
			Balance
		
	
	
		
			January 1
			Beginning inventory
			100
			$15
			$1,500
			100
		
		
			April 10
			Purchase
			200
			$16
			$3,200
			300
		
		
			July 20
			Purchase
			300
			$17
			$5,100
			600
		
		
			September 21
			Sale
			550
			$50
			 
			 
		
		
			December 4
			Purchase
			400
			$18
			$7,200
			450
		
	

What amount would be the value of the inventory using the first-in, first-out (FIFO) method?`,
      choices: [
        `$7,650`,
        `$7,425`,
        `$7,950`,
        `$8,050`,
      ],
      correctIndex: 3,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; padding:20px">
<div style="background:linear-gradient(to right, #01506e, #207bb5); border-radius:10px 10px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">Ending Inventory Under FIFO</h2>
</div>

<div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Answer:</strong> <strong>$8,050</strong> is the value of ending inventory under the FIFO method.</p>
</div>

<div style="margin-bottom:20px">
<h3>FIFO Core Concept</h3>

<p>FIFO assumes the oldest units are sold first, leaving the most recently purchased units in ending inventory. When asked to value ending inventory under FIFO, work backwards from the most recent purchases until all the unsold units are accounted for.</p>
</div>

<div style="margin-bottom:20px">
<h3>Step 1: Determine Total Units Available and Units on Hand</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Date</th>
			<th style="text-align:left">Description</th>
			<th style="text-align:right">Units</th>
			<th style="text-align:right">Cost/Unit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">January 1</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Beginning inventory</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">100</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$15</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">April 10</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Purchase</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">200</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$16</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">July 20</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Purchase</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">300</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$17</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">September 21</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Sale</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">(550)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">N/A</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">December 4</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Purchase</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">400</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$18</td>
		</tr>
		<tr>
			<td colspan="2" style="border-color:#dddddd; border-style:solid; border-width:1px">Ending Units on Hand</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">450</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
	</tbody>
</table>

<p>Total units available: 100 + 200 + 300 + 400 = 1,000 units. Sold: 550 units. Ending inventory: 1,000 - 550 = 450 units.</p>
</div>

<div style="margin-bottom:20px">
<h3>Step 2: Apply FIFO by Working Backwards</h3>

<p>Under FIFO, ending inventory consists of the most recent purchases. Start with the most recent purchase (December 4) and work backwards until 450 units are accounted for.</p>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Layer</th>
			<th style="text-align:right">Units</th>
			<th style="text-align:right">Cost/Unit</th>
			<th style="text-align:right">Extended Cost</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">December 4 purchase (most recent)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">400</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$18</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$7,200</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">July 20 purchase (next most recent)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">50</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$17</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$850</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Ending Inventory (FIFO)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">450</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$8,050</td>
		</tr>
	</tbody>
</table>

<p>Take all 400 units from December 4 ($7,200), then pull 50 of the 300 units purchased on July 20 ($850). The 450 units total $8,050.</p>
</div>

<div style="background-color:#fffde7; border-left:5px solid #e8980a; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>FIFO Shortcut</h3>

<p style="margin-left:0; margin-right:0">For ending inventory under FIFO, ignore the date of the sale entirely and work only with the layers of beginning inventory and purchases. Start at the most recent layer and work back until you have enough units to match the ending count. The timing of the sale during the year does not affect the FIFO calculation because the oldest units are always assumed to flow out first.</p>
</div>

<div style="margin-bottom:20px">
<h3>Answer Analysis</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Option</th>
			<th style="text-align:left">Analysis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$7,650</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This results from valuing the 50-unit second layer at $16 (April 10 purchase) instead of $17 (July 20 purchase). FIFO requires working backwards from the most recent purchase, not skipping over the July purchase.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$7,425</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This number does not result from a clean FIFO calculation and likely uses an average or partial-layer error.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$7,950</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This applies LIFO logic instead of FIFO, valuing the 450 ending units using the oldest layers (100 at $15 + 200 at $16 + 150 at $17 = $7,950).</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$8,050</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Correct. 400 units at $18 ($7,200) plus 50 units at $17 ($850) equals $8,050.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background:linear-gradient(to right, #68d3a7, #50b190); border-radius:8px; padding:15px">
<h3>Summary</h3>

<p>Ending inventory under FIFO is $8,050. With 450 units on hand at year-end, the most recent purchase of 400 units at $18 covers the bulk of the balance, and the remaining 50 units are pulled from the next most recent layer at $17. FIFO assumes the oldest costs flow through cost of goods sold, leaving the newest costs sitting in ending inventory.</p>
</div>
</div>`,
    },
    {
      id: "14090",
      prompt: `At December 31, year 1, a company had an available-for-sale debt security with an amortized cost of $22,000 and a fair value of $24,000. The security has an allowance for credit loss balance of $500, which did not change during the year because there were no changes in the estimate of current expected credit losses. The investment pays $1,000 interest annually, on December 31. What amount should the company record as part of net income related to the investment for the year ended December 31, year 1?`,
      choices: [
        `$1,000`,
        `$2,000`,
        `$2,500`,
        `$3,000`,
      ],
      correctIndex: 0,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; padding:20px">
<div style="background:linear-gradient(to right, #01506e, #207bb5); border-radius:10px 10px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">Net Income from AFS Debt Security</h2>
</div>

<div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Answer:</strong> <strong>$1,000</strong> is the amount recorded as part of net income for the year.</p>
</div>

<div style="margin-bottom:20px">
<h3>Strategy: Sort Each Item by Where It Lands</h3>

<p>Available-for-sale debt securities can produce three different items each year: interest income, unrealized gains or losses from changes in fair value, and credit loss expense from changes in the allowance. Each item lands in a different place. The trick is knowing which ones hit net income and which ones bypass it through other comprehensive income.</p>

<div style="background-color:#f5f5f5; border-radius:8px; margin-bottom:15px; margin-left:0; margin-right:0; margin-top:15px; padding:15px">
<p style="margin-left:0; margin-right:0">Net Income + OCI = Comprehensive Income</p>
</div>
</div>

<div style="margin-bottom:20px">
<h3>Where Each Item Goes for AFS Debt Securities</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Item</th>
			<th style="text-align:right">Amount</th>
			<th style="text-align:left">Where it Lands</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Interest income (cash received)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$1,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Net Income</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Unrealized gain ($24,000 - $22,000)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$2,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">OCI (not Net Income)</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Credit loss expense (no change in allowance)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$0</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">No impact this year</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Total Impact on Net Income</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$1,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">&nbsp;</td>
		</tr>
	</tbody>
</table>
</div>

<div style="margin-bottom:20px">
<h3>Walking Through Each Component</h3>

<div style="background-color:#f0f7fa; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Interest Income: $1,000 (Net Income)</h4>

<p style="margin-left:0; margin-right:0">Interest income from any debt security flows through net income, regardless of classification. It typically appears in the non-operating income section alongside items like interest expense and gain/loss on disposal of fixed assets. This $1,000 is the only piece that affects net income for the year.</p>
</div>

<div style="background-color:#fdf6ea; border-left:5px solid #e8980a; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Unrealized Gain: $2,000 (OCI, not Net Income)</h4>

<p style="margin-left:0; margin-right:0">Fair value rose from $22,000 to $24,000, producing a $2,000 unrealized gain. For AFS debt securities, unrealized gains and losses from fair value changes go to OCI, not net income. They sit in accumulated other comprehensive income on the balance sheet until the security is sold or the gain is realized in a subsequent period.</p>
</div>

<div style="background-color:#ffebee; border-left:5px solid #f44336; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Credit Loss Expense: $0 (Allowance Did Not Change)</h4>

<p style="margin-left:0; margin-right:0">Credit losses on AFS debt securities run through net income via credit loss expense, but only when the allowance balance changes. The allowance stayed flat at $500 because there were no changes in the estimate of expected credit losses. With no change in the allowance, there is no entry to credit loss expense this year.</p>
</div>
</div>

<div style="margin-bottom:20px">
<h3>AFS vs. Trading: A Critical Distinction</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Item</th>
			<th style="text-align:left">AFS Debt Securities</th>
			<th style="text-align:left">Trading Securities</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Interest Income</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Net Income</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Net Income</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Unrealized Gains/Losses</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">OCI</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Net Income</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Realized Gains/Losses</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Net Income</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Net Income</td>
		</tr>
	</tbody>
</table>

<p>If this exact same security had been classified as trading instead of AFS, the answer would have been $3,000 ($1,000 interest plus the $2,000 unrealized gain, since trading unrealized gains hit net income).</p>
</div>

<div style="background-color:#fffde7; border-left:5px solid #e8980a; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Key Mental Model</h3>

<p style="margin-left:0; margin-right:0">For AFS debt securities, separate the changes in fair value (which go to OCI) from credit-related changes (which go to net income). The allowance for credit loss is the gatekeeper for net income exposure. As long as the allowance stays flat, the only piece touching net income is the interest income.</p>
</div>

<div style="margin-bottom:20px">
<h3>Carrying Value at Year-End</h3>

<p>While not part of the net income calculation, it is worth noting how the security appears on the balance sheet:</p>

<ul style="list-style-type:none">
	<li><strong>Fair value:</strong> <span style="color:#0099d4">$24,000</span></li>
	<li><strong>Less: Allowance for credit loss:</strong> <span style="color:#0099d4">($500)</span></li>
	<li>Carrying value of investment: <span style="color:#68d3a7">$23,500</span></li>
</ul>
</div>

<div style="margin-bottom:20px">
<h3>Answer Analysis</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Option</th>
			<th style="text-align:left">Analysis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$1,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Correct. Only the $1,000 of interest income flows through net income. The unrealized gain goes to OCI, and the allowance for credit loss did not change.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$2,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This is the unrealized gain from the change in fair value, which goes to OCI for AFS debt securities, not net income.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$2,500</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This combines the unrealized gain ($2,000) plus what appears to be half of the interest, or the unrealized gain plus the allowance. Neither path follows the AFS rules.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$3,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This would be the answer if the security were classified as trading, since both the $2,000 unrealized gain and the $1,000 interest income would hit net income. For AFS, the unrealized gain bypasses net income.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background:linear-gradient(to right, #68d3a7, #50b190); border-radius:8px; padding:15px">
<h3>Summary</h3>

<p>Only $1,000 of interest income hits net income for this AFS debt security. The $2,000 unrealized gain from the fair value increase flows through OCI rather than net income, and the allowance for credit loss did not change, so there is no credit loss expense for the year. This is the defining feature of AFS classification: fair value changes are parked in OCI until the security is sold, while interest income and changes in the credit loss allowance run through net income each period.</p>
</div>
</div>`,
    },
    {
      id: "18050",
      prompt: `A company has outstanding $1,000,000 face value, zero-coupon bonds. The unamortized discount on the bonds as of January 1, year 2 is $300,000. The unamortized discount is $230,000 as of December 31, year 2. The company uses the effective interest method of amortizing bond discounts and premiums. What is the effective interest rate on these bonds?`,
      choices: [
        `0%`,
        `7.0%`,
        `9.1%`,
        `10.0%`,
      ],
      correctIndex: 3,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; padding:20px">
<div style="background:linear-gradient(to right, #01506e, #207bb5); border-radius:10px 10px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">Effective Interest Rate on Zero-Coupon Bonds</h2>
</div>

<div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Answer:</strong> <strong>10.0%</strong> is the effective interest rate on these bonds.</p>
</div>

<div style="margin-bottom:20px">
<h3>Zero-Coupon Bonds: A Quick Refresher</h3>

<p>Zero-coupon bonds make no periodic interest payments. The stated rate is 0%, but investors still earn a return because the bonds are issued at a deep discount to face value. The entire return comes from the bond&#39;s price climbing from the discounted issue price up to face value at maturity.</p>

<p>Even though no cash interest is paid each period, the company still records interest expense each year. Under the effective interest method, the interest expense equals the carrying value of the bond multiplied by the effective interest rate.</p>

<div style="background-color:#f5f5f5; border-radius:8px; margin-bottom:15px; margin-left:0; margin-right:0; margin-top:15px; padding:15px">
<p style="margin-left:0; margin-right:0">Interest Expense = Carrying Value &times; Effective Interest Rate</p>
</div>
</div>

<div style="margin-bottom:20px">
<h3>Step 1: Determine the Carrying Value at the Beginning of the Year</h3>

<ul style="list-style-type:none">
	<li><strong>Face value:</strong> <span style="color:#0099d4">$1,000,000</span></li>
	<li><strong>Less: Unamortized discount (Jan 1):</strong> <span style="color:#0099d4">($300,000)</span></li>
	<li>Carrying value (Jan 1, Year 2): <span style="color:#68d3a7">$700,000</span></li>
</ul>
</div>

<div style="margin-bottom:20px">
<h3>Step 2: Calculate the Discount Amortization for the Year</h3>

<p>For a zero-coupon bond, the entire interest expense flows directly into discount amortization because there is no cash interest payment to absorb any of it. The change in the unamortized discount during the year equals the interest expense.</p>

<ul style="list-style-type:none">
	<li><strong>Unamortized discount (Jan 1):</strong> <span style="color:#0099d4">$300,000</span></li>
	<li><strong>Less: Unamortized discount (Dec 31):</strong> <span style="color:#0099d4">($230,000)</span></li>
	<li>Discount amortized = Interest expense: <span style="color:#68d3a7">$70,000</span></li>
</ul>
</div>

<div style="margin-bottom:20px">
<h3>Step 3: Solve for the Effective Interest Rate</h3>

<p>Now plug in the known values and solve:</p>

<div style="background-color:#f5f5f5; border-radius:8px; margin-bottom:15px; margin-left:0; margin-right:0; margin-top:15px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Interest Expense = Carrying Value &times; Effective Rate</strong></p>

<p style="margin-left:0; margin-right:0">$70,000 = $700,000 &times; Effective Rate</p>

<p style="margin-left:0; margin-right:0">Effective Rate = $70,000 &divide; $700,000 = <strong>10.0%</strong></p>
</div>
</div>

<div style="margin-bottom:20px">
<h3>Year-End Journal Entry</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:right">Debit</th>
			<th style="text-align:right">Credit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Interest Expense</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$70,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Discount on Bonds Payable</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$70,000</td>
		</tr>
	</tbody>
</table>

<p style="margin-left:0; margin-right:0"><em>This entry brings the unamortized discount down from $300,000 to $230,000, raising the carrying value from $700,000 to $770,000. Each year, the carrying value will continue climbing toward $1,000,000 face value, with interest expense growing as the carrying value grows.</em></p>
</div>

<div style="background-color:#fffde7; border-left:5px solid #e8980a; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Why Zero-Coupons Make This Calculation Cleaner</h3>

<p style="margin-left:0; margin-right:0">For a regular coupon bond, interest expense equals carrying value times the effective rate, but the cash interest paid (face &times; stated rate) absorbs part of that expense, leaving only the remainder to amortize the discount. With a zero-coupon bond, the stated rate is 0%, so no cash interest is paid. That means the entire interest expense becomes discount amortization, making the change in unamortized discount equal to interest expense for the period.</p>
</div>

<div style="margin-bottom:20px">
<h3>Answer Analysis</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Option</th>
			<th style="text-align:left">Analysis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">0%</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This is the stated rate (zero-coupon means 0% cash interest), but the effective rate captures the economic return from the discount, which is well above zero.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">7.0%</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This results from dividing the $70,000 interest expense by $1,000,000 face value rather than the $700,000 carrying value. The effective interest method always uses carrying value, not face.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">9.1%</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This results from using the ending carrying value of $770,000 ($70,000 &divide; $770,000) instead of the beginning carrying value. The effective rate is applied to the carrying value at the start of the period, not the end.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">10.0%</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Correct. $70,000 of interest expense divided by the $700,000 beginning carrying value produces the 10% effective rate.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background:linear-gradient(to right, #68d3a7, #50b190); border-radius:8px; padding:15px">
<h3>Summary</h3>

<p>The effective interest rate is 10%. With a zero-coupon bond, the entire interest expense becomes discount amortization, so the $70,000 reduction in unamortized discount during the year is the interest expense. Dividing that $70,000 by the $700,000 carrying value at the beginning of the year produces the 10% effective rate. The two key choices to get right are using the beginning carrying value (not the ending value or the face value) and recognizing that the change in the discount equals the full interest expense for a zero-coupon bond.</p>
</div>
</div>`,
    },
    {
      id: "118050",
      prompt: `At December 31, year 1, a company omitted the usual adjusting entry for the accrual of interest on notes payable. The note and the interest on the note will be paid on April 30, year 2. What is the effect of this error on the company's December 31, year 1, financial statements?`,
      choices: [
        `Net income is understated.`,
        `Current assets are overstated.`,
        `Interest expense is overstated.`,
        `Current liabilities are understated.`,
      ],
      correctIndex: 3,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; padding:20px">
<div style="background:linear-gradient(to right, #01506e, #207bb5); border-radius:10px 10px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">Effect of Omitting Interest Accrual</h2>
</div>

<div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Answer:</strong> <strong>Current liabilities are understated</strong> as a result of the omitted accrual entry.</p>
</div>

<div style="margin-bottom:20px">
<h3>Strategy: Compare What Should Have Happened to What Actually Happened</h3>

<p>Error analysis questions are easiest to solve by writing out the journal entry that should have been made, then identifying which accounts are off because the entry was missed. Every account that should have been debited or credited is now misstated, and the direction of the misstatement depends on which side of the entry was skipped.</p>
</div>

<div style="margin-bottom:20px">
<h3>The Entry That Was Omitted</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:right">Debit</th>
			<th style="text-align:right">Credit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Interest Expense</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$XXX</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Interest Payable</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$XXX</td>
		</tr>
	</tbody>
</table>

<p>The accrual would have hit two accounts: interest expense (debit) and interest payable (credit). Because the entry was never recorded, both accounts are now wrong on the December 31 financial statements.</p>
</div>

<div style="margin-bottom:20px">
<h3>Tracing Each Effect</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:left">Should Have Been</th>
			<th style="text-align:left">Actually Is</th>
			<th style="text-align:left">Effect</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Interest Expense</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Higher (debit recorded)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Lower (no entry made)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Understated</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Interest Payable (Liability)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Higher (credit recorded)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Lower (no entry made)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Understated</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Net Income</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Lower (interest expense reduces NI)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Higher (no expense recorded)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Overstated</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Notes Payable (principal)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Unchanged</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Unchanged</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">No effect</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background-color:#fffde7; border-left:5px solid #e8980a; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Important: Principal Is Not Affected</h3>

<p style="margin-left:0; margin-right:0">The accrual entry only addresses the interest portion of the note. The principal balance of the note payable is unchanged. The note remains on the books at its original face value, and any misstatement is in interest payable (a separate account), not the note payable account itself.</p>
</div>

<div style="margin-bottom:20px">
<h3>Walking Through Each Choice</h3>

<div style="background-color:#ffebee; border-left:5px solid #f44336; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Net income is understated</h4>

<p style="margin-left:0; margin-right:0">Wrong direction. Skipping interest expense means too little expense was recorded, which leaves net income artificially high. Net income is overstated, not understated.</p>
</div>

<div style="background-color:#ffebee; border-left:5px solid #f44336; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Current assets are overstated</h4>

<p style="margin-left:0; margin-right:0">The omitted entry doesn&#39;t touch any asset account. Interest expense is on the income statement, and interest payable is a liability. No assets are involved at all.</p>
</div>

<div style="background-color:#ffebee; border-left:5px solid #f44336; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Interest expense is overstated</h4>

<p style="margin-left:0; margin-right:0">Wrong direction. Skipping the debit to interest expense means the account is understated, not overstated.</p>
</div>

<div style="background-color:#e8f5e9; border-left:5px solid #4caf50; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Current liabilities are understated (Correct)</h4>

<p style="margin-left:0; margin-right:0">The credit to interest payable was never recorded, so this current liability is missing from the balance sheet. Interest payable is a current liability since the note and accrued interest will be paid in April Year 2, well within one year.</p>
</div>
</div>

<div style="margin-bottom:20px">
<h3>Answer Analysis</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Option</th>
			<th style="text-align:left">Analysis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Net income is understated</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. Net income is actually overstated because interest expense was not recorded.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Current assets are overstated</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. The omitted entry has no impact on asset accounts.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Interest expense is overstated</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. Interest expense is understated because the debit was never made.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Current liabilities are understated</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Correct. The missing credit to interest payable means a current liability is missing from the balance sheet.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background:linear-gradient(to right, #68d3a7, #50b190); border-radius:8px; padding:15px">
<h3>Summary</h3>

<p>Omitting the year-end interest accrual means both interest expense (a debit) and interest payable (a credit) are missing from the books. Interest expense is understated, which makes net income overstated. Interest payable is understated, which makes current liabilities understated. The principal of the note payable is not affected, since the omitted entry only deals with the interest portion. Of the four answer choices, only &quot;current liabilities are understated&quot; correctly captures one of these effects.</p>
</div>
</div>`,
    },
    {
      id: "116050",
      prompt: `Each of the following statements is correct regarding when an enterprise is initially recognizing the financial statement effects of a tax position using the more-likely-than-not criterion of uncertain income tax positions, except:`,
      choices: [
        `A legal tax opinion received from a third party is required support for an entity's tax position.`,
        `It shall be presumed that the tax position will be examined by the relevant taxing authority that has full knowledge of all relevant information.`,
        `Technical merits of a tax position derive from sources of authorities in the tax law and their applicability to the facts and circumstances of the tax position.`,
        `Each tax position must be evaluated without consideration of the possibility of offset or aggregation with other positions.`,
      ],
      correctIndex: 0,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; padding:20px">
<div style="background:linear-gradient(to right, #01506e, #207bb5); border-radius:10px 10px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">Recognizing Uncertain Tax Positions</h2>
</div>

<div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Answer:</strong> <strong>Choice A</strong> is correct (it is the exception). A legal tax opinion from a third party is NOT required to support an entity&#39;s tax position.</p>
</div>

<div style="margin-bottom:20px">
<h3>The More-Likely-Than-Not Threshold</h3>

<p>An uncertain tax position is any position taken on a tax return where the law is not 100% clear on whether the deduction, credit, or treatment will be allowed by the taxing authority. ASC 740 requires a two-step evaluation:</p>

<ol>
	<li><strong>Recognition:</strong> The position can be recognized only if it is more likely than not (greater than 50% probability) to be sustained on its technical merits if examined.</li>
	<li><strong>Measurement:</strong> If recognized, the benefit is measured at the largest amount that has a more-than-50% chance of being realized upon settlement.</li>
</ol>

<p>The question focuses on the recognition step and the rules that govern that initial assessment.</p>
</div>

<div style="margin-bottom:20px">
<h3>The Real Rules for Recognition</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left; width:30%">Rule</th>
			<th style="text-align:left">What it Requires</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Presumption of examination</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Assume the taxing authority will examine the position with full knowledge of all relevant information. The entity cannot factor in the chance of avoiding audit altogether.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Technical merits only</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">The evaluation rests on the strength of the position under the actual tax law (statutes, regulations, court cases, IRS rulings) applied to the specific facts. Audit lottery considerations are not allowed.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">No offsetting</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Each tax position is evaluated on its own. A weak position cannot be propped up by aggregating it with stronger positions.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="margin-bottom:20px">
<h3>Why Choice A is the Exception</h3>

<p>The standard does not require management to obtain a third-party legal tax opinion to support a tax position. Management evaluates the technical merits using whatever evidence is appropriate, which may include:</p>

<ul>
	<li>Internal tax department analysis of the relevant law</li>
	<li>Court cases and IRS rulings on similar facts</li>
	<li>Statutes, regulations, and legislative history</li>
	<li>External advice (when management chooses to seek it)</li>
</ul>

<p>A third-party legal opinion can certainly strengthen the support for a position, but it is not a requirement under ASC 740. Management has flexibility in deciding what evidence is sufficient to support its more-likely-than-not conclusion. Requiring an external legal opinion for every uncertain position would impose massive costs on companies and is not what the standard intends.</p>
</div>

<div style="background-color:#fffde7; border-left:5px solid #e8980a; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>The Audit Lottery Concept</h3>

<p style="margin-left:0; margin-right:0">The presumption of examination is meant to remove the &quot;audit lottery&quot; from the analysis. Without this rule, a company could justify aggressive tax positions by reasoning that the IRS probably won&#39;t examine the return. ASC 740 closes that door by forcing companies to evaluate every position as if it will be examined by an authority that already knows everything relevant about the transaction. The only question becomes: would the position survive on its technical merits?</p>
</div>

<div style="margin-bottom:20px">
<h3>Answer Analysis</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Option</th>
			<th style="text-align:left">Analysis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">A. Legal tax opinion required</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Correct (the exception). ASC 740 does not require a third-party legal opinion. Management may use various forms of evidence to support its evaluation of the technical merits.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">B. Presumption of examination</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">This is a real rule. Assume the taxing authority will examine the position and will know all relevant information. No audit lottery.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">C. Technical merits from tax law</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">This is a real rule. The evaluation must be grounded in actual tax law authorities applied to the facts.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">D. No offset or aggregation</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">This is a real rule. Each tax position stands or falls on its own merits, without being supported by other positions.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background:linear-gradient(to right, #68d3a7, #50b190); border-radius:8px; padding:15px">
<h3>Summary</h3>

<p>Choice A is the exception. ASC 740 sets up a structured evaluation for uncertain tax positions, but it does not require a third-party legal opinion. Management has flexibility to use whatever evidence is appropriate to evaluate the technical merits. The other three statements all reflect real requirements of the standard: assume the position will be examined, ground the analysis in actual tax law, and evaluate each position individually without offsetting against other positions.</p>
</div>
</div>`,
    },
    {
      id: "123050",
      prompt: `On December 31, year 1, a nongovernmental, not-for-profit entity's trial balance included liabilities totaling $5,000,000 before considering the following items, neither of which has yet been recorded in the trial balance:

	On May 1, year 1, the entity received the proceeds from a $1,500,000 tax-exempt bond issued by the city where it is located. The entity is the obligor responsible for repayment of the bond. The cash received was used to pay construction expenditures for a new building, and the revenue collected from its operation will pay the annual interest and bond principal at maturity.

	On December 1, year 1, the stipulations set forth in a $600,000 fully funded conditional grant were not achieved. As of December 31, year 1, the entity had received no directions from the donor regarding the funds previously received.

What total liability amount should be reported in the entity's statement of financial position for December 31, year 1?`,
      choices: [
        `$5,000,000`,
        `$5,600,000`,
        `$6,500,000`,
        `$7,100,000`,
      ],
      correctIndex: 3,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:800px; padding:20px">
<div style="background:linear-gradient(to right, #01506e, #207bb5); border-radius:10px 10px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">Total Liabilities for Not-for-Profit Entity</h2>
</div>

<div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>Answer:</strong> <strong>$7,100,000</strong> is the total liability amount reported on the December 31, Year 1 statement of financial position.</p>
</div>

<div style="background-color:#fff3e0; border-left:5px solid #e8980a; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Heads Up Before You Read Further</h3>

<p style="margin-left:0; margin-right:0">This question covers a fairly uncommon scenario in NFP accounting. Conduit debt issued through a municipality and conditional grants that fail to meet their conditions both come up infrequently in practice. The framework still matters for the exam, but do not invest energy memorizing every nuance. Understanding the core principle of when a not-for-profit must report a liability is the goal here.</p>
</div>

<div style="margin-bottom:20px">
<h3>The Underlying Principle</h3>

<p>A not-for-profit reports a liability for any obligation it is actually responsible for repaying, plus refundable advances when conditions on a grant have not been satisfied. Both items in this question fall into one of those two categories.</p>

<p>Starting point from the trial balance:</p>

<ul style="list-style-type:none">
	<li><strong>Existing trial balance liabilities:</strong> <span style="color:#0099d4">$5,000,000</span></li>
</ul>
</div>

<div style="margin-bottom:20px">
<h3>Item 1: Tax-Exempt Bond Proceeds ($1,500,000)</h3>

<p>The bond was issued by the city, but the not-for-profit received the proceeds and used them to construct its building. The facts state that revenue from the building&#39;s operations will pay both the annual interest and the principal at maturity.</p>

<p>That language is the giveaway. Even though the city&#39;s name is on the bond, the entity is the one effectively on the hook for repayment. When a not-for-profit is responsible for paying back debt, it reports a bond payable on its statement of financial position regardless of who technically issued the bond.</p>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:right">Debit</th>
			<th style="text-align:right">Credit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Cash</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$1,500,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Bonds Payable</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$1,500,000</td>
		</tr>
	</tbody>
</table>
</div>

<div style="margin-bottom:20px">
<h3>Item 2: Conditional Grant Not Achieved ($600,000)</h3>

<p>The entity received a fully funded conditional grant of $600,000, but the conditions were not achieved as of December 1, Year 1. For a conditional contribution, revenue cannot be recognized until the conditions are substantially met. Cash received in advance sits on the balance sheet as a <strong>refundable advance</strong>, which is a liability.</p>

<p>The fact that the donor has not yet provided instructions about returning the funds does not change anything. The entity has not satisfied the conditions, so the $600,000 must remain a liability until the donor either releases the funds or directs them to be returned.</p>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Account</th>
			<th style="text-align:right">Debit</th>
			<th style="text-align:right">Credit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Cash</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$600,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Refundable Advance (Liability)</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$600,000</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background-color:#fffde7; border-left:5px solid #e8980a; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Quick Reminder: Conditional vs. Restricted</h3>

<p style="margin-left:0; margin-right:0"><strong>Conditional contribution:</strong> Includes a barrier (such as a measurable performance requirement) the recipient must overcome. Cash received in advance is a liability until conditions are met.</p>

<p style="margin-left:0; margin-right:0"><strong>Restricted contribution:</strong> Donor stipulates how the funds may be used, but no barrier exists. Recognized immediately as revenue with donor restrictions, not as a liability.</p>
</div>

<div style="margin-bottom:20px">
<h3>Total Liability Calculation</h3>

<ul style="list-style-type:none">
	<li><strong>Trial balance liabilities:</strong> <span style="color:#0099d4">$5,000,000</span></li>
	<li><strong>Plus: Bonds payable:</strong> <span style="color:#0099d4">$1,500,000</span></li>
	<li><strong>Plus: Refundable advance:</strong> <span style="color:#0099d4">$600,000</span></li>
	<li>Total Liabilities: <span style="color:#68d3a7">$7,100,000</span></li>
</ul>
</div>

<div style="margin-bottom:20px">
<h3>Answer Analysis</h3>

<table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%">
	<thead>
		<tr>
			<th style="text-align:left">Option</th>
			<th style="text-align:left">Analysis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$5,000,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This ignores both the bond obligation and the refundable advance from the conditional grant.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$5,600,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This includes only the conditional grant liability but excludes the bond liability.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$6,500,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Incorrect. This includes only the bond liability but excludes the conditional grant liability.</td>
		</tr>
		<tr>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">$7,100,000</td>
			<td style="border-color:#dddddd; border-style:solid; border-width:1px">Correct. Includes the original liabilities, the bond payable, and the refundable advance from the failed conditional grant.</td>
		</tr>
	</tbody>
</table>
</div>

<div style="background:linear-gradient(to right, #68d3a7, #50b190); border-radius:8px; padding:15px">
<h3>Summary</h3>

<p>Total liabilities are $7,100,000. Although this scenario combines two relatively niche NFP topics, the underlying principle is straightforward: report a liability when the entity is on the hook for repayment, and report a refundable advance when conditional grant conditions have not been satisfied. Both items add to the existing $5,000,000 to reach the final answer.</p>
</div>
</div>`,
    },
  ],
};
