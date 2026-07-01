import type { Quiz } from "./types";

/** Replace with your real questions — one file per quiz is a good pattern. */
export const farCashSample: Quiz = {
  key: "far-cash-sample",
  title: "FAR Practice — Cash & Cash Equivalents",
  subtitle: "5 free MCQs to test your understanding",
  discipline: "far",
  questions: [
    {
      id: "1",
      prompt:
        "Which of the following is generally considered cash for financial reporting purposes?",
      choices: [
        "Certificates of deposit with a 6-month maturity from date of purchase",
        "Money market funds with daily liquidity",
        "Compensating balances under a borrowing arrangement",
        "Postdated checks from customers",
      ],
      correctIndex: 1,
      explanation:
        "Money market funds with daily liquidity qualify as cash equivalents. CDs must mature within 90 days of purchase.",
    },
    {
      id: "2",
      prompt:
        "Cash equivalents are short-term, highly liquid investments with an original maturity of:",
      choices: ["30 days or less", "60 days or less", "90 days or less", "180 days or less"],
      correctIndex: 2,
      explanation: "The standard threshold is three months (90 days) or less from date of purchase.",
    },
    {
      id: "3",
      prompt:
        "Petty cash on hand should be reported in the balance sheet as:",
      choices: ["Other current assets", "Cash", "Prepaid expenses", "Restricted cash"],
      correctIndex: 1,
    },
    {
      id: "4",
      prompt:
        "A compensating balance that is legally restricted and relates to short-term borrowing should be shown as:",
      choices: [
        "Cash with disclosure",
        "A separate line item or reclassification from cash",
        "Noncurrent asset only",
        "Contra equity",
      ],
      correctIndex: 1,
      explanation:
        "Restricted compensating balances tied to short-term arrangements are generally not reported as unrestricted cash.",
    },
    {
      id: "5",
      prompt:
        "When preparing the statement of cash flows, cash equivalents are typically:",
      choices: [
        "Excluded entirely",
        "Treated the same as cash",
        "Shown only in investing activities",
        "Disclosed only in the footnotes",
      ],
      correctIndex: 1,
    },
  ],
};
