import type { Quiz } from "../types";

export const ppeQuiz: Quiz = {
  key: "ppe",
  title: "Property, Plant & Equipment / Fixed Assets",
  subtitle: "Property, Plant & Equipment / Fixed Assets",
  discipline: "intermediate",
  course: "intermediate",
  questions: [
    {
      id: "4951",
      prompt: `A company issued a purchase order on December 15, Year 1, for a piece of capital equipment that costs $100,000. The capital equipment was shipped from the vendor on December 31, Year 1, and received by the company on January 5, Year 2. The equipment was installed and placed in service on February 1, Year 2.

On what date should the depreciation expense begin?`,
      choices: [
        `December 15, Year 1.`,
        `December 31, Year 1.`,
        `January 5, Year 2.`,
        `February 1, Year 2.`,
      ],
      correctIndex: 3,
      explanation: `<h3 class="exp-title">When to Begin Depreciation of Capital Equipment</h3><p>Correct Answer</p><p>✓ February 1, Year 2 - Depreciation begins when the equipment is placed in service according to GAAP.</p><p>Explanation</p><p>According to Generally Accepted Accounting Principles (GAAP), depreciation of a fixed asset begins when the asset is placed in service, not when it&#x27;s ordered, shipped, or received. This principle ensures that depreciation expense is matched with the periods in which the asset is actually providing economic benefits to the company.</p><p>Timeline Analysis</p><p>Date<br>Event<br>Accounting Implication</p><p>| December 15, Year 1<br>| Purchase order issued<br>| No accounting entry required</p><p>| December 31, Year 1<br>| Equipment shipped<br>| No accounting entry required</p><p>| January 5, Year 2<br>| Equipment received<br>| Record asset acquisition</p><p>| February 1, Year 2<br>| Equipment placed in service<br>| Begin depreciation</p><p>Journal Entries</p><p>When the equipment is received (January 5, Year 2):</p><p>Account<br>Debit<br>Credit</p><p>| Equipment<br>| $100,000<br>|</p><p>| Accounts Payable<br>|<br>| $100,000</p><p>First depreciation entry (at the end of February, Year 2, assuming straight-line depreciation over 5 years with no salvage value):</p><p>Account<br>Debit<br>Credit</p><p>| Depreciation Expense<br>| $1,667<br>|</p><p>| Accumulated Depreciation<br>|<br>| $1,667</p><p>Why Other Options Are Incorrect</p><p>December 15, Year 1 - This is when the purchase order was issued. No asset exists yet on the company&#x27;s books, so depreciation cannot begin.</p><p>December 31, Year 1 - This is when the equipment was shipped. The company does not yet have possession of the asset.</p><p>January 5, Year 2 - This is when the equipment was received. While the asset may be recorded on the books at this point, it&#x27;s not yet providing economic benefits as it&#x27;s not installed or operational.</p><p>Summary</p><p>Depreciation begins when an asset is placed in service, which means it&#x27;s installed, operational, and ready to use for its intended purpose. In this case, that date is February 1, Year 2. This principle ensures that depreciation expense is properly matched with the periods in which the asset provides economic benefits to the company, in accordance with GAAP&#x27;s matching principle.</p>`,
    },
    {
      id: "4975",
      prompt: `A company sold a piece of manufacturing equipment for $25,000. The equipment was originally purchased for $80,000 and had accumulated depreciation of $60,000 at the time of sale. Calculate the gain or loss on the disposal.`,
      choices: [
        `Gain of $5,000`,
        `Loss of $5,000`,
        `Gain of $15,000`,
        `Loss of $15,000`,
      ],
      correctIndex: 0,
      explanation: `Gain or Loss on Asset Disposal

Analysis

To determine the gain or loss on disposal of an asset, we need to compare the selling price with the asset's book value at the time of sale.

Calculation:

Original cost: $80,000

Accumulated depreciation: $60,000

Book value = Original cost - Accumulated depreciation = $80,000 - $60,000 = $20,000

Selling price: $25,000

Gain/Loss = Selling price - Book value = $25,000 - $20,000 = $5,000 gain

Journal Entry

The journal entry to record this disposal would be:

Account
Debit
Credit

| Cash
| $25,000
|

| Accumulated Depreciation
| $60,000
|

| Equipment
|
| $80,000

| Gain on Disposal of Equipment
|
| $5,000

Multiple Choice Analysis

✓ Gain of $5,000 - CORRECT

✗ Loss of $5,000 - INCORRECT

✗ Gain of $15,000 - INCORRECT

✗ Loss of $15,000 - INCORRECT

Summary

Book value = Original cost - Accumulated depreciation

Gain or loss = Selling price - Book value

When selling price > book value = Gain

When selling price < book value = Loss

In this case, the company realized a $5,000 gain on the equipment disposal`,
    },
    {
      id: "8349",
      prompt: `MegaManufacturing Inc. bought factory machinery for $120,000 on January 1, Year 1. The machinery has a useful life of 10 years and a salvage value of $10,000. Using the double declining balance method, what is the net book value of the machinery at the end of Year 3?`,
      choices: [
        `$61,440`,
        `$65,520`,
        `$70,000`,
        `$75,000`,
      ],
      correctIndex: 0,
      explanation: `<h3 class="exp-title">Double Declining Balance Depreciation Analysis</h3><p>Answer:</p><p>$61,440 ✓</p><p>$65,520 ✗</p><p>$70,000 ✗</p><p>$75,000 ✗</p><p>Explanation</p><p>The double declining balance method is an accelerated depreciation method that applies a depreciation rate twice that of the straight-line rate to the remaining book value of the asset.</p><p>Given Information:</p><p>Original Cost: $120,000</p><p>Useful Life: 10 years</p><p>Salvage Value: $10,000</p><p>Method: Double Declining Balance</p><p>Depreciation Rate Calculation:</p><p>DDB Rate = (100% ÷ Useful life) × 2</p><p>DDB Rate = (100% ÷ 10) × 2 = 20%</p><p>Note: Unlike straight-line depreciation, the salvage value is not subtracted from the original cost when calculating depreciation expense. However, the asset should not be depreciated below its salvage value.</p><p>Depreciation Schedule:</p><p>Year<br>Beginning Book Value<br>Depreciation Rate<br>Depreciation Expense<br>Ending Book Value</p><p>| Year 1<br>| $120,000<br>| 20%<br>| $24,000<br>| $96,000</p><p>| Year 2<br>| $96,000<br>| 20%<br>| $19,200<br>| $76,800</p><p>| Year 3<br>| $76,800<br>| 20%<br>| $15,360<br>| $61,440</p><p>Journal Entries:</p><p>Here are the journal entries for each year&#x27;s depreciation:</p><p>Year 1 - December 31</p><p>Account<br>Debit<br>Credit</p><p>| Depreciation Expense<br>| $24,000<br>|</p><p>| Accumulated Depreciation<br>|<br>| $24,000</p><p>Year 2 - December 31</p><p>Account<br>Debit<br>Credit</p><p>| Depreciation Expense<br>| $19,200<br>|</p><p>| Accumulated Depreciation<br>|<br>| $19,200</p><p>Year 3 - December 31</p><p>Account<br>Debit<br>Credit</p><p>| Depreciation Expense<br>| $15,360<br>|</p><p>| Accumulated Depreciation<br>|<br>| $15,360</p><p>Book Value Analysis:</p><p>At the end of Year 3, the components of book value are:</p><p>Item<br>Amount</p><p>| Original Cost<br>| $120,000</p><p>| Less: Accumulated Depreciation (Years 1-3)<br>| ($58,560)</p><p>| Net Book Value (End of Year 3)<br>| $61,440</p><p>Summary</p><p>The net book value of the machinery at the end of Year 3 is $61,440. This value was calculated using the double declining balance method, which applies a depreciation rate of 20% to the beginning book value each year. After three years of depreciation, the accumulated depreciation totals $58,560, reducing the original cost of $120,000 to a book value of $61,440.</p>`,
    },
    {
      id: "4953",
      prompt: `Tomson Co. installed new assembly line production equipment at a cost of $175,000. To prepare for the installation, Tomson had to rearrange the existing assembly line at a cost of $12,000 and remove a wall at a cost of $3,000. The rearrangement and wall removal were necessary to accommodate the new equipment. The rearrangement did not increase the life of the existing assembly line but did make the production process more efficient with the new equipment in place.

What is the total cost of the new equipment to be capitalized?`,
      choices: [
        `$175,000`,
        `$178,000`,
        `$187,000`,
        `$190,000`,
      ],
      correctIndex: 3,
      explanation: `<h3 class="exp-title">Fixed Asset Capitalization Rules</h3><p>Correct Answer: $190,000</p><p>Explanation</p><p>When determining which costs should be capitalized for a fixed asset, we include all costs necessary to get the asset in place and ready for its intended use. These are considered part of the asset&#x27;s cost basis.</p><p>Cost Analysis</p><p>Equipment cost: $175,000 - This is the base cost of the asset itself (capitalizable)</p><p>Wall removal cost: $3,000 - This is necessary for installation (capitalizable)</p><p>Rearrangement cost: $12,000 - This cost was necessary for installation (capitalizable)</p><p>Total capitalizable costs: $175,000 + $3,000 + $12,000 = $190,000</p><p>Journal Entry</p><p>Account<br>Debit<br>Credit</p><p>| Assembly Line Equipment<br>| $190,000<br>|</p><p>| Cash (or Accounts Payable)<br>|<br>| $190,000</p><p>Capitalization Rules Summary</p><p>Costs that should be capitalized as part of fixed assets include:</p><p>Purchase price of the asset</p><p>Sales taxes</p><p>Shipping and delivery costs</p><p>Installation costs (including necessary building modifications)</p><p>Testing costs before the asset is operational</p><p>Professional fees directly related to the acquisition</p><p>Note that although the rearrangement made the assembly line more efficient, this doesn&#x27;t affect the capitalization decision. The key factor is that these costs were necessary to get the asset ready for its intended use.</p>`,
    },
    {
      id: "9432",
      prompt: `Sky Inc. determined that due to the introduction of newer technology, the useful life of an existing piece of machinery needed to be revised. The machinery originally cost $1,500,000, and total accumulated depreciation recorded through January 1, Year 7, was $700,000. On that date, the remaining lifespan of the machinery was reduced from its original estimate to 4 remaining years. Given that the straight-line depreciation method is used with zero estimated residual value, what total amount should Sky report as accumulated depreciation in its December 31, Year 7, balance sheet?`,
      choices: [
        `$725,000`,
        `$750,000`,
        `$775,000`,
        `$900,000`,
      ],
      correctIndex: 3,
      explanation: `<h3 class="exp-title">Answer Explanation</h3><p>Correct Choice: Choice 4</p><p>Accumulated Depreciation at December 31, Year 7: $900,000</p><p>Key Principle: Prospective Treatment for Estimate Revisions</p><p>Under US GAAP (ASC 250), a change in an asset&#x27;s useful life or depreciation method is classified as a change in accounting estimate. Changes in estimates are handled strictly with prospective application. This means you do not go back to restate prior years, nor do you need to know the original useful life or how many years the asset has already been in service.</p><p>💡 CPA Exam Tip: Intentional Missing Information</p><p>Exam questions intentionally omit the original useful life or purchase date to test whether you realize they are irrelevant. Because prospective accounting only looks forward, the pre-existing accumulated depreciation ($700,000) gives you everything you need to calculate the current book value.</p><p>Step-by-Step Calculations</p><p>Step 1: Determine Net Book Value on Reestimate Date (January 1, Year 7)</p><p>| Original Machinery Historical Cost<br>| $1,500,000</p><p>| Less: Total Depreciation Accumulated (Prior Years)<br>| ($700,000)</p><p>| Net Carrying Book Value<br>| $800,000</p><p>Step 2: Calculate New Year 7 Straight-Line Depreciation Expense</p><p>Spread the remaining carrying value over the newly established 4-year remaining life:</p><p>$800,000 Remaining Book Value ÷ 4 Years New Useful Life = $200,000 Per Year</p><p>Step 3: Calculate Total Accumulated Depreciation (December 31, Year 7)</p><p>Combine the opening historical balance with the current period expense to find the year-end balance sheet presentation:</p><p>| Beginning Accumulated Depreciation Balance<br>| $700,000</p><p>| Add: Straight-Line Depreciation Expense for Year 7<br>| $200,000</p><p>| Total Ending Accumulated Depreciation Balance<br>| $900,000</p><p>Balance Sheet Reporting at December 31, Year 7</p><p>| Machinery (At Historical Cost)<br>| $1,500,000</p><p>| Less: Accumulated Depreciation Balance<br>| ($900,000)</p><p>| Net Machinery Carrying Book Value<br>| $600,000</p>`,
    },
    {
      id: "4972",
      prompt: `A company purchased machinery on April 1, Year 1, for $100,000 and incurred installation costs of $20,000. The machinery has a useful life of 10 years and a salvage value of $10,000. The company uses straight-line depreciation. Calculate the net book value of the machinery at the end of Year 2.`,
      choices: [
        `$101,500`,
        `$104,000`,
        `$100,750`,
        `$106,500`,
      ],
      correctIndex: 2,
      explanation: `<h3 class="exp-title">Machinery Depreciation Calculation</h3><p>Options for Net Book Value at the End of Year 2:</p><p>(A) $101,500</p><p>(B) $104,000</p><p>(C) $100,750 - Correct Answer</p><p>(D) $106,500</p><p>Explanation:</p><p>Step 1: Calculate the Depreciable Base</p><p>Purchase Price: $100,000</p><p>Installation Costs: $20,000</p><p>Total Cost (Gross Value): $120,000</p><p>Salvage Value: $10,000</p><p>Depreciable Base: $120,000 - $10,000 = $110,000</p><p>Step 2: Calculate the Annual Depreciation Rate</p><p>Using the straight-line method:</p><p>Annual Depreciation = Depreciable Base ÷ Useful Life</p><p>Annual Depreciation = $110,000 ÷ 10 years = $11,000 per year</p><p>Step 3: Calculate Year 1 Depreciation (Partial Year)</p><p>Since the machinery was purchased on April 1, Year 1, it was used for only 9 months in Year 1.</p><p>Year 1 Depreciation = $11,000 × (9/12) = $8,250</p><p>Step 4: Calculate Year 2 Depreciation</p><p>For Year 2, a full year of depreciation is recognized:</p><p>Year 2 Depreciation = $11,000</p><p>Step 5: Calculate Accumulated Depreciation</p><p>Total Accumulated Depreciation at the end of Year 2:</p><p>$8,250 (Year 1) + $11,000 (Year 2) = $19,250</p><p>Step 6: Calculate Net Book Value</p><p>Net Book Value = Gross Value - Accumulated Depreciation</p><p>Net Book Value = $120,000 - $19,250 = $100,750</p><p>Journal Entries:</p><p>1. Recording the Purchase (April 1, Year 1)</p><p>Account<br>Debit<br>Credit</p><p>| Machinery<br>| $120,000<br>|</p><p>| Cash/Accounts Payable<br>|<br>| $120,000</p><p>2. Recording Depreciation for Year 1 (December 31, Year 1)</p><p>Account<br>Debit<br>Credit</p><p>| Depreciation Expense<br>| $8,250<br>|</p><p>| Accumulated Depreciation - Machinery<br>|<br>| $8,250</p><p>3. Recording Depreciation for Year 2 (December 31, Year 2)</p><p>Account<br>Debit<br>Credit</p><p>| Depreciation Expense<br>| $11,000<br>|</p><p>| Accumulated Depreciation - Machinery<br>|<br>| $11,000</p><p>Summary</p><p>Initial cost of machinery: $120,000 (purchase price + installation costs)</p><p>Annual depreciation: $11,000 (based on straight-line method)</p><p>Year 1 depreciation (9 months): $8,250</p><p>Year 2 depreciation (full year): $11,000</p><p>Total accumulated depreciation at the end of Year 2: $19,250</p><p>Net book value at the end of Year 2: $100,750</p><p>Remember: Net Book Value = Cost - Accumulated Depreciation</p>`,
    },
    {
      id: "8351",
      prompt: `GlobalTech Inc. purchased manufacturing equipment for $500,000. After several years of use, due to technological advancements, the estimated future cash flows from the use of this equipment have been significantly reduced. At the end of the current year, the estimated future cash flows from the equipment are projected to be $300,000, and the fair value of the equipment is estimated to be $280,000. The carrying amount of the equipment at this time is $400,000. What is the impairment loss on the manufacturing equipment to be recognized in the financial statements?`,
      choices: [
        `$100,000`,
        `$120,000`,
        `$200,000`,
        `$220,000`,
      ],
      correctIndex: 1,
      explanation: `<h3 class="exp-title">Asset Impairment Analysis</h3><p>Impairment Loss Calculation</p><p>To determine if an asset is impaired and calculate the impairment loss, we need to follow these steps:</p><p>Determine if the asset might be impaired (recoverability test)</p><p>Compare carrying amount to the asset&#x27;s fair value</p><p>Calculate impairment loss if carrying amount exceeds fair value</p><p>Key Data Points</p><p>Parameter<br>Amount</p><p>| Original Cost<br>| $500,000</p><p>| Current Carrying Amount<br>| $400,000</p><p>| Estimated Future Cash Flows<br>| $300,000</p><p>| Fair Value<br>| $280,000</p><p>Analysis</p><p>Step 1: Recoverability Test</p><p>Is the carrying amount ($400,000) recoverable through future cash flows ($300,000)?</p><p>Since $400,000 &gt; $300,000, the asset fails the recoverability test and is potentially impaired.</p><p>Step 2: Calculate Impairment Loss</p><p>Impairment Loss = Carrying Amount - Fair Value</p><p>Impairment Loss = $400,000 - $280,000 = $120,000</p><p>Journal Entry for Impairment Loss</p><p>Account<br>Debit<br>Credit</p><p>| Impairment Loss (Income Statement)<br>| $120,000<br>|</p><p>| Accumulated Impairment (Balance Sheet)<br>|<br>| $120,000</p><p>Answer Explanation</p><p>$100,000</p><p>$120,000 ✓</p><p>$200,000</p><p>$220,000</p><p>Summary</p><p>The impairment loss of $120,000 represents the difference between the carrying amount ($400,000) and the fair value ($280,000) of the equipment.</p><p>After recording this impairment loss, the new carrying amount of the equipment will be $280,000, which accurately reflects its fair value.</p><p>This impairment loss must be recognized in the current period&#x27;s income statement, reducing both net income and the asset&#x27;s carrying value on the balance sheet.</p>`,
    },
    {
      id: "4970",
      prompt: `Last year, Katt Co. reduced the carrying amount of its long-lived assets used in operations from $120,000 to $100,000, in connection with its annual impairment review. During the current year, Katt determined that the fair value of the same assets had increased to $130,000.

What amount should Katt record as restoration of previously recognized impairment loss in the current year's financial statements under U.S. GAAP?`,
      choices: [
        `$0`,
        `$10,000`,
        `$20,000`,
        `$30,000`,
      ],
      correctIndex: 0,
      explanation: `<h3 class="exp-title">Impairment Loss Restoration Under U.S. GAAP</h3><p>The correct answer is: $0</p><p>✓ Under U.S. GAAP we are not allowed to reverse an impairment loss.</p><p>The other options are incorrect:</p><p>$10,000</p><p>$20,000</p><p>$30,000</p><p>Explanation</p><p>Under U.S. GAAP (ASC 360), once an impairment loss has been recognized for long-lived assets, it cannot be reversed in subsequent periods, even if the asset&#x27;s fair value increases. This is a fundamental difference between U.S. GAAP and IFRS.</p><p>Key Facts:</p><p>Initial carrying amount: $120,000</p><p>Impaired carrying amount: $100,000</p><p>Current fair value: $130,000</p><p>Amount of original impairment: $20,000</p><p>Analysis</p><p>Even though the fair value of the assets has increased to $130,000, which is $30,000 above the current carrying amount and $10,000 above the original carrying amount, U.S. GAAP prohibits the reversal of previously recognized impairment losses.</p><p>U.S. GAAP vs. IFRS Comparison:</p><p>Accounting Framework<br>Treatment of Impairment Reversal</p><p>| U.S. GAAP<br>| Prohibits reversal of impairment losses</p><p>| IFRS<br>| Allows reversal of impairment losses up to the original carrying amount less depreciation that would have occurred</p><p>Journal Entries</p><p>The following shows the journal entry that would have been made last year when the impairment occurred:</p><p>Account<br>Debit<br>Credit</p><p>| Impairment Loss<br>| $20,000<br>|</p><p>| Long-lived Assets<br>|<br>| $20,000</p><p>No journal entry is made in the current year for the increase in fair value, as impairment reversals are not permitted under U.S. GAAP.</p><p>Summary</p><p>Under U.S. GAAP:</p><p>Once an impairment loss is recognized, it cannot be reversed in future periods.</p><p>The asset continues to be carried at its impaired value (subject to normal depreciation/amortization).</p><p>Any recovery in value is only recognized upon the asset&#x27;s sale or disposal.</p><p>The answer is $0 for restoration of previously recognized impairment.</p>`,
    },
    {
      id: "8167",
      prompt: `Quantum Mechanics Inc. purchased a machine for $500,000 on January 1, 2021. The machine was estimated to have a useful life of 100,000 hours and a residual value of $50,000. During the first two years of operations, the machine was used for 15,000 hours in 2021 and 20,000 hours in 2022. On December 31, 2022, Quantum sold the machine for $370,000. What is the gain or loss on the sale of the machine?`,
      choices: [
        `Gain of $10,000`,
        `Loss of $10,000`,
        `Gain of $27,500`,
        `Loss of $27,500`,
      ],
      correctIndex: 2,
      explanation: `<h3 class="exp-title">Asset Disposal: Gain or Loss Calculation</h3><p>Answer</p><p>✓ Gain of $27,500</p><p>✗ Gain of $10,000</p><p>✗ Loss of $10,000</p><p>✗ Loss of $27,500</p><p>Calculation Process</p><p>Step 1: Calculate Depreciation Rate per Hour</p><p>Depreciation Rate = (Cost - Residual Value) ÷ Useful Life</p><p>Depreciation Rate = ($500,000 - $50,000) ÷ 100,000 hours</p><p>Depreciation Rate = $4.50 per hour</p><p>Step 2: Calculate Total Accumulated Depreciation</p><p>Year<br>Hours Used<br>Depreciation Calculation<br>Annual Depreciation</p><p>| 2021<br>| 15,000<br>| 15,000 × $4.50<br>| $67,500</p><p>| 2022<br>| 20,000<br>| 20,000 × $4.50<br>| $90,000</p><p>| Total<br>| 35,000<br>|<br>| $157,500</p><p>Step 3: Calculate Book Value at Disposal</p><p>Book Value = Original Cost - Accumulated Depreciation</p><p>Book Value = $500,000 - $157,500</p><p>Book Value at Disposal = $342,500</p><p>Step 4: Calculate Gain or Loss on Disposal</p><p>Gain/Loss = Disposal Proceeds - Book Value</p><p>Gain/Loss = $370,000 - $342,500</p><p>Gain on Disposal = $27,500</p><p>Journal Entry for Disposal</p><p>Account<br>Debit<br>Credit</p><p>| Cash<br>| $370,000<br>|</p><p>| Accumulated Depreciation<br>| $157,500<br>|</p><p>| Machine<br>|<br>| $500,000</p><p>| Gain on Disposal of Machine<br>|<br>| $27,500</p><p>Why Other Options Are Incorrect</p><p>Gain of $10,000 - This answer incorrectly calculates either the accumulated depreciation or uses an incorrect method to determine book value.</p><p>Loss of $10,000 - This answer incorrectly assumes the disposal resulted in a loss, when in fact the company received more than the book value.</p><p>Loss of $27,500 - This answer incorrectly treats a positive difference between selling price and book value as a loss, when it&#x27;s actually a gain.</p><p>Key Takeaways</p><p>When using units-of-production (or hours) depreciation method, depreciation expense varies based on asset usage.</p><p>Book value at disposal = Original cost - Accumulated depreciation.</p><p>When disposal proceeds exceed book value, a gain is recognized.</p><p>When disposal proceeds are less than book value, a loss is recognized.</p>`,
    },
    {
      id: "4954",
      prompt: `Cart Co. purchased an office building and the land on which it is located for $750,000 cash and an existing $250,000 mortgage. For realty tax purposes, the property is assessed at $960,000, 60% of which is allocated to the building.

At what amount should Cart record the building?`,
      choices: [
        `$500,000`,
        `$576,000`,
        `$600,000`,
        `$960,000`,
      ],
      correctIndex: 2,
      explanation: `<h3 class="exp-title">Property Acquisition: Allocation of Purchase Price</h3><p>The Answer</p><p>$600,000 is the correct answer</p><p>Explanation</p><p>To determine the value of the building, we need to properly allocate the total cost between the land and building based on their relative fair values.</p><p>Step 1: Determine the total cost of the property</p><p>Total cost = Cash paid + Mortgage assumed</p><p>Total cost = $750,000 + $250,000 = $1,000,000</p><p>Step 2: Use relative fair values for allocation</p><p>The property is assessed at $960,000, which represents the fair value.</p><p>Building&#x27;s proportion = 60% of $960,000 = $576,000</p><p>Land&#x27;s proportion = 40% of $960,000 = $384,000</p><p>Step 3: Calculate allocation ratios</p><p>Building ratio = $576,000 ÷ $960,000 = 0.6 (60%)</p><p>Land ratio = $384,000 ÷ $960,000 = 0.4 (40%)</p><p>Step 4: Apply ratios to actual cost</p><p>Building value = 0.6 × $1,000,000 = $600,000</p><p>Land value = 0.4 × $1,000,000 = $400,000</p><p>Journal Entry</p><p>Account<br>Debit<br>Credit</p><p>| Building<br>| $600,000<br>|</p><p>| Land<br>| $400,000<br>|</p><p>| Cash<br>|<br>| $750,000</p><p>| Mortgage Payable<br>|<br>| $250,000</p><p>Analysis of Answer Options</p><p>$500,000 - Incorrect. This amount doesn&#x27;t properly allocate the cost based on the relative fair values.</p><p>$576,000 - Incorrect. This represents 60% of the assessed value ($960,000), not 60% of the actual cost.</p><p>$600,000 - Correct. This is 60% of the total cost of $1,000,000, properly allocating the actual purchase price based on relative fair values.</p><p>$960,000 - Incorrect. This is the total assessed value, not the allocated cost of the building.</p><p>Summary</p><p>When acquiring property with multiple components (land and building), the total cost ($1,000,000) must be allocated based on the relative fair values of each component. Since the building represents 60% of the total fair value, it should be recorded at 60% of the total cost, which is $600,000.</p><p>The cost principle requires assets to be recorded at their acquisition cost, not at their fair market value. That&#x27;s why we use the relative fair values to allocate the actual cost paid.</p>`,
    },
  ],
};
