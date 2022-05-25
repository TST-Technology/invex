import React from 'react'
import CompanyPerfomance from './CompanyPerfomance'
import ExpectedValuation from './ExpectedValuation'
import VolatalityChart from './VolatalityChart'

const RightSide = ({ DividendData, Options, Loading }) => {
  return (
    <div className='col-lg-8'>
      <CompanyPerfomance DividendData={DividendData} />
      <ExpectedValuation />
      <VolatalityChart Options={Options} Loading={Loading} />
    </div>
  );
};

export default RightSide