import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import abbreviateNumber from '../../Common/NumberFormat';

const Investing = ({ data, loading }) => {

  var name = [
    'capital Expenditures',
    'other Investing Activities',
    'total Investing CashFlows',
  ];
  const [InvestingData, setInvestingData] = useState([])

  useEffect(() => {

    if (data && data.length > 0) {

      var invest = [
        {
          col0: name[0],
          col1: data[0]?.capitalExpenditures,
          col2: data[1]?.capitalExpenditures,
          col3: data[2]?.capitalExpenditures,
          col4: data[3]?.capitalExpenditures,
          col5: data[4]?.capitalExpenditures,
          col6: data[5]?.capitalExpenditures,
          col7: data[6]?.capitalExpenditures,
          col8: data[7]?.capitalExpenditures,
          col9: data[8]?.capitalExpenditures,
          col10: data[9]?.capitalExpenditures,
        },
        {
          col0: name[1],
          col1: data[0]?.otherInvestingActivities,
          col2: data[1]?.otherInvestingActivities,
          col3: data[2]?.otherInvestingActivities,
          col4: data[3]?.otherInvestingActivities,
          col5: data[4]?.otherInvestingActivities,
          col6: data[5]?.otherInvestingActivities,
          col7: data[6]?.otherInvestingActivities,
          col8: data[7]?.otherInvestingActivities,
          col9: data[8]?.otherInvestingActivities,
          col10: data[9]?.otherInvestingActivities,
        },
        {
          col0: name[2],
          col1: data[0]?.totalInvestingCashFlows,
          col2: data[1]?.totalInvestingCashFlows,
          col3: data[2]?.totalInvestingCashFlows,
          col4: data[3]?.totalInvestingCashFlows,
          col5: data[4]?.totalInvestingCashFlows,
          col6: data[5]?.totalInvestingCashFlows,
          col7: data[6]?.totalInvestingCashFlows,
          col8: data[7]?.totalInvestingCashFlows,
          col9: data[8]?.totalInvestingCashFlows,
          col10: data[9]?.totalInvestingCashFlows,
        },
      ]
      setInvestingData(invest)
    }

  }, [data])
  return (
    <div className="table-responsive">
      <table className="table table-bordered mt-4 most_tables">
        <thead className="table-light">
          <tr>
            <th scope="col">Investing Activities</th>
            {data && data.length > 0 && data.map((el, i) => {
              return (
                <th scope="col">{el.quarter > 0 ? 'Q' + el.quarter : ''} {el.year}</th>
              )
            })}
          </tr>
        </thead>
        <tbody className="border-top-0">
          {loading && <tr style={{ height: 100, textAlign: 'center' }}>
            <td colSpan={6} style={{ textAlign: 'center' }}><CircularProgress size={50} /></td>
          </tr>}
          {!loading && InvestingData && InvestingData.length > 0 && InvestingData.map((ob, i) => {
            return (
              <tr key={i}>
                {ob.col0 && <td>{ob.col0}</td>}
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
  )
}

export default Investing