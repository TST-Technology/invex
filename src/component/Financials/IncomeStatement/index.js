import { CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getIncomeStatemants } from '../../api/financials'
import abbreviateNumber from '../../Common/NumberFormat'
import { IncomeStatementDef } from '../defination';

const IncomeStatement = ({ symbol }) => {
  const [Period, setPeriod] = useState('quarterly');
  const [View, setView] = useState(5);
  const [Statements, setStatements] = useState([]);
  const [tableHead, setTableHead] = useState([]);
  const [loading, setLoading] = useState(false);

  const name = [
    'total Revenue',
    'cost Of Revenue',
    'gross Profit',
    'selling General And Admin',
    'research And Development',
    'operating Income',
    'interest Income',
    'interest And Other Expenses',
    'pretax Income',
    'income Tax',
    'minority Interest',
    'net Income Basic',
    'fiscal Date',
    'report Date',
  ];
  useEffect(() => {
    (async () => {
      setLoading(true);
      if (symbol) {
        var res = await getIncomeStatemants(symbol, Period, View);
        if (res && res.status === 200 && res?.data?.length > 0) {
          setTableHead(res.data);
          var data = res?.data;

          data.sort(function (a, b) {
            return b.year - a.year || b.quarter - a.quarter;
          });

          var tempArr = [
            {
              col0: name[0],
              col1: data[0]?.totalRevenue,
              col2: data[1]?.totalRevenue,
              col3: data[2]?.totalRevenue,
              col4: data[3]?.totalRevenue,
              col5: data[4]?.totalRevenue,
              col6: data[5]?.totalRevenue,
              col7: data[6]?.totalRevenue,
              col8: data[7]?.totalRevenue,
              col9: data[8]?.totalRevenue,
              col10: data[9]?.totalRevenue,
              ttm: data
                .map((e, i) => (i <= 3 ? Number(e.totalRevenue) : ''))
                .reduce((pV, cV) => pV + cV, 0),
              tooltip: IncomeStatementDef.totalRevenue,
            },
            {
              col0: name[1],
              col1: data[0]?.costOfRevenue,
              col2: data[1]?.costOfRevenue,
              col3: data[2]?.costOfRevenue,
              col4: data[3]?.costOfRevenue,
              col5: data[4]?.costOfRevenue,
              col6: data[5]?.costOfRevenue,
              col7: data[6]?.costOfRevenue,
              col8: data[7]?.costOfRevenue,
              col9: data[8]?.costOfRevenue,
              col10: data[9]?.costOfRevenue,
              ttm: data
                .map((e, i) => (i <= 3 ? Number(e.costOfRevenue) : ''))
                .reduce((pV, cV) => pV + cV, 0),
              tooltip: IncomeStatementDef.costOfRevenue,
            },
            {
              col0: name[2],
              col1: data[0]?.grossProfit,
              col2: data[1]?.grossProfit,
              col3: data[2]?.grossProfit,
              col4: data[3]?.grossProfit,
              col5: data[4]?.grossProfit,
              col6: data[5]?.grossProfit,
              col7: data[6]?.grossProfit,
              col8: data[7]?.grossProfit,
              col9: data[8]?.grossProfit,
              col10: data[9]?.grossProfit,
              ttm: data
                .map((e, i) => (i <= 3 ? Number(e.grossProfit) : ''))
                .reduce((pV, cV) => pV + cV, 0),
              tooltip: IncomeStatementDef.grossProfit,
            },
            {
              col0: name[3],
              col1: data[0]?.sellingGeneralAndAdmin,
              col2: data[1]?.sellingGeneralAndAdmin,
              col3: data[2]?.sellingGeneralAndAdmin,
              col4: data[3]?.sellingGeneralAndAdmin,
              col5: data[4]?.sellingGeneralAndAdmin,
              col6: data[5]?.sellingGeneralAndAdmin,
              col7: data[6]?.sellingGeneralAndAdmin,
              col8: data[7]?.sellingGeneralAndAdmin,
              col9: data[8]?.sellingGeneralAndAdmin,
              col10: data[9]?.sellingGeneralAndAdmin,
              ttm: data
                .map((e, i) => (i <= 3 ? Number(e.sellingGeneralAndAdmin) : ''))
                .reduce((pV, cV) => pV + cV, 0),
              tooltip: IncomeStatementDef.sellingGeneralAndAdmin,
            },
            {
              col0: name[4],
              col1: data[0]?.researchAndDevelopment,
              col2: data[1]?.researchAndDevelopment,
              col3: data[2]?.researchAndDevelopment,
              col4: data[3]?.researchAndDevelopment,
              col5: data[4]?.researchAndDevelopment,
              col6: data[5]?.researchAndDevelopment,
              col7: data[6]?.researchAndDevelopment,
              col8: data[7]?.researchAndDevelopment,
              col9: data[8]?.researchAndDevelopment,
              col10: data[9]?.researchAndDevelopment,
              ttm: data
                .map((e, i) => (i <= 3 ? Number(e.researchAndDevelopment) : ''))
                .reduce((pV, cV) => pV + cV, 0),
              tooltip: IncomeStatementDef.researchAndDevelopment,
            },
            {
              col0: name[5],
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
              ttm: data
                .map((e, i) => (i <= 3 ? Number(e.operatingIncome) : ''))
                .reduce((pV, cV) => pV + cV, 0),
              tooltip: IncomeStatementDef.operatingIncome,
            },
            {
              col0: name[6],
              col1: data[0]?.interestIncome,
              col2: data[1]?.interestIncome,
              col3: data[2]?.interestIncome,
              col4: data[3]?.interestIncome,
              col5: data[4]?.interestIncome,
              col6: data[5]?.interestIncome,
              col7: data[6]?.interestIncome,
              col8: data[7]?.interestIncome,
              col9: data[8]?.interestIncome,
              col10: data[9]?.interestIncome,
              ttm: data
                .map((e, i) => (i <= 3 ? Number(e.interestIncome) : ''))
                .reduce((pV, cV) => pV + cV, 0),
              tooltip: IncomeStatementDef.interestIncome,
            },
            {
              col0: name[7],
              col1: data[0]?.interestAndOtherExpenses,
              col2: data[1]?.interestAndOtherExpenses,
              col3: data[2]?.interestAndOtherExpenses,
              col4: data[3]?.interestAndOtherExpenses,
              col5: data[4]?.interestAndOtherExpenses,
              col6: data[5]?.interestAndOtherExpenses,
              col7: data[6]?.interestAndOtherExpenses,
              col8: data[7]?.interestAndOtherExpenses,
              col9: data[8]?.interestAndOtherExpenses,
              col10: data[9]?.interestAndOtherExpenses,
              ttm: data
                .map((e, i) =>
                  i <= 3 ? Number(e.interestAndOtherExpenses) : ''
                )
                .reduce((pV, cV) => pV + cV, 0),
              tooltip: IncomeStatementDef.interestAndOtherExpenses,
            },
            {
              col0: name[8],
              col1: data[0]?.pretaxIncome,
              col2: data[1]?.pretaxIncome,
              col3: data[2]?.pretaxIncome,
              col4: data[3]?.pretaxIncome,
              col5: data[4]?.pretaxIncome,
              col6: data[5]?.pretaxIncome,
              col7: data[6]?.pretaxIncome,
              col8: data[7]?.pretaxIncome,
              col9: data[8]?.pretaxIncome,
              col10: data[9]?.pretaxIncome,
              ttm: data
                .map((e, i) => (i <= 3 ? Number(e.pretaxIncome) : ''))
                .reduce((pV, cV) => pV + cV, 0),
              tooltip: IncomeStatementDef.pretaxIncome,
            },
            {
              col0: name[9],
              col1: data[0]?.incomeTax,
              col2: data[1]?.incomeTax,
              col3: data[2]?.incomeTax,
              col4: data[3]?.incomeTax,
              col5: data[4]?.incomeTax,
              col6: data[5]?.incomeTax,
              col7: data[6]?.incomeTax,
              col8: data[7]?.incomeTax,
              col9: data[8]?.incomeTax,
              col10: data[9]?.incomeTax,
              ttm: data
                .map((e, i) => (i <= 3 ? Number(e.incomeTax) : ''))
                .reduce((pV, cV) => pV + cV, 0),
              tooltip: IncomeStatementDef.incomeTax,
            },
            {
              col0: name[10],
              col1: data[0]?.minorityInterest,
              col2: data[1]?.minorityInterest,
              col3: data[2]?.minorityInterest,
              col4: data[3]?.minorityInterest,
              col5: data[4]?.minorityInterest,
              col6: data[5]?.minorityInterest,
              col7: data[6]?.minorityInterest,
              col8: data[7]?.minorityInterest,
              col9: data[8]?.minorityInterest,
              col10: data[9]?.minorityInterest,
              ttm: data
                .map((e, i) => (i <= 3 ? Number(e.minorityInterest) : ''))
                .reduce((pV, cV) => pV + cV, 0),
              tooltip: IncomeStatementDef.minorityInterest,
            },
            {
              col0: name[11],
              col1: data[0]?.netIncomeBasic,
              col2: data[1]?.netIncomeBasic,
              col3: data[2]?.netIncomeBasic,
              col4: data[3]?.netIncomeBasic,
              col5: data[4]?.netIncomeBasic,
              col6: data[5]?.netIncomeBasic,
              col7: data[6]?.netIncomeBasic,
              col8: data[7]?.netIncomeBasic,
              col9: data[8]?.netIncomeBasic,
              col10: data[9]?.netIncomeBasic,
              ttm: data
                .map((e, i) => (i <= 3 ? Number(e.netIncomeBasic) : ''))
                .reduce((pV, cV) => pV + cV, 0),
              tooltip: IncomeStatementDef.netIncomeBasic,
            },
            {
              col0: name[12],
              col1: data[0]?.fiscalDate,
              col2: data[1]?.fiscalDate,
              col3: data[2]?.fiscalDate,
              col4: data[3]?.fiscalDate,
              col5: data[4]?.fiscalDate,
              col6: data[5]?.fiscalDate,
              col7: data[6]?.fiscalDate,
              col8: data[7]?.fiscalDate,
              col9: data[8]?.fiscalDate,
              col10: data[9]?.fiscalDate,
              tooltip: IncomeStatementDef.fiscalDate,
            },
            {
              col0: name[13],
              col1: data[0]?.reportDate,
              col2: data[1]?.reportDate,
              col3: data[2]?.reportDate,
              col4: data[3]?.reportDate,
              col5: data[4]?.reportDate,
              col6: data[5]?.reportDate,
              col7: data[6]?.reportDate,
              col8: data[7]?.reportDate,
              col9: data[8]?.reportDate,
              col10: data[9]?.reportDate,
              tooltip: IncomeStatementDef.reportDate,
            },
          ];
          console.log('tempArr', tempArr);
          setStatements(tempArr);
        }
      }
      setLoading(false);
    })();
  }, [symbol, Period, View]);

  return (
    <>
      <div className='col-lg-12 mb-4'>
        <div className='card p-3'>
          <form
            className='form-group'
            role='search'
            method='get'
            id='searchform'
            action=''
          >
            <h5 className='mb-3'>
              <strong>Income Statement</strong>
            </h5>
            <div className='d-inline-flex align-items-center'>
              <label htmlFor='' className='me-3 font-bd'>
                Period
              </label>
              <select
                className='form-select me-3'
                aria-label='Default select example'
                onChange={(e) => setPeriod(e.target.value)}
              >
                <option selected value='quarterly'>
                  TTM
                </option>
                <option value='annual'>annual</option>
              </select>

              <label htmlFor='' className='me-3 font-bd'>
                View
              </label>
              <select
                className='form-select me-3'
                aria-label='Default select example'
                onChange={(e) => setView(e.target.value)}
              >
                <option selected value='5'>
                  Last 5 Years
                </option>
                <option value='10'>Last 10 Years</option>
              </select>
            </div>
          </form>
        </div>
      </div>
      <div className='table-responsive'>
        <table className='table table-bordered m-0 most_tables'>
          <thead className='table-light'>
            <tr>
              <th scope='col'>
                Net Income
                <i
                  class='bi bi-info-circle m-1'
                  data-toggle='tooltip'
                  title={IncomeStatementDef.netIncome}
                ></i>
              </th>
              {Period !== 'annual' && <th scope='col'>TTM</th>}
              {tableHead &&
                tableHead.length > 0 &&
                tableHead.map((el, i) => {
                  return (
                    <th key={i} scope='col'>
                      {el.quarter > 0 ? 'Q' + el.quarter : ''} {el.year}
                    </th>
                  );
                })}
            </tr>
          </thead>
          <tbody className='border-top-0'>
            {loading && (
              <tr style={{ height: 100, textAlign: 'center' }}>
                <td colSpan={6} style={{ textAlign: 'center' }}>
                  <CircularProgress size={50} />
                </td>
              </tr>
            )}
            {!loading &&
              Statements &&
              Statements.length > 0 &&
              Statements.map((ob, i) => {
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
                    {Period !== 'annual' && <td>{abbreviateNumber(ob.ttm)}</td>}
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
    </>
  );
};

export default IncomeStatement