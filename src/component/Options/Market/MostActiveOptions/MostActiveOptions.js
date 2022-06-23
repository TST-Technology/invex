import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { replaceEmpty } from '../../../Common/commonFunctions';
import { getMostActiveOptions } from '../../../api/OptionMarket';
import { CircularProgress } from '@material-ui/core';

const MostActiveOptions = ({ values }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(values);
  }, [values]);

  return (
    <div className='mb-5'>
      <h6 className='mb-3'>
        <strong>Most Active Options</strong>
      </h6>

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
                        <span className='up'>
                          {data['Daily_change'] &&
                            `${data['Daily_change'][index]} %`}
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
    </div>
  );
};

export default MostActiveOptions;
