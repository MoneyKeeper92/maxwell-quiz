"""Intermediate Accounting I midterm mock exam, questions 21 to 40."""
from .mx import E

RECORDS = [
    E(
        id="IA-MID-21", letter="B", headline="$400,000",
        why="Recompute cumulative gross profit on the current estimate, then subtract the $500,000 already recognized in Year 1.",
        rule=[
            "Under the cost-to-cost method each year is measured on the best information available at that date, and then the amount already recognized is backed out. The estimate of total cost changed between Year 1 and Year 2, so the percentage complete and the total expected profit are both recomputed from scratch before Year 1's figure is subtracted.",
        ],
        math=[
            ("Year 1: $1,500,000 estimated profit x ($1,500,000 / $4,500,000)", "$500,000"),
            ("Year 2 cumulative: $1,200,000 estimated profit x ($3,600,000 / $4,800,000)", "$900,000"),
            ("Less gross profit recognized in Year 1", "($500,000)"),
            ("Gross profit recognized in Year 2", "$400,000"),
        ],
        after_math="Estimated profit is the $6,000,000 price less estimated total cost: $4,500,000 at the end of Year 1 and $4,800,000 at the end of Year 2.",
        wrong={
            "A": "$300,000 is not what the cumulative method produces. Subtracting the Year 1 gross profit of $500,000 from the cumulative $900,000 leaves $400,000.",
            "C": "$500,000 is the Year 1 amount, not the Year 2 amount.",
            "D": "$900,000 is cumulative gross profit through the end of Year 2. Year 1 already reported $500,000 of it.",
        },
    ),
    E(
        id="IA-MID-22", letter="D", headline="Contract asset $30,000 and revenue $30,000",
        why="Product A was delivered, so the revenue is earned, but payment still depends on delivering Product B.",
        rule=[
            "Revenue follows the transfer of control, so delivering Product A in March earns $30,000 of revenue in March. The debit side is the question.",
            "A **receivable** is recorded only when the right to payment is unconditional, meaning nothing but time stands between the company and the cash. Here payment is conditioned on delivering Product B as well, so the right is conditional and the debit goes to a **contract asset**.",
        ],
        entry_title="The March entry",
        entry=[
            ("Contract Asset", "$30,000", ""),
            ("Revenue", "", "$30,000"),
        ],
        after_entry="When Product B is delivered in June, Wexler recognizes the remaining $20,000 of revenue and moves the contract asset to Accounts Receivable, because only time then separates it from payment.",
        wrong={
            "A": "A receivable requires an unconditional right to payment. Wexler must still deliver Product B before it can demand anything.",
            "B": "A contract liability arises when the customer pays before the entity performs. Here Wexler performed first and has not been paid.",
            "C": "Control of Product A transferred in March, which is when the revenue is earned. Waiting until June misstates both periods.",
        },
    ),
    E(
        id="IA-MID-23", letter="C", headline="$100,000",
        why="Revenue is the cash selling price at delivery. Everything above it is interest, earned over time.",
        rule=[
            "When payment is delayed long enough to matter, part of what the customer eventually hands over is interest rather than payment for the goods. The transaction price is the amount the customer would have paid in cash on the delivery date.",
            "The excess is **financing income**, recognized over the life of the arrangement, not at delivery.",
        ],
        math=[
            ("Cash selling price on January 1, Year 1, which is the revenue", "$100,000"),
            ("Amount to be received on December 31, Year 2", "$121,000"),
            ("Financing component, earned as interest over two years", "$21,000"),
        ],
        after_math="Interest revenue is $10,000 in Year 1 ($100,000 x 10%) and $11,000 in Year 2 ($110,000 x 10%).",
        wrong={
            "A": "$110,000 is the receivable after one year of interest, not the revenue at delivery.",
            "B": "$121,000 treats two years of interest as part of the selling price.",
            "D": "Control of the equipment passed on January 1, Year 1, so revenue is recognized then. It does not wait for cash.",
        },
    ),
    E(
        id="IA-MID-24", letter="C", headline="$75,150",
        why="Timing items correct the bank column, unrecorded items and errors correct the book column, and both land on $75,150.",
        rule=[
            "Both columns of a bank reconciliation must arrive at the same number, and that number is what belongs on the balance sheet. Timing items such as deposits in transit and outstanding checks correct the **bank** column. Items the bank knows about but the company has not recorded, and any company error, correct the **book** column.",
        ],
        math=[
            ("Balance per bank statement", "$78,400"),
            ("Deposits in transit", "$9,200"),
            ("Outstanding checks", "($12,450)"),
            ("Adjusted cash balance", "$75,150"),
        ],
        after_math="The books reach the same figure: $72,910, plus $630 because the check was recorded at $1,920 but written for $1,290, less the $65 service charge, less the $1,400 NSF check, plus $3,075 for the note and interest the bank collected, is $75,150.",
        wrong={
            "A": "$72,075 leaves out the $3,075 note collection. The bank has already put that cash in the account, so the books have to catch up.",
            "B": "$73,890 subtracts the $630 recording error instead of adding it. Recording a $1,290 check as $1,920 understated cash, so the correction increases the book balance.",
            "D": "$78,225 adds the $3,075 collection a second time. The bank balance already includes it.",
        },
    ),
    E(
        id="IA-MID-25", letter="A", headline="Debit various expenses $402, debit Cash Short and Over $12, credit Cash $414",
        why="The fund needs $414 to get back to $500, and the receipts explain only $402 of it.",
        rule=[
            "An imprest fund is always restored to its fixed balance, so the credit to Cash is whatever it takes to bring the fund back to $500. The debits are the receipts on hand.",
            "When the receipts do not fully account for the cash that left the fund, the gap goes to **Cash Short and Over**.",
        ],
        math=[
            ("Imprest balance", "$500"),
            ("Cash remaining in the fund", "($86)"),
            ("Cash needed to replenish", "$414"),
            ("Receipts on hand", "($402)"),
            ("Unexplained shortage, to Cash Short and Over", "$12"),
        ],
        entry_title="The replenishment entry",
        entry=[
            ("Various expenses, per the receipts", "$402", ""),
            ("Cash Short and Over", "$12", ""),
            ("Cash", "", "$414"),
        ],
        wrong={
            "B": "Crediting Petty Cash has the right amounts in the wrong account. Petty Cash stays at $500 and changes only when the size of the fund changes. The cash used to replenish comes out of Cash.",
            "C": "Charging $414 to expense invents $12 of receipts that were never produced.",
            "D": "Replenishing only $402 leaves the fund at $488 instead of $500 and leaves the $12 shortage unrecorded.",
        },
    ),
    E(
        id="IA-MID-26", letter="B", headline="As a current asset reported separately from cash and cash equivalents",
        why="The balance is legally restricted, so it leaves cash, and it supports short-term borrowing, so it stays current.",
        rule=[
            "Cash reported as cash has to be available to pay obligations. A legally restricted compensating balance is not, so it is separated out.",
            "Where it lands depends on what it supports. A balance tied to **short-term** borrowing stays in current assets on its own line, and a balance tied to long-term borrowing is classified as a noncurrent asset.",
        ],
        wrong={
            "A": "Burying a restricted balance in unrestricted cash overstates the liquidity available to creditors.",
            "C": "Noncurrent treatment is for balances that support long-term borrowing. This one supports a short-term line.",
            "D": "A compensating balance arrangement gives no legal right of setoff, so the asset and the borrowing cannot be netted.",
        },
    ),
    E(
        id="IA-MID-27", letter="D", headline="A customer's check returned by the bank marked NSF",
        why="It is a book-side item, so the company's records are wrong until it records an entry.",
        rule=[
            "A reconciliation has two columns and only one of them produces journal entries. Differences on the **bank** side are timing items or bank mistakes, and both correct themselves with no action by the company. Differences on the **book** side exist because the company's records are wrong or incomplete, and those need entries.",
            "Book-side items include service charges, NSF checks, notes collected by the bank, interest earned and the company's own recording errors.",
        ],
        entry_title="The entry for the NSF check",
        entry=[
            ("Accounts Receivable", "NSF amount", ""),
            ("Cash", "", "NSF amount"),
        ],
        after_entry="An NSF check means cash the company counted never actually arrived, so the entry puts the receivable back.",
        wrong={
            "A": "A deposit in transit was recorded correctly by the company. The bank just has not processed it yet.",
            "B": "An outstanding check was recorded correctly when it was written. The payee has not presented it yet.",
            "C": "A check posted to the wrong account is a bank error. The bank corrects its own records, and the company records nothing.",
        },
    ),
    E(
        id="IA-MID-28", letter="A", headline="$39,000",
        why="Percentage of sales sets the expense, and the ending allowance is what survives write-offs and recoveries.",
        rule=[
            "The percentage-of-sales method sets the **expense**, not the ending allowance. That is the opposite of an aging, where the schedule sets the ending balance and the expense falls out as the plug. Here the expense is computed first and added to the account, and the ending balance is whatever the roll-forward produces.",
            "A recovery reinstates the receivable and credits the allowance, so it flows back into the allowance rather than into income.",
        ],
        math=[
            ("Allowance, January 1", "$38,000"),
            ("Write-offs", "($71,000)"),
            ("Recoveries", "$9,000"),
            ("Bad debt expense, $4,200,000 x 1.5%", "$63,000"),
            ("Allowance, December 31", "$39,000"),
        ],
        wrong={
            "B": "$30,000 leaves out the $9,000 of recoveries.",
            "C": "$63,000 is the expense for the year, not the ending balance of the allowance.",
            "D": "$101,000 adds the expense to the opening balance and never runs the write-offs or the recoveries through the account.",
        },
    ),
    E(
        id="IA-MID-29", letter="D",
        headline="Debit Cash $60,000; credit Accounts Receivable $58,800; credit Sales Discounts Forfeited $1,200",
        why="The net method recorded the receivable at $58,800, and the extra $1,200 collected for paying late is not sales revenue.",
        rule=[
            "The net method assumes from the start that the customer will take the discount, so the sale and the receivable are recorded at the discounted amount. When the customer misses the window and pays full price, the extra cash is not part of the sale.",
            "It compensates the seller for waiting, so it is credited to **Sales Discounts Forfeited**.",
        ],
        math=[
            ("Gross invoice", "$60,000"),
            ("Discount available, 2%", "($1,200)"),
            ("Receivable recorded under the net method", "$58,800"),
        ],
        entry_title="The collection entry",
        entry=[
            ("Cash", "$60,000", ""),
            ("Accounts Receivable", "", "$58,800"),
            ("Sales Discounts Forfeited", "", "$1,200"),
        ],
        wrong={
            "A": "The receivable was recorded at $58,800, so crediting $60,000 leaves a $1,200 debit balance behind.",
            "B": "This is the gross method entry for a customer who pays within the discount period. Sequoia uses the net method, and this customer paid late.",
            "C": "The forfeited discount is not extra sales revenue. It pays for the time the customer took, which makes it other income.",
        },
    ),
    E(
        id="IA-MID-30", letter="B", headline="$27,000",
        why="The loss is the $15,000 finance fee plus the $12,000 recourse obligation. The holdback is an asset, not a cost.",
        rule=[
            "When a factoring arrangement qualifies as a sale, the receivables leave the balance sheet and the difference between what was given up and what was received is a loss.",
            "The holdback is **not** a cost, because Northgate still expects to collect it and carries it as a receivable from the factor. The recourse obligation **is** a cost, because Northgate has agreed to stand behind accounts that go bad.",
        ],
        math=[
            ("Receivables sold", "$500,000"),
            ("Cash received, after the 5% holdback and the 3% fee", "($460,000)"),
            ("Due from factor, the holdback", "($25,000)"),
            ("Recourse obligation, a liability", "$12,000"),
            ("Loss on sale of receivables", "$27,000"),
        ],
        after_math="The same loss is the finance fee of $15,000 plus the recourse obligation of $12,000.",
        wrong={
            "A": "$15,000 is the finance fee alone. Recourse means Northgate keeps the risk of nonpayment, and that obligation is part of the loss.",
            "C": "$40,000 treats the $25,000 holdback as a cost. The holdback is an amount Northgate will still receive.",
            "D": "$52,000 counts both the holdback and the recourse obligation as costs, which charges Northgate for an amount it still expects to collect.",
        },
    ),
    E(
        id="IA-MID-31", letter="A", headline="$25,827",
        why="The note is recorded at its present value of $115,827, and the gain is measured against the land's $90,000 carrying amount.",
        rule=[
            "A note that carries no stated interest is not worth its face amount today. When neither the property nor the note has an observable market price, the note is recorded at the **present value** of the future payment, using the market rate for a comparable note.",
            "That present value is the consideration received, and the gain is measured against it.",
        ],
        math=[
            ("Face amount of the note", "$150,000"),
            ("Present value of $1, 9%, 3 periods", "x 0.77218"),
            ("Present value of the note", "$115,827"),
            ("Carrying amount of the land", "($90,000)"),
            ("Gain on sale of the land", "$25,827"),
        ],
        after_math="The $34,173 difference between face and present value is a discount, amortized to interest revenue over the three years.",
        wrong={
            "B": "$34,173 is the discount on the note. It becomes interest revenue over three years and is not part of the gain on the land.",
            "C": "$60,000 measures the gain against the $150,000 face amount, which treats three years of interest as proceeds from selling land.",
            "D": "$0 ignores that Ellery received consideration worth $115,827 for land carried at $90,000.",
        },
    ),
    E(
        id="IA-MID-32", letter="C", headline="45.6 days",
        why="Turnover uses the average receivable balance, and 365 divided by the turnover gives the collection period.",
        rule=[
            "The measure has two steps. Receivables turnover shows how many times the average receivable was collected and replaced during the year. Dividing the days in the year by that turnover converts it into the average number of days a sale sits in receivables.",
            "The denominator is the **average** balance, because the sales were made across the whole year and not on a single date.",
        ],
        math=[
            ("Average accounts receivable, ($340,000 + $390,000) / 2", "$365,000"),
            ("Receivables turnover, $2,920,000 / $365,000", "8.0 times"),
            ("Average collection period, 365 / 8.0", "45.6 days"),
        ],
        wrong={
            "A": "42.5 days uses the beginning balance of $340,000 alone. A single date does not represent a balance that moved all year.",
            "B": "91.3 days corresponds to a turnover of 4.0, which is what doubling the average balance instead of averaging it would give.",
            "D": "48.8 days uses the ending balance of $390,000 alone, which is also a single date.",
        },
    ),
    E(
        id="IA-MID-33", letter="D", headline="Net accounts receivable is unchanged; net income is unchanged",
        why="The write-off removes the same $7,500 from receivables and from the allowance, and touches no income statement account.",
        rule=[
            "Under the allowance method, the loss was already recognized when the allowance was set up. The write-off is only the moment a specific customer is identified. It removes equal amounts from the gross receivable and from the allowance that stood against it, so **net receivables do not move**.",
            "No expense account appears in the entry, so net income does not move either. The expense was recorded in the earlier period, when the allowance was established.",
        ],
        entry_title="The write-off entry",
        entry=[
            ("Allowance for Credit Losses", "$7,500", ""),
            ("Accounts Receivable", "", "$7,500"),
        ],
        wrong={
            "A": "Both decreasing is the direct write-off method, where no allowance exists and the loss hits expense when the account is written off.",
            "B": "Net receivables do not decrease. The allowance drops alongside the gross receivable, so the net figure holds.",
            "C": "Income does not decrease. The write-off entry touches no income statement account.",
        },
    ),
    E(
        id="IA-MID-34", letter="A", headline="$644,000",
        why="Adjust the physical count for who owns the goods: add the in-transit purchase and the consigned-out goods, and remove the consigned-in goods.",
        rule=[
            "The count records what is physically present, which is not always what is owned. Each adjustment turns on who held title at the balance sheet date. FOB shipping point transfers title when the carrier takes the goods. FOB destination transfers it on arrival. Consigned goods belong to the consignor wherever they sit.",
        ],
        math=[
            ("Physical count", "$620,000"),
            ("Purchased FOB shipping point, in transit: Cobalt's", "$38,000"),
            ("Consigned in from Delta: Delta's", "($45,000)"),
            ("Consigned out to a retailer: still Cobalt's", "$31,000"),
            ("Inventory at December 31", "$644,000"),
        ],
        after_math="The $22,000 sold FOB shipping point is already out of Cobalt's inventory. Title passed to the customer when the carrier picked the goods up, so nothing is added back.",
        wrong={
            "B": "$613,000 leaves out the $31,000 of goods consigned to a retailer. Shipping goods to a consignee is not a sale.",
            "C": "$666,000 adds back the $22,000 sold FOB shipping point. Title passed at shipment.",
            "D": "$689,000 leaves Delta's consigned goods in the count. Cobalt holds them, but Delta owns them.",
        },
    ),
    E(
        id="IA-MID-35", letter="D", headline="$120,000",
        why="The estimated inventory at the fire is $160,000, and $40,000 of it was salvaged.",
        rule=[
            "No count is possible after a fire, so cost of goods sold is estimated from the historical relationship between sales and cost. With a gross profit rate stated on sales, the cost ratio is one minus that rate.",
            "Once estimated cost of goods sold is known, ending inventory falls out of the goods available for sale, and the loss is that estimate less whatever survived.",
        ],
        math=[
            ("Estimated cost of goods sold, $1,400,000 x 70%", "$980,000"),
            ("Goods available for sale, $180,000 + $960,000", "$1,140,000"),
            ("Estimated inventory at August 31", "$160,000"),
            ("Salvaged inventory", "($40,000)"),
            ("Estimated loss from the fire", "$120,000"),
        ],
        wrong={
            "A": "$420,000 is the estimated gross profit ($1,400,000 x 30%), which is not an inventory amount.",
            "B": "$680,000 uses 30% as the cost ratio instead of 70%, so the gross profit rate and the cost ratio are swapped.",
            "C": "$160,000 is the estimated inventory at the moment of the fire, before crediting the $40,000 that was salvaged.",
        },
    ),
    E(
        id="IA-MID-36", letter="B", headline="$60,714",
        why="Markdowns stay out of the cost ratio but come off the retail inventory, which is what makes the method conventional.",
        rule=[
            "The word **conventional** means the retail method is applied so that it approximates lower of cost or market. That result comes from one deliberate omission: markdowns are left out of the cost ratio's denominator but are still subtracted in arriving at ending inventory at retail.",
            "Leaving them out of the ratio lowers it, and therefore lowers the inventory carried forward.",
        ],
        math=[
            ("Cost, beginning plus purchases, $60,000 + $280,000", "$340,000"),
            ("Retail for the ratio, $100,000 + $420,000 + $40,000 markups", "$560,000"),
            ("Cost-to-retail ratio, $340,000 / $560,000", "60.71%"),
            ("Ending inventory at retail, $560,000 - $20,000 markdowns - $440,000 sales", "$100,000"),
            ("Ending inventory at cost, $100,000 x 60.71%", "$60,714"),
        ],
        wrong={
            "A": "$60,000 is the beginning inventory at cost. It feeds the ratio but is not the ending balance.",
            "C": "$62,963 puts markdowns in the denominator ($340,000 / $540,000). That is the cost-basis variation, which does not approximate lower of cost or market.",
            "D": "$100,000 is ending inventory at retail. It still has to be converted to cost with the ratio.",
        },
    ),
    E(
        id="IA-MID-37", letter="C", headline="$518,500",
        why="Deflate to find real growth, price each new layer at its own year's index, and leave older layers alone.",
        rule=[
            "Dollar-value LIFO separates real growth in inventory from price inflation. Each year's ending inventory is deflated to base-year dollars to see whether the quantity actually grew. A real increase becomes a new layer, **priced at the index of the year it was added**.",
            "A layer keeps its own index forever, so older layers are not repriced as prices move.",
        ],
        math=[
            ("Base-year inventory", "$400,000"),
            ("Year 2 layer, ($472,500 / 1.05 - $400,000) x 1.05", "$52,500"),
            ("Year 3 layer, ($561,000 / 1.10 - $450,000) x 1.10", "$66,000"),
            ("Dollar-value LIFO inventory, end of Year 3", "$518,500"),
        ],
        after_math="Deflated, Year 2 is $450,000 at base-year prices and Year 3 is $510,000, so the real increases are $50,000 and $60,000.",
        wrong={
            "A": "$510,000 is inventory in base-year dollars, the figure used to test for real growth. It is not the reported balance.",
            "B": "$521,000 prices both layers at the Year 3 index of 1.10. A layer is priced once, at the index of the year it was added.",
            "D": "$561,000 is ending inventory at current cost, which is the starting point rather than the answer.",
        },
    ),
    E(
        id="IA-MID-38", letter="A", headline="$3,377,000",
        why="Subtract the $23,000 increase in the LIFO reserve during Year 2, not the whole reserve balance.",
        rule=[
            "The LIFO reserve is the cumulative difference between FIFO and LIFO inventory at a point in time. Because it is cumulative, the balance cannot adjust a single year's cost of goods sold. What matters is how much the reserve **moved during the year**, because that is the amount by which the two methods' expense differed in that year alone.",
            "A growing reserve means LIFO charged more to cost of goods sold than FIFO would have, which is the normal pattern when prices are rising.",
        ],
        math=[
            ("LIFO reserve, December 31, Year 2", "$115,000"),
            ("LIFO reserve, December 31, Year 1", "($92,000)"),
            ("Increase in the reserve during Year 2", "$23,000"),
            ("LIFO cost of goods sold", "$3,400,000"),
            ("FIFO cost of goods sold, $3,400,000 - $23,000", "$3,377,000"),
        ],
        wrong={
            "B": "$3,285,000 subtracts the entire ending reserve of $115,000, which holds the differences from every year since LIFO was adopted, not only Year 2.",
            "C": "$3,423,000 adds the $23,000 change. With the reserve rising, LIFO cost of goods sold is the higher figure, so FIFO's is lower.",
            "D": "$3,515,000 adds the whole ending reserve, which is wrong in both direction and amount.",
        },
    ),
    E(
        id="IA-MID-39", letter="D", headline="Year 2 net income is understated by $50,000; retained earnings is correct",
        why="The error reverses itself: income is too high in Year 1, too low in Year 2, and retained earnings ends up right.",
        rule=[
            "An ending inventory error works through cost of goods sold twice: once as the ending inventory of the year it happened, and again as the beginning inventory of the next year. The two effects run in opposite directions, so income is wrong in both years but by offsetting amounts.",
            "By the end of Year 2 the error has corrected itself, because Year 2 ending inventory was counted correctly.",
        ],
        math=[
            ("Year 1: ending inventory overstated, so net income overstated by", "$50,000"),
            ("Year 2: the same figure as beginning inventory, so net income understated by", "($50,000)"),
            ("Net effect on retained earnings at December 31, Year 2", "$0"),
        ],
        wrong={
            "A": "The overstatement belongs to Year 1. In Year 2 the inflated beginning inventory pushes cost of goods sold up and income down.",
            "B": "Beginning inventory is part of cost of goods sold, so Year 2 income cannot escape the error.",
            "C": "Retained earnings accumulates both years, and a $50,000 overstatement followed by a $50,000 understatement nets to zero.",
        },
    ),
    E(
        id="IA-MID-40", letter="B", headline="$98,000",
        why="Compare cost with net realizable value item by item, and keep the lower of the two for each.",
        rule=[
            "Companies using FIFO or average cost apply **lower of cost or net realizable value**. Net realizable value is the estimated selling price less the costs of completion and sale. There is no ceiling, no floor and no normal profit margin to work through. Those belong to the lower of cost or market rule that still applies to LIFO and the retail method.",
            "Applied item by item, each write-down stands on its own. A cushion on one item cannot absorb a shortfall on another.",
        ],
        math=[
            ("Item A: cost $32,000, NRV $34,000, so cost", "$32,000"),
            ("Item B: cost $45,000, NRV $41,000, so NRV", "$41,000"),
            ("Item C: cost $28,000, NRV $25,000, so NRV", "$25,000"),
            ("Inventory at December 31", "$98,000"),
        ],
        after_math="Total cost was $105,000, so Trenholm recognizes a $7,000 loss.",
        wrong={
            "A": "$100,000 carries every item at net realizable value, including Item A, whose cost ($32,000) is below its $34,000 NRV. The rule takes the lower of the two.",
            "C": "$101,000 writes down Item B but leaves Item C at cost, missing C's $3,000 shortfall.",
            "D": "$105,000 is total cost with no write-downs, which skips the test.",
        },
    ),
]
