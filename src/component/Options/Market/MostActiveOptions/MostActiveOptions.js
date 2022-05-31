import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { getMostActiveOptions } from '../../../api/OptionMarket';

const MostActiveOptions = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      // const currentDate = moment(new Date()).format('YYYY/MM/DD');
      const currentDate = '2022/05/20';
      const obj = { date: currentDate };
      const data = await getMostActiveOptions(obj);
      console.log(data);
    })();
  }, []);

  return (
    <div className='mb-5'>
      <h6 className='mb-3'>
        <strong>Most Active Options</strong>
      </h6>
      <div className='table-responsive'>
        <table className='table table-bordered m-0 most_tables'>
          <thead className='table-light'>
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
          <tbody className='border-top-0'>
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
              <td>AA</td>
              <td>20</td>
              <td>5651245</td>
              <td>
                <span className='up'>4.00%</span>
              </td>
              <td>
                <span className='up'>4.00%</span>
              </td>
              <td>
                <span className='up'>4.00%</span>
              </td>
              <td>
                <span className='up'>4.00%</span>
              </td>
            </tr>
            <tr>
              <td>AADI</td>
              <td>20</td>
              <td>5651245</td>
              <td>
                <span className='up'>4.00%</span>
              </td>
              <td>
                <span className='up'>4.00%</span>
              </td>
              <td>
                <span className='up'>4.00%</span>
              </td>
              <td>
                <span className='up'>4.00%</span>
              </td>
            </tr>
            <tr>
              <td>AAIC</td>
              <td>20</td>
              <td>5651245</td>
              <td>
                <span className='up'>4.00%</span>
              </td>
              <td>
                <span className='up'>4.00%</span>
              </td>
              <td>
                <span className='up'>4.00%</span>
              </td>
              <td>
                <span className='up'>4.00%</span>
              </td>
            </tr>
            <tr>
              <td>AAL</td>
              <td>20</td>
              <td>5651245</td>
              <td>
                <span className='up'>4.00%</span>
              </td>
              <td>
                <span className='up'>4.00%</span>
              </td>
              <td>
                <span className='up'>4.00%</span>
              </td>
              <td>
                <span className='up'>4.00%</span>
              </td>
            </tr>
            <tr>
              <td>AAN</td>
              <td>20</td>
              <td>5651245</td>
              <td>
                <span className='up'>4.00%</span>
              </td>
              <td>
                <span className='up'>4.00%</span>
              </td>
              <td>
                <span className='up'>4.00%</span>
              </td>
              <td>
                <span className='up'>4.00%</span>
              </td>
            </tr>
            <tr>
              <td>AAOI</td>
              <td>20</td>
              <td>5651245</td>
              <td>
                <span className='up'>4.00%</span>
              </td>
              <td>
                <span className='up'>4.00%</span>
              </td>
              <td>
                <span className='up'>4.00%</span>
              </td>
              <td>
                <span className='up'>4.00%</span>
              </td>
            </tr>
            <tr>
              <td>AAON</td>
              <td>20</td>
              <td>5651245</td>
              <td>
                <span className='up'>4.00%</span>
              </td>
              <td>
                <span className='up'>4.00%</span>
              </td>
              <td>
                <span className='up'>4.00%</span>
              </td>
              <td>
                <span className='up'>4.00%</span>
              </td>
            </tr>
            <tr>
              <td>AAP</td>
              <td>20</td>
              <td>5651245</td>
              <td>
                <span className='up'>4.00%</span>
              </td>
              <td>
                <span className='up'>4.00%</span>
              </td>
              <td>
                <span className='up'>4.00%</span>
              </td>
              <td>
                <span className='up'>4.00%</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <a href='#' className='d-block mt-2 text-end'>
        Load More....
      </a>
    </div>
  );
};

export default MostActiveOptions;
