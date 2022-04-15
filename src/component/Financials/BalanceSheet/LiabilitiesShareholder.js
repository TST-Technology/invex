import React, { useState , useEffect} from 'react'

const LiabilitiesShareholder = ({data}) => {
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
    const [CurrentLiabilities , setCurrentLiabilities ] = useState([])
    const [NonCurrentLiabilities , setNonCurrentLiabilities ] = useState([])
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
                },
                {
                    col0: name[1],
                    col1: data[0]?.currentLongTermDebt,
                    col2: data[1]?.currentLongTermDebt,
                    col3: data[2]?.currentLongTermDebt,
                    col4: data[3]?.currentLongTermDebt,
                    col5: data[4]?.currentLongTermDebt,
                },
                {
                    col0: name[2],
                    col1: data[0]?.otherCurrentLiabilities,
                    col2: data[1]?.otherCurrentLiabilities,
                    col3: data[2]?.otherCurrentLiabilities,
                    col4: data[3]?.otherCurrentLiabilities,
                    col5: data[4]?.otherCurrentLiabilities,
                },
                {
                    col0: name[3],
                    col1: data[0]?.totalCurrentLiabilities,
                    col2: data[1]?.totalCurrentLiabilities,
                    col3: data[2]?.totalCurrentLiabilities,
                    col4: data[3]?.totalCurrentLiabilities,
                    col5: data[4]?.totalCurrentLiabilities,
                },
                {
                    col0: name[4],
                    col1: data[0]?.totalCurrentLiabilities,
                    col2: data[1]?.totalCurrentLiabilities,
                    col3: data[2]?.totalCurrentLiabilities,
                    col4: data[3]?.totalCurrentLiabilities,
                    col5: data[4]?.totalCurrentLiabilities,
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
                },
                {
                    col0: nonName[1],
                    col1: data[0]?.otherLiabilities,
                    col2: data[1]?.otherLiabilities,
                    col3: data[2]?.otherLiabilities,
                    col4: data[3]?.otherLiabilities,
                    col5: data[4]?.otherLiabilities,
                },
                {
                    col0: nonName[2],
                    col1: data[0]?.nonCurrentLiabilitiesTotal,
                    col2: data[1]?.nonCurrentLiabilitiesTotal,
                    col3: data[2]?.nonCurrentLiabilitiesTotal,
                    col4: data[3]?.nonCurrentLiabilitiesTotal,
                    col5: data[4]?.nonCurrentLiabilitiesTotal,
                },
                {
                    col0: nonName[3],
                    col1: data[0]?.nonCurrentLiabilitiesTotal,
                    col2: data[1]?.nonCurrentLiabilitiesTotal,
                    col3: data[2]?.nonCurrentLiabilitiesTotal,
                    col4: data[3]?.nonCurrentLiabilitiesTotal,
                    col5: data[4]?.nonCurrentLiabilitiesTotal,
                },
                {
                    col0: nonName[4],
                    col1: data[0]?.totalAssets,
                    col2: data[1]?.totalAssets,
                    col3: data[2]?.totalAssets,
                    col4: data[3]?.totalAssets,
                    col5: data[4]?.totalAssets,
                },
                {
                    col0: nonName[5],
                    col1: data[0]?.totalLiabilities,
                    col2: data[1]?.totalLiabilities,
                    col3: data[2]?.totalLiabilities,
                    col4: data[3]?.totalLiabilities,
                    col5: data[4]?.totalLiabilities,
                },
                {
                    col0: nonName[6],
                    col1: data[0]?.minorityInterest,
                    col2: data[1]?.minorityInterest,
                    col3: data[2]?.minorityInterest,
                    col4: data[3]?.minorityInterest,
                    col5: data[4]?.minorityInterest,
                },
                {
                    col0: nonName[7],
                    col1: data[0]?.shareholderEquity,
                    col2: data[1]?.shareholderEquity,
                    col3: data[2]?.shareholderEquity,
                    col4: data[3]?.shareholderEquity,
                    col5: data[4]?.shareholderEquity,
                },
                {
                    col0: nonName[8],
                    col1: data[0]?.FiscalDate,
                    col2: data[1]?.FiscalDate,
                    col3: data[2]?.FiscalDate,
                    col4: data[3]?.FiscalDate,
                    col5: data[4]?.FiscalDate,
                },
                {
                    col0: nonName[9],
                    col1: data[0]?.liabilitiesShareholderEquityTotal,
                    col2: data[1]?.liabilitiesShareholderEquityTotal,
                    col3: data[2]?.liabilitiesShareholderEquityTotal,
                    col4: data[3]?.liabilitiesShareholderEquityTotal,
                    col5: data[4]?.liabilitiesShareholderEquityTotal,
                },
            ]
            console.log('nonCurrent',nonCurrent);
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
                                    <th scope="col">{el.quarter > 0 ? 'Q'+el.quarter : ''} {el.year}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody className="border-top-0">
                    {CurrentLiabilities && CurrentLiabilities.length > 0 && CurrentLiabilities.map((ob,i)=>{
                        console.log('ob',ob);
                        return(
                            <tr>
                                {ob.col0 && <td>{ob.col0}</td>}
                                {ob.col1 && <td>{ob.col1}</td>}
                                {ob.col2 && <td>{ob.col2}</td>}
                                {ob.col3 && <td>{ob.col3}</td>}
                                {ob.col4 && <td>{ob.col4}</td>}
                                {ob.col5 && <td>{ob.col5}</td>}
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
                                    <th scope="col">{el.quarter > 0 ? 'Q'+el.quarter : ''} {el.year}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody className="border-top-0">
                    {NonCurrentLiabilities && NonCurrentLiabilities.length > 0 && NonCurrentLiabilities.map((ob,i)=>{
                        return(
                            <tr>
                                {ob.col0 && <td>{ob.col0}</td>}
                                {ob.col1 && <td>{ob.col1}</td>}
                                {ob.col2 && <td>{ob.col2}</td>}
                                {ob.col3 && <td>{ob.col3}</td>}
                                {ob.col4 && <td>{ob.col4}</td>}
                                {ob.col5 && <td>{ob.col5}</td>}
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