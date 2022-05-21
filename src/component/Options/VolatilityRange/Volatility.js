import React from 'react';
import { CircularProgress } from '@material-ui/core';

const Volatility = ({ Options, Loading }) => {
  return (
    <>
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
      {!Loading && Options && Options.Volatility && (
        <div className='row mb-5'>
          <div className='col-lg-6'>
            <div className='table-responsive'>
              <h6 className='m-0 mb-2'>
                <strong>Volatility</strong>
              </h6>
              <table className='table table-bordered border-0 m-0 mb-3 most_tables'>
                <tbody>
                  <tr className='border-0'>
                    <td>IV30</td>
                    <td>{Options.Volatility.IV30}</td>
                    <td>
                      <b>IV60</b>
                    </td>
                    <td>{Options.Volatility.IV60}</td>
                    <td>
                      <b>IV90</b>
                    </td>
                    <td>{Options.Volatility.IV90}</td>
                  </tr>
                </tbody>
              </table>
              <h6 className='m-0 mb-2'>
                <strong>52 Weeks Rnge</strong>
              </h6>
              <table className='table table-bordered border-0 m-0 most_tables'>
                <tbody>
                  <tr className='border-0'>
                    <td>IV30</td>
                    <td>
                      {Options['52_Week_Range'].IV30.Low} (L) -{' '}
                      {Options['52_Week_Range'].IV30.High}(H)
                    </td>
                    <td>
                      <b>100th Percentile</b>
                    </td>
                  </tr>
                  <tr className='border-0'>
                    <td>HV30</td>
                    <td>
                      {Options['52_Week_Range'].HV30.Low} (L) -{' '}
                      {Options['52_Week_Range'].HV30.High} (H)
                    </td>
                    <td>
                      <b>52th Percentile</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='col-lg-6'>
            <img
              src={require('../../Common/Images/options-aapl-1.png').default}
              className='img-fluid'
              alt='options'
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Volatility;
