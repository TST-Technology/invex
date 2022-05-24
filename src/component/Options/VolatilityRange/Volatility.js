import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import GaugeChart from 'react-gauge-chart';

const Volatility = ({ Options, Loading }) => {
  const [volumeArcLength, setVolumeArcLength] = useState([]);
  const [openInterestArcLength, setOpenInterestArcLength] = useState([]);

  useEffect(() => {
    if (Options && Options.Volume) {
      const volume = Options.Volume;

      setVolumeArcLength([
        parseFloat((volume.Calls / volume.Total).toFixed(2)),
        parseFloat((volume.Puts / volume.Total).toFixed(2)),
      ]);
    }

    if (Options && Options.Open_Interest) {
      const openInterest = Options.Open_Interest;

      setOpenInterestArcLength([
        parseFloat((openInterest.Calls / openInterest.Total).toFixed(2)),
        parseFloat((openInterest.Puts / openInterest.Total).toFixed(2)),
      ]);
    }
  }, [Options]);

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
            {/* <img
              src={require('../../Common/Images/options-aapl-1.png').default}
              className='img-fluid'
              alt='options'
            /> */}

            <div className='d-flex'>
              <div className='text-center'>
                <GaugeChart
                  id='guage-chart1'
                  textColor='transparent'
                  arcWidth={0.1}
                  nrOfLevels={2}
                  arcsLength={openInterestArcLength}
                  colors={['#62A51B', '#E24D23']}
                  percent={openInterestArcLength[0]}
                  arcPadding={0.01}
                  text
                />
                <div
                  className='d-flex justify-content-around'
                  style={{ marginTop: '-13px' }}
                >
                  <p>Calls</p>
                  <div>
                    <b> Open Interest </b>
                    {Options &&
                      Options.Open_Interest &&
                      Options.Open_Interest.Total && (
                        <p>{Options.Open_Interest.Total}</p>
                      )}
                  </div>
                  <p>Puts</p>
                </div>
              </div>

              <div className='text-center'>
                <GaugeChart
                  id='guage-chart1'
                  textColor='transparent'
                  arcWidth={0.1}
                  nrOfLevels={2}
                  arcsLength={volumeArcLength}
                  colors={['#62A51B', '#E24D23']}
                  percent={volumeArcLength[0]}
                  arcPadding={0.01}
                  text
                />

                <div
                  className='d-flex justify-content-around'
                  style={{ marginTop: '-13px' }}
                >
                  <p>Calls</p>
                  <div>
                    <b> Volume </b>
                    {Options && Options.Volume && Options.Volume.Total && (
                      <p>{Options.Volume.Total}</p>
                    )}
                  </div>
                  <p>Puts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Volatility;
