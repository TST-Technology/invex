import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { getFinancialStats } from '../api/financialStatistics';
import { useParams } from 'react-router-dom' 
import CapitalStructure from './Data/CapitalStructure';
import Pricing from './Data/Pricing';
import EfficiencyRatios from './Data/EfficiencyRatios';
import Growth from './Data/Growth';
import Returns from './Data/Returns';
import LeverageRatio from './Data/LeverageRatio';
import LiquidityRatios from './Data/LiquidityRatios';
import EarningsDividends from './Data/EarningsDividends';
import ProfitMargins from './Data/ProfitMargins';
import CurrentFinancialHighlights from './Data/CurrentFinancialHighlights';
const FinancialStatistics = () => {
    
    const [Period , setPeriod] = useState('quarterly')
    const [View , setView] = useState(5)
    const [FinancialStatisticsData , setFinancialStatisticsData] = useState([])
    const [Loading , setLoading] = useState(false)
    const [tab, setTab] = useState(1)

    const {symbol} = useParams()
    
    useEffect(() => {
        (async()=>{
            setLoading(true)
            if(symbol){
                var res = await getFinancialStats(symbol , Period , View)
                if(res && res.status === 200 && res?.data?.length > 0){
                    console.log(res.data)
                    setFinancialStatisticsData(res?.data)
                }
                setLoading(false)
            }
        })()
    }, [symbol, Period , View])

    return (
      <div className='main'>
        <section className='top_carosuel_sec financial_statc'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-12 mb-5'>
                <div className='card mb-3'>
                  <div className='card-body bg-base d-lg-flex d-md-flex d-block align-items-center rounded-3 p-4'>
                    <h5 className='m-0 pe-3'>Financial Statistics</h5>
                  </div>
                </div>
                <div className='card'>
                  <div className='card-body'>
                    <div className='top_button_panel top_scroll mt-4 mb-3 wrapperzz'>
                      <div className='scrollzz'>
                        <button
                          type='button'
                          onClick={() => setTab(1)}
                          className={
                            'btn btn-light' + (tab == 1 ? ' active ' : '')
                          }
                        >
                          Capital Structure
                        </button>
                        <button
                          type='button'
                          onClick={() => setTab(2)}
                          className={
                            'btn btn-light' + (tab == 2 ? ' active ' : '')
                          }
                        >
                          Pricing
                        </button>
                        <button
                          type='button'
                          onClick={() => setTab(3)}
                          className={
                            'btn btn-light' + (tab == 3 ? ' active ' : '')
                          }
                        >
                          Efficiency Ratios
                        </button>
                        <button
                          type='button'
                          onClick={() => setTab(4)}
                          className={
                            'btn btn-light' + (tab == 4 ? ' active ' : '')
                          }
                        >
                          Growth
                        </button>
                        <button
                          type='button'
                          onClick={() => setTab(5)}
                          className={
                            'btn btn-light' + (tab == 5 ? ' active ' : '')
                          }
                        >
                          Returns
                        </button>
                        <button
                          type='button'
                          onClick={() => setTab(6)}
                          className={
                            'btn btn-light' + (tab == 6 ? ' active ' : '')
                          }
                        >
                          Profit Margins
                        </button>
                        <button
                          type='button'
                          onClick={() => setTab(7)}
                          className={
                            'btn btn-light' + (tab == 7 ? ' active ' : '')
                          }
                        >
                          Leverage Ratios
                        </button>
                        <button
                          type='button'
                          onClick={() => setTab(8)}
                          className={
                            'btn btn-light' + (tab == 8 ? ' active ' : '')
                          }
                        >
                          Liquidity Ratios
                        </button>
                        <button
                          type='button'
                          onClick={() => setTab(9)}
                          className={
                            'btn btn-light' + (tab == 9 ? ' active ' : '')
                          }
                        >
                          Earnings & Dividends
                        </button>
                        <button
                          type='button'
                          onClick={() => setTab(10)}
                          className={
                            'btn btn-light' + (tab == 10 ? ' active ' : '')
                          }
                        >
                          Current Financial Highlights
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card p-3 mr-auto'>
                  <form
                    className='form-group'
                    role='search'
                    method='get'
                    id='searchform'
                    action=''
                  >
                    <div className='d-inline-flex align-items-center float-end'>
                      <label for='' className='me-3 font-bd'>
                        Period
                      </label>
                      <select
                        className='form-select me-3'
                        aria-label='Default select example'
                        onChange={(e) => setPeriod(e.target.value)}
                      >
                        <option selected value='quarterly'>
                          TTM
                        </option>
                        <option value='annual'>Annual</option>
                      </select>
                      <label for='' className='me-3 font-bd'>
                        View
                      </label>
                      <select
                        className='form-select me-3'
                        aria-label='Default select example'
                        onChange={(e) => setView(e.target.value)}
                      >
                        <option selected value='5'>
                          Last 5 years
                        </option>
                        <option value='10'>Last 10 years</option>
                      </select>
                    </div>
                  </form>
                </div>

                {tab === 1 && (
                  <CapitalStructure
                    data={FinancialStatisticsData}
                    Loading={Loading}
                  />
                )}
                {tab === 2 && (
                  <Pricing data={FinancialStatisticsData} Loading={Loading} />
                )}
                {tab === 3 && (
                  <EfficiencyRatios
                    data={FinancialStatisticsData}
                    Loading={Loading}
                  />
                )}
                {tab === 4 && (
                  <Growth data={FinancialStatisticsData} Loading={Loading} />
                )}
                {tab === 5 && (
                  <Returns data={FinancialStatisticsData} Loading={Loading} />
                )}
                {tab === 6 && (
                  <ProfitMargins
                    data={FinancialStatisticsData}
                    Loading={Loading}
                  />
                )}
                {tab === 7 && (
                  <LeverageRatio
                    data={FinancialStatisticsData}
                    Loading={Loading}
                  />
                )}
                {tab === 8 && (
                  <LiquidityRatios
                    data={FinancialStatisticsData}
                    Loading={Loading}
                  />
                )}
                {tab === 9 && (
                  <EarningsDividends
                    data={FinancialStatisticsData}
                    Loading={Loading}
                  />
                )}
                {tab === 10 && (
                  <CurrentFinancialHighlights
                    data={FinancialStatisticsData}
                    Loading={Loading}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
      // <section className="company_details">
      //     <div className="container">
      //         <div className="row">
      //             <Sidebar Company={Company} />
      //             <div className="col-lg-8">
      //                 <Content Statisticss={Statisticss} />
      //             </div>
      //         </div>
      //     </div>
      // </section>
    );
}

export default FinancialStatistics