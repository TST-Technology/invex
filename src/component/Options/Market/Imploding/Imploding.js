import React, { useState, useEffect } from 'react';
import { getImplodingIV } from '../../../api/OptionMarket';
import { replaceEmpty } from '../../../Common/CommonFunctions';
import moment from 'moment';
import { CircularProgress } from '@material-ui/core';

const Imploding = ({ values }) => {
  const [data, setData] = useState([]);
  const [ivFilter, setIVFilter] = useState();
  const [orderFilter, setOrderFilter] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setData(values);
  }, [values]);

  useEffect(() => {
    (async () => {
      if (ivFilter || orderFilter) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const currentDate = moment(yesterday).format('YYYY/MM/DD');
        const obj = {
          date: currentDate,
          day_list: ivFilter ? ivFilter : 30,
          order_data: orderFilter ? orderFilter : 'Weekly_change',
        };
        setIsLoading(true);
        const data = await getImplodingIV(obj);
        setData(data);
        setIsLoading(false);
      }
    })();
  }, [ivFilter, orderFilter]);

  return (
    <div className='mb-5'>
      <div className='d-flex align-items-center justify-content-between mb-4'>
        <h6 className='me-auto mb-0'>
          <strong>Imploding IV</strong>
        </h6>
        <>
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
          <select
            className='form-select w-25'
            aria-label='Default select example'
            onChange={(e) => setIVFilter(parseInt(e.target.value))}
          >
            <option selected value={30}>
              IV 30
            </option>
            <option value={60}>IV 60</option>
            <option value={90}>IV 90</option>
            <option value={120}>IV 120</option>
            <option value={150}>IV 150</option>
            <option value={180}>IV 180</option>
            <option value={360}>IV 360</option>
          </select>
        </>
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
                        <td>
                          {replaceEmpty(
                            data.Last &&
                              data.Last[index] &&
                              data.Last[index].toFixed(2)
                          )}
                        </td>
                        <td>{data.volume && data.volume[index]}</td>
                        <td>
                          <span
                            className={
                              orderFilter === 'Daily_change' ? 'down' : 'up'
                            }
                          >
                            {data['Daily_change'] &&
                              `${data['Daily_change'][index]} %`}
                          </span>
                        </td>
                        <td>
                          <span
                            className={
                              (orderFilter === 'Weekly_change') |
                              (orderFilter === '')
                                ? 'down'
                                : 'up'
                            }
                          >
                            {data['Weekly_change'] &&
                              `${data['Weekly_change'][index]} %`}
                          </span>
                        </td>
                        <td>
                          <span
                            className={
                              orderFilter === 'Monthly_change' ? 'down' : 'up'
                            }
                          >
                            {data['Monthly_change'] &&
                              `${data['Monthly_change'][index]} %`}
                          </span>
                        </td>
                        <td>
                          <span
                            className={
                              orderFilter === 'Quarterly_change' ? 'down' : 'up'
                            }
                          >
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

export default Imploding;
