export const dailyTreasuryRates = [
  { label: 'DGS30', value: '30 Year constant maturity rate' },
  { label: 'DGS20', value: '20 Year constant maturity rate' },
  { label: 'DGS10', value: '10 Year constant maturity rate' },
  { label: 'DGS7', value: '7 Year constant maturity rate' },
  { label: 'DGS5', value: '5 Year constant maturity rate' },
  { label: 'DGS3', value: '3 Year constant maturity rate' },
  { label: 'DGS2', value: '2 Year constant maturity rate' },
  { label: 'DGS1', value: '1 Year constant maturity rate' },
  { label: 'DGS6MO', value: '6 Month constant maturity rate' },
  { label: 'DGS3MO', value: '3 Month constant maturity rate' },
  { label: 'DGS1MO', value: '1 Month constant maturity rate' },
];

export const oilPrices = [
  {
    label: 'DCOILWTICO',
    value:
      'Crude oil West Texas Intermediate - in dollars per barrel, not seasonally adjusted',
  },
  {
    label: 'DCOILBRENTEU',
    value:
      'Crude oil Brent Europe - in dollars per barrel, not seasonally adjusted',
  },
];

export const naturalGasPrices = [
  {
    label: 'DHHNGSP',
    value:
      'Henry Hub Natural Gas Spot Price - in dollars per million BTU, not seasonally adjusted',
  },
];

export const heatingOilPrices = [
  {
    label: 'DHOILNYH',
    value:
      'No. 2 Heating Oil New York Harbor - in dollars per gallon, not seasonally adjusted',
  },
];

export const jetFuelPrices = [
  {
    label: 'DJFUELUSGULF',
    value:
      'Kerosense Type Jet Fuel US Gulf Coast - in dollars per gallon, not seasonally adjusted',
  },
];

export const dieselPrices = [
  {
    label: 'GASDESW',
    value:
      'US Diesel Sales Price - in dollars per gallon, not seasonally adjusted',
  },
];

export const gasPrices = [
  {
    label: 'GASREGCOVW',
    value:
      'US Regular Conventional Gas Price - in dollars per gallon, not seasonally adjusted',
  },
  {
    label: 'GASMIDCOVW',
    value:
      'US Midgrade Conventional Gas Price - in dollars per gallon, not seasonally adjusted',
  },
  {
    label: 'GASPRMCOVW',
    value:
      'US Premium Conventional Gas Price - in dollars per gallon, not seasonally adjusted',
  },
];

export const propanePrices = [
  {
    label: 'DPROPANEMBTX',
    value:
      'Propane Prices Mont Belvieu Texas - in dollars per gallon, not seasonally adjusted',
  },
];

export const consumerPriceIndex = [
  { label: 'CPIAUCSL', value: 'Consumer Price Index All Urban Consumers' },
];

export const federalFundRates = [
  { label: 'FEDFUNDS', value: 'Effective federal funds rate' },
];

export const realGDP = [
  { label: 'A191RL1Q225SBEA', value: 'Real Gross Domestic Product' },
];

export const institutionalMoneyFunds = [
  {
    label: 'WIMFSL',
    value:
      'Institutional money funds returned as billions of dollars, seasonally adjusted',
  },
];

export const initialClaims = [
  { label: 'IC4WSA', value: 'Returned as a number, seasonally adjusted' },
];

export const industrialProductionIndex = [
  { label: 'INDPRO', value: 'Industrial Production Index' },
];

export const totalHousingStarts = [
  {
    label: 'HOUST',
    value:
      'Total Housing Starts in thousands of units, seasonally adjusted annual rate',
  },
];

export const totalPayrolls = [
  {
    label: 'PAYEMS',
    value:
      'Total nonfarm employees in thousands of persons seasonally adjusted',
  },
];

export const totalVehicleSales = [
  { label: 'TOTALSA', value: 'Total Vehicle Sales in millions of units' },
];

export const retailMoneyFunds = [
  {
    label: 'WRMFSL',
    value:
      'Retail money funds returned as billions of dollars, seasonally adjusted',
  },
];

export const unemploymentRate = [
  {
    label: 'UNRATE',
    value: 'Unemployment rate returned as a percent, seasonally adjusted',
  },
];

export const uSRecessionProbabilities = [
  {
    label: 'RECPROUSM156N',
    value:
      'US Recession Probabilities. Smoothed recession probabilities for the United States are obtained from a dynamic-factor markov-switching model applied to four monthly coincident variables: non-farm payroll employment, the index of industrial production, real personal income excluding transfer payments, and real manufacturing and trade sales.',
  },
];

export const cDRates = [
  {
    label: 'MMNRNJ',
    value: 'CD Rate Non-Jumbo less than $100,000 Money market',
  },
  { label: 'MMNRJD', value: 'CD Rate Jumbo more than $100,000 Money market' },
];

export const creditCardInterestRate = [
  {
    label: 'TERMCBCCALLNS',
    value:
      'Commercial bank credit card interest rate as a percent, not seasonally adjusted',
  },
];

export const mortgageRates = [
  { label: 'MORTGAGE30US', value: 'US 30-Year fixed rate mortgage average' },
  { label: 'MORTGAGE15US', value: 'US 15-Year fixed rate mortgage average' },
  {
    label: 'MORTGAGE5US',
    value: 'US 5/1-Year adjustable rate mortgage average',
  },
];

export const allDropdownOptions = {
  'Daily Treasury Rates': dailyTreasuryRates,
  'Oil Prices': oilPrices,
  'Natural Gas Prices': naturalGasPrices,
  'Heating Oil Prices': heatingOilPrices,
  'Jet Fuel Prices': jetFuelPrices,
  'Diesel Prices': dieselPrices,
  'Gas Prices': gasPrices,
  'Propane Prices': propanePrices,
  'Consumer Price Index': consumerPriceIndex,
  'Federal Fund Rates': federalFundRates,
  'Real GDP': realGDP,
  'Institutional Money Funds': institutionalMoneyFunds,
  'Initial Claims': initialClaims,
  'Industrial Production Index': industrialProductionIndex,
  'Total Housing Starts': totalHousingStarts,
  'Total Payrolls': totalPayrolls,
  'Total Vehicle Sales': totalVehicleSales,
  'Retail Money Funds': retailMoneyFunds,
  'Unemployment Rate': unemploymentRate,
  'US Recession Probabilities': uSRecessionProbabilities,
  'CD Rates': cDRates,
  'Credit Card Interest Rate': creditCardInterestRate,
  'Mortgage Rates': mortgageRates,
};
