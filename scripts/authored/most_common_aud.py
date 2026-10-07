"""10 Most Common AUD Questions."""
from .mx import E

Q = "most-common-aud"

RECORDS = [
    E(
        quiz=Q, id="1", letter="D", headline="Disclaimer of opinion and a qualified opinion",
        why="Missing evidence is a scope limitation, and the choice between the two turns on whether the possible effects are pervasive.",
        rule=[
            "When the auditor cannot obtain sufficient appropriate evidence, that is a **scope limitation**, and the modified opinion depends on how far the possible misstatements could reach. If the effects could be material but **not pervasive**, the auditor issues a **qualified** opinion. If they could be material and **pervasive**, the auditor issues a **disclaimer**.",
            "Inadequate records for a substantial portion of sales put the auditor at exactly that fork. An adverse opinion is for misstatements the auditor has found, not for evidence the auditor could not obtain.",
        ],
        wrong={
            "A": "A qualified opinion is a realistic outcome, but an unmodified opinion is not. Without sufficient evidence the auditor cannot give a clean opinion.",
            "B": "Neither of these fits. An unmodified opinion needs the evidence, and an adverse opinion is for known, pervasive misstatement.",
            "C": "An adverse opinion is for misstatements the auditor has identified. Missing evidence points to a qualified opinion or a disclaimer instead.",
        },
    ),
    E(
        quiz=Q, id="2", letter="A",
        headline="Unqualified opinion, because alternative procedures provided sufficient appropriate evidence",
        why="Missing the count only matters if the auditor could not get the evidence another way.",
        rule=[
            "A modified opinion for a scope limitation requires that the auditor be **unable to obtain sufficient appropriate evidence**. Not attending the count is not itself a limitation. It is a missed procedure.",
            "Here the auditor performed alternative procedures and obtained the evidence, so the objective was met and the opinion stays unmodified.",
        ],
        wrong={
            "B": "The missed count would support a qualified opinion only if no alternative procedure could replace it. Here one did.",
            "C": "An adverse opinion is for material, pervasive misstatement. Nothing here is misstated.",
            "D": "A disclaimer is for material, pervasive evidence the auditor could not obtain. The auditor obtained sufficient evidence on inventory.",
        },
    ),
    E(
        quiz=Q, id="3", letter="C", headline="Confirming that shipments to customers were invoiced",
        why="Starting from the shipping document and following it forward tests whether every shipment was billed.",
        rule=[
            "The direction of a test decides what it tests. Starting with a **bill of lading**, the record that goods left, and following it to a **sales invoice** asks whether every shipment was billed. That is a completeness test.",
            "Starting from the invoice and tracing back to the bill of lading would test the opposite: whether recorded sales really happened, which is occurrence.",
        ],
        wrong={
            "A": "This also describes completeness, but it ends at the sales record. This procedure ends at the invoice, so what it confirms is that shipments were invoiced.",
            "B": "Verifying that recorded sales are supported by shipping documents is the reverse direction. It starts at the sales record and traces back to the shipment, which tests occurrence.",
            "D": "Inventory counts and valuation are tested with observation and costing procedures, not by comparing shipping documents to invoices.",
        },
    ),
    E(
        quiz=Q, id="4", letter="C",
        headline="Analyze a report of prenumbered sales invoices and investigate any missing sequences",
        why="Accounting for every number in the sequence is the control that gives assurance all sales were recorded.",
        rule=[
            "The question asks about **tests of controls** for the **completeness** of sales. The control that addresses completeness is a numerical sequence: if every prenumbered invoice is accounted for, no sale can quietly go unrecorded.",
            "Testing that control means reviewing the sequence and investigating gaps. That shows whether the control is operating, which is different from testing the sales balance itself.",
        ],
        wrong={
            "A": "Tracing shipping documents to purchase orders is a substantive check that shipments were ordered. It does not test a control that makes sure every sale is captured.",
            "B": "Starting from billed sales and checking them to the shipping log tests whether recorded sales really happened, which is occurrence, not completeness.",
            "D": "Checking authorization and recording consistency supports occurrence and accuracy. It does not show that every sale was captured.",
        },
    ),
    E(
        quiz=Q, id="5", letter="A",
        headline="Receiving reports for items received before year end but not yet recorded as liabilities",
        why="A liability exists when goods arrive, so the receiving record is the best lead for obligations missing from the books.",
        rule=[
            "A search for **unrecorded liabilities** looks for obligations that exist at year end but are not in the books. A liability arises when goods are received, not when the invoice arrives and not when it is paid, so the best starting point is the receiving record.",
            "Receiving reports for goods that arrived before year end, compared with recorded payables, expose goods the company owes for but has not recorded.",
        ],
        wrong={
            "B": "Checks issued just after year end can point to unrecorded liabilities, but they start from payments and catch only obligations already paid. Receiving reports catch the obligation whether or not it has been paid.",
            "C": "Invoices recorded in the next period are a good lead, but they find only liabilities that have an invoice by the time the auditor looks. Receiving reports find the goods whether or not an invoice has arrived.",
            "D": "Letters from legal counsel address litigation and claims, not the completeness of trade payables.",
        },
    ),
    E(
        quiz=Q, id="6", letter="D",
        headline="The employee who distributes payroll checks also updates the payroll records",
        why="One person holds both custody of the checks and the records that support them, which are incompatible duties.",
        rule=[
            "The principle is **segregation of duties**: keep authorization, record keeping and custody of assets in different hands. Here the person who distributes the checks (custody) also updates hours and pay rates (record keeping).",
            "That combination gives one person both the means and the opportunity to inflate pay or add a fictitious employee and then collect the check, with nothing in the process to expose it.",
        ],
        wrong={
            "A": "Holding unclaimed checks is custody, and the treasurer here is not also keeping the payroll records, so no two incompatible duties are combined.",
            "B": "The treasurer's signature is an authorization step separate from preparing the checks. The missing independent review is a gap, but not the clear combination of incompatible duties in D.",
            "C": "A missing cross-check on terminations is a monitoring gap, not one person holding both custody and record keeping.",
        },
    ),
    E(
        quiz=Q, id="7", letter="A",
        headline="The auditor overestimates the operating effectiveness of the client's control activity based on the sample results",
        why="A control risk assessment that is too low means the auditor trusted the control more than it deserved.",
        rule=[
            "Assessing control risk **too low** means relying on controls more than they warrant. The usual cause is that the sample made the control look **better than it really operates**: the auditor overestimates its operating effectiveness.",
            "That is the risk of incorrect acceptance in a test of controls, and it is the dangerous direction. The auditor then cuts back substantive testing and can miss a material misstatement.",
        ],
        wrong={
            "B": "Underestimating effectiveness leads to assessing control risk too high, which costs extra work but does not threaten the audit's conclusion.",
            "C": "Treating a control as irrelevant means not relying on it, which raises the assessed risk rather than lowering it.",
            "D": "Expecting the control to reduce substantive testing is the consequence of a low control risk assessment, not its cause.",
        },
    ),
    E(
        quiz=Q, id="8", letter="A", headline="Extent of tests of details",
        why="Higher control risk forces lower detection risk, which means more substantive testing.",
        rule=[
            "The audit risk model links the three risks: **audit risk = inherent risk x control risk x detection risk**. The auditor holds audit risk low, so when control risk rises, detection risk has to fall to compensate.",
            "Lower detection risk means more or better **substantive procedures**, such as tests of details. The auditor cannot test controls harder to fix controls that have already failed.",
        ],
        wrong={
            "B": "The acceptable level of detection risk would decrease, not increase. Higher control risk requires lower detection risk.",
            "C": "Inherent risk belongs to the client and its environment. A control failure does not change it.",
            "D": "Tests of controls support relying on controls. With the controls found unreliable, the auditor relies on substantive tests instead.",
        },
    ),
    E(
        quiz=Q, id="9", letter="C", headline="SOC 1 Type 2 report",
        why="SOC 1 covers controls relevant to financial reporting, and Type 2 covers both design and operating effectiveness.",
        rule=[
            "Two choices decide the report. **SOC 1** covers controls relevant to the user's **financial reporting**. SOC 2 covers security, availability, processing integrity, confidentiality and privacy, which are not financial reporting controls.",
            "**Type 2** covers both the design and the operating effectiveness of the controls over a period of time. Type 1 covers design only, at a single date. The client wants both, so the answer is SOC 1 Type 2.",
        ],
        wrong={
            "A": "SOC 1 is the right family, but Type 1 does not test operating effectiveness.",
            "B": "SOC 2 addresses trust services criteria rather than financial reporting, and Type 1 lacks operating effectiveness as well.",
            "D": "Type 2 covers operating effectiveness, but SOC 2 addresses trust services criteria rather than controls relevant to financial reporting.",
        },
    ),
    E(
        quiz=Q, id="10", letter="B",
        headline="An accounts payable clerk prepares checks but does not have the authority to sign them",
        why="Preparing a payment and approving it sit with different people, so neither can create and approve one alone.",
        rule=[
            "Segregation of duties keeps one person from controlling a transaction from start to finish. The functions to keep apart are **authorization, record keeping and custody of assets**.",
            "Here one person prepares the check and another signs it, so a fictitious vendor or a payment to oneself would need two people to agree.",
        ],
        wrong={
            "A": "The cashier handles cash receipts and also reconciles the ledger, which combines custody with the record that would reveal a theft.",
            "C": "The inventory manager orders and receives, which combines authorization with custody and lets purchases for personal use or for nothing go unnoticed.",
            "D": "A salesperson who records sales and adjusts customer balances combines record keeping with the ability to hide a diversion.",
        },
    ),
]
