import React from 'react';
import CompanyData from './CompanyData';
import SearchCompany from './SearchCompany';
import { CircularProgress } from '@material-ui/core';

const CompanyView = ({ Company, KeyStatus, Loading, logo }) => {
  return (
    <div className='row'>
      <div class='col-lg-12 mb-4'>
        <div className='card companyviewblk compny_left_detail'>
          <div className='card-body'>
            <div className='description-para  justify-content-between'>
              {Loading && (
                <div
                  style={{
                    height: 100,
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CircularProgress />
                </div>
              )}
              {!Loading && (
                <div className=' d-flex container alig justify-content-between'>
                  <CompanyData
                    Company={Company}
                    KeyStatus={KeyStatus}
                    logo={logo}
                  />
                  {/* <SearchCompany /> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyView;
