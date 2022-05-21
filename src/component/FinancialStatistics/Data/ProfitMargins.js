import { CircularProgress } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import abbreviateNumber from '../../Common/NumberFormat';
import { ProfitMarginDef } from './defination';

const ProfitMargins = ({ data, Loading }) => {
  const [ProfitMargindata, setProfitMargindata] = useState([]);
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
                        />
                      </div>
                    </td>
                  }
                  {ob.col1 && <td>{abbreviateNumber(ob.col1.slice(0, 6))}</td>}
                  {ob.col2 && <td>{abbreviateNumber(ob.col2.slice(0, 6))}</td>}
                  {ob.col3 && <td>{abbreviateNumber(ob.col3.slice(0, 6))}</td>}
                  {ob.col4 && <td>{abbreviateNumber(ob.col4.slice(0, 6))}</td>}
                  {ob.col5 && <td>{abbreviateNumber(ob.col5.slice(0, 6))}</td>}
                  {ob.col6 && <td>{abbreviateNumber(ob.col6.slice(0, 6))}</td>}
                  {ob.col7 && <td>{abbreviateNumber(ob.col7.slice(0, 6))}</td>}
                  {ob.col8 && <td>{abbreviateNumber(ob.col8.slice(0, 6))}</td>}
                  {ob.col9 && <td>{abbreviateNumber(ob.col9.slice(0, 6))}</td>}
                  {ob.col10 && (
                    <td>{abbreviateNumber(ob.col10.slice(0, 6))}</td>
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ProfitMargins;