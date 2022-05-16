import React from 'react'
import CompanyPerfomance from './CompanyPerfomance'
import ExpectedValuation from './ExpectedValuation'
import VolatalityChart from './VolatalityChart'

const RightSide = ({DividendData}) => {
    return (
        <div className="col-lg-8">
           <CompanyPerfomance DividendData={DividendData} />
            <ExpectedValuation />
            <VolatalityChart />
        </div>
    )
}

export default RightSide