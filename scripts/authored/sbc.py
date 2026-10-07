"""Stock-based compensation: ten questions."""
from .mx import E

RECORDS = [
    E(
        id="IA-SBC-01", letter="A", headline="The fair value of the award at the grant date",
        why="An equity award is measured once, at grant, and the measurement is never revisited.",
        rule=[
            "Compensation cost for an equity-classified award is the **grant-date fair value** of the award times the number expected to vest, recognized over the service period.",
            "Measurement is fixed at grant because the company will settle in its own shares, so it takes on no further obligation as the share price moves. That is what separates an equity award from a liability award.",
        ],
        wrong={
            "B": "Intrinsic value at exercise depends on the share price at a later date, which an equity award does not use.",
            "C": "Remeasuring at each reporting date is liability-award treatment. Equity awards are not revisited.",
            "D": "The exercise price is one input to an option's fair value. It is not the measure of compensation cost.",
        },
    ),
    E(
        id="IA-SBC-02", letter="B", headline="$30,000",
        why="Total cost of $120,000 is spread evenly over the four-year service period.",
        rule=[
            "Total cost is set at the grant date and then recognized **evenly over the requisite service period**, the time the employee must work to earn the award. That period is four years here.",
            "The credit is to additional paid-in capital, not a liability, because the company will settle the award in its own shares.",
        ],
        math=[
            ("Options granted, 20,000 x $6 grant-date fair value", "$120,000"),
            ("Requisite service period", "4 years"),
            ("Compensation expense for Year 1, $120,000 / 4", "$30,000"),
        ],
        entry_title="The entry each year",
        entry=[
            ("Compensation Expense", "$30,000", ""),
            ("Additional Paid-In Capital, Stock Options", "", "$30,000"),
        ],
        wrong={
            "A": "$0 ignores that cost is recognized as service is rendered, not only when the options vest or are exercised.",
            "C": "$60,000 spreads the cost over two years instead of four.",
            "D": "$120,000 recognizes the whole cost in Year 1 instead of spreading it over the service period.",
        },
    ),
    E(
        id="IA-SBC-03", letter="B", headline="$120,000",
        why="Restricted stock is measured at the $30 market price on the grant date and spread over three years.",
        rule=[
            "Restricted stock is measured like any equity award: grant-date fair value, recognized over the service period. For a full-value share award the fair value is simply the **market price on the grant date**, because the employee receives the whole share rather than the right to buy one.",
            "The price after the grant date does not matter. Measurement is fixed at grant.",
        ],
        math=[
            ("Shares granted, 12,000 x $30 market price at grant", "$360,000"),
            ("Requisite service period", "3 years"),
            ("Compensation expense for Year 1, $360,000 / 3", "$120,000"),
        ],
        wrong={
            "A": "$0 ignores that the cost accrues as the executive works through the vesting period.",
            "C": "$180,000 spreads the cost over two years instead of three.",
            "D": "$360,000 recognizes the whole cost in Year 1 instead of over the three-year service period.",
        },
    ),
    E(
        id="IA-SBC-04", letter="C", headline="There is no effect on total stockholders' equity",
        why="The expense lowers retained earnings and the credit raises paid-in capital by the same amount.",
        rule=[
            "The entry debits compensation expense and credits additional paid-in capital. Both sides land **inside stockholders' equity**, so they offset. The expense reduces net income and therefore retained earnings, and the credit raises paid-in capital by the same amount.",
            "No cash leaves and no liability is created, because the company is paying for services with a claim on its own equity. That is also why the expense is added back as a non-cash item in the indirect cash flow statement.",
        ],
        wrong={
            "A": "Equity does not increase. The credit to paid-in capital is offset by the lower retained earnings.",
            "B": "Equity does not fall, because no asset leaves the company and no liability is created.",
            "D": "Whether the options are in the money at year end is irrelevant. An equity award is measured once, at grant.",
        },
    ),
    E(
        id="IA-SBC-05", letter="D", headline="Debit Compensation Expense; Credit Additional Paid-In Capital, Stock Options",
        why="The company used up employee services, and the award will be settled in its own shares.",
        rule=[
            "Compensation expense is debited because the company has consumed employee services during the period. The credit goes to **additional paid-in capital**, because the award will be settled in the company's own shares.",
            "Nothing is paid and nothing is owed in cash, so neither Cash nor a liability belongs in the entry. The credit stays in paid-in capital until the options are exercised or expire.",
        ],
        entry=[
            ("Compensation Expense", "Annual cost", ""),
            ("Additional Paid-In Capital, Stock Options", "", "Annual cost"),
        ],
        wrong={
            "A": "Cash is not paid when the award is granted or when the expense is recorded.",
            "B": "A liability arises for awards settled in cash or measured by the share price, such as stock appreciation rights. Settlement in shares creates none.",
            "C": "This runs the entry backwards. It would reduce paid-in capital and credit an expense.",
        },
    ),
    E(
        id="IA-SBC-06", letter="C", headline="As a liability award remeasured to fair value at each reporting date until settlement",
        why="Cash settlement tied to the share price is an obligation to transfer assets, and its amount moves with the price.",
        rule=[
            "Classification follows **how the award will be settled**. Corvale must hand over cash whose amount depends on its own share price, so it has an obligation to transfer assets. That is a liability, not an equity instrument.",
            "Because the obligation changes as the share price moves, a liability award is remeasured to fair value at every reporting date, and each remeasurement adjusts compensation expense. An equity award is measured once at grant and never revisited. That single difference in settlement produces a completely different pattern of expense.",
        ],
        wrong={
            "A": "Measuring once at grant is equity-award treatment. These rights will be settled in cash.",
            "B": "Waiting until the exercise date would leave the obligation unrecorded until then. A liability award is remeasured at every reporting date.",
            "D": "No shares are issued, but a cash obligation exists and must be recognized. Disclosure alone is not enough.",
        },
    ),
    E(
        id="IA-SBC-07", letter="A", headline="Over the three-year requisite service period",
        why="The employee earns the award by working three years, so the cost is spread across those three years.",
        rule=[
            "Compensation cost is recognized over the **requisite service period**: the time the employee must work to earn the award. Three years of continued employment is the service condition here.",
            "The ten-year contractual life of an option is the window in which a vested option can be exercised. It is a feature of the instrument, already reflected in the grant-date fair value, and it is not the period over which the employee earns the award.",
        ],
        wrong={
            "B": "The contractual life is the exercise window, not the period over which the award is earned.",
            "C": "Recognizing everything at grant ignores that the employee has not yet earned the award.",
            "D": "Exercise comes after vesting. Cost is recognized as service is rendered, which is earlier.",
        },
    ),
    E(
        id="IA-SBC-08", letter="D", headline="It is reversed, because the service condition was never satisfied",
        why="The employee never earned the award, so the company ends up paying nothing for it.",
        rule=[
            "An award with only a service condition is earned by working through the vesting period. If the employee leaves first, the condition is never met and the award is **forfeited**. Cost recognized earlier assumed the award would vest, so when it does not, that cost is reversed in the period of the forfeiture.",
            "The reversal applies to service and performance conditions. It does not apply to a market condition such as a target share price. A market condition is built into the grant-date fair value, so cost is recognized for an employee who renders the required service even if the price target is never reached.",
        ],
        wrong={
            "A": "Services received in earlier periods do not keep the cost in place, because the award was never earned. The cost reverses.",
            "B": "Moving an amount between equity accounts does not undo the expense. The expense itself is reversed.",
            "C": "A forfeiture is reflected in the period it occurs. It is not a prior period adjustment to an earlier year.",
        },
    ),
    E(
        id="IA-SBC-09", letter="A", headline="$45,000",
        why="Cost is based on the 45,000 options expected to vest, spread over four years.",
        rule=[
            "Compensation cost is based on the number of awards **expected to vest**, not the number granted. A company that expects some employees to leave before vesting should not recognize cost for awards it does not expect to deliver.",
            "If the estimate later proves wrong, the company revises it and adjusts cumulative expense in the period of the change, as a change in estimate.",
        ],
        math=[
            ("Options expected to vest, 50,000 x 90%", "45,000"),
            ("Total compensation cost, 45,000 x $4", "$180,000"),
            ("Expense for Year 1, $180,000 / 4 years", "$45,000"),
        ],
        wrong={
            "B": "$50,000 uses all 50,000 options granted ($200,000 / 4) instead of the 45,000 expected to vest.",
            "C": "$180,000 is the total cost, recognized in a single year instead of over four.",
            "D": "$200,000 is the cost of every option granted, recognized in a single year.",
        },
    ),
    E(
        id="IA-SBC-10", letter="D", headline="The change in the company's share price after the grant date",
        why="An equity award is measured at grant and never revisited, so later price moves change nothing.",
        rule=[
            "Total cost for an equity award is **grant-date fair value times the awards expected to vest**, recognized over the requisite service period. Those three inputs set both the total and its timing.",
            "Later share price changes are deliberately excluded. The company will settle in its own shares, so it takes on no further obligation when the price moves. The same expense is recorded whether the shares triple or collapse after the grant.",
        ],
        wrong={
            "A": "Grant-date fair value per option is a direct input to the cost.",
            "B": "The number of options expected to vest scales the total cost.",
            "C": "The length of the service period sets how the cost is spread across the years.",
        },
    ),
]
