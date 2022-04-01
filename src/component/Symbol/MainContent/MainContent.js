import React from 'react'
import CompanyNews from './CompanyNews'
import Competitors from './Competitors'
import Dividends from './Dividends'
import ExpectedValuation from './ExpectedValuation'
import FinancialPerformanceChart from './FinancialPerformanceChart'
import PriceChart from './PriceChart'
import VolatilityChart from './VolatilityChart'
function MainContent ({KeyStatus,DividendData,NewsData}) {
  return (
    <div className='col-lg-8'>
      <PriceChart />
      <div className='row'>
        <FinancialPerformanceChart />
        <Dividends DividendData={DividendData}/>
      </div>
      <ExpectedValuation />
      <VolatilityChart />
      <CompanyNews NewsData={NewsData}/>
      <Competitors KeyStatus={KeyStatus}/>
    </div>
  )
}

export default MainContent
