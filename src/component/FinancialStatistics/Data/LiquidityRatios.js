import { CircularProgress } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import abbreviateNumber from '../../Common/NumberFormat';
import { LiquidityRatioDef } from './defination';
import CustomChart from '../../Graph/CustomChart';

const LiquidityRatios = ({ data, Loading }) => {
  const [LiquidityRatiosdata, setLiquidityRatiosdata] = useState([]);
  const [chartLabel, setChartLabel] = useState();
  const [checkedValues, setCheckedValues] = useState([]);
  const [dataSets, setDataSets] = useState([]);

  var name = [
    'Current Ratio',
    'Quick Ratio',
    'Equity Multiplier',
    'Preferred Equity to Total Capital',
    'Interest Coverage',
    'Operating Cash Flow Interest Coverage Ratio',
    'Interest Burden',
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

      setChartLabel(labels);

      var current = [
        {
          col0: name[0],
          col1: data[0]?.currentRatio,
          col2: data[1]?.currentRatio,
          col3: data[2]?.currentRatio,
          col4: data[3]?.currentRatio,
          col5: data[4]?.currentRatio,
          col6: data[5]?.currentRatio,
          col7: data[6]?.currentRatio,
          col8: data[7]?.currentRatio,
          col9: data[8]?.currentRatio,
          col10: data[9]?.currentRatio,
          tooltip: LiquidityRatioDef.currentRatio,
        },
        {
          col0: name[1],
          col1: data[0]?.quickRatio,
          col2: data[1]?.quickRatio,
          col3: data[2]?.quickRatio,
          col4: data[3]?.quickRatio,
          col5: data[4]?.quickRatio,
          col6: data[5]?.quickRatio,
          col7: data[6]?.quickRatio,
          col8: data[7]?.quickRatio,
          col9: data[8]?.quickRatio,
          col10: data[9]?.quickRatio,
          tooltip: LiquidityRatioDef.quickRatio,
        },
        {
          col0: name[2],
          col1: data[0]?.assetsToEquity,
          col2: data[1]?.assetsToEquity,
          col3: data[2]?.assetsToEquity,
          col4: data[3]?.assetsToEquity,
          col5: data[4]?.assetsToEquity,
          col6: data[5]?.assetsToEquity,
          col7: data[6]?.assetsToEquity,
          col8: data[7]?.assetsToEquity,
          col9: data[8]?.assetsToEquity,
          col10: data[9]?.assetsToEquity,
          tooltip: LiquidityRatioDef.assetsToEquity,
        },
        {
          col0: name[3],
          col1: data[0]?.preferredEquityToCapital,
          col2: data[1]?.preferredEquityToCapital,
          col3: data[2]?.preferredEquityToCapital,
          col4: data[3]?.preferredEquityToCapital,
          col5: data[4]?.preferredEquityToCapital,
          col6: data[5]?.preferredEquityToCapital,
          col7: data[6]?.preferredEquityToCapital,
          col8: data[7]?.preferredEquityToCapital,
          col9: data[8]?.preferredEquityToCapital,
          col10: data[9]?.preferredEquityToCapital,
          tooltip: LiquidityRatioDef.preferredEquityToCapital,
        },
        {
          col0: name[4],
          col1: data[0]?.ebitToInterestExpense,
          col2: data[1]?.ebitToInterestExpense,
          col3: data[2]?.ebitToInterestExpense,
          col4: data[3]?.ebitToInterestExpense,
          col5: data[4]?.ebitToInterestExpense,
          col6: data[5]?.ebitToInterestExpense,
          col7: data[6]?.ebitToInterestExpense,
          col8: data[7]?.ebitToInterestExpense,
          col9: data[8]?.ebitToInterestExpense,
          col10: data[9]?.ebitToInterestExpense,
          tooltip: LiquidityRatioDef.ebitToInterestExpense,
        },
        {
          col0: name[5],
          col1: data[0]?.operatingCashFlowInterestCoverage,
          col2: data[1]?.operatingCashFlowInterestCoverage,
          col3: data[2]?.operatingCashFlowInterestCoverage,
          col4: data[3]?.operatingCashFlowInterestCoverage,
          col5: data[4]?.operatingCashFlowInterestCoverage,
          col6: data[5]?.operatingCashFlowInterestCoverage,
          col7: data[6]?.operatingCashFlowInterestCoverage,
          col8: data[7]?.operatingCashFlowInterestCoverage,
          col9: data[8]?.operatingCashFlowInterestCoverage,
          col10: data[9]?.operatingCashFlowInterestCoverage,
          tooltip: LiquidityRatioDef.operatingCashFlowInterestCoverage,
        },
        {
          col0: name[6],
          col1: data[0]?.interestBurden,
          col2: data[1]?.interestBurden,
          col3: data[2]?.interestBurden,
          col4: data[3]?.interestBurden,
          col5: data[4]?.interestBurden,
          col6: data[5]?.interestBurden,
          col7: data[6]?.interestBurden,
          col8: data[7]?.interestBurden,
          col9: data[8]?.interestBurden,
          col10: data[9]?.interestBurden,
          tooltip: LiquidityRatioDef.interestBurden,
        },
      ];
      setLiquidityRatiosdata(current);

      setCheckedValues([]);
    }
  }, [data]);

  useEffect(() => {
    setDataSets(
      checkedValues &&
        checkedValues.map((index) => {
          const row = Object.values(LiquidityRatiosdata[index]);
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
            LiquidityRatiosdata &&
            LiquidityRatiosdata.length > 0 &&
            LiquidityRatiosdata.map((ob, i) => {
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

export default LiquidityRatios;