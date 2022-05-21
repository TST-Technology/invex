import React from 'react'
import marked_img from '../Common/Images/marked_img.png'
import image1 from '../Common/Images/image1.png'
import finchart from '../Common/Images/fin-chart.png'
import graph from '../Common/Images/graph-2.png'

const ValuationReport = () => {
  return (
    <div className="main">
        <section className="valuation_report_sec">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-12 mb-5">
                                <div className="card mb-5">
                                    <div className="card-body bg-base d-lg-flex d-md-flex d-block align-items-center rounded-3 p-4">
                                        <h5 className="m-0 pe-3">Valuation Report</h5><small>Stock Forecast, Predictions & Price Target</small>
                                    </div>
                                </div>

                                <div className="card companyviewblk compprofile_block mb-5">
                                    <div className="card-header">
                                        <div className="d-flex align-items-center justify-content-left bg-light p-2 border-bottom-0">
                                            <h6 className="m-0"><strong>Analyst Notes</strong></h6>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="description-para">
                                            <div className="key_status">
                                                <p>Moderna is a young growth company it has potential to grow more in the upcoming years because of its research. 										
                                                    As predicted by the 17 analyst the mean sales growth is estimated as 20.1B and 18.5B for the year 2021 and 2022 respectively. The high sales estimation is 22B and 36.6B & the low sales estimation is 16.9b and 10.2B for the year 2021 and 2022 respectively. Because of covid vaccine analyst are predicting high growth in the revenue. Moderna just got profitable in this quarture and has manage make margin of 68%.before it was loss making company. The margin of the comparable firm like Pfizer generally between 25% to 30%.										
                                                    Bank of America analyst Geoff Meacham wrote in a note published  that the current valuation remains “unreasonable.” In order to justify the market capitalization, an	investor would need to assume that the company would sell up to 1.5 billion doses of its Covid-19 vaccine each year, and a 100% probability of success for the entire pipeline with aggregate peak sales of $30 billion.										
                                                    Keeping optimistic view, after the surge in the revenue in 2022, we kept the revenue grow at the Risk Free Rate for the entire year same for the next 10 years.			
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-bordered m-0 most_tables">
                                        <thead className="table-light">
                                            <tr>
                                                <th scope="col">-</th>
                                                <th scope="col">Best case</th>
                                                <th scope="col">Base Case</th>
                                                <th scope="col">Worst Case</th>
                                                <th scope="col">Manual</th>
                                            </tr>
                                        </thead>
                                        <tbody className="border-top-0">
                                            <tr>
                                                <td>Growth this year</td>
                                                <td>333.0%</td>
                                                <td>300.0%</td>
                                                <td>233.0%</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <td>Growth next year</td>
                                                <td>333.0%</td>
                                                <td>300.0%</td>
                                                <td>233.0%</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <td>Compound anual revenue groth rate for Year 3-5</td>
                                                <td>333.0%</td>
                                                <td>300.0%</td>
                                                <td>233.0%</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <td>Opratiing margin this year/he</td>
                                                <td>333.0%</td>
                                                <td>300.0%</td>
                                                <td>233.0%</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <td>Opratiing margin next year</td>
                                                <td>333.0%</td>
                                                <td>300.0%</td>
                                                <td>233.0%</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <td>Opratiing margin year 3-5</td>
                                                <td>333.0%</td>
                                                <td>300.0%</td>
                                                <td>233.0%</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <td>Target operting margin</td>
                                                <td>333.0%</td>
                                                <td>300.0%</td>
                                                <td>233.0%</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <td>Cost of capital</td>
                                                <td>333.0%</td>
                                                <td>300.0%</td>
                                                <td>233.0%</td>
                                                <td>-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="card companyviewblk compprofile_block mt-5 mb-4">
                                    <div className="card-header">
                                        <div className="d-flex align-items-center justify-content-left bg-light p-2 border-bottom-0">
                                            <h6 className="m-0"><strong>Industrials: Aerospace & Defense</strong></h6>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="top_button_panel mb-3">
                                            <span className="pe-3 pb-3"><small><strong>Choose the case</strong></small></span>
                                            <button type="button" className="btn btn-info">Best case</button>
                                            <button type="button" className="btn btn-light"> Base care</button>                        
                                            <button type="button" className="btn btn-light"> Worst care</button>
                                            <button type="button" className="btn btn-light"> Manual</button>
                                        </div>

                                        <div className="scenario justify-content-between">
                                            <span className="best_scena">Estimated value / share</span>
                                            <div className="chart-text">
                                                <p className="card-text up m-0"><strong>$235.49</strong></p>
                                                <p className="text up m-0 ms-2">(+34%)</p>
                                            </div>
                                            <div className="text-end">
                                                <p className="m-0"><small>Value of equity (Millions): $76,485.50</small></p>
                                                <p className="m-0"><small>Current price: $391.42</small></p>
                                            </div>
                                        </div>

                                        <div className="mt-5">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h6 className="mb-3"><strong>Revenue <br/>(Future Expectation)</strong></h6>
                                                    <small>All values are in Billion</small>
                                                </div>
                                                <div className="col-lg-9">
                                                    <img src={finchart} className="img-fluid" alt="chart"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h6 className="mb-3"><strong>Revenue <br/>(Future Expectation)</strong></h6>
                                                    <small>All values are in Billion</small>
                                                </div>
                                                <div className="col-lg-9">
                                                    <img src={finchart} className="img-fluid" alt="chart"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h6 className="mb-3"><strong>Free cash flow to firm <br/>(Future Expectation)</strong></h6>
                                                    <small>All values are in Billion</small>
                                                </div>
                                                <div className="col-lg-9">
                                                    <img src={finchart} className="img-fluid" alt="chart"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h6 className="mb-3"><strong>Price Target <br/>(Future Expectation)</strong></h6>
                                                    <small>All values are in Billion</small>
                                                </div>
                                                <div className="col-lg-9">
                                                    <img src={finchart} className="img-fluid" alt="chart"/>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>   
                                
                                <div className="mt-5 mb-5">
                                    <h6 className="mb-4"><strong>Notes For The Professionals</strong></h6>
                                    <ul>
                                        <li>The above estimations are derived from the Free Cash Flow To Firm Valuation.</li>
                                        <li>We considered the Research & Development expenses as Capital Expense rather than operating expense. Hence, we capitalized the R&D, therefore the current operating margin shown by us may vary with the margin as reported by the company.</li>
                                        <li>The company’s Options outstanding(if any) has been taken into account in the valuation.</li>
                                        <li>Since we cannot estimate cash flows forever, we estimated cash flows for a
                                             “growth period” and then estimated a TERMINAL VALUE(not shown in cash flow), to capture the value
                                             at the end of the period.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div className="col-lg-4">
                        {/* <!-- company left details box start --> */}
                        <div className="card companyviewblk compny_left_detail brand_valuation mb-4">
                            <div className="saved-blk"><a href="javascript:void(0);">
                                <img className="upper marked" src={marked_img} alt="bookmark"/></a>
                            </div>
                            <div className="card-body">
                                <div className="comp_brand">
                                    <div className="img">
                                        <img src={image1} alt="image"/>
                                    </div>
                                    <div className="title1">
                                        <h5 className="card-title">APPLE  INC</h5>
                                        <p className="company m-0">AAPL</p>
                                    </div>
                                </div>
                                <div className="marketviewblk">
                                    <div className="chart-text">
                                        <p className="market_price">$235.49</p>
                                        <p className="market_profit up">+3.10 (+1.3%)</p>
                                    </div>
                                    <div className="chart-img ms-auto">
                                        <img src={graph} alt="image"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- company left details box end --> */}
                        <div className="d-flex align-items-center justify-content-center bg-light p-3 border-bottom-0">
                            <h6 className="m-0"><strong>View chart and details</strong></h6>
                        </div>
                        {/* <!-- Basic Company Facts section start--> */}
                        <div className="col-lg-12 mt-3 mb-5">
                            <h6 className="mb-3"><strong>Basic Company Facts </strong></h6>
                            <div className="key_status">
                                <ul>
                                    <li><a href="javascript:void(0)">Fiscal Year:</a> <span>2021 Q1</span></li>
                                    <li><a href="javascript:void(0)">Company Ticker:</a> <span>MRNA</span></li>
                                    <li><a href="javascript:void(0)">Country of Incorporation:</a> <span>United States</span></li>
                                    <li><a href="javascript:void(0)">Currency Of Valuation:</a> <span>USD</span></li>
                                    <li><a href="javascript:void(0)">Sector (US):</a> <span>Healthcare</span></li>
                                    <li><a href="javascript:void(0)">Industry (US):</a> <span>Drugs (Biotechnology)</span></li>
                                    <li><a href="javascript:void(0)">Current Market Cap(billions):</a> <span>$158.0</span></li>
                                    <li><a href="javascript:void(0)">Current Stock Price:</a> <span>$391.4</span></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Basic Company Facts section end--> */}
                        {/* <!-- Company current financial section start--> */}
                        <div className="col-lg-12 mt-3 mb-5">
                            <h6 className="mb-3"><strong>Company's Current Financials(millions) </strong></h6>
                            <div className="key_status">
                                <ul>
                                    <li><a href="javascript:void(0)">Revenues</a> <span>$5,091.0</span></li>
                                    <li><a href="javascript:void(0)">Income Before Interest & Tax</a> <span>$2,420.9</span></li>
                                    <li><a href="javascript:void(0)">Shareholders Equity</a> <span>$6,704.0</span></li>
                                    <li><a href="javascript:void(0)">Total Debt</a> <span>$328.0</span></li>
                                    <li><a href="javascript:void(0)">Invested capital</a> <span>$1,031.9</span></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Company current financial section end--> */}
                        {/* <!-- Company current financial section start--> */}
                        <div className="col-lg-12 mt-3 mb-5">
                            <h6 className="mb-3"><strong>Current Fundamental Metrices </strong></h6>
                            <div className="key_status">
                                <ul>
                                    <li><a href="javascript:void(0)">Pre-tax operating margin</a> <span>62.76%</span></li>
                                    <li><a href="javascript:void(0)">Sales to capital ratio</a> <span>4.93</span></li>
                                    <li><a href="javascript:void(0)">Return on invested capital</a> <span>226.02%</span></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Company current financial section end--> */}
                    </div>
                </div>
            </div>
        </section>
        
    </div>
  )
}

export default ValuationReport