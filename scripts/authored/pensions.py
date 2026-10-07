"""Pensions and postretirement benefits: ten questions."""
from .mx import E

RECORDS = [
    E(
        id="IA-PEN-01", letter="D", headline="Employer contributions to the plan",
        why="A contribution is funding, not expense, so it never enters net periodic pension cost.",
        rule=[
            "Net periodic pension cost is an **expense measure**. It is built from the actuarial movements in the obligation and the plan assets: service cost, interest cost, expected return on plan assets (which reduces the cost), amortization of prior service cost, and amortization of net gain or loss.",
            "A contribution moves cash from the employer to the trust. It raises plan assets and reduces any accrued pension liability, but it is not part of the cost. An employer can contribute nothing in a year and still record a large pension cost, or contribute heavily and record a small one.",
        ],
        wrong={
            "A": "Interest cost is a component. It is the growth in the obligation from the passage of time: the beginning obligation times the discount rate.",
            "B": "Expected return on plan assets is a component, and it reduces the cost rather than adding to it.",
            "C": "Amortization of prior service cost is a component. It brings the cost of a plan amendment into expense over the remaining service period.",
        },
    ),
    E(
        id="IA-PEN-02", letter="B", headline="$260,000",
        why="Add service cost, interest cost and the amortization, then subtract the expected return.",
        rule=[
            "Net periodic pension cost adds the components that raise the cost and subtracts the one that offsets it. Only the **expected return on plan assets** is subtracted.",
            "The amortization of prior service cost is added, because it brings the cost of a past plan amendment into income.",
        ],
        math=[
            ("Service cost", "$250,000"),
            ("Interest cost", "$180,000"),
            ("Expected return on plan assets", "($200,000)"),
            ("Amortization of prior service cost", "$30,000"),
            ("Net periodic pension cost", "$260,000"),
        ],
        wrong={
            "A": "$220,000 is $40,000 below the cost the four components give. Subtracting the amortization instead of adding it would produce $200,000, so this figure does not come from a consistent method either.",
            "C": "$460,000 leaves out the expected return instead of subtracting it.",
            "D": "$660,000 adds every component, including the expected return, which treats the plan's earnings as a cost.",
        },
    ),
    E(
        id="IA-PEN-03", letter="C", headline="$1,730,000",
        why="The obligation grows by service cost and interest on the beginning balance, and shrinks by benefits paid.",
        rule=[
            "The obligation grows for the benefits employees earned this year (**service cost**) and for the passage of time (**interest cost**), and it shrinks as benefits are actually paid to retirees.",
            "Interest cost is measured on the **beginning** obligation, not the ending one: $1,500,000 x 8% = $120,000.",
        ],
        math=[
            ("Beginning projected benefit obligation", "$1,500,000"),
            ("Service cost", "$200,000"),
            ("Interest cost, $1,500,000 x 8%", "$120,000"),
            ("Benefits paid", "($90,000)"),
            ("Ending projected benefit obligation", "$1,730,000"),
        ],
        wrong={
            "A": "$1,610,000 leaves out interest cost ($1,500,000 + $200,000 - $90,000). The obligation is a discounted amount, so it grows simply because settlement is a year closer.",
            "B": "$1,700,000 adds only service cost to the beginning balance ($1,500,000 + $200,000). It ignores both interest cost and the benefits paid.",
            "D": "$1,820,000 leaves out the benefits paid ($1,500,000 + $200,000 + $120,000). Paying a retiree settles part of the promise, so it reduces the obligation.",
        },
    ),
    E(
        id="IA-PEN-04", letter="B", headline="$1,470,000",
        why="Plan assets grow by the actual return and the contributions, and shrink by benefits paid.",
        rule=[
            "Plan assets are a fund held by a trustee, so the roll-forward follows cash and investment performance. What the fund earns and receives increases it. What it pays out decreases it.",
            "The roll-forward uses the **actual** return, not the expected return. The expected return belongs in the expense calculation, while the asset balance reflects what the fund really earned.",
        ],
        math=[
            ("Beginning plan assets", "$1,200,000"),
            ("Actual return on plan assets", "$110,000"),
            ("Employer contributions", "$250,000"),
            ("Benefits paid", "($90,000)"),
            ("Ending plan assets", "$1,470,000"),
        ],
        after_math="Benefits paid reduce plan assets and the projected benefit obligation by the same amount.",
        wrong={
            "A": "$1,220,000 leaves out the employer contribution ($1,200,000 + $110,000 - $90,000), which is the main way the fund is built up.",
            "C": "$1,560,000 leaves out the benefits paid ($1,200,000 + $110,000 + $250,000).",
            "D": "$1,650,000 adds the benefits paid instead of subtracting them. Benefits are paid out of the fund, so they reduce it.",
        },
    ),
    E(
        id="IA-PEN-05", letter="A", headline="A net pension liability of $450,000",
        why="The obligation exceeds the plan assets by $450,000, so the plan is underfunded.",
        rule=[
            "The balance sheet reports the **funded status**: plan assets at fair value less the projected benefit obligation. It is one net amount, not the two gross balances.",
            "When the obligation exceeds the assets, the plan is underfunded and the net amount is a liability. If assets exceeded the obligation, the overfunded amount would be reported as a noncurrent asset.",
        ],
        math=[
            ("Plan assets at fair value", "$2,750,000"),
            ("Projected benefit obligation", "($3,200,000)"),
            ("Funded status, a net liability", "($450,000)"),
        ],
        wrong={
            "B": "The direction is reversed. A net asset arises only when plan assets exceed the obligation.",
            "C": "Plan assets sit in a trust, so they are not the employer's own assets to report gross. The two are netted into one funded status figure.",
            "D": "Funded status is recognized on the balance sheet, not merely disclosed in the notes.",
        },
    ),
    E(
        id="IA-PEN-06", letter="B", headline="$140,000",
        why="Pension cost uses the expected return, which is the beginning assets times the 7% expected rate.",
        rule=[
            "Pension expense uses the **expected** return on plan assets. Using the actual return would push market swings straight into earnings, which is what the expected-return convention exists to prevent.",
            "The actual return of $190,000 beat the expected $140,000 by $50,000. That $50,000 is an actuarial gain. It does not change this year's expense. It goes to other comprehensive income and may reach expense later through corridor amortization.",
        ],
        math=[
            ("Beginning plan assets", "$2,000,000"),
            ("Expected long-term rate of return", "x 7%"),
            ("Expected return, which reduces pension cost", "$140,000"),
        ],
        wrong={
            "A": "$50,000 is the gain, the difference between actual and expected, not the return component itself.",
            "C": "$190,000 is the actual return. It rolls plan assets forward but is not used in the expense.",
            "D": "$330,000 adds the expected and actual returns together, which counts one year of earnings twice.",
        },
    ),
    E(
        id="IA-PEN-07", letter="C", headline="Recognized in other comprehensive income, then amortized to pension expense",
        why="The obligation is recognized at once, but the cost reaches income gradually, over the service period it was meant to reward.",
        rule=[
            "Amending a plan to improve benefits for past service raises the projected benefit obligation **immediately**. The employer grants the improvement expecting future benefit from its workforce, so the cost is not charged to income all at once.",
            "At the amendment date the increase is recognized in **other comprehensive income** as prior service cost. It is then amortized out of accumulated other comprehensive income into pension expense over the remaining service period of the employees who benefit. That is why prior service cost appears in AOCI and, year by year, as a component of pension cost.",
        ],
        wrong={
            "A": "Immediate expensing would charge income with a cost intended to benefit several future periods.",
            "B": "The amendment creates an obligation, not an asset. Nothing has been prepaid.",
            "D": "The increase in the obligation is recognized when the plan is amended. It is not merely disclosed, and recognition does not wait until benefits are paid.",
        },
    ),
    E(
        id="IA-PEN-08", letter="B", headline="$18,000",
        why="Only the part of the loss outside the $300,000 corridor is amortized, over 10 years.",
        rule=[
            "Actuarial gains and losses arise constantly as assumptions change and returns differ from expectations. The **corridor** lets small ones pile up without touching expense, and amortizes only the part that has grown large relative to the plan.",
            "The corridor is 10% of the greater of the projected benefit obligation or the fair value of plan assets. Only the amount **outside** the corridor is amortized, over the average remaining service period.",
        ],
        math=[
            ("Greater of the obligation ($3,000,000) and the assets ($2,600,000)", "$3,000,000"),
            ("Corridor, 10%", "$300,000"),
            ("Net loss of $480,000 less the corridor", "$180,000"),
            ("Amortization, $180,000 / 10 years", "$18,000"),
        ],
        wrong={
            "A": "$0 would be right only if the net loss were inside the corridor. At $480,000 it exceeds $300,000.",
            "C": "$30,000 amortizes the corridor itself ($300,000 / 10) instead of the excess above it.",
            "D": "$48,000 amortizes the entire net loss ($480,000 / 10) and ignores the corridor.",
        },
    ),
    E(
        id="IA-PEN-09", letter="A", headline="The employer owes only its agreed contribution, and the employee bears the investment risk",
        why="Whatever the account grows to is what the employee receives, so the risk sits with the employee.",
        rule=[
            "The distinction is **who carries the investment risk**, and it drives all of the accounting. In a defined contribution plan the employer promises only to pay in an agreed amount. Once it does, its obligation is discharged.",
            "A defined benefit plan promises a specified benefit at retirement, so a shortfall in plan investments falls on the employer. That promise is what has to be measured, which is why the pension machinery (projected benefit obligation, asset roll-forward, corridor) exists only for defined benefit plans. A defined contribution plan has none of it: expense is simply the contribution owed for the period.",
        ],
        wrong={
            "B": "This describes a defined benefit plan, where the employer promises the benefit and bears the risk.",
            "C": "A projected benefit obligation measures a promised future benefit, which a defined contribution plan does not make.",
            "D": "Actuarial assumptions about mortality and discount rates drive defined benefit expense. A defined contribution plan needs no actuary.",
        },
    ),
    E(
        id="IA-PEN-10", letter="D", headline="Service cost sits with employee compensation; the other components are presented separately, outside operations",
        why="Service cost is pay for this period's work, and the other components are financing and actuarial in nature.",
        rule=[
            "The components of pension cost are not alike, and the presentation now reflects that. **Service cost** is the cost of benefits earned by working this period, so it is reported with other employee compensation, inside income from operations.",
            "The remaining components (interest cost, expected return on plan assets and the amortizations) are presented **separately** and outside any subtotal for income from operations. A strong year for the plan's portfolio no longer flatters operating income.",
        ],
        wrong={
            "A": "Combining everything in operating expenses is the treatment the current requirement replaced. It lets plan investment returns move operating income.",
            "B": "Pension cost is an expense in net income. Other comprehensive income holds unrecognized gains, losses and prior service cost until they are amortized.",
            "C": "This reverses the rule. Service cost is the operating piece, and the other components are the ones outside operations.",
        },
    ),
]
