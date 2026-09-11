import type { Quiz } from "../types";

export const incomeTaxesQuiz: Quiz = {
  key: "income-taxes",
  title: "Accounting for Income Taxes",
  subtitle: "Accounting for Income Taxes",
  discipline: "intermediate",
  course: "intermediate",
  questions: [
    {
      id: "5183",
      prompt: `When accounting for income taxes, a temporary difference occurs in which of the following scenarios?`,
      choices: [
        `An item is included in the calculation of net income, but is neither taxable nor deductible.`,
        `An item is included in the calculation of net income in one year and in taxable income in a different year.`,
        `An item is no longer taxable due to a change in the tax law.`,
        `The accrual method of accounting is used.`,
      ],
      correctIndex: 1,
      explanation: `<h3 class="exp-title">Temporary vs. Permanent Differences in Tax Accounting</h3><p>Answer Analysis</p><p>Correct Answer: B. An item is included in the calculation of net income in one year and in taxable income in a different year.</p><p>Incorrect Answers: A. An item is included in the calculation of net income, but is neither taxable nor deductible.</p><p>C. An item is no longer taxable due to a change in the tax law.</p><p>D. The accrual method of accounting is used.</p><p>Explanation</p><p>Temporary Differences</p><p>A temporary difference occurs when an item affects taxable income and accounting income in different periods. These differences eventually reverse over time, leading to the recognition of deferred tax assets or liabilities.</p><p>When an item is included in net income in one year but in taxable income in a different year, it creates a timing difference that will eventually reverse—the very definition of a temporary difference.</p><p>Permanent Differences</p><p>Permanent differences are items that affect either accounting income or taxable income, but never both. These differences never reverse.</p><p>Option A describes a permanent difference—an item included in net income but never in taxable income (or vice versa).</p><p>Option C also describes a permanent difference—when tax law changes make an item no longer taxable.</p><p>Example of Temporary Difference</p><p>Depreciation Example: A company purchases equipment for $100,000. For financial reporting, it uses straight-line depreciation over 5 years ($20,000 per year). For tax purposes, it uses accelerated depreciation allowed by tax law ($40,000 in year 1).</p><p>Year<br>Book Depreciation<br>Tax Depreciation<br>Temporary Difference</p><p>| Year 1<br>| $20,000<br>| $40,000<br>| $20,000</p><p>This creates a deferred tax liability in Year 1, as the company pays less tax now but will pay more tax in the future when the temporary difference reverses.</p><p>Journal Entry (assuming 25% tax rate):</p><p>Account<br>Debit<br>Credit</p><p>| Income Tax Expense<br>| $5,000<br>|</p><p>| Deferred Tax Liability<br>|<br>| $5,000</p><p>Summary</p><p>Temporary differences occur when an item affects book income and taxable income in different periods (Option B).</p><p>Permanent differences affect either book income or taxable income, but never both (Options A and C).</p><p>Temporary differences result in deferred tax assets or liabilities.</p><p>The accrual method of accounting (Option D) is not specifically related to temporary differences—both cash and accrual basis taxpayers can have temporary differences.</p>`,
    },
    {
      id: "8849",
      prompt: `Each of the following items is a permanent difference in accounting for income taxes, except`,
      choices: [
        `Interest earned on municipal bond investments.`,
        `The cost of premiums paid on life insurance policies of key officers for which the company is the beneficiary.`,
        `Changes in the allowance for doubtful accounts.`,
        `Fines paid for a tax law violation.`,
      ],
      correctIndex: 2,
      explanation: `<h3 class="exp-title">Permanent vs. Temporary Tax Differences</h3><p>Overview: When preparing financial statements, companies must account for differences between accounting rules (GAAP) and tax regulations. These differences fall into two categories: permanent differences that permanently affect book income but never affect taxable income, and temporary differences that affect book and taxable income at different times but eventually reverse.</p><p>Key Concepts</p><p>Book Income vs. Taxable Income</p><p>Book Income (Accounting Income): Determined using GAAP principles, reported on financial statements</p><p>Taxable Income: Determined using tax regulations, reported on tax returns</p><p>These differences create either permanent or temporary disparities</p><p>Tax Implications</p><p>Effective Tax Rate: Permanent differences affect the effective tax rate</p><p>Deferred Taxes: Temporary differences create deferred tax assets or liabilities</p><p>Tax Reconciliation: Companies must reconcile book and taxable income</p><p>Answer Analysis</p><p>A. Interest on municipal bonds - Incorrect</p><p>This is a permanent difference because it is recognized as income for financial reporting purposes but is permanently excluded from taxable income. Municipal bond interest is tax-exempt by law and will never be taxed, creating a permanent difference between book and taxable income.</p><p>B. Life insurance premiums for key officers (company is beneficiary) - Incorrect</p><p>This is a permanent difference because these premiums are recognized as expenses for financial reporting but are specifically disallowed as deductions for tax purposes under IRC Section 264. Since these premiums will never be deductible for tax purposes, the difference is permanent.</p><p>C. Changes in the allowance for doubtful accounts - Correct</p><p>This is a temporary difference because under GAAP, companies estimate and recognize bad debt expense before accounts are actually uncollectible, creating an allowance. For tax purposes, bad debts are only deductible when they are specifically written off. This timing difference will reverse when specific accounts are written off, making it temporary.</p><p>D. Fines for tax law violations - Incorrect</p><p>This is a permanent difference because fines and penalties are recognized as expenses for financial reporting but are specifically disallowed as deductions for tax purposes under IRC Section 162(f). These expenses will never be tax deductible, making the difference permanent.</p><p>Permanent vs. Temporary Differences</p><p>Type<br>Definition<br>Examples<br>Financial Impact</p><p>| Permanent Differences<br>| Items that affect book income but never affect taxable income (or vice versa)<br>|</p><p>Municipal bond interest</p><p>Life insurance premiums (company as beneficiary)</p><p>Fines and penalties</p><p>50% of meals and entertainment</p><p>Lobbying expenses</p><p>Goodwill impairment</p><p>|</p><p>Affects effective tax rate</p><p>No deferred tax assets/liabilities</p><p>Permanent impact on ETR</p><p>Disclosed in tax footnote</p><p>| Temporary Differences<br>| Items that affect book and taxable income at different times and reverse in future periods<br>|</p><p>Allowance for doubtful accounts</p><p>Depreciation differences (MACRS vs. straight-line)</p><p>Warranty expense accruals</p><p>Deferred compensation</p><p>Installment sales</p><p>Net operating losses</p><p>|</p><p>Creates deferred tax assets/liabilities</p><p>Temporary impact on ETR</p><p>Reported on balance sheet</p><p>Reverses over time</p><p>Journal Entry Examples</p><p>Temporary Difference: Allowance for Doubtful Accounts</p><p>Book Entry (When estimating bad debts):</p><p>| Bad Debt Expense<br>| 10,000<br>|</p><p>| Allowance for Doubtful Accounts<br>|<br>| 10,000</p><p>The expense is recognized on the books immediately.</p><p>Tax Treatment:</p><p>For tax purposes, no deduction is allowed until the specific account is actually written off.</p><p>Deferred Tax Asset Entry:</p><p>| Deferred Tax Asset<br>| 2,500<br>|</p><p>| Income Tax Expense<br>|<br>| 2,500</p><p>Assuming a 25% tax rate, this creates a deferred tax asset of $2,500 ($10,000 × 25%).</p><p>Permanent Difference: Municipal Bond Interest</p><p>Book Entry (When recording interest revenue):</p><p>| Cash<br>| 5,000<br>|</p><p>| Interest Revenue<br>|<br>| 5,000</p><p>The revenue is recognized on the books.</p><p>Tax Treatment:</p><p>This interest is excluded from taxable income permanently.</p><p>Tax Impact:</p><p>| Book Income<br>| $100,000</p><p>| Add: Expenses not deductible for tax<br>| $0</p><p>| Less: Tax-exempt interest<br>| ($5,000)</p><p>| Taxable Income<br>| $95,000</p><p>No deferred tax asset or liability is created. The effective tax rate is permanently reduced.</p><p>Practical Example: Impact on Financial Statements</p><p>Assume a company has the following information for the year:</p><p>Pretax book income: $100,000</p><p>Municipal bond interest income: $5,000 (permanent difference)</p><p>Estimated warranty expense: $8,000 (temporary difference - not deductible until warranty claims are paid)</p><p>Tax rate: 25%</p><p>Tax Calculation</p><p>Item<br>Amount</p><p>| Book Income<br>| $100,000</p><p>| Less: Municipal Bond Interest (permanent)<br>| ($5,000)</p><p>| Add: Warranty Expense (temporary)<br>| $8,000</p><p>| Taxable Income<br>| $103,000</p><p>| Current Tax Expense (25% × $103,000)<br>| $25,750</p><p>Financial Statement Impact</p><p>Income Statement Effects:</p><p>| Current Tax Expense<br>| $25,750</p><p>| Deferred Tax Benefit (25% × $8,000)<br>| ($2,000)</p><p>| Total Income Tax Expense<br>| $23,750</p><p>Balance Sheet Effects:</p><p>Deferred Tax Asset created: $2,000</p><p>Effective Tax Rate: 23.75% ($23,750 ÷ $100,000)</p><p>Lower than statutory rate (25%) due to permanent difference</p><p>Key Takeaways</p><p>Permanent differences:</p><p>Never reverse over time</p><p>Affect effective tax rate permanently</p><p>Do not create deferred tax assets or liabilities</p><p>Examples: municipal bond interest, fines, penalties, life insurance premiums</p><p>Temporary differences:</p><p>Timing issues that reverse in future periods</p><p>Create deferred tax assets (future tax savings) or liabilities (future tax obligations)</p><p>Same total expense/income over time in both systems</p><p>Examples: depreciation, bad debt expense, warranty costs, deferred revenue</p><p>Understanding these differences is crucial for effective tax planning and accurate financial reporting</p>`,
    },
    {
      id: "5180",
      prompt: `Lamb Corp. has taxable income of $240,000 and depreciation expense for tax purposes of $50,000 greater than financial reporting purposes. Lamb has a tax rate of 30 percent, and no other differences exist. Which of the following entries should Lamb make for deferred taxes?`,
      choices: [
        `$87,000 deferred tax asset.`,
        `$72,000 deferred tax asset.`,
        `$57,000 deferred tax liability.`,
        `$15,000 deferred tax liability.`,
      ],
      correctIndex: 3,
      explanation: `<h3 class="exp-title">Deferred Tax Liability Analysis</h3><p>Answer Analysis</p><p>The correct answer is: $15,000 deferred tax liability</p><p>$87,000 deferred tax asset - Incorrect</p><p>$72,000 deferred tax asset - Incorrect</p><p>$57,000 deferred tax liability - Incorrect</p><p>$15,000 deferred tax liability - Correct</p><p>Explanation</p><p>This problem involves calculating deferred taxes based on a temporary difference between tax and financial reporting for depreciation.</p><p>Key Information</p><p>Taxable income: $240,000</p><p>Tax depreciation exceeds book depreciation by $50,000</p><p>Tax rate: 30%</p><p>When tax depreciation is higher than book depreciation, it creates a future taxable amount, which results in a deferred tax liability. This happens because:</p><p>The company is deducting more depreciation expense for tax purposes now</p><p>This reduces current tax payments</p><p>In the future, the company will have less depreciation to deduct for tax purposes</p><p>This will result in higher future tax payments</p><p>The calculation is straightforward: Temporary Difference × Tax Rate = Deferred Tax Amount</p><p>$50,000 × 30% = $15,000 deferred tax liability</p><p>Journal Entry</p><p>The journal entry to record this deferred tax liability would be:</p><p>Account<br>Debit<br>Credit</p><p>| Income Tax Expense<br>| $15,000<br>|</p><p>| Deferred Tax Liability<br>|<br>| $15,000</p><p>Note: This journal entry records only the deferred portion of the tax expense. The current tax expense would be recorded separately.</p><p>Summary</p><p>When tax depreciation exceeds book depreciation, it creates a deferred tax liability. This temporary difference of $50,000 multiplied by the 30% tax rate results in a $15,000 deferred tax liability. This liability represents future taxes that will be paid when the temporary difference reverses.</p><p>A deferred tax liability represents a future obligation to pay taxes due to current tax benefits received, such as accelerated depreciation for tax purposes.</p>`,
    },
    {
      id: "5181",
      prompt: `Which of the following circumstances would result in a deferred tax asset for the current year?`,
      choices: [
        `Expenses that are recognized in financial income this year and deductible next year.`,
        `Expenses that are deductible this year and recognized in financial income next year.`,
        `Revenues that are recognized in financial income this year and taxable next year.`,
        `Revenues that are recognized in financial income this year but are not subject to taxation.`,
      ],
      correctIndex: 0,
      explanation: `<h3 class="exp-title">Deferred Tax Asset Analysis</h3><p>Correct Answer</p><p>✓ Expenses that are recognized in financial income this year and deductible next year.</p><p>Explanation</p><p>A deferred tax asset arises when there is a temporary difference that will result in a future tax benefit. This occurs when:</p><p>✓ Book expenses are recognized before tax expenses</p><p>✓ Tax revenues are recognized before book revenues</p><p>When expenses are recognized in financial income this year but are not tax-deductible until next year, the company pays more tax now than it would based on financial accounting. This creates a future tax benefit (deferred tax asset).</p><p>Incorrect Options Analysis</p><p>✗ Expenses that are deductible this year and recognized in financial income next year: This creates a deferred tax liability, not an asset, because the company receives a tax benefit earlier than it&#x27;s recognized in book income.</p><p>✗ Revenues that are recognized in financial income this year and taxable next year: This also creates a deferred tax liability because the company is deferring tax payment on revenue already recognized in books.</p><p>✗ Revenues that are recognized in financial income this year but are not subject to taxation: This represents a permanent difference, not a temporary difference, so it doesn&#x27;t create a deferred tax asset.</p><p>Journal Entry Example</p><p>When an expense is recognized in financial income this year but deductible for tax purposes next year:</p><p>Account<br>Debit<br>Credit</p><p>| Expense (e.g., Warranty Expense)<br>| 10,000<br>|</p><p>| Warranty Liability<br>|<br>| 10,000</p><p>| Deferred Tax Asset<br>| 2,500<br>|</p><p>| Income Tax Expense<br>|<br>| 2,500</p><p>Assuming a 25% tax rate, the $10,000 expense creates a $2,500 deferred tax asset.</p><p>Summary of Temporary vs. Permanent Differences</p><p>Type<br>Effect<br>Example</p><p>| Deferred Tax Asset<br>| Future tax benefit<br>| Warranty expense, some bad debt allowances</p><p>| Deferred Tax Liability<br>| Future tax payment<br>| Accelerated depreciation for tax purposes</p><p>| Permanent Difference<br>| No future tax impact<br>| Tax-exempt interest, non-deductible expenses</p><p>Key Takeaway</p><p>Deferred tax assets arise when book expenses precede tax expenses, creating a future tax benefit. This timing difference is temporary and will reverse in future periods.</p>`,
    },
    {
      id: "5176",
      prompt: `For the year ended December 31, Tyre Co. reported pretax financial statement income of $750,000. Its taxable income was $650,000. The difference is due to accelerated depreciation for income tax purposes. Tyre's effective income tax rate is 30%, and Tyre made estimated tax payments during the year of $90,000. What amount should Tyre report as current income tax expense on December 31?`,
      choices: [
        `$105,000`,
        `$135,000`,
        `$195,000`,
        `$225,000`,
      ],
      correctIndex: 2,
      explanation: `<h3 class="exp-title">Current Income Tax Expense Calculation</h3><p>Question Analysis</p><p>The question asks for the current income tax expense that Tyre Co. should report on December 31.</p><p>Given information:</p><p>Pretax financial statement income: $750,000</p><p>Taxable income: $650,000</p><p>Effective income tax rate: 30%</p><p>Estimated tax payments: $90,000</p><p>Solution Approach</p><p>To calculate current income tax expense, we need to apply the tax rate to the taxable income:</p><p>Current Tax Expense = Taxable Income × Current Tax Rate</p><p>Current Tax Expense = $650,000 × 30% = $195,000</p><p>Journal Entries</p><p>When recording the income tax expense and liability, Tyre Co. would make the following journal entry:</p><p>Account<br>Debit<br>Credit</p><p>| Income Tax Expense<br>| $195,000<br>|</p><p>| Income Taxes Payable<br>|<br>| $105,000</p><p>| Prepaid Income Taxes<br>|<br>| $90,000</p><p>Note: The $90,000 previously paid as estimated taxes reduces the amount still payable.</p><p>Answer Evaluation</p><p>$105,000 - Incorrect (This is the remaining taxes payable after estimated payments)</p><p>$135,000 - Incorrect (This appears to be a calculation error)</p><p>$195,000 - Correct (Current tax expense is taxable income × tax rate)</p><p>$225,000 - Incorrect (This would be pretax financial income × tax rate)</p><p>Key Takeaways</p><p>Current income tax expense is based on taxable income, not financial statement income.</p><p>The formula is: Current Tax Expense = Taxable Income × Tax Rate</p><p>Tax payments made during the year do not affect the expense calculation — they only reduce the tax liability.</p><p>The difference between pretax financial income and taxable income ($100,000) is due to temporary differences from accelerated depreciation.</p>`,
    },
    {
      id: "5178",
      prompt: `Orleans Co., a cash basis taxpayer, prepares accrual basis financial statements. In its Year 2 balance sheet, Orleans' deferred income tax liabilities increased compared to Year 1. Which of the following changes would cause this increase in deferred income tax liabilities?

I. An increase in prepaid insurance.

II. An increase in rent receivable.

III. An increase in warranty obligations.`,
      choices: [
        `I only.`,
        `I and II.`,
        `II and III.`,
        `III only.`,
      ],
      correctIndex: 1,
      explanation: `<h3 class="exp-title">Deferred Tax Liabilities Analysis</h3><p>Understanding the Question</p><p>We need to determine which changes would cause an increase in deferred income tax liabilities for a cash basis taxpayer that prepares accrual basis financial statements.</p><p>Options:</p><p>I. An increase in prepaid insurance.</p><p>II. An increase in rent receivable.</p><p>III. An increase in warranty obligations.</p><p>Answer choices:</p><p>I only.</p><p>I and II.</p><p>II and III.</p><p>III only.</p><p>Conceptual Background</p><p>Deferred tax liabilities arise when taxable income is less than book income, or when tax deductions are taken earlier than book expenses are recognized. For a cash basis taxpayer:</p><p>Deferred tax liabilities increase when the company gets tax deductions now but recognizes expenses later for book purposes</p><p>Deferred tax liabilities increase when the company recognizes revenue on books now but doesn&#x27;t pay tax on it until later</p><p>Analysis of Each Scenario</p><p>I. Increase in Prepaid Insurance</p><p>When prepaid insurance increases:</p><p>Journal Entry (Book)</p><p>Account<br>Debit<br>Credit</p><p>| Prepaid Insurance<br>| X<br>|</p><p>| Cash<br>|<br>| X</p><p>Tax Impact: As a cash basis taxpayer, Orleans gets the tax deduction immediately when cash is paid, but for book purposes, the expense will be recognized later as the insurance is used up. This creates a deferred tax liability.</p><p>Result: Increases deferred tax liability ✓</p><p>II. Increase in Rent Receivable</p><p>Journal Entry (Book)</p><p>Account<br>Debit<br>Credit</p><p>| Rent Receivable<br>| X<br>|</p><p>| Rent Revenue<br>|<br>| X</p><p>Tax Impact: For book purposes, revenue is recognized when earned, but as a cash basis taxpayer, Orleans won&#x27;t pay tax on this revenue until cash is received. This creates a deferred tax liability.</p><p>Result: Increases deferred tax liability ✓</p><p>III. Increase in Warranty Obligations</p><p>Journal Entry (Book)</p><p>Account<br>Debit<br>Credit</p><p>| Warranty Expense<br>| X<br>|</p><p>| Warranty Payable/Liability<br>|<br>| X</p><p>Tax Impact: For book purposes, warranty expense is recognized now, but as a cash basis taxpayer, Orleans won&#x27;t get the tax deduction until cash is paid out to satisfy warranty claims. This creates a deferred tax asset, not a liability.</p><p>Result: Does NOT increase deferred tax liability ✗</p><p>Conclusion</p><p>Based on our analysis:</p><p>Option I (Prepaid Insurance): Increases deferred tax liability</p><p>Option II (Rent Receivable): Increases deferred tax liability</p><p>Option III (Warranty Obligations): Creates a deferred tax asset, not a liability</p><p>The correct answer is: I and II</p><p>Key Takeaway</p><p>When analyzing deferred tax liabilities for a cash basis taxpayer with accrual basis financial statements:</p><p>Deferred tax liabilities increase when tax deductions are taken earlier than book expenses (like prepaid insurance)</p><p>Deferred tax liabilities increase when book revenue is recognized earlier than taxable revenue (like rent receivable)</p><p>Deferred tax assets (not liabilities) are created when book expenses are recognized earlier than tax deductions (like warranty obligations)</p>`,
    },
    {
      id: "8517",
      prompt: `Dunn Co.'s income statement reported $90,000 income before provision for income taxes. To compute the provision for federal income taxes, the following data are provided:

Rent received in advance: $16,000

Income from exempt municipal bonds: $20,000

Depreciation deducted for income tax purposes in excess of depreciation reported for financial statement purposes: $10,000

Enacted corporate income tax rate: 30%

What amount of current income tax liability should be reported in Dunn's December 31 balance sheet?`,
      choices: [
        `$18,000`,
        `$22,800`,
        `$25,800`,
        `$28,800`,
      ],
      correctIndex: 1,
      explanation: `<h3 class="exp-title">Income Tax Calculation Analysis</h3><p>Answer: $22,800</p><p>$18,000</p><p>$22,800</p><p>$25,800</p><p>$28,800</p><p>Conceptual Framework</p><p>For tax reporting, we need to adjust book income (accounting income) to arrive at taxable income. The key is understanding book-tax differences, which can be either temporary or permanent.</p><p>Calculation Process</p><p>Item<br>Amount<br>Note</p><p>| Income before taxes (book income)<br>| $90,000<br>| Starting point</p><p>| Add: Rent received in advance<br>| $16,000<br>| Taxable when received</p><p>| Less: Municipal bond income<br>| ($20,000)<br>| Permanent difference (tax-exempt)</p><p>| Less: Excess tax depreciation<br>| ($10,000)<br>| Temporary difference</p><p>| Taxable Income<br>| $76,000<br>|</p><p>| Current Tax Liability (30%)<br>| $22,800<br>| $76,000 × 30%</p><p>Explanation of Tax Adjustments</p><p>1. Rent Received in Advance: While this may be a liability for accounting purposes (unearned revenue), it&#x27;s taxable when received under tax rules, so we add $16,000 to book income.</p><p>2. Municipal Bond Income: This income is exempt from federal taxation, creating a permanent difference. We subtract the $20,000 from book income.</p><p>3. Excess Tax Depreciation: Tax depreciation exceeds book depreciation by $10,000, creating a temporary difference that reduces current taxable income.</p><p>Journal Entry for Income Tax Provision</p><p>Account<br>Debit<br>Credit</p><p>| Income Tax Expense<br>| $22,800<br>|</p><p>| Income Tax Payable<br>|<br>| $22,800</p><p>| (To record current income tax liability)<br>|<br>|</p><p>Summary</p><p>The current income tax liability is calculated by applying the tax rate (30%) to the taxable income ($76,000), resulting in $22,800. Understanding book-tax differences is crucial for computing the correct tax liability. The key adjustments in this case were:</p><p>Adding unearned revenue that is taxable when received</p><p>Excluding tax-exempt income</p><p>Adjusting for timing differences in depreciation methods</p><p>The $22,800 current income tax liability will appear as a current liability on Dunn Co.&#x27;s December 31 balance sheet.</p>`,
    },
    {
      id: "8540",
      prompt: `For its first year of operations, Cable Corp. deducted a $100,000 expense on its current-year tax return; that same expense will not be recognized in its accounting records until next year. There were no other differences between taxable and financial statement income. Cable's effective tax rate for the current year is 21%, but a 25% rate has already been enacted for next year.

In its year-end balance sheet, what amount should Cable report as a deferred tax asset or liability?`,
      choices: [
        `$21,000 liability.`,
        `$25,000 liability.`,
        `$25,000 asset.`,
        `$21,000 asset.`,
      ],
      correctIndex: 1,
      explanation: `Deferred Tax Analysis

Answer

The correct answer is: $25,000 liability

Explanation

This question involves a temporary difference between taxable income and financial statement income, which creates a deferred tax situation.

Analysis of the Temporary Difference

Nature of difference: Cable Corp. recognized a $100,000 expense for tax purposes in Year 1, but will not recognize it in the financial statements until Year 2.

Type of temporary difference: This is a taxable temporary difference because it creates future taxable amounts (when the company recognizes the expense in the financial statements but has already taken the tax deduction).

Tax rate to use: Since the difference will reverse in Year 2, we use the enacted tax rate for Year 2, which is 25%.

Calculation

Deferred Tax Liability = Temporary Difference × Future Tax Rate

Deferred Tax Liability = $100,000 × 25% = $25,000

Journal Entry

To record the deferred tax liability at the end of Year 1:

Account
Debit
Credit

| Income Tax Expense
| $25,000
|

| Deferred Tax Liability
|
| $25,000

Conceptual Understanding

Deferred Tax Liability

Created when:

Taxable income < Accounting income (temporarily)

Tax expense > Taxes payable

Future taxable amounts exist

Deferred Tax Asset

Created when:

Taxable income > Accounting income (temporarily)

Tax expense < Taxes payable

Future deductible amounts exist

Summary

Cable Corp. should report a $25,000 deferred tax liability on its year-end balance sheet. This liability represents the future tax consequence of the temporary difference that will result in taxable amounts in Year 2 when the expense is recognized for financial reporting purposes but has already been deducted for tax purposes in Year 1.`,
    },
    {
      id: "8004",
      prompt: `An entity must establish a valuation allowance for a deferred tax asset whenever`,
      choices: [
        `Evidence indicates that the entity will not realize the tax benefits.`,
        `There is a change during the year in the entity's deferred tax assets.`,
        `The entity plans to change the character of a taxable amount from ordinary income to capital gain in order to utilize the benefit.`,
        `New legislation changes the applicable tax rate expected to apply in the periods in which the entity expects to realize the deferred tax asset.`,
      ],
      correctIndex: 0,
      explanation: `<h3 class="exp-title">Valuation Allowance for Deferred Tax Assets</h3><p>Correct Answer:</p><p>An entity must establish a valuation allowance for a deferred tax asset whenever it&#x27;s more likely than not that the full benefit of the deferred tax asset will not be realized.</p><p>Explanation</p><p>Under ASC 740 (formerly SFAS 109), a valuation allowance must be established for deferred tax assets when it is more likely than not (more than 50% probability) that some portion or all of the deferred tax asset will not be realized. This assessment is based on the weight of available evidence, both positive and negative.</p><p>Key Considerations for Valuation Allowance</p><p>✓ Evaluation of positive and negative evidence</p><p>✓ Historical and projected future taxable income</p><p>✓ Tax planning strategies available to the entity</p><p>✓ Carryback and carryforward periods for tax attributes</p><p>Analysis of Incorrect Options</p><p>Incorrect Option<br>Why It&#x27;s Incorrect</p><p>| There is a change during the year in the entity&#x27;s deferred tax assets<br>| A mere change in deferred tax assets doesn&#x27;t automatically trigger a valuation allowance. The key factor is the likelihood of realization, not simply a change in the deferred tax asset balance.</p><p>| The entity plans to change the character of a taxable amount from ordinary income to capital gain in order to utilize the benefit<br>| This represents a tax planning strategy that might actually strengthen the case for realizing the deferred tax asset, not a reason to establish a valuation allowance.</p><p>| New legislation changes the applicable tax rate expected to apply in the periods in which the entity expects to realize the deferred tax asset<br>| A change in tax rates requires remeasurement of the deferred tax asset, but doesn&#x27;t necessarily require a valuation allowance. The need for a valuation allowance depends on realizability, not rate changes.</p><p>Journal Entry for Recording a Valuation Allowance</p><p>| Account<br>| Debit<br>| Credit</p><p>| Income Tax Expense<br>| XXX<br>|</p><p>| Valuation Allowance for Deferred Tax Asset<br>|<br>| XXX</p><p>This entry increases tax expense and reduces the net deferred tax asset to reflect the portion that is not expected to be realized.</p><p>Summary</p><p>A valuation allowance is required when it is more likely than not that some or all of a deferred tax asset will not be realized. This assessment requires weighing all available evidence, both positive and negative. Changes in deferred tax assets, tax planning strategies, or tax rates do not automatically trigger valuation allowances - the critical factor is always the likelihood of realization.</p>`,
    },
    {
      id: "8541",
      prompt: `Lake Corp., a newly organized company, reported pretax financial income of $100,000 for the current year. Among the items in Lake's income statement are:

Premium on officer's life insurance (with Lake as owner and beneficiary): $15,000

Interest received on municipal bonds: $20,000

The enacted tax rate for the current year is 30% and 21% thereafter. In its December 31 balance sheet, Lake should report a deferred income tax liability of:`,
      choices: [
        `$3,150`,
        `$0`,
        `$7,350`,
        `$4,500`,
      ],
      correctIndex: 1,
      explanation: `<h3 class="exp-title">Permanent Differences vs. Temporary Differences in Tax Accounting</h3><p>Answer Analysis</p><p>The correct answer is: $0</p><p>Answer Choice<br>Status</p><p>| $3,150<br>| Incorrect</p><p>| $0<br>| Correct</p><p>| $7,350<br>| Incorrect</p><p>| $4,500<br>| Incorrect</p><p>Explanation</p><p>Understanding Permanent Differences</p><p>In this scenario, both items represent permanent differences between book (financial) income and taxable income:</p><p>Premium on officer&#x27;s life insurance ($15,000): When a company is the owner and beneficiary of a life insurance policy, the premiums paid are not tax-deductible for tax purposes, but are recorded as expenses on the financial statements.</p><p>Interest received on municipal bonds ($20,000): This interest income is included in financial income but is exempt from federal income tax.</p><p>Key Concept: Permanent differences do not reverse over time and do not create deferred tax assets or liabilities. They simply cause the effective tax rate to differ from the statutory tax rate.</p><p>Tax Calculation Analysis</p><p>Book vs. Tax Income Reconciliation</p><p>Item<br>Amount</p><p>| Pretax financial income<br>| $100,000</p><p>| Add: Life insurance premium (non-deductible)<br>| $15,000</p><p>| Less: Municipal bond interest (tax-exempt)<br>| $(20,000)</p><p>| Taxable income<br>| $95,000</p><p>| Current tax expense (30% × $95,000)<br>| $28,500</p><p>| Deferred tax liability<br>| $0</p><p>Note: Since both differences are permanent, there are no future reversals to account for. Therefore, no deferred tax liability is recorded.</p><p>Journal Entry</p><p>The journal entry to record the income tax expense would be:</p><p>Account<br>Debit<br>Credit</p><p>| Income Tax Expense<br>| $28,500<br>|</p><p>| Income Tax Payable<br>|<br>| $28,500</p><p>No entry is needed for deferred taxes as there are no temporary differences.</p><p>Summary</p><p>Lake Corp. has two permanent differences that affect the calculation of taxable income but do not create timing differences:</p><p>The life insurance premium ($15,000) increases taxable income relative to book income.</p><p>The municipal bond interest ($20,000) decreases taxable income relative to book income.</p><p>Conclusion: Since these are permanent differences, they do not result in future taxable or deductible amounts. Therefore, no deferred tax liability should be reported on Lake&#x27;s December 31 balance sheet.</p>`,
    },
  ],
};
