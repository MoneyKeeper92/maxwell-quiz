import type { Quiz } from "../types";

export const inventoryQuiz: Quiz = {
  key: "inventory",
  title: "Inventory",
  subtitle: "Inventory",
  discipline: "intermediate",
  course: "intermediate",
  questions: [
    {
      id: "4940",
      prompt: `Throughout the month, Company E made the following transactions:

January 1: Beginning Inventory - 100 units at $10 each

January 10: Purchase - 200 units at $12 each

January 20: Purchase - 150 units at $15 each

January 25: Sale - 300 units

Assuming Company E uses the FIFO method, calculate the cost of goods sold for the sale on January 25.`,
      choices: [
        `$3,400`,
        `$3,750`,
        `$4,200`,
        `$4,500`,
      ],
      correctIndex: 0,
      explanation: `<h3 class="exp-title">Calculating Cost of Goods Sold (COGS) Using FIFO</h3><p>FIFO Method Explanation</p><p>The FIFO (First-In, First-Out) inventory method assumes that the oldest inventory items (first purchased) are sold first. When calculating Cost of Goods Sold (COGS), we need to track the chronological order of purchases and use the earliest purchases first when determining cost.</p><p>FIFO Calculation for January</p><p>Available Inventory (chronological order):</p><p>Date<br>Description<br>Units<br>Cost per Unit<br>Total Cost</p><p>| Beginning<br>| Initial Inventory<br>| 100<br>| $10<br>| $1,000</p><p>| Jan 10<br>| Purchase<br>| 200<br>| $12<br>| $2,400</p><p>| Jan 20<br>| Purchase<br>| 150<br>| $15<br>| $2,250</p><p>Calculating COGS for Sale on Jan 25 (300 units):</p><p>Under FIFO, we sell the oldest inventory first:</p><p>Layer<br>Units Sold<br>Cost per Unit<br>Cost</p><p>| Beginning Inventory (First)<br>| 100<br>| $10<br>| $1,000</p><p>| Jan 10 Purchase (Second)<br>| 200<br>| $12<br>| $2,400</p><p>| Total COGS<br>| 300<br>|<br>| $3,400</p><p>Analysis of Results</p><p>When the company sold 300 units on January 25, using FIFO, we used:</p><p>All 100 units from beginning inventory at $10 each = $1,000</p><p>All 200 units from the January 10 purchase at $12 each = $2,400</p><p>This gives us a total Cost of Goods Sold of $3,400.</p><p>Remaining Inventory</p><p>After the sale, the remaining inventory consists of:</p><p>150 units from the January 20 purchase at $15 each = $2,250</p><p>Journal Entry for COGS</p><p>Account<br>Debit<br>Credit</p><p>| Cost of Goods Sold<br>| $3,400<br>|</p><p>| Inventory<br>|<br>| $3,400</p><p>| To record cost of goods sold for January 25 sale</p><p>Correct Answer</p><p>✓ $3,400</p><p>✗ $3,750</p><p>✗ $4,200</p><p>✗ $4,500</p><p>Summary</p><p>Using the FIFO method, the Cost of Goods Sold for the sale of 300 units on January 25 is $3,400. This was calculated by using the oldest inventory first: all 100 units from beginning inventory ($1,000) and 200 units from the January 10 purchase ($2,400).</p>`,
    },
    {
      id: "4941",
      prompt: `Company F's transactions for the month were as follows:

February 1: Beginning Inventory - 120 units at $20 each

February 15: Purchase - 180 units at $25 each

February 23: Purchase - 200 units at $27 each

February 28: Sale - 400 units

If Company F uses the LIFO method, what is the cost of goods sold for the sale on February 28?`,
      choices: [
        `$10,300`,
        `$10,800`,
        `$11,000`,
        `$11,200`,
      ],
      correctIndex: 0,
      explanation: `<h3 class="exp-title">LIFO Inventory Valuation</h3><p>Explanation</p><p>Under the LIFO (Last-In, First-Out) method, the most recently purchased inventory items are assumed to be sold first. To calculate the cost of goods sold for the February 28 sale, we need to identify which inventory layers were used.</p><p>Calculation</p><p>Date<br>Transaction<br>Units<br>Unit Cost<br>Total Cost</p><p>| Feb 1<br>| Beginning Inventory<br>| 120<br>| $20<br>| $2,400</p><p>| Feb 15<br>| Purchase<br>| 180<br>| $25<br>| $4,500</p><p>| Feb 23<br>| Purchase<br>| 200<br>| $27<br>| $5,400</p><p>For the sale of 400 units on February 28 using LIFO method:</p><p>First, take the 200 units from February 23 purchase at $27 each: 200 × $27 = $5,400</p><p>Next, take 180 units from February 15 purchase at $25 each: 180 × $25 = $4,500</p><p>Finally, take the remaining 20 units from February 1 beginning inventory at $20 each: 20 × $20 = $400</p><p>Total Cost of Goods Sold = $5,400 + $4,500 + $400 = $10,300</p><p>Journal Entry</p><p>Account<br>Debit<br>Credit</p><p>| Cost of Goods Sold<br>| $10,300<br>|</p><p>| Inventory<br>|<br>| $10,300</p><p>To record cost of goods sold under LIFO method</p><p>Answer Analysis</p><p>✓ CORRECT</p><p>$10,300</p><p>✗ INCORRECT</p><p>$10,800</p><p>✗ INCORRECT</p><p>$11,000</p><p>✗ INCORRECT</p><p>$11,200</p><p>Summary</p><p>Using the LIFO method, Company F&#x27;s cost of goods sold for the sale of 400 units on February 28 is $10,300. This represents the sum of the most recently purchased inventory costs (from newest to oldest): 200 units at $27, 180 units at $25, and 20 units at $20. The correct answer is $10,300.</p>`,
    },
    {
      id: "4930",
      prompt: `Which U.S. GAAP inventory costing method would a company that wishes to maximize profits in a period of rising prices use?`,
      choices: [
        `FIFO.`,
        `Dollar-value LIFO.`,
        `Weighted average.`,
        `Moving average.`,
      ],
      correctIndex: 0,
      explanation: `<h3 class="exp-title">Inventory Costing Methods During Rising Prices</h3><p>Correct Answer</p><p>FIFO is correct ✓</p><p>Explanation</p><p>To maximize profits during a period of rising prices, a company would choose the First-In, First-Out (FIFO) inventory costing method. With FIFO, the oldest inventory items (which cost less during inflation) are expensed first, leaving the newer, more expensive items in ending inventory.</p><p>Why FIFO Maximizes Profits During Rising Prices:</p><p>Lower cost of goods sold (COGS) because older, less expensive items are expensed first</p><p>Higher gross profit margin due to the lower COGS</p><p>Higher net income as a result</p><p>Ending inventory valuation is more current and reflective of replacement costs</p><p>Comparative Example</p><p>Consider this example with rising prices over a quarter:</p><p>Date<br>Transaction<br>Quantity<br>Unit Cost<br>Total</p><p>| Jan 1<br>| Beginning Inventory<br>| 100<br>| $10<br>| $1,000</p><p>| Feb 1<br>| Purchase<br>| 100<br>| $12<br>| $1,200</p><p>| Mar 1<br>| Purchase<br>| 100<br>| $15<br>| $1,500</p><p>If 150 units are sold during the quarter, the different methods would result in:</p><p>Method<br>COGS<br>Ending Inventory<br>Gross Profit Effect</p><p>| FIFO<br>| $1,700<br>| $2,000<br>| Highest</p><p>| Dollar-value LIFO<br>| $2,050<br>| $1,650<br>| Lowest</p><p>| Weighted Average<br>| $1,850<br>| $1,850<br>| Middle</p><p>Analysis of Other Methods</p><p>Dollar-value LIFO</p><p>This method would reduce profits during rising prices because:</p><p>Newest (most expensive) items are expensed first</p><p>Higher COGS reduces gross profit margin</p><p>Often used to minimize taxable income, not maximize reported profits</p><p>Weighted Average &amp; Moving Average</p><p>These methods produce results between FIFO and LIFO:</p><p>Average out the cost of all inventory items</p><p>Produce moderate COGS and moderate profits</p><p>Less sensitive to price fluctuations</p><p>Moving average updates with each transaction while weighted average calculates periodically</p><p>Summary</p><p>FIFO maximizes reported profits during periods of rising prices because it assigns the oldest (lowest) costs to COGS</p><p>LIFO minimizes profits (and taxes) during inflation by assigning newest (highest) costs to COGS</p><p>Average methods fall between FIFO and LIFO in their effect on profits</p><p>Companies may select inventory methods based on financial reporting goals, tax considerations, industry norms, and operational realities</p><p>For profit maximization during rising prices, FIFO is the optimal inventory costing method under U.S. GAAP.</p>`,
    },
    {
      id: "4937",
      prompt: `A firm’s ending inventory balance was overstated by $1,000. Which of the following statements is correct according to a periodic inventory system?`,
      choices: [
        `The retained earnings were overstated by $1,000.`,
        `The cost of goods sold was overstated by $1,000.`,
        `The cost of goods available for sale was overstated by $1,000.`,
        `The gross margin was understated by $1,000.`,
      ],
      correctIndex: 0,
      explanation: `<h3 class="exp-title">Impact of Inventory Error on Financial Statements</h3><p>📹 Video Walkthrough</p><p>Watch this comprehensive video explanation that demonstrates how inventory errors ripple through financial statements in a periodic inventory system. The video covers the relationship between ending inventory, cost of goods sold, gross margin, net income, and retained earnings.</p><p>💡 Pro Tip: Watch the video first to understand the inventory error cascade effect, then review the detailed analysis below.</p><p>📊 Explanation</p><p>When the ending inventory is overstated in a periodic inventory system, it creates a ripple effect on several financial statement accounts. Let&#x27;s analyze the impact of this $1,000 overstatement.</p><p>🔄 How Inventory Errors Affect the Financial Statements</p><p>Financial Component<br>Effect of Overstated Ending Inventory</p><p>| Cost of Goods Sold Formula<br>| Beginning Inventory + Purchases - Ending Inventory</p><p>| Effect on COGS<br>| When ending inventory is overstated by $1,000, COGS is understated by $1,000</p><p>| Effect on Gross Margin<br>| When COGS is understated, gross margin is overstated</p><p>| Effect on Net Income<br>| When gross margin is overstated, net income is overstated</p><p>| Effect on Retained Earnings<br>| When net income is overstated, retained earnings is overstated</p><p>🧮 Numerical Example</p><p>Assume the following scenario:</p><p>Beginning Inventory: $5,000</p><p>Purchases: $20,000</p><p>Correct Ending Inventory: $4,000</p><p>Overstated Ending Inventory: $5,000</p><p>Calculation with Correct Inventory:</p><p>COGS = $5,000 + $20,000 - $4,000 = $21,000</p><p>Calculation with Overstated Inventory:</p><p>COGS = $5,000 + $20,000 - $5,000 = $20,000</p><p>📈 The difference shows that COGS is understated by $1,000 when inventory is overstated.</p><p>✅ Analysis of Each Statement</p><p>✅ The retained earnings were overstated by $1,000.</p><p>CORRECT: When ending inventory is overstated, COGS is understated, which causes net income to be overstated. Since net income flows into retained earnings, retained earnings will be overstated by the same amount ($1,000).</p><p>❌ The cost of goods sold was overstated by $1,000.</p><p>INCORRECT: When ending inventory is overstated, COGS is understated (not overstated) by the same amount.</p><p>❌ The cost of goods available for sale was overstated by $1,000.</p><p>INCORRECT: Cost of goods available for sale (Beginning Inventory + Purchases) is not affected by ending inventory errors.</p><p>❌ The gross margin was understated by $1,000.</p><p>INCORRECT: When COGS is understated, gross margin (Sales - COGS) is overstated (not understated).</p><p>🎓 Summary</p><p>When ending inventory is overstated, the following cascade effect occurs:</p><p>COGS</p><p>Understated ↓</p><p>→</p><p>Gross Margin</p><p>Overstated ↑</p><p>→</p><p>Net Income</p><p>Overstated ↑</p><p>→</p><p>Retained Earnings</p><p>Overstated ↑</p><p>✅ Therefore, the correct answer is:</p><p>&quot;The retained earnings were overstated by $1,000.&quot;</p>`,
    },
    {
      id: "4945",
      prompt: `Company K recorded the following transactions in September:

September 1: Beginning Inventory - 200 units at $54 each

September 18: Purchase - 300 units at $62 each

September 25: Purchase - 200 units at $63 each

September sales: 400 units in total were sold during the month

What is the cost of goods sold for September using the weighted average method?`,
      choices: [
        `$23,200`,
        `$24,000`,
        `$24,400`,
        `$25,000`,
      ],
      correctIndex: 1,
      explanation: `<h3 class="exp-title">Weighted Average Inventory Costing Method</h3><p>Explanation: Weighted Average Method</p><p>The weighted average method calculates the cost of goods sold based on the weighted average cost per unit of all available inventory during the period. This requires us to calculate a total weighted average cost per unit and then apply it to the units sold.</p><p>Step 1: Calculate Total Units and Total Cost</p><p>Date<br>Description<br>Units<br>Unit Cost<br>Total Cost</p><p>| Sept 1<br>| Beginning Inventory<br>| 200<br>| $54.00<br>| $10,800</p><p>| Sept 18<br>| Purchase<br>| 300<br>| $62.00<br>| $18,600</p><p>| Sept 25<br>| Purchase<br>| 200<br>| $63.00<br>| $12,600</p><p>| Total Available<br>| 700<br>|<br>| $42,000</p><p>Step 2: Calculate Weighted Average Cost per Unit</p><p>Weighted Average Cost per Unit = Total Cost ÷ Total Units</p><p>Weighted Average Cost per Unit = $42,000 ÷ 700 units = $60.00 per unit</p><p>Step 3: Calculate Cost of Goods Sold</p><p>Cost of Goods Sold = Units Sold × Weighted Average Cost per Unit</p><p>Cost of Goods Sold = 400 units × $60.00 = $24,000</p><p>Analysis</p><p>Using the weighted average method, we determine a single average cost that applies to all units. This approach smooths out price fluctuations over time and provides a balanced representation of costs. It&#x27;s particularly useful when inventory items are indistinguishable from one another and stored together.</p><p>Note: The alternate multiple-choice options represent the exact calculations if a student were to incorrectly use the FIFO method ($23,200) or the LIFO method ($25,000).</p><p>Journal Entry</p><p>Account<br>Debit<br>Credit</p><p>| Cost of Goods Sold<br>| $24,000<br>|</p><p>| Inventory<br>|<br>| $24,000</p><p>(To record cost of goods sold for September using the weighted average method)</p><p>Conclusion</p><p>For Company K&#x27;s September inventory transactions, the cost of goods sold using the weighted average method is $24,000. This represents the cost of the 400 units sold during the month, correctly blended at the clean average cost of $60.00 per unit.</p><p>Correct Answer: B) $24,000</p>`,
    },
    {
      id: "4946",
      prompt: `Company J had the following transactions:

July 1: Beginning Inventory - 150 units at $40 each

July 12: Purchase - 200 units at $45 each

July 18: Sale - 100 units

August 10: Purchase - 150 units at $50 each

August 25: Sale - 250 units

Using the perpetual LIFO method, calculate the cost of goods sold for the sales during the period.`,
      choices: [
        `$19,000`,
        `$19,500`,
        `$16,500`,
        `$20,000`,
      ],
      correctIndex: 2,
      explanation: `<h3 class="exp-title">Perpetual LIFO Inventory Calculation</h3><p>Understanding Perpetual LIFO Method</p><p>Under the perpetual LIFO (Last-In, First-Out) inventory system, each time a sale occurs, the most recently purchased inventory items are considered sold first. The system continuously tracks inventory balances after each transaction.</p><p>Inventory Tracking</p><p>Date<br>Transaction<br>Units<br>Unit Cost<br>Total</p><p>| July 1<br>| Beginning Inventory<br>| 150<br>| $40<br>| $6,000</p><p>| July 12<br>| Purchase<br>| 200<br>| $45<br>| $9,000</p><p>| July 18<br>| Sale (100 units)<br>| LIFO: 100 units from July 12 purchase @ $45 = $4,500</p><p>| August 10<br>| Purchase<br>| 150<br>| $50<br>| $7,500</p><p>| August 25<br>| Sale (250 units)<br>|<br>LIFO: 150 units from Aug 10 @ $50 = $7,500</p><p>100 units from July 12 @ $45 = $4,500</p><p>Total: $12,000</p><p>Calculation of Cost of Goods Sold</p><p>Let&#x27;s calculate the total cost of goods sold for both sales:</p><p>July 18 Sale: 100 units @ $45 = $4,500</p><p>August 25 Sale: 150 units @ $50 + 100 units @ $45 = $12,000</p><p>Total Cost of Goods Sold: $4,500 + $12,000 = $16,500</p><p>Journal Entries</p><p>July 18 Sale:</p><p>| Cost of Goods Sold<br>| $4,500<br>|</p><p>| Inventory<br>|<br>| $4,500</p><p>August 25 Sale:</p><p>| Cost of Goods Sold<br>| $12,000<br>|</p><p>| Inventory<br>|<br>| $12,000</p><p>Verification of Answer</p><p>$19,000</p><p>❌ Incorrect</p><p>$19,500</p><p>❌ Incorrect</p><p>$16,500</p><p>✓ Correct</p><p>$20,000</p><p>❌ Incorrect</p><p>Summary</p><p>Using the perpetual LIFO method, we determined that the cost of goods sold for the sales during the period was $16,500. This was calculated by tracking inventory after each transaction and determining which units were sold based on the LIFO principle. For each sale, we used the most recently purchased inventory first, resulting in $4,500 COGS for the July 18 sale and $12,000 COGS for the August 25 sale.</p>`,
    },
    {
      id: "4931",
      prompt: `The replacement cost of an inventory item is below the net realizable value and above the net realizable value less a normal profit margin. The inventory item's original cost is above the net realizable value. Under the lower of cost or market method, the inventory item should be valued at:`,
      choices: [
        `Original cost.`,
        `Replacement cost.`,
        `Net realizable value.`,
        `Net realizable value less normal profit margin.`,
      ],
      correctIndex: 1,
      explanation: `Lower of Cost or Market (LCM) Valuation

📹 Video Walkthrough

Watch this comprehensive video explanation that demonstrates how to apply the Lower of Cost or Market (LCM) method for inventory valuation. The video covers determining market value using the three-value approach and comparing it to original cost.

💡 Pro Tip: Watch the video first to understand LCM concepts, then review the detailed analysis below.

🔑 Key Concepts

Market Value Determination: When applying the Lower of Cost or Market (LCM) method, the market value is determined as the middle value among three amounts:

💰 Replacement Cost

Current cost to replace inventory

📈 Net Realizable Value (NRV)

Selling price - selling costs

📉 NRV - Normal Profit

NRV less normal profit margin

⚠️ Important: Market value is constrained by an upper limit (NRV) and a lower limit (NRV - NPM).

📊 Analysis of the Given Scenario

We have the following information:

Value Type
Relationship

| Original Cost
| Above Net Realizable Value ⬆️

| Replacement Cost
| Below Net Realizable Value ⬇️

Above Net Realizable Value less Normal Profit Margin ⬆️

🎯 LCM Process:

Determine market value (middle value of the three amounts)

Compare market value to original cost

Use the lower of the two values

🔍 Determination of Market Value

Given the relationships:

NRV - NPM < Replacement Cost < NRV

✅ Conclusion: The replacement cost is the middle value, so it's designated as the market value according to the LCM rules.

⚖️ Comparing Cost and Market Value

Now we compare:

📊 Original Cost

Above NRV (Higher) ⬆️

💰 Market Value

(Replacement Cost)

Below NRV (Lower) ⬇️

Since the original cost is above NRV and the replacement cost is below NRV:

Original Cost > NRV > Replacement Cost

📋 Therefore: The replacement cost (market value) is lower than the original cost.

🎓 Conclusion

Under the Lower of Cost or Market method, we choose the lower of:

Original cost

Market value (middle value of replacement cost, NRV, and NRV-NPM)

In this case, the market value is the replacement cost, which is lower than the original cost.

Therefore, the inventory item should be valued at:

✅ REPLACEMENT COST`,
    },
    {
      id: "4938",
      prompt: `At the end of the year, Ian Co. determined its inventory to be $258,000 on a FIFO (first-in, first-out) basis. The current replacement cost of this inventory was $230,000. Ian estimates that it could sell the inventory for $275,000 at a disposal cost of $14,000. If Ian's normal profit margin for its inventory was $10,000, what would be its net carrying value under lower of cost or net realizable value?`,
      choices: [
        `$230,000`,
        `$251,000`,
        `$258,000`,
        `$261,000`,
      ],
      correctIndex: 2,
      explanation: `<h3 class="exp-title">Lower of Cost or Net Realizable Value (LCNRV) for Inventory</h3><p>Explanation</p><p>To determine the proper carrying value of inventory under the Lower of Cost or Net Realizable Value rule, we need to compare the cost of the inventory with its net realizable value, and choose the lower of the two values.</p><p>Given Information</p><p>FIFO Cost: $258,000</p><p>Current Replacement Cost: $230,000</p><p>Estimated Selling Price: $275,000</p><p>Disposal Costs: $14,000</p><p>Normal Profit Margin: $10,000</p><p>Analysis</p><p>Step 1: Calculate Net Realizable Value (NRV)</p><p>NRV = Estimated Selling Price - Disposal Costs</p><p>NRV = $275,000 - $14,000 = $261,000</p><p>Step 2: Compare NRV with Cost</p><p>Measure<br>Amount</p><p>| Cost (FIFO)<br>| $258,000</p><p>| Net Realizable Value<br>| $261,000</p><p>Since NRV ($261,000) &gt; Cost ($258,000), the inventory should be reported at cost.</p><p>Step 3: Determine Net Carrying Value</p><p>According to the Lower of Cost or Net Realizable Value rule, we select the lower of:</p><p>• Cost: $258,000</p><p>• NRV: $261,000</p><p>Therefore, the net carrying value is $258,000.</p><p>Answer</p><p>The net carrying value under lower of cost or net realizable value is $258,000.</p><p>Important Notes</p><p>The current replacement cost ($230,000) and normal profit margin ($10,000) were not relevant for this particular calculation since we&#x27;re applying the Lower of Cost or Net Realizable Value rule.</p><p>Net Realizable Value is the estimated selling price minus the estimated costs of completion and disposal.</p><p>When NRV is greater than cost, no write-down is necessary, and inventory is reported at cost.</p><p>LCNRV is an accounting principle that ensures inventory is not overstated in the financial statements.</p>`,
    },
    {
      id: "4939",
      prompt: `Delar Co. completed its year-end physical count of inventory. The inventory was valued at first-in, first-out (FIFO) costs and totaled $500,000. Delar subsequently noted the following two items:

1,000 units of inventory with a FIFO cost of $10 each were shipped and billed to a customer, FOB destination, and had not yet arrived at the customer's location as of year-end. These items were excluded from the physical count.

Additionally, 6,000 units at a FIFO cost of $5 each were held on consignment for one of its suppliers, but were included in the physical count.

What amount should Delar report as inventory at year-end?`,
      choices: [
        `$500,000`,
        `$480,000`,
        `$510,000`,
        `$470,000`,
      ],
      correctIndex: 1,
      explanation: `<h3 class="exp-title">Year-End Inventory Valuation</h3><p>📹 Video Walkthrough</p><p>Watch this comprehensive video explanation that demonstrates how to properly value year-end inventory by understanding ownership rules for FOB shipping terms and consignment arrangements. The video covers what to include and exclude from inventory counts based on legal title.</p><p>💡 Pro Tip: Watch the video first to understand inventory ownership principles, then review the detailed calculations below.</p><p>📦 Explanation of Inventory Valuation</p><p>To determine the correct year-end inventory amount, we need to carefully consider what should and should not be included in the inventory count, based on ownership (title) of the goods.</p><p>🔧 Adjustments to Physical Count</p><p>Adjustment Item<br>Explanation<br>Amount</p><p>| Physical count (FIFO)<br>| Starting inventory amount<br>| $500,000</p><p>| 1,000 units shipped FOB destination<br>| Units in transit that were excluded from count but still owned by Delar (FOB destination means title hasn&#x27;t passed yet)<br>| + $10,000</p><p>| 6,000 consigned units<br>| Units that were included in count but are not owned by Delar (consigned goods remain property of consignor)<br>| - $30,000</p><p>| Corrected Inventory<br>|<br>| $480,000</p><p>🧮 Calculation:</p><p>$500,000 + (1,000 × $10) - (6,000 × $5) = $500,000 + $10,000 - $30,000 = $480,000</p><p>📋 Analysis</p><p>🚚 FOB Destination</p><p>✅ INCLUDE: Add $10,000</p><p>When goods are shipped FOB destination, the seller retains title until the goods reach the buyer. Therefore, these goods should be included in the seller&#x27;s inventory even if they are in transit.</p><p>📦 Consignment</p><p>❌ EXCLUDE: Subtract $30,000</p><p>Consigned goods remain the property of the consignor (sender). The consignee (receiver) never owns these goods and should not include them in their inventory.</p><p>✅ The Correct Answer</p><p>$480,000</p><p>🎓 Summary</p><p>Key Principle: When valuing inventory, it&#x27;s critical to include only items that the company legally owns (has title to), regardless of their physical location.</p><p>✅ ADD BACK (+$10,000)</p><p>The FOB destination goods are owned by Delar but weren&#x27;t in the physical count</p><p>❌ SUBTRACT (-$30,000)</p><p>The consigned goods were counted but aren&#x27;t owned by Delar</p><p>Final Result: The correct inventory value after these adjustments is $480,000</p>`,
    },
    {
      id: "8412",
      prompt: `Oceanic Importers purchased $8,000,000 of merchandise during Year 1 and also incurred $900,000 of inbound freight costs. Outbound shipping to customers totaled $700,000. Ending inventory is $1,600,000 at year-end. What is Oceanic’s cost of goods sold (COGS) for the year?`,
      choices: [
        `$6,000,000`,
        `$6,400,000`,
        `$7,300,000`,
        `$8,000,000`,
      ],
      correctIndex: 2,
      explanation: `<h3 class="exp-title">Cost of Goods Sold (COGS) Calculation</h3><p>The Correct Answer Is:</p><p>$6,000,000</p><p>$6,400,000</p><p>$7,300,000</p><p>$8,000,000</p><p>Calculation Process</p><p>Step 1: Calculate Goods Available for Sale</p><p>We need to include all costs necessary to get inventory ready for sale:</p><p>Purchases: $8,000,000</p><p>+ Inbound freight: $900,000 (included in inventory cost)</p><p>= Goods available for sale: $8,900,000</p><p>Step 2: Calculate COGS</p><p>Apply the basic COGS formula:</p><p>Item<br>Amount</p><p>| Goods Available for Sale<br>| $8,900,000</p><p>| Less: Ending Inventory<br>| ($1,600,000)</p><p>| Cost of Goods Sold<br>| $7,300,000</p><p>Step 3: Treatment of Outbound Shipping</p><p>The $700,000 in outbound shipping costs are excluded from COGS calculation:</p><p>Important: Outbound shipping costs ($700,000) are considered selling expenses (distribution costs) and are reported separately on the income statement. They do not factor into the COGS calculation.</p><p>Journal Entry Representation</p><p>The following journal entries help illustrate the accounting treatment:</p><p>Purchase of Merchandise with Inbound Freight</p><p>Account<br>Debit<br>Credit</p><p>| Merchandise Inventory<br>| $8,900,000<br>|</p><p>| Accounts Payable<br>|<br>| $8,900,000</p><p>Recording COGS at Year-End</p><p>Account<br>Debit<br>Credit</p><p>| Cost of Goods Sold<br>| $7,300,000<br>|</p><p>| Merchandise Inventory<br>|<br>| $7,300,000</p><p>Recording Outbound Shipping Costs</p><p>Account<br>Debit<br>Credit</p><p>| Shipping Expense (or Delivery Expense)<br>| $700,000<br>|</p><p>| Cash/Accounts Payable<br>|<br>| $700,000</p><p>Summary</p><p>COGS = $7,300,000</p><p>Inbound freight costs are included in inventory cost</p><p>Outbound freight costs are selling expenses, not part of COGS</p><p>COGS is calculated as: Goods Available for Sale ($8,900,000) - Ending Inventory ($1,600,000)</p>`,
    },
  ],
};
