import React from 'react'
import MostActiveOptions from './MostActiveOptions/MostActiveOptions';
import HighestImpliedVolatility from './HighestImpliedVolatility/HighestImpliedVolatility';
import Exploding from './Exploding/Exploding';
import Imploding from './Imploding/Imploding';
import OptionVolumeGainers from './OptionVolumeGainers/OptionVolumeGainers';
import OptionVolumeLoosers from './OptionVolumeLoosers/OptionVolumeLoosers';
import OptionOpenInterestGainers from './OptionOpenInterestGainers/OptionOpenInterestGainers';
import OptionOpenInterestLosers from './OptionOpenInterestLosers/OptionOpenInterestLosers';
import RightSideSection from './RightSideSection/RightSideSection';

const Market = () => {
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

export default Market