"""Time value of money, adjusting entries and one payables note: ten questions."""
from .mx import E

RECORDS = [
    E(
        id="IA-TVM-01", letter="D", headline="$25,250",
        why="$20,000 grows by the 6%, four-period future value factor, which already builds in the compounding.",
        rule=[
            "A future value factor answers one question: what does a dollar invested today become? The factor already compounds **interest on interest** for every period, so you multiply once and you are done.",
            "Match the table to the cash flows. One lump sum invested today and measured at a later date uses the **future value of $1** factor. An annuity table is only right for a series of equal payments.",
        ],
        math=[
            ("Amount invested today", "$20,000"),
            ("Future value of $1, 6%, 4 periods", "x 1.26248"),
            ("Account balance at the end of Year 4", "$25,250"),
        ],
        after_math="$20,000 x 1.26248 is $25,249.60, which rounds to $25,250.",
        wrong={
            "A": "$20,000 is the original principal with no growth, so it ignores four years of earnings.",
            "B": "$24,000 is a flat 20% return, not 6% compounded annually.",
            "C": "$24,800 uses simple interest ($20,000 x 6% x 4 = $4,800), so interest never earns interest.",
        },
    ),
    E(
        id="IA-TVM-02", letter="B", headline="$34,029",
        why="A $50,000 receipt in five years is worth less today, so it is discounted by the 8%, five-period present value factor.",
        rule=[
            "Discounting runs the clock backward. The **present value of $1** factor shrinks a future amount to what it is worth today, so the answer has to be smaller than $50,000.",
            "One future receipt means one factor and one multiplication. There is no stream of payments, so an annuity table does not apply.",
        ],
        math=[
            ("Amount to be received in 5 years", "$50,000"),
            ("Present value of $1, 8%, 5 periods", "x 0.68058"),
            ("Present value today", "$34,029"),
        ],
        after_math="$50,000 x 0.68058 = $34,029.",
        wrong={
            "A": "$32,000 would need a factor of 0.64, which is not the table value for 8% over five periods. It discounts too much.",
            "C": "$46,000 discounts for a single period ($50,000 x 92%), not five.",
            "D": "$50,000 is the undiscounted amount. Money received in five years is worth less than the same sum today.",
        },
    ),
    E(
        id="IA-TVM-03", letter="C", headline="Stream B has a higher present value",
        why="Its payments arrive at the start of each year, so every one is discounted a period less than in Stream A.",
        rule=[
            "Both streams pay $5,000 a year for six years at 7%, so the only difference is **timing**. An ordinary annuity pays at the end of each period. An annuity due pays at the beginning.",
            "Each payment in an annuity due arrives one full period sooner, so it is discounted one period less and is worth more today. The link is exact: **annuity due factor = ordinary annuity factor x (1 + i)**, and (1 + i) is greater than 1 at any positive rate.",
        ],
        math=[
            ("Stream A, ordinary annuity: $5,000 x 4.76654", "$23,833"),
            ("Stream B, annuity due: $5,000 x 5.10020", "$25,501"),
            ("Stream B is higher by", "$1,668"),
        ],
        after_math="The question prints no factors, so these are for illustration only. The answer does not depend on them: any positive rate makes the annuity due larger.",
        wrong={
            "A": "An ordinary annuity does not run an extra period. Both streams have six payments, and Stream A's simply fall later in the same six years.",
            "B": "The undiscounted totals match at $30,000, but present value depends on when each payment arrives, not only on how much is paid.",
            "D": "Receiving money earlier raises its present value. Timing within an annuity is not a risk adjustment.",
        },
    ),
    E(
        id="IA-TVM-04", letter="C", headline="$44,205",
        why="Eight thousand dollars deposited at each year end for five years accumulates at the 5% ordinary annuity factor.",
        rule=[
            "Equal deposits at the **end of each period** form an ordinary annuity. The future value factor already reflects that each deposit earns interest for a different length of time: the first for four years, the last for none.",
            "So the table has the staggered timing built in. Multiply the deposit by the factor and stop.",
        ],
        math=[
            ("Annual deposit, made at year end", "$8,000"),
            ("Future value of an ordinary annuity, 5%, 5 periods", "x 5.52563"),
            ("Fund balance at the end of Year 5", "$44,205"),
        ],
        after_math="$8,000 x 5.52563 = $44,205.04, which rounds to $44,205.",
        wrong={
            "A": "$40,000 is the five deposits added up with no interest at all.",
            "B": "$42,000 falls $2,205 short of the true balance, so it cannot include the compounding the annuity factor supplies.",
            "D": "$46,000 overstates the earnings. The last deposit is made on the last day and earns nothing, so crediting every deposit with full interest is too generous.",
        },
    ),
    E(
        id="IA-TVM-05", letter="B", headline="$67,289",
        why="Six equal year-end payments of $15,000 at 9% use the ordinary annuity present value factor.",
        rule=[
            "A settlement that pays a fixed amount at the **end of each year** is an ordinary annuity. Its value today is the payment multiplied by the present value of an ordinary annuity factor for that rate and number of payments.",
            "The factor already discounts each of the six payments for its own number of years, so you do not discount anything separately.",
        ],
        math=[
            ("Annual settlement payment", "$15,000"),
            ("Present value of an ordinary annuity, 9%, 6 periods", "x 4.48592"),
            ("Present value of the settlement", "$67,289"),
        ],
        after_math="$15,000 x 4.48592 = $67,288.80, which rounds to $67,289.",
        wrong={
            "A": "$62,000 would need a factor of about 4.13, lower than the table's 4.48592. It discounts too much.",
            "C": "$73,500 would need a factor of 4.90, higher than the table's 4.48592. It discounts too little.",
            "D": "$90,000 adds up the six payments with no discounting, which ignores that money arriving over six years is worth less than money in hand.",
        },
    ),
    E(
        id="IA-TVM-06", letter="C", headline="$35,771",
        why="Payments at the start of each year call for the annuity due factor, 3.57710.",
        rule=[
            "Payments made at the **beginning** of each period are an annuity due, so the annuity due factor applies. The ordinary annuity factor assumes end-of-period payments and would discount every payment one period too many.",
            "The question lists three factors on purpose. Pick by the timing of the cash flows, not by which one is printed first.",
        ],
        math=[
            ("Annual payment, made at the start of each year", "$10,000"),
            ("Present value of an annuity due, 8%, 4 periods", "x 3.57710"),
            ("Present value today", "$35,771"),
        ],
        wrong={
            "A": "$29,401 treats all $40,000 as one payment at the end of Year 4 and applies the lump-sum factor (0.73503). The timing and the kind of factor are both wrong.",
            "B": "$33,121 uses the ordinary annuity factor (3.31213), which discounts every payment one period too many.",
            "D": "$40,000 adds up the four payments with no discounting at all.",
        },
    ),
    E(
        id="IA-TVM-07", letter="A", headline="$29,849",
        why="Semiannual compounding means halving the rate and doubling the periods, so the factor is 5% for 6 periods.",
        rule=[
            "When interest compounds more often than once a year, convert **both** inputs before touching a table. The periodic rate is the annual rate divided by the compounding periods per year, and the number of periods is the years multiplied by the same number.",
            "That makes 5% for 6 periods. The question prints both factors, and the annual one at 10% for 3 periods is the trap.",
        ],
        math=[
            ("Periodic rate, 10% / 2", "5%"),
            ("Number of periods, 3 years x 2", "6"),
            ("Present value of $1, 5%, 6 periods", "0.74622"),
            ("Deposit required today, $40,000 x 0.74622", "$29,849"),
        ],
        after_math="$40,000 x 0.74622 = $29,848.80, which rounds to $29,849.",
        wrong={
            "B": "$30,052 uses the annual factor (0.75131), leaving the rate and periods unconverted. More frequent compounding needs a smaller deposit, not a larger one.",
            "C": "$36,000 takes 10% off once instead of discounting across six compounding periods.",
            "D": "$40,000 deposits the full future amount, so nothing is discounted.",
        },
    ),
    E(
        id="IA-AJE-01", letter="D", headline="Debit Insurance Expense $2,400; Credit Prepaid Insurance $2,400",
        why="Three of the twelve months of coverage have been used by December 31.",
        rule=[
            "The full premium went into an asset when it was paid. At year end the adjusting entry moves the **part that has been used** out of Prepaid Insurance and into expense, and leaves the unused part on the balance sheet.",
            "The policy runs twelve months from October 1, so October, November and December have expired. Nine months, or $7,200, still sit in the asset.",
        ],
        math=[
            ("Monthly cost, $9,600 / 12", "$800"),
            ("Months expired, October through December", "3"),
            ("Insurance expense for Year 1", "$2,400"),
        ],
        entry_title="The adjusting entry",
        entry=[
            ("Insurance Expense", "$2,400", ""),
            ("Prepaid Insurance", "", "$2,400"),
        ],
        after_entry="Prepaid Insurance now holds $7,200 for the nine months that fall in Year 2.",
        wrong={
            "A": "Expensing the full $9,600 treats all twelve months as used. Only three have expired.",
            "B": "Expensing $7,200 expenses the unused part and leaves the used part on the balance sheet, which is the split exactly reversed.",
            "C": "This debits the asset and credits expense, so the entry runs backwards and overstates assets and net income.",
        },
    ),
    E(
        id="IA-AJE-02", letter="B", headline="Debit Unearned Revenue $6,000; Credit Service Revenue $6,000",
        why="Two of the six months of service have been performed, so one third of the $18,000 is earned.",
        rule=[
            "Cash collected before the work is done is a **liability**, not revenue. The adjusting entry recognizes only the part that has been earned and leaves the rest in Unearned Revenue.",
            "Revenue follows performance, not the date the cash arrived. Four more months of service are still owed, which is why $12,000 stays in the liability.",
        ],
        math=[
            ("Monthly revenue, $18,000 / 6", "$3,000"),
            ("Months performed, November and December", "2"),
            ("Revenue earned in Year 1", "$6,000"),
        ],
        entry_title="The adjusting entry",
        entry=[
            ("Unearned Revenue", "$6,000", ""),
            ("Service Revenue", "", "$6,000"),
        ],
        after_entry="Unearned Revenue falls from $18,000 to $12,000.",
        wrong={
            "A": "This repeats the November 1 entry for the cash received. That is already recorded, and it is not an adjusting entry.",
            "C": "Recognizing the full $18,000 treats all six months as performed. Only two have been.",
            "D": "This runs the entry backwards, which reduces revenue and increases the liability.",
        },
    ),
    E(
        id="IA-PAY-01", letter="C", headline="Carrying amount $47,630; discount $12,370",
        why="A noninterest-bearing note is recorded at the present value of the $60,000 due in three years at 8%.",
        rule=[
            "A note called noninterest-bearing still **carries interest**. It is bundled into the face amount instead of stated separately, so the note is recorded at the present value of its cash flows and the gap between face and present value is a discount.",
            "The discount is not an expense on day one. It is amortized to interest expense over the three years, which is how the liability grows back up to $60,000.",
        ],
        math=[
            ("Face amount due at the end of Year 3", "$60,000"),
            ("Present value of $1, 8%, 3 periods", "x 0.79383"),
            ("Carrying amount at issuance", "$47,630"),
            ("Discount on Note Payable, $60,000 less $47,630", "$12,370"),
        ],
        after_math="$60,000 x 0.79383 = $47,629.80, which rounds to $47,630.",
        entry_title="The entry at issuance",
        entry=[
            ("Equipment", "$47,630", ""),
            ("Discount on Note Payable", "$12,370", ""),
            ("Note Payable", "", "$60,000"),
        ],
        after_entry="The note is reported at $60,000 less the unamortized discount, which is the $47,630 carrying amount.",
        wrong={
            "A": "Recording the note at face ($60,000) ignores the discounting and would overstate both the equipment and the liability.",
            "B": "A $5,400 discount is far too small for three years at 8%. It looks like one year of interest rather than a discount across all three.",
            "D": "A discount of $47,630 mistakes the present value for the discount. The discount is face minus present value.",
        },
    ),
]
