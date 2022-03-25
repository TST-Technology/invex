import React from 'react'

const Content = ({Statements}) => {
    return (
        <div class="row">
            <div class="col-lg-6 mb-5">
                <div class="d-flex align-items-center justify-content-start bg-light p-3 border-bottom-0 mb-3">
                    <h6 class="m-0"><strong>Pricing Measures</strong></h6>
                </div>
                <div class="key_status">
                    <ul>
                        <li><a href="javascript:void(0)">Market Cap</a> <span>{Statements?.marketcap}</span></li>
                        <li><a href="javascript:void(0)">Enterprise Value</a> <span>{Statements?.enterpriseValue}</span></li>
                        <li><a href="javascript:void(0)">P/E Ratio</a> <span>{Statements?.peRatio}</span></li>
                        <li><a href="javascript:void(0)">EV/Sales</a> <span>-10</span></li>
                        <li><a href="javascript:void(0)">Price/Sales</a> <span>{Statements?.priceToSales}</span></li>
                        <li><a href="javascript:void(0)">Price/Book</a> <span>{Statements?.priceToBook}</span></li>
                        <li><a href="javascript:void(0)">Forward P/E</a> <span>{Statements?.forwardPERatio}</span></li>
                        <li><a href="javascript:void(0)">PEG Ratio</a> <span>{Statements?.pegRatio}</span></li>
                        <li><a href="javascript:void(0)">P/E High</a> <span>{Statements?.peHigh}</span></li>
                        <li><a href="javascript:void(0)">P/E Low</a> <span>{Statements?.peLow}</span></li>
                        <li><a href="javascript:void(0)">Call-Put Ratio</a> <span>{Statements?.putCallRatio}</span></li>
                    </ul>
                </div>
                <div class="d-flex align-items-center justify-content-start bg-light p-3 border-bottom-0 mb-3">
                    <h6 class="m-0"><strong>Share Statistics</strong></h6>
                </div>
                <div class="key_status">
                    <ul>
                        <li><a href="javascript:void(0)">Market Cap</a> <span>{Statements?.marketcap}</span></li>
                        <li><a href="javascript:void(0)">Enterprise Value</a> <span>{Statements?.enterpriseValue}</span></li>
                        <li><a href="javascript:void(0)">P/E Ratio</a> <span>{Statements?.peRatio}</span></li>
                        <li><a href="javascript:void(0)">EV/Sales</a> <span>-10</span></li>
                        <li><a href="javascript:void(0)">Price/Sales</a> <span>{Statements?.priceToSales}</span></li>
                    </ul>
                </div>
                <div class="d-flex align-items-center justify-content-start bg-light p-3 border-bottom-0 mb-3">
                    <h6 class="m-0"><strong>Earnings & Dividends</strong></h6>
                </div>
                <div class="key_status">
                    <ul>
                        <li><a href="javascript:void(0)">Market Cap</a> <span>{Statements?.marketcap}</span></li>
                        <li><a href="javascript:void(0)">Enterprise Value</a> <span>{Statements?.enterpriseValue}</span></li>
                        <li><a href="javascript:void(0)">P/E Ratio</a> <span>{Statements?.peRatio}</span></li>
                        <li><a href="javascript:void(0)">EV/Sales</a> <span>-10</span></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-6 mb-5">
                <div class="d-flex align-items-center justify-content-start bg-light p-3 border-bottom-0 mb-3">
                    <h6 class="m-0"><strong>Financial Highlights</strong></h6>
                </div>
                <div class="key_status">
                    <ul>
                        <li><a href="javascript:void(0)">Total Revenue</a> <span>{Statements?.totalRevenue}</span></li>
                        <li><a href="javascript:void(0)">Gross Profit</a> <span>{Statements?.grossProfit}</span></li>
                        <li><a href="javascript:void(0)">EBITDA</a> <span>{Statements?.EBITDA}</span></li>
                        <li><a href="javascript:void(0)">Revenue Per Share</a> <span>{Statements?.revenuePerShare}</span></li>
                        <li><a href="javascript:void(0)">Revenue Per Employee</a> <span>{Statements?.revenuePerEmployee}</span></li>
                        <li><a href="javascript:void(0)">Profit Margin</a> <span>{Statements?.profitMargin}%</span></li>
                        <li><a href="javascript:void(0)">Total Cash</a> <span>{Statements?.totalCash}</span></li>
                        <li><a href="javascript:void(0)">Current Debt</a> <span>{Statements?.currentDebt}</span></li>
                        <li><a href="javascript:void(0)">Debt To Equity</a> <span>{Statements?.debtToEquity}</span></li>
                    </ul>
                </div>
                <div class="d-flex align-items-center justify-content-start bg-light p-3 border-bottom-0 mb-3">
                    <h6 class="m-0"><strong>Stock Price History</strong></h6>
                </div>
                <div class="key_status">
                    <ul>
                        <li><a href="javascript:void(0)">52 Week High</a> <span>{Statements?.week52high}</span></li>
                        <li><a href="javascript:void(0)">52 Week Low</a> <span>{Statements?.week52low}</span></li>
                        <li><a href="javascript:void(0)">52 Week Change</a> <span>{Statements?.week52change}</span></li>
                        <li><a href="javascript:void(0)">200 Day Moving Average</a> <span>{Statements?.day200MovingAvg}</span></li>
                        <li><a href="javascript:void(0)">50 Day Moving Average</a> <span>{Statements?.day50MovingAvg}</span></li>
                        <li><a href="javascript:void(0)">Beta(1 Year)</a> <span>{Statements?.beta}</span></li>
                        <li><a href="javascript:void(0)">5 Year Change</a> <span>{Statements?.year5ChangePercent}</span></li>
                        <li><a href="javascript:void(0)">2 Year Change</a> <span>{Statements?.year2ChangePercent}</span></li>
                        <li><a href="javascript:void(0)">1 Year Change</a> <span>{Statements?.year1ChangePercent}</span></li>
                        <li><a href="javascript:void(0)">YTD Change</a> <span>{Statements?.ytdChangePercent}</span></li>
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