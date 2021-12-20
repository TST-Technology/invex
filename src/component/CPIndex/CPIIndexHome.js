import React from "react";
import consumerChart from "../Common/Images/consumer-chart-1.png";
import cpiChart from "../Common/Images/cpi-chart.png";

const CPIIndexHome = () => {
  return (
    <div>
      <div class="ism_non_manfuc">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 mb-5">
              <div class="card mb-5">
                <div class="card-body bg-base d-lg-flex d-md-flex d-block align-items-center rounded-3 p-4">
                  <h5 class="m-0 pe-3">CONSUMER PRICE INDEX</h5>
                </div>
              </div>

              <div class="card mb-5">
                <div class="card-header">
                  <div class="d-flex align-items-center justify-content-left bg-light p-2 border-bottom-0">
                    <h6 class="m-0">
                      <strong>CONSUMER PRICE INDEX – AUGUST 2021</strong>
                    </h6>
                  </div>
                </div>
                <div class="card-body">
                  <div class="description-para">
                    <div class="key_status">
                      <p className="mb-4">
                        There are two participants in the private sectors:
                        Consumers and Businesses. With regards to
                        Inflation/Deflation we must look at both in order to
                        gauge what is normal and what is outside the bounds of
                        normality.
                      </p>

                      <p>
                        For Consumers we look at the following Inflation
                        statistics:
                      </p>
                      <p className="pb-3">
                        <p>1) Consumer Price Index All Items (CPIAUCSL) </p>
                        <p>
                          {" "}
                          2) Consumer Price Index(CPI) All Items ex' Food Energy
                          (CPILFESL)
                        </p>
                      </p>

                      <p>
                        For Businesses we look at the following Inflation
                        statistics:
                      </p>
                      <p className="pb-3">
                        <p>1) Producer Price Index Final Demand(PPIFIS) </p>
                        <p>
                          2) Producer Price Index Final Demand ex' Food
                          Energy(PPIFES)
                        </p>
                      </p>

                      <p>
                        As reported by the U.S. Bureau of Labor Statistics the
                        all items index rose 5.3 percent for the 12 months
                        ending August, a smaller increase than the 5.4-percent
                        rise for the period ending July. The index for all items
                        less food and energy rose 4.0 percent over the last 12
                        months, also a smaller increase than the period ending
                        July. The energy index rose 25.0 percent over the last
                        12 months, and the food index increased 3.7 percent;
                        both were larger than the increases for the 12-month
                        period ending July.
                      </p>
                      <p>(All data are seasonally unadjusted)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card mt-5 mb-4">
                <div class="card-body">
                  <div class="mt-5">
                    <div class="row">
                      <div class="col-lg-3">
                        <h6 class="mb-3">
                          <strong>One Month Percent change</strong>
                        </h6>
                      </div>
                      <div class="col-lg-9">
                        <img
                          src={consumerChart}
                          type="image"
                          class="img-fluid"
                          alt="chart"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-5 mb-4">
                <div class="card-body">
                  <div class="mt-5">
                    <div class="row">
                      <div class="col-lg-3">
                        <h6 class="mb-3">
                          <strong>Trailing 12-Month Percent change</strong>
                        </h6>
                      </div>
                      <div class="col-lg-9">
                        <img
                          src={consumerChart}
                          type="image"
                          class="img-fluid"
                          alt="chart"
                        />
                        {/* <img src="images/consumer-chart-1.png" type="image" class="img-fluid" alt="chart"> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h6 class="mb-4">
                <strong>CPI All And CPI Core</strong>
              </h6>

              <div class="mb-5">
                <div class="top_button_panel mb-3">
                  <button type="button" class="btn btn-info">
                    1D
                  </button>
                  <button type="button" class="btn btn-light">
                    {" "}
                    1W
                  </button>
                  <button type="button" class="btn btn-light">
                    {" "}
                    1M
                  </button>
                  <button type="button" class="btn btn-light">
                    {" "}
                    1Y
                  </button>
                  <button type="button" class="btn btn-light">
                    {" "}
                    5Y
                  </button>
                  <button type="button" class="btn btn-light">
                    {" "}
                    MAX
                  </button>
                </div>
                <img
                  src={require("../Common/Images/cpi-chart.png")}
                  class="img-fluid"
                  alt="chart"
                />
                <img
                  src={cpiChart}
                  type="image"
                  class="img-fluid"
                  alt="chart"
                />
              </div>

              <div class="card mb-5">
                <div class="card-header">
                  <div class="d-flex align-items-center justify-content-left bg-light p-2 border-bottom-0">
                    <h6 class="m-0">
                      <strong>CONSUMER PRICE INDEX – AUGUST 2021</strong>
                    </h6>
                  </div>
                </div>
                <div class="card-body">
                  <div class="description-para">
                    <div class="key_status">
                      <p>
                        The Consumer Price Index (CPI) measures the change in
                        prices paid by consumers for goods and services. The CPI
                        reflects spending patterns for each of two population
                        groups: all urban consumers and urban wage earners and
                        clerical workers. The all urban consumer group
                        represents about 93 percent of the total U.S.
                        population. It is based on the expenditures of almost
                        all residents of urban or metropolitan areas, including
                        professionals, the self-employed, the poor, the
                        unemployed, and retired people, as well as urban wage
                        earners and clerical workers. Not included in the CPI
                        are the spending patterns of people living in rural
                        non-metropolitan areas, farming families, people in the
                        Armed Forces, and those in institutions, such as prisons
                        and mental hospitals.
                      </p>
                      <p>
                        The CPI is constructed by taking the weighted averages
                        of prices on a wide variety of items which are assigned
                        weights representing their importance within groups.
                        Prices are collected monthly from 4000 Housing units and
                        around 26000 Retail establushments across 87 Urban areas
                        of the US. However, The CPI is a coincident indicator,
                        i.e, it tells you what is happening in the Economy now
                        rather than in the future. It is still useful because
                        the Monetary Authorities like the Fed' are reactionary
                        and therefore Interest Rate policy based on Inflationary
                        Expectations will be affected.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-3 mb-5">
                <h6 class="mb-3">
                  <strong>Check previous statics</strong>
                </h6>
                <div class="key_status">
                  <ul class="check_prev_statc">
                    <li>
                      <a href="javascript:void(0)" class="text-primary">
                        Consumer Price Index July-2021
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="text-primary">
                        Consumer Price Index June-2021
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="text-primary">
                        Consumer Price Index May-2021
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="text-primary">
                        Consumer Price Index April-2021
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="text-primary">
                        Consumer Price Index March-2021
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CPIIndexHome;
