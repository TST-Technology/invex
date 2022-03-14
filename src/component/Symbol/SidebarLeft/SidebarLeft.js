import React from 'react'
import SidebarCompanyInfo from './SidebarCompanyInfo'
import SidebarCompanyStats from './SidebarCompanyStats'
import SidebarResources from './SidebarResources'

function SidebarLeft ({Company}) {
  return (
    <div className='col-lg-4'>
      <SidebarCompanyStats Company={Company}/>
      <SidebarResources Company={Company}/>
      <SidebarCompanyInfo Company={Company}/>
    </div>
  )
}

export default SidebarLeft
