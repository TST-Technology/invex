import React from 'react'
import LeftSidebar from './LeftSideBar/LeftSidebar'
import RightSide from './RightSide/RightSide'

const PageContent = ({ Company, DividendData, Options, Loading }) => {
  return (
    <div className='col-lg-12'>
      <div className='row'>
        <LeftSidebar Company={Company} />
        <RightSide
          DividendData={DividendData}
          Options={Options}
          Loading={Loading}
        />
      </div>
    </div>
  );
};

export default PageContent