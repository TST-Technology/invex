import { CircularProgress } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import abbreviateNumber from '../../Common/NumberFormat'
const LiabilitiesShareholder = ({ data, Loading }) => {
    var name = [
        'Accounts Payable',
        'Current Long TermDebt',
        'Other Current Liabilities',
        'Total Current Liabilities',
        'Current Assets Total',
    ]
    var nonName = [
        'longTermDebt',
        'Non-Current',
        'Non-Current Liabilities Total',
        'TotalAssets',
        'MinorityInterest',
        'ShareholderEquity',
        "LIABILITIES & SHAREHOLDER'S EQUITY TOTAL",
        'Common Shares Outstanding',
        'FiscalDate',
        'ReportDate'
    ]
    
    const [CurrentLiabilities, setCurrentLiabilities] = useState([])
    const [NonCurrentLiabilities, setNonCurrentLiabilities] = useState([])
    useEffect(() => {
        if (data && data.length > 0) {
            var current = [
                {
                    col0: name[0],
                    col1: data[0]?.accountsPayable,
                    col2: data[1]?.accountsPayable,
                    col3: data[2]?.accountsPayable,
                    col4: data[3]?.accountsPayable,
                    col5: data[4]?.accountsPayable,
                    col6: data[5]?.accountsPayable,
                    col7: data[6]?.accountsPayable,
                    col8: data[7]?.accountsPayable,
                    col9: data[8]?.accountsPayable,
                    col10: data[9]?.accountsPayable,
                },
                {
                    col0: name[1],
                    col1: data[0]?.currentLongTermDebt,
                    col2: data[1]?.currentLongTermDebt,
                    col3: data[2]?.currentLongTermDebt,
                    col4: data[3]?.currentLongTermDebt,
                    col5: data[4]?.currentLongTermDebt,
                    col6: data[5]?.currentLongTermDebt,
                    col7: data[6]?.currentLongTermDebt,
                    col8: data[7]?.currentLongTermDebt,
                    col9: data[8]?.currentLongTermDebt,
                    col10: data[9]?.currentLongTermDebt,
                },
                {
                    col0: name[2],
                    col1: data[0]?.otherCurrentLiabilities,
                    col2: data[1]?.otherCurrentLiabilities,
                    col3: data[2]?.otherCurrentLiabilities,
                    col4: data[3]?.otherCurrentLiabilities,
                    col5: data[4]?.otherCurrentLiabilities,
                    col6: data[5]?.otherCurrentLiabilities,
                    col7: data[6]?.otherCurrentLiabilities,
                    col8: data[7]?.otherCurrentLiabilities,
                    col9: data[8]?.otherCurrentLiabilities,
                    col10: data[9]?.otherCurrentLiabilities,
                },
                {
                    col0: name[3],
                    col1: data[0]?.totalCurrentLiabilities,
                    col2: data[1]?.totalCurrentLiabilities,
                    col3: data[2]?.totalCurrentLiabilities,
                    col4: data[3]?.totalCurrentLiabilities,
                    col5: data[4]?.totalCurrentLiabilities,
                    col6: data[5]?.totalCurrentLiabilities,
                    col7: data[6]?.totalCurrentLiabilities,
                    col8: data[7]?.totalCurrentLiabilities,
                    col9: data[8]?.totalCurrentLiabilities,
                    col10: data[9]?.totalCurrentLiabilities,
                },
                {
                    col0: name[4],
                    col1: data[0]?.totalCurrentLiabilities,
                    col2: data[1]?.totalCurrentLiabilities,
                    col3: data[2]?.totalCurrentLiabilities,
                    col4: data[3]?.totalCurrentLiabilities,
                    col5: data[4]?.totalCurrentLiabilities,
                    col6: data[5]?.totalCurrentLiabilities,
                    col7: data[6]?.totalCurrentLiabilities,
                    col8: data[7]?.totalCurrentLiabilities,
                    col9: data[8]?.totalCurrentLiabilities,
                    col10: data[9]?.totalCurrentLiabilities,
                }
            ]
            setCurrentLiabilities(current)
            var nonCurrent = [
                {
                    col0: nonName[0],
                    col1: data[0]?.longTermDebt,
                    col2: data[1]?.longTermDebt,
                    col3: data[2]?.longTermDebt,
                    col4: data[3]?.longTermDebt,
                    col5: data[4]?.longTermDebt,
                    col6: data[5]?.longTermDebt,
                    col7: data[6]?.longTermDebt,
                    col8: data[7]?.longTermDebt,
                    col9: data[8]?.longTermDebt,
                    col10: data[9]?.longTermDebt,
                },
                {
                    col0: nonName[1],
                    col1: data[0]?.otherLiabilities,
                    col2: data[1]?.otherLiabilities,
                    col3: data[2]?.otherLiabilities,
                    col4: data[3]?.otherLiabilities,
                    col5: data[4]?.otherLiabilities,
                    col6: data[5]?.otherLiabilities,
                    col7: data[6]?.otherLiabilities,
                    col8: data[7]?.otherLiabilities,
                    col9: data[8]?.otherLiabilities,
                    col10: data[9]?.otherLiabilities,
                },
                {
                    col0: nonName[2],
                    col1: data[0]?.nonCurrentLiabilitiesTotal,
                    col2: data[1]?.nonCurrentLiabilitiesTotal,
                    col3: data[2]?.nonCurrentLiabilitiesTotal,
                    col4: data[3]?.nonCurrentLiabilitiesTotal,
                    col5: data[4]?.nonCurrentLiabilitiesTotal,
                    col6: data[5]?.nonCurrentLiabilitiesTotal,
                    col7: data[6]?.nonCurrentLiabilitiesTotal,
                    col8: data[7]?.nonCurrentLiabilitiesTotal,
                    col9: data[8]?.nonCurrentLiabilitiesTotal,
                    col10: data[9]?.nonCurrentLiabilitiesTotal,
                },
                {
                    col0: nonName[3],
                    col1: data[0]?.nonCurrentLiabilitiesTotal,
                    col2: data[1]?.nonCurrentLiabilitiesTotal,
                    col3: data[2]?.nonCurrentLiabilitiesTotal,
                    col4: data[3]?.nonCurrentLiabilitiesTotal,
                    col5: data[4]?.nonCurrentLiabilitiesTotal,
                    col6: data[5]?.nonCurrentLiabilitiesTotal,
                    col7: data[6]?.nonCurrentLiabilitiesTotal,
                    col8: data[7]?.nonCurrentLiabilitiesTotal,
                    col9: data[8]?.nonCurrentLiabilitiesTotal,
                    col10: data[9]?.nonCurrentLiabilitiesTotal,
                },
                {
                    col0: nonName[4],
                    col1: data[0]?.totalAssets,
                    col2: data[1]?.totalAssets,
                    col3: data[2]?.totalAssets,
                    col4: data[3]?.totalAssets,
                    col5: data[4]?.totalAssets,
                    col6: data[5]?.totalAssets,
                    col7: data[6]?.totalAssets,
                    col8: data[7]?.totalAssets,
                    col9: data[8]?.totalAssets,
                    col10: data[9]?.totalAssets,
                },
                {
                    col0: nonName[5],
                    col1: data[0]?.totalLiabilities,
                    col2: data[1]?.totalLiabilities,
                    col3: data[2]?.totalLiabilities,
                    col4: data[3]?.totalLiabilities,
                    col5: data[4]?.totalLiabilities,
                    col6: data[5]?.totalLiabilities,
                    col7: data[6]?.totalLiabilities,
                    col8: data[7]?.totalLiabilities,
                    col9: data[8]?.totalLiabilities,
                    col10: data[9]?.totalLiabilities,
                },
                {
                    col0: nonName[6],
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
                },
                {
                    col0: nonName[7],
                    col1: data[0]?.shareholderEquity,
                    col2: data[1]?.shareholderEquity,
                    col3: data[2]?.shareholderEquity,
                    col4: data[3]?.shareholderEquity,
                    col5: data[4]?.shareholderEquity,
                    col6: data[5]?.shareholderEquity,
                    col7: data[6]?.shareholderEquity,
                    col8: data[7]?.shareholderEquity,
                    col9: data[8]?.shareholderEquity,
                    col10: data[9]?.shareholderEquity,
                },
                {
                    col0: nonName[8],
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
                },
                {
                    col0: nonName[9],
                    col1: data[0]?.liabilitiesShareholderEquityTotal,
                    col2: data[1]?.liabilitiesShareholderEquityTotal,
                    col3: data[2]?.liabilitiesShareholderEquityTotal,
                    col4: data[3]?.liabilitiesShareholderEquityTotal,
                    col5: data[4]?.liabilitiesShareholderEquityTotal,
                    col6: data[5]?.liabilitiesShareholderEquityTotal,
                    col7: data[6]?.liabilitiesShareholderEquityTotal,
                    col8: data[7]?.liabilitiesShareholderEquityTotal,
                    col9: data[8]?.liabilitiesShareholderEquityTotal,
                    col10: data[9]?.liabilitiesShareholderEquityTotal,
                },
            ]
            setNonCurrentLiabilities(nonCurrent)
        }

    }, [data])
    return (
        <>
            <h6 className="mb-4 mt-5"><strong>Liabilities & Shareholder's Equity</strong></h6>
            <div className="table-responsive">
                <table className="table table-bordered m-0 most_tables">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Current Liabilities</th>
                            {data && data.length > 0 && data.map((el, i) => {
                                return (
                                    <th key={i} scope="col">{el.quarter > 0 ? 'Q' + el.quarter : ''} {el.year}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody className="border-top-0">
                        {Loading && <tr style={{ height: 100, textAlign: 'center' }}>
                            <td colSpan={6} style={{textAlign:'center'}}><CircularProgress size={50} /></td>
                        </tr>}
                        {!Loading && CurrentLiabilities && CurrentLiabilities.length > 0 && CurrentLiabilities.map((ob, i) => {
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
                            )
                        })}
                    </tbody>
                    <tbody className="border-top-0">
                        <tr>
                            <td className="p-3"></td>
                        </tr>
                    </tbody>
                    <thead className="table-light border-top-0">
                        <tr>
                            <th scope="col">Non-Current Liabilities</th>
                            {data && data.length > 0 && data.map((el, i) => {
                                return (
                                    <th key={i} scope="col">{el.quarter > 0 ? 'Q' + el.quarter : ''} {el.year}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody className="border-top-0">
                        {Loading && <tr style={{ height: 100, textAlign: 'center' }}>
                            <td colSpan={6} style={{textAlign:'center'}}><CircularProgress size={50} /></td>
                        </tr>}
                        {!Loading && NonCurrentLiabilities && NonCurrentLiabilities.length > 0 && NonCurrentLiabilities.map((ob, i) => {
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
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default LiabilitiesShareholder