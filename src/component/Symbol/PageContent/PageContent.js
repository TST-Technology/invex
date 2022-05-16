import React from 'react'
import LeftSidebar from './LeftSideBar/LeftSidebar'
import RightSide from './RightSide/RightSide'

const PageContent = ({Company, DividendData}) => {
  return (
    <div className="col-lg-12">
    <div className="row">
        <LeftSidebar Company={Company}/>
        <RightSide  DividendData={DividendData} /> 
    </div>
</div>
  )
}

export default PageContent