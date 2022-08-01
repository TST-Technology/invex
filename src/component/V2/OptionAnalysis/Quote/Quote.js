import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getVolatality } from '../../../api/Option';
import { getNDayBeforeDate } from '../../../Common/CommonFunctions';
import VolatilityIndex from './VolatilityIndex/VolatilityIndex';
import OptionAnalysisImg from '../../../Common/Images/option-analysis-img-1.png';
import OptionImg2 from '../../../Common/Images/options-aapl-2.png';
import OptionImg3 from '../../../Common/Images/options-aapl-3.png';
import VolatilityChart from './VolatilityChart/VolatilityChart';
import OptionVolumeChart from '../OptionVolumeChart/OptionVolumeChart';
import { CircularProgress } from '@material-ui/core';

const Quote = () => {
  const { symbol } = useParams();
  const [quoteData, setQuoteData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (symbol) {
      getQuoteData();
    }
  }, [symbol]);

  const getQuoteData = async () => {
    let i = 1;
    setLoading(true);
    do {
      if (quoteData) {
        setQuoteData(null);
      }
      try {
        const tempDate = getNDayBeforeDate(i);
        var volatility = await getVolatality(symbol, tempDate);
        if (volatility) {
          setQuoteData(volatility);
          setLoading(false);
          break;
        }
      } catch (error) {
        setQuoteData(null);
        i++;
      }
    } while (i <= 15 && !quoteData);
  };

  return (
    <>
      {loading && (
        <div
          style={{
            height: 450,
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </div>
      )}

      {!loading && quoteData && (
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
                  <div className='row mb-5'>
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
                <div>
                  <img src={OptionAnalysisImg} alt='Option Analysis' />
                </div>
              </div>
            </div>
          </div>

          <VolatilityIndex data={quoteData} />

          <VolatilityChart data={quoteData} />

          <OptionVolumeChart data={quoteData} />
        </>
      )}
    </>
  );
};

export default Quote;
