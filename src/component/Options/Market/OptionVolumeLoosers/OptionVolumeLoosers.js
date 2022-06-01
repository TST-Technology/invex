import React, { useState, useEffect } from 'react';
import { getOptionVolumeLoosers } from '../../../api/OptionMarket';

const OptionVolumeLoosers = () => {
  const [data, setData] = useState([]);
  const [orderFilter, setOrderFilter] = useState('Weekly_change');

  useEffect(() => {
    (async () => {
      // const currentDate = moment(new Date()).format('YYYY/MM/DD');
      const currentDate = '2022/05/20';
      const obj = { date: currentDate, order_data: orderFilter };
      const data = await getOptionVolumeLoosers(obj);
      setData(data);
      console.log(data);
    })();
  }, [orderFilter]);

  return (
    <div class='mb-5'>
      <div class='d-flex align-items-center justify-content-between mb-4'>
        <h6 class='me-auto mb-0'>
          <strong>Option Volume Loosers</strong>
        </h6>
        <select
          className='form-select w-25 me-3'
          aria-label='Default select example'
          onChange={(e) => setOrderFilter(e.target.value)}
        >
          <option selected value={'Weekly_change'}>
            Weekly
          </option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
      </div>
      <div class='table-responsive'>
        <table class='table table-bordered m-0 most_tables'>
          <thead class='table-light'>
            <tr>
              <th scope='col'>Suymbol</th>
              <th scope='col'>Last</th>
              <th scope='col'>Volume</th>
              <th scope='col'>1 Day Change</th>
              <th scope='col'>Weekly Change</th>
              <th scope='col'>Monthly Change</th>
              <th scope='col'>Quarterly Change</th>
            </tr>
          </thead>
          <tbody class='border-top-0'>
            {data &&
              data.map((row) => {
                return (
                  <tr>
                    <td>{row.Symbol}</td>
                    <td>{row.Last}</td>
                    <td>{row.volume}</td>
                    <td>
                      <span className={row['1_day_change'] > 0 ? 'up' : 'down'}>
                        {row['1_day_change']}%
                      </span>
                    </td>
                    <td>
                      <span
                        className={row['Weekly_change'] > 0 ? 'up' : 'down'}
                      >
                        {row['Weekly_change']}%
                      </span>
                    </td>
                    <td>
                      <span
                        className={row['Monthly_change'] > 0 ? 'up' : 'down'}
                      >
                        {row['Monthly_change']}%
                      </span>
                    </td>
                    <td>
                      <span
                        className={row['Quarterly_change'] > 0 ? 'up' : 'down'}
                      >
                        {row['Quarterly_change']}%
                      </span>
                    </td>
                  </tr>
                );
              })}
            <tr>
              <td>A</td>
              <td>20</td>
              <td>5651245</td>
              <td>
                <span class='up'>4.00%</span>
              </td>
              <td>
                <span class='down'>4.00%</span>
              </td>
              <td>
                <span class='up'>4.00%</span>
              </td>
              <td>
                <span class='up'>4.00%</span>
              </td>
            </tr>
            <tr>
              <td>AA</td>
              <td>20</td>
              <td>5651245</td>
              <td>
                <span class='up'>4.00%</span>
              </td>
              <td>
                <span class='down'>4.00%</span>
              </td>
              <td>
                <span class='up'>4.00%</span>
              </td>
              <td>
                <span class='up'>4.00%</span>
              </td>
            </tr>
            <tr>
              <td>AADI</td>
              <td>20</td>
              <td>5651245</td>
              <td>
                <span class='up'>4.00%</span>
              </td>
              <td>
                <span class='down'>4.00%</span>
              </td>
              <td>
                <span class='up'>4.00%</span>
              </td>
              <td>
                <span class='up'>4.00%</span>
              </td>
            </tr>
            <tr>
              <td>AAIC</td>
              <td>20</td>
              <td>5651245</td>
              <td>
                <span class='up'>4.00%</span>
              </td>
              <td>
                <span class='down'>4.00%</span>
              </td>
              <td>
                <span class='up'>4.00%</span>
              </td>
              <td>
                <span class='up'>4.00%</span>
              </td>
            </tr>
            <tr>
              <td>AAL</td>
              <td>20</td>
              <td>5651245</td>
              <td>
                <span class='up'>4.00%</span>
              </td>
              <td>
                <span class='down'>4.00%</span>
              </td>
              <td>
                <span class='up'>4.00%</span>
              </td>
              <td>
                <span class='up'>4.00%</span>
              </td>
            </tr>
            <tr>
              <td>AAN</td>
              <td>20</td>
              <td>5651245</td>
              <td>
                <span class='up'>4.00%</span>
              </td>
              <td>
                <span class='down'>4.00%</span>
              </td>
              <td>
                <span class='up'>4.00%</span>
              </td>
              <td>
                <span class='up'>4.00%</span>
              </td>
            </tr>
            <tr>
              <td>AAOI</td>
              <td>20</td>
              <td>5651245</td>
              <td>
                <span class='up'>4.00%</span>
              </td>
              <td>
                <span class='down'>4.00%</span>
              </td>
              <td>
                <span class='up'>4.00%</span>
              </td>
              <td>
                <span class='up'>4.00%</span>
              </td>
            </tr>
            <tr>
              <td>AAON</td>
              <td>20</td>
              <td>5651245</td>
              <td>
                <span class='up'>4.00%</span>
              </td>
              <td>
                <span class='down'>4.00%</span>
              </td>
              <td>
                <span class='up'>4.00%</span>
              </td>
              <td>
                <span class='up'>4.00%</span>
              </td>
            </tr>
            <tr>
              <td>AAP</td>
              <td>20</td>
              <td>5651245</td>
              <td>
                <span class='up'>4.00%</span>
              </td>
              <td>
                <span class='down'>4.00%</span>
              </td>
              <td>
                <span class='up'>4.00%</span>
              </td>
              <td>
                <span class='up'>4.00%</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <a href='#' class='d-block mt-2 text-end'>
        Load More....
      </a>
    </div>
  );
};

export default OptionVolumeLoosers;
