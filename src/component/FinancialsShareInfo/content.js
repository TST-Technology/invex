import React from "react";

const Content = ({ statistics }) => {
  console.log("Statements", statistics);
  return (
    <div className="row">
      <div className="col-lg-6 mb-5">
        <div className="d-flex align-items-center justify-content-start bg-light p-3 border-bottom-0 mb-3">
          <h6 className="m-0">
            <strong>Pricing Measures</strong>
          </h6>
        </div>
        <div className="key_status">
          <ul>
            <li>
              <a>Market Cap</a> <span>{statistics?.marketcap}</span>
            </li>
            <li>
              <a href="javascript:void(0)">Enterprise Value</a>{" "}
              <span>{statistics?.enterpriseValue}</span>
            </li>
            <li>
              <a href="javascript:void(0)">P/E Ratio</a>{" "}
              <span>{statistics?.peRatio}</span>
            </li>
            <li>
              <a href="javascript:void(0)">EV/Sales</a> <span>-10</span>
            </li>
            <li>
              <a href="javascript:void(0)">Price/Sales</a>{" "}
              <span>{statistics?.priceToSales}</span>
            </li>
            <li>
              <a href="javascript:void(0)">Price/Book</a>{" "}
              <span>{statistics?.priceToBook}</span>
            </li>
            <li>
              <a href="javascript:void(0)">Forward P/E</a>{" "}
              <span>{statistics?.forwardPERatio}</span>
            </li>
            <li>
              <a href="javascript:void(0)">PEG Ratio</a>{" "}
              <span>{statistics?.pegRatio}</span>
            </li>
            <li>
              <a href="javascript:void(0)">P/E High</a>{" "}
              <span>{statistics?.peHigh}</span>
            </li>
            <li>
              <a href="javascript:void(0)">P/E Low</a>{" "}
              <span>{statistics?.peLow}</span>
            </li>
            <li>
              <a href="javascript:void(0)">Call-Put Ratio</a>{" "}
              <span>{statistics?.putCallRatio}</span>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center justify-content-start bg-light p-3 border-bottom-0 mb-3">
          <h6 className="m-0">
            <strong>Share Statistics</strong>
          </h6>
        </div>
        <div className="key_status">
          <ul>
            <li>
              <a href="javascript:void(0)">Market Cap</a>{" "}
              <span>{statistics?.marketcap}</span>
            </li>
            <li>
              <a href="javascript:void(0)">Enterprise Value</a>{" "}
              <span>{statistics?.enterpriseValue}</span>
            </li>
            <li>
              <a href="javascript:void(0)">P/E Ratio</a>{" "}
              <span>{statistics?.peRatio}</span>
            </li>
            <li>
              <a href="javascript:void(0)">EV/Sales</a> <span>-10</span>
            </li>
            <li>
              <a href="javascript:void(0)">Price/Sales</a>{" "}
              <span>{statistics?.priceToSales}</span>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center justify-content-start bg-light p-3 border-bottom-0 mb-3">
          <h6 className="m-0">
            <strong>Earnings & Dividends</strong>
          </h6>
        </div>
        <div className="key_status">
          <ul>
            <li>
              <a href="javascript:void(0)">Market Cap</a>{" "}
              <span>{statistics?.marketcap}</span>
            </li>
            <li>
              <a href="javascript:void(0)">Enterprise Value</a>{" "}
              <span>{statistics?.enterpriseValue}</span>
            </li>
            <li>
              <a href="javascript:void(0)">P/E Ratio</a>{" "}
              <span>{statistics?.peRatio}</span>
            </li>
            <li>
              <a href="javascript:void(0)">EV/Sales</a> <span>-10</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-6 mb-5">
        <div className="d-flex align-items-center justify-content-start bg-light p-3 border-bottom-0 mb-3">
          <h6 className="m-0">
            <strong>Financial Highlights</strong>
          </h6>
        </div>
        <div className="key_status">
          <ul>
            <li>
              <a href="javascript:void(0)">Total Revenue</a>{" "}
              <span>{statistics?.totalRevenue}</span>
            </li>
            <li>
              <a href="javascript:void(0)">Gross Profit</a>{" "}
              <span>{statistics?.grossProfit}</span>
            </li>
            <li>
              <a href="javascript:void(0)">EBITDA</a>{" "}
              <span>{statistics?.EBITDA}</span>
            </li>
            <li>
              <a href="javascript:void(0)">Revenue Per Share</a>{" "}
              <span>{statistics?.revenuePerShare}</span>
            </li>
            <li>
              <a href="javascript:void(0)">Revenue Per Employee</a>{" "}
              <span>{statistics?.revenuePerEmployee}</span>
            </li>
            <li>
              <a href="javascript:void(0)">Profit Margin</a>{" "}
              <span>{statistics?.profitMargin}%</span>
            </li>
            <li>
              <a href="javascript:void(0)">Total Cash</a>{" "}
              <span>{statistics?.totalCash}</span>
            </li>
            <li>
              <a href="javascript:void(0)">Current Debt</a>{" "}
              <span>{statistics?.currentDebt}</span>
            </li>
            <li>
              <a href="javascript:void(0)">Debt To Equity</a>{" "}
              <span>{statistics?.debtToEquity}</span>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center justify-content-start bg-light p-3 border-bottom-0 mb-3">
          <h6 className="m-0">
            <strong>Stock Price History</strong>
          </h6>
        </div>
        <div className="key_status">
          <ul>
            <li>
              <a href="javascript:void(0)">52 Week High</a>{" "}
              <span>{statistics?.week52high}</span>
            </li>
            <li>
              <a href="javascript:void(0)">52 Week Low</a>{" "}
              <span>{statistics?.week52low}</span>
            </li>
            <li>
              <a href="javascript:void(0)">52 Week Change</a>{" "}
              <span>{statistics?.week52change}</span>
            </li>
            <li>
              <a href="javascript:void(0)">200 Day Moving Average</a>{" "}
              <span>{statistics?.day200MovingAvg}</span>
            </li>
            <li>
              <a href="javascript:void(0)">50 Day Moving Average</a>{" "}
              <span>{statistics?.day50MovingAvg}</span>
            </li>
            <li>
              <a href="javascript:void(0)">Beta(1 Year)</a>{" "}
              <span>{statistics?.beta}</span>
            </li>
            <li>
              <a href="javascript:void(0)">5 Year Change</a>{" "}
              <span>{statistics?.year5ChangePercent}</span>
            </li>
            <li>
              <a href="javascript:void(0)">2 Year Change</a>{" "}
              <span>{statistics?.year2ChangePercent}</span>
            </li>
            <li>
              <a href="javascript:void(0)">1 Year Change</a>{" "}
              <span>{statistics?.year1ChangePercent}</span>
            </li>
            <li>
              <a href="javascript:void(0)">YTD Change</a>{" "}
              <span>{statistics?.ytdChangePercent}</span>
            </li>
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
  );
};

export default Content;
