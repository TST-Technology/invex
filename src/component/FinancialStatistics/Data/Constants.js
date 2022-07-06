export const TYPE = {
  capitalStructure: { label: 'Capital Structure', value: 'CAPITAL_STRUCTURE' },
  pricing: { label: 'Pricing', value: 'PRICING' },
  efficiencyRatios: { label: 'Efficiency Ratios', value: 'EFFICIENCY_RATIOS' },
  returns: { label: 'Returns', value: 'RETURNS' },
  margins: { label: 'Margins', value: 'MARGINS' },
  //   Growth,
  leverageRatios: { label: 'Leverage Ratios', value: 'LEVERAGE_RATIOS' },
  liquidityRatios: { label: 'Liquidity Ratios', value: 'LIQUIDITY_RATIOS' },
  earningsDividends: {
    label: 'Earnings Dividends',
    value: 'EARNINGS_DIVIDENDS',
  },
  cashFlowRatios: { label: 'Cash Flow Ratios', value: 'CASHFLOW_RATIOS' },
};

export const YEAR_FILTER = [
  { label: '5 Year', value: 5 },
  { label: '10 Year', value: 10 },
  { label: 'Max', value: 30 },
];

export const PERIOD_FILTER = [
  { label: 'Annual', value: 'annual' },
  { label: 'Quarterly', value: 'quarter' },
];

export const CAPITAL_STRUCTURE_COLUMNS = [
  {
    key: 'bookValuePerShare',
    label: 'Book Value Per Share',
    tooltip: `The ratio of equity available to common shareholders divided by the total number of existing shares is known as book value per share (BVPS). This number calculates a company's book value per share and serves as the minimal measure of its equity.`,
  },
  {
    key: 'capexPerShare',
    label: 'Capex Per Share',
    tooltip: `The amount of capital expenditure per share incurred by the corporation to maintain its operating assets is known as capital expenditure per share. It is determined by dividing the capital expenditure from the statement of cash flows by the typical number of outstanding shares for the same time period.`,
  },
  {
    key: 'capexToDepreciation',
    label: 'Capex To Depreciation',
    tooltip: `It is Capex/Depreciation`,
  },
  {
    key: 'capexToOperatingCashFlow',
    label: 'Capex To Operating Cash Flow',
    tooltip: `The CAPEX to Operating Cash Ratio measures how much of an organization's operating cash flow is going toward capital expenditures. Such investments comprise taking on capital-intensive initiatives like introducing a new product line, expanding a production facility, or organizing a division.`,
  },
  {
    key: 'capexToRevenue',
    label: 'Capex To Revenue',
    tooltip: `The Capex to Revenue ratio measures a company's investments in property, plant, equipment, and other capital assets to its total sales. The ratio shows how aggressively the company is re-investing its revenue back into productive assets.`,
  },
  {
    key: 'capitalExpenditureCoverageRatio',
    label: 'Capital Expenditure Coverage Ratio',
    tooltip: `=CapitalExpenditure/OperatingCashFlow​
The greater the operating cash flow coverage for these items, along with providing the company with more cash flow to expand its business, weather tough times, and not be burdened by debt servicing and the restrictions typically included in credit agreements, the greater the company's ability to meet its obligations.`,
  },
  {
    key: 'effectiveTaxRate',
    label: 'Effective Tax Rate',
    tooltip: `=Income Before Tax/Provision For Income Taxes​
The percentage of income that an individual or corporation pays in taxes is known as the effective tax rate.`,
  },
  {
    key: 'enterpriseValue',
    label: 'Enterprise Value',
    tooltip: `An alternative to stock market capitalization that is more comprehensive is enterprise value (EV), a measurement of a company's whole worth. EV calculates a company's market capitalization as well as its short- and long-term debt, as well as any cash on its balance sheet.`,
  },
  {
    key: 'intangiblesToTotalAssets',
    label: 'Intangibles To Total Assets',
    tooltip: `=Intangible Asset/Total Asset`,
  },
  {
    key: 'investedCapital',
    label: 'Invested Capital',
    tooltip: `The total amount of money raised by a company through the sale of securities to equity investors and debt to bondholders is known as invested capital, and it is calculated by adding the total amount of debt and capital lease obligations to the amount of equity given to investors.`,
  },
  {
    key: 'marketCap',
    label: 'Market Cap',
    tooltip: `Market cap—or market capitalization—refers to the total value of all a company's shares of stock. It is calculated by multiplying the price of a stock by its total number of outstanding shares.`,
  },
  {
    key: 'netCurrentAssetValue',
    label: 'Net Current Asset Value',
    tooltip: `The total of all current assets minus the total of all current liabilities equals net current assets. Net current assets should be positive because this means that there are enough current assets on hand to cover all current liabilities. A business may be experiencing financial troubles and will likely require new capital soon if the net amount is negative.`,
  },
  {
    key: 'revenuePerShare',
    label: 'Revenue Per Share',
    tooltip: `Revenue per share is a ratio that determines the total sales made per share for a certain time period, such as the preceding twelve months, quarterly, semi-annually, or annually (TTM). It is determined by dividing total income by the average number of outstanding shares. Another name for it is "revenue per share."`,
  },
  {
    key: 'stockBasedCompensationToRevenue',
    label: 'Stock Based Compensation To Revenue',
    tooltip: `=Stock Based Compensation/Revenue`,
  },
  {
    key: 'tangibleAssetValue',
    label: 'Tangible Asset Value',
    tooltip: `Cash, inventory, vehicles, equipment, buildings, and investments are examples of tangible assets that are physical in nature. Accounts receivable, pre-paid expenses, patents, and goodwill are examples of intangible assets that do not have a physical form.`,
  },
  {
    key: 'tangibleBookValuePerShare',
    label: 'Tangible Book Value Per Share',
    tooltip: `The value of a company's tangible assets divided by the number of shares it currently has outstanding results in tangible book value per share (TBVPS). TBVPS calculates a company's possible share price in the event that it has to sell its assets. Tangible assets include things like machinery and real estate.`,
  },
  {
    key: 'workingCapital',
    label: 'Working Capital',
    tooltip: `The difference between a company's current assets—such as cash, accounts receivable/unpaid invoices from customers, and inventories of raw materials and completed goods—and its current liabilities—such as debts and accounts payable—is known as working capital, sometimes known as net working capital (NWC).`,
  },
];

export const CAPITAL_STRUCTURE_COLUMNS_1 = [
  {
    key: '',
    label: 'Book Value Per Share',
    tooltip: `The ratio of equity available to common shareholders divided by the total number of existing shares is known as book value per share (BVPS). This number calculates a company's book value per share and serves as the minimal measure of its equity.`,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
];

export const CAPITAL_STRUCTURE_COLUMNS_2 = [
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
];

export const CAPITAL_STRUCTURE_COLUMNS_3 = [
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
];

export const CAPITAL_STRUCTURE_COLUMNS_4 = [
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
];

export const CAPITAL_STRUCTURE_COLUMNS_5 = [
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
];

export const CAPITAL_STRUCTURE_COLUMNS_6 = [
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
];

export const CAPITAL_STRUCTURE_COLUMNS_7 = [
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
];

export const CAPITAL_STRUCTURE_COLUMNS_8 = [
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
  {
    key: '',
    label: '',
    tooltip: ``,
  },
];
