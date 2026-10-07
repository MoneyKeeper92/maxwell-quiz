"""10 Most Common REG Questions."""
from .mx import E

Q = "most-common-reg"

RECORDS = [
    E(
        quiz=Q, id="1", letter="D", headline="$96,000",
        why="Basis rises for the 40% share of income and gains, and falls for the share of expenses and for the distribution.",
        rule=[
            "An S corporation shareholder's stock basis goes **up** for the share of income and gains and **down** for the share of losses, expenses and distributions. Everything passes through by **ownership percentage**, which is 40% here.",
            "Wages are not part of it. Wages paid to a shareholder-employee are a deduction of the corporation and income to the shareholder, but they do not change stock basis.",
        ],
        math=[
            ("Beginning basis", "$15,000"),
            ("Ordinary income, 40% x $300,000", "$120,000"),
            ("Long-term capital gain, 40% x $20,000", "$8,000"),
            ("Investment interest expense, 40% x $5,000", "($2,000)"),
            ("Distribution", "($45,000)"),
            ("Basis at year end", "$96,000"),
        ],
        wrong={
            "A": "$72,000 is $24,000 below the correct basis. No amount in the problem is that size, and wages never reduce stock basis.",
            "B": "$78,000 is $18,000 below the correct basis. The only reductions are the $2,000 expense and the $45,000 distribution.",
            "C": "$85,000 is $11,000 below the correct basis, for the same reason.",
        },
    ),
    E(
        quiz=Q, id="2", letter="B", headline="$307,500",
        why="Each partner's basis starts with the contribution, then adds a share of the debt and income and subtracts a share of the loss.",
        rule=[
            "A partner's basis starts with the **contribution** and then moves with the partnership. It goes up for the share of income and for the share of **partnership liabilities**, and down for the share of losses and distributions.",
            "Unlike an S corporation shareholder, a partner shares in partnership debt. The $600,000 nonrecourse note is split among the four equal partners, $150,000 each, and it raises each partner's basis.",
        ],
        math=[
            ("Contribution", "$150,000"),
            ("Share of nonrecourse debt, $600,000 x 25%", "$150,000"),
            ("Share of net income, $50,000 x 25%", "$12,500"),
            ("Share of capital loss, $20,000 x 25%", "($5,000)"),
            ("Basis at the end of the first year", "$307,500"),
        ],
        wrong={
            "A": "$365,000 is $57,500 more than the four steps give, and nothing in the problem supports an increase of that size.",
            "C": "$385,000 is $77,500 more than the four steps give, with nothing in the problem to support it.",
            "D": "$395,000 is $87,500 more than the four steps give, with nothing in the problem to support it.",
        },
    ),
    E(
        quiz=Q, id="3", letter="C", headline="$26,000",
        why="The loss is limited to basis, and the unpaid part of the bank loan adds to basis.",
        rule=[
            "A partner can deduct a share of partnership losses only up to **outside basis**. Basis includes the partner's share of partnership liabilities, so a loan the partnership still owes at year end raises the limit.",
            "Only the **unpaid** part of the loan counts: $40,000 of the $50,000 remains. Losses above the limit are not lost. They are suspended and carried forward.",
        ],
        math=[
            ("Beginning basis", "$10,000"),
            ("Share of the unpaid bank loan, 40% x $40,000", "$16,000"),
            ("Basis available for losses", "$26,000"),
            ("Share of the loss, 40% x $100,000", "$40,000"),
            ("Loss allowed this year, the lesser of the two", "$26,000"),
        ],
        after_math="The other $14,000 is suspended and carried forward.",
        wrong={
            "A": "$16,000 counts only the share of the loan and forgets the $10,000 beginning basis.",
            "B": "$20,000 is 40% of the whole $50,000 loan, which is neither the unpaid amount nor the basis limit.",
            "D": "$40,000 is the full share of the loss, which ignores the basis limit.",
        },
    ),
    E(
        quiz=Q, id="4", letter="A", headline="$54,000",
        why="Gifts of long-term appreciated property to a public charity are capped at 30% of AGI, and the cap is lower than the value.",
        rule=[
            "Donated **long-term appreciated property** is generally deductible at **fair market value**, but the deduction for gifts of that property to a public charity is capped at **30% of AGI**. The sculpture was held more than a year, so its $100,000 value is the starting point.",
            "The cap, not the value, is the binding number. Anything above it is not lost, because the excess carries forward for up to five years.",
        ],
        math=[
            ("Fair market value of the sculpture", "$100,000"),
            ("Limit, 30% x $180,000 of AGI", "$54,000"),
            ("Deduction allowed in Year 10, the lesser", "$54,000"),
        ],
        after_math="The remaining $46,000 carries forward. The question gives no sign that the charity will use the sculpture outside its exempt purpose, so fair market value applies.",
        wrong={
            "B": "$60,000 is one third of AGI, which is not a limit that applies here.",
            "C": "$80,000 is about 44% of AGI, which is not a limit that applies. The limit for this kind of gift is 30%, or $54,000.",
            "D": "$100,000 is the full value, which ignores the AGI cap.",
        },
    ),
    E(
        quiz=Q, id="5", letter="A", headline="$6,400",
        why="Doctor fees and prescription glasses qualify, and cosmetic surgery and life insurance premiums do not.",
        rule=[
            "Medical expense is deductible only for care that treats or prevents illness or affects a structure or function of the body. Doctor and chiropractor fees and **prescription glasses** qualify.",
            "**Elective cosmetic surgery** that only improves appearance does not qualify, and **life insurance premiums** are never medical expenses. The 7.5% of AGI floor comes afterward, which is why the question asks for the total before it.",
        ],
        math=[
            ("Doctor and chiropractor fees", "$6,000"),
            ("Prescription glasses", "$400"),
            ("Elective cosmetic surgery", "$0"),
            ("Life insurance premium", "$0"),
            ("Deductible medical expenses before the AGI floor", "$6,400"),
        ],
        wrong={
            "B": "$6,900 matches no combination of the four items.",
            "C": "$7,500 adds the life insurance premium ($6,000 + $1,500) and leaves out the glasses.",
            "D": "$15,900 adds all four items, including the two that do not qualify.",
        },
    ),
    E(
        quiz=Q, id="6", letter="A", headline="$0",
        why="The gain of $70,000 is fully covered by the $250,000 exclusion on the sale of a principal residence.",
        rule=[
            "A single taxpayer can **exclude up to $250,000** of gain on the sale of a principal residence ($500,000 if married filing jointly) if she **owned and used it as her main home for at least two of the five years** before the sale. Four years of living there easily qualifies.",
            "Improvements raise the basis, which shrinks the gain. Here the exclusion absorbs the whole gain anyway.",
        ],
        math=[
            ("Amount realized", "$400,000"),
            ("Cost of $300,000 plus improvements of $30,000", "($330,000)"),
            ("Realized gain", "$70,000"),
            ("Excluded under section 121, up to $250,000", "($70,000)"),
            ("Gain included in gross income", "$0"),
        ],
        wrong={
            "B": "$10,000 matches no step. The gain is $70,000 and the exclusion removes all of it.",
            "C": "$40,000 matches no calculation here. The gain before the exclusion is $70,000 with the improvements, or $100,000 without them.",
            "D": "$70,000 is the realized gain before the exclusion, which the exclusion then removes.",
        },
    ),
    E(
        quiz=Q, id="7", letter="A", headline="$0",
        why="The sale price falls between the donor's basis and the lower value at the gift, so neither a gain nor a loss is recognized.",
        rule=[
            "Gifted property carries the donor's basis, with one trap. When the **fair market value at the gift is lower than the donor's basis**, there are two bases: the donor's basis for computing a **gain**, and the fair market value at the gift for computing a **loss**.",
            "A sale price between the two produces neither a gain nor a loss. The $13,000 price sits between the $12,000 and the $15,000.",
        ],
        math=[
            ("Sale price", "$13,000"),
            ("Gain test against the donor's $15,000 basis", "no gain"),
            ("Loss test against the $12,000 value at the gift", "no loss"),
            ("Gain or loss recognized", "$0"),
        ],
        wrong={
            "B": "$1,000 uses the $12,000 value at the gift as a basis for a gain, but that figure applies only when computing a loss.",
            "C": "$2,000 compares the sale to the donor's basis, which would be a loss, and a loss is measured against the lower basis.",
            "D": "$3,000 is the gap between the donor's basis and the value at the gift, which is not a gain on this sale.",
        },
    ),
    E(
        quiz=Q, id="8", letter="B", headline="$7,000",
        why="The net capital loss is $10,000, $3,000 is deductible this year, and the rest carries forward.",
        rule=[
            "Net all the long-term items together, net all the short-term items together, then combine. The **loss on a personal residence is not deductible**, so it is ignored entirely.",
            "An individual can deduct up to **$3,000** of a net capital loss against ordinary income each year. The rest carries forward.",
        ],
        math=[
            ("Net long-term, $8,000 gain less $6,000 loss on the sculpture", "$2,000"),
            ("Net short-term, $12,000 loss on the bonds held eight months", "($12,000)"),
            ("Net capital loss", "($10,000)"),
            ("Deductible against ordinary income", "($3,000)"),
            ("Capital loss carried forward", "$7,000"),
        ],
        wrong={
            "A": "$5,000 matches no step in the calculation.",
            "C": "$10,000 is the net capital loss before the $3,000 deduction.",
            "D": "$15,000 is the loss on the residence, which is personal and never deductible.",
        },
    ),
    E(
        quiz=Q, id="9", letter="D", headline="$9,139",
        why="A commercial building is depreciated over 39 years with the mid-month convention, and land is excluded.",
        rule=[
            "Commercial buildings are **39-year nonresidential real property**, depreciated straight-line with the **mid-month convention**, which treats the building as placed in service in the middle of the month. **Land is never depreciable**, so the $50,000 comes out first.",
            "Placed in service in March, the building gets 9.5 months in Year 1: half of March plus April through December.",
        ],
        math=[
            ("Cost less land, $500,000 - $50,000", "$450,000"),
            ("Full-year straight-line, $450,000 / 39", "$11,538"),
            ("Months in Year 1", "9.5 of 12"),
            ("Year 1 depreciation by formula, $11,538 x 9.5 / 12", "$9,135"),
        ],
        after_math="The exact arithmetic gives $9,135, and the IRS percentage table (2.033%) gives $9,149. The keyed $9,139 is the nearest of the four choices, and each of the others is far off for an identifiable reason.",
        wrong={
            "A": "$12,320 is more than a full year of depreciation ($11,538), which is impossible in a partial year.",
            "B": "$11,538 is a full year, with no mid-month adjustment.",
            "C": "$10,090 is about ten and a half months, as if the building had been placed in service in February.",
        },
    ),
    E(
        quiz=Q, id="10", letter="A", headline="$550,000",
        why="Ordinary business income is operating profit after guaranteed payments, and the capital gain and interest are separately stated.",
        rule=[
            "A partnership's **ordinary business income** is its operating profit after deductions for the business. **Guaranteed payments** to partners for services are deductible in getting there.",
            "Capital gains and bond interest are **separately stated items**. They pass through to the partners on their own lines, with their own character, and stay out of ordinary business income.",
        ],
        math=[
            ("Gross sales", "$1,500,000"),
            ("Cost of goods sold", "($500,000)"),
            ("Operating expenses", "($300,000)"),
            ("Guaranteed payments to partners", "($150,000)"),
            ("Ordinary business income", "$550,000"),
        ],
        wrong={
            "B": "$560,000 is $10,000 above the correct income, and no single amount in the problem is $10,000.",
            "C": "$600,000 is $50,000 above the correct income, and no single amount in the problem is $50,000.",
            "D": "$650,000 is $100,000 above the correct income, and no single amount in the problem is $100,000.",
        },
    ),
]
