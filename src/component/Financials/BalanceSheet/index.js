import React, { useEffect, useState } from 'react'
import LiabilitiesShareholder from './LiabilitiesShareholder'
import Saily1YearVolatility from './Saily1YearVolatility'

const data =
    {
        accountsPayable: 54763000000,
        capitalSurplus: null,
        commonStock: 16701272000,
        currency: "USD",
        currentAssets: 134836000000,
        currentCash: 62639000000,
        currentLongTermDebt: 15613000000,
        filingType: "10-K",
        fiscalDate: "2021-09-25",
        fiscalQuarter: 0,
        fiscalYear: 2021,
        goodwill: 0,
        intangibleAssets: 0,
        inventory: 6580000000,
        longTermDebt: 109106000000,
        longTermInvestments: 216166000000,
        minorityInterest: 0,
        netTangibleAssets: 63090000000,
        otherAssets: 48849000000,
        otherCurrentAssets: 14111000000,
        otherCurrentLiabilities: 55105000000,
        otherLiabilities: 53325000000,
        propertyPlantEquipment: 39440000000,
        receivables: 51506000000,
        reportDate: "2021-10-29",
        retainedEarnings: 5562000000,
        shareholderEquity: 63090000000,
        shortTermInvestments: 14111000000,
        symbol: "AAPL",
        totalAssets: 351002000000,
        totalCurrentLiabilities: 125481000000,
        totalLiabilities: 287912000000,
        treasuryStock: 0,
        id: "BALANCE_SHEET",
        key: "AAPL",
        subkey: "annual",
        date: 1632528000000,
        updated: 1649775601000
    }

const BalanceSheet = () => {
    var CurrentAssetsName = [
        'Cash, Cash Equivalents & Short Term Investments',
        'Receivables',
        'Inventory',
        'OtherCurrentAssets',
        'Current Assets Total',
    ]
    var NonCurrentAssetsName = [
        'PropertyPlantEquipment',
        'IntangibleAssets',
        'Goodwill',
        'OtherCurrentAssets',
        'Long Term Investments',
        'Other Non-Current Assets',
        'Non-Current Assets Total',
        'TotalAssets',
    ]
    const [Period , setPeriod] = useState(null)
    const [View , setView] = useState([])
    const [CurrentAssets , setCurrentAssets] = useState([])
    const [NonCurrentAssets , setNonCurrentAssets] = useState([])

    useEffect(() => {
        var cAssets = []        
        CurrentAssetsName.map((item,index)=>{
            let obj = {
                name:CurrentAssetsName[index],
                col1:data.currentCash,
                col2:data.receivables,
                col3:data.inventory,
                col4:data.otherCurrentAssets,
                col5:data.totalAssets,
            }
            cAssets.push(obj)
        })
        setCurrentAssets(cAssets)
    }, [])

    return (
        <>
            <div className="col-lg-12 mb-4">
                <div className="card p-3">
                    <form className="form-group" role="search" method="get" id="searchform" action="">
                        <h5 className="mb-3"><strong>Balance Sheet</strong></h5>
                        <div className="d-inline-flex align-items-center">
                            <label htmlFor="" className="me-3 font-bd">Period</label>
                            <select className="form-select me-3" aria-label="Default select example">
                                <option selected>Quarterly</option>
                                <option value="1">annual</option>
                            </select>

                            <label htmlFor="" className="me-3 font-bd">View</label>
                            <select className="form-select me-3" aria-label="Default select example">
                                <option selected>Last 5 Years</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
            <Saily1YearVolatility data={CurrentAssets}/>
            <LiabilitiesShareholder/>
        </>
    )
}

export default BalanceSheet