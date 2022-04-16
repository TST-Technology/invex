import React, { useEffect, useState } from 'react'
import { getCashFlow } from '../../api/financials'

import Investing from './Investing'
import Financing from './Financing'
import NetIncome from './NetIncome'

const CashFlow = ({ symbol }) => {
    const [Period , setPeriod] = useState('quarterly')
    const [View , setView] = useState(5)
    const [cashFlow , setCashFlow] = useState([])
    const [loading , setLoading] = useState(false)
    // abbreviateNumbers()
    useEffect(() => {
        (async()=>{
            setLoading(true)
            if(symbol){
                var res = await getCashFlow(symbol,Period,View)
                if(res && res.status === 200 && res?.data?.length > 0){
                    setCashFlow(res?.data)
                }
            }
            setLoading(false)
        })()
    }, [symbol,Period,View])
    
    return (
        <>
            <div className="col-lg-12 mb-4">
                <div className="card p-3">
                    <form className="form-group" role="search" method="get" id="searchform" action="">
                        <h5 className="mb-3"><strong>Cash Flow</strong></h5>
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
            <NetIncome data={cashFlow} loading={loading}/>
            <Investing data={cashFlow} loading={loading}/>
            <Financing data={cashFlow} loading={loading}/>
        </>
    )
}

export default CashFlow