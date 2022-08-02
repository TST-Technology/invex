import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import GaugeChart from 'react-gauge-chart';

const Volatility = ({ data }) => {
  const [volumeArcLength, setVolumeArcLength] = useState([]);
  const [openInterestArcLength, setOpenInterestArcLength] = useState([]);

  useEffect(() => {
    if (data && data.Volume) {
      const volume = data.Volume;

      setVolumeArcLength([
        parseFloat((volume.Calls / volume.Total).toFixed(2)),
        parseFloat((volume.Puts / volume.Total).toFixed(2)),
      ]);
    }

    if (data && data.Open_Interest) {
      const openInterest = data.Open_Interest;

      setOpenInterestArcLength([
        parseFloat((openInterest.Calls / openInterest.Total).toFixed(2)),
        parseFloat((openInterest.Puts / openInterest.Total).toFixed(2)),
      ]);
    }
  }, [data]);

  return (
    <>
      <div className='col-lg-12'>
        <div className='row'>
          <div className='col-lg-6'>
            <div>
              <h5 className='mb-4'>Volatility</h5>
              <div className='row mb-5'>
                <div className='col-lg-4 border-end'>
                  <div className='d-flex justify-content-between mb-3'>
                    <b>IV30</b>
                    <span>81.25</span>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <b>HV30</b>
                    <span>27</span>
                  </div>
                </div>
                <div className='col-lg-4 border-end'>
                  <div className='d-flex justify-content-between mb-3'>
                    <b>IV60</b>
                    <span>31.56</span>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <b>IV90</b>
                    <span>31.85</span>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='d-flex justify-content-between mb-3'>
                    <b>IV30</b>
                    <span>81.25</span>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <b>HV30</b>
                    <span>27</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h5 className='mb-4'>52 Weeks Rnge</h5>
              <div className='row mb-3'>
                <div className='col-lg-12'>
                  <div className='d-flex justify-content-between mb-3'>
                    <b>IV30</b>
                    <span>22.38 (L) - 81.25 (H)</span>
                    <b>100th Percentile</b>
                  </div>
                  <div className='d-flex justify-content-between mb-3'>
                    <b>HV30</b>
                    <span>17.86 (L) - 35.21 (H)</span>
                    <b>52th Percentile</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='guage-chart-container d-flex align-items-center justify-content-around h-100'>
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
                    {data && data.Open_Interest && data.Open_Interest.Total && (
                      <p>{data.Open_Interest.Total}</p>
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
                    {data && data.Volume && data.Volume.Total && (
                      <p>{data.Volume.Total}</p>
                    )}
                  </div>
                  <p>Puts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Volatility;
