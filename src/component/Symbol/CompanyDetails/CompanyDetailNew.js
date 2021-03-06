import React from 'react';
import AppleLogo from '../../Common/Images/image1.png';

const CompanyDetailNew = ({ data }) => {
  return (
    <>
      {data && (
        <div className='col-lg-12'>
          {/* company left details box start */}
          <div className='card companyviewblk v2 compny_left_detail border-0 pb-3 border-bottom mb-2'>
            <div className='card-body p-0 pb-3'>
              <div className='logo'>
                <div className='img'>
                  <img
                    style={{ width: '50px', height: '50px' }}
                    src={data?.image}
                    alt='image'
                  />
                </div>
                <div className='title1 me-3'>
                  <h5 className='card-title'>{data?.companyName} </h5>
                  <p className='company'>{data?.symbol}</p>
                </div>
                <div className='d-flex'>
                  <div className='chart mb-1 mt-2 me-3'>
                    <div className='chart-text'>
                      <p
                        className={`card-text ${
                          data?.changesPercentage > 0 ? 'up' : 'down'
                        }`}
                      >
                        $ {data?.price.toFixed(2)}
                      </p>
                      <p
                        className={`${
                          data?.changesPercentage > 0 ? 'up' : 'down'
                        }`}
                      >
                        <> {data?.change.toFixed(2)}</> (
                        {data?.changesPercentage.toFixed(2)}%)
                      </p>
                    </div>
                    <span>At close: -</span>
                  </div>
                  <div className='chart mb-1 mt-2'>
                    <div className='chart-text'>
                      <p className='card-text border-0 ps-0'>
                        {data?.prePostMarketTrade?.price
                          ? `$${data?.prePostMarketTrade?.price.toFixed(2)}`
                          : ''}
                      </p>
                      <p className='text down'>- (-)</p>
                    </div>
                    <span>After hours: -</span>
                  </div>
                </div>
                <p className='m-0 mt-0 realtimeprice ms-4'>
                  {data?.exchange}- Real Time Price. <br />
                  Currency in {data?.currency}
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
                  <a href='#'>{data?.sector}</a>
                </span>
                <span className='badge bg-white text-dark'>
                  <label>Industry:</label>
                  <a href='#'> {data?.industry}</a>
                </span>
              </div>
            </div>
          </div>
          {/* company left details box end */}
        </div>
      )}
    </>
  );
};

export default CompanyDetailNew;
