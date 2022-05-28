import React from 'react';
import SectorChart from './SectorChart';

const SectorsContent = ({ title, defination, ChartData }) => {
  return (
    <>
      <div className='col-lg-8'>
        <div className='row'>
          <div className='col-lg-12 mb-5'>
            <div className='card companyviewblk compprofile_block mb-5'>
              <div className='card-header'>
                <div className='d-flex align-items-center justify-content-left bg-light p-2 border-bottom-0'>
                  <h6 className='m-0'>
                    <strong>{title ? title : 'Oops! No data.'}</strong>
                  </h6>
                </div>
              </div>
              <div className='card-body'>
                <div className='description-para'>
                  <div className='key_status'>
                    <p className='mb-4'>
                      {defination ? defination : 'Oops! No data.'}
                    </p>
                    <div className='d-flex align-items-center justify-content-between'>
                      <a href='#' className='btn btn-light'>
                        Read More
                      </a>
                      <a
                        href='#'
                        className='btn btn-primary'
                        data-bs-toggle='modal'
                        data-bs-target='#filtermodal'
                      >
                        Find Investnment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-5 mb-5'>
              <h6 className='mb-4'>
                <strong>Market Cap (billions) by Industrial Sector</strong>
              </h6>
              <SectorChart data={ChartData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectorsContent;
