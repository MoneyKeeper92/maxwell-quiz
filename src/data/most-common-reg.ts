import type { Quiz } from "./types";

export const mostCommonRegQuiz: Quiz = {
  key: "most-common-reg",
  title: "10 Most Common REG Questions",
  subtitle: "High-frequency REG MCQs covering basis, partnerships, and individual taxation",
  discipline: "reg",
  course: "cpa",
  questions: [
    {
      id: "1",
      prompt: `Jordan, a 40 percent shareholder in an S corporation, had a stock basis of $15,000 at the beginning of the year. The corporation had ordinary income of $300,000 for the year. Additionally, the corporation had a long-term capital gain of $20,000 and an investment interest expense of $5,000, both of which are separately stated items. Jordan received wages from the corporation of $50,000 and a distribution of $45,000. What was Jordan's basis in the stock at year-end?`,
      choices: [
        `$72,000`,
        `$78,000`,
        `$85,000`,
        `$96,000`,
      ],
      correctIndex: 3,
      explanation: `<div style="line-height:1.6"><strong>Calculation of S Corporation Stock Basis:</strong>
<ul> <li>Beginning basis: $15,000</li> <li>Add ordinary income (40% of $300,000): $120,000</li> <li>Add separately stated capital gain (40% of $20,000): $8,000</li> <li>Subtract separately stated investment interest expense (40% of $5,000): $2,000</li> <li>Subtotal = $15,000 + $120,000 + $8,000, $2,000 = $141,000</li> <li>Subtract distribution: $45,000</li> <li>Year-end basis = $141,000, $45,000 = $96,000</li>
</ul>
<p>Wages do not affect S corporation stock basis.</p><div style="margin-top:1rem;padding:0.85rem 1rem;background-color:#fffbeb;border-left:4px solid #f59e0b;border-radius:6px"><strong>Key Concept</strong><p style="margin:0.4rem 0 0">Income and gains increase an S corporation shareholder's basis, while distributions and losses decrease basis. Separately stated items flow through based on ownership percentage.</p></div></div>`,
    },
    {
      id: "2",
      prompt: `Four equal partners formed partnership ABC by each contributing $150,000 to the partnership. In the first year of operations, a $1,000,000 commercial building was purchased in exchange for $400,000 in cash and a $600,000 nonrecourse obligation. The partnership earned net income of $50,000 in its first year. Additionally, the partnership reported a separately stated capital loss of $20,000. What amount was each partner's basis in the partnership at the end of the first year?`,
      choices: [
        `$365,000`,
        `$307,500`,
        `$385,000`,
        `$395,000`,
      ],
      correctIndex: 1,
      explanation: `<div style="line-height:1.6"><strong>Calculation of Partnership Basis:</strong>
<ul> <li>Initial contribution per partner: $150,000</li> <li>Share of nonrecourse debt ($600,000 total × 25% for each partner): $150,000</li> <li>Total so far: $150,000 + $150,000 = $300,000</li> <li>Add share of net income ($50,000 total × 25%): $12,500</li> <li>New total: $300,000 + $12,500 = $312,500</li> <li>Subtract share of capital loss ($20,000 total × 25%): $5,000</li> <li>Ending basis: $312,500, $5,000 = $307,500</li>
</ul><div style="margin-top:1rem;padding:0.85rem 1rem;background-color:#fffbeb;border-left:4px solid #f59e0b;border-radius:6px"><strong>Key Concept</strong><p style="margin:0.4rem 0 0">A partner's basis includes their capital contributions, share of partnership liabilities, and income, reduced by distributions and losses.</p></div></div>`,
    },
    {
      id: "3",
      prompt: `An individual is a 40% partner who actively participates in River Partnership. The individual's adjusted basis at the beginning of the year was $10,000. River Partnership incurred a $100,000 loss from its operations. During the year, River Partnership borrowed $50,000 from a bank, of which $40,000 remained unpaid at year-end. What amount of loss is the individual allowed to claim in the current year from River Partnership?`,
      choices: [
        `$16,000`,
        `$20,000`,
        `$26,000`,
        `$40,000`,
      ],
      correctIndex: 2,
      explanation: `<div style="line-height:1.6"><strong>Calculation of Allowable Partnership Loss:</strong>
<ul> <li>Initial basis: $10,000</li> <li>Share of unpaid partnership liability at year-end: 40% × $40,000 = $16,000</li> <li>Total basis available for losses: $10,000 + $16,000 = $26,000</li> <li>The partner's share of the total loss is 40% × $100,000 = $40,000</li> <li>However, loss deduction is limited to basis: $26,000</li>
</ul>
<p>The remaining $14,000 ($40,000 - $26,000) of loss is suspended and carried forward to future years.</p><div style="margin-top:1rem;padding:0.85rem 1rem;background-color:#fffbeb;border-left:4px solid #f59e0b;border-radius:6px"><strong>Key Concept</strong><p style="margin:0.4rem 0 0">Partnership losses are limited to a partner's basis. A partner's share of partnership debt increases their basis and therefore their loss limitation threshold.</p></div></div>`,
    },
    {
      id: "4",
      prompt: `James, an unmarried taxpayer, had $180,000 in adjusted gross income for Year 10. During Year 10, James donated a sculpture to a charity that he bought in Year 5 for $40,000. The sculpture's fair market value was $100,000 on the day of the donation. What is the maximum amount of charitable contribution that James may deduct as an itemized deduction for the sculpture donation for Year 10?`,
      choices: [
        `$54,000`,
        `$60,000`,
        `$80,000`,
        `$100,000`,
      ],
      correctIndex: 0,
      explanation: `<div style="line-height:1.6"><strong>Calculation of Charitable Contribution Deduction:</strong>
<ul> <li>Long-term capital gain property donated to a public charity is generally deductible at fair market value (FMV)</li> <li>FMV of the sculpture: $100,000</li> <li>The deduction for such property is capped at 30% of AGI</li> <li>30% of $180,000 = $54,000</li>
</ul>
<p>That is the maximum allowable in the current year. The remaining $46,000 can be carried forward for up to 5 years.</p><div style="margin-top:1rem;padding:0.85rem 1rem;background-color:#fffbeb;border-left:4px solid #f59e0b;border-radius:6px"><strong>Key Concept</strong><p style="margin:0.4rem 0 0">Charitable contributions of long-term capital gain property to public charities are deductible at fair market value but limited to 30% of AGI. Excess contributions can be carried forward.</p></div></div>`,
    },
    {
      id: "5",
      prompt: `Taylor paid the following unreimbursed medical expenses: Doctor and chiropractor fees: $6,000, Prescription glasses: $400, Elective cosmetic surgery to enhance Taylor's personal appearance (surgery is unrelated to personal injury or congenital deformity): $8,000, Premium on life insurance policy: $1,500. What is the total amount of Taylor's tax-deductible medical expenses before the adjusted gross income limitation?`,
      choices: [
        `$6,400`,
        `$6,900`,
        `$7,500`,
        `$15,900`,
      ],
      correctIndex: 0,
      explanation: `<div style="line-height:1.6"><strong>Calculation of Deductible Medical Expenses:</strong>
<ul> <li>Doctor and chiropractor fees: $6,000 (Deductible)</li> <li>Prescription glasses: $400 (Deductible)</li> <li>Elective cosmetic surgery: $8,000 (Not deductible - purely cosmetic with no medical necessity)</li> <li>Life insurance premium: $1,500 (Not deductible as a medical expense)</li>
</ul>
<p>Total deductible medical expenses before AGI limitation: $6,000 + $400 = $6,400</p>
<p>Note: After determining eligible expenses, they would be subject to the 7.5% of AGI floor.</p><div style="margin-top:1rem;padding:0.85rem 1rem;background-color:#fffbeb;border-left:4px solid #f59e0b;border-radius:6px"><strong>Key Concept</strong><p style="margin:0.4rem 0 0">Only qualified medical expenses are deductible. Cosmetic surgery and life insurance premiums generally don't qualify. Medical expenses must exceed 7.5% of AGI to be deductible.</p></div></div>`,
    },
    {
      id: "6",
      prompt: `Jessica purchased a condo for $300,000. After living in it for four years, she sold it for $400,000. During her ownership, she made improvements totaling $30,000. What amount from this transaction should be included in Jessica's gross income?`,
      choices: [
        `$0`,
        `$10,000`,
        `$40,000`,
        `$70,000`,
      ],
      correctIndex: 0,
      explanation: `<div style="line-height:1.6"><strong>Calculation of Taxable Gain on Principal Residence:</strong>
<ul> <li>Purchase price: $300,000</li> <li>Plus improvements: $30,000</li> <li>Adjusted basis: $330,000</li> <li>Selling price: $400,000</li> <li>Realized gain: $400,000 - $330,000 = $70,000</li>
</ul>
<p>Under IRC §121, a single taxpayer can exclude up to $250,000 of gain on the sale of a principal residence if they owned and used it as their main home for at least 2 out of the 5 years before the sale.</p>
<p>Since Jessica lived in the condo for 4 years, her $70,000 gain is fully excludable from gross income.</p><div style="margin-top:1rem;padding:0.85rem 1rem;background-color:#fffbeb;border-left:4px solid #f59e0b;border-radius:6px"><strong>Key Concept</strong><p style="margin:0.4rem 0 0">The §121 exclusion allows single taxpayers to exclude up to $250,000 ($500,000 for married filing jointly) of gain on the sale of a principal residence if ownership and use tests are met.</p></div></div>`,
    },
    {
      id: "7",
      prompt: `Raven received a painting as a gift with a fair market value of $12,000 at the time of the gift. The painting was originally purchased by the donor for $15,000. Later, Raven sold the painting for $13,000. What amount of gain should be reported on the sale?`,
      choices: [
        `$0`,
        `$1,000`,
        `$2,000`,
        `$3,000`,
      ],
      correctIndex: 0,
      explanation: `<div style="line-height:1.6"><strong>Calculation of Gain on Gifted Property:</strong>
<p>For gifts, we use a "dual basis" rule when the FMV at the time of gift is less than the donor's basis:</p>
<ul> <li>Donor's original basis: $15,000</li> <li>FMV at time of gift: $12,000</li> <li>Sale price: $13,000</li>
</ul>
<p>When the sale price is between the FMV at gift and the donor's basis, no gain or loss is recognized.</p>
<p>Since $13,000 falls between $12,000 and $15,000, Raven recognizes $0 gain on the sale.</p><div style="margin-top:1rem;padding:0.85rem 1rem;background-color:#fffbeb;border-left:4px solid #f59e0b;border-radius:6px"><strong>Key Concept</strong><p style="margin:0.4rem 0 0">For gifted property, when the FMV at the time of gift is less than the donor's basis, a 'dual basis' rule applies. If the property is sold at a price between these two amounts, no gain or loss is recognized.</p></div></div>`,
    },
    {
      id: "8",
      prompt: `An individual with gross income of $100,000 had the following gains and losses from capital transactions during the current year: Gain of $8,000 from the sale of stocks held for three years, Loss of $15,000 on the sale of principal residence held for six years, Loss of $12,000 on the sale of corporate bonds held for eight months, Loss of $6,000 on the sale of a sculpture held for investment for ten years. What amount of the capital loss should the individual carry forward?`,
      choices: [
        `$5,000`,
        `$7,000`,
        `$10,000`,
        `$15,000`,
      ],
      correctIndex: 1,
      explanation: `<div style="line-height:1.6"><strong>Calculation of Capital Loss Carryforward:</strong>
<ul> <li>Gain from stocks (long-term): $8,000</li> <li>Loss from principal residence: $15,000 (Not deductible as a capital loss)</li> <li>Loss from corporate bonds (short-term): $12,000</li> <li>Loss from sculpture (long-term): $6,000</li>
</ul>
<p>Net capital position:</p>
<ul> <li>Net long-term: $8,000 - $6,000 = $2,000 gain</li> <li>Net short-term: $12,000 loss</li> <li>Overall net: $2,000 - $12,000 = $10,000 net capital loss</li>
</ul>
<p>Individuals can deduct up to $3,000 of net capital loss against ordinary income per year.</p>
<p>Loss carryforward: $10,000 - $3,000 = $7,000</p><div style="margin-top:1rem;padding:0.85rem 1rem;background-color:#fffbeb;border-left:4px solid #f59e0b;border-radius:6px"><strong>Key Concept</strong><p style="margin:0.4rem 0 0">Capital losses offset capital gains, and up to $3,000 of excess losses can offset ordinary income. Remaining losses are carried forward. Personal residence losses are not deductible.</p></div></div>`,
    },
    {
      id: "9",
      prompt: `On March 1, Year 1, Kelly purchased and placed into service a commercial building costing $500,000, including $50,000 for the land. What was Kelly's MACRS deduction for the commercial building in Year 1?`,
      choices: [
        `$12,320`,
        `$11,538`,
        `$10,090`,
        `$9,139`,
      ],
      correctIndex: 3,
      explanation: `<div style="line-height:1.6"><strong>Calculation of MACRS Depreciation:</strong>
<ul> <li>Total cost: $500,000</li> <li>Land value: $50,000 (Land is not depreciable)</li> <li>Depreciable basis: $450,000</li> <li>Under MACRS, nonresidential real property uses a 39-year recovery period</li> <li>Annual straight-line rate: $450,000 ÷ 39 = $11,538</li>
</ul>
<p>For nonresidential real property, MACRS uses mid-month convention:</p>
<ul> <li>Property placed in service in March (3rd month): 9.5 months of depreciation in Year 1</li> <li>Year 1 depreciation: $11,538 × (9.5 ÷ 12) = $9,139</li>
</ul><div style="margin-top:1rem;padding:0.85rem 1rem;background-color:#fffbeb;border-left:4px solid #f59e0b;border-radius:6px"><strong>Key Concept</strong><p style="margin:0.4rem 0 0">Commercial real estate is depreciated over 39 years using straight-line depreciation with a mid-month convention. Land is never depreciable.</p></div></div>`,
    },
    {
      id: "10",
      prompt: `LMN Partnership, a calendar year entity, reported the following results for the year 2023: Gross sales: $1,500,000, Cost of goods sold: $500,000, Operating expenses: $300,000, Guaranteed payments to partners: $150,000, Capital gain from an investment: $20,000, Interest income from bonds: $40,000. What is LMN Partnership's ordinary business income for 2023?`,
      choices: [
        `$550,000`,
        `$560,000`,
        `$600,000`,
        `$650,000`,
      ],
      correctIndex: 0,
      explanation: `<div style="line-height:1.6"><strong>Calculation of Partnership Ordinary Business Income:</strong>
<ul> <li>Gross sales: $1,500,000</li> <li>Less: Cost of goods sold: $500,000</li> <li>Gross profit: $1,000,000</li> <li>Less: Operating expenses: $300,000</li> <li>Less: Guaranteed payments: $150,000</li> <li>Ordinary business income: $550,000</li>
</ul>
<p>Capital gains ($20,000) and portfolio interest income ($40,000) are separately stated items that are not included in ordinary business income. These amounts flow through to partners separately.</p><div style="margin-top:1rem;padding:0.85rem 1rem;background-color:#fffbeb;border-left:4px solid #f59e0b;border-radius:6px"><strong>Key Concept</strong><p style="margin:0.4rem 0 0">Partnership ordinary business income excludes separately stated items such as capital gains and portfolio income. Guaranteed payments to partners are deductible in calculating ordinary business income.</p></div></div>`,
    },
  ],
};
