import { CircularProgress } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import abbreviateNumber from '../../Common/NumberFormat';
import { LeverageRatioDef } from './defination';
import CustomChart from '../../Graph/CustomChart';

const LeverageRatio = ({ data, Loading }) => {
  const [LeverageRatiodata, setLeverageRatiodata] = useState([]);
  const [chartLabel, setChartLabel] = useState();
  const [checkedValues, setCheckedValues] = useState([]);
  const [dataSets, setDataSets] = useState([]);

  var name = [
    'Debt to Assets',
    'Debt to Capital Ratio',
    'Debt to EBITDA Ratio',
    'Debt to Equity (average)',
    'Net Debt to EBITDA Ratio',
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
          col1: data[0]?.debtToAssets,
          col2: data[1]?.debtToAssets,
          col3: data[2]?.debtToAssets,
          col4: data[3]?.debtToAssets,
          col5: data[4]?.debtToAssets,
          col6: data[5]?.debtToAssets,
          col7: data[6]?.debtToAssets,
          col8: data[7]?.debtToAssets,
          col9: data[8]?.debtToAssets,
          col10: data[9]?.debtToAssets,
          tooltip: LeverageRatioDef.debtToAssets,
        },
        {
          col0: name[1],
          col1: data[0]?.debtToCapitalization,
          col2: data[1]?.debtToCapitalization,
          col3: data[2]?.debtToCapitalization,
          col4: data[3]?.debtToCapitalization,
          col5: data[4]?.debtToCapitalization,
          col6: data[5]?.debtToCapitalization,
          col7: data[6]?.debtToCapitalization,
          col8: data[7]?.debtToCapitalization,
          col9: data[8]?.debtToCapitalization,
          col10: data[9]?.debtToCapitalization,
          tooltip: LeverageRatioDef.debtToCapitalization,
        },
        {
          col0: name[2],
          col1: data[0]?.debtToEbitda,
          col2: data[1]?.debtToEbitda,
          col3: data[2]?.debtToEbitda,
          col4: data[3]?.debtToEbitda,
          col5: data[4]?.debtToEbitda,
          col6: data[5]?.debtToEbitda,
          col7: data[6]?.debtToEbitda,
          col8: data[7]?.debtToEbitda,
          col9: data[8]?.debtToEbitda,
          col10: data[9]?.debtToEbitda,
          tooltip: LeverageRatioDef.debtToEbitda,
        },
        {
          col0: name[3],
          col1: data[0]?.debtToEquity,
          col2: data[1]?.debtToEquity,
          col3: data[2]?.debtToEquity,
          col4: data[3]?.debtToEquity,
          col5: data[4]?.debtToEquity,
          col6: data[5]?.debtToEquity,
          col7: data[6]?.debtToEquity,
          col8: data[7]?.debtToEquity,
          col9: data[8]?.debtToEquity,
          col10: data[9]?.debtToEquity,
          tooltip: LeverageRatioDef.debtToEquity,
        },
        {
          col0: name[4],
          col1: data[0]?.netDebtToEbitda,
          col2: data[1]?.netDebtToEbitda,
          col3: data[2]?.netDebtToEbitda,
          col4: data[3]?.netDebtToEbitda,
          col5: data[4]?.netDebtToEbitda,
          col6: data[5]?.netDebtToEbitda,
          col7: data[6]?.netDebtToEbitda,
          col8: data[7]?.netDebtToEbitda,
          col9: data[8]?.netDebtToEbitda,
          col10: data[9]?.netDebtToEbitda,
          tooltip: LeverageRatioDef.netDebtToEbitda,
        },
      ];
      setLeverageRatiodata(current);

      setCheckedValues([]);
    }
  }, [data]);

  useEffect(() => {
    setDataSets(
      checkedValues &&
        checkedValues.map((index) => {
          const row = Object.values(LeverageRatiodata[index]);
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
            LeverageRatiodata &&
            LeverageRatiodata.length > 0 &&
            LeverageRatiodata.map((ob, i) => {
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

export default LeverageRatio;