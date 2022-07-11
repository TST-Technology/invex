import { CircularProgress } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import abbreviateNumber from '../../Common/NumberFormat';
import { CurrentFinancialHighlightsDef } from './defination';
import CustomChart from '../../Graph/CustomChart';

const CurrentFinancialHighlights = ({ data, Loading }) => {
  const [CurrentFinancialdata, setCurrentFinancialdata] = useState([]);
  const [CurrentFinancialDataAsc, setCurrentFinancialDataAsc] = useState([]);
  const [chartLabel, setChartLabel] = useState();
  const [checkedValues, setCheckedValues] = useState([]);
  const [dataSets, setDataSets] = useState([]);

  var name = [
    'Reported EBITDA',
    'Total Operating Expenses',
    'Free Cash Flow',
    'Goodwill and Intangibles',
    'Pre-Tax Income',
    'Minority Interests',
    'Net Operating Profit after Tax (NOPAT)',
    'Operating Income',
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
          col1: data[0]?.ebitdaReported,
          col2: data[1]?.ebitdaReported,
          col3: data[2]?.ebitdaReported,
          col4: data[3]?.ebitdaReported,
          col5: data[4]?.ebitdaReported,
          col6: data[5]?.ebitdaReported,
          col7: data[6]?.ebitdaReported,
          col8: data[7]?.ebitdaReported,
          col9: data[8]?.ebitdaReported,
          col10: data[9]?.ebitdaReported,
          tooltip: CurrentFinancialHighlightsDef.ebitdaReported,
        },
        {
          col0: name[1],
          col1: data[0]?.expenseOperating,
          col2: data[1]?.expenseOperating,
          col3: data[2]?.expenseOperating,
          col4: data[3]?.expenseOperating,
          col5: data[4]?.expenseOperating,
          col6: data[5]?.expenseOperating,
          col7: data[6]?.expenseOperating,
          col8: data[7]?.expenseOperating,
          col9: data[8]?.expenseOperating,
          col10: data[9]?.expenseOperating,
          tooltip: CurrentFinancialHighlightsDef.expenseOperating,
        },
        {
          col0: name[2],
          col1: data[0]?.freeCashFlow,
          col2: data[1]?.freeCashFlow,
          col3: data[2]?.freeCashFlow,
          col4: data[3]?.freeCashFlow,
          col5: data[4]?.freeCashFlow,
          col6: data[5]?.freeCashFlow,
          col7: data[6]?.freeCashFlow,
          col8: data[7]?.freeCashFlow,
          col9: data[8]?.freeCashFlow,
          col10: data[9]?.freeCashFlow,
          tooltip: CurrentFinancialHighlightsDef.freeCashFlow,
        },
        {
          col0: name[3],
          col1: data[0]?.goodwillTotal,
          col2: data[1]?.goodwillTotal,
          col3: data[2]?.goodwillTotal,
          col4: data[3]?.goodwillTotal,
          col5: data[4]?.goodwillTotal,
          col6: data[5]?.goodwillTotal,
          col7: data[6]?.goodwillTotal,
          col8: data[7]?.goodwillTotal,
          col9: data[8]?.goodwillTotal,
          col10: data[9]?.goodwillTotal,
          tooltip: CurrentFinancialHighlightsDef.goodwillTotal,
        },
        {
          col0: name[4],
          col1: data[0]?.incomeNetPreTax,
          col2: data[1]?.incomeNetPreTax,
          col3: data[2]?.incomeNetPreTax,
          col4: data[3]?.incomeNetPreTax,
          col5: data[4]?.incomeNetPreTax,
          col6: data[5]?.incomeNetPreTax,
          col7: data[6]?.incomeNetPreTax,
          col8: data[7]?.incomeNetPreTax,
          col9: data[8]?.incomeNetPreTax,
          col10: data[9]?.incomeNetPreTax,
          tooltip: CurrentFinancialHighlightsDef.incomeNetPreTax,
        },
        {
          col0: name[5],
          col1: data[0]?.interestMinority,
          col2: data[1]?.interestMinority,
          col3: data[2]?.interestMinority,
          col4: data[3]?.interestMinority,
          col5: data[4]?.interestMinority,
          col6: data[5]?.interestMinority,
          col7: data[6]?.interestMinority,
          col8: data[7]?.interestMinority,
          col9: data[8]?.interestMinority,
          col10: data[9]?.interestMinority,
          tooltip: CurrentFinancialHighlightsDef.interestMinority,
        },
        {
          col0: name[6],
          col1: data[0]?.nopat,
          col2: data[1]?.nopat,
          col3: data[2]?.nopat,
          col4: data[3]?.nopat,
          col5: data[4]?.nopat,
          col6: data[5]?.nopat,
          col7: data[6]?.nopat,
          col8: data[7]?.nopat,
          col9: data[8]?.nopat,
          col10: data[9]?.nopat,
          tooltip: CurrentFinancialHighlightsDef.nopat,
        },
        {
          col0: name[7],
          col1: data[0]?.operatingIncome,
          col2: data[1]?.operatingIncome,
          col3: data[2]?.operatingIncome,
          col4: data[3]?.operatingIncome,
          col5: data[4]?.operatingIncome,
          col6: data[5]?.operatingIncome,
          col7: data[6]?.operatingIncome,
          col8: data[7]?.operatingIncome,
          col9: data[8]?.operatingIncome,
          col10: data[9]?.operatingIncome,
          tooltip: CurrentFinancialHighlightsDef.operatingIncome,
        },
      ];
      setCurrentFinancialdata(current);

      const dataAsc = data.slice();

      dataAsc.sort(function (a, b) {
        return a.year - b.year || a.quarter - b.quarter;
      });

      var currentAsc = [
        {
          col0: name[0],
          col1: dataAsc[0]?.ebitdaReported,
          col2: dataAsc[1]?.ebitdaReported,
          col3: dataAsc[2]?.ebitdaReported,
          col4: dataAsc[3]?.ebitdaReported,
          col5: dataAsc[4]?.ebitdaReported,
          col6: dataAsc[5]?.ebitdaReported,
          col7: dataAsc[6]?.ebitdaReported,
          col8: dataAsc[7]?.ebitdaReported,
          col9: dataAsc[8]?.ebitdaReported,
          col10: dataAsc[9]?.ebitdaReported,
          tooltip: CurrentFinancialHighlightsDef.ebitdaReported,
        },
        {
          col0: name[1],
          col1: dataAsc[0]?.expenseOperating,
          col2: dataAsc[1]?.expenseOperating,
          col3: dataAsc[2]?.expenseOperating,
          col4: dataAsc[3]?.expenseOperating,
          col5: dataAsc[4]?.expenseOperating,
          col6: dataAsc[5]?.expenseOperating,
          col7: dataAsc[6]?.expenseOperating,
          col8: dataAsc[7]?.expenseOperating,
          col9: dataAsc[8]?.expenseOperating,
          col10: dataAsc[9]?.expenseOperating,
          tooltip: CurrentFinancialHighlightsDef.expenseOperating,
        },
        {
          col0: name[2],
          col1: dataAsc[0]?.freeCashFlow,
          col2: dataAsc[1]?.freeCashFlow,
          col3: dataAsc[2]?.freeCashFlow,
          col4: dataAsc[3]?.freeCashFlow,
          col5: dataAsc[4]?.freeCashFlow,
          col6: dataAsc[5]?.freeCashFlow,
          col7: dataAsc[6]?.freeCashFlow,
          col8: dataAsc[7]?.freeCashFlow,
          col9: dataAsc[8]?.freeCashFlow,
          col10: dataAsc[9]?.freeCashFlow,
          tooltip: CurrentFinancialHighlightsDef.freeCashFlow,
        },
        {
          col0: name[3],
          col1: dataAsc[0]?.goodwillTotal,
          col2: dataAsc[1]?.goodwillTotal,
          col3: dataAsc[2]?.goodwillTotal,
          col4: dataAsc[3]?.goodwillTotal,
          col5: dataAsc[4]?.goodwillTotal,
          col6: dataAsc[5]?.goodwillTotal,
          col7: dataAsc[6]?.goodwillTotal,
          col8: dataAsc[7]?.goodwillTotal,
          col9: dataAsc[8]?.goodwillTotal,
          col10: dataAsc[9]?.goodwillTotal,
          tooltip: CurrentFinancialHighlightsDef.goodwillTotal,
        },
        {
          col0: name[4],
          col1: dataAsc[0]?.incomeNetPreTax,
          col2: dataAsc[1]?.incomeNetPreTax,
          col3: dataAsc[2]?.incomeNetPreTax,
          col4: dataAsc[3]?.incomeNetPreTax,
          col5: dataAsc[4]?.incomeNetPreTax,
          col6: dataAsc[5]?.incomeNetPreTax,
          col7: dataAsc[6]?.incomeNetPreTax,
          col8: dataAsc[7]?.incomeNetPreTax,
          col9: dataAsc[8]?.incomeNetPreTax,
          col10: dataAsc[9]?.incomeNetPreTax,
          tooltip: CurrentFinancialHighlightsDef.incomeNetPreTax,
        },
        {
          col0: name[5],
          col1: dataAsc[0]?.interestMinority,
          col2: dataAsc[1]?.interestMinority,
          col3: dataAsc[2]?.interestMinority,
          col4: dataAsc[3]?.interestMinority,
          col5: dataAsc[4]?.interestMinority,
          col6: dataAsc[5]?.interestMinority,
          col7: dataAsc[6]?.interestMinority,
          col8: dataAsc[7]?.interestMinority,
          col9: dataAsc[8]?.interestMinority,
          col10: dataAsc[9]?.interestMinority,
          tooltip: CurrentFinancialHighlightsDef.interestMinority,
        },
        {
          col0: name[6],
          col1: dataAsc[0]?.nopat,
          col2: dataAsc[1]?.nopat,
          col3: dataAsc[2]?.nopat,
          col4: dataAsc[3]?.nopat,
          col5: dataAsc[4]?.nopat,
          col6: dataAsc[5]?.nopat,
          col7: dataAsc[6]?.nopat,
          col8: dataAsc[7]?.nopat,
          col9: dataAsc[8]?.nopat,
          col10: dataAsc[9]?.nopat,
          tooltip: CurrentFinancialHighlightsDef.nopat,
        },
        {
          col0: name[7],
          col1: dataAsc[0]?.operatingIncome,
          col2: dataAsc[1]?.operatingIncome,
          col3: dataAsc[2]?.operatingIncome,
          col4: dataAsc[3]?.operatingIncome,
          col5: dataAsc[4]?.operatingIncome,
          col6: dataAsc[5]?.operatingIncome,
          col7: dataAsc[6]?.operatingIncome,
          col8: dataAsc[7]?.operatingIncome,
          col9: dataAsc[8]?.operatingIncome,
          col10: dataAsc[9]?.operatingIncome,
          tooltip: CurrentFinancialHighlightsDef.operatingIncome,
        },
      ];

      setCurrentFinancialDataAsc(currentAsc);

      setCheckedValues([]);
    }
  }, [data]);

  useEffect(() => {
    setDataSets(
      checkedValues &&
        checkedValues.map((index) => {
          const row = Object.values(CurrentFinancialDataAsc[index]);
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
            CurrentFinancialdata &&
            CurrentFinancialdata.length > 0 &&
            CurrentFinancialdata.map((ob, i) => {
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

export default CurrentFinancialHighlights;