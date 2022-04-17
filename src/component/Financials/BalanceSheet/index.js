import React, { useEffect, useState } from 'react'
import { getBalanceSheet } from '../../api/financials'
import LiabilitiesShareholder from './LiabilitiesShareholder'
import Saily1YearVolatility from './Saily1YearVolatility'


const BalanceSheet = ({ symbol }) => {

    const [Period , setPeriod] = useState('quarterly')
    const [View , setView] = useState(5)
    const [BalanceSheetData , setBalanceSheetData] = useState([])
    const [Loading , setLoading] = useState(false)

    useEffect(() => {
        (async()=>{
            setLoading(true)
            if(symbol){
                var res = await getBalanceSheet(symbol , Period , View)
                if(res && res.status === 200 && res?.data?.length > 0){
                    setBalanceSheetData(res?.data)
                }
                setLoading(false)
            }
        })()
    }, [symbol, Period , View])



    return (
        <>
            <div className="col-lg-12 mb-4">
                <div className="card p-3">
                    <form className="form-group" role="search" method="get" id="searchform" action="">
                        <h5 className="mb-3"><strong>Balance Sheet</strong></h5>
                        <div className="d-inline-flex align-items-center">
                            <label htmlFor="" className="me-3 font-bd">Period</label>
                            <select 
                                className="form-select me-3" 
                                aria-label="Default select example"
                                onChange={(e)=>setPeriod(e.target.value)}
                            >
                                <option selected value='quarterly'>Quarterly</option>
                                <option value="annual">annual</option>
                            </select>

                            <label htmlFor="" className="me-3 font-bd">View</label>
                            <select 
                                className="form-select me-3" 
                                aria-label="Default select example"
                                onChange={(e)=>setView(e.target.value)}
                            >
                                <option selected value="5">Last 5 Years</option>
                                <option value="10">Last 10 Years</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
            <Saily1YearVolatility data={BalanceSheetData} Loading={Loading}/>
            <LiabilitiesShareholder data={BalanceSheetData} Loading={Loading}/>
        </>
    )
}

export default BalanceSheet