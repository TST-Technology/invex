export const TYPE = {
  balanceSheet: { label: 'Balance Sheet', value: 'BALANCE_SHEET' },
  incomeStatement: { label: 'Income Statement', value: 'INCOME_STATEMENT' },
  cashFlow: { label: 'Cash Flow', value: 'CASH_FLOW' },
};

// export const BALANCE_SHEET_COLUMNS = [
//   'cashAndCashEquivalents',
//   'shortTermInvestments',
//   'cashAndShortTermInvestments',
//   'netReceivables',
//   'inventory',
//   'otherCurrentAssets',
//   'totalCurrentAssets',
//   'propertyPlantEquipmentNet',
//   'goodwill',
//   'intangibleAssets',
//   'goodwillAndIntangibleAssets',
//   'longTermInvestments',
//   'taxAssets',
//   'otherNonCurrentAssets',
//   'totalNonCurrentAssets',
//   'otherAssets',
//   'totalAssets',
//   'accountPayables',
//   'shortTermDebt',
//   'taxPayables',
//   'deferredRevenue',
//   'otherCurrentLiabilities',
//   'totalCurrentLiabilities',
//   'longTermDebt',
//   'deferredRevenueNonCurrent',
//   'deferredTaxLiabilitiesNonCurrent',
//   'otherNonCurrentLiabilities',
//   'totalNonCurrentLiabilities',
//   'otherLiabilities',
//   'capitalLeaseObligations',
//   'totalLiabilities',
//   'preferredStock',
//   'commonStock',
//   'retainedEarnings',
//   'accumulatedOtherComprehensiveIncomeLoss',
//   'othertotalStockholdersEquity',
//   'totalStockholdersEquity',
//   'totalLiabilitiesAndStockholdersEquity',
//   'minorityInterest',
//   'totalEquity',
//   'totalLiabilitiesAndTotalEquity',
//   'totalInvestments',
//   'totalDebt',
//   'netDebt',
// ];

export const CURRENT_ASSETS_COLUMNS = [
  { key: 'cashAndCashEquivalents', label: 'Cash And Cash Equivalents' },
  { key: 'shortTermInvestments', label: 'Short Term Investments' },
  {
    key: 'cashAndShortTermInvestments',
    label: 'Cash And Short Term Investments',
  },
  { key: 'netReceivables', label: 'Net Receivables' },
  { key: 'inventory', label: 'Inventory' },
  { key: 'otherCurrentAssets', label: 'Other Current Assets' },
  { key: 'totalCurrentAssets', label: 'Total Current Assets' },
];

export const NON_CURRENT_ASSETS_COLUMNS = [
  { key: 'propertyPlantEquipmentNet', label: 'Property Plant Equipment Net' },
  { key: 'goodwill', label: 'Goodwill' },
  { key: 'intangibleAssets', label: 'Intangible Assets' },
  {
    key: 'goodwillAndIntangibleAssets',
    label: 'Goodwill And Intangible Assets',
  },
  { key: 'longTermInvestments', label: 'Long Term Investments' },
  { key: 'taxAssets', label: 'Tax Assets' },

  { key: 'otherNonCurrentAssets', label: 'Other Non Current Assets' },

  { key: 'totalNonCurrentAssets', label: 'Total Non Current Assets' },

  { key: 'otherAssets', label: 'Other Assets' },

  { key: 'totalAssets', label: 'Total Assets' },
];

export const CURRENT_LIABILITIES_COLUMNS = [
  { key: 'accountPayables', label: 'Account Payables' },

  { key: 'shortTermDebt', label: 'Short Term Debt' },

  { key: 'taxPayables', label: 'Tax Payables' },

  { key: 'deferredRevenue', label: 'Deferred Revenue' },

  { key: 'otherCurrentLiabilities', label: 'Other Current Liabilities' },

  { key: 'totalCurrentLiabilities', label: 'Total Current Liabilities' },
];

export const NON_CURRENT_LIABILITIES_COLUMNS = [
  { key: 'longTermDebt', label: 'Long Term Debt' },

  { key: 'deferredRevenueNonCurrent', label: 'Deferred Revenue Non Current' },

  {
    key: 'deferredTaxLiabilitiesNonCurrent',
    label: 'Deferred Tax Liabilities Non Current',
  },

  { key: 'otherNonCurrentLiabilities', label: 'Other Non Current Liabilities' },

  { key: 'totalNonCurrentLiabilities', label: 'Total Non Current Liabilities' },

  { key: 'otherLiabilities', label: 'Other Liabilities' },

  { key: 'capitalLeaseObligations', label: 'Capital Lease Obligations' },

  { key: 'totalLiabilities', label: 'Total Liabilities' },
];

export const SHAREHOLDERS_EQUITY_COLUMNS = [
  { key: 'preferredStock', label: 'preferredStock' },

  { key: 'commonStock', label: 'commonStock' },

  { key: 'retainedEarnings', label: 'retainedEarnings' },

  {
    key: 'accumulatedOtherComprehensiveIncomeLoss',
    label: 'accumulatedOtherComprehensiveIncomeLoss',
  },

  {
    key: 'othertotalStockholdersEquity',
    label: 'othertotalStockholdersEquity',
  },

  { key: 'totalStockholdersEquity', label: 'totalStockholdersEquity' },

  {
    key: 'totalLiabilitiesAndStockholdersEquity',
    label: 'totalLiabilitiesAndStockholdersEquity',
  },

  { key: 'minorityInterest', label: 'minorityInterest' },

  { key: 'totalEquity', label: 'totalEquity' },

  {
    key: 'totalLiabilitiesAndTotalEquity',
    label: 'totalLiabilitiesAndTotalEquity',
  },
];

export const OTHER_BALANCE_COLUMN = [
  { key: 'totalInvestments', label: 'totalInvestments' },
  { key: 'totalDebt', label: 'totalDebt' },
  { key: 'netDebt', label: 'netDebt' },
];

export const BALANCE_SHEET_COLUMNS = [
  ...CURRENT_ASSETS_COLUMNS,
  ...NON_CURRENT_ASSETS_COLUMNS,
  ...CURRENT_LIABILITIES_COLUMNS,
  ...NON_CURRENT_LIABILITIES_COLUMNS,
  ...SHAREHOLDERS_EQUITY_COLUMNS,
  ...OTHER_BALANCE_COLUMN,
];

export const INCOME_STATEMENT_COLUMNS = [
  { key: 'costOfRevenue', label: 'costOfRevenue' },

  { key: 'grossProfit', label: 'grossProfit' },

  { key: 'grossProfitRatio', label: 'grossProfitRatio' },

  {
    key: 'researchAndDevelopmentExpenses',
    label: 'researchAndDevelopmentExpenses',
  },

  {
    key: 'generalAndAdministrativeExpenses',
    label: 'generalAndAdministrativeExpenses',
  },

  { key: 'sellingAndMarketingExpenses', label: 'sellingAndMarketingExpenses' },

  {
    key: 'sellingGeneralAndAdministrativeExpenses',
    label: 'sellingGeneralAndAdministrativeExpenses',
  },

  { key: 'otherExpenses', label: 'otherExpenses' },

  { key: 'operatingExpenses', label: 'operatingExpenses' },

  { key: 'costAndExpenses', label: 'costAndExpenses' },

  { key: 'interestIncome', label: 'interestIncome' },

  { key: 'interestExpense', label: 'interestExpense' },

  { key: 'depreciationAndAmortization', label: 'depreciationAndAmortization' },

  { key: 'ebitda', label: 'ebitda' },

  { key: 'ebitdaratio', label: 'ebitdaratio' },

  { key: 'operatingIncome', label: 'operatingIncome' },

  { key: 'operatingIncomeRatio', label: 'operatingIncomeRatio' },

  { key: 'totalOtherIncomeExpensesNet', label: 'totalOtherIncomeExpensesNet' },

  { key: 'incomeBeforeTax', label: 'incomeBeforeTax' },

  { key: 'incomeBeforeTaxRatio', label: 'incomeBeforeTaxRatio' },

  { key: 'incomeTaxExpense', label: 'incomeTaxExpense' },

  { key: 'netIncome', label: 'netIncome' },

  { key: 'netIncomeRatio', label: 'netIncomeRatio' },

  { key: 'eps', label: 'eps' },

  { key: 'epsdiluted', label: 'epsdiluted' },

  { key: 'weightedAverageShsOut', label: 'weightedAverage Shs Out' },

  { key: 'weightedAverageShsOutDil', label: 'weighted Average Shs Out Dil' },
];
