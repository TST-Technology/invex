import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import abbreviateNumber from '../../Common/NumberFormat';
import { CashFlowDef } from '../defination';

const Financing = ({ data, loading }) => {
  var name = [
    'net Borrowings',
    'Other Financing Activities',
    'cash Flow Financing',
    'Change in Cash and Cash Equivalents',
    'cash Change',
  ];
  const [FinancingData, setFinancingData] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      var invest = [
        {
          col0: name[0],
          col1: data[0]?.netBorrowings,
          col2: data[1]?.netBorrowings,
          col3: data[2]?.netBorrowings,
          col4: data[3]?.netBorrowings,
          col5: data[4]?.netBorrowings,
          col6: data[5]?.netBorrowings,
          col7: data[6]?.netBorrowings,
          col8: data[7]?.netBorrowings,
          col9: data[8]?.netBorrowings,
          col10: data[9]?.netBorrowings,
          tooltip: CashFlowDef.financing.netBorrowings,
        },
        {
          col0: name[1],
          col1: data[0]?.otherFinancingActivities,
          col2: data[1]?.otherFinancingActivities,
          col3: data[2]?.otherFinancingActivities,
          col4: data[3]?.otherFinancingActivities,
          col5: data[4]?.otherFinancingActivities,
          col6: data[5]?.otherFinancingActivities,
          col7: data[6]?.otherFinancingActivities,
          col8: data[7]?.otherFinancingActivities,
          col9: data[8]?.otherFinancingActivities,
          col10: data[9]?.otherFinancingActivities,
          tooltip: CashFlowDef.financing.otherInvestingActivities,
        },
        {
          col0: name[2],
          col1: data[0]?.cashFlowFinancing,
          col2: data[1]?.cashFlowFinancing,
          col3: data[2]?.cashFlowFinancing,
          col4: data[3]?.cashFlowFinancing,
          col5: data[4]?.cashFlowFinancing,
          col6: data[5]?.cashFlowFinancing,
          col7: data[6]?.cashFlowFinancing,
          col8: data[7]?.cashFlowFinancing,
          col9: data[8]?.cashFlowFinancing,
          col10: data[9]?.cashFlowFinancing,
          tooltip: CashFlowDef.financing.cashFlowFinancing,
        },
        {
          col0: name[3],
          col1: data[0]?.changeInCashAndCashEquivalents,
          col2: data[1]?.changeInCashAndCashEquivalents,
          col3: data[2]?.changeInCashAndCashEquivalents,
          col4: data[3]?.changeInCashAndCashEquivalents,
          col5: data[4]?.changeInCashAndCashEquivalents,
          col6: data[5]?.changeInCashAndCashEquivalents,
          col7: data[6]?.changeInCashAndCashEquivalents,
          col8: data[7]?.changeInCashAndCashEquivalents,
          col9: data[8]?.changeInCashAndCashEquivalents,
          col10: data[9]?.changeInCashAndCashEquivalents,
          tooltip: CashFlowDef.financing.changeCashEquivalents,
        },
        {
          col0: name[4],
          col1: data[0]?.cashChange,
          col2: data[1]?.cashChange,
          col3: data[2]?.cashChange,
          col4: data[3]?.cashChange,
          col5: data[4]?.cashChange,
          col6: data[5]?.cashChange,
          col7: data[6]?.cashChange,
          col8: data[7]?.cashChange,
          col9: data[8]?.cashChange,
          col10: data[9]?.cashChange,
          tooltip: CashFlowDef.financing.cashChange,
        },
      ];
      setFinancingData(invest);
    }
  }, [data]);

  return (
    <div className='table-responsive'>
      <table className='table table-bordered mt-4 most_tables'>
        <thead className='table-light'>
          <tr>
            <th scope='col'>Financing Activities</th>
            {data &&
              data.length > 0 &&
              data.map((el, i) => {
                return (
                  <th scope='col'>
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
            FinancingData &&
            FinancingData.length > 0 &&
            FinancingData.map((ob, i) => {
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

export default Financing