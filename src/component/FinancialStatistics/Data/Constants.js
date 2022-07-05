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
