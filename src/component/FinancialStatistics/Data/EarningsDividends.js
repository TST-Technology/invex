import { CircularProgress } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import abbreviateNumber from '../../Common/NumberFormat';
import { EarningsDividendsDef } from './defination';
import CustomChart from '../../Graph/CustomChart';

const EarningsDividends = ({ data, Loading }) => {
  const [EarningsDividendsdata, setEarningsDividendsdata] = useState([]);
  const [EarningsDividendsDataAsc, setEarningsDividendsDataAsc] = useState([]);
  const [chartLabel, setChartLabel] = useState();
  const [checkedValues, setCheckedValues] = useState([]);
  const [dataSets, setDataSets] = useState([]);

  var name = [
    'EarningsDividends',
    'Dividend per share',
    'Earnings Yield',
    'Basic EPS (Not Split-Adjusted)',
    'Basic EPS',
    'Diluted GAAP EPS (Not Split-Adjusted)',
    // 'Diluted GAAP EPS',
    'Payout Ratio',
  ];

  useEffect(() => {
    if (data && data.length > 0) {
      data.sort(function (a, b) {
        return b.year - a.year || b.quarter - a.quarter;
      });

      const labels = data.map((el) => {
        const quarter = el.quarter > 0 ? 'Q' + el.quarter : '';
        return `${quarter} ${el.year}`;
      });

      setChartLabel(labels.reverse());

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
        {
          col0: name[6],
          col1: data[0]?.payoutRatio,
          col2: data[1]?.payoutRatio,
          col3: data[2]?.payoutRatio,
          col4: data[3]?.payoutRatio,
          col5: data[4]?.payoutRatio,
          col6: data[5]?.payoutRatio,
          col7: data[6]?.payoutRatio,
          col8: data[7]?.payoutRatio,
          col9: data[8]?.payoutRatio,
          col10: data[9]?.payoutRatio,
          tooltip: EarningsDividendsDef.payoutRatio,
        },
      ];
      setEarningsDividendsdata(current);

      const dataAsc = data.slice();

      dataAsc.sort(function (a, b) {
        return a.year - b.year || a.quarter - b.quarter;
      });

      var currentAsc = [
        {
          col0: name[0],
          col1: dataAsc[0]?.dividendPerShare,
          col2: dataAsc[1]?.dividendPerShare,
          col3: dataAsc[2]?.dividendPerShare,
          col4: dataAsc[3]?.dividendPerShare,
          col5: dataAsc[4]?.dividendPerShare,
          col6: dataAsc[5]?.dividendPerShare,
          col7: dataAsc[6]?.dividendPerShare,
          col8: dataAsc[7]?.dividendPerShare,
          col9: dataAsc[8]?.dividendPerShare,
          col10: dataAsc[9]?.dividendPerShare,
          tooltip: EarningsDividendsDef.dividendPerShare,
        },
        {
          col0: name[1],
          col1: dataAsc[0]?.earningsYield,
          col2: dataAsc[1]?.earningsYield,
          col3: dataAsc[2]?.earningsYield,
          col4: dataAsc[3]?.earningsYield,
          col5: dataAsc[4]?.earningsYield,
          col6: dataAsc[5]?.earningsYield,
          col7: dataAsc[6]?.earningsYield,
          col8: dataAsc[7]?.earningsYield,
          col9: dataAsc[8]?.earningsYield,
          col10: dataAsc[9]?.earningsYield,
          tooltip: EarningsDividendsDef.earningsYield,
        },
        {
          col0: name[2],
          col1: dataAsc[0]?.incomeNetPerWabso,
          col2: dataAsc[1]?.incomeNetPerWabso,
          col3: dataAsc[2]?.incomeNetPerWabso,
          col4: dataAsc[3]?.incomeNetPerWabso,
          col5: dataAsc[4]?.incomeNetPerWabso,
          col6: dataAsc[5]?.incomeNetPerWabso,
          col7: dataAsc[6]?.incomeNetPerWabso,
          col8: dataAsc[7]?.incomeNetPerWabso,
          col9: dataAsc[8]?.incomeNetPerWabso,
          col10: dataAsc[9]?.incomeNetPerWabso,
          tooltip: EarningsDividendsDef.incomeNetPerWabso,
        },
        {
          col0: name[3],
          col1: dataAsc[0]?.incomeNetPerWabsoSplitAdjusted,
          col2: dataAsc[1]?.incomeNetPerWabsoSplitAdjusted,
          col3: dataAsc[2]?.incomeNetPerWabsoSplitAdjusted,
          col4: dataAsc[3]?.incomeNetPerWabsoSplitAdjusted,
          col5: dataAsc[4]?.incomeNetPerWabsoSplitAdjusted,
          col6: dataAsc[5]?.incomeNetPerWabsoSplitAdjusted,
          col7: dataAsc[6]?.incomeNetPerWabsoSplitAdjusted,
          col8: dataAsc[7]?.incomeNetPerWabsoSplitAdjusted,
          col9: dataAsc[8]?.incomeNetPerWabsoSplitAdjusted,
          col10: dataAsc[9]?.incomeNetPerWabsoSplitAdjusted,
          tooltip: EarningsDividendsDef.incomeNetPerWabsoSplitAdjusted,
        },
        {
          col0: name[4],
          col1: dataAsc[0]?.incomeNetPerWadso,
          col2: dataAsc[1]?.incomeNetPerWadso,
          col3: dataAsc[2]?.incomeNetPerWadso,
          col4: dataAsc[3]?.incomeNetPerWadso,
          col5: dataAsc[4]?.incomeNetPerWadso,
          col6: dataAsc[5]?.incomeNetPerWadso,
          col7: dataAsc[6]?.incomeNetPerWadso,
          col8: dataAsc[7]?.incomeNetPerWadso,
          col9: dataAsc[8]?.incomeNetPerWadso,
          col10: dataAsc[9]?.incomeNetPerWadso,
          tooltip: EarningsDividendsDef.incomeNetPerWadso,
        },
        {
          col0: name[5],
          col1: dataAsc[0]?.incomeNetPerWadsoSplitAdjusted,
          col2: dataAsc[1]?.incomeNetPerWadsoSplitAdjusted,
          col3: dataAsc[2]?.incomeNetPerWadsoSplitAdjusted,
          col4: dataAsc[3]?.incomeNetPerWadsoSplitAdjusted,
          col5: dataAsc[4]?.incomeNetPerWadsoSplitAdjusted,
          col6: dataAsc[5]?.incomeNetPerWadsoSplitAdjusted,
          col7: dataAsc[6]?.incomeNetPerWadsoSplitAdjusted,
          col8: dataAsc[7]?.incomeNetPerWadsoSplitAdjusted,
          col9: dataAsc[8]?.incomeNetPerWadsoSplitAdjusted,
          col10: dataAsc[9]?.incomeNetPerWadsoSplitAdjusted,
          tooltip: EarningsDividendsDef.incomeNetPerWadsoSplitAdjusted,
        },
        {
          col0: name[6],
          col1: dataAsc[0]?.payoutRatio,
          col2: dataAsc[1]?.payoutRatio,
          col3: dataAsc[2]?.payoutRatio,
          col4: dataAsc[3]?.payoutRatio,
          col5: dataAsc[4]?.payoutRatio,
          col6: dataAsc[5]?.payoutRatio,
          col7: dataAsc[6]?.payoutRatio,
          col8: dataAsc[7]?.payoutRatio,
          col9: dataAsc[8]?.payoutRatio,
          col10: dataAsc[9]?.payoutRatio,
          tooltip: EarningsDividendsDef.payoutRatio,
        },
      ];

      setEarningsDividendsDataAsc(currentAsc);

      setCheckedValues([]);
    }
  }, [data]);

  useEffect(() => {
    setDataSets(
      checkedValues &&
        checkedValues.map((index) => {
          const row = Object.values(EarningsDividendsDataAsc[index]);
          return {
            label: row[0],
            data: row.slice(1, row.length),
            borderColor:
              'rgb(' +
              Math.floor(Math.random() * 255) +
              ',' +
              Math.floor(Math.random() * 255) +
              ',' +
              Math.floor(Math.random() * 255) +
              ')',
            backgroundColor:
              'rgba(' +
              Math.floor(Math.random() * 255) +
              ',' +
              Math.floor(Math.random() * 255) +
              ',' +
              Math.floor(Math.random() * 255) +
              ', 0.5)',
          };
        })
    );
  }, [checkedValues]);

  const onChange = (event, index) => {
    if (event.target.checked) {
      if (!checkedValues.includes(index)) {
        const tempArr = checkedValues;
        tempArr.push(index);
        setCheckedValues([...tempArr]);
      }
    } else {
      const tempArr = checkedValues;
      const i = tempArr.indexOf(index);
      if (i > -1) {
        tempArr.splice(i, 1);
      }
      setCheckedValues([...tempArr]);
    }
  };

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
                          onChange={(e) => onChange(e, i)}
                        />
                      </div>
                    </td>
                  }
                  <td>{abbreviateNumber(ob.col1)}</td>
                  <td>{abbreviateNumber(ob.col2)}</td>
                  <td>{abbreviateNumber(ob.col3)}</td>
                  <td>{abbreviateNumber(ob.col4)}</td>
                  <td>{abbreviateNumber(ob.col5)}</td>
                  <td>{abbreviateNumber(ob.col6)}</td>
                  <td>{abbreviateNumber(ob.col7)}</td>
                  <td>{abbreviateNumber(ob.col8)}</td>
                  <td>{abbreviateNumber(ob.col9)}</td>
                  <td>{abbreviateNumber(ob.col10)}</td>
                </tr>
              );
            })}
        </tbody>
      </table>

      {dataSets && dataSets.length > 0 && (
        <CustomChart
          title='Invex Chart'
          chartLables={chartLabel}
          dataSets={dataSets}
        />
      )}
    </div>
  );
};

export default EarningsDividends;