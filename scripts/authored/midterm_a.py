"""Intermediate Accounting I midterm mock exam, questions 1 to 20."""
from .mx import E

RECORDS = [
    E(
        id="IA-MID-01", letter="B", headline="Comparability and timeliness",
        why="Both are enhancing characteristics. Relevance and faithful representation are the fundamental ones.",
        rule=[
            "The conceptual framework splits the qualitative characteristics into two groups. The **fundamental** characteristics, relevance and faithful representation, decide whether information is useful at all. The **enhancing** characteristics make useful information more useful, but they cannot rescue information that fails the fundamental test.",
            "The four enhancing characteristics are comparability, verifiability, timeliness and understandability. Materiality is an entity-specific aspect of relevance, not a separate characteristic.",
        ],
        wrong={
            "A": "Relevance is fundamental, so the pair is mixed.",
            "C": "Materiality belongs to relevance, so it is part of a fundamental characteristic. Only verifiability here is enhancing.",
            "D": "Faithful representation is the second fundamental characteristic, so the pair is mixed.",
        },
    ),
    E(
        id="IA-MID-02", letter="C", headline="Advertising costs",
        why="Advertising has no measurable future benefit and no specific revenue to match, so it is expensed when incurred.",
        rule=[
            "Expense recognition reaches the income statement one of three ways. Some costs are **matched directly** to the revenue they produce. Some are **allocated** over the periods they benefit by a systematic and rational method. The rest have no measurable future benefit and nothing to match against, so they are expensed **immediately**.",
            "Advertising is the textbook immediate expense. It cannot be tied to a particular sale, and there is no defensible period over which to spread it.",
        ],
        wrong={
            "A": "Cost of goods sold is matched directly to the sales it relates to.",
            "B": "Sales commissions are matched to the specific sales that triggered them.",
            "D": "Depreciation is a systematic and rational allocation across the asset's useful life.",
        },
    ),
    E(
        id="IA-MID-03", letter="C",
        headline="A gain arises from a peripheral or incidental transaction, while revenue arises from the entity's ongoing major operations",
        why="Both increase equity. The difference is where each comes from.",
        rule=[
            "Revenues and gains both increase equity from sources other than owner investment. What separates them is the **source**. Revenue comes from the entity's ongoing major or central operations. A gain comes from peripheral or incidental transactions and from other events outside the entity's control.",
            "A manufacturer that sells its product records revenue. The same manufacturer selling a used delivery truck records a gain.",
        ],
        wrong={
            "A": "Both increase equity when the underlying event occurs. Neither waits for cash to be collected.",
            "B": "Net-of-tax presentation is required for discontinued operations. It is not what distinguishes a gain from revenue.",
            "D": "Recognition of both depends on the underlying event, not on cash. A gain on an unsold investment can be recognized with no cash changing hands.",
        },
    ),
    E(
        id="IA-MID-04", letter="B",
        headline="The SEC has statutory authority over financial reporting by public companies but has largely relied on the FASB to set accounting standards",
        why="Congress gave the SEC the authority, and the SEC recognizes the FASB as the private-sector standard setter.",
        rule=[
            "Congress gave the SEC the legal authority to prescribe accounting for public companies. Rather than write the rules itself, the SEC has consistently recognized the private-sector standard setter, which today is the FASB. The authority stays with the SEC and the drafting happens at the FASB.",
            "The **FASB Accounting Standards Codification** is the single source of authoritative US GAAP for nongovernmental entities. An Accounting Standards Update is the vehicle that amends the Codification, not a standard that stands on its own.",
        ],
        wrong={
            "A": "The FASB is an independent private-sector body funded through accounting support fees. It is not a federal agency.",
            "C": "An ASU amends the Codification. Once the amendment is folded in, the Codification is what carries authority.",
            "D": "The AICPA set standards through earlier bodies, but that role passed to the FASB in 1973.",
        },
    ),
    E(
        id="IA-MID-05", letter="A", headline="Debit Accounts Receivable $14,500; credit Service Revenue $14,500",
        why="The work was done in December, so December reports the revenue, and nothing has been billed or collected.",
        rule=[
            "Revenue is recognized when the performance obligation is satisfied, not when the invoice goes out and not when cash arrives. Westbrook finished the work in December, so December reports the revenue.",
            "Nothing has been billed or collected, so the other side of the entry is a receivable. There is no Unearned Revenue to draw down, because the client never paid in advance.",
        ],
        entry_title="The adjusting entry",
        entry=[
            ("Accounts Receivable", "$14,500", ""),
            ("Service Revenue", "", "$14,500"),
        ],
        wrong={
            "B": "Unearned Revenue exists only when the customer paid first. Westbrook has not been paid at all.",
            "C": "This runs the entry backwards and would reduce revenue Westbrook has actually earned.",
            "D": "Waiting for the invoice moves December revenue into January and understates both revenue and assets at year end.",
        },
    ),
    E(
        id="IA-MID-06", letter="C", headline="Debit Supplies Expense $9,700; credit Supplies $9,700",
        why="The year-end count fixes the asset at $1,800, and the expense is what was available less what is left.",
        rule=[
            "Calder never expenses supplies as they are used. Everything purchased sits in the asset account until the year-end count shows what is left, so the expense is the **plug**: what was available less what survived the year.",
            "The count fixes the asset at $1,800. The adjusting entry brings the account down to that balance.",
        ],
        math=[
            ("Beginning supplies", "$2,100"),
            ("Purchases", "$9,400"),
            ("Supplies available for use", "$11,500"),
            ("Supplies on hand per the count", "($1,800)"),
            ("Supplies used, which is the expense", "$9,700"),
        ],
        entry_title="The adjusting entry",
        entry=[
            ("Supplies Expense", "$9,700", ""),
            ("Supplies", "", "$9,700"),
        ],
        wrong={
            "A": "$9,400 expenses the purchases and ignores both the opening balance and the ending count.",
            "B": "$1,800 is what remains, so it expenses the wrong side of the count.",
            "D": "This debits the asset and credits expense, which increases assets and income instead of recording the supplies used.",
        },
    ),
    E(
        id="IA-MID-07", letter="D", headline="Revenue is overstated by $20,000 and liabilities are understated by $20,000",
        why="Only four of the 24 months have been performed, so $20,000 belongs in Unearned Revenue.",
        rule=[
            "Cash collected in advance is a liability until the service is delivered. Halloway recorded the entire collection as revenue on day one, so at year end the books show 24 months of revenue when only four months have been performed.",
            "The revenue that has not been earned belongs in Unearned Revenue. That is why the error is the same amount on both statements: revenue is too high and the liability was never set up.",
        ],
        math=[
            ("Monthly revenue, $24,000 / 24 months", "$1,000"),
            ("Months earned in Year 1, September through December", "4"),
            ("Revenue that belongs in Year 1", "$4,000"),
            ("Revenue recorded", "$24,000"),
            ("Overstatement of revenue, and understatement of liabilities", "$20,000"),
        ],
        wrong={
            "A": "$4,000 is the amount correctly earned, not the amount of the error.",
            "B": "$12,000 treats half the contract as belonging to Year 1. Only four of the 24 months do.",
            "C": "Recording everything up front overstates revenue. The direction is reversed.",
        },
    ),
    E(
        id="IA-MID-08", letter="A", headline="Interest expense $2,700; total liability $182,700",
        why="Two months of interest at 9% belong to Year 1, and the accrued interest is a liability alongside the principal.",
        rule=[
            "Interest accrues with time, not with the payment date. Kestrel has had the money for two months, so two months of interest belong to Year 1 even though nothing is paid until the note matures.",
            "The accrued interest is a separate liability that sits alongside the principal.",
        ],
        math=[
            ("Interest for a full year, $180,000 x 9%", "$16,200"),
            ("Months outstanding in Year 1, November and December", "2 of 12"),
            ("Year 1 interest expense, $16,200 x 2/12", "$2,700"),
            ("Total liability: note $180,000 plus interest payable $2,700", "$182,700"),
        ],
        entry_title="The adjusting entry",
        entry=[
            ("Interest Expense", "$2,700", ""),
            ("Interest Payable", "", "$2,700"),
        ],
        wrong={
            "B": "$8,100 is six months of interest, the full term of the note. Only two of those months fall in Year 1.",
            "C": "The interest expense is right, but the accrued interest is a liability too, so the total must include it.",
            "D": "$16,200 charges a full year of interest to a note that has been outstanding for two months.",
        },
    ),
    E(
        id="IA-MID-09", letter="C", headline="$49,700",
        why="The prepaid balance grew by $3,700, so Braddock paid that much more than it expensed.",
        rule=[
            "The prepaid balance grew during the year, so Braddock paid for more coverage than it used up. Cash paid is therefore **more than the expense** by the amount the asset increased.",
            "The direction is the whole question. A growing prepaid means cash went out ahead of the expense.",
        ],
        math=[
            ("Prepaid insurance, end of Year 2", "$11,200"),
            ("Prepaid insurance, beginning of Year 2", "($7,500)"),
            ("Increase in prepaid insurance", "$3,700"),
            ("Insurance expense", "$46,000"),
            ("Cash paid, $46,000 + $3,700", "$49,700"),
        ],
        after_math="Check against the asset account: $7,500 + cash paid - $46,000 expense = $11,200, so cash paid is $49,700.",
        wrong={
            "A": "$42,300 subtracts the increase instead of adding it, which is the treatment for a prepaid balance that shrank.",
            "B": "$46,000 equals the expense. Cash paid and expense match only when the prepaid balance does not move.",
            "D": "$53,500 adds the whole beginning balance ($7,500) instead of the change in the balance.",
        },
    ),
    E(
        id="IA-MID-10", letter="C", headline="$206,000",
        why="Income from operations is gross profit less operating expenses, and stops before interest, gains and discontinued operations.",
        rule=[
            "Income from operations stops where operating activity ends. Gross profit less operating expenses gets there. Interest, gains on disposing of assets and discontinued operations all sit below that line.",
            "The $15,000 gain on equipment is a peripheral transaction, interest is a financing cost, and the discontinued operations loss is presented net of tax in its own section.",
        ],
        math=[
            ("Net sales", "$960,000"),
            ("Cost of goods sold", "($540,000)"),
            ("Gross profit", "$420,000"),
            ("Selling expenses", "($118,000)"),
            ("General and administrative expenses", "($96,000)"),
            ("Income from operations", "$206,000"),
        ],
        wrong={
            "A": "$166,000 subtracts the $40,000 discontinued operations loss, which is reported in its own section further down.",
            "B": "$199,000 deducts interest ($22,000) and adds the gain ($15,000). Both are nonoperating items.",
            "D": "$221,000 adds the $15,000 gain on equipment. Selling an asset used in operations is not an operating activity.",
        },
    ),
    E(
        id="IA-MID-11", letter="C", headline="$627,000",
        why="The unwaived covenant violation makes the callable bonds current, whatever their stated maturity.",
        rule=[
            "A liability is current if it will be settled within one year or the operating cycle, whichever is longer. The covenant violation decides this question. Once a lender can demand payment at any time and the violation has not been waived, the debt is payable on demand and is **current regardless of its stated maturity**.",
            "The $200,000 note due June 30, Year 3 stays noncurrent. The unearned subscription revenue is current because the obligation to deliver service falls within a year, even though it will be settled with service rather than cash.",
        ],
        math=[
            ("Accounts payable", "$84,000"),
            ("Note payable due March 31, Year 2", "$150,000"),
            ("Current portion of long-term debt", "$45,000"),
            ("Unearned subscription revenue, earned in Year 2", "$30,000"),
            ("Dividends payable", "$18,000"),
            ("Callable bonds payable, covenant violated and not waived", "$300,000"),
            ("Total current liabilities", "$627,000"),
        ],
        wrong={
            "A": "$297,000 leaves out both the callable bonds ($300,000) and the unearned revenue ($30,000).",
            "B": "$327,000 leaves out the callable bonds. An unwaived violation makes them payable on demand, so they are current.",
            "D": "$827,000 adds the $200,000 note due in Year 3, which is not due within a year and has no covenant problem.",
        },
    ),
    E(
        id="IA-MID-12", letter="A", headline="$443,000",
        why="Net income increases retained earnings, and both the cash dividends declared and the stock dividend reduce it.",
        rule=[
            "Retained earnings moves for earnings, dividends and prior period adjustments. A cash dividend reduces it on the **declaration date** for the full amount, whether or not it has been paid. A stock dividend also reduces it, moving the recorded amount into paid-in capital.",
            "Issuing stock for cash never touches retained earnings. It raises contributed capital.",
        ],
        math=[
            ("Retained earnings, January 1, Year 2", "$412,000"),
            ("Net income", "$86,000"),
            ("Cash dividends declared", "($30,000)"),
            ("Stock dividend", "($25,000)"),
            ("Retained earnings, December 31, Year 2", "$443,000"),
        ],
        wrong={
            "B": "$451,000 deducts only the $22,000 actually paid. The unpaid $8,000 reduced retained earnings at declaration and sits in Dividends Payable.",
            "C": "$468,000 ignores the stock dividend. It does not change total equity, but it does move $25,000 out of retained earnings.",
            "D": "$503,000 adds the $60,000 stock issuance. Selling shares raises contributed capital, never retained earnings.",
        },
    ),
    E(
        id="IA-MID-13", letter="A", headline="Working capital is unchanged; the current ratio increases",
        why="The payment lowers current assets and current liabilities by the same $90,000.",
        rule=[
            "Paying a current liability with a current asset reduces both sides by the same dollar amount. A **difference** does not change when you subtract the same number from both terms, so working capital holds.",
            "A **ratio** does change, because subtracting the same amount from a numerator and a denominator that were not equal changes their proportion. When the ratio already exceeds one, the payment pushes it higher.",
        ],
        math=[
            ("Working capital before, $540,000 - $300,000", "$240,000"),
            ("Working capital after, $450,000 - $210,000", "$240,000"),
            ("Current ratio before, $540,000 / $300,000", "1.80"),
            ("Current ratio after, $450,000 / $210,000", "2.14"),
        ],
        wrong={
            "B": "Working capital does not fall. Current assets and current liabilities both fall by $90,000, so the difference holds at $240,000.",
            "C": "Equal reductions do not preserve a ratio unless the two amounts were equal to begin with.",
            "D": "Working capital holds and the ratio rises, because liabilities fell by a larger share of their own balance than assets did.",
        },
    ),
    E(
        id="IA-MID-14", letter="B", headline="As a separate line item within income from continuing operations",
        why="US GAAP no longer has an extraordinary item category, so an unusual or infrequent loss stays in continuing operations.",
        rule=[
            "US GAAP no longer has an extraordinary item category. It was eliminated so that preparers would stop arguing about whether an event cleared the unusual and infrequent bar. A loss like this one is still worth its own line because of its size and nature, but that line sits **inside continuing operations** and is shown before tax.",
            "Discontinued operations is reserved for the disposal of a component that represents a strategic shift with a major effect on operations.",
        ],
        wrong={
            "A": "The extraordinary item category no longer exists in US GAAP.",
            "C": "Nothing was disposed of and no component of the business was exited. A destroyed warehouse is not a strategic shift.",
            "D": "Only prior period adjustments and certain equity transactions bypass the income statement. A current-period loss runs through income.",
        },
    ),
    E(
        id="IA-MID-15", letter="D", headline="$62,614",
        why="The amount borrowed is the present value of the payments, so divide it by the ordinary annuity factor.",
        rule=[
            "The amount borrowed is the present value of the payments the borrower promises to make. Once the present value and the factor are known, the payment is the only unknown, so **divide** rather than multiply. The first payment falls one year from today, which makes this an ordinary annuity.",
            "As a check, the first payment includes $20,000 of interest ($250,000 x 8%), so each payment must exceed that by enough to start retiring the loan.",
        ],
        math=[
            ("Amount borrowed, the present value of the payments", "$250,000"),
            ("Ordinary annuity factor, 8%, 5 periods", "/ 3.99271"),
            ("Annual payment", "$62,614"),
        ],
        wrong={
            "A": "$50,000 is the principal divided by five, which repays the loan but pays no interest.",
            "B": "$57,976 divides by the annuity due factor (4.31213), which applies only when the first payment is made today.",
            "C": "$70,000 adds the first year's interest ($20,000) to one fifth of the principal. Interest falls every year as the balance declines, so a level payment cannot be built that way.",
        },
    ),
    E(
        id="IA-MID-16", letter="B", headline="$28,980",
        why="Subtract the five-period factor from the nine-period factor to keep only the four periods that pay.",
        rule=[
            "The payments run from the end of Year 6 through the end of Year 9, which are periods 6 through 9 on the timeline. A nine-period factor covers payments in every period from 1 through 9. Subtracting the five-period factor removes periods 1 through 5, the stretch where Ashcroft receives nothing.",
            "The difference covers only the periods that actually pay.",
        ],
        math=[
            ("Factor for periods 1 through 9", "6.51523"),
            ("Less the factor for periods 1 through 5, the deferral", "(4.10020)"),
            ("Factor for periods 6 through 9", "2.41503"),
            ("Present value today, $12,000 x 2.41503", "$28,980"),
        ],
        wrong={
            "A": "$40,647 uses the four-period factor (3.38721), which values the annuity as of the end of Year 5. It still has to be discounted back five more years.",
            "C": "$49,202 uses the five-period factor, which counts the deferral period as though payments arrived during it.",
            "D": "$78,183 uses the nine-period factor, as if payments arrived in all nine years. Ashcroft receives only four.",
        },
    ),
    E(
        id="IA-MID-17", letter="D", headline="$62,948",
        why="Deposits at the start of each year earn one more year of interest, so multiply the ordinary factor by 1.06 once.",
        rule=[
            "An ordinary annuity factor assumes each deposit lands at the end of its period. Glenview deposits at the **beginning** of each year, so every deposit sits in the fund one period longer and earns one more year of interest.",
            "Converting the ordinary factor to an annuity due factor takes one multiplication by one plus the rate.",
        ],
        math=[
            ("Ordinary annuity factor, 6%, 8 periods", "9.89747"),
            ("Annuity due factor, 9.89747 x 1.06", "10.49132"),
            ("Fund balance at the end of Year 8, $6,000 x 10.49132", "$62,948"),
        ],
        wrong={
            "A": "$48,000 is eight deposits with no interest at all.",
            "B": "$59,385 applies the ordinary factor directly, as though every deposit arrived at year end.",
            "C": "$66,725 multiplies by 1.06 twice, giving every deposit two extra years of interest instead of one.",
        },
    ),
    E(
        id="IA-MID-18", letter="B", headline="10%",
        why="The cash price divided by the face amount gives the factor, and 0.75131 is the 10% factor for three periods.",
        rule=[
            "A note that states no interest still charges interest. It is folded into the face amount instead of quoted separately. The cash price is what the equipment is really worth today, and the face amount is what will be paid later.",
            "The ratio of the two is the present value factor, and the rate that produces that factor is the **implicit rate**.",
        ],
        math=[
            ("Cash price today", "$60,105"),
            ("Single payment in 3 years", "$80,000"),
            ("Present value factor, $60,105 / $80,000", "0.75131"),
            ("Rate with that 3-period factor in the table", "10%"),
        ],
        after_math="Over the three years Redmond records $19,895 of interest expense, the difference between the $80,000 paid and the $60,105 recorded cost.",
        wrong={
            "A": "8% has a factor of 0.79383, which would imply a cash price of $63,506. The equipment sells for less.",
            "C": "11% has a factor of 0.73119, which would imply a cash price of $58,495.",
            "D": "12% has a factor of 0.71178, which would imply a cash price of $56,942.",
        },
    ),
    E(
        id="IA-MID-19", letter="D", headline="$2,200,000",
        why="The bonus is all or nothing, so the most likely amount applies and the full $200,000 is included.",
        rule=[
            "Variable consideration is estimated with whichever of two methods better predicts the amount the entity will be entitled to. **Expected value** weights a range of outcomes by probability and suits contracts with many possible results. **Most likely amount** picks the single most probable outcome and suits a contract with only two.",
            "This bonus is either earned in full or not at all, so the most likely amount applies. Ridgeline's history with similar projects supports including it, because a significant reversal of revenue is not probable.",
        ],
        math=[
            ("Fixed contract price", "$2,000,000"),
            ("Bonus, the most likely outcome at 90%", "$200,000"),
            ("Transaction price at inception", "$2,200,000"),
        ],
        wrong={
            "A": "$2,000,000 leaves the bonus out entirely. Variable consideration is included once a significant reversal is not probable, and a 90% record supports that.",
            "B": "$2,100,000 includes half the bonus, which corresponds to no recognized method.",
            "C": "$2,180,000 is the expected value ($2,000,000 + 90% x $200,000). That method suits a range of outcomes, not a contract with only two.",
        },
    ),
    E(
        id="IA-MID-20", letter="A", headline="$37,600",
        why="Revenue is recognized only on the 470 units Corvale expects to keep.",
        rule=[
            "A right of return makes the transaction price variable. Revenue is recognized only for the units the seller expects to **keep**, because refunds it expects to pay are not consideration it will be entitled to. The expected refunds are carried as a refund liability.",
            "The expense side follows the same split: cost of sales is recorded for the 470 units kept, and an asset is recorded for the right to recover the 30 expected back.",
        ],
        math=[
            ("Units sold", "500"),
            ("Units expected to be returned, 500 x 6%", "30"),
            ("Units expected to be kept", "470"),
            ("Revenue at the time of sale, 470 x $80", "$37,600"),
        ],
        after_math="The refund liability is 30 x $80 = $2,400. Cost of sales is 470 x $50 = $23,500, and the asset for the right to recover the returned units is 30 x $50 = $1,500.",
        wrong={
            "B": "$40,000 recognizes revenue on all 500 units and ignores the expected returns.",
            "C": "$23,500 is the cost of sales for the 470 units kept, not the revenue.",
            "D": "$2,400 is the refund liability, which is the part excluded from revenue.",
        },
    ),
]
