import React from 'react'
import CompanyInfo from './CompanyInfo'
import IndustryTags from './IndustryTags'
import Resource from './Resource'

const LeftSidebar = ({Company}) => {
  return (
    <div className="col-lg-4">
            <CompanyInfo Company={Company}/>
            <IndustryTags Company={Company}/>
            <Resource Company={Company}/>
        </div>
  )
}

export default LeftSidebar