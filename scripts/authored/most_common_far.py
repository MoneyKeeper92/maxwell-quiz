"""10 Most Common FAR Questions."""
from .mx import E

Q = "most-common-far"

RECORDS = [
    E(
        quiz=Q, id="1", letter="B", headline="$85,000",
        why="Start with net income, add back the noncash expense, remove the gain, and adjust for the operating working-capital changes.",
        rule=[
            "The indirect method turns accrual net income into cash from operations in three moves. **Add back noncash expenses** such as depreciation. **Remove gains and losses**, because their cash belongs in investing or financing. **Adjust for changes in operating assets and liabilities**: an increase in an operating asset uses cash, and an increase in an operating liability provides it.",
            "The $60,000 increase in nontrade notes payable is a borrowing, so it belongs in financing activities and stays out of operating cash flow.",
        ],
        math=[
            ("Net income", "$100,000"),
            ("Depreciation expense, a noncash expense", "$20,000"),
            ("Gain on sale of equipment, whose cash is investing", "($15,000)"),
            ("Increase in accounts receivable", "($30,000)"),
            ("Increase in prepaid expenses", "($25,000)"),
            ("Increase in accounts payable", "$35,000"),
            ("Net cash provided by operating activities", "$85,000"),
        ],
        wrong={
            "A": "$90,000 is $5,000 above the correct total, and no single item in the problem is $5,000. It cannot come from leaving out or reversing one adjustment.",
            "C": "$105,000 ignores all three working-capital changes, which together reduce operating cash by $20,000.",
            "D": "$110,000 leaves out the $25,000 increase in prepaid expenses.",
        },
    ),
    E(
        quiz=Q, id="2", letter="B", headline="$2.85",
        why="Basic EPS divides the income left for common shareholders by the weighted-average common shares.",
        rule=[
            "Basic EPS is **income available to common shareholders** divided by **weighted-average common shares**. The preferred stock is nonconvertible, so it never enters the denominator, but its declared dividend reduces the numerator.",
            "Shares issued during the year count only for the part of the year they were outstanding. The 30,000 shares issued on July 1 were outstanding for half the year.",
        ],
        math=[
            ("Net income", "$360,000"),
            ("Preferred dividends, 8,000 shares x $4", "($32,000)"),
            ("Income available to common shareholders", "$328,000"),
            ("Weighted-average shares, 100,000 + (30,000 x 6/12)", "115,000"),
            ("Basic EPS, $328,000 / 115,000", "$2.85"),
        ],
        wrong={
            "A": "$3.00 would need about 109,300 weighted shares, which matches no whole-month timing of the July 1 issue.",
            "C": "$3.20 would need only 102,500 weighted shares, as if the new shares had been outstanding for a single month.",
            "D": "$3.40 would need about 96,500 weighted shares, fewer than the 100,000 outstanding all year.",
        },
    ),
    E(
        quiz=Q, id="3", letter="B", headline="Higher by $15,000",
        why="A receivable increase adds revenue not yet collected, and a payable increase adds expense not yet paid.",
        rule=[
            "Cash-basis income counts cash in and cash out. Accrual income counts revenue when it is earned and expenses when they are incurred, so the changes in receivables and payables are exactly the gap between the two.",
            "A receivable increase means **revenue earned but not collected**, which accrual income includes and cash-basis income does not. A payable increase means **expenses incurred but not paid**, which accrual income deducts and cash-basis income does not.",
        ],
        math=[
            ("Cash-basis pretax income", "$200,000"),
            ("Increase in accounts receivable, revenue earned", "$25,000"),
            ("Increase in accounts payable, expense incurred", "($10,000)"),
            ("Accrual-basis pretax income", "$215,000"),
        ],
        after_math="Accrual income of $215,000 is $15,000 higher than the cash-basis $200,000.",
        wrong={
            "A": "Lower by $15,000 has the right size and the wrong sign.",
            "C": "$35,000 adds the payable increase instead of subtracting it.",
            "D": "Lower by $35,000 reverses both adjustments.",
        },
    ),
    E(
        quiz=Q, id="4", letter="A", headline="0.47",
        why="Issuing shares raises equity but not liabilities, so the ratio falls.",
        rule=[
            "Debt-to-equity is total liabilities divided by total equity, and equity is what is left after liabilities: assets less liabilities. Issuing shares for cash raises assets and equity by the same amount and leaves liabilities alone.",
            "So the numerator stays at $320,000 while the denominator grows, and the ratio has to fall.",
        ],
        math=[
            ("Existing equity, $800,000 - $320,000", "$480,000"),
            ("Shares issued", "$200,000"),
            ("Equity after the issue", "$680,000"),
            ("Debt-to-equity, $320,000 / $680,000", "0.47"),
        ],
        after_math="Before the issue the ratio was 0.67 ($320,000 / $480,000), so the issue lowers it.",
        wrong={
            "B": "0.54 would need equity of about $593,000, not the $680,000 after the issue.",
            "C": "0.62 would need equity of about $516,000, which adds only about $36,000 of the $200,000 issue to equity.",
            "D": "0.71 would need equity of about $451,000, which is less than the company had before issuing anything.",
        },
    ),
    E(
        quiz=Q, id="5", letter="C", headline="$13,000",
        why="The NSF check was counted in the checkbook balance but the cash never arrived, and the postdated check is not cash yet.",
        rule=[
            "Cash on the balance sheet is what the company actually has. Start from the checkbook balance and test each item against it.",
            "The **postdated check** is not cash until its date, and it was never in the checkbook balance, so nothing changes. It stays a receivable. The **NSF check** was counted in the $15,000 when it was deposited, but the bank returned it, so that cash never arrived and it has to come out. Its redeposit and clearing in January belong to next year.",
        ],
        math=[
            ("Checkbook balance, December 31", "$15,000"),
            ("Postdated check, not in the balance and not yet cash", "$0"),
            ("NSF check returned December 28", "($2,000)"),
            ("Cash reported on the balance sheet", "$13,000"),
        ],
        wrong={
            "A": "$15,000 leaves the NSF check in, although its cash was never collected.",
            "B": "$18,000 adds the postdated check, which is not cash until January 5, and leaves the NSF check in.",
            "D": "$16,000 adds the postdated check and removes the NSF check ($15,000 + $3,000 - $2,000). Removing the NSF check is right, but the postdated check is not cash at December 31.",
        },
    ),
    E(
        quiz=Q, id="6", letter="B", headline="$3,200",
        why="The aging schedule sets the required ending allowance, and the expense is whatever it takes to get there after write-offs.",
        rule=[
            "With the **aging method**, the schedule sets the required ending allowance, and bad debt expense is the amount needed to bring the account to it. Write-offs reduce the allowance but they are not expense, because the expense was recognized when the allowance was built.",
            "The equipment purchase and the share issuance have nothing to do with receivables, so they stay out of the calculation.",
        ],
        math=[
            ("Required allowance, $600 + $2,000 + $1,600", "$4,200"),
            ("Beginning allowance", "$3,000"),
            ("Less write-offs", "($2,000)"),
            ("Allowance before this year's expense", "$1,000"),
            ("Bad debt expense needed, $4,200 - $1,000", "$3,200"),
        ],
        wrong={
            "A": "$4,200 is the required ending balance, not the expense. The account already holds $1,000 after the write-offs.",
            "C": "$5,000 would leave the allowance at $6,000, which is above the $4,200 the schedule requires.",
            "D": "$3,800 would leave the allowance at $4,800, which is $600 above the required $4,200.",
        },
    ),
    E(
        quiz=Q, id="7", letter="C", headline="$700,000",
        why="FIFO costs the 45,000 units sold at the oldest layers first, which leaves 5,000 units from the last purchase.",
        rule=[
            "FIFO assigns the **oldest costs to cost of goods sold first**, so work down the layers in date order until the units sold are used up. The selling price does not affect cost.",
            "The 45,000 units sold use all of the beginning inventory and the February 15 purchase, plus 5,000 units from the February 18 purchase.",
        ],
        math=[
            ("Beginning inventory, 15,000 x $14", "$210,000"),
            ("February 15 purchase, 25,000 x $16", "$400,000"),
            ("February 18 purchase, 5,000 x $18", "$90,000"),
            ("Cost of goods sold, 45,000 units", "$700,000"),
        ],
        after_math="Proof: ending inventory is the remaining 25,000 units at $18, which is $450,000. Then $700,000 + $450,000 equals the $1,150,000 available for sale.",
        wrong={
            "A": "$610,000 stops after 40,000 units ($210,000 + $400,000) and never reaches the last 5,000 units sold.",
            "B": "$810,000 costs all 45,000 units at the newest price, $18.",
            "D": "$780,000 is the LIFO answer: 30,000 units at $18 plus 15,000 units at $16.",
        },
    ),
    E(
        quiz=Q, id="8", letter="C", headline="$12,500",
        why="Double-declining balance applies twice the straight-line rate to the beginning book value.",
        rule=[
            "Double-declining balance applies **twice the straight-line rate to the beginning book value**. Salvage value is not subtracted first. It only stops the asset from being depreciated below that floor.",
            "The mileage figures belong to the units-of-production method. The question names double-declining balance, so they are noise.",
        ],
        math=[
            ("Straight-line rate, 1 / 8 years", "12.5%"),
            ("Double-declining rate, 12.5% x 2", "25%"),
            ("Depreciation for Year 1, $50,000 x 25%", "$12,500"),
        ],
        after_math="Book value at the end of Year 1 is $37,500.",
        wrong={
            "A": "$10,000 applies a 20% rate, which is double a 10% straight-line rate and would mean a ten-year life, not eight.",
            "B": "$11,250 subtracts the $5,000 salvage value first ($45,000 x 25%). That is a straight-line habit that double-declining balance does not use.",
            "D": "$8,750 is a 17.5% rate on cost, which is not double the 12.5% straight-line rate.",
        },
    ),
    E(
        quiz=Q, id="9", letter="B", headline="$12,637",
        why="Interest is the beginning lease liability times 6%, and the liability is the payment times the annuity factor.",
        rule=[
            "A finance lease starts with a lease liability equal to the **present value of the payments**: the payment times the annuity factor. Interest for a period is the **beginning liability times the rate**.",
            "Payments are made at year end, so the whole beginning liability earns interest for all of Year 1. The payment then splits between interest and principal.",
        ],
        math=[
            ("Initial lease liability, $50,000 x 4.21236", "$210,618"),
            ("Interest rate", "x 6%"),
            ("Interest expense for Year 1", "$12,637"),
        ],
        after_math="The first $50,000 payment covers $12,637 of interest and $37,363 of principal, so the liability at the end of Year 1 is $173,255.",
        entry_title="The entry at the start of the lease",
        entry=[
            ("Right-of-use asset", "$210,618", ""),
            ("Lease liability", "", "$210,618"),
        ],
        wrong={
            "A": "$15,000 applies 6% to the $250,000 total of all five payments, which are not discounted.",
            "C": "$13,561 would need a beginning liability of about $226,000, which is more than the present value of the payments.",
            "D": "$18,106 would need a beginning liability of about $301,800, which is more than the $250,000 total of all five payments.",
        },
    ),
    E(
        quiz=Q, id="10", letter="B",
        headline="Debit Retained Earnings $20,000; Credit Accumulated Depreciation $20,000",
        why="The two missed years belong to prior periods, so the correction goes through retained earnings, not current expense.",
        rule=[
            "Omitted depreciation is an **error in previously issued financial statements**, so it is corrected by restating prior periods rather than running it through current-year expense. In the books, the debit goes to retained earnings.",
            "Year 4's own depreciation is a separate, ordinary entry. This entry fixes only the two years that were missed.",
        ],
        math=[
            ("Annual depreciation, $40,000 / 4 years", "$10,000"),
            ("Years missed, Year 2 and Year 3", "2"),
            ("Prior-period understatement of depreciation", "$20,000"),
        ],
        entry_title="The correcting entry",
        entry=[
            ("Retained Earnings", "$20,000", ""),
            ("Accumulated Depreciation", "", "$20,000"),
        ],
        after_entry="Year 4 depreciation of $10,000 is then recorded as usual.",
        wrong={
            "A": "$30,000 includes Year 4's depreciation, which is not a prior-period error.",
            "C": "Debiting Depreciation Expense charges prior-year cost to the current year and misstates Year 4 income.",
            "D": "This has the same problem as C, and $30,000 also includes Year 4's depreciation.",
        },
    ),
]
