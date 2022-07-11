import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import abbreviateNumber from '../../Common/NumberFormat';
import { CashFlowDef } from '../defination';

const NetIncome = ({ data, loading }) => {
  var name = [
    'net income',
    'depreciation',
    'changes in receivables',
    'changes in inventories',
    'Other Operating Activities',
    'cashFlow',
  ];
  const [netIncome, setNetIncome] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {

      data.sort(function (a, b) {
        return b.year - a.year || b.quarter - a.quarter;
      });

      var netincomedata = [
        {
          col0: name[0],
          col1: data[0]?.netIncome,
          col2: data[1]?.netIncome,
          col3: data[2]?.netIncome,
          col4: data[3]?.netIncome,
          col5: data[4]?.netIncome,
          col6: data[5]?.netIncome,
          col7: data[6]?.netIncome,
          col8: data[7]?.netIncome,
          col9: data[8]?.netIncome,
          col10: data[9]?.netIncome,
          tooltip: CashFlowDef.operatingActivities.netIncome,
        },
        {
          col0: name[1],
          col1: data[0]?.depreciation,
          col2: data[1]?.depreciation,
          col3: data[2]?.depreciation,
          col4: data[3]?.depreciation,
          col5: data[4]?.depreciation,
          col6: data[5]?.depreciation,
          col7: data[6]?.depreciation,
          col8: data[7]?.depreciation,
          col9: data[8]?.depreciation,
          col10: data[9]?.depreciation,
          tooltip: CashFlowDef.operatingActivities.depreciation,
        },
        {
          col0: name[2],
          col1: data[0]?.changesInReceivables,
          col2: data[1]?.changesInReceivables,
          col3: data[2]?.changesInReceivables,
          col4: data[3]?.changesInReceivables,
          col5: data[4]?.changesInReceivables,
          col6: data[5]?.changesInReceivables,
          col7: data[6]?.changesInReceivables,
          col8: data[7]?.changesInReceivables,
          col9: data[8]?.changesInReceivables,
          col10: data[9]?.changesInReceivables,
          tooltip: CashFlowDef.operatingActivities.changesInReceivables,
        },
        {
          col0: name[3],
          col1: data[0]?.changesInInventories,
          col2: data[1]?.changesInInventories,
          col3: data[2]?.changesInInventories,
          col4: data[3]?.changesInInventories,
          col5: data[4]?.changesInInventories,
          col6: data[5]?.changesInInventories,
          col7: data[6]?.changesInInventories,
          col8: data[7]?.changesInInventories,
          col9: data[8]?.changesInInventories,
          col10: data[9]?.changesInInventories,
          tooltip: CashFlowDef.operatingActivities.changesInInventories,
        },
        {
          col0: name[4],
          col1: data[0]?.otherOperatingActivities,
          col2: data[1]?.otherOperatingActivities,
          col3: data[2]?.otherOperatingActivities,
          col4: data[3]?.otherOperatingActivities,
          col5: data[4]?.otherOperatingActivities,
          col6: data[5]?.otherOperatingActivities,
          col7: data[6]?.otherOperatingActivities,
          col8: data[7]?.otherOperatingActivities,
          col9: data[8]?.otherOperatingActivities,
          col10: data[9]?.otherOperatingActivities,
          tooltip: CashFlowDef.operatingActivities.otherOperatingActivities,
        },
        {
          col0: name[5],
          col1: data[0]?.cashFlow,
          col2: data[1]?.cashFlow,
          col3: data[2]?.cashFlow,
          col4: data[3]?.cashFlow,
          col5: data[4]?.cashFlow,
          col6: data[5]?.cashFlow,
          col7: data[6]?.cashFlow,
          col8: data[7]?.cashFlow,
          col9: data[8]?.cashFlow,
          col10: data[9]?.cashFlow,
          tooltip: CashFlowDef.operatingActivities.cashFlow,
        },
      ];
      setNetIncome(netincomedata);
    }
  }, [data]);
  return (
    <div className='table-responsive'>
      <table className='table table-bordered m-0 most_tables'>
        <thead className='table-light'>
          <tr>
            <th scope='col'>Operating Activities </th>
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
            netIncome &&
            netIncome.length > 0 &&
            netIncome.map((ob, i) => {
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

export default NetIncome