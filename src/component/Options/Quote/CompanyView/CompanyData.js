import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getVolatality } from '../../../api/Option';
const CompanyData = ({ Company, KeyStatus, logo }) => {
  return (
    <>
      <div className='logo me-5'>
        <div className='img'>
          <img src={logo} alt='image' width={60} height={60} />
        </div>
        <div className='title1'>
          <h5 className='card-title'>{Company?.companyName} </h5>
          <p className='company'>{Company?.symbol}</p>
        </div>
      </div>
      <div className='d-flex'>
        <div className='chart'>
          <div className='chart-text mt-0'>
            <p className='card-text up'>${KeyStatus?.latestPrice}</p>
            <p className='text up'>
              {KeyStatus?.change > 0 ? (
                <>{KeyStatus?.change}</>
              ) : (
                <> {KeyStatus?.change}</>
              )}{' '}
              ({KeyStatus?.changePercent}%)
            </p>
          </div>
        </div>
        <div className='chart-img me-5'>
          <img
            src={require('../../../Common/Images/graph.png').default}
            alt='graph'
          />
        </div>
      </div>
    </>
  );
};

export default CompanyData;
