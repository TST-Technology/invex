import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import abbreviateNumber from "../../Common/NumberFormat";
import { getFinancialStatistics } from "../../api/financialStatistics";
import { Link } from "react-router-dom";
import InvexRoutes from "../../../InvexRoutes";

const CompanyValuation = ({ KeyStatus }) => {
  const [statistics, setStatistics] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (KeyStatus?.symbol) {
        setIsLoading(true);
        try {
          var data = await getFinancialStatistics(KeyStatus?.symbol);
          console.log("data", data);
          console.log(data.data[0]);
          if (data && data.data && data.status === 200) {
            setStatistics(data.data[0]);
          }
        } catch (error) {}
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <>
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-6">
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="mb-4">
                  <strong>Price Summary & Volume</strong>
                </h6>
                <div className="row ">
                  <div className="col-lg-4">
                    <div className="title-lt">Open</div>
                    <span>{KeyStatus?.iexOpen}</span>
                  </div>
                  <div className="col-lg-4">
                    <div className="title-lt">Previous Close</div>
                    <span>{KeyStatus?.previousClose}</span>
                  </div>
                  <div className="col-lg-4">
                    <div className="title-lt">Today’s High</div>
                    <span>{KeyStatus?.high}</span>
                  </div>
                  <div className="col-lg-4">
                    <div className="title-lt">Today’s Low</div>
                    <span>{KeyStatus?.low}</span>
                  </div>
                  <div className="col-lg-4">
                    <div className="title-lt">52 Week High</div>
                    <span>{KeyStatus?.week52High}</span>
                  </div>
                  <div className="col-lg-4">
                    <div className="title-lt">52 Week Low</div>
                    <span>{KeyStatus?.week52Low}</span>
                  </div>
                  <div className="col-lg-4">
                    <div className="title-lt">Latest Volume</div>
                    <span>{abbreviateNumber(KeyStatus?.volume)}</span>
                  </div>
                  <div className="col-lg-4">
                    <div className="title-lt">Previous Volume</div>
                    <span>{abbreviateNumber(KeyStatus?.previousVolume)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card mb-4">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h6 className="">
                    <strong>Company Essentials</strong>
                  </h6>
                  <Link
                    to={InvexRoutes.FinancialShareInfo.path.replace(
                      ":symbol",
                      KeyStatus?.symbol
                    )}
                    className="text-dark viewmore"
                  >
                    View More
                  </Link>
                </div>

                {isLoading && <Loader sx={{ height: "10px" }} />}
                {!isLoading && (
                  <div className="row ">
                    <div className="col-lg-4">
                      <div className="title-lt">Market Cap</div>
                      <span>{abbreviateNumber(KeyStatus?.marketCap)}</span>
                    </div>
                    <div className="col-lg-4">
                      <div className="title-lt">Shares Outstanding</div>
                      <span>{statistics?.sharesOutstanding}</span>
                    </div>
                    <div className="col-lg-4">
                      <div className="title-lt">Beta</div>
                      <span>{parseFloat(statistics?.beta).toFixed(2)}</span>
                    </div>
                    <div className="col-lg-4">
                      <div className="title-lt">PE Ratio</div>
                      <span>{parseFloat(statistics?.peRatio).toFixed(2)}</span>
                    </div>
                    <div className="col-lg-4">
                      <div className="title-lt">EPS(TTM)</div>
                      <span>{statistics?.ttmEPS}</span>
                    </div>
                    <div className="col-lg-4">
                      <div className="title-lt">Next Earnings Date</div>
                      <span>{statistics?.nextEarningsDate}</span>
                    </div>
                    <div className="col-lg-4">
                      <div className="title-lt">Dividend Rate(TTM)</div>
                      <span>
                        {parseFloat(statistics?.ttmDividendRate).toFixed(2)}
                      </span>
                    </div>
                    <div className="col-lg-4">
                      <div className="title-lt">Dividend Yield</div>
                      <span>
                        {parseFloat(statistics?.dividendYield).toFixed(4)}
                      </span>
                    </div>
                    <div className="col-lg-4">
                      <div className="title-lt">Ex-Dividend Date</div>
                      <span>
                        {statistics?.exDividendDate === ""
                          ? "Date Not Available"
                          : statistics?.exDividendDate}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyValuation;
