import React, { useEffect, useState } from 'react'
import BalanceSheet from './BalanceSheet'
import IncomeStatement from './IncomeStatement'
import CashFlow from './CashFlow'
import image1 from '../Common/Images/image1.png'
import graph from '../Common/Images/graph.png'
import search from '../Common/Images/search-b.png'
import { useParams } from 'react-router-dom'
import { getBookKeyStatus, getCompanyDataBySymbol } from '../api/commonApi'

const Financials = () => {

    const [company, setCompany] = useState(1)
    const [companyPrice, setcompanyPrice] = useState(1)
    const [tab, setTab] = useState(1)
    const {symbol} = useParams()   
    
    useEffect(() => {
        (async()=>{
            var res = await getCompanyDataBySymbol(symbol)
            if(res && res.status == 200 && res.data){
                setCompany(res.data)
            }
            var data = await getBookKeyStatus(symbol)
            if(data && data.status == 200 && data.data){
                setcompanyPrice(data.data.quote)
            }
        })()
    }, [symbol])
    console.log('companyPrice',companyPrice);
    
    return (
        <main>
            <section className="company_details mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            <div className="card companyviewblk compny_left_detail">
                                <div className="card-body">
                                    <div className="description-para d-flex align-items-center justify-content-between">
                                        <div className="logo me-5">
                                            <div className="img">
                                                <img src={image1} alt="image" />
                                            </div>
                                            <div className="title1">
                                                <h5 className="card-title">{company?.companyName}</h5>
                                                <p className="company">{company?.symbol}</p>
                                            </div>
                                        </div>
                                        <div className="chart">
                                            <div className="chart-text mt-0">
                                                <p className="card-text up">${companyPrice?.latestPrice}</p>
                                                <p className="text up">{companyPrice?.change} ({companyPrice?.changePercent?.toFixed(2)}%)</p>
                                            </div>
                                        </div>
                                        <div className="chart-img me-5">
                                            <img src={graph} alt="graph" />
                                        </div>
                                        <div className="">
                                            <form className="form-group common_search mx-auto" role="search" method="get" id="searchform" action="">
                                                <div className="input-group">
                                                    <input type="text" value="" name="s" className="form-control" placeholder="Search for Symbol" id="example-search-input" autocomplete="off" />
                                                    <input type="submit" value="Search" id="search-submit" style={{ display: 'none' }} />
                                                    <span className="input-group-append d-flex align-items-center">
                                                        <label htmlFor="search-submit">
                                                            <img src={search} alt="search-icon" className="img-fluid" height="16" width="16" />
                                                        </label>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="top_button_panel mt-4 mb-3">
                                <label htmlFor="" className="font-bd me-3 mb-2">Financials: </label>
                                <button type="button" onClick={() => setTab(1)} className={"btn btn-light" + (tab == 1 ? ' active ' : '')}> Balance Sheet</button>
                                <button type="button" onClick={() => setTab(2)} className={"btn btn-light" + (tab == 2 ? ' active ' : '')}> Income Statement</button>
                                <button type="button" onClick={() => setTab(3)} className={"btn btn-light" + (tab == 3 ? ' active ' : '')}> Cash Flow</button>
                            </div>
                        </div>
                        {tab === 1 && <BalanceSheet symbol={symbol}/>}
                        {tab === 2 && <IncomeStatement symbol={symbol}/>}
                        {tab === 3 && <CashFlow symbol={symbol}/>}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Financials