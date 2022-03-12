import React from 'react'
import CompanyNews from './CompanyNews'
import Competitors from './Competitors'
import Dividends from './Dividends'
import ExpectedValuation from './ExpectedValuation'
import FinancialPerformanceChart from './FinancialPerformanceChart'
import PriceChart from './PriceChart'
import VolatilityChart from './VolatilityChart'
function MainContent () {
  return (
    <div className='col-lg-8'>
      <PriceChart />
      <div className='row'>
        <FinancialPerformanceChart />
        <Dividends />
      </div>
      <ExpectedValuation />
      <VolatilityChart />
      <CompanyNews />
      <Competitors />
    </div>
  )
}

export default MainContent
