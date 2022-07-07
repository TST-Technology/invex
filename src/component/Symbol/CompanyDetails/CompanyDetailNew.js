import React from 'react';
import AppleLogo from '../../Common/Images/image1.png';

const CompanyDetailNew = () => {
  return (
    <div className='col-lg-12'>
      {/* company left details box start */}
      <div className='card companyviewblk v2 compny_left_detail border-0 pb-3 border-bottom mb-5'>
        <div className='card-body p-0 pb-3'>
          <div className='logo'>
            <div className='img'>
              <img src={AppleLogo} alt='image' />
            </div>
            <div className='title1 me-3'>
              <h5 className='card-title'>APPLE INC </h5>
              <p className='company'>AAPL</p>
            </div>
            <div className='d-flex'>
              <div className='chart mb-1 mt-2 me-3'>
                <div className='chart-text'>
                  <p className='card-text up'>$235.49</p>
                  <p className='text up'>+3.10 (+1.3%)</p>
                </div>
                <span>At close: May 4 04:00PM EDT</span>
              </div>
              <div className='chart mb-1 mt-2'>
                <div className='chart-text'>
                  <p className='card-text border-0 ps-0'>$235.49</p>
                  <p className='text down'>-0.25 (-0.15%)</p>
                </div>
                <span>After hours: May 4, 07:59PM EDT</span>
              </div>
            </div>
            <p className='m-0 mt-0 realtimeprice ms-4'>
              Nasdaq- Real Time Price. <br />
              Currency in USD
            </p>
            <div>
              <a href className='btn btn-outline-dark ms-4'>
                <i
                  className='bi bi-bookmark me-1'
                  style={{ verticalAlign: 'middle' }}
                />{' '}
                Add to Wishlist
              </a>
            </div>
          </div>
          <div className='sector_industry'>
            <span className='badge bg-white text-dark'>
              <label>Sector:</label>
              <a href='#'> Information Technology</a>
            </span>
            <span className='badge bg-white text-dark'>
              <label>Industry:</label>
              <a href='#'> Technology Hardware, Storage &amp; Peripherals</a>
            </span>
          </div>
        </div>
      </div>
      {/* company left details box end */}
    </div>
  );
};

export default CompanyDetailNew;
