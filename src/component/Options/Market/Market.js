import React, { useState, useEffect } from 'react';
import MostActiveOptions from './MostActiveOptions/MostActiveOptions';
import HighestImpliedVolatility from './HighestImpliedVolatility/HighestImpliedVolatility';
import Exploding from './Exploding/Exploding';
import Imploding from './Imploding/Imploding';
import OptionVolumeGainers from './OptionVolumeGainers/OptionVolumeGainers';
import OptionVolumeLoosers from './OptionVolumeLoosers/OptionVolumeLoosers';
import OptionOpenInterestGainers from './OptionOpenInterestGainers/OptionOpenInterestGainers';
import OptionOpenInterestLosers from './OptionOpenInterestLosers/OptionOpenInterestLosers';
import RightSideSection from './RightSideSection/RightSideSection';
import { getDefaultMarketOption } from '../../api/OptionMarket';

const Market = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      // const currentDate = moment(new Date()).format('YYYY/MM/DD');
      const currentDate = '2022/05/20';
      const obj = { date: currentDate };
      const data = await getDefaultMarketOption(obj);
      console.log(data);
    })();
  }, []);

  return (
    <>
      <div class='row'>
        <div class='col-lg-8'>
          <MostActiveOptions />
          <HighestImpliedVolatility />
          <Exploding />
          <Imploding />
          <OptionVolumeGainers />
          <OptionVolumeLoosers />
          <OptionOpenInterestGainers />
          <OptionOpenInterestLosers />
        </div>
        <div class='col-lg-4'>
          <RightSideSection />
        </div>
      </div>
    </>
  );
};

export default Market;
