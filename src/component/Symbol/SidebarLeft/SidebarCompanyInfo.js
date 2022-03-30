import React, { useState } from 'react'

function SidebarCompanyInfo({ Company }) {

  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className='card companyviewblk compprofile_block mb-4'>
        <div className='card-body'>
          <div className='description-para' style={showMore ? { maxHeight: "none", overflow: "visible" } : { maxHeight: "380px", overflow: "hidden" }}>
            <h5 className='mb-4'>
              <strong>Company Info</strong>
            </h5>
            <div className='key_status'>
              <p>
                {Company?.description}
              </p>
              <ul>
                <li>
                  <a href='javascript:void(0)'>Website</a>{' '}
                  <span>{Company?.website}</span>
                </li>
                <li>
                  <a href='javascript:void(0)'>CEO</a> <span>{Company?.CEO}</span>
                </li>
                <li>
                  <a href='javascript:void(0)'>Employees</a> <span>{Company?.employees}</span>
                </li>
                <li>
                  <a href='javascript:void(0)'>Country</a>{' '}
                  <span>{Company?.country}</span>
                </li>
                <li>
                  <a href='javascript:void(0)'>State</a>{' '}
                  <span>{Company?.state}</span>
                </li>
                <li>
                  <a href='javascript:void(0)'>City</a>{' '}
                  <span>{Company?.city}</span>
                </li>
                <li>
                  <a href='javascript:void(0)'>Zip</a>{' '}
                  <span>{Company?.zip}</span>
                </li>
                <li>
                  <a href='javascript:void(0)'>Phone</a>{' '}
                  <span>{Company?.phone}</span>
                </li>
              </ul>

            </div>
          </div>
          <button className='text-primary readmore' onClick={() => setShowMore(!showMore)} style={showMore ? { display: 'none' } : {}}>Read More </button>
          <button className='text-primary readless' onClick={() => setShowMore(!showMore)} style={showMore ? {} : { display: 'none' }}>
            Read Less{' '}
          </button>
        </div>
      </div>
      <div className='card companyviewblk compprofile_block mb-4'>
        <div className='card-body'>
          <h5 className='mb-4'>
            <strong>Industry Tags</strong>
          </h5>
          <div className='tags-list'>
            <ul>
              {Company?.tags && Company?.tags.map((tag) => {
                return (
                  <li>
                    <a className='Industry-tag' href='javascript:void(0)'>{tag}</a>{' '}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default SidebarCompanyInfo
