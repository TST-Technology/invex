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
import { CircularProgress } from '@material-ui/core';
import moment from 'moment';
import { getOneDayBeforeDate } from '../../Common/CommonFunctions';

const Market = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      // const yesterday = new Date();
      // yesterday.setDate(yesterday.getDate() - 2);
      // const currentDate = moment(yesterday).format('YYYY/MM/DD');
      const currentDate = getOneDayBeforeDate();
      const obj = { date: currentDate };
      const data = await getDefaultMarketOption(obj);
      setData(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      {isLoading && (
        <div
          style={{
            height: 450,
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </div>
      )}

      {!isLoading && (
        <div class='row'>
          <div class='col-lg-8'>
            <MostActiveOptions values={data.mao} />
            <HighestImpliedVolatility values={data.hiv} />
            <Exploding values={data.ei} />
            <Imploding values={data.ii} />
            <OptionVolumeGainers values={data.ovg} />
            <OptionVolumeLoosers values={data.ovl} />
            <OptionOpenInterestGainers values={data.ooig} />
            <OptionOpenInterestLosers values={data.ooil} />
          </div>
          <div class='col-lg-4'>
            <RightSideSection />
          </div>
        </div>
      )}
    </>
  );
};

export default Market;
