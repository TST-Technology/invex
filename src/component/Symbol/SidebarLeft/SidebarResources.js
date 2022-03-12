import React from 'react'

function SidebarResources () {
  return (
    <div className='card companyviewblk resource_block mb-4'>
      <div className='card-body'>
        <h5 className='mb-4'>
          <strong>Resource</strong>
        </h5>
        <ul>
          <li>
            <a href='#'>
              <img src={require('../../Common/Images/resource_1.png').default} alt='resource' />
              <span>Financial Statements</span>
              <i className='bi bi-box-arrow-up-right ms-auto'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <img src={require('../../Common/Images/resource_2.png').default} alt='resource' />
              <span>Industry Report</span>
              <i className='bi bi-box-arrow-up-right ms-auto'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <img src={require('../../Common/Images/resource_3.png').default} alt='resource' />
              <span>Financial Statistics</span>
              <i className='bi bi-box-arrow-up-right ms-auto'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <img src={require('../../Common/Images/resource_4.png').default} alt='resource' />
              <span>View SEC Filings</span>
              <i className='bi bi-box-arrow-up-right ms-auto'></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SidebarResources