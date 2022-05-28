import React from 'react';

const OptionOpenInterestGainers = () => {
  return (
    <div className='mb-5'>
      <div className='d-flex align-items-center justify-content-between mb-4'>
        <h6 className='me-auto mb-0'>
          <strong>Option Open Interest Gainers</strong>
        </h6>
        <select
          className='form-select w-25'
          aria-label='Default select example'
        >
          <option selected>Weekly</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
      </div>
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
            <tr>
              <td>A</td>
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
          </tbody>
        </table>
      </div>
      <a href='#' className='d-block mt-2 text-end'>
        Load More....
      </a>
    </div>
  );
};

export default OptionOpenInterestGainers;