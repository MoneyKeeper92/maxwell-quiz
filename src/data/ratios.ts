import type { Quiz } from "./types";

export const ratiosQuiz: Quiz = {
  key: "ratios",
  title: "Ratios",
  subtitle: "Financial statement analysis and ratio interpretation",
  discipline: "far",
  course: "cpa",
  questions: [
    {
      id: "5461",
      prompt: `A company current has $10,000 in cash, $5,000 in AR, $10,000 in fixed assets, $5,000 in AP, and $5,000 in wages payable. The company is considering obtaining short-term debt to purchase new inventory. How much in short-term loans could the company obtain before dropping below a current ratio of 1.25?`,
      choices: [
        `$20,000`,
        `$17,500`,
        `$10,000`,
        `$12,000`,
      ],
      correctIndex: 2,
      explanation: `<div style="font-family: 'Segoe UI', sans-serif; margin: 0 auto; background-color: #f9f9f9; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"> <div style="background-color:#01506e; color: white; padding: 20px; border-radius: 10px 10px 0 0;">
<h1 style="margin: 0; color: white;">Current Ratio & Short-Term Debt Analysis</h1>
</div> <div style="padding: 20px;">
<div style="background-color: #f0f5f9; border-left: 5px solid #0099d4; padding: 15px; margin-bottom: 20px; border-radius: 0 5px 5px 0;">
<h3 style="color: #01506e; margin-top: 0;">Current Position Analysis</h3>
<p>The company's current financial position includes:</p>
<ul>
<li><strong>Current Assets:</strong> Cash ($10,000) + AR ($5,000) = $15,000</li>
<li><strong>Current Liabilities:</strong> AP ($5,000) + Wages Payable ($5,000) = $10,000</li>
<li><strong>Current Ratio:</strong> $15,000 ÷ $10,000 = 1.5</li>
</ul>
</div> <h3 style="color: #207bb5; border-bottom: 2px solid #207bb5; padding-bottom: 8px;">Question Analysis</h3>
<p>The company needs to determine how much short-term debt it can take on while maintaining a current ratio of at least 1.25.</p> <div style="background-color: #f0f8f7; border-radius: 8px; padding: 15px; margin-bottom: 20px; border: 1px solid #68d3a7;">
<h3 style="color: #01506e; margin-top: 0;">Step-by-Step Solution</h3> <p>When the company takes on short-term debt to purchase inventory:</p>
<ul>
<li>Current assets increase by the amount of the loan (as inventory)</li>
<li>Current liabilities increase by the same amount (as short-term debt)</li>
</ul> <p>To maintain a current ratio of 1.25:</p>
<div style="background-color: #eef7fc; padding: 10px; border-radius: 5px; border-left: 3px solid #207bb5;">
<p><strong>Current Ratio = Current Assets ÷ Current Liabilities = 1.25</strong></p>
<p>(Original Current Assets + Loan Amount) ÷ (Original Current Liabilities + Loan Amount) = 1.25</p>
<p>($15,000 + x) ÷ ($10,000 + x) = 1.25</p>
</div> <p>Solving for x:</p>
<div style="background-color: #eef7fc; padding: 10px; margin-top: 10px; border-radius: 5px; border-left: 3px solid #207bb5;">
<p>$15,000 + x = 1.25($10,000 + x)</p>
<p>$15,000 + x = $12,500 + 1.25x</p>
<p>$15,000 - $12,500 = 1.25x - x</p>
<p>$2,500 = 0.25x</p>
<p>x = $10,000</p>
</div>
</div> <h3 style="color: #207bb5; border-bottom: 2px solid #207bb5; padding-bottom: 8px;">Journal Entry for the Transaction</h3> <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<thead>
<tr style="background-color:#207bb5; color: white;">
<th style="padding: 12px; text-align: left; border: 1px solid #0099d4;">Account</th>
<th style="padding: 12px; text-align: right; border: 1px solid #0099d4;">Debit</th>
<th style="padding: 12px; text-align: right; border: 1px solid #0099d4;">Credit</th>
</tr>
</thead>
<tbody>
<tr style="background-color: #f9f9f9;">
<td style="padding: 10px; border: 1px solid #ddd;">Inventory</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;">$10,000</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;"></td>
</tr>
<tr style="background-color: #f0f5f9;">
<td style="padding: 10px; border: 1px solid #ddd;">Short-term Debt</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;"></td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;">$10,000</td>
</tr>
</tbody>
</table> <h3 style="color: #207bb5; border-bottom: 2px solid #207bb5; padding-bottom: 8px;">Financial Position After Loan</h3> <div style="display: flex; gap: 20px; margin-bottom: 20px;">
<div style="flex: 1; background-color: #f0f5f9; padding: 15px; border-radius: 8px; border: 1px solid #207bb5;">
<h4 style="color: #01506e; margin-top: 0;">New Current Assets</h4>
<ul>
<li>Cash: $10,000</li>
<li>Accounts Receivable: $5,000</li>
<li>Inventory: $10,000</li>
<li><strong>Total: $25,000</strong></li>
</ul>
</div> <div style="flex: 1; background-color: #f0f5f9; padding: 15px; border-radius: 8px; border: 1px solid #207bb5;">
<h4 style="color: #01506e; margin-top: 0;">New Current Liabilities</h4>
<ul>
<li>Accounts Payable: $5,000</li>
<li>Wages Payable: $5,000</li>
<li>Short-term Debt: $10,000</li>
<li><strong>Total: $20,000</strong></li>
</ul>
</div>
</div> <div style="background-color: #f0f8f7; border-radius: 8px; padding: 15px; margin-bottom: 20px; border: 1px solid #68d3a7;">
<h4 style="color: #01506e; margin-top: 0;">New Current Ratio</h4>
<p>$25,000 ÷ $20,000 = 1.25</p>
</div> <h3 style="color: #207bb5; border-bottom: 2px solid #207bb5; padding-bottom: 8px;">Answer Assessment</h3> <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 20px;">
<div style="padding: 10px; background-color: #ffe6e6; border-radius: 5px; border-left: 3px solid #ff6b6b;">
<p>$20,000 - Incorrect</p>
</div>
<div style="padding: 10px; background-color: #ffe6e6; border-radius: 5px; border-left: 3px solid #ff6b6b;">
<p>$17,500 - Incorrect</p>
</div>
<div style="padding: 10px; background-color: #e6ffe6; border-radius: 5px; border-left: 3px solid #68d3a7;">
<p style="color: #2e7d32;"><strong>$10,000 - Correct</strong></p>
</div>
<div style="padding: 10px; background-color: #ffe6e6; border-radius: 5px; border-left: 3px solid #ff6b6b;">
<p>$12,000 - Incorrect</p>
</div>
</div> <div style="background-color:#68d3a7; color: white; padding: 15px; border-radius: 8px; margin-top: 20px;">
<h3 style="margin-top: 0; color: white;">Summary</h3>
<p>The maximum short-term debt the company can obtain while maintaining a current ratio of 1.25 is $10,000. After this transaction, the company will have $25,000 in current assets and $20,000 in current liabilities, resulting in the required current ratio of 1.25.</p>
</div>
</div>
</div>`,
    },
    {
      id: "5462",
      prompt: `XYZ Corp reported revenue of $400,000 in Year 1 and $500,000 in Year 2. Its net income was $50,000 in Year 1 and $75,000 in Year 2. What is the net profit margin for Year 2?`,
      choices: [
        `15%`,
        `20%`,
        `10%`,
        `25%`,
      ],
      correctIndex: 0,
      explanation: `<div style="font-family: 'Segoe UI', sans-serif; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
<div style="background-color: #01506e; color: white; padding: 15px; border-radius: 8px 8px 0 0; margin-bottom: 20px;">
<h2 style="margin: 0; color: white;">Financial Ratio Analysis: Net Profit Margin</h2>
</div> <div style="background-color: #f9f9f9; padding: 15px; border-left: 5px solid #68d3a7; border-radius: 5px; margin-bottom: 20px;">
<p><span style="color: #68d3a7; font-weight: bold;">✓ Correct Answer: 15%</span></p>
</div> <div style="margin-bottom: 20px;">
<h3 style="color: #207bb5; border-bottom: 2px solid #207bb5; padding-bottom: 5px;">Explanation</h3>
<p>Net profit margin measures the percentage of revenue that translates into net income. It shows how effectively a company converts its sales into actual profit after all expenses.</p>
</div> <div style="margin-bottom: 20px;">
<h3 style="color: #207bb5; border-bottom: 2px solid #207bb5; padding-bottom: 5px;">Calculation</h3>
<div style="background-color:#e6f7ff; padding: 15px; border-radius: 8px; border-left: 4px solid #0099d4;">
<p><strong>Net Profit Margin</strong> = Net Income ÷ Revenue × 100%</p>
<p>For Year 2: $75,000 ÷ $500,000 × 100% = 15%</p>
</div>
</div> <div style="margin-bottom: 20px;">
<h3 style="color: #207bb5; border-bottom: 2px solid #207bb5; padding-bottom: 5px;">Comparative Analysis</h3>
<table style="width: 100%; border-collapse: collapse; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<thead>
<tr style="background-color: #4B556A; color: white;">
<th style="padding: 12px; text-align: left;">Metric</th>
<th style="padding: 12px; text-align: right;">Year 1</th>
<th style="padding: 12px; text-align: right;">Year 2</th>
<th style="padding: 12px; text-align: right;">Change</th>
</tr>
</thead>
<tbody>
<tr style="background-color: #f2f2f2;">
<td style="padding: 10px; border-bottom: 1px solid #ddd;">Revenue</td>
<td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;">$400,000</td>
<td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;">$500,000</td>
<td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;">+$100,000 (+25%)</td>
</tr>
<tr>
<td style="padding: 10px; border-bottom: 1px solid #ddd;">Net Income</td>
<td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;">$50,000</td>
<td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;">$75,000</td>
<td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;">+$25,000 (+50%)</td>
</tr>
<tr style="background-color: #e6f7ff;">
<td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Net Profit Margin</td>
<td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;">12.5%</td>
<td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right; font-weight: bold;">15%</td>
<td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right; color: #68d3a7;">+2.5%</td>
</tr>
</tbody>
</table>
</div> <div style="margin-bottom: 20px;">
<h3 style="color: #207bb5; border-bottom: 2px solid #207bb5; padding-bottom: 5px;">Analysis</h3>
<p>XYZ Corp's net profit margin increased from 12.5% in Year 1 to 15% in Year 2, indicating improved profitability. This 2.5 percentage point increase demonstrates that the company is becoming more efficient at converting sales into actual profit.</p>
<p>While revenue grew by 25%, net income increased by 50%, showing that the company is managing its costs effectively as it grows.</p>
</div> <div style="background-color: #f5f7fa; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 5px solid #01506e;">
<h3 style="color: #01506e; margin-top: 0;">Key Insights</h3>
<ul style="padding-left: 20px;">
<li>Net profit margin is a fundamental profitability ratio that measures how much of each dollar of revenue is kept as net income.</li>
<li>Higher net profit margins indicate a more profitable company with better cost control.</li>
<li>The 15% margin means that for every dollar of sales, XYZ Corp retains $0.15 as profit after all expenses.</li>
<li>This improvement suggests the company may be experiencing economies of scale or implementing successful cost-cutting measures.</li>
</ul>
</div> <div style="background-color:#e6f3ff; padding: 15px; border-radius: 8px; border: 1px solid #d0e3ff;">
<h3 style="color: #207bb5; margin-top: 0;">Summary</h3>
<p>XYZ Corp's net profit margin for Year 2 is <strong style="color: #68d3a7;">15%</strong>, calculated by dividing the net income of $75,000 by the revenue of $500,000. This represents an improvement from Year 1's margin of 12.5%, indicating enhanced operational efficiency and cost management.</p>
</div>
</div>`,
    },
    {
      id: "5463",
      prompt: `ABC Ltd. has total assets of $500,000 and total liabilities of $200,000. If the company issues additional shares worth $100,000, what will be its debt-to-equity ratio post the share issue?`,
      choices: [
        `0.28`,
        `0.33`,
        `0.40`,
        `0.50`,
      ],
      correctIndex: 3,
      explanation: `<div style="font-family: 'Segoe UI', sans-serif; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
<div style="background-color:#01506e; color: white; padding: 15px; border-radius: 10px 10px 0 0; margin-bottom: 20px;">
<h1 style="margin: 0; color: white;">Debt-to-Equity Ratio Calculation</h1>
</div> <div style="background-color: #f8f9fa; padding: 15px; border-radius: 10px; margin-bottom: 20px; border-left: 5px solid #0099d4;">
<h3 style="color: #207bb5;">Multiple Choice Answer:</h3>
<p>The correct answer is: <span style="color: #68d3a7; font-weight: bold;">0.50</span></p>
</div> <div style="padding: 15px; border-radius: 10px; margin-bottom: 20px; background-color: #f8f9fa; border-left: 5px solid #01506e;">
<h3 style="color: #207bb5;">Explanation:</h3>
<p>To calculate the debt-to-equity ratio after the share issuance, we need to determine the new equity value and then divide the total liabilities by this value.</p> <table style="width: 100%; border-collapse: collapse; margin: 15px 0; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<tr style="background-color: #4B556A; color: white;">
<th style="padding: 10px; text-align: left;">Component</th>
<th style="padding: 10px; text-align: right;">Amount</th>
</tr>
<tr style="background-color: #f2f2f2;">
<td style="padding: 10px; border-bottom: 1px solid #ddd;">Total Assets</td>
<td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;">$500,000</td>
</tr>
<tr>
<td style="padding: 10px; border-bottom: 1px solid #ddd;">Total Liabilities</td>
<td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;">$200,000</td>
</tr>
<tr style="background-color: #f2f2f2;">
<td style="padding: 10px; border-bottom: 1px solid #ddd;">Original Equity (Assets - Liabilities)</td>
<td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;">$300,000</td>
</tr>
<tr>
<td style="padding: 10px; border-bottom: 1px solid #ddd;">Additional Share Issue</td>
<td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;">$100,000</td>
</tr>
<tr style="background-color: #f2f2f2; font-weight: bold;">
<td style="padding: 10px;">New Total Equity</td>
<td style="padding: 10px; text-align: right;">$400,000</td>
</tr>
</table> <p>The journal entry for the share issuance would be:</p> <table style="width: 100%; border-collapse: collapse; margin: 15px 0; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<tr style="background-color: #207bb5; color: white;">
<th style="padding: 10px; text-align: left;">Account</th>
<th style="padding: 10px; text-align: right;">Debit</th>
<th style="padding: 10px; text-align: right;">Credit</th>
</tr>
<tr>
<td style="padding: 10px; border-bottom: 1px solid #ddd;">Cash</td>
<td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;">$100,000</td>
<td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;"></td>
</tr>
<tr>
<td style="padding: 10px; border-bottom: 1px solid #ddd;">Share Capital</td>
<td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;"></td>
<td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;">$100,000</td>
</tr>
</table> <p>Now we can calculate the debt-to-equity ratio:</p> <div style="background-color: #e9f7fe; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 5px solid #68d3a7;">
<p style="margin: 0; font-weight: bold;">Debt-to-Equity Ratio = Total Liabilities ÷ Total Equity</p>
<p style="margin: 10px 0 0 0;">= $200,000 ÷ $400,000 = 0.50</p>
</div>
</div> <div style="background-color: #f8f9fa; padding: 15px; border-radius: 10px; margin-bottom: 20px; border-left: 5px solid #68d3a7;">
<h3 style="color: #207bb5;">Analysis of Options:</h3>
<ul style="list-style-type: none; padding-left: 0;">
<li style="padding: 8px 0; border-bottom: 1px solid #eee;"><span style="color: red; font-weight: bold;">0.28</span> - Incorrect. This value doesn't correspond to the correct calculation.</li>
<li style="padding: 8px 0; border-bottom: 1px solid #eee;"><span style="color: red; font-weight: bold;">0.33</span> - Incorrect. This is approximately the original debt-to-equity ratio ($200,000/$600,000).</li>
<li style="padding: 8px 0; border-bottom: 1px solid #eee;"><span style="color: red; font-weight: bold;">0.40</span> - Incorrect. This value doesn't match the correct calculation.</li>
<li style="padding: 8px 0;"><span style="color: #68d3a7; font-weight: bold;">0.50</span> - Correct. After issuing new shares, the debt-to-equity ratio is $200,000/$400,000 = 0.50.</li>
</ul>
</div> <div style="background-color:#207bb5; color: white; padding: 15px; border-radius: 10px; margin-top: 20px;">
<h3 style="margin: 0; color: white;">Summary</h3>
<p>When new shares are issued, the equity of a company increases, which results in a decrease in the debt-to-equity ratio if the debt remains unchanged. This improves the company's financial leverage position, making it more attractive to potential lenders and investors by demonstrating a lower financial risk profile.</p>
</div>
</div>`,
    },
    {
      id: "5464",
      prompt: `Company PQR had an EBIT of $200,000, Interest Expense of $20,000, and a Tax Rate of 30%. What was the company's Net Income?`,
      choices: [
        `$126,000`,
        `$140,000`,
        `$160,000`,
        `$180,000`,
      ],
      correctIndex: 0,
      explanation: `<div style="font-family: 'Segoe UI', sans-serif; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
<div style="background-color:#01506e; color: white; padding: 15px; border-radius: 8px 8px 0 0; margin-bottom: 20px;">
<h2 style="margin: 0; color: white;">Net Income Calculation</h2>
</div> <div style="background-color: #f9f9f9; padding: 15px; border-left: 5px solid #0099d4; border-radius: 5px; margin-bottom: 20px;">
<p style="font-size: 16px; line-height: 1.5;">The question asks for the Net Income of Company PQR based on EBIT of $200,000, Interest Expense of $20,000, and a Tax Rate of 30%.</p>
<p style="font-weight: bold; color: #68d3a7;">Correct Answer: $126,000</p>
</div> <div style="margin-bottom: 20px;">
<h3 style="background-color: #207bb5; color: white; padding: 10px; border-radius: 5px;">Explanation</h3>
<p>Net Income is calculated by subtracting Interest Expense and Taxes from EBIT (Earnings Before Interest and Taxes).</p> <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 15px 0;">
<h4 style="color: #4B556A; margin-top: 0;">Step-by-Step Calculation:</h4>
<ol style="color: #4B556A;">
<li>First, calculate EBT (Earnings Before Taxes):
<br>EBT = EBIT - Interest Expense
<br>EBT = $200,000 - $20,000 = <strong>$180,000</strong>
</li>
<li>Then, calculate Tax Expense:
<br>Tax Expense = EBT × Tax Rate
<br>Tax Expense = $180,000 × 30% = <strong>$54,000</strong>
</li>
<li>Finally, calculate Net Income:
<br>Net Income = EBT - Tax Expense
<br>Net Income = $180,000 - $54,000 = <strong>$126,000</strong>
</li>
</ol>
</div>
</div> <div style="margin-bottom: 20px;">
<h3 style="background-color: #207bb5; color: white; padding: 10px; border-radius: 5px;">Journal Entries</h3>
<p>The following journal entries would record the interest expense and tax expense for the period:</p> <table style="width: 100%; border-collapse: collapse; margin: 15px 0; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<thead>
<tr style="background-color: #01506e; color: white;">
<th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Account</th>
<th style="padding: 10px; text-align: right; border: 1px solid #ddd;">Debit</th>
<th style="padding: 10px; text-align: right; border: 1px solid #ddd;">Credit</th>
</tr>
</thead>
<tbody>
<tr style="background-color: #f9f9f9;">
<td style="padding: 10px; text-align: left; border: 1px solid #ddd;">Interest Expense</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;">$20,000</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;"></td>
</tr>
<tr>
<td style="padding: 10px; text-align: left; border: 1px solid #ddd;">&nbsp;&nbsp;&nbsp;&nbsp;Cash/Interest Payable</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;"></td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;">$20,000</td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="padding: 10px; text-align: left; border: 1px solid #ddd;">Income Tax Expense</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;">$54,000</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;"></td>
</tr>
<tr>
<td style="padding: 10px; text-align: left; border: 1px solid #ddd;">&nbsp;&nbsp;&nbsp;&nbsp;Income Tax Payable</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;"></td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;">$54,000</td>
</tr>
</tbody>
</table>
</div> <div style="margin-bottom: 20px;">
<h3 style="background-color: #207bb5; color: white; padding: 10px; border-radius: 5px;">Answer Analysis</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<thead>
<tr style="background-color: #01506e; color: white;">
<th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Option</th>
<th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Explanation</th>
</tr>
</thead>
<tbody>
<tr style="background-color: #e8f7e8; border-left: 5px solid #68d3a7;">
<td style="padding: 10px; text-align: left; border: 1px solid #ddd; color: #007000; font-weight: bold;">$126,000</td>
<td style="padding: 10px; text-align: left; border: 1px solid #ddd;">Correct. EBIT ($200,000) - Interest ($20,000) = EBT ($180,000) - Taxes ($54,000) = $126,000</td>
</tr>
<tr style="background-color: #ffeded; border-left: 5px solid #ff7f7f;">
<td style="padding: 10px; text-align: left; border: 1px solid #ddd; color: #c00000; font-weight: bold;">$140,000</td>
<td style="padding: 10px; text-align: left; border: 1px solid #ddd;">Incorrect. This may result from calculating tax as 30% of EBIT rather than EBT.</td>
</tr>
<tr style="background-color: #ffeded; border-left: 5px solid #ff7f7f;">
<td style="padding: 10px; text-align: left; border: 1px solid #ddd; color: #c00000; font-weight: bold;">$160,000</td>
<td style="padding: 10px; text-align: left; border: 1px solid #ddd;">Incorrect. This may result from deducting only interest but not taxes.</td>
</tr>
<tr style="background-color: #ffeded; border-left: 5px solid #ff7f7f;">
<td style="padding: 10px; text-align: left; border: 1px solid #ddd; color: #c00000; font-weight: bold;">$180,000</td>
<td style="padding: 10px; text-align: left; border: 1px solid #ddd;">Incorrect. This is the EBT (EBIT - Interest) but does not account for tax expense.</td>
</tr>
</tbody>
</table>
</div> <div style="background-color:#68d3a7; padding: 15px; border-radius: 8px; color: white; margin-top: 20px;">
<h3 style="margin-top: 0; color: white;">Summary</h3>
<p>To calculate Net Income from EBIT:</p>
<ol>
<li>Subtract Interest Expense from EBIT to get EBT</li>
<li>Calculate Tax Expense (EBT × Tax Rate)</li>
<li>Subtract Tax Expense from EBT to get Net Income</li>
</ol>
<p>In this case: $200,000 - $20,000 - $54,000 = <strong>$126,000</strong></p>
</div>
</div>`,
    },
    {
      id: "5460",
      prompt: `A company has a debt-to-equity ratio of 0.60. Assets are $50,000. The company is planning to raise $10,000 of cash through issuing common shares. What will be the company's debt to equity ratio following this stock issuance?`,
      choices: [
        `92.0%`,
        `55.0%`,
        `52.0%`,
        `45.5%`,
      ],
      correctIndex: 3,
      explanation: `<div style="font-family: 'Segoe UI', sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
<div style="background-color: #01506e; color: white; padding: 12px 20px; border-radius: 8px 8px 0 0; margin-bottom: 20px;">
<h2 style="margin: 0; color: white;">Debt-to-Equity Ratio Analysis</h2>
</div> <div style="background-color: #f0f8ff; padding: 15px; border-radius: 8px; border-left: 5px solid #207bb5; margin-bottom: 20px;">
<h3 style="color: #207bb5; margin-top: 0;">Understanding the Problem</h3>
<p>We need to calculate the new debt-to-equity ratio after a $10,000 stock issuance when the company has:</p>
<ul style="list-style-type: none; padding-left: 10px;">
<li>• Initial debt-to-equity ratio: 0.60</li>
<li>• Total assets: $50,000</li>
<li>• New common shares issued: $10,000</li>
</ul>
</div> <div style="background-color: #f0f8ff; padding: 15px; border-radius: 8px; border-left: 5px solid #0099d4; margin-bottom: 20px;">
<h3 style="color: #0099d4; margin-top: 0;">Step-by-Step Solution</h3> <h4 style="color: #4B556A;">Step 1: Determine Initial Equity and Debt</h4>
<p>Using the accounting equation and the given debt-to-equity ratio:</p>
<ul>
<li>Assets = Liabilities + Equity = $50,000</li>
<li>Debt-to-Equity Ratio = Liabilities / Equity = 0.60</li>
<li>If we call Equity "X", then Liabilities = 0.60X</li>
<li>So: $50,000 = 0.60X + X = 1.60X</li>
<li>X = $50,000 / 1.60 = $31,250 (Equity)</li>
<li>Liabilities = 0.60 × $31,250 = $18,750</li>
</ul> <h4 style="color: #4B556A;">Step 2: Calculate New Equity After Stock Issuance</h4>
<p>The company issues $10,000 in common shares:</p>
<ul>
<li>New Equity = $31,250 + $10,000 = $41,250</li>
</ul> <h4 style="color: #4B556A;">Step 3: Record Journal Entry for Stock Issuance</h4>
<table style="width: 90%; margin: 15px auto; border-collapse: collapse; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
<tr style="background-color: #207bb5; color: white;">
<th style="padding: 10px; text-align: left; border: 1px solid #ccc;">Account</th>
<th style="padding: 10px; text-align: right; border: 1px solid #ccc;">Debit</th>
<th style="padding: 10px; text-align: right; border: 1px solid #ccc;">Credit</th>
</tr>
<tr style="background-color: white;">
<td style="padding: 8px; border: 1px solid #ccc;">Cash</td>
<td style="padding: 8px; text-align: right; border: 1px solid #ccc;">$10,000</td>
<td style="padding: 8px; text-align: right; border: 1px solid #ccc;"></td>
</tr>
<tr style="background-color: #f5f5f5;">
<td style="padding: 8px; border: 1px solid #ccc;">Common Stock</td>
<td style="padding: 8px; text-align: right; border: 1px solid #ccc;"></td>
<td style="padding: 8px; text-align: right; border: 1px solid #ccc;">$10,000</td>
</tr>
</table> <h4 style="color: #4B556A;">Step 4: Calculate New Debt-to-Equity Ratio</h4>
<p>New Debt-to-Equity Ratio = Liabilities / New Equity</p>
<p>New Debt-to-Equity Ratio = $18,750 / $41,250 = 0.455 or 45.5%</p>
</div> <div style="background-color: #f0f8ff; padding: 15px; border-radius: 8px; border-left: 5px solid #68d3a7; margin-bottom: 20px;">
<h3 style="color: #68d3a7; margin-top: 0;">Answer Analysis</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">92.0%</td>
<td style="padding: 10px; border: 1px solid #ddd; color: red;">Incorrect</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">55.0%</td>
<td style="padding: 10px; border: 1px solid #ddd; color: red;">Incorrect</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">52.0%</td>
<td style="padding: 10px; border: 1px solid #ddd; color: red;">Incorrect</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">45.5%</td>
<td style="padding: 10px; border: 1px solid #ddd; color: green; font-weight: bold;">Correct</td>
</tr>
</table>
</div> <div style="background-color:#68d3a7; padding: 15px; border-radius: 8px; color: white; margin-top: 20px;">
<h3 style="margin-top: 0; color: white;">Summary</h3>
<p>When a company issues additional equity:</p>
<ul>
<li>The debt-to-equity ratio decreases (as long as no additional debt is taken)</li>
<li>The original ratio was 0.60 or 60%</li>
<li>After issuing $10,000 in common stock, the ratio decreased to 45.5%</li>
<li>This decrease indicates a lower financial leverage and potentially less financial risk</li>
</ul>
</div>
</div>`,
    },
    {
      id: "5470",
      prompt: `You notice that a firm's current ratio has increased significantly over the past year. However, after further investigation, you discover that this was mainly due to a large increase in inventory. 

 

How would you interpret this change?`,
      choices: [
        `The firm's liquidity position has improved significantly.`,
        `The firm may have trouble converting its assets into cash.`,
        `The firm has likely expanded its operations.`,
        `The firm has become more profitable.`,
      ],
      correctIndex: 1,
      explanation: `<div style="font-family: 'Segoe UI', sans-serif; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
<div style="background-color:#01506e; color: white; padding: 15px; border-radius: 10px 10px 0 0; margin-bottom: 20px;">
<h2 style="margin: 0; color: white;">Analysis of Current Ratio Changes</h2>
</div> <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 5px solid #0099d4;">
<h3 style="color: #207bb5; margin-top: 0;">Multiple Choice Analysis</h3>
<ul style="list-style-type: none; padding-left: 0;">
<li style="padding: 8px; margin-bottom: 5px; background-color: #ffeeee; border-radius: 5px; border-left: 4px solid #ff6666;">
<span style="color: #ff0000;">✗</span> The firm's liquidity position has improved significantly.
</li>
<li style="padding: 8px; margin-bottom: 5px; background-color: #eeffee; border-radius: 5px; border-left: 4px solid #68d3a7;">
<span style="color: #68d3a7;">✓</span> The firm may have trouble converting its assets into cash.
</li>
<li style="padding: 8px; margin-bottom: 5px; background-color: #ffeeee; border-radius: 5px; border-left: 4px solid #ff6666;">
<span style="color: #ff0000;">✗</span> The firm has likely expanded its operations.
</li>
<li style="padding: 8px; margin-bottom: 5px; background-color: #ffeeee; border-radius: 5px; border-left: 4px solid #ff6666;">
<span style="color: #ff0000;">✗</span> The firm has become more profitable.
</li>
</ul>
</div> <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 5px solid #68d3a7;">
<h3 style="color: #207bb5; margin-top: 0;">Explanation of Current Ratio and Inventory</h3>
<p>While an increase in the current ratio (current assets/current liabilities) might initially suggest improved liquidity, we need to examine the <strong>composition</strong> of current assets. In this case, the increase is primarily due to inventory growth, which is generally less liquid than cash or marketable securities.</p> <div style="background-color:#e6f7ff; padding: 12px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #0099d4;">
<h4 style="color: #01506e; margin-top: 0;">Key Insight:</h4>
<p>Not all current assets are equally liquid. The quality of liquidity matters as much as the quantity.</p>
</div>
</div> <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 5px solid #207bb5;">
<h3 style="color: #207bb5; margin-top: 0;">Potential Implications</h3>
<ul>
<li>Increased inventory could indicate <strong>slow-moving stock</strong> or reduced demand</li>
<li>The firm might be <strong>overstocking</strong> in anticipation of supply chain issues</li>
<li>There could be <strong>obsolescence risk</strong> with the growing inventory</li>
<li>Cash may be tied up in inventory, reducing actual available liquidity</li>
</ul> <table style="width: 100%; border-collapse: collapse; margin-top: 15px; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<thead style="background-color: #4B556A; color: white;">
<tr>
<th style="padding: 10px; text-align: left;">Liquidity Measure</th>
<th style="padding: 10px; text-align: left;">Includes Inventory?</th>
<th style="padding: 10px; text-align: left;">Consideration</th>
</tr>
</thead>
<tbody>
<tr style="background-color: #f9f9f9;">
<td style="padding: 10px; border-bottom: 1px solid #ddd;">Current Ratio</td>
<td style="padding: 10px; border-bottom: 1px solid #ddd;">Yes</td>
<td style="padding: 10px; border-bottom: 1px solid #ddd;">Less stringent liquidity test</td>
</tr>
<tr>
<td style="padding: 10px; border-bottom: 1px solid #ddd;">Quick Ratio</td>
<td style="padding: 10px; border-bottom: 1px solid #ddd;">No</td>
<td style="padding: 10px; border-bottom: 1px solid #ddd;">More stringent liquidity test</td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="padding: 10px; border-bottom: 1px solid #ddd;">Cash Ratio</td>
<td style="padding: 10px; border-bottom: 1px solid #ddd;">No</td>
<td style="padding: 10px; border-bottom: 1px solid #ddd;">Most stringent liquidity test</td>
</tr>
</tbody>
</table>
</div> <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 5px solid #01506e;">
<h3 style="color: #207bb5; margin-top: 0;">Financial Impact Example</h3> <p>When inventory increases significantly, it affects the financial records as follows:</p> <table style="width: 100%; border-collapse: collapse; margin: 15px 0; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<thead style="background-color: #207bb5; color: white;">
<tr>
<th style="padding: 10px; text-align: left; width: 60%;">Account</th>
<th style="padding: 10px; text-align: right; width: 20%;">Debit</th>
<th style="padding: 10px; text-align: right; width: 20%;">Credit</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 10px; border-bottom: 1px solid #ddd;">Inventory</td>
<td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;">$1,000,000</td>
<td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;"></td>
</tr>
<tr>
<td style="padding: 10px; border-bottom: 1px solid #ddd;">Accounts Payable</td>
<td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;"></td>
<td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;">$1,000,000</td>
</tr>
</tbody>
</table> <p>This increases both current assets and current liabilities, but the effect on current ratio depends on the relative sizes before the change.</p>
</div> <div style="background-color:#68d3a7; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
<h3 style="color: white; margin-top: 0;">Summary</h3>
<p style="color: #4B556A;">A rising current ratio driven primarily by inventory growth is a potential red flag. While the current ratio formula shows improvement, the <strong>quality of liquidity</strong> may be deteriorating. For a more accurate assessment of true liquidity, analysts should examine the quick ratio or cash ratio, which exclude inventory from their calculations.</p> <p style="color: #4B556A;">Further investigation into inventory turnover ratios, days inventory outstanding, and the reasons behind inventory accumulation would be essential for a complete analysis of the firm's operational efficiency and financial health.</p>
</div>
</div>`,
    },
    {
      id: "8437",
      prompt: `Pioneer Trading’s current assets total $15,000, and current liabilities total $7,000. It is considering a short-term loan to have extra cash on hand. Pioneer wants its current ratio to remain at or above 1.25. What's the largest loan amount that Pioneer can borrow without dropping below a 1.25 current ratio?`,
      choices: [
        `$20,000`,
        `$30,000`,
        `$25,000`,
        `$35,000`,
      ],
      correctIndex: 2,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0, 0, 0, 0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-top:0; padding:20px">
<div style="background-color:#01506e; border-radius:8px 8px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">Current Ratio Analysis: Maximum Loan Determination</h2>
</div> <div style="background-color:#f9f9f9; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Question Analysis</h3> <p>We need to find the maximum loan amount Pioneer Trading can borrow while maintaining a current ratio of at least 1.25.</p> <div style="display:flex; justify-content:space-between; margin-bottom:15px">
<div style="background-color:#f2f2f2; border-left:4px solid #68d3a7; border-radius:8px; padding:10px; width:48%">
<h4>Initial Situation</h4> <ul style="list-style-type:none"> <li>Current Assets: <strong>$15,000</strong></li> <li>Current Liabilities: <strong>$7,000</strong></li> <li>Current Ratio: <strong>2.14</strong> ($15,000 &divide; $7,000)</li>
</ul>
</div> <div style="background-color:#f2f2f2; border-left:4px solid #207bb5; border-radius:8px; padding:10px; width:48%">
<h4>Minimum Requirement</h4> <ul style="list-style-type:none"> <li>Minimum Current Ratio: <strong>1.25</strong></li>
</ul>
</div>
</div>
</div> <div style="background-color:#f5f5f5; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Mathematical Solution</h3> <p>When Pioneer borrows money, both current assets and current liabilities increase by the loan amount:</p> <div style="background-color:#ffffff; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.05); margin-bottom:15px; padding:15px">
<p>Let&#39;s call the loan amount <strong>L</strong>.</p> <p>New Current Assets = $15,000 + L</p> <p>New Current Liabilities = $7,000 + L</p> <p>We need the new current ratio to be at least 1.25:</p> <p>(15,000 + L) &divide; (7,000 + L) &ge; 1.25</p> <p>15,000 + L &ge; 1.25 &times; (7,000 + L)</p> <p>15,000 + L &ge; 8,750 + 1.25L</p> <p>15,000 - 8,750 &ge; 1.25L - L</p> <p>6,250 &ge; 0.25L</p> <p>25,000 &ge; L</p>
</div> <p>Therefore, the maximum loan amount is <strong>$25,000</strong>.</p>
</div> <div style="background-color:#f5f5f5; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Verification</h3> <table cellspacing="0" style="background-color:white; border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.05); margin-bottom:15px; overflow:hidden; width:100%"> <thead> <tr> <th style="text-align:left">Item</th> <th style="text-align:right">Initial</th> <th style="text-align:right">After Loan</th> </tr> </thead> <tbody> <tr> <td style="border-bottom:1px solid #eeeeee">Current Assets</td> <td style="border-bottom:1px solid #eeeeee; text-align:right">$15,000</td> <td style="border-bottom:1px solid #eeeeee; text-align:right">$40,000</td> </tr> <tr> <td style="border-bottom:1px solid #eeeeee">Current Liabilities</td> <td style="border-bottom:1px solid #eeeeee; text-align:right">$7,000</td> <td style="border-bottom:1px solid #eeeeee; text-align:right">$32,000</td> </tr> <tr> <td><strong>Current Ratio</strong></td> <td style="text-align:right"><strong>2.14</strong></td> <td style="text-align:right"><strong>1.25</strong></td> </tr> </tbody>
</table> <p>With a $25,000 loan:</p> <ul> <li>New Current Assets: $15,000 + $25,000 = $40,000</li> <li>New Current Liabilities: $7,000 + $25,000 = $32,000</li> <li>New Current Ratio: $40,000 &divide; $32,000 = 1.25</li>
</ul>
</div> <div style="background-color:#f5f5f5; border-left:5px solid #207bb5; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Journal Entry for the Loan</h3> <table cellspacing="0" style="background-color:white; border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.05); overflow:hidden; width:100%"> <thead> <tr> <th style="text-align:left">Account</th> <th style="text-align:right">Debit</th> <th style="text-align:right">Credit</th> </tr> </thead> <tbody> <tr> <td style="border-bottom:1px solid #eeeeee">Cash</td> <td style="border-bottom:1px solid #eeeeee; text-align:right">$25,000</td> <td style="border-bottom:1px solid #eeeeee; text-align:right">&nbsp;</td> </tr> <tr> <td>Short-term Loan Payable</td> <td style="text-align:right">&nbsp;</td> <td style="text-align:right">$25,000</td> </tr> </tbody>
</table> <p>(To record the maximum short-term loan that maintains the current ratio at 1.25)</p>
</div> <div style="background-color:#f9f9f9; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Answer Options</h3> <ul style="list-style-type:none"> <li><span style="color:red">$20,000</span> - Incorrect</li> <li><span style="color:red">$30,000</span> - Incorrect</li> <li><strong>$25,000</strong> - Correct</li> <li><span style="color:red">$35,000</span> - Incorrect</li>
</ul>
</div> <div style="background-color:#e9f7f2; border-left:5px solid #68d3a7; border-radius:8px; padding:15px">
<h3>Summary</h3> <p>The largest loan amount Pioneer Trading can borrow without dropping below a 1.25 current ratio is <strong>$25,000</strong>. This would increase current assets to $40,000 and current liabilities to $32,000, resulting in a current ratio of exactly 1.25.</p>
</div>
</div>`,
    },
    {
      id: "8439",
      prompt: `Solaris Energy Solutions, Inc. is planning to issue bonds to raise $40,000 in cash. The company intends to use the entire cash proceeds to pay down its accounts payable. Prior to this transaction, the company's financials are as follows:

	Current Assets: $150,000

	Current Liabilities: $100,000

What is the company’s working capital and current ratio after these transactions?`,
      choices: [
        `Working Capital: $90,000; Current Ratio: 2.5`,
        `Working Capital: $50,000; Current Ratio: 1.5`,
        `Working Capital: $70,000; Current Ratio: 2.0`,
        `Working Capital: $110,000; Current Ratio: 3.0`,
      ],
      correctIndex: 0,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; padding:20px">
<div style="background-color:#01506e; border-radius:8px 8px 0 0; color:white; margin-bottom:20px; padding:15px">
<h2 style="margin-left:0; margin-right:0">Analyzing Working Capital and Current Ratio After Bond Issuance</h2>
</div> <div style="background-color:#f9f9f9; border-left:5px solid #0099d4; border-radius:5px; margin-bottom:20px; padding:15px">
<h3>Original Financial Position</h3> <ul style="list-style-type:none"> <li><strong>Current Assets:</strong> $150,000</li> <li><strong>Current Liabilities:</strong> $100,000</li> <li><strong>Initial Working Capital:</strong> $150,000 - $100,000 = $50,000</li> <li><strong>Initial Current Ratio:</strong> $150,000 &divide; $100,000 = 1.50</li>
</ul>
</div> <div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:5px; margin-bottom:20px; padding:15px">
<h3>Transaction Analysis</h3> <p>The company plans to issue bonds for $40,000 and use the proceeds to pay down accounts payable. Let&#39;s analyze how this affects the working capital and current ratio:</p> <h4>Journal Entries:</h4> <table cellspacing="0" style="border-collapse:collapse; border-radius:5px; margin-bottom:15px; overflow:hidden; width:100%"> <tbody> <tr> <th style="text-align:left">Account</th> <th style="text-align:right">Debit</th> <th style="text-align:right">Credit</th> </tr> <tr> <td style="border-bottom:1px solid #dddddd">Cash</td> <td style="border-bottom:1px solid #dddddd; text-align:right">$40,000</td> <td style="border-bottom:1px solid #dddddd; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-bottom:1px solid #dddddd">Bonds Payable</td> <td style="border-bottom:1px solid #dddddd; text-align:right">&nbsp;</td> <td style="border-bottom:1px solid #dddddd; text-align:right">$40,000</td> </tr> <tr> <td style="border-bottom:1px solid #dddddd">Accounts Payable</td> <td style="border-bottom:1px solid #dddddd; text-align:right">$40,000</td> <td style="border-bottom:1px solid #dddddd; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-bottom:1px solid #dddddd">Cash</td> <td style="border-bottom:1px solid #dddddd; text-align:right">&nbsp;</td> <td style="border-bottom:1px solid #dddddd; text-align:right">$40,000</td> </tr> </tbody>
</table> <p><strong>Key Effects:</strong></p> <ul> <li>Cash increases by $40,000 (from bond issuance) and then decreases by $40,000 (payment of A/P), resulting in no net change to current assets</li> <li>Accounts Payable (current liability) decreases by $40,000</li> <li>Bonds Payable (long-term liability) increases by $40,000, but this doesn&#39;t affect current liabilities</li>
</ul>
</div> <div style="background-color:#f9f9f9; border-left:5px solid #0099d4; border-radius:5px; margin-bottom:20px; padding:15px">
<h3>Financial Position After Transaction</h3> <ul style="list-style-type:none"> <li><strong>New Current Assets:</strong> $150,000 (unchanged)</li> <li><strong>New Current Liabilities:</strong> $100,000 - $40,000 = $60,000</li> <li><strong>New Working Capital:</strong> $150,000 - $60,000 = $90,000</li> <li><strong>New Current Ratio:</strong> $150,000 &divide; $60,000 = 2.50</li>
</ul>
</div> <div style="background-color:#f9f9f9; border-radius:5px; margin-bottom:20px; padding:20px">
<h3>Answer Analysis</h3> <div style="display:flex; flex-wrap:wrap; gap:10px; margin-top:15px">
<div style="background-color:#e8f7f1; border-radius:5px; border:2px solid #68d3a7; flex:1; min-width:200px; padding:10px">
<p>Working Capital: $90,000; Current Ratio: 2.5 ✓</p> <p>This answer is correct. The working capital increases to $90,000 and the current ratio improves to 2.5.</p>
</div> <div style="background-color:#ffeeee; border-radius:5px; border:2px solid #ff6b6b; flex:1; min-width:200px; padding:10px">
<p>Working Capital: $50,000; Current Ratio: 1.5 ✗</p> <p>This represents the original position before the transaction.</p>
</div> <div style="background-color:#ffeeee; border-radius:5px; border:2px solid #ff6b6b; flex:1; min-width:200px; padding:10px">
<p>Working Capital: $70,000; Current Ratio: 2.0 ✗</p> <p>These values are incorrect calculations.</p>
</div> <div style="background-color:#ffeeee; border-radius:5px; border:2px solid #ff6b6b; flex:1; min-width:200px; padding:10px">
<p>Working Capital: $110,000; Current Ratio: 3.0 ✗</p> <p>These values overestimate the impact of the transaction.</p>
</div>
</div>
</div> <div style="background-color:#68d3a7; border-radius:0 0 8px 8px; color:white; padding:15px">
<h3 style="margin-left:0; margin-right:0">Summary</h3> <p>When Solaris Energy Solutions issues $40,000 in bonds and uses the proceeds to reduce accounts payable, the company&#39;s financial position improves. The working capital increases from $50,000 to $90,000, and the current ratio improves from 1.5 to 2.5. This occurs because the transaction shifts debt from short-term (accounts payable) to long-term (bonds payable), reducing current liabilities while keeping current assets constant.</p>
</div>
</div>`,
    },
    {
      id: "5459",
      prompt: `A company is going to issue bonds to raise cash, and the proceeds will be used to pay down its accounts payable. How will this transaction affect the current ratio and working capital turnover?`,
      choices: [
        `Increase; Increase`,
        `Increase, Decrease`,
        `Decrease, Increase`,
        `Decrease, Decrease`,
      ],
      correctIndex: 1,
      explanation: `<div style="font-family: 'Segoe UI', sans-serif; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
<div style="background-color:#01506e; color: white; padding: 15px; border-radius: 10px 10px 0 0; margin-bottom: 20px;">
<h1 style="margin: 0; color: white;">Analyzing Bond Issuance Impact on Financial Ratios</h1>
</div> <div style="background-color: #f9f9f9; padding: 15px; border-radius: 10px; margin-bottom: 20px; border-left: 5px solid #207bb5;">
<h2 style="color: #207bb5; margin-top: 0;">Journal Entries Analysis</h2> <div style="overflow-x: auto; margin-bottom: 15px;">
<table style="width: 100%; border-collapse: collapse; border-radius: 8px; overflow: hidden;">
<thead>
<tr style="background-color: #4B556A; color: white;">
<th style="padding: 10px; text-align: left;">Account</th>
<th style="padding: 10px; text-align: right;">Debit</th>
<th style="padding: 10px; text-align: right;">Credit</th>
</tr>
</thead>
<tbody>
<tr style="background-color: #f0f0f0;">
<td style="padding: 10px; border-bottom: 1px solid #ddd;">Cash</td>
<td style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;">XXX</td>
<td style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;"></td>
</tr>
<tr>
<td style="padding: 10px; border-bottom: 1px solid #ddd;">Bonds Payable</td>
<td style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;"></td>
<td style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;">XXX</td>
</tr>
<tr style="background-color: #f0f0f0;">
<td style="padding: 10px; border-bottom: 1px solid #ddd;">Accounts Payable</td>
<td style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;">XXX</td>
<td style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;"></td>
</tr>
<tr>
<td style="padding: 10px; border-bottom: 1px solid #ddd;">Cash</td>
<td style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;"></td>
<td style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;">XXX</td>
</tr>
</tbody>
</table>
</div>
</div> <div style="background-color: #f9f9f9; padding: 15px; border-radius: 10px; margin-bottom: 20px; border-left: 5px solid #68d3a7;">
<h2 style="color: #207bb5; margin-top: 0;">Impact on Financial Ratios</h2> <h3 style="color: #01506e;">Current Ratio Effect</h3>
<p>When the company issues bonds (long-term liability) and uses the proceeds to pay down accounts payable (current liability):</p>
<ul style="list-style-type: square; padding-left: 25px;">
<li>Current assets remain unchanged (cash increases then decreases)</li>
<li>Current liabilities decrease (reduction in accounts payable)</li>
<li>Result: <span style="font-weight: bold; color: #68d3a7;">Current Ratio Increases</span></li>
</ul> <h3 style="color: #01506e;">Working Capital Effect</h3>
<p>Working Capital = Current Assets - Current Liabilities</p>
<ul style="list-style-type: square; padding-left: 25px;">
<li>Current assets remain unchanged</li>
<li>Current liabilities decrease</li>
<li>Result: <span style="font-weight: bold; color: #68d3a7;">Working Capital Increases</span></li>
</ul> <h3 style="color: #01506e;">Working Capital Turnover Effect</h3>
<p>Working Capital Turnover = Sales / Working Capital</p>
<ul style="list-style-type: square; padding-left: 25px;">
<li>Sales remain unchanged</li>
<li>Working capital increases</li>
<li>Result: <span style="font-weight: bold; color: #68d3a7;">Working Capital Turnover Decreases</span></li>
</ul>
</div> <div style="background-color: #f9f9f9; padding: 15px; border-radius: 10px; margin-bottom: 20px; border-left: 5px solid #0099d4;">
<h2 style="color: #207bb5; margin-top: 0;">Answer Analysis</h2> <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 15px;">
<div style="flex: 1; min-width: 250px; background-color: #f0f0f0; padding: 15px; border-radius: 8px; border-left: 5px solid #ff6b6b;">
<p>Option 1: Increase; Increase</p>
<p><span style="color: #ff6b6b;">Incorrect</span> - Only partially correct. Current Ratio and Working Capital increase, but doesn't address Working Capital Turnover.</p>
</div> <div style="flex: 1; min-width: 250px; background-color: #f0f0f0; padding: 15px; border-radius: 8px; border-left: 5px solid #68d3a7;">
<p>Option 2: Increase, Decrease</p>
<p><span style="color: #68d3a7;">Correct</span> - Current Ratio increases, Working Capital Turnover decreases.</p>
</div> <div style="flex: 1; min-width: 250px; background-color: #f0f0f0; padding: 15px; border-radius: 8px; border-left: 5px solid #ff6b6b;">
<p>Option 3: Decrease, Increase</p>
<p><span style="color: #ff6b6b;">Incorrect</span> - Both effects are opposite of what actually occurs.</p>
</div> <div style="flex: 1; min-width: 250px; background-color: #f0f0f0; padding: 15px; border-radius: 8px; border-left: 5px solid #ff6b6b;">
<p>Option 4: Decrease, Decrease</p>
<p><span style="color: #ff6b6b;">Incorrect</span> - Both effects are incorrect.</p>
</div>
</div>
</div> <div style="background-color:#68d3a7; color: white; padding: 15px; border-radius: 0 0 10px 10px;">
<h2 style="margin: 0; color: white;">Summary</h2>
<p style="margin-bottom: 0;">When a company issues bonds and uses the proceeds to pay down accounts payable, it effectively replaces short-term debt with long-term debt. This increases the current ratio, increases working capital, and consequently decreases working capital turnover. The correct answer is <strong>Increase, Decrease</strong>.</p>
</div>
</div>`,
    },
    {
      id: "8438",
      prompt: `NovaTech has total assets of $80,000 and a current debt-to-equity ratio of 0.75. It plans to raise $20,000 in cash by issuing common shares, while liabilities remain unchanged. What is the new debt-to-equity ratio?`,
      choices: [
        `54.5%`,
        `52.2%`,
        `60.0%`,
        `68.8%`,
      ],
      correctIndex: 1,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:'Segoe UI',sans-serif; margin-bottom:0; margin-top:0; padding:20px">
<div style="background-color:#01506e; border-radius:10px 10px 0 0; color:white; margin-bottom:20px; padding:15px">
<h1 style="margin-left:0; margin-right:0">Debt-to-Equity Ratio Analysis</h1>
</div> <div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:5px; margin-bottom:20px; padding:15px">
<h3>Question Answer</h3> <p>The new debt-to-equity ratio after issuing common shares will be: <strong>52.2%</strong></p>
</div> <div style="margin-bottom:20px">
<h2>Step-by-Step Solution</h2> <h3>Initial Financial Position</h3> <p>Given information:</p> <ul> <li>Total assets: $80,000</li> <li>Current debt-to-equity ratio: 0.75</li> <li>Planned capital raise: $20,000 through common shares</li>
</ul> <h3>Step 1: Calculate Initial Liabilities and Equity</h3> <p>The current ratio of 0.75 means:</p> <ul> <li>Debt represents 3 parts</li> <li>Equity represents 4 parts (since 3/4 = 0.75)</li> <li>Total = 7 parts</li>
</ul> <div style="background-color:#e8f4f8; border-radius:8px; margin-bottom:15px; margin-left:0; margin-right:0; margin-top:15px; padding:15px">
<p>One part = $80,000 &divide; 7 = $11,428.57</p> <p>Initial equity = 4 &times; $11,428.57 = $45,714</p> <p>Initial liabilities = 3 &times; $11,428.57 = $34,286</p>
</div> <h3>Step 2: Analyze the Impact of Stock Issuance</h3> <p>When the company issues $20,000 in common shares:</p> <table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%"> <tbody> <tr> <th style="text-align:left">Item</th> <th style="text-align:right">Before Issuance</th> <th style="text-align:right">Change</th> <th style="text-align:right">After Issuance</th> </tr> <tr> <td>Assets</td> <td style="text-align:right">$80,000</td> <td style="text-align:right">+$20,000</td> <td style="text-align:right">$100,000</td> </tr> <tr> <td>Liabilities</td> <td style="text-align:right">$34,286</td> <td style="text-align:right">$0</td> <td style="text-align:right">$34,286</td> </tr> <tr> <td>Equity</td> <td style="text-align:right">$45,714</td> <td style="text-align:right">+$20,000</td> <td style="text-align:right">$65,714</td> </tr> </tbody>
</table> <h3>Journal Entry for Stock Issuance</h3> <table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%"> <tbody> <tr> <th style="text-align:left">Account</th> <th style="text-align:right">Debit</th> <th style="text-align:right">Credit</th> </tr> <tr> <td>Cash</td> <td style="text-align:right">$20,000</td> <td style="text-align:right">&nbsp;</td> </tr> <tr> <td>Common Stock</td> <td style="text-align:right">&nbsp;</td> <td style="text-align:right">$20,000</td> </tr> <tr> <td colspan="3">To record the issuance of common stock for cash</td> </tr> </tbody>
</table> <h3>Step 3: Calculate the New Debt-to-Equity Ratio</h3> <div style="background-color:#e8f4f8; border-radius:8px; margin-bottom:15px; margin-left:0; margin-right:0; margin-top:15px; padding:15px">
<p>New Debt-to-Equity Ratio = New Liabilities &divide; New Equity</p> <p>New Debt-to-Equity Ratio = $34,286 &divide; $65,714 = 0.522 or 52.2%</p>
</div> <h3>Analysis of Multiple Choice Options</h3> <ul style="list-style-type:none"> <li>54.5% - Incorrect</li> <li>52.2% - Correct</li> <li>60.0% - Incorrect</li> <li>68.8% - Incorrect</li>
</ul>
</div> <div style="background-color:#f5f7fa; border-radius:8px; border-top:3px solid #207bb5; margin-top:20px; padding:15px">
<h3>Summary</h3> <p>The debt-to-equity ratio decreased from 75% to 52.2% after the issuance of common stock. This indicates:</p> <ul> <li>An improved financial leverage position</li> <li>Lower financial risk</li> <li>Enhanced capacity for future borrowing</li> <li>A stronger balance sheet overall</li>
</ul> <p>This is a common financial strategy to improve a company&#39;s capital structure while raising funds for operations or expansion.</p>
</div>
</div>`,
    },
  ],
};
