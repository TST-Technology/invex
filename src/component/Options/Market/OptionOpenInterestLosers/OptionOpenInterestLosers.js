import React, { useState, useEffect } from 'react';
import { getOptionOpenInterestLosers } from '../../../api/OptionMarket';
import moment from 'moment';
import { CircularProgress } from '@material-ui/core';

const OptionOpenInterestLosers = ({ values }) => {
  const [data, setData] = useState([]);
  const [orderFilter, setOrderFilter] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setData(values);
  }, [values]);

  useEffect(() => {
    (async () => {
      if (orderFilter) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const currentDate = moment(yesterday).format('YYYY/MM/DD');
        const obj = { date: currentDate, order_data: orderFilter };
        setIsLoading(true);
        const data = await getOptionOpenInterestLosers(obj);
        setIsLoading(false);
        setData(data);
      }
    })();
  }, [orderFilter]);

  return (
    <div className='mb-5'>
      <div className='d-flex align-items-center justify-content-between mb-4'>
        <h6 className='me-auto mb-0'>
          <strong>Option Open Interest Losers</strong>
        </h6>
        <select
          className='form-select w-25 me-3'
          aria-label='Default select example'
          onChange={(e) => setOrderFilter(e.target.value)}
        >
          <option value='Daily_change'>Daily</option>
          <option selected value={'Weekly_change'}>
            Weekly
          </option>
          <option value='Monthly_change'>Monthly</option>
          <option value='Quarterly_change'>Quarterly</option>
        </select>
      </div>

      {!isLoading && (
        <>
          <div className='table-responsive'>
            <table className='table table-bordered m-0 most_tables'>
              <thead className='table-light'>
                <tr>
                  <th scope='col'>Symbol</th>
                  <th scope='col'>Last</th>
                  <th scope='col'>Volume</th>
                  <th
                    scope='col'
                    className={orderFilter === 'Daily_change' ? 'fw-bold' : ''}
                  >
                    1 Day Change
                  </th>
                  <th
                    scope='col'
                    className={
                      (orderFilter === 'Weekly_change') | (orderFilter === '')
                        ? 'fw-bold'
                        : ''
                    }
                  >
                    Weekly Change
                  </th>
                  <th
                    scope='col'
                    className={
                      orderFilter === 'Monthly_change' ? 'fw-bold' : ''
                    }
                  >
                    Monthly Change
                  </th>
                  <th
                    scope='col'
                    className={
                      orderFilter === 'Quarterly_change' ? 'fw-bold' : ''
                    }
                  >
                    Quarterly Change
                  </th>
                </tr>
              </thead>
              <tbody className='border-top-0'>
                {data &&
                  data.Symbol &&
                  Object.values(data.Symbol).map((row, index) => {
                    return (
                      <tr key={index}>
                        <td>{data.Symbol && data.Symbol[index]}</td>
                        <td>{data.Last && data.Last[index].toFixed(2)}</td>
                        <td>{data.volume && data.volume[index]}</td>
                        <td>
                          <span className='up'>
                            {data['1_day_change'] &&
                              `${data['1_day_change'][index]} %`}
                          </span>
                        </td>
                        <td>
                          <span className='up'>
                            {data['Weekly_change'] &&
                              `${data['Weekly_change'][index]} %`}
                          </span>
                        </td>
                        <td>
                          <span className='up'>
                            {data['Monthly_change'] &&
                              `${data['Monthly_change'][index]} %`}
                          </span>
                        </td>
                        <td>
                          <span className='up'>
                            {data['Quarterly_change'] &&
                              `${data['Quarterly_change'][index]} %`}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <a href='#' className='d-block mt-2 text-end'>
            Load More....
          </a>
        </>
      )}

      {isLoading && (
        <div
          style={{
            height: 443,
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default OptionOpenInterestLosers;
