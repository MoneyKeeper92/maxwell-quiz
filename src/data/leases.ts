import type { Quiz } from "./types";

export const leasesQuiz: Quiz = {
  key: "leases",
  title: "Leases",
  subtitle: "Lessee and lessor accounting under ASC 842",
  discipline: "far",
  course: "cpa",
  questions: [
    {
      id: "8718",
      prompt: `Harris Inc. leased equipment under a finance lease for a period of seven years, contracting to pay $100,000 rent in advance at the start of the lease term on December 31, Year 1, and $100,000 annually on December 31 of each of the next six years. The present value at December 31, Year 1, of the seven rent payments over the lease term discounted at 10% (the implicit interest rate) was $535,000. Harris amortizes its liability using the effective interest method. In its December 31, Year 2, balance sheet, Harris should report a lease liability of:`,
      choices: [
        `$437,350`,
        `$378,500`,
        `$391,500`,
        `$500,000`,
      ],
      correctIndex: 1,
      explanation: `<p>Finance Lease Liability Calculation<!-- Header Section --></p> <div style="background-color:#01506e; border-radius:10px 10px 0 0; color:white; margin-bottom:20px; padding:15px">
<h1 style="margin-left:0; margin-right:0">Finance Lease Liability Calculation</h1>
</div>
<!-- Overview Section --> <div style="background-color:#f9f9f9; border-left:5px solid #207bb5; border-radius:10px; margin-bottom:20px; padding:20px">
<h2>Question Overview</h2> <p>Calculate the lease liability as of December 31, Year 2 for Harris Inc.&#39;s finance lease using the effective interest method.</p> <div style="margin-bottom:20px">
<h3>Given Information</h3> <ul style="list-style-type:none"> <li><strong>Loan Details:</strong> 7-year lease term with upfront payment plus annual payments</li> <li><strong>Payment Structure:</strong> $100,000 upfront + $100,000 annually for 6 years</li> <li><strong>Interest Rate:</strong> 10%</li> <li><strong>Present Value of Payments:</strong> $535,000</li>
</ul>
</div>
</div>
<!-- Step-by-Step Analysis --> <div style="background-color:#f9f9f9; border-left:5px solid #0099d4; border-radius:10px; margin-bottom:20px; padding:20px">
<h2>Step-by-Step Calculation Process</h2> <div style="margin-bottom:20px">
<h3>Step 1: Initial Recognition (December 31, Year 1)</h3> <p>The lease is initially recognized at the present value of all lease payments:</p> <div style="overflow-x:auto">
<table border="1" cellspacing="0" style="border-collapse:collapse; border:1px solid #dddddd; width:100%"> <thead> <tr> <th style="text-align:left">Account Name</th> <th style="text-align:right">Debit</th> <th style="text-align:right">Credit</th> </tr> </thead> <tbody> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Right-of-Use Asset</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$535,000</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Lease Liability</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$535,000</td> </tr> </tbody>
</table>
</div>
</div> <div style="margin-bottom:20px">
<h3>Step 2: First Payment at Inception (December 31, Year 1)</h3> <p>The first payment of $100,000 is made immediately upon lease commencement:</p> <div style="overflow-x:auto">
<table border="1" cellspacing="0" style="border-collapse:collapse; border:1px solid #dddddd; width:100%"> <thead> <tr> <th style="text-align:left">Account Name</th> <th style="text-align:right">Debit</th> <th style="text-align:right">Credit</th> </tr> </thead> <tbody> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Lease Liability</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$100,000</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Cash</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$100,000</td> </tr> </tbody>
</table>
</div> <div style="background-color:#f0f9f5; border-left:5px solid #68d3a7; border-radius:5px; margin-top:15px; padding:15px">
<p><strong>Initial lease liability after first payment:</strong> $535,000 - $100,000 = $435,000</p>
</div>
</div> <div style="margin-bottom:20px">
<h3>Step 3: Interest Accrual During Year 2</h3> <p>Using the effective interest method, interest accrues on the outstanding balance throughout Year 2:</p> <p>Interest for Year 2 = Outstanding balance &times; Interest rate = $435,000 &times; 10% = $43,500</p> <div style="overflow-x:auto">
<table border="1" cellspacing="0" style="border-collapse:collapse; border:1px solid #dddddd; width:100%"> <thead> <tr> <th style="text-align:left">Account Name</th> <th style="text-align:right">Debit</th> <th style="text-align:right">Credit</th> </tr> </thead> <tbody> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Interest Expense</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$43,500</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Lease Liability</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$43,500</td> </tr> </tbody>
</table>
</div>
</div> <div style="margin-bottom:20px">
<h3>Step 4: Second Payment (December 31, Year 2)</h3> <p>The second annual payment of $100,000 is made at the end of Year 2:</p> <div style="overflow-x:auto">
<table border="1" cellspacing="0" style="border-collapse:collapse; border:1px solid #dddddd; width:100%"> <thead> <tr> <th style="text-align:left">Account Name</th> <th style="text-align:right">Debit</th> <th style="text-align:right">Credit</th> </tr> </thead> <tbody> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Lease Liability</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$100,000</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Cash</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$100,000</td> </tr> </tbody>
</table>
</div>
</div>
</div>
<!-- Final Calculation --> <div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:10px; margin-bottom:20px; padding:20px">
<h2>Final Calculation - Lease Liability at December 31, Year 2</h2> <div style="overflow-x:auto">
<table border="1" cellspacing="0" style="border-collapse:collapse; border:1px solid #dddddd; width:100%"> <thead> <tr> <th style="text-align:left">Description</th> <th style="text-align:right">Amount</th> </tr> </thead> <tbody> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Initial lease liability (present value)</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$535,000</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Less: First payment at inception</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">($100,000)</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px"><strong>Initial liability after first payment</strong></td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right"><strong>$435,000</strong></td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Plus: Interest expense for Year 2 (10%)</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$43,500</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Balance before second payment</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$478,500</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Less: Second payment (Dec 31, Year 2)</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">($100,000)</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px"><strong>Lease Liability at December 31, Year 2</strong></td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right"><strong>$378,500</strong></td> </tr> </tbody>
</table>
</div> <div style="background-color:#f0f9f5; border-left:5px solid #68d3a7; border-radius:5px; margin-top:15px; padding:15px">
<h4>Explanation of Calculation</h4> <p>This calculation shows that:</p> <ul> <li>The first payment at lease inception reduces the liability immediately since no interest has accrued yet</li> <li>Interest accrues on the remaining balance during Year 2 using the effective interest method</li> <li>The second payment at year-end reduces the liability by the full payment amount</li>
</ul>
</div>
</div>
<!-- Verification Section --> <div style="background-color:#f9f9f9; border-left:5px solid #4b556a; border-radius:10px; margin-bottom:20px; padding:20px">
<h2>Lease Amortization Schedule Verification</h2> <div style="overflow-x:auto">
<table border="1" cellspacing="0" style="border-collapse:collapse; border:1px solid #dddddd; width:100%"> <thead> <tr> <th style="text-align:left">Date</th> <th style="text-align:right">Beginning Balance</th> <th style="text-align:right">Payment</th> <th style="text-align:right">Interest</th> <th style="text-align:right">Principal</th> <th style="text-align:right">Ending Balance</th> </tr> </thead> <tbody> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Initial Recognition</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$0</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">-</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">-</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">-</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$535,000</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Dec 31, Year 1</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$535,000</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$100,000</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$0</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$100,000</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$435,000</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px"><strong>Dec 31, Year 2</strong></td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right"><strong>$435,000</strong></td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right"><strong>$100,000</strong></td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right"><strong>$43,500</strong></td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right"><strong>$56,500</strong></td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right"><strong>$378,500</strong></td> </tr> </tbody>
</table>
</div>
</div>
<!-- Key Principles --> <div style="background-color:#f4f7fa; border-left:5px solid #4b556a; border-radius:10px; padding:20px">
<h2>Key Accounting Principles Demonstrated</h2> <div style="display:flex; flex-wrap:wrap; gap:20px">
<div style="background-color:#ffffff; border-radius:5px; border:1px solid #68d3a7; flex:1; min-width:300px; padding:15px">
<h3>Effective Interest Method</h3> <p>Interest expense is calculated on the outstanding liability balance at the beginning of each period, ensuring proper allocation between interest and principal components of each payment.</p>
</div> <div style="background-color:#ffffff; border-radius:5px; border:1px solid #0099d4; flex:1; min-width:300px; padding:15px">
<h3>Finance Lease Accounting</h3> <p>Finance leases are recorded as assets and liabilities at the present value of lease payments, with subsequent measurement using the effective interest method for the liability component.</p>
</div>
</div>
</div>`,
    },
    {
      id: "5004",
      prompt: `On January 2 of the current year, Cole Co. signed an eight-year noncancelable lease for a new machine, requiring $15,000 annual payments at the beginning of each year. The machine has a useful life of 12 years, with no salvage value. Title passes to Cole at the lease expiration date. Cole use straight-line depreciation for all of its plant assets. Aggregate lease payments have a present value on January 2 of $108,000, based on an appropriate rate of interest. For the current year, Cole should record depreciation (amortization) expense for the leased machine at:`,
      choices: [
        `$0`,
        `$9,000`,
        `$13,500`,
        `$15,000`,
      ],
      correctIndex: 1,
      explanation: `<div style="font-family: 'Segoe UI', Arial, sans-serif; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
<div style="background-color:#01506e; color: white; padding: 15px; border-radius: 8px 8px 0 0; margin-bottom: 20px;">
<h2 style="margin: 0; color: white;">Capital Lease Amortization Analysis</h2>
</div> <div style="background-color: #f9f9f9; border-left: 5px solid #0099d4; padding: 15px; margin-bottom: 20px; border-radius: 5px;">
<h3 style="color: #207bb5; margin-top: 0;">Answer Evaluation</h3>
<p><span style="background-color: #68d3a7; color: white; padding: 5px 10px; border-radius: 5px; font-weight: bold;">$9,000</span> is the correct amount for depreciation (amortization) expense.</p>
</div> <h3 style="color: #207bb5; border-bottom: 2px solid #68d3a7; padding-bottom: 8px;">Explanation</h3> <p>This is a capital lease because:</p>
<ul style="background-color: #f5f5f5; padding: 15px; border-radius: 8px;">
<li>The lease is noncancelable for 8 years</li>
<li>Title passes to Cole at the end of the lease</li>
<li>The present value of minimum lease payments ($108,000) represents the capitalized amount</li>
</ul> <h3 style="color: #207bb5; border-bottom: 2px solid #68d3a7; padding-bottom: 8px;">Analysis</h3> <div style="background-color: #f2f9fc; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 5px solid #207bb5;">
<p>When a capital lease includes transfer of title, we depreciate the leased asset over its useful life (not the lease term):</p>
<ul>
<li>Capitalized value of the lease: $108,000</li>
<li>Useful life of the machine: 12 years</li>
<li>Depreciation method: Straight-line</li>
<li>Annual depreciation: $108,000 ÷ 12 = $9,000</li>
</ul>
</div> <h3 style="color: #207bb5; border-bottom: 2px solid #68d3a7; padding-bottom: 8px;">Initial Journal Entries (January 2)</h3> <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<tr style="background-color: #4B556A; color: white;">
<th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Account</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">Debit</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">Credit</th>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Leased Equipment (Asset)</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;">$108,000</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;"></td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Lease Liability</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;"></td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;">$108,000</td>
</tr>
</table> <h3 style="color: #207bb5; border-bottom: 2px solid #68d3a7; padding-bottom: 8px;">First Year Depreciation Entry</h3> <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<tr style="background-color: #4B556A; color: white;">
<th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Account</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">Debit</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">Credit</th>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Depreciation Expense</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;">$9,000</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;"></td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Accumulated Depreciation</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;"></td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;">$9,000</td>
</tr>
</table> <h3 style="color: #207bb5; border-bottom: 2px solid #68d3a7; padding-bottom: 8px;">Key Concept</h3> <div style="background-color: #e8f6f3; padding: 15px; border-radius: 8px; border-left: 5px solid #68d3a7;">
<p><strong>Important:</strong> For capital leases where title transfers to the lessee at the end of the lease term, depreciation is calculated based on the asset's useful life, not the lease term. This is because the company will own the asset after the lease ends.</p>
</div> <div style="background-color:#68d3a7; color: white; padding: 15px; border-radius: 0 0 8px 8px; margin-top: 20px;">
<h3 style="margin: 0; color: white;">Summary</h3>
<p style="margin-bottom: 0;">When a capital lease transfers ownership at the end of the lease term, the asset is depreciated over its useful life (12 years), not the lease term (8 years). Therefore, the annual depreciation expense is $9,000 ($108,000 ÷ 12 years).</p>
</div>
</div>`,
    },
    {
      id: "5006",
      prompt: `Oak Co. leased equipment for its entire nine-year useful life, agreeing to pay $50,000 at the start of the lease term on December 31, Year 1, and $50,000 annually on each December 31 for the next eight years. The present value on December 31, Year 1, of the nine lease payments over the lease term, using the rate implicit in the lease which Oak knows to be 10%, was $316,500. The December 31, Year 1, present value of the lease payments using Oak's incremental borrowing rate of 12% was $298,500. Oak made a timely second lease payment.

What amount should Oak report as a lease liability in its December 31, Year 2, balance sheet?`,
      choices: [
        `$350,000`,
        `$243,150`,
        `$228,320`,
        `$0`,
      ],
      correctIndex: 1,
      explanation: `<div style="background-color:white; border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); overflow:hidden"><!-- Header Section -->
<div style="background-color:#01506e; color:white; padding:20px">
<h1 style="margin-left:0; margin-right:0">Lease Accounting Analysis</h1> <p style="margin-left:0; margin-right:0">Finance Lease Liability Calculation Under ASC 842</p>
</div> <div style="padding:20px"><!-- Answer Summary --> <div style="background-color:#e8f5e9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px; text-align:center">
<h3>Correct Answer</h3> <div style="color:#4caf50; font-size:1.4em; font-weight:bold">$243,150</div> <p style="margin-left:0; margin-right:0">Lease liability balance at December 31, Year 2</p>
</div>
<!-- Problem Overview --> <div style="background-color:#f9f9f9; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Problem Overview</h3> <p>Oak Co. entered into a finance lease with the following terms. We need to calculate the lease liability balance at December 31, Year 2.</p> <div style="background-color:white; border-radius:8px; margin-top:10px; padding:15px">
<h4>Given Information</h4> <ul style="list-style-type:none"> <li> <strong>Lease Term:</strong> Multiple years (finance lease)</li> <li> <strong>Annual Payment:</strong> $50,000</li> <li> <strong>Implicit Rate:</strong> 10% (known by lessee)</li> <li> <strong>Initial PV of Payments:</strong> $316,500</li> <li>⏰ <strong>Payment Type:</strong> Annuity due (payments at beginning of each period)</li> <li> <strong>Lease Start:</strong> December 31, Year 1</li>
</ul>
</div>
</div>
<!-- Key Concept --> <div style="background-color:#e8f4fd; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Key ASC 842 Principle</h3> <div style="background-color:white; border-radius:8px; border:1px solid #e0e6ed; padding:15px">
<p style="margin-left:0; margin-right:0"><strong>When the rate implicit in the lease is known, the lessee must use this rate</strong> rather than its incremental borrowing rate for all lease calculations.</p> <div style="background-color:#f0f8ff; border-left:3px solid #0099d4; border-radius:5px; margin-top:15px; padding:10px"><small>This ensures consistency with the lessor&#39;s accounting and provides the most accurate representation of the lease economics.</small></div>
</div>
</div>
<!-- Step-by-Step Analysis --> <div style="margin-bottom:20px">
<h3>Step-by-Step Analysis</h3>
<!-- Step 1: Initial Recognition --> <div style="background-color:#f8f9fa; border-left:4px solid #207bb5; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Step 1: Initial Recognition (December 31, Year 1)</h4> <p>Both the right-of-use asset and lease liability are initially recorded at the present value of lease payments.</p> <table cellspacing="0" style="background-color:white; border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:10px 0; overflow:hidden; width:100%"> <thead> <tr> <th style="text-align:left">Account</th> <th style="text-align:right">Debit</th> <th style="text-align:right">Credit</th> </tr> </thead> <tbody> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Right-of-Use Asset</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$316,500</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Lease Liability</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$316,500</td> </tr> </tbody>
</table>
</div>
<!-- Step 2: First Payment --> <div style="background-color:#f8f9fa; border-left:4px solid #68d3a7; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Step 2: First Payment (December 31, Year 1)</h4> <p>Since this is an annuity due, the first payment is made immediately at lease commencement.</p> <table cellspacing="0" style="background-color:white; border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:10px 0; overflow:hidden; width:100%"> <thead> <tr> <th style="text-align:left">Account</th> <th style="text-align:right">Debit</th> <th style="text-align:right">Credit</th> </tr> </thead> <tbody> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Lease Liability</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$50,000</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Cash</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$50,000</td> </tr> </tbody>
</table> <div style="background-color:#e8f5e9; border-radius:5px; margin-top:10px; padding:10px"><strong>Lease liability after first payment:</strong> $316,500 - $50,000 = <strong>$266,500</strong></div>
</div>
<!-- Step 3: Year 2 Interest --> <div style="background-color:#f8f9fa; border-left:4px solid #ff9800; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Step 3: Interest Accrual During Year 2</h4> <p>Interest expense is calculated on the outstanding lease liability balance.</p> <div style="background-color:white; border-radius:5px; border:1px solid #e0e6ed; margin-bottom:10px; margin-left:0; margin-right:0; margin-top:10px; padding:15px">
<div style="font-size:1.1em; margin-bottom:10px"><strong>Interest Calculation:</strong></div> <div style="background-color:#f5f5f5; border-radius:3px; font-family:monospace; padding:10px">Interest = Outstanding Balance &times; Interest Rate<br />
Interest = $266,500 &times; 10% = <strong>$26,650</strong></div>
</div> <table cellspacing="0" style="background-color:white; border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:10px 0; overflow:hidden; width:100%"> <thead> <tr> <th style="text-align:left">Account</th> <th style="text-align:right">Debit</th> <th style="text-align:right">Credit</th> </tr> </thead> <tbody> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Interest Expense</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$26,650</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Lease Liability</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$26,650</td> </tr> </tbody>
</table>
</div>
<!-- Step 4: Second Payment --> <div style="background-color:#f8f9fa; border-left:4px solid #9c27b0; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Step 4: Second Payment (December 31, Year 2)</h4> <p>The second annual payment reduces the lease liability.</p> <table cellspacing="0" style="background-color:white; border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:10px 0; overflow:hidden; width:100%"> <thead> <tr> <th style="text-align:left">Account</th> <th style="text-align:right">Debit</th> <th style="text-align:right">Credit</th> </tr> </thead> <tbody> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Lease Liability</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$50,000</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Cash</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$50,000</td> </tr> </tbody>
</table>
</div>
</div>
<!-- Final Calculation --> <div style="background-color:#e8f5e9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Final Calculation Summary</h3> <div style="background-color:white; border-radius:8px; margin-top:10px; padding:15px">
<h4>Lease Liability Movement Analysis</h4> <table cellspacing="0" style="border-collapse:collapse; margin:10px 0; width:100%"> <tbody> <tr> <td style="border-bottom:2px solid #dddddd">Description</td> <td style="border-bottom:2px solid #dddddd; text-align:right">Amount</td> </tr> <tr> <td style="border-bottom:1px solid #eeeeee">Starting balance (after first payment)</td> <td style="border-bottom:1px solid #eeeeee; text-align:right">$266,500</td> </tr> <tr> <td style="border-bottom:1px solid #eeeeee">Add: Interest accrued during Year 2</td> <td style="border-bottom:1px solid #eeeeee; text-align:right">$26,650</td> </tr> <tr> <td style="border-bottom:1px solid #eeeeee">Less: Second payment made</td> <td style="border-bottom:1px solid #eeeeee; text-align:right">($50,000)</td> </tr> <tr> <td style="border-top:2px solid #68d3a7">Ending lease liability balance</td> <td style="border-top:2px solid #68d3a7; text-align:right">$243,150</td> </tr> </tbody>
</table>
</div>
</div>
<!-- Timeline Visualization --> <div style="background-color:white; border-radius:8px; border:2px solid #0099d4; margin-bottom:20px; padding:15px">
<h3 style="text-align:center">Lease Liability Timeline</h3> <div style="align-items:center; display:flex; flex-wrap:wrap; gap:15px; justify-content:space-between; margin-bottom:20px; margin-left:0; margin-right:0; margin-top:20px">
<div style="flex:1; min-width:180px; text-align:center">
<div style="background-color:#207bb5; border-radius:8px; color:white; margin-bottom:10px; padding:10px">
<div style="font-weight:bold">Dec 31, Year 1</div> <div style="font-size:0.9em">Initial Recognition</div>
</div> <div style="color:#207bb5; font-weight:bold">$316,500</div> <div style="color:#666666; font-size:0.8em">Initial liability</div>
</div> <div style="color:#dddddd; font-size:1.5em; text-align:center">&rarr;</div> <div style="flex:1; min-width:180px; text-align:center">
<div style="background-color:#68d3a7; border-radius:8px; color:white; margin-bottom:10px; padding:10px">
<div style="font-weight:bold">Dec 31, Year 1</div> <div style="font-size:0.9em">After 1st Payment</div>
</div> <div style="color:#68d3a7; font-weight:bold">$266,500</div> <div style="color:#666666; font-size:0.8em">($50,000 payment)</div>
</div> <div style="color:#dddddd; font-size:1.5em; text-align:center">&rarr;</div> <div style="flex:1; min-width:180px; text-align:center">
<div style="background-color:#ff9800; border-radius:8px; color:white; margin-bottom:10px; padding:10px">
<div style="font-weight:bold">During Year 2</div> <div style="font-size:0.9em">Interest Accrual</div>
</div> <div style="color:#ff9800; font-weight:bold">$293,150</div> <div style="color:#666666; font-size:0.8em">(+$26,650 interest)</div>
</div> <div style="color:#dddddd; font-size:1.5em; text-align:center">&rarr;</div> <div style="flex:1; min-width:180px; text-align:center">
<div style="background-color:#4caf50; border-radius:8px; color:white; margin-bottom:10px; padding:10px">
<div style="font-weight:bold">Dec 31, Year 2</div> <div style="font-size:0.9em">Final Balance</div>
</div> <div style="color:#4caf50; font-weight:bold">$243,150</div> <div style="color:#666666; font-size:0.8em">($50,000 payment)</div>
</div>
</div>
</div>
<!-- Key Takeaways --> <div style="background-color:#e8f4fd; border-left:5px solid #0099d4; border-radius:8px; padding:15px">
<h3>Key Takeaways</h3> <ol> <li><strong>Rate Selection:</strong> Use the rate implicit in the lease when known by the lessee (10% in this case)</li> <li><strong>Annuity Due Treatment:</strong> First payment occurs at lease commencement, reducing initial liability immediately</li> <li><strong>Interest Calculation:</strong> Interest expense is calculated on the outstanding lease liability balance each period</li> <li><strong>Liability Reduction:</strong> Each payment reduces the lease liability, while interest increases it</li> <li><strong>ASC 842 Compliance:</strong> Proper classification and measurement ensure compliance with current lease accounting standards</li>
</ol> <div style="background-color:white; border-radius:8px; border:2px solid #0099d4; margin-top:15px; padding:15px; text-align:center">
<div style="color:#01506e; font-size:1.3em; font-weight:bold">Final Answer: $243,150</div> <p style="margin-left:0; margin-right:0">Lease liability balance at December 31, Year 2</p>
</div>
</div>
</div>
</div>`,
    },
    {
      id: "8708",
      prompt: `On December 31, Year 1, Neal Inc. leased machinery with a fair value of $105,000 from Frey Rentals Co. The agreement is a six‐year noncancelable lease requiring annual payments of $20,000 beginning December 31, Year 1. The lease is accounted for as a finance lease. Neal's incremental borrowing rate is 11%, and the interest rate implicit in the lease payments is 10%. The present value of an annuity due of 1 for 6 years at 10% is 4.7908, and at 11% is 4.6959.
      

      
        In its December 31, Year 1 balance sheet, Neal should report a lease liability of:`,
      choices: [
        `$93,918`,
        `$95,816`,
        `$75,816`,
        `$85,000`,
      ],
      correctIndex: 2,
      explanation: `<div style="font-family: 'Segoe UI', sans-serif; margin: 20px; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
<div style="background-color:#01506e; color: white; padding: 15px; border-radius: 10px 10px 0 0; margin-bottom: 20px;">
<h2 style="margin: 0; color: white;">Finance Lease Accounting Analysis</h2>
</div> <div style="background-color: #f9f9f9; padding: 15px; border-left: 5px solid #0099d4; margin-bottom: 20px; border-radius: 5px;">
<h3 style="color: #01506e; margin-top: 0;">Question Summary</h3>
<p>Neal Inc. leased machinery with a fair value of $105,000 under a 6-year finance lease with annual payments of $20,000. We need to determine the correct lease liability as of December 31, Year 1.</p>
</div> <div style="margin-bottom: 20px;">
<h3 style="color: #01506e; background-color: #e8f4f8; padding: 10px; border-radius: 5px;">Answer Options</h3>
<ul style="list-style-type: none; padding-left: 0;">
<li style="padding: 8px; margin-bottom: 5px; background-color: #f9f9f9; border-radius: 5px; color: #333;"><span style="color: red;">$93,918</span></li>
<li style="padding: 8px; margin-bottom: 5px; background-color: #f9f9f9; border-radius: 5px; color: #333;"><span style="color: red;">$95,816</span></li>
<li style="padding: 8px; margin-bottom: 5px; background-color: #f9f9f9; border-radius: 5px; color: #333;"><span style="color: #68d3a7; font-weight: bold;">$75,816</span> ✓</li>
<li style="padding: 8px; margin-bottom: 5px; background-color: #f9f9f9; border-radius: 5px; color: #333;"><span style="color: red;">$85,000</span></li>
</ul>
</div> <div style="margin-bottom: 20px; background-color: #f0f7fa; padding: 15px; border-radius: 8px;">
<h3 style="color: #01506e;">Explanation</h3>
<p>For finance lease accounting, we need to:</p>
<ol>
<li>Determine the correct interest rate to use</li>
<li>Calculate the present value of all lease payments</li>
<li>Adjust for any payments already made</li>
</ol> <h4 style="color: #0099d4;">Step 1: Determine the Correct Interest Rate</h4>
<p>According to accounting standards, when the implicit rate is known to the lessee and is lower than the incremental borrowing rate, the lessee must use the implicit rate. In this case:</p>
<ul>
<li>Implicit rate: 10%</li>
<li>Incremental borrowing rate: 11%</li>
</ul>
<p>Since 10% is lower and is known, we must use 10% for our calculations.</p> <h4 style="color: #0099d4;">Step 2: Calculate the Present Value</h4>
<p>Since this is an annuity due (payments made at the beginning of each period), we use the annuity due factor:</p>
<div style="background-color: #e8f4f8; padding: 10px; border-radius: 5px; margin: 10px 0;">
PV of all lease payments = $20,000 × 4.7908 = $95,816
</div> <h4 style="color: #0099d4;">Step 3: Adjust for the First Payment</h4>
<p>Since the first payment was made on December 31, Year 1 (the inception date), we need to deduct this payment from the total lease liability:</p>
<div style="background-color: #e8f4f8; padding: 10px; border-radius: 5px; margin: 10px 0;">
Remaining lease liability = $95,816 - $20,000 = $75,816
</div>
</div> <div style="margin-bottom: 20px;">
<h3 style="color: white; background-color: #4B556A; padding: 10px; border-radius: 5px;">Journal Entries</h3>
<p>The journal entries on December 31, Year 1 would be:</p> <table style="width: 100%; border-collapse: collapse; margin: 15px 0; border-radius: 5px; overflow: hidden; box-shadow: 0 2px 3px rgba(0,0,0,0.1);">
<thead>
<tr style="background-color: #207bb5; color: white;">
<th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Account</th>
<th style="padding: 10px; text-align: right; border: 1px solid #ddd;">Debit</th>
<th style="padding: 10px; text-align: right; border: 1px solid #ddd;">Credit</th>
</tr>
</thead>
<tbody>
<tr style="background-color: #f9f9f9;">
<td style="padding: 10px; border: 1px solid #ddd;">Right-of-Use Asset</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;">$95,816</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;"></td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Lease Liability</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;"></td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;">$95,816</td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="padding: 10px; border: 1px solid #ddd;" colspan="3"><em>To record the finance lease and related liability</em></td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Lease Liability</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;">$20,000</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;"></td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="padding: 10px; border: 1px solid #ddd;">Cash</td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;"></td>
<td style="padding: 10px; text-align: right; border: 1px solid #ddd;">$20,000</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;" colspan="3"><em>To record the first lease payment</em></td>
</tr>
</tbody>
</table>
</div> <div style="background-color: #68d3a7; padding: 15px; border-radius: 8px; color: white; margin-bottom: 20px;">
<h3 style="margin-top: 0; color: white;">Summary</h3>
<p>At December 31, Year 1, Neal Inc. should report a lease liability of <strong>$75,816</strong>. This represents the present value of the remaining five payments after the first payment has been made at the lease inception date.</p>
</div> <div style="background-color: #f0f7fa; padding: 15px; border-radius: 8px; border-left: 5px solid #01506e;">
<h3 style="color: #01506e; margin-top: 0;">Key Takeaways</h3>
<ul>
<li>For finance leases, use the implicit rate when it is known and lower than the incremental borrowing rate</li>
<li>Calculate the present value using the appropriate annuity factor (in this case an annuity due)</li>
<li>The lease liability reported on the balance sheet should reflect only future payments</li>
<li>When a payment is made at inception, it directly reduces the initial lease liability</li>
</ul>
</div>
</div>`,
    },
    {
      id: "9450",
      prompt: `On January 1, Year 1, Apex Manufacturing leased a piece of equipment from the lessor with the following pertinent information:

	Lease Term: 4 years

	Annual Lease Payment (made at the end of each year): $150,000

	Useful Life of Equipment: 8 years

	Implicit Interest Rate in Lease (known by Apex Manufacturing): 6%

	Present Value Factor of an Ordinary Annuity for 4 Years at 6%: 3.4651

What is the carrying value of the lease as of December 31, Year 2?`,
      choices: [
        `$400,951`,
        `$275,008`,
        `$324,560`,
        `$550,415`,
      ],
      correctIndex: 1,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:Arial,Helvetica,sans-serif; margin-bottom:0; margin-top:0; overflow:hidden">
<div style="background-color:#01506e; border-top-left-radius:10px; border-top-right-radius:10px; color:white; padding:20px">
<h1 style="margin-left:0; margin-right:0">Lease Liability Calculation</h1> <p>Finance Lease - Effective Interest Method</p>
</div> <div style="background-color:white; padding:20px">
<div style="background-color:#f9f9f9; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Correct Answer:</h3> <p><span style="color:#4caf50">✓ Carrying value at December 31, Year 2: $275,008</span></p>
</div> <div style="background-color:#f5f9fc; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Lease Information</h3> <table cellspacing="0" style="border-collapse:collapse; margin-top:10px; width:100%"> <tbody> <tr> <th style="text-align:left">Item</th> <th style="text-align:right">Details</th> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Lessee</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">Apex Manufacturing</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Lease term</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">4 years</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Annual lease payment (end of year)</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">$150,000</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Useful life of equipment</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">8 years</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Implicit interest rate</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">6%</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">PV factor (ordinary annuity, 4 years, 6%)</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">3.4651</td> </tr> </tbody>
</table>
</div> <div style="background-color:#eef9f2; border-radius:8px; border:1px solid #68d3a7; margin-bottom:20px; padding:15px">
<h3>Step 1: Calculate Initial Lease Liability</h3> <p>The lease liability at inception equals the present value of all future lease payments:</p> <table cellspacing="0" style="border-collapse:collapse; margin-top:10px; width:100%"> <tbody> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Annual lease payment</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">$150,000</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Multiply by: PV factor (4 years, 6%)</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">&times; 3.4651</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Initial lease liability (Jan 1, Year 1)</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">$519,765</td> </tr> </tbody>
</table>
</div> <div style="background-color:#eef9f2; border-radius:8px; border:1px solid #68d3a7; margin-bottom:20px; padding:15px">
<h3>Step 2: Lease Liability Amortization Schedule</h3> <table cellspacing="0" style="border-collapse:collapse; margin-top:10px; width:100%"> <thead> <tr> <th style="text-align:center">Period</th> <th style="text-align:right">Beg Balance</th> <th style="text-align:right">Interest<br /> Expense (6%)</th> <th style="text-align:right">Lease<br /> Payment</th> <th style="text-align:right">Principal<br /> Reduction</th> <th style="text-align:right">End Balance</th> </tr> </thead> <tbody> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:center">Jan 1, Yr 1</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">: </td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">: </td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">: </td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">: </td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$519,765</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:center">Dec 31, Yr 1</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$519,765</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$31,186</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$150,000</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$118,814</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$400,951</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:center">Dec 31, Yr 2</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$400,951</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$24,057</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$150,000</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$125,943</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right"><strong>$275,008</strong></td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:center">Dec 31, Yr 3</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$275,008</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$16,500</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$150,000</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$133,500</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$141,508</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:center">Dec 31, Yr 4</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$141,508</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$8,492</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$150,000</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$141,508</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$0</td> </tr> </tbody>
</table> <p><em>Note: Interest expense = Beginning balance &times; 6%. Principal reduction = Payment - Interest.</em></p>
</div> <div style="background-color:#f0f7fa; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Step 3: Detailed Year-by-Year Calculations</h3> <h4>Year 1 Calculation:</h4> <table cellspacing="0" style="border-collapse:collapse; margin-top:10px; width:100%"> <tbody> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Beginning balance (Jan 1, Year 1)</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">$519,765</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Interest expense ($519,765 &times; 6%)</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">$31,186</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Less: Lease payment</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">($150,000)</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Ending balance (Dec 31, Year 1)</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">$400,951</td> </tr> </tbody>
</table> <h4>Year 2 Calculation:</h4> <table cellspacing="0" style="border-collapse:collapse; margin-top:10px; width:100%"> <tbody> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Beginning balance (Jan 1, Year 2)</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">$400,951</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Interest expense ($400,951 &times; 6%)</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">$24,057</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Less: Lease payment</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">($150,000)</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Ending balance (Dec 31, Year 2)</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">$275,008</td> </tr> </tbody>
</table>
</div> <div style="background-color:#eef9f2; border-radius:8px; border:1px solid #68d3a7; margin-bottom:20px; padding:15px">
<h3>Journal Entries</h3> <h4 style="margin-left:0; margin-right:0">January 1, Year 1 - Lease Commencement</h4> <table cellspacing="0" style="border-collapse:collapse; width:100%"> <thead> <tr> <th style="text-align:left">Account</th> <th style="text-align:right">Debit</th> <th style="text-align:right">Credit</th> </tr> </thead> <tbody> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Right-of-Use Asset</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$519,765</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Lease Liability</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$519,765</td> </tr> </tbody>
</table> <p><em>Records the initial recognition of the lease at present value of payments.</em></p> <h4 style="margin-left:0; margin-right:0">December 31, Year 1 - First Payment</h4> <table cellspacing="0" style="border-collapse:collapse; width:100%"> <thead> <tr> <th style="text-align:left">Account</th> <th style="text-align:right">Debit</th> <th style="text-align:right">Credit</th> </tr> </thead> <tbody> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Interest Expense</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$31,186</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Lease Liability</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$118,814</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Cash</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$150,000</td> </tr> </tbody>
</table> <p><em>Records Year 1 interest and lease payment. Liability reduced to $400,951.</em></p> <h4 style="margin-left:0; margin-right:0">December 31, Year 2 - Second Payment ✓</h4> <table cellspacing="0" style="border-collapse:collapse; width:100%"> <thead> <tr> <th style="text-align:left">Account</th> <th style="text-align:right">Debit</th> <th style="text-align:right">Credit</th> </tr> </thead> <tbody> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Interest Expense</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$24,057</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Lease Liability</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$125,943</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Cash</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$150,000</td> </tr> </tbody>
</table> <p><em>Records Year 2 interest and lease payment. Liability reduced to $275,008.</em></p>
</div> <div style="background-color:#f0f7fa; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Alternative Entry Format (Combined)</h3> <p>Some companies combine the interest accrual and payment into a single entry:</p> <h4>December 31, Year 2 - Combined Entry:</h4> <table cellspacing="0" style="border-collapse:collapse; width:100%"> <thead> <tr> <th style="text-align:left">Account</th> <th style="text-align:right">Debit</th> <th style="text-align:right">Credit</th> </tr> </thead> <tbody> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Interest Expense</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$24,057</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Lease Liability</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$24,057</td> </tr> </tbody>
</table> <table cellspacing="0" style="border-collapse:collapse; margin-top:5px; width:100%"> <tbody> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Lease Liability</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$150,000</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Cash</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$150,000</td> </tr> </tbody>
</table>
</div> <div style="background-color:#fffde7; border-left:4px solid #fbc02d; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Key Concepts</h3> <ul style="margin-left:0; margin-right:0"> <li><strong>Effective Interest Method:</strong> Interest expense = Beginning balance &times; Interest rate</li> <li><strong>Decreasing Interest:</strong> As the liability decreases, so does the interest expense each period</li> <li><strong>Principal Reduction:</strong> Each payment reduces principal by (Payment - Interest expense)</li> <li><strong>ROU Asset:</strong> Amortized separately (not shown here) over the lease term</li> <li><strong>Lease Term vs. Useful Life:</strong> The 4-year lease term is shorter than the 8-year useful life, but we amortize based on lease term</li>
</ul>
</div> <div style="background-color:#f5f9fc; border-left:5px solid #207bb5; border-radius:8px; padding:15px">
<h3>Summary</h3> <p>The carrying value of Apex Manufacturing&#39;s lease liability at December 31, Year 2 is <strong>$275,008</strong>. Starting with an initial liability of $519,765 (the present value of four $150,000 payments), the company records interest using the effective interest method at 6%. Year 1 interest was $31,186, reducing the liability to $400,951 after the first payment. Year 2 interest was $24,057, and after the second $150,000 payment, the liability decreased to $275,008. Interest expense declines each year as the outstanding liability balance decreases.</p>
</div>
</div>
</div>`,
    },
    {
      id: "9452",
      prompt: `On January 1, Year 1, Delta Corp entered into a lease agreement for industrial equipment with the following details:

	Lease Term: 4 years

	Annual Lease Payment (made at the end of each year): $80,000

	Useful Life of Equipment: 7 years

	Guaranteed Residual Value at the end of the Lease Term: $20,000

	Implicit Interest Rate in Lease (known by Delta Corp): 5%

	Present Value Factor of an Ordinary Annuity for 4 Years at 5%: 3.5460

	Present Value Factor of a Lump Sum for 4 Years at 5%: 0.8227

What is the interest expense related to the lease for the first year?`,
      choices: [
        `$15,007`,
        `$14,184`,
        `$15,500`,
        `$14,281`,
      ],
      correctIndex: 0,
      explanation: `<div style="border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); font-family:Arial,Helvetica,sans-serif; margin-bottom:0; margin-top:0; overflow:hidden">
<div style="background-color:#01506e; border-top-left-radius:10px; border-top-right-radius:10px; color:white; padding:20px">
<h1 style="margin-left:0; margin-right:0">Lease with Guaranteed Residual Value</h1> <p>Calculating Interest Expense - Year 1</p>
</div> <div style="background-color:white; padding:20px">
<div style="background-color:#f9f9f9; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Correct Answer:</h3> <p><span style="color:#4caf50">✓ Interest expense for Year 1: $15,007</span></p>
</div> <div style="background-color:#f5f9fc; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Lease Information</h3> <table cellspacing="0" style="border-collapse:collapse; margin-top:10px; width:100%"> <tbody> <tr> <th style="text-align:left">Item</th> <th style="text-align:right">Details</th> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Lessee</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">Delta Corp</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Lease term</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">4 years</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Annual lease payment (end of year)</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">$80,000</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Useful life of equipment</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">7 years</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Guaranteed residual value</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">$20,000</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Implicit interest rate</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">5%</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">PV factor (ordinary annuity, 4 years, 5%)</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">3.5460</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">PV factor (lump sum, 4 years, 5%)</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">0.8227</td> </tr> </tbody>
</table>
</div> <div style="background-color:#f0f7fa; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>What is a Guaranteed Residual Value?</h3> <p>A <strong>guaranteed residual value</strong> is an amount the lessee guarantees the asset will be worth at the end of the lease term. If the asset&#39;s value is less than the guaranteed amount, the lessee must pay the difference to the lessor.</p> <ul style="margin-left:0; margin-right:0"> <li><strong>Included in lease liability:</strong> The present value of the guaranteed residual must be added to the lease liability</li> <li><strong>Not a periodic payment:</strong> It&#39;s a single amount due at lease end, so we use the lump sum PV factor</li> <li><strong>Increases initial liability:</strong> This results in higher interest expense throughout the lease</li>
</ul>
</div> <div style="background-color:#eef9f2; border-radius:8px; border:1px solid #68d3a7; margin-bottom:20px; padding:15px">
<h3>Step 1: Calculate Present Value of Lease Payments</h3> <p>Since the annual payments form an ordinary annuity (paid at year-end), we use the ordinary annuity factor:</p> <table cellspacing="0" style="border-collapse:collapse; margin-top:10px; width:100%"> <tbody> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Annual lease payment</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">$80,000</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Multiply by: PV factor (ordinary annuity, 4 years, 5%)</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">&times; 3.5460</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">PV of annual payments</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">$283,680</td> </tr> </tbody>
</table>
</div> <div style="background-color:#eef9f2; border-radius:8px; border:1px solid #68d3a7; margin-bottom:20px; padding:15px">
<h3>Step 2: Calculate Present Value of Guaranteed Residual</h3> <p>The guaranteed residual value is a single payment due at the end of Year 4, so we use the lump sum factor:</p> <table cellspacing="0" style="border-collapse:collapse; margin-top:10px; width:100%"> <tbody> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Guaranteed residual value</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">$20,000</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Multiply by: PV factor (lump sum, 4 years, 5%)</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">&times; 0.8227</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">PV of guaranteed residual</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">$16,454</td> </tr> </tbody>
</table>
</div> <div style="background-color:#eef9f2; border-radius:8px; border:1px solid #68d3a7; margin-bottom:20px; padding:15px">
<h3>Step 3: Calculate Total Initial Lease Liability</h3> <table cellspacing="0" style="border-collapse:collapse; margin-top:10px; width:100%"> <tbody> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">PV of annual payments</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">$283,680</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Plus: PV of guaranteed residual value</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">$16,454</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Total lease liability (Jan 1, Year 1)</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">$300,134</td> </tr> </tbody>
</table>
</div> <div style="background-color:#eef9f2; border-radius:8px; border:1px solid #68d3a7; margin-bottom:20px; padding:15px">
<h3>Step 4: Calculate Year 1 Interest Expense</h3> <table cellspacing="0" style="border-collapse:collapse; margin-top:10px; width:100%"> <tbody> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Beginning lease liability</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">$300,134</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Multiply by: Interest rate</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">&times; 5%</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Year 1 interest expense</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right"><strong>$15,007</strong></td> </tr> </tbody>
</table>
</div> <div style="background-color:#eef9f2; border-radius:8px; border:1px solid #68d3a7; margin-bottom:20px; padding:15px">
<h3>Complete Lease Amortization Schedule</h3> <table cellspacing="0" style="border-collapse:collapse; margin-top:10px; width:100%"> <thead> <tr> <th style="text-align:center">Year</th> <th style="text-align:right">Beginning<br /> Balance</th> <th style="text-align:right">Interest<br /> Expense (5%)</th> <th style="text-align:right">Cash<br /> Payment</th> <th style="text-align:right">Principal<br /> Reduction</th> <th style="text-align:right">Ending<br /> Balance</th> </tr> </thead> <tbody> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:center">Initial</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">: </td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">: </td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">: </td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">: </td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$300,134</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:center">1</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$300,134</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right"><strong>$15,007</strong></td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$80,000</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$64,993</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$235,141</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:center">2</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$235,141</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$11,757</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$80,000</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$68,243</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$166,898</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:center">3</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$166,898</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$8,345</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$80,000</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$71,655</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$95,243</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:center">4</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$95,243</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$4,757</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$100,000*</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$95,243</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$0</td> </tr> </tbody>
</table> <p><em>*Year 4 payment = $80,000 annual payment + $20,000 guaranteed residual value</em></p>
</div> <div style="background-color:#eef9f2; border-radius:8px; border:1px solid #68d3a7; margin-bottom:20px; padding:15px">
<h3>Journal Entries</h3> <h4 style="margin-left:0; margin-right:0">January 1, Year 1 - Lease Commencement</h4> <table cellspacing="0" style="border-collapse:collapse; width:100%"> <thead> <tr> <th style="text-align:left">Account</th> <th style="text-align:right">Debit</th> <th style="text-align:right">Credit</th> </tr> </thead> <tbody> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Right-of-Use Asset</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$300,134</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Lease Liability</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$300,134</td> </tr> </tbody>
</table> <p><em>Records initial lease including PV of guaranteed residual value.</em></p> <h4 style="margin-left:0; margin-right:0">December 31, Year 1 - First Payment ✓</h4> <table cellspacing="0" style="border-collapse:collapse; width:100%"> <thead> <tr> <th style="text-align:left">Account</th> <th style="text-align:right">Debit</th> <th style="text-align:right">Credit</th> </tr> </thead> <tbody> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Interest Expense</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$15,007</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Lease Liability</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$64,993</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Cash</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$80,000</td> </tr> </tbody>
</table> <p><em>Records $15,007 interest expense and $80,000 payment. Liability reduced to $235,141.</em></p> <h4 style="margin-left:0; margin-right:0">December 31, Year 4 - Final Payment with Residual</h4> <table cellspacing="0" style="border-collapse:collapse; width:100%"> <thead> <tr> <th style="text-align:left">Account</th> <th style="text-align:right">Debit</th> <th style="text-align:right">Credit</th> </tr> </thead> <tbody> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Interest Expense</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$4,757</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Lease Liability</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$95,243</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Cash</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$100,000</td> </tr> </tbody>
</table> <p><em>Final payment includes $80,000 annual payment plus $20,000 guaranteed residual value.</em></p>
</div> <div style="background-color:#fffde7; border-left:4px solid #fbc02d; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Guaranteed vs. Unguaranteed Residual Values</h3> <table cellspacing="0" style="border-collapse:collapse; margin-top:10px; width:100%"> <thead> <tr> <th style="text-align:left">Feature</th> <th style="text-align:center">Guaranteed Residual</th> <th style="text-align:center">Unguaranteed Residual</th> </tr> </thead> <tbody> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Included in lease liability?</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:center">Yes</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:center">No</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Lessee obligation?</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:center">Yes - must pay difference</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:center">No obligation</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Effect on interest expense?</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:center">Increases (higher liability)</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:center">No effect</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Example</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:center">This problem</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:center">Lessor&#39;s estimate only</td> </tr> </tbody>
</table>
</div> <div style="background-color:#f0f7fa; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Comparison: With vs. Without Residual Value</h3> <p>To illustrate the impact of the guaranteed residual value:</p> <table cellspacing="0" style="border-collapse:collapse; margin-top:10px; width:100%"> <thead> <tr> <th style="text-align:left">Component</th> <th style="text-align:right">Without Residual</th> <th style="text-align:right">With Residual</th> </tr> </thead> <tbody> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">PV of payments</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">$283,680</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">$283,680</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">PV of residual</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">$0</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">$16,454</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Initial liability</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">$283,680</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">$300,134</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px">Year 1 interest (5%)</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">$14,184</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">$15,007</td> </tr> <tr> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px"><strong>Difference</strong></td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> <td style="border-color:#d0e4f5; border-style:solid; border-width:1px; text-align:right">+$823</td> </tr> </tbody>
</table> <p><em>The $16,454 residual value increases the initial liability by 5.8%, resulting in $823 more interest in Year 1.</em></p>
</div> <div style="background-color:#f5f9fc; border-left:5px solid #207bb5; border-radius:8px; padding:15px">
<h3>Summary</h3> <p>Delta Corp&#39;s Year 1 interest expense is <strong>$15,007</strong>. This is calculated by multiplying the initial lease liability of $300,134 by the 5% interest rate. The initial liability includes two components: (1) the present value of four $80,000 annual payments ($283,680), and (2) the present value of the $20,000 guaranteed residual value ($16,454). The guaranteed residual value must be included in the lease liability because Delta Corp is obligated to pay the lessor if the equipment&#39;s value falls below $20,000 at lease end. This increases both the initial liability and the resulting interest expense compared to a lease without a residual value guarantee.</p>
</div>
</div>
</div>`,
    },
    {
      id: "8710",
      prompt: `On April 1, Year 1, Hall Fitness Center leased its gym to Dunn Fitness Center under a four‐year operating lease. Hall normally charges $6,000 per month to lease its gym, but as an incentive, Hall gave Dunn half off the first year's lease costs, and one quarter off the second year's lease costs. Dunn's lease payments were as follows:
      

      
        Year 1: 12 × $3,000 = $36,000

        Year 2: 12 × $4,500 = $54,000

        Year 3: 12 × $6,000 = $72,000

        Year 4: 12 × $6,000 = $72,000

      
      
        Dunn's lease payments were due on the first day of the month, beginning on April 1, Year 1. What amount should Dunn report as lease expense in its monthly income statement for April, Year 3?`,
      choices: [
        `$4,500`,
        `$6,000`,
        `$3,000`,
        `$4,875`,
      ],
      correctIndex: 3,
      explanation: `<div style="font-family: 'Segoe UI', sans-serif; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1); margin: 20px 0;">
<div style="background-color:#01506e; color: white; padding: 20px; border-top-left-radius: 10px; border-top-right-radius: 10px;">
<h2 style="margin: 0; color: white;">Operating Lease Accounting - ASC 842</h2>
</div> <div style="padding: 20px; background-color: #f9f9f9;">
<h3 style="color: #207bb5; border-bottom: 2px solid #207bb5; padding-bottom: 10px;">Monthly Lease Expense Calculation</h3> <div style="background-color: #f5f5f5; border-left: 4px solid #0099d4; padding: 15px; margin: 15px 0; border-radius: 5px;">
<p>Under ASC 842, operating lease expenses must be recognized on a straight-line basis over the entire lease term, regardless of the actual payment schedule.</p>
</div> <h4 style="color: #01506e;">Lease Payment Schedule</h4>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
<thead>
<tr style="background-color: #4B556A; color: white;">
<th style="padding: 12px; text-align: left;">Lease Period</th>
<th style="padding: 12px; text-align: right;">Monthly Payment</th>
<th style="padding: 12px; text-align: right;">Annual Total</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom: 1px solid #eee;">
<td style="padding: 12px;">Year 1 (50% discount)</td>
<td style="padding: 12px; text-align: right;">$3,000</td>
<td style="padding: 12px; text-align: right;">$36,000</td>
</tr>
<tr style="border-bottom: 1px solid #eee;">
<td style="padding: 12px;">Year 2 (25% discount)</td>
<td style="padding: 12px; text-align: right;">$4,500</td>
<td style="padding: 12px; text-align: right;">$54,000</td>
</tr>
<tr style="border-bottom: 1px solid #eee;">
<td style="padding: 12px;">Year 3 (full price)</td>
<td style="padding: 12px; text-align: right;">$6,000</td>
<td style="padding: 12px; text-align: right;">$72,000</td>
</tr>
<tr>
<td style="padding: 12px;">Year 4 (full price)</td>
<td style="padding: 12px; text-align: right;">$6,000</td>
<td style="padding: 12px; text-align: right;">$72,000</td>
</tr>
<tr style="background-color: #f5f5f5; font-weight: bold;">
<td style="padding: 12px;">Total Lease Payments</td>
<td style="padding: 12px;"></td>
<td style="padding: 12px; text-align: right;">$234,000</td>
</tr>
</tbody>
</table> <h4 style="color: #01506e;">Straight-Line Expense Calculation</h4>
<div style="background-color: #e9f7fd; border: 1px solid #0099d4; padding: 15px; border-radius: 8px; margin: 15px 0;">
<p><strong>Total lease payments:</strong> $234,000</p>
<p><strong>Total lease term:</strong> 48 months (4 years × 12 months)</p>
<p><strong>Monthly straight-line expense:</strong> $234,000 ÷ 48 = $4,875 per month</p>
</div> <h4 style="color: #01506e;">Journal Entry for April, Year 3</h4>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
<thead>
<tr style="background-color: #4B556A; color: white;">
<th style="padding: 12px; text-align: left;">Account</th>
<th style="padding: 12px; text-align: right;">Debit</th>
<th style="padding: 12px; text-align: right;">Credit</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom: 1px solid #eee;">
<td style="padding: 12px;">Lease Expense</td>
<td style="padding: 12px; text-align: right;">$4,875</td>
<td style="padding: 12px; text-align: right;"></td>
</tr>
<tr style="border-bottom: 1px solid #eee;">
<td style="padding: 12px;">Cash</td>
<td style="padding: 12px; text-align: right;"></td>
<td style="padding: 12px; text-align: right;">$6,000</td>
</tr>
<tr>
<td style="padding: 12px;">Lease Liability/Deferred Rent</td>
<td style="padding: 12px; text-align: right;">$1,125</td>
<td style="padding: 12px; text-align: right;"></td>
</tr>
</tbody>
</table> <div style="margin-top: 20px;">
<h3 style="color: #207bb5;">Answer Analysis</h3>
<p>The correct monthly lease expense for April, Year 3 is:</p>
<div style="display: flex; flex-wrap: wrap; gap: 10px; margin: 15px 0;">
<span style="padding: 10px 15px; background-color: #ffffff; border: 1px solid #f44336; border-radius: 5px; color: #f44336;">$4,500</span>
<span style="padding: 10px 15px; background-color: #ffffff; border: 1px solid #f44336; border-radius: 5px; color: #f44336;">$6,000</span>
<span style="padding: 10px 15px; background-color: #ffffff; border: 1px solid #f44336; border-radius: 5px; color: #f44336;">$3,000</span>
<span style="padding: 10px 15px; background-color: #68d3a7; border: 1px solid #68d3a7; border-radius: 5px; color: white; font-weight: bold;">$4,875</span>
</div>
</div> <div style="background-color: #f0f8f5; border-left: 4px solid #68d3a7; padding: 15px; margin: 20px 0; border-radius: 5px;">
<h4 style="color: #01506e; margin-top: 0;">Key Concept: Straight-Line Recognition</h4>
<p>Even though the actual monthly payment in Year 3 is $6,000, ASC 842 requires recognizing the total lease cost evenly over the lease term. This results in a monthly expense of $4,875, which differs from the cash payment. The difference is recognized as a lease liability or deferred rent.</p>
</div>
</div> <div style="background-color: #01506e; color: white; padding: 15px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
<h4 style="margin: 0; color: white;">Summary</h4>
<p style="margin: 10px 0 0;">Under ASC 842, the monthly lease expense for an operating lease is recognized on a straight-line basis over the entire lease term. For Dunn Fitness Center's lease in April of Year 3, the monthly expense is $4,875, calculated by dividing the total lease payments ($234,000) by the total lease term (48 months).</p>
</div>
</div>`,
    },
    {
      id: "5000",
      prompt: `On June 1 of the current year, a company entered into a real estate lease agreement for a new building. The lease is an operating lease and is fully executed on that day. According to the terms of the lease, payments of $28,900 per month are scheduled to begin on October 1 of the current year and to continue each month thereafter for 56 months. The lease term spans five years. The company has a calendar year end. What amount is the company's lease expense for the current calendar year?`,
      choices: [
        `$86,700`,
        `$161,838`,
        `$188,813`,
        `$202,300`,
      ],
      correctIndex: 2,
      explanation: `<div style="background-color:white; border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); overflow:hidden"><!-- Header Section -->
<div style="background-color:#01506e; color:white; padding:20px">
<h1 style="margin-left:0; margin-right:0">Operating Lease Accounting</h1> <p style="margin-left:0; margin-right:0">Straight-Line Expense Recognition Method</p>
</div> <div style="padding:20px"><!-- Answer Summary --> <div style="background-color:#e8f5e9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px; text-align:center">
<h3>Correct Answer</h3> <div style="color:#4caf50; font-size:1.4em; font-weight:bold">$188,813</div> <p style="margin-left:0; margin-right:0">Operating lease expense for the current year</p>
</div>
<!-- Key Principle --> <div style="background-color:#e8f4fd; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Operating Lease Principle</h3> <div style="background-color:white; border-radius:8px; border:1px solid #e0e6ed; padding:15px">
<div style="margin-bottom:15px; text-align:center">
<div style="background-color:#0099d4; border-radius:8px; color:white; display:inline-block; padding:10px"><strong>Straight-Line Expense Recognition</strong></div>
</div> <p style="margin-left:0; margin-right:0; text-align:center">Operating lease expenses are recognized <strong>evenly over the entire lease term</strong>, regardless of the actual payment schedule.</p> <div style="background-color:#f0f8ff; border-left:3px solid #0099d4; border-radius:5px; margin-top:15px; padding:10px"><small>This ensures that the expense pattern reflects the even usage of the leased asset throughout the lease term.</small></div>
</div>
</div>
<!-- Problem Overview --> <div style="background-color:#f9f9f9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Lease Details</h3> <div style="background-color:white; border-radius:8px; margin-top:10px; padding:15px">
<div style="display:flex; flex-wrap:wrap; gap:20px">
<div style="flex:1; min-width:250px">
<h4>Timing Information</h4> <ul style="list-style-type:none"> <li> <strong>Lease Start:</strong> June 1 (current year)</li> <li> <strong>Payment Start:</strong> October 1 (current year)</li> <li>⏱ <strong>Lease Term:</strong> 5 years (60 months)</li> <li> <strong>Current Year:</strong> June - December (7 months)</li>
</ul>
</div> <div style="flex:1; min-width:250px">
<h4>Payment Information</h4> <ul style="list-style-type:none"> <li> <strong>Monthly Payment:</strong> $28,900</li> <li> <strong>Total Payments:</strong> 56 months</li> <li> <strong>Total Amount:</strong> $1,618,400</li> <li> <strong>Monthly Expense:</strong> $26,973.33</li>
</ul>
</div>
</div>
</div>
</div>
<!-- Timeline Visualization --> <div style="background-color:white; border-radius:8px; border:2px solid #0099d4; margin-bottom:20px; padding:15px">
<h3 style="text-align:center">Lease Timeline</h3> <div style="margin-bottom:20px; margin-left:0; margin-right:0; margin-top:20px">
<div style="align-items:center; display:flex; justify-content:space-between; margin-bottom:15px">
<div style="background-color:#68d3a7; border-radius:15px; color:white; font-size:0.9em; font-weight:bold; padding:8px 12px">Jun 1: Lease Begins</div> <div style="background-color:#ff9800; border-radius:15px; color:white; font-size:0.9em; font-weight:bold; padding:8px 12px">Oct 1: Payments Begin</div> <div style="background-color:#207bb5; border-radius:15px; color:white; font-size:0.9em; font-weight:bold; padding:8px 12px">Dec 31: Year End</div>
</div> <div style="display:flex; margin-bottom:20px; margin-left:0; margin-right:0; margin-top:20px">
<div style="background-color:#e8f5e9; border-radius:5px 0 0 5px; border-right:2px solid white; flex:4; padding:15px; text-align:center">
<div style="color:#4caf50; font-weight:bold">June - September</div> <div style="font-size:0.9em">Expense Recognition</div> <div style="color:#666666; font-size:0.8em">No Cash Payments</div>
</div> <div style="background-color:#fff3e0; border-radius:0 5px 5px 0; flex:3; padding:15px; text-align:center">
<div style="color:#ff9800; font-weight:bold">October - December</div> <div style="font-size:0.9em">Expense + Payments</div> <div style="color:#666666; font-size:0.8em">$28,900/month</div>
</div>
</div>
</div>
</div>
<!-- Step-by-Step Calculation --> <div style="margin-bottom:20px">
<h3>Step-by-Step Calculation</h3>
<!-- Step 1: Total Payments --> <div style="background-color:#f8f9fa; border-left:4px solid #68d3a7; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Step 1: Calculate Total Lease Payments</h4> <div style="background-color:white; border-radius:5px; border:1px solid #e0e6ed; margin-bottom:10px; margin-left:0; margin-right:0; margin-top:10px; padding:15px">
<div style="background-color:#f5f5f5; border-radius:3px; font-family:monospace; margin-bottom:10px; padding:10px">Total Payments = Number of Payments &times; Monthly Amount<br />
Total Payments = 56 months &times; $28,900 = <strong>$1,618,400</strong></div> <div style="background-color:#f9f9f9; border-radius:3px; color:#666666; font-size:0.9em; padding:8px"><strong>Note:</strong> 56 payments = 60 month lease term - 4 months before payments begin</div>
</div>
</div>
<!-- Step 2: Monthly Expense --> <div style="background-color:#f8f9fa; border-left:4px solid #ff9800; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Step 2: Calculate Monthly Expense (Straight-Line)</h4> <div style="background-color:white; border-radius:5px; border:1px solid #e0e6ed; margin-bottom:10px; margin-left:0; margin-right:0; margin-top:10px; padding:15px">
<div style="background-color:#f5f5f5; border-radius:3px; font-family:monospace; margin-bottom:10px; padding:10px">Monthly Expense = Total Payments &divide; Total Lease Term<br />
Monthly Expense = $1,618,400 &divide; 60 months = <strong>$26,973.33</strong></div> <div style="background-color:#f9f9f9; border-radius:3px; color:#666666; font-size:0.9em; padding:8px"><strong>Key Point:</strong> This amount is recognized every month regardless of payment schedule</div>
</div>
</div>
<!-- Step 3: Current Year Expense --> <div style="background-color:#f8f9fa; border-left:4px solid #4caf50; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Step 3: Calculate Current Year Expense</h4> <div style="background-color:white; border-radius:5px; border:1px solid #e0e6ed; margin-bottom:10px; margin-left:0; margin-right:0; margin-top:10px; padding:15px">
<div style="background-color:#f5f5f5; border-radius:3px; font-family:monospace; margin-bottom:10px; padding:10px">Months in Current Year = June through December = 7 months<br />
Current Year Expense = $26,973.33 &times; 7 months = <strong>$188,813</strong></div> <div style="background-color:#f9f9f9; border-radius:3px; color:#666666; font-size:0.9em; padding:8px"><strong>Period:</strong> June, July, August, September, October, November, December</div>
</div>
</div>
</div>
<!-- Journal Entries Section --> <div style="background-color:#f0f7fa; border-radius:8px; border:1px dashed #0099d4; margin-bottom:20px; padding:15px">
<h3>Journal Entries</h3> <div style="margin-bottom:20px">
<h4>June - September (Before Payments Begin)</h4> <p>Expense recognition without cash payment:</p> <table cellspacing="0" style="background-color:white; border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:10px 0; overflow:hidden; width:100%"> <thead> <tr> <th style="text-align:left">Account</th> <th style="text-align:right">Debit</th> <th style="text-align:right">Credit</th> </tr> </thead> <tbody> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Lease Expense</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$26,973.33</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Lease Liability</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$26,973.33</td> </tr> </tbody>
</table> <p>Recorded each month from June through September</p>
</div> <div>
<h4>October - December (Payment Period)</h4> <p>Expense recognition with cash payment:</p> <table cellspacing="0" style="background-color:white; border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:10px 0; overflow:hidden; width:100%"> <thead> <tr> <th style="text-align:left">Account</th> <th style="text-align:right">Debit</th> <th style="text-align:right">Credit</th> </tr> </thead> <tbody> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Lease Expense</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$26,973.33</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Lease Liability</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$1,926.67</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Cash</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$28,900.00</td> </tr> </tbody>
</table> <div style="background-color:#fff3e0; border-left:3px solid #ff9800; border-radius:5px; margin-top:10px; padding:10px">
<p style="margin-left:0; margin-right:0"><strong>Explanation:</strong> The $1,926.67 debit to Lease Liability represents the difference between the cash payment ($28,900) and the monthly expense ($26,973.33). This reduces the accumulated liability balance.</p>
</div>
</div>
</div>
<!-- Expense vs Payment Analysis --> <div style="background-color:white; border-radius:8px; border:2px solid #68d3a7; margin-bottom:20px; padding:15px">
<h3 style="text-align:center">Expense vs. Payment Analysis</h3> <div style="overflow-x:auto">
<table cellspacing="0" style="border-collapse:collapse; margin:10px 0; width:100%"> <thead> <tr> <th style="text-align:left">Month</th> <th style="text-align:right">Monthly Expense</th> <th style="text-align:right">Cash Payment</th> <th style="text-align:right">Liability Change</th> </tr> </thead> <tbody> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">June - Sept (4 months)</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$107,893</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$0</td> <td style="background-color:#ffebee; border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">+$107,893</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Oct - Dec (3 months)</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$80,920</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$86,700</td> <td style="background-color:#e8f5e9; border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">-$5,780</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px"><strong>Total Current Year</strong></td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right"><strong>$188,813</strong></td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right"><strong>$86,700</strong></td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right"><strong>+$102,113</strong></td> </tr> </tbody>
</table>
</div>
</div>
<!-- Key Takeaways --> <div style="background-color:#e8f5e9; border-left:5px solid #68d3a7; border-radius:8px; padding:15px">
<h3>Key Takeaways</h3> <ol> <li><strong>Straight-Line Method:</strong> Operating lease expenses are recognized evenly over the lease term, not when payments are made</li> <li><strong>Expense vs. Payment Timing:</strong> Expense recognition begins when the lease commences, regardless of payment schedule</li> <li><strong>Liability Management:</strong> When expenses exceed payments, the lease liability increases; when payments exceed expenses, it decreases</li> <li><strong>Total Lease Cost:</strong> The total expense over the lease term equals the total payments, just spread evenly</li> <li><strong>Financial Statement Impact:</strong> This method provides consistent expense recognition for better period matching</li>
</ol> <div style="background-color:white; border-radius:8px; border:2px solid #68d3a7; padding:15px; text-align:center">
<div style="color:#4caf50; font-size:1.3em; font-weight:bold">Final Answer: $188,813</div> <p style="margin-left:0; margin-right:0">Operating lease expense for current year (7 months &times; $26,973.33)</p>
</div>
</div>
</div>
</div>`,
    },
    {
      id: "4997",
      prompt: `Steam Co. acquired equipment under a finance lease for six years. Minimum lease payments were $60,000 payable annually at year-end. The interest rate was 5% with an annuity factor for six years of 5.0757. The present value of the payments was equal to the fair market value of the equipment. What amount should Steam report as interest expense at the end of the first year of the lease?`,
      choices: [
        `$0`,
        `$3,000`,
        `$15,227`,
        `$18,000`,
      ],
      correctIndex: 2,
      explanation: `<div style="font-family: 'Segoe UI', sans-serif; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
<div style="background-color:#207bb5; color: white; padding: 15px; border-radius: 10px 10px 0 0;">
<h2 style="margin: 0; color: white;">Finance Lease Interest Calculation</h2>
</div> <div style="padding: 20px; background-color: #f9f9f9; border-radius: 0 0 10px 10px;">
<div style="margin-bottom: 20px; padding: 15px; background-color: #e8f4fd; border-left: 5px solid #0099d4; border-radius: 5px;">
<p><strong>Question:</strong> Calculate the interest expense for the first year of a finance lease.</p>
<p>
<span style="text-decoration: line-through; color: #999;">$0</span><br>
<span style="text-decoration: line-through; color: #999;">$3,000</span><br>
<span style="color: #68d3a7; font-weight: bold;">✓ $15,227</span><br>
<span style="text-decoration: line-through; color: #999;">$18,000</span>
</p>
</div> <div style="margin-bottom: 25px;">
<h3 style="color: #01506e; border-bottom: 2px solid #68d3a7; padding-bottom: 5px;">Explanation</h3>
<p>To calculate the interest expense for the first year of a finance lease, we need to determine the initial lease liability and apply the interest rate.</p>
</div> <div style="margin-bottom: 25px;">
<h3 style="color: #01506e; border-bottom: 2px solid #68d3a7; padding-bottom: 5px;">Step-by-Step Analysis</h3>
<ol style="padding-left: 20px;">
<li style="margin-bottom: 10px;">Calculate the present value of the lease (initial lease liability):
<div style="background-color: #f0f9f6; padding: 10px; border-radius: 5px; margin-top: 5px;">
Present Value = Annual Payment × Annuity Factor<br>
Present Value = $60,000 × 5.0757 = <strong>$304,542</strong>
</div>
</li>
<li style="margin-bottom: 10px;">Calculate the interest expense for the first year:
<div style="background-color: #f0f9f6; padding: 10px; border-radius: 5px; margin-top: 5px;">
Interest Expense = Initial Lease Liability × Interest Rate<br>
Interest Expense = $304,542 × 5% = <strong>$15,227</strong>
</div>
</li>
</ol>
</div> <div style="margin-bottom: 25px;">
<h3 style="color: #01506e; border-bottom: 2px solid #68d3a7; padding-bottom: 5px;">Journal Entries</h3>
<p>At the inception of the lease:</p>
<table style="width: 100%; border-collapse: collapse; margin-bottom: 15px; background-color: white; border-radius: 5px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
<tr style="background-color: #4B556A; color: white;">
<th style="padding: 10px; text-align: left;">Account</th>
<th style="padding: 10px; text-align: right;">Debit</th>
<th style="padding: 10px; text-align: right;">Credit</th>
</tr>
<tr>
<td style="padding: 10px; border-bottom: 1px solid #eee;">Equipment (Right-of-Use Asset)</td>
<td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">$304,542</td>
<td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;"></td>
</tr>
<tr>
<td style="padding: 10px; border-bottom: 1px solid #eee;">Lease Liability</td>
<td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;"></td>
<td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">$304,542</td>
</tr>
</table> <p>At the end of the first year:</p>
<table style="width: 100%; border-collapse: collapse; margin-bottom: 15px; background-color: white; border-radius: 5px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
<tr style="background-color: #4B556A; color: white;">
<th style="padding: 10px; text-align: left;">Account</th>
<th style="padding: 10px; text-align: right;">Debit</th>
<th style="padding: 10px; text-align: right;">Credit</th>
</tr>
<tr>
<td style="padding: 10px; border-bottom: 1px solid #eee;">Interest Expense</td>
<td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">$15,227</td>
<td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;"></td>
</tr>
<tr>
<td style="padding: 10px; border-bottom: 1px solid #eee;">Lease Liability</td>
<td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">$44,773</td>
<td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;"></td>
</tr>
<tr>
<td style="padding: 10px; border-bottom: 1px solid #eee;">Cash</td>
<td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;"></td>
<td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">$60,000</td>
</tr>
</table>
<p><small>Note: $60,000 payment = $15,227 interest + $44,773 principal reduction</small></p>
</div> <div style="background-color: #f0f7fa; padding: 15px; border-radius: 5px; border-left: 5px solid #207bb5;">
<h3 style="color: #01506e; margin-top: 0;">Key Concept</h3>
<p>For a finance lease, interest expense is calculated by multiplying the carrying value of the lease liability at the beginning of the period by the effective interest rate (which is 5% in this case).</p>
</div> <div style="margin-top: 25px; background-color: #e8f6f1; padding: 15px; border-radius: 5px;">
<h3 style="color: #01506e; margin-top: 0;">Summary</h3>
<p>The correct interest expense amount for the first year is <strong style="color: #68d3a7;">$15,227</strong>, calculated by applying the 5% interest rate to the initial lease liability of $304,542.</p>
</div>
</div>
</div>`,
    },
    {
      id: "5001",
      prompt: `On January 1, Year 1, Blaugh Co. signed a long-term lease for an office building. The terms of the lease required Blaugh to pay $10,000 annually, beginning December 30, Year 1, and continuing each year for 30 years. The lease qualifies as a finance lease. On January 1, Year 1, the present value of the lease payments is $112,500 at the 8 percent interest rate implicit in the lease. In Blaugh's December 31, Year 1, balance sheet, the lease liability should be:`,
      choices: [
        `$102,500`,
        `$111,500`,
        `$112,500`,
        `$290,000`,
      ],
      correctIndex: 1,
      explanation: `<div style="background-color:white; border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); overflow:hidden"><!-- Header Section -->
<div style="background-color:#01506e; color:white; padding:20px">
<h1 style="margin-left:0; margin-right:0">Finance Lease Liability Calculation Analysis</h1> <p style="margin-left:0; margin-right:0">Year-End Liability Balance After Interest and Payments</p>
</div> <div style="padding:20px"><!-- Answer Summary --> <div style="background-color:#e8f5e9; border-left:5px solid #68d3a7; border-radius:8px; margin-bottom:20px; padding:15px; text-align:center">
<h3>Correct Answer</h3> <div style="color:#4caf50; font-size:1.4em; font-weight:bold">$111,500</div> <p style="margin-left:0; margin-right:0">Lease liability balance at December 31, Year 1</p>
</div>
<!-- Problem Overview --> <div style="background-color:#f9f9f9; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Problem Overview</h3> <p>Blaugh Co. entered into a finance lease and needs to determine the lease liability balance at December 31, Year 1.</p> <div style="background-color:white; border-radius:8px; margin-top:10px; padding:15px">
<h4>Key Lease Information</h4> <div style="display:flex; flex-wrap:wrap; gap:20px">
<div style="flex:1; min-width:250px">
<ul style="list-style-type:none"> <li> <strong>Lease Term:</strong> 30 years</li> <li> <strong>Annual Payment:</strong> $10,000</li> <li> <strong>Payment Date:</strong> December 30 each year</li>
</ul>
</div> <div style="flex:1; min-width:250px">
<ul style="list-style-type:none"> <li> <strong>Interest Rate:</strong> 8%</li> <li> <strong>Initial PV:</strong> $112,500</li> <li> <strong>Lease Type:</strong> Finance lease</li>
</ul>
</div>
</div>
</div>
</div>
<!-- Key Timeline --> <div style="background-color:white; border-radius:8px; border:2px solid #0099d4; margin-bottom:20px; padding:15px">
<h3 style="text-align:center">Year 1 Timeline</h3> <div style="align-items:center; display:flex; justify-content:space-between; margin-bottom:20px; margin-left:0; margin-right:0; margin-top:20px">
<div style="flex:1; text-align:center">
<div style="background-color:#68d3a7; border-radius:8px; color:white; margin-bottom:10px; padding:10px">
<div style="font-weight:bold">Jan 1, Year 1</div> <div style="font-size:0.9em">Lease Commencement</div>
</div> <div style="color:#68d3a7; font-weight:bold">$112,500</div> <div style="color:#666666; font-size:0.8em">Initial liability</div>
</div> <div style="color:#dddddd; font-size:1.5em; text-align:center">&rarr;</div> <div style="flex:1; text-align:center">
<div style="background-color:#ff9800; border-radius:8px; color:white; margin-bottom:10px; padding:10px">
<div style="font-weight:bold">During Year 1</div> <div style="font-size:0.9em">Interest Accumulation</div>
</div> <div style="color:#ff9800; font-weight:bold">+$9,000</div> <div style="color:#666666; font-size:0.8em">8% &times; $112,500</div>
</div> <div style="color:#dddddd; font-size:1.5em; text-align:center">&rarr;</div> <div style="flex:1; text-align:center">
<div style="background-color:#f44336; border-radius:8px; color:white; margin-bottom:10px; padding:10px">
<div style="font-weight:bold">Dec 30, Year 1</div> <div style="font-size:0.9em">Payment Made</div>
</div> <div style="color:#f44336; font-weight:bold">-$10,000</div> <div style="color:#666666; font-size:0.8em">Annual payment</div>
</div> <div style="color:#dddddd; font-size:1.5em; text-align:center">&rarr;</div> <div style="flex:1; text-align:center">
<div style="background-color:#4caf50; border-radius:8px; color:white; margin-bottom:10px; padding:10px">
<div style="font-weight:bold">Dec 31, Year 1</div> <div style="font-size:0.9em">Final Balance</div>
</div> <div style="color:#4caf50; font-weight:bold">$111,500</div> <div style="color:#666666; font-size:0.8em">Year-end liability</div>
</div>
</div>
</div>
<!-- Step-by-Step Calculation --> <div style="margin-bottom:20px">
<h3>Step-by-Step Calculation</h3> <div style="background-color:#f8f9fa; border-radius:8px; margin-bottom:15px; padding:15px">
<h4>Lease Liability Movement Analysis</h4> <table cellspacing="0" style="border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:15px 0; overflow:hidden; width:100%"> <thead> <tr> <th style="text-align:left">Transaction</th> <th style="text-align:right">Amount</th> <th style="text-align:right">Lease Liability Balance</th> </tr> </thead> <tbody> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Initial lease liability (Jan 1, Year 1)</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$112,500</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$112,500</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Interest expense for Year 1 (8% &times; $112,500)</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">+$9,000</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$121,500</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Less: Payment made on Dec 30, Year 1</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">-$10,000</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$121,500 - $10,000</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-top:2px solid #4caf50; border-width:1px"><strong>Lease liability at Dec 31, Year 1</strong></td> <td style="border-color:#dddddd; border-style:solid; border-top:2px solid #4caf50; border-width:1px; text-align:right">&nbsp;</td> <td style="border-color:#dddddd; border-style:solid; border-top:2px solid #4caf50; border-width:1px; text-align:right"><strong>$111,500</strong></td> </tr> </tbody>
</table>
</div>
</div>
<!-- Finance Lease Formula --> <div style="background-color:#e8f4fd; border-left:5px solid #0099d4; border-radius:8px; margin-bottom:20px; padding:15px">
<h3>Finance Lease Liability Formula</h3> <div style="background-color:white; border-radius:8px; border:1px solid #e0e6ed; padding:15px; text-align:center">
<div style="color:#01506e; font-size:1.2em; font-weight:bold; margin-bottom:15px">Ending Lease Liability =</div> <div style="align-items:center; display:flex; flex-wrap:wrap; gap:15px; justify-content:center">
<div style="background-color:#e8f5e9; border-radius:5px; font-weight:bold; padding:10px">Beginning Balance</div> <div style="color:#dddddd; font-size:1.5em">+</div> <div style="background-color:#fff3e0; border-radius:5px; font-weight:bold; padding:10px">Interest Expense</div> <div style="color:#dddddd; font-size:1.5em">-</div> <div style="background-color:#ffebee; border-radius:5px; font-weight:bold; padding:10px">Lease Payments</div>
</div> <div style="background-color:#f0f8ff; border-left:3px solid #0099d4; border-radius:5px; font-family:monospace; margin-top:15px; padding:10px">$112,500 + $9,000 - $10,000 = <strong>$111,500</strong></div>
</div>
</div>
<!-- Journal Entries Section --> <div style="background-color:#f0f7fa; border-radius:8px; border:1px dashed #0099d4; margin-bottom:20px; padding:15px">
<h3>Journal Entries for Year 1</h3> <div style="margin-bottom:20px">
<h4>January 1, Year 1 - Initial Recognition</h4> <table cellspacing="0" style="background-color:white; border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:10px 0; overflow:hidden; width:100%"> <thead> <tr> <th style="text-align:left">Account</th> <th style="text-align:right">Debit</th> <th style="text-align:right">Credit</th> </tr> </thead> <tbody> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Right-of-Use Asset</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$112,500</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Lease Liability</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$112,500</td> </tr> </tbody>
</table>
</div> <div>
<h4>December 30, Year 1 - Annual Payment</h4> <table cellspacing="0" style="background-color:white; border-collapse:collapse; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin:10px 0; overflow:hidden; width:100%"> <thead> <tr> <th style="text-align:left">Account</th> <th style="text-align:right">Debit</th> <th style="text-align:right">Credit</th> </tr> </thead> <tbody> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Interest Expense</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$9,000</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Lease Liability</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$1,000</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> </tr> <tr> <td style="border-color:#dddddd; border-style:solid; border-width:1px">Cash</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">&nbsp;</td> <td style="border-color:#dddddd; border-style:solid; border-width:1px; text-align:right">$10,000</td> </tr> </tbody>
</table> <div style="background-color:#fff3e0; border-left:3px solid #ff9800; border-radius:5px; margin-top:10px; padding:10px">
<p style="margin-left:0; margin-right:0"><strong>Note:</strong> The lease liability is reduced by only $1,000 (the principal portion), while $9,000 represents interest expense.</p>
</div>
</div>
</div>
<!-- Answer Analysis --> <div style="margin-bottom:20px">
<h3>Answer Analysis</h3> <div style="display:flex; flex-wrap:wrap; gap:12px; margin-top:15px">
<div style="background-color:#ffebee; border-left:4px solid #f44336; border-radius:8px; flex:1; min-width:180px; padding:12px">
<p style="margin-left:0; margin-right:0"><strong>A. $102,500</strong><br />
<small>Incorrect - This doesn&#39;t properly account for interest accrued during Year 1</small></p>
</div> <div style="background-color:#e8f5e9; border-left:4px solid #4caf50; border-radius:8px; flex:1; min-width:180px; padding:12px">
<p style="margin-left:0; margin-right:0"><strong>B. $111,500 ✓</strong><br />
<small>Correct - Initial liability ($112,500) + interest ($9,000) - payment ($10,000)</small></p>
</div> <div style="background-color:#ffebee; border-left:4px solid #f44336; border-radius:8px; flex:1; min-width:180px; padding:12px">
<p style="margin-left:0; margin-right:0"><strong>C. $112,500</strong><br />
<small>Incorrect - This is only the initial liability without accounting for interest and payment</small></p>
</div> <div style="background-color:#ffebee; border-left:4px solid #f44336; border-radius:8px; flex:1; min-width:180px; padding:12px">
<p style="margin-left:0; margin-right:0"><strong>D. $290,000</strong><br />
<small>Incorrect - This appears to be total future payments ($10,000 &times; 29 years remaining)</small></p>
</div>
</div>
</div>
<!-- Interest vs Principal Breakdown --> <div style="background-color:white; border-radius:8px; border:2px solid #ff9800; margin-bottom:20px; padding:15px">
<h3 style="text-align:center">Payment Breakdown Analysis</h3> <div style="align-items:center; display:flex; flex-wrap:wrap; gap:20px; justify-content:center; margin-bottom:20px; margin-left:0; margin-right:0; margin-top:20px">
<div style="background-color:#fff3e0; border-radius:8px; flex:1; min-width:200px; padding:15px; text-align:center">
<div style="color:#ff9800; font-size:1.2em; font-weight:bold; margin-bottom:5px">Interest Component</div> <div style="color:#f57c00; font-size:1.5em; font-weight:bold">$9,000</div> <div style="color:#666666; font-size:0.9em">8% &times; $112,500</div> <div style="color:#999999; font-size:0.8em">(Increases liability)</div>
</div> <div style="color:#dddddd; font-size:2em; text-align:center">vs</div> <div style="background-color:#e3f2fd; border-radius:8px; flex:1; min-width:200px; padding:15px; text-align:center">
<div style="color:#0099d4; font-size:1.2em; font-weight:bold; margin-bottom:5px">Principal Component</div> <div style="color:#01579b; font-size:1.5em; font-weight:bold">$1,000</div> <div style="color:#666666; font-size:0.9em">$10,000 - $9,000</div> <div style="color:#999999; font-size:0.8em">(Reduces liability)</div>
</div>
</div>
</div>
<!-- Key Takeaways --> <div style="background-color:#e8f5e9; border-left:5px solid #68d3a7; border-radius:8px; padding:15px">
<h3>Key Takeaways</h3> <ol> <li><strong>Interest Accrual:</strong> Finance lease liabilities accrue interest throughout the period, increasing the balance</li> <li><strong>Payment Allocation:</strong> Each payment is split between interest expense and principal reduction</li> <li><strong>Liability Reduction:</strong> Only the principal portion of payments reduces the lease liability balance</li> <li><strong>Timing Matters:</strong> Interest accrues for the full year, even though payment occurs near year-end</li> <li><strong>Effective Interest Method:</strong> Interest is calculated on the outstanding balance at the beginning of the period</li>
</ol> <div style="background-color:white; border-radius:8px; border:2px solid #68d3a7; padding:15px; text-align:center">
<div style="color:#4caf50; font-size:1.3em; font-weight:bold">Final Answer: $111,500</div> <p style="margin-left:0; margin-right:0">Lease liability balance at December 31, Year 1</p>
</div>
</div>
</div>
</div>`,
    },
  ],
};
