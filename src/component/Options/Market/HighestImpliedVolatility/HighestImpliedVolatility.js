import React, { useState, useEffect } from 'react';
import { getHighestImpliedVolatility } from '../../../api/OptionMarket';
import moment from 'moment';
import { CircularProgress } from '@material-ui/core';

const HighestImpliedVolatility = ({ values }) => {
  const [data, setData] = useState([]);
  const [ivFilter, setIVFilter] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setData(values);
  }, [values]);

  useEffect(() => {
    (async () => {
      if (ivFilter) {
        setIsLoading(true);
        // const currentDate = moment(new Date()).format('YYYY/MM/DD');
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const currentDate = moment(yesterday).format('YYYY/MM/DD');
        // const currentDate = '2022/05/20';
        const obj = { date: currentDate, day_list: ivFilter };
        const data = await getHighestImpliedVolatility(obj);
        setData(data);
        setIsLoading(false);
      }
    })();
  }, [ivFilter]);

  return (
    <div className='mb-5'>
      <div className='d-flex align-items-center justify-content-between mb-4'>
        <h6 className='me-auto mb-0'>
          <strong>Highest Implied Volatility</strong>
        </h6>
        <select
          className='form-select w-25'
          aria-label='Default select example'
          onChange={(e) => setIVFilter(e.target.value)}
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
                  <th scope='col'>1 Day Change</th>
                  <th scope='col'>Weekly Change</th>
                  <th scope='col'>Monthly Change</th>
                  <th scope='col'>Quarterly Change</th>
                </tr>
              </thead>
              <tbody className='border-top-0'>
                {data &&
                  data.Symbol &&
                  Object.values(data.Symbol).map((row, index) => {
                    return (
                      <tr key={index}>
                        <td>{data.Symbol[index]}</td>
                        <td>{data.Last[index].toFixed(2)}</td>
                        <td>{data?.volume && data?.volume[index]}</td>
                        <td>
                          <span className={'up'}>
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
};;

export default HighestImpliedVolatility;
