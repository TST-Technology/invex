import { CircularProgress } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import abbreviateNumber from '../../Common/NumberFormat';
import { ProfitMarginDef } from './defination';
import CustomChart from '../../Graph/CustomChart';

const ProfitMargins = ({ data, Loading }) => {
  const [ProfitMargindata, setProfitMargindata] = useState([]);
  const [ProfitMarginDataAsc, setProfitMarginDataAsc] = useState([]);
  const [chartLabel, setChartLabel] = useState();
  const [checkedValues, setCheckedValues] = useState([]);
  const [dataSets, setDataSets] = useState([]);

  var name = [
    'EBITDA Margin',
    'Free Cashflow Margin',
    'Net Margin',
    'NOPAT Margin',
    'Operating Cash Flow Margin',
    'Operating Margin',
    'Pretax Income Margin',
    'Gross Margin',
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
          col1: data[0]?.ebitdaMargin,
          col2: data[1]?.ebitdaMargin,
          col3: data[2]?.ebitdaMargin,
          col4: data[3]?.ebitdaMargin,
          col5: data[4]?.ebitdaMargin,
          col6: data[5]?.ebitdaMargin,
          col7: data[6]?.ebitdaMargin,
          col8: data[7]?.ebitdaMargin,
          col9: data[8]?.ebitdaMargin,
          col10: data[9]?.ebitdaMargin,
          tooltip: ProfitMarginDef.ebitdaMargin,
        },
        {
          col0: name[1],
          col1: data[0]?.freeCashFlowToRevenue,
          col2: data[1]?.freeCashFlowToRevenue,
          col3: data[2]?.freeCashFlowToRevenue,
          col4: data[3]?.freeCashFlowToRevenue,
          col5: data[4]?.freeCashFlowToRevenue,
          col6: data[5]?.freeCashFlowToRevenue,
          col7: data[6]?.freeCashFlowToRevenue,
          col8: data[7]?.freeCashFlowToRevenue,
          col9: data[8]?.freeCashFlowToRevenue,
          col10: data[9]?.freeCashFlowToRevenue,
          tooltip: ProfitMarginDef.freeCashFlowToRevenue,
        },
        {
          col0: name[2],
          col1: data[0]?.netIncomeToRevenue,
          col2: data[1]?.netIncomeToRevenue,
          col3: data[2]?.netIncomeToRevenue,
          col4: data[3]?.netIncomeToRevenue,
          col5: data[4]?.netIncomeToRevenue,
          col6: data[5]?.netIncomeToRevenue,
          col7: data[6]?.netIncomeToRevenue,
          col8: data[7]?.netIncomeToRevenue,
          col9: data[8]?.netIncomeToRevenue,
          col10: data[9]?.netIncomeToRevenue,
          tooltip: ProfitMarginDef.netIncomeToRevenue,
        },
        {
          col0: name[3],
          col1: data[0]?.nopatMargin,
          col2: data[1]?.nopatMargin,
          col3: data[2]?.nopatMargin,
          col4: data[3]?.nopatMargin,
          col5: data[4]?.nopatMargin,
          col6: data[5]?.nopatMargin,
          col7: data[6]?.nopatMargin,
          col8: data[7]?.nopatMargin,
          col9: data[8]?.nopatMargin,
          col10: data[9]?.nopatMargin,
          tooltip: ProfitMarginDef.nopatMargin,
        },
        {
          col0: name[4],
          col1: data[0]?.operatingCfToRevenue,
          col2: data[1]?.operatingCfToRevenue,
          col3: data[2]?.operatingCfToRevenue,
          col4: data[3]?.operatingCfToRevenue,
          col5: data[4]?.operatingCfToRevenue,
          col6: data[5]?.operatingCfToRevenue,
          col7: data[6]?.operatingCfToRevenue,
          col8: data[7]?.operatingCfToRevenue,
          col9: data[8]?.operatingCfToRevenue,
          col10: data[9]?.operatingCfToRevenue,
          tooltip: ProfitMarginDef.operatingCfToRevenue,
        },
        {
          col0: name[5],
          col1: data[0]?.operatingIncomeToRevenue,
          col2: data[1]?.operatingIncomeToRevenue,
          col3: data[2]?.operatingIncomeToRevenue,
          col4: data[3]?.operatingIncomeToRevenue,
          col5: data[4]?.operatingIncomeToRevenue,
          col6: data[5]?.operatingIncomeToRevenue,
          col7: data[6]?.operatingIncomeToRevenue,
          col8: data[7]?.operatingIncomeToRevenue,
          col9: data[8]?.operatingIncomeToRevenue,
          col10: data[9]?.operatingIncomeToRevenue,
          tooltip: ProfitMarginDef.operatingIncomeToRevenue,
        },
        {
          col0: name[6],
          col1: data[0]?.pretaxIncomeMargin,
          col2: data[1]?.pretaxIncomeMargin,
          col3: data[2]?.pretaxIncomeMargin,
          col4: data[3]?.pretaxIncomeMargin,
          col5: data[4]?.pretaxIncomeMargin,
          col6: data[5]?.pretaxIncomeMargin,
          col7: data[6]?.pretaxIncomeMargin,
          col8: data[7]?.pretaxIncomeMargin,
          col9: data[8]?.pretaxIncomeMargin,
          col10: data[9]?.pretaxIncomeMargin,
          tooltip: ProfitMarginDef.pretaxIncomeMargin,
        },
        {
          col0: name[7],
          col1: data[0]?.profitGrossToRevenue,
          col2: data[1]?.profitGrossToRevenue,
          col3: data[2]?.profitGrossToRevenue,
          col4: data[3]?.profitGrossToRevenue,
          col5: data[4]?.profitGrossToRevenue,
          col6: data[5]?.profitGrossToRevenue,
          col7: data[6]?.profitGrossToRevenue,
          col8: data[7]?.profitGrossToRevenue,
          col9: data[8]?.profitGrossToRevenue,
          col10: data[9]?.profitGrossToRevenue,
          tooltip: ProfitMarginDef.profitGrossToRevenue,
        },
      ];
      setProfitMargindata(current);

      const dataAsc = data.slice();

      dataAsc.sort(function (a, b) {
        return a.year - b.year || a.quarter - b.quarter;
      });

      var currentAsc = [
        {
          col0: name[0],
          col1: dataAsc[0]?.ebitdaMargin,
          col2: dataAsc[1]?.ebitdaMargin,
          col3: dataAsc[2]?.ebitdaMargin,
          col4: dataAsc[3]?.ebitdaMargin,
          col5: dataAsc[4]?.ebitdaMargin,
          col6: dataAsc[5]?.ebitdaMargin,
          col7: dataAsc[6]?.ebitdaMargin,
          col8: dataAsc[7]?.ebitdaMargin,
          col9: dataAsc[8]?.ebitdaMargin,
          col10: dataAsc[9]?.ebitdaMargin,
          tooltip: ProfitMarginDef.ebitdaMargin,
        },
        {
          col0: name[1],
          col1: dataAsc[0]?.freeCashFlowToRevenue,
          col2: dataAsc[1]?.freeCashFlowToRevenue,
          col3: dataAsc[2]?.freeCashFlowToRevenue,
          col4: dataAsc[3]?.freeCashFlowToRevenue,
          col5: dataAsc[4]?.freeCashFlowToRevenue,
          col6: dataAsc[5]?.freeCashFlowToRevenue,
          col7: dataAsc[6]?.freeCashFlowToRevenue,
          col8: dataAsc[7]?.freeCashFlowToRevenue,
          col9: dataAsc[8]?.freeCashFlowToRevenue,
          col10: dataAsc[9]?.freeCashFlowToRevenue,
          tooltip: ProfitMarginDef.freeCashFlowToRevenue,
        },
        {
          col0: name[2],
          col1: dataAsc[0]?.netIncomeToRevenue,
          col2: dataAsc[1]?.netIncomeToRevenue,
          col3: dataAsc[2]?.netIncomeToRevenue,
          col4: dataAsc[3]?.netIncomeToRevenue,
          col5: dataAsc[4]?.netIncomeToRevenue,
          col6: dataAsc[5]?.netIncomeToRevenue,
          col7: dataAsc[6]?.netIncomeToRevenue,
          col8: dataAsc[7]?.netIncomeToRevenue,
          col9: dataAsc[8]?.netIncomeToRevenue,
          col10: dataAsc[9]?.netIncomeToRevenue,
          tooltip: ProfitMarginDef.netIncomeToRevenue,
        },
        {
          col0: name[3],
          col1: dataAsc[0]?.nopatMargin,
          col2: dataAsc[1]?.nopatMargin,
          col3: dataAsc[2]?.nopatMargin,
          col4: dataAsc[3]?.nopatMargin,
          col5: dataAsc[4]?.nopatMargin,
          col6: dataAsc[5]?.nopatMargin,
          col7: dataAsc[6]?.nopatMargin,
          col8: dataAsc[7]?.nopatMargin,
          col9: dataAsc[8]?.nopatMargin,
          col10: dataAsc[9]?.nopatMargin,
          tooltip: ProfitMarginDef.nopatMargin,
        },
        {
          col0: name[4],
          col1: dataAsc[0]?.operatingCfToRevenue,
          col2: dataAsc[1]?.operatingCfToRevenue,
          col3: dataAsc[2]?.operatingCfToRevenue,
          col4: dataAsc[3]?.operatingCfToRevenue,
          col5: dataAsc[4]?.operatingCfToRevenue,
          col6: dataAsc[5]?.operatingCfToRevenue,
          col7: dataAsc[6]?.operatingCfToRevenue,
          col8: dataAsc[7]?.operatingCfToRevenue,
          col9: dataAsc[8]?.operatingCfToRevenue,
          col10: dataAsc[9]?.operatingCfToRevenue,
          tooltip: ProfitMarginDef.operatingCfToRevenue,
        },
        {
          col0: name[5],
          col1: dataAsc[0]?.operatingIncomeToRevenue,
          col2: dataAsc[1]?.operatingIncomeToRevenue,
          col3: dataAsc[2]?.operatingIncomeToRevenue,
          col4: dataAsc[3]?.operatingIncomeToRevenue,
          col5: dataAsc[4]?.operatingIncomeToRevenue,
          col6: dataAsc[5]?.operatingIncomeToRevenue,
          col7: dataAsc[6]?.operatingIncomeToRevenue,
          col8: dataAsc[7]?.operatingIncomeToRevenue,
          col9: dataAsc[8]?.operatingIncomeToRevenue,
          col10: dataAsc[9]?.operatingIncomeToRevenue,
          tooltip: ProfitMarginDef.operatingIncomeToRevenue,
        },
        {
          col0: name[6],
          col1: dataAsc[0]?.pretaxIncomeMargin,
          col2: dataAsc[1]?.pretaxIncomeMargin,
          col3: dataAsc[2]?.pretaxIncomeMargin,
          col4: dataAsc[3]?.pretaxIncomeMargin,
          col5: dataAsc[4]?.pretaxIncomeMargin,
          col6: dataAsc[5]?.pretaxIncomeMargin,
          col7: dataAsc[6]?.pretaxIncomeMargin,
          col8: dataAsc[7]?.pretaxIncomeMargin,
          col9: dataAsc[8]?.pretaxIncomeMargin,
          col10: dataAsc[9]?.pretaxIncomeMargin,
          tooltip: ProfitMarginDef.pretaxIncomeMargin,
        },
        {
          col0: name[7],
          col1: dataAsc[0]?.profitGrossToRevenue,
          col2: dataAsc[1]?.profitGrossToRevenue,
          col3: dataAsc[2]?.profitGrossToRevenue,
          col4: dataAsc[3]?.profitGrossToRevenue,
          col5: dataAsc[4]?.profitGrossToRevenue,
          col6: dataAsc[5]?.profitGrossToRevenue,
          col7: dataAsc[6]?.profitGrossToRevenue,
          col8: dataAsc[7]?.profitGrossToRevenue,
          col9: dataAsc[8]?.profitGrossToRevenue,
          col10: dataAsc[9]?.profitGrossToRevenue,
          tooltip: ProfitMarginDef.profitGrossToRevenue,
        },
      ];

      setProfitMarginDataAsc(currentAsc);
      setCheckedValues([]);
    }
  }, [data]);

  useEffect(() => {
    setDataSets(
      checkedValues &&
        checkedValues.map((index) => {
          const row = Object.values(ProfitMarginDataAsc[index]);
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
            ProfitMargindata &&
            ProfitMargindata.length > 0 &&
            ProfitMargindata.map((ob, i) => {
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

export default ProfitMargins;