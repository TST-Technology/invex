import React from 'react';
import abbreviateNumber from '../Common/NumberFormat';

const PrepareTable = ({ colData, data, onChange, headingName = '-' }) => {
  return (
    <div className='mb-5'>
      <div className='table-responsive'>
        {data && (
          <table className='table table-bordered table-striped m-0 most_tables'>
            <thead>
              <tr>
                <th scope='col'>{headingName}</th>
                <th scope='col'>Historical Visualization</th>
                {colData &&
                  colData.map((row, index) => {
                    return (
                      <th key={index} scope='col'>
                        {row?.column}
                      </th>
                    );
                  })}
              </tr>
            </thead>
            <tbody className='border-top-0'>
              {data.map((row, index) => {
                return (
                  <tr key={index}>
                    <td>{row?.heading}</td>
                    <td>
                      <div className='form-check float-end'>
                        <input
                          key={row['col1']}
                          className='form-check-input'
                          type='checkbox'
                          defaultValue
                          id='flexCheckChecked'
                          onChange={(e) => onChange(e, row.key)}
                        />
                      </div>
                    </td>
                    {data &&
                      data.map((value, i) => {
                        return (
                          <td key={i}>{abbreviateNumber(row[`col${i}`])}</td>
                        );
                      })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PrepareTable;
