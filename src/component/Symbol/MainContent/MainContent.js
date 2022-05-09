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
      <PriceChart CompanyName={KeyStatus?.companyName}/>
      <div className='row'>
        <FinancialPerformanceChart />
        <Dividends DividendData={DividendData}/>
      </div>
      <ExpectedValuation />
      <VolatilityChart />
      <Competitors KeyStatus={KeyStatus}/>
      <CompanyNews NewsData={NewsData}/>
    </div>
  )
}

export default MainContent
