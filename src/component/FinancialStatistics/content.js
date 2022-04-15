import React from 'react'

const Content = ({Statisticss}) => {
    console.log('Statements',Statisticss)
    return (
        <div className="row">
            <div className="col-lg-6 mb-5">
                <div className="d-flex align-items-center justify-content-start bg-light p-3 border-bottom-0 mb-3">
                    <h6 className="m-0"><strong>Pricing Measures</strong></h6>
                </div>
                <div className="key_status">
                    <ul>
                        <li><a href="javascript:void(0)">Market Cap</a> <span>{Statisticss?.marketcap}</span></li>
                        <li><a href="javascript:void(0)">Enterprise Value</a> <span>{Statisticss?.enterpriseValue}</span></li>
                        <li><a href="javascript:void(0)">P/E Ratio</a> <span>{Statisticss?.peRatio}</span></li>
                        <li><a href="javascript:void(0)">EV/Sales</a> <span>-10</span></li>
                        <li><a href="javascript:void(0)">Price/Sales</a> <span>{Statisticss?.priceToSales}</span></li>
                        <li><a href="javascript:void(0)">Price/Book</a> <span>{Statisticss?.priceToBook}</span></li>
                        <li><a href="javascript:void(0)">Forward P/E</a> <span>{Statisticss?.forwardPERatio}</span></li>
                        <li><a href="javascript:void(0)">PEG Ratio</a> <span>{Statisticss?.pegRatio}</span></li>
                        <li><a href="javascript:void(0)">P/E High</a> <span>{Statisticss?.peHigh}</span></li>
                        <li><a href="javascript:void(0)">P/E Low</a> <span>{Statisticss?.peLow}</span></li>
                        <li><a href="javascript:void(0)">Call-Put Ratio</a> <span>{Statisticss?.putCallRatio}</span></li>
                    </ul>
                </div>
                <div className="d-flex align-items-center justify-content-start bg-light p-3 border-bottom-0 mb-3">
                    <h6 className="m-0"><strong>Share Statistics</strong></h6>
                </div>
                <div className="key_status">
                    <ul>
                        <li><a href="javascript:void(0)">Market Cap</a> <span>{Statisticss?.marketcap}</span></li>
                        <li><a href="javascript:void(0)">Enterprise Value</a> <span>{Statisticss?.enterpriseValue}</span></li>
                        <li><a href="javascript:void(0)">P/E Ratio</a> <span>{Statisticss?.peRatio}</span></li>
                        <li><a href="javascript:void(0)">EV/Sales</a> <span>-10</span></li>
                        <li><a href="javascript:void(0)">Price/Sales</a> <span>{Statisticss?.priceToSales}</span></li>
                    </ul>
                </div>
                <div className="d-flex align-items-center justify-content-start bg-light p-3 border-bottom-0 mb-3">
                    <h6 className="m-0"><strong>Earnings & Dividends</strong></h6>
                </div>
                <div className="key_status">
                    <ul>
                        <li><a href="javascript:void(0)">Market Cap</a> <span>{Statisticss?.marketcap}</span></li>
                        <li><a href="javascript:void(0)">Enterprise Value</a> <span>{Statisticss?.enterpriseValue}</span></li>
                        <li><a href="javascript:void(0)">P/E Ratio</a> <span>{Statisticss?.peRatio}</span></li>
                        <li><a href="javascript:void(0)">EV/Sales</a> <span>-10</span></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-6 mb-5">
                <div className="d-flex align-items-center justify-content-start bg-light p-3 border-bottom-0 mb-3">
                    <h6 className="m-0"><strong>Financial Highlights</strong></h6>
                </div>
                <div className="key_status">
                    <ul>
                        <li><a href="javascript:void(0)">Total Revenue</a> <span>{Statisticss?.totalRevenue}</span></li>
                        <li><a href="javascript:void(0)">Gross Profit</a> <span>{Statisticss?.grossProfit}</span></li>
                        <li><a href="javascript:void(0)">EBITDA</a> <span>{Statisticss?.EBITDA}</span></li>
                        <li><a href="javascript:void(0)">Revenue Per Share</a> <span>{Statisticss?.revenuePerShare}</span></li>
                        <li><a href="javascript:void(0)">Revenue Per Employee</a> <span>{Statisticss?.revenuePerEmployee}</span></li>
                        <li><a href="javascript:void(0)">Profit Margin</a> <span>{Statisticss?.profitMargin}%</span></li>
                        <li><a href="javascript:void(0)">Total Cash</a> <span>{Statisticss?.totalCash}</span></li>
                        <li><a href="javascript:void(0)">Current Debt</a> <span>{Statisticss?.currentDebt}</span></li>
                        <li><a href="javascript:void(0)">Debt To Equity</a> <span>{Statisticss?.debtToEquity}</span></li>
                    </ul>
                </div>
                <div className="d-flex align-items-center justify-content-start bg-light p-3 border-bottom-0 mb-3">
                    <h6 className="m-0"><strong>Stock Price History</strong></h6>
                </div>
                <div className="key_status">
                    <ul>
                        <li><a href="javascript:void(0)">52 Week High</a> <span>{Statisticss?.week52high}</span></li>
                        <li><a href="javascript:void(0)">52 Week Low</a> <span>{Statisticss?.week52low}</span></li>
                        <li><a href="javascript:void(0)">52 Week Change</a> <span>{Statisticss?.week52change}</span></li>
                        <li><a href="javascript:void(0)">200 Day Moving Average</a> <span>{Statisticss?.day200MovingAvg}</span></li>
                        <li><a href="javascript:void(0)">50 Day Moving Average</a> <span>{Statisticss?.day50MovingAvg}</span></li>
                        <li><a href="javascript:void(0)">Beta(1 Year)</a> <span>{Statisticss?.beta}</span></li>
                        <li><a href="javascript:void(0)">5 Year Change</a> <span>{Statisticss?.year5ChangePercent}</span></li>
                        <li><a href="javascript:void(0)">2 Year Change</a> <span>{Statisticss?.year2ChangePercent}</span></li>
                        <li><a href="javascript:void(0)">1 Year Change</a> <span>{Statisticss?.year1ChangePercent}</span></li>
                        <li><a href="javascript:void(0)">YTD Change</a> <span>{Statisticss?.ytdChangePercent}</span></li>
                        {/* <li><a href="javascript:void(0)">1 Year Change</a> <span>{Statements?.}</span></li>
                        <li><a href="javascript:void(0)">YTD Change</a> <span>{Statements?.}</span></li>
                        <li><a href="javascript:void(0)">5 Year Change</a> <span>{Statements?.}</span></li>
                        <li><a href="javascript:void(0)">2 Year Change</a> <span>{Statements?.}</span></li>
                        <li><a href="javascript:void(0)">1 Year Change</a> <span>{Statements?.}</span></li>
                        <li><a href="javascript:void(0)">YTD Change</a> <span>{Statements?.}</span></li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Content