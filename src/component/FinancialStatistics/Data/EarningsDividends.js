import { CircularProgress } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import abbreviateNumber from '../../Common/NumberFormat';
import { EarningsDividendsDef } from './defination';

const EarningsDividends = ({ data, Loading }) => {
  const [EarningsDividendsdata, setEarningsDividendsdata] = useState([]);
  var name = [
    'EarningsDividends',
    'Dividend per share',
    'Earnings Yield',
    'Basic EPS (Not Split-Adjusted)',
    'Basic EPS',
    'Diluted GAAP EPS (Not Split-Adjusted)',
    'Diluted GAAP EPS',
    'Payout Ratio',
  ];

  useEffect(() => {
    if (data && data.length > 0) {

      data.sort(function (a, b) {
        return b.year - a.year || b.quarter - a.quarter;
      });

      var current = [
        {
          col0: name[0],
          col1: data[0]?.dividendPerShare,
          col2: data[1]?.dividendPerShare,
          col3: data[2]?.dividendPerShare,
          col4: data[3]?.dividendPerShare,
          col5: data[4]?.dividendPerShare,
          col6: data[5]?.dividendPerShare,
          col7: data[6]?.dividendPerShare,
          col8: data[7]?.dividendPerShare,
          col9: data[8]?.dividendPerShare,
          col10: data[9]?.dividendPerShare,
          tooltip: EarningsDividendsDef.dividendPerShare,
        },
        {
          col0: name[1],
          col1: data[0]?.earningsYield,
          col2: data[1]?.earningsYield,
          col3: data[2]?.earningsYield,
          col4: data[3]?.earningsYield,
          col5: data[4]?.earningsYield,
          col6: data[5]?.earningsYield,
          col7: data[6]?.earningsYield,
          col8: data[7]?.earningsYield,
          col9: data[8]?.earningsYield,
          col10: data[9]?.earningsYield,
          tooltip: EarningsDividendsDef.earningsYield,
        },
        {
          col0: name[2],
          col1: data[0]?.incomeNetPerWabso,
          col2: data[1]?.incomeNetPerWabso,
          col3: data[2]?.incomeNetPerWabso,
          col4: data[3]?.incomeNetPerWabso,
          col5: data[4]?.incomeNetPerWabso,
          col6: data[5]?.incomeNetPerWabso,
          col7: data[6]?.incomeNetPerWabso,
          col8: data[7]?.incomeNetPerWabso,
          col9: data[8]?.incomeNetPerWabso,
          col10: data[9]?.incomeNetPerWabso,
          tooltip: EarningsDividendsDef.incomeNetPerWabso,
        },
        {
          col0: name[3],
          col1: data[0]?.incomeNetPerWabsoSplitAdjusted,
          col2: data[1]?.incomeNetPerWabsoSplitAdjusted,
          col3: data[2]?.incomeNetPerWabsoSplitAdjusted,
          col4: data[3]?.incomeNetPerWabsoSplitAdjusted,
          col5: data[4]?.incomeNetPerWabsoSplitAdjusted,
          col6: data[5]?.incomeNetPerWabsoSplitAdjusted,
          col7: data[6]?.incomeNetPerWabsoSplitAdjusted,
          col8: data[7]?.incomeNetPerWabsoSplitAdjusted,
          col9: data[8]?.incomeNetPerWabsoSplitAdjusted,
          col10: data[9]?.incomeNetPerWabsoSplitAdjusted,
          tooltip: EarningsDividendsDef.incomeNetPerWabsoSplitAdjusted,
        },
        {
          col0: name[4],
          col1: data[0]?.incomeNetPerWadso,
          col2: data[1]?.incomeNetPerWadso,
          col3: data[2]?.incomeNetPerWadso,
          col4: data[3]?.incomeNetPerWadso,
          col5: data[4]?.incomeNetPerWadso,
          col6: data[5]?.incomeNetPerWadso,
          col7: data[6]?.incomeNetPerWadso,
          col8: data[7]?.incomeNetPerWadso,
          col9: data[8]?.incomeNetPerWadso,
          col10: data[9]?.incomeNetPerWadso,
          tooltip: EarningsDividendsDef.incomeNetPerWadso,
        },
        {
          col0: name[5],
          col1: data[0]?.incomeNetPerWadsoSplitAdjusted,
          col2: data[1]?.incomeNetPerWadsoSplitAdjusted,
          col3: data[2]?.incomeNetPerWadsoSplitAdjusted,
          col4: data[3]?.incomeNetPerWadsoSplitAdjusted,
          col5: data[4]?.incomeNetPerWadsoSplitAdjusted,
          col6: data[5]?.incomeNetPerWadsoSplitAdjusted,
          col7: data[6]?.incomeNetPerWadsoSplitAdjusted,
          col8: data[7]?.incomeNetPerWadsoSplitAdjusted,
          col9: data[8]?.incomeNetPerWadsoSplitAdjusted,
          col10: data[9]?.incomeNetPerWadsoSplitAdjusted,
          tooltip: EarningsDividendsDef.incomeNetPerWadsoSplitAdjusted,
        },
      ];
      setEarningsDividendsdata(current);
    }
  }, [data]);

  return (
    <div className='table-responsive mt-4'>
      <table className='table table-bordered m-0 most_tables'>
        <thead className='table-light'>
          <tr>
            <th scope='col'>-</th>
            <th scope='col'>Historical Visualisation</th>
            {data &&
              data.length > 0 &&
              data.map((el, i) => {
                return (
                  <th key={i} scope='col'>
                    {el.quarter > 0 ? 'Q' + el.quarter : ''} {el.year}
                  </th>
                );
              })}
          </tr>
        </thead>
        <tbody className='border-top-0'>
          {Loading && (
            <tr style={{ height: 100, textAlign: 'center' }}>
              <td colSpan={6} style={{ textAlign: 'center' }}>
                <CircularProgress size={50} />
              </td>
            </tr>
          )}
          {!Loading &&
            EarningsDividendsdata &&
            EarningsDividendsdata.length > 0 &&
            EarningsDividendsdata.map((ob, i) => {
              return (
                <tr key={i}>
                  {ob.col0 && (
                    <td>
                      {ob.col0}{' '}
                      <i
                        class='bi bi-info-circle m-1'
                        data-toggle='tooltip'
                        title={ob.tooltip}
                      ></i>
                    </td>
                  )}
                  {
                    <td className='float-end'>
                      <div className='form-check mb-0'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value=''
                          id=''
                        />
                      </div>
                    </td>
                  }
                  {ob.col1 && <td>{abbreviateNumber(ob.col1)}</td>}
                  {ob.col2 && <td>{abbreviateNumber(ob.col2)}</td>}
                  {ob.col3 && <td>{abbreviateNumber(ob.col3)}</td>}
                  {ob.col4 && <td>{abbreviateNumber(ob.col4)}</td>}
                  {ob.col5 && <td>{abbreviateNumber(ob.col5)}</td>}
                  {ob.col6 && <td>{abbreviateNumber(ob.col6)}</td>}
                  {ob.col7 && <td>{abbreviateNumber(ob.col7)}</td>}
                  {ob.col8 && <td>{abbreviateNumber(ob.col8)}</td>}
                  {ob.col9 && <td>{abbreviateNumber(ob.col9)}</td>}
                  {ob.col10 && <td>{abbreviateNumber(ob.col10)}</td>}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default EarningsDividends;