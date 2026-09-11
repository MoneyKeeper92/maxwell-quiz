import type { Quiz } from "../types";

export const revenueRecognitionQuiz: Quiz = {
  key: "revenue-recognition",
  title: "Revenue Recognition",
  subtitle: "Revenue Recognition",
  discipline: "intermediate",
  course: "intermediate",
  questions: [
    {
      id: "5192",
      prompt: `Which of the following is NOT a requirement for revenue recognition under US GAAP?`,
      choices: [
        `Identify a Contract with the Customer`,
        `Determine the Transaction Price`,
        `Allocate the Transaction Price to the Performance Obligations in the Contract`,
        `Recognize Revenue when the customer is billed`,
      ],
      correctIndex: 3,
      explanation: `<h3 class="exp-title">Revenue Recognition Requirements Under US GAAP</h3><p>Question Analysis</p><p>Which of the following is NOT a requirement for revenue recognition under US GAAP?</p><p>Identify a Contract with the Customer</p><p>Determine the Transaction Price</p><p>Allocate the Transaction Price to the Performance Obligations in the Contract</p><p>Recognize Revenue when the customer is billed ❌</p><p>Explanation</p><p>The five-step revenue recognition process under US GAAP does NOT include recognizing revenue when the customer is billed. Revenue recognition is based on the transfer of control of goods or services to the customer, not the billing event.</p><p>Five Steps in the Revenue Recognition Process:</p><p>Identify a Contract with the Customer - Establish the existence of an agreement with enforceable rights and obligations</p><p>Identify Separate Performance Obligations - Determine the distinct goods or services promised</p><p>Determine the Transaction Price - Calculate the amount of consideration expected</p><p>Allocate the Transaction Price - Assign the transaction price to each performance obligation</p><p>Recognize Revenue as Performance Obligations are Satisfied - Revenue is recognized when control transfers to the customer</p><p>Billing vs. Revenue Recognition:</p><p>Billing</p><p>Billing is an administrative process where an invoice is sent to the customer requesting payment.</p><p>It may occur before, during, or after control is transferred to the customer.</p><p>Revenue Recognition</p><p>Revenue is recognized when control of the promised goods or services transfers to the customer.</p><p>It is based on satisfaction of performance obligations, not billing events.</p><p>Example Journal Entries:</p><p>When Billing Occurs Before Revenue Recognition:</p><p>Account<br>Debit<br>Credit</p><p>| Accounts Receivable<br>| $10,000<br>|</p><p>| Unearned Revenue (Contract Liability)<br>|<br>| $10,000</p><p>When Revenue is Actually Recognized (Performance Obligation Satisfied):</p><p>Account<br>Debit<br>Credit</p><p>| Unearned Revenue (Contract Liability)<br>| $10,000<br>|</p><p>| Revenue<br>|<br>| $10,000</p><p>Summary</p><p>&quot;Recognize Revenue when the customer is billed&quot; is NOT a requirement for revenue recognition under US GAAP.</p><p>Revenue is recognized when performance obligations are satisfied and control is transferred to the customer.</p><p>Billing may occur at different times than revenue recognition, and the two events are not necessarily connected.</p><p>US GAAP follows a five-step process for revenue recognition that focuses on identifying contracts, performance obligations, determining and allocating transaction price, and recognizing revenue when obligations are satisfied.</p>`,
    },
    {
      id: "8003",
      prompt: `Which of the following is an example of a performance obligation in a contract between a customer and a company?`,
      choices: [
        `An agreement by the customer to deliver consideration in the future.`,
        `A company's decision to outsource specific tasks to meet the customer's specifications.`,
        `A contractual commitment by the company to provide a distinct service for the customer.`,
        `A company's need to purchase raw materials to manufacture products for delivery to the customer.`,
      ],
      correctIndex: 2,
      explanation: `<h3 class="exp-title">Performance Obligations in Customer Contracts</h3><p>Correct Answer</p><p>C. A contractual commitment by the company to provide a distinct service for the customer.</p><p>Explanation</p><p>A performance obligation is a promise in a contract with a customer to transfer a good or service to the customer. It represents the unit of account for revenue recognition under ASC 606/IFRS 15.</p><p>Why Option C is Correct:</p><p>A contractual commitment by the company to provide a distinct service for the customer perfectly describes a performance obligation. It&#x27;s a specific promise made by the company to deliver a distinct good or service that can be identified separately in the contract.</p><p>Why Other Options Are Incorrect:</p><p>A. An agreement by the customer to deliver consideration in the future - This represents the customer&#x27;s obligation to pay, not the company&#x27;s performance obligation. Performance obligations refer specifically to what the company promises to provide, not what the customer promises.</p><p>B. A company&#x27;s decision to outsource specific tasks to meet the customer&#x27;s specifications - This describes an internal operational decision by the company, not a contractual promise to the customer. How a company fulfills its obligations is separate from the obligations themselves.</p><p>D. A company&#x27;s need to purchase raw materials to manufacture products for delivery - This represents activities the company must undertake to fulfill a performance obligation, not the performance obligation itself. The obligation is the promise to deliver the final product, not the inputs needed to create it.</p><p>Key Characteristics of Performance Obligations</p><p>Characteristic<br>Description</p><p>| Distinct<br>| The good or service is capable of being distinct (customer can benefit from it alone or with other readily available resources) and is separately identifiable within the contract context.</p><p>| Contractual<br>| Must be explicitly or implicitly promised in a contract with a customer.</p><p>| Promised Good or Service<br>| Represents what the company (not the customer) is obligated to transfer.</p><p>| Unit of Account<br>| Serves as the basis for revenue recognition - revenue is recognized when (or as) each performance obligation is satisfied.</p><p>Example: Multiple Performance Obligations</p><p>A company contracts to build five houses for a customer. This contract contains five separate performance obligations because each house represents a distinct good that the customer can benefit from individually.</p><p>Revenue Recognition Impact</p><p>The company would allocate the total transaction price to each house based on their standalone selling prices and recognize revenue for each house separately when control transfers to the customer (either over time if criteria are met or at a point in time upon completion).</p><p>Summary</p><p>A performance obligation is a company&#x27;s promise to transfer a distinct good or service to a customer. It forms the foundation of revenue recognition under current accounting standards. Understanding what constitutes a performance obligation is crucial for proper revenue recognition timing and measurement.</p><p>Remember that performance obligations refer to what the company promises to provide, not customer commitments, internal processes, or input activities necessary to fulfill those obligations.</p>`,
    },
    {
      id: "8357",
      prompt: `Jersey Inc. sells home appliances and offers a service contract on each appliance sold. All service contracts must be paid in full at the time of sale. How should the cash received for the service contracts be recorded?`,
      choices: [
        `As an increase to Unearned Service Revenue`,
        `As an increase to Service Revenue`,
        `As an increase to Sales Contracts Receivable`,
        `As an increase to Stockholders’ Equity`,
      ],
      correctIndex: 0,
      explanation: `<h3 class="exp-title">Recording Service Contract Revenue</h3><p>Correct Answer</p><p>As an increase to Unearned Service Revenue</p><p>The other options are incorrect:</p><p>As an increase to Service Revenue - Incorrect because the service hasn&#x27;t been provided yet</p><p>As an increase to Sales Contracts Receivable - Incorrect because cash was already received</p><p>As an increase to Stockholders&#x27; Equity - Incorrect because this doesn&#x27;t represent earned equity</p><p>Explanation</p><p>When Jersey Inc. receives payment for service contracts at the time of sale, the company has an obligation to provide service over the contract period. Since the service hasn&#x27;t been performed yet, the revenue cannot be recognized immediately under the revenue recognition principle.</p><p>Under accrual accounting and GAAP, cash received for services not yet performed must be recorded as a liability called &quot;Unearned Revenue&quot; (also known as deferred revenue).</p><p>Journal Entry</p><p>Account<br>Debit<br>Credit</p><p>| Cash<br>| $XXX<br>|</p><p>| Unearned Service Revenue<br>|<br>| $XXX</p><p>Revenue Recognition Process</p><p>As Jersey Inc. provides the service over time, it would gradually recognize revenue with this entry:</p><p>Account<br>Debit<br>Credit</p><p>| Unearned Service Revenue<br>| $XXX<br>|</p><p>| Service Revenue<br>|<br>| $XXX</p><p>Summary</p><p>Jersey Inc. should record cash received for service contracts as an increase to Unearned Service Revenue (a liability), reflecting the obligation to provide future services. This liability will decrease and revenue will be recognized as the service is performed over the contract period, following the revenue recognition principle.</p>`,
    },
    {
      id: "8360",
      prompt: `Omega Pest Solutions provides monthly pest control services for $40 per month. Customers have the option to pay an annual fee of $420 in advance instead of paying monthly. Under U.S. GAAP, for a customer who pays the annual fee in advance, Omega Pest Solutions should:`,
      choices: [
        `Recognize the entire $420 immediately upon receipt.`,
        `Recognize revenue evenly over the 12‑month service period.`,
        `Recognize revenue only when additional service calls are made.`,
        `Defer all revenue until the end of the year.`,
      ],
      correctIndex: 1,
      explanation: `<h3 class="exp-title">Revenue Recognition for Service Contracts</h3><p>The correct approach is to:</p><p>Recognize revenue evenly over the 12‑month service period.</p><p>Explanation</p><p>When a customer pays $420 in advance for an annual pest control service, Omega Pest Solutions has received cash but has not yet fulfilled its performance obligation. Under U.S. GAAP (ASC 606), revenue should be recognized as the company satisfies its performance obligations to the customer.</p><p>Since the service is provided evenly throughout the year, the revenue should be recognized on a monthly basis ($35 per month) over the 12-month service period, regardless of when payment is received.</p><p>Journal Entries</p><p>When annual payment is received:</p><p>Account<br>Debit<br>Credit</p><p>| Cash<br>| $420<br>|</p><p>| Unearned Revenue (Liability)<br>|<br>| $420</p><p>At the end of each month (for 12 months):</p><p>Account<br>Debit<br>Credit</p><p>| Unearned Revenue (Liability)<br>| $35<br>|</p><p>| Service Revenue<br>|<br>| $35</p><p>Analysis of Incorrect Options</p><p>Recognize the entire $420 immediately upon receipt</p><p>This approach violates the matching principle in accounting. Since the service hasn&#x27;t been provided yet, recognizing all revenue upfront would overstate revenue and understate liabilities.</p><p>Recognize revenue only when additional service calls are made</p><p>The primary service is provided monthly, not just during additional service calls. This approach would incorrectly delay revenue recognition for services that have been performed.</p><p>Defer all revenue until the end of the year</p><p>This would violate the revenue recognition principle which states that revenue should be recognized when earned. Since the service is provided throughout the year, deferring all revenue recognition until year-end would be inappropriate.</p><p>Key Accounting Principles Applied</p><p>Revenue Recognition (ASC 606): Revenue is recognized when (or as) the entity satisfies a performance obligation by transferring a promised good or service to a customer.</p><p>Matching Principle: Expenses are recognized in the same period as the related revenues.</p><p>Performance Obligations Over Time: When services are provided continuously over a period, revenue should be recognized over that same period.</p><p>Summary</p><p>For service contracts where payment is received in advance, but the service is delivered over time, revenue should be recognized as the performance obligation is satisfied (in this case, evenly over the 12-month service period). This approach properly matches revenue recognition with service delivery, regardless of cash receipt timing.</p>`,
    },
    {
      id: "5193",
      prompt: `Which of the following is a key component of revenue recognition under the new U.S. GAAP revenue recognition standard?`,
      choices: [
        `Timing of payment by the customer`,
        `Completion of production by the seller`,
        `Transfer of control to the customer`,
        `Issuance of an invoice to the customer`,
      ],
      correctIndex: 2,
      explanation: `<h3 class="exp-title">Revenue Recognition Under U.S. GAAP</h3><p>Answer:</p><p>Transfer of control to the customer is the correct key component of revenue recognition under the current U.S. GAAP revenue recognition standard.</p><p>Explanation:</p><p>Under ASC 606 (Revenue from Contracts with Customers), revenue is recognized when control of promised goods or services transfers to the customer. This represents when the customer has:</p><p>The ability to direct the use of the asset</p><p>The ability to obtain substantially all remaining benefits from the asset</p><p>The other options are incorrect because:</p><p>Timing of payment by the customer - Payment timing is independent of revenue recognition. Revenue can be recognized before or after payment.</p><p>Completion of production by the seller - Simply producing goods doesn&#x27;t trigger revenue recognition if control hasn&#x27;t transferred.</p><p>Issuance of an invoice to the customer - Invoicing is an administrative action that doesn&#x27;t necessarily coincide with transfer of control.</p><p>The Five-Step Revenue Recognition Model:</p><p>Identify the contract(s) with a customer</p><p>Identify the performance obligations in the contract</p><p>Determine the transaction price</p><p>Allocate the transaction price to the performance obligations</p><p>Recognize revenue when (or as) the entity satisfies a performance obligation</p><p>The fifth step specifically requires transfer of control to recognize revenue.</p><p>Example Journal Entry:</p><p>When control transfers to the customer and revenue is recognized:</p><p>Account<br>Debit<br>Credit</p><p>| Accounts Receivable<br>| 10,000<br>|</p><p>| Revenue<br>|<br>| 10,000</p><p>| To recognize revenue upon transfer of control to customer</p><p>Summary:</p><p>The current revenue recognition standard (ASC 606) focuses on the transfer of control as the key trigger for revenue recognition, replacing the previous focus on risks and rewards. This approach provides a consistent framework across industries and aligns U.S. GAAP with IFRS (IFRS 15). The timing of payment, completion of production, or invoicing may be relevant facts but are not the determining factors for when revenue should be recognized.</p>`,
    },
    {
      id: "8363",
      prompt: `TechPro Inc. offers a bundle that includes a premium laptop and an extended service warranty. The stand-alone selling prices are $1,800 for the laptop and $600 for the warranty. However, the bundle is sold for a total price of $2,100. How should TechPro allocate the transaction price between the laptop and the warranty?`,
      choices: [
        `Laptop: $1,575; Warranty: $525`,
        `Laptop: $1,600; Warranty: $500`,
        `Laptop: $1,650; Warranty: $450`,
        `Laptop: $1,700; Warranty: $400`,
      ],
      correctIndex: 0,
      explanation: `<h3 class="exp-title">Revenue Allocation for Bundled Products</h3><p>Question Analysis</p><p>This question tests the concept of allocating transaction price for bundled products based on relative stand-alone selling prices, which is a key requirement under revenue recognition standards like ASC 606 and IFRS 15.</p><p>Solution Approach</p><p>When a company offers a discount on a bundle of products or services, the discount should be allocated proportionally based on the relative stand-alone selling prices.</p><p>Step-by-Step Calculation:</p><p>Calculate the total stand-alone selling price: $1,800 + $600 = $2,400</p><p>Determine the relative proportion for each component:</p><p>Laptop: $1,800 ÷ $2,400 = 75%</p><p>Warranty: $600 ÷ $2,400 = 25%</p><p>Allocate the transaction price based on these proportions:</p><p>Laptop: 75% × $2,100 = $1,575</p><p>Warranty: 25% × $2,100 = $525</p><p>Journal Entry</p><p>When the bundle is sold, TechPro would record:</p><p>Account<br>Debit<br>Credit</p><p>| Cash/Accounts Receivable<br>| $2,100<br>|</p><p>| Revenue - Laptop<br>|<br>| $1,575</p><p>| Unearned Revenue - Warranty<br>|<br>| $525</p><p>Note: The warranty revenue would be recognized over the warranty period as the performance obligation is satisfied.</p><p>Answer Evaluation</p><p>Laptop: $1,575; Warranty: $525</p><p>✓ CORRECT</p><p>This correctly allocates the transaction price based on the relative stand-alone selling prices (75% and 25%).</p><p>Laptop: $1,600; Warranty: $500</p><p>✗ INCORRECT</p><p>This allocation does not match the relative stand-alone selling price proportions.</p><p>Laptop: $1,650; Warranty: $450</p><p>✗ INCORRECT</p><p>This allocation does not follow the relative stand-alone selling price method.</p><p>Laptop: $1,700; Warranty: $400</p><p>✗ INCORRECT</p><p>This allocation gives a higher proportion to the laptop than its relative stand-alone selling price.</p><p>Key Takeaways</p><p>Under modern revenue recognition standards, discounts on bundled products should be allocated based on relative stand-alone selling prices.</p><p>The allocation formula is: (Individual stand-alone price ÷ Total stand-alone price) × Transaction price</p><p>This approach ensures that the discount is distributed proportionally across all components of the bundle.</p><p>The warranty revenue would typically be recognized over time as the service is provided, while the laptop revenue would be recognized at the point of sale.</p>`,
    },
    {
      id: "5194",
      prompt: `A company sells a software license to a customer, which the customer can use on their computer for an unlimited period. Which of the following is true regarding the recognition of revenue for this transaction?`,
      choices: [
        `Revenue should be recognized over time because the asset is transferred over time.`,
        `Revenue should be recognized at a point in time because the transfer of control takes place at one point.`,
        `Revenue recognition is not necessary for this transaction because it does not involve a performance obligation.`,
        `Revenue should be recognized at the end of the license period when the customer stops using the software.`,
      ],
      correctIndex: 1,
      explanation: `<h3 class="exp-title">Revenue Recognition for Software Licenses</h3><p>Correct Answer: Revenue should be recognized at a point in time because the transfer of control takes place at one point.</p><p>Explanation</p><p>For a software license that grants the customer unlimited use for an indefinite period, revenue recognition occurs at a point in time. This is because:</p><p>✓ The customer immediately receives control of the software</p><p>✓ The customer can direct the use of the asset</p><p>✓ The customer can prevent others from using the software</p><p>Revenue Recognition Criteria Analysis</p><p>Revenue Type<br>Recognition Pattern<br>Example</p><p>| Point in Time<br>| Control transfers at a specific moment<br>| Software license with perpetual rights</p><p>| Over Time<br>| Customer receives benefits over a period<br>| Annual gym membership, subscription service</p><p>Journal Entry for Software License Sale</p><p>Account<br>Debit<br>Credit</p><p>| Cash (or Accounts Receivable)<br>| $X<br>|</p><p>| Revenue<br>|<br>| $X</p><p>(All revenue is recognized at the point of sale)</p><p>Review of Answer Options</p><p>✗ Revenue should be recognized over time - Incorrect because the software is not transferred over time; it&#x27;s available for use immediately.</p><p>✓ Revenue should be recognized at a point in time - Correct as control transfers at one specific moment.</p><p>✗ Revenue recognition is not necessary - Incorrect because there is a clear performance obligation (providing the software).</p><p>✗ Revenue should be recognized at the end of the license period - Incorrect because this is a perpetual license with no end date.</p><p>Summary</p><p>For software licenses that provide perpetual rights with no ongoing obligations, revenue is recognized at a point in time when control transfers to the customer. This reflects the economic reality that the customer has immediately received the full value of the license and can benefit from it indefinitely.</p>`,
    },
    {
      id: "8358",
      prompt: `Gamma Construction has a contract with total revenue of $3,000,000 and an estimated total cost of $2,400,000. In Year 1, they incurred $1,200,000 in costs. Using the percentage‐of‐completion method, what is the revenue recognized in Year 1?`,
      choices: [
        `$1,200,000`,
        `$1,500,000`,
        `$1,800,000`,
        `$2,000,000`,
      ],
      correctIndex: 1,
      explanation: `<h3 class="exp-title">Percentage-of-Completion Revenue Recognition</h3><p>Answer: $1,500,000</p><p>Explanation</p><p>Using the percentage-of-completion method, revenue is recognized based on the proportion of work completed to date.</p><p>Step 1: Calculate the percentage of completion</p><p>Percentage of completion = Costs incurred to date ÷ Total estimated costs</p><p>Percentage of completion = $1,200,000 ÷ $2,400,000 = 50%</p><p>Step 2: Calculate the revenue to be recognized</p><p>Revenue recognized = Percentage of completion × Total contract revenue</p><p>Revenue recognized = 50% × $3,000,000 = $1,500,000</p><p>Journal Entry</p><p>Account<br>Debit<br>Credit</p><p>| Construction in Progress<br>| $1,200,000<br>|</p><p>| Cash/Accounts Payable<br>|<br>| $1,200,000</p><p>| Contract Receivable/Unbilled Revenue<br>| $1,500,000<br>|</p><p>| Construction Revenue<br>|<br>| $1,500,000</p><p>Analysis of Answers</p><p>Option<br>Amount<br>Analysis</p><p>| Choice 1<br>| $1,200,000<br>| This represents the costs incurred, not the revenue recognized.</p><p>| Choice 2<br>| $1,500,000<br>| Correct. This is 50% of the total contract revenue of $3,000,000.</p><p>| Choice 3<br>| $1,800,000<br>| This represents 60% of total revenue, not the correct percentage.</p><p>| Choice 4<br>| $2,000,000<br>| This represents 66.7% of total revenue, not the correct percentage.</p><p>Summary</p><p>The percentage-of-completion method recognizes revenue proportionally as work is completed on a long-term contract. In Year 1, Gamma Construction has completed 50% of the work (based on costs incurred), so they recognize 50% of the total contract revenue, which is $1,500,000.</p><p>This method provides a more accurate representation of a company&#x27;s financial performance over the life of a long-term contract compared to the completed contract method.</p>`,
    },
    {
      id: "8356",
      prompt: `Delta Construction has a contract for $4,000,000 with an estimated total cost of $3,200,000. At the end of Year 1, Delta incurred costs of $800,000 and billed the customer $1,200,000. What is the amount of overbilling (billings in excess of costs and estimated earnings) at the end of Year 1?`,
      choices: [
        `$100,000 (overbilling liability)`,
        `$100,000 (underbilling asset)`,
        `$200,000 (overbilling liability)`,
        `$200,000 (underbilling asset)`,
      ],
      correctIndex: 2,
      explanation: `Percentage-of-Completion Accounting: Overbilling vs. Underbilling

Correct Answer:

$200,000 (overbilling liability)

Understanding Overbilling in Percentage-of-Completion Method

When using the percentage-of-completion method for long-term construction contracts, we need to compare the amount billed to customers with the revenue earned based on the work completed.

Step-by-Step Calculation

Calculate percentage of completion:

Costs to date ÷ Total estimated costs = $800,000 ÷ $3,200,000 = 25%

Determine revenue earned:

Contract price × Percentage complete = $4,000,000 × 25% = $1,000,000

Compare billings with earned revenue:

Billings to date = $1,200,000

Revenue earned = $1,000,000

Overbilling = $1,200,000 - $1,000,000 = $200,000

Accounting Impact

Since billings exceed revenue earned, we have an overbilling situation which represents a liability to the company. This occurs because Delta has billed the customer more than the value of work actually performed.

Journal Entries

To record construction revenue, costs, and the overbilling situation:

Account
Debit
Credit

| Accounts Receivable
| $1,200,000
|

| Construction Revenue
|
| $1,000,000

| Billings in Excess of Costs and Estimated Earnings (Liability)
|
| $200,000

Account
Debit
Credit

| Construction Expenses
| $800,000
|

| Construction in Progress/Cash/Accounts Payable
|
| $800,000

Understanding Overbilling vs. Underbilling

Type
Condition
Financial Statement Impact

| Overbilling
| Billings > Revenue Earned
| Liability on the balance sheet
("Billings in Excess of Costs and Estimated Earnings")

| Underbilling
| Billings < Revenue Earned
| Asset on the balance sheet
("Costs and Estimated Earnings in Excess of Billings")

Summary

Delta Construction completed 25% of the project (based on costs incurred)

Revenue earned: $1,000,000 (25% of $4,000,000 contract price)

Billings to date: $1,200,000

Since billings exceed revenue earned by $200,000, there is an overbilling situation

This $200,000 represents a liability (deferred revenue) on Delta's balance sheet`,
    },
    {
      id: "8364",
      prompt: `Paradigm Tickets acts as an agent in selling concert tickets. For each ticket sold, Paradigm collects $600 from the customer and then remits $550 to the event organizer. How much revenue should Paradigm recognize for each ticket sold?`,
      choices: [
        `Record $600 as revenue per ticket`,
        `Record $50 as revenue per ticket`,
        `Record $550 as revenue per ticket`,
        `Record $600 as a reduction in liability`,
      ],
      correctIndex: 1,
      explanation: `<h3 class="exp-title">Principal-Agent Revenue Recognition</h3><p>Multiple Choice Analysis</p><p>❌ Record $600 as revenue per ticket</p><p>✓ Record $50 as revenue per ticket</p><p>❌ Record $550 as revenue per ticket</p><p>❌ Record $600 as a reduction in liability</p><p>Explanation</p><p>In this scenario, Paradigm Tickets is acting as an agent in the sale of concert tickets, not as the principal. The key accounting concept here is distinguishing between principal and agent relationships:</p><p>Principal: Records the gross amount as revenue (would be $600 if Paradigm were the principal)</p><p>Agent: Records only the commission or fee as revenue (the $50 difference)</p><p>Since Paradigm is merely facilitating the transaction between customers and the event organizer and takes only a portion of the payment as their fee, they&#x27;re acting as an agent and should recognize only their commission as revenue.</p><p>Journal Entries</p><p>When Paradigm sells a ticket as an agent, the appropriate journal entries would be:</p><p>Account<br>Debit<br>Credit</p><p>| Cash<br>| $600<br>|</p><p>| Liability to Event Organizer<br>|<br>| $550</p><p>| Commission Revenue<br>|<br>| $50</p><p>When paying the event organizer:</p><p>Account<br>Debit<br>Credit</p><p>| Liability to Event Organizer<br>| $550<br>|</p><p>| Cash<br>|<br>| $550</p><p>Key Accounting Principles</p><p>As an agent, Paradigm records only its commission ($50) as revenue</p><p>The $550 owed to the event organizer is treated as a liability, not revenue</p><p>The total cash collected ($600) is not relevant for revenue recognition</p><p>Summary</p><p>When a company acts as an agent in a transaction, revenue recognition is limited to the commission or fee earned. In this case, Paradigm Tickets should record $50 per ticket as revenue, representing their commission on the transaction. The remaining $550 represents a liability that must be paid to the event organizer and is not part of Paradigm&#x27;s revenue.</p>`,
    },
  ],
};
