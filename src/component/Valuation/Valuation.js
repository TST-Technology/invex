import React from 'react';
import { useParams } from 'react-router-dom';
import Image1 from '../Common/Images/image1.png';
import Graph from '../Common/Images/graph.png';
import iwPastPrediction from '../Common/Images/iw-past-prediction.png';
import RevenueExpec from '../Common/Images/revenue-expec.png';
import OperatingIncm from '../Common/Images/operating-incm.png';
import Reinvestment from '../Common/Images/reinvestment.png';
import CapitalRoic from '../Common/Images/capital-roic.png';
import PriceTarget from '../Common/Images/price-target.png';
import FreeCashFlowFirm from '../Common/Images/free-cash-flow-firm.png';

const Valuation = () => {
  const { symbol } = useParams();

  return (
    <>
      <div className='main'>
        <section className='valuation_report_sec'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 mb-5'>
                <div className='card'>
                  <div className='card-body bg-base d-lg-flex d-md-flex d-block align-items-center rounded-3 p-4'>
                    <h5 className='m-0 pe-3'>
                      Moderna Inc Stock Forecast, Predictions &amp; Price Target
                    </h5>
                  </div>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='card companyviewblk compny_left_detail'>
                  <div className='card-body'>
                    <div className='description-para d-flex align-items-center justify-content-between'>
                      <div className='logo me-5'>
                        <div className='img'>
                          <img src={Image1} alt='image' />
                        </div>
                        <div className='title1'>
                          <h5 className='card-title'>APPLE INC </h5>
                          <p className='company'>AAPL</p>
                        </div>
                      </div>
                      <div className='chart'>
                        <div className='chart-text mt-0'>
                          <p className='card-text up'>$235.49</p>
                          <p className='text up'>+3.10 (+1.3%)</p>
                        </div>
                      </div>
                      <div className='chart-img me-5 ms-auto'>
                        <img src={Graph} alt='graph' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-4'>
                    <div className='col-lg-12 mt-3 mb-3'>
                      <h6 className='mb-3'>
                        <strong>Basic Company Facts </strong>
                      </h6>
                      <div className='key_status'>
                        <ul>
                          <li>
                            <a href='javascript:void(0)'>Fiscal Year:</a>{' '}
                            <span>2021 Q1</span>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>Company Ticker:</a>{' '}
                            <span>MRNA</span>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              Country of Incorporation:
                            </a>{' '}
                            <span>United States</span>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              Currency Of Valuation:
                            </a>{' '}
                            <span>USD</span>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>Sector (US):</a>{' '}
                            <span>Healthcare</span>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>Industry (US):</a>{' '}
                            <span>Drugs (Biotechnology)</span>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              Current Market Cap(billions):
                            </a>{' '}
                            <span>$158.0</span>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              Current Stock Price:
                            </a>{' '}
                            <span>$391.4</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='col-lg-12 mt-3 mb-3'>
                      <h6 className='mb-3'>
                        <strong>Current Fundamental Metrices </strong>
                      </h6>
                      <div className='key_status'>
                        <ul>
                          <li>
                            <a href='javascript:void(0)'>
                              Pre-tax operating margin
                            </a>{' '}
                            <span>62.76%</span>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              Sales to capital ratio
                            </a>{' '}
                            <span>4.93</span>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              Return on invested capital
                            </a>{' '}
                            <span>226.02%</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='col-lg-12 mt-3 mb-3'>
                      <h6 className='mb-3'>
                        <strong>Company's Current Financials(millions) </strong>
                      </h6>
                      <div className='key_status'>
                        <ul>
                          <li>
                            <a href='javascript:void(0)'>Revenues</a>{' '}
                            <span>$5,091.0</span>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              Income Before Interest &amp; Tax
                            </a>{' '}
                            <span>$2,420.9</span>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>Shareholders Equity</a>{' '}
                            <span>$6,704.0</span>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>Total Debt</a>{' '}
                            <span>$328.0</span>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>Invested capital</a>{' '}
                            <span>$1,031.9</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='last-six-non-manf mt-3 mb-5'>
                  <h6 className='mb-4'>
                    <strong>Invex Wealth Past Predictions</strong>
                  </h6>
                  <div className='text-center'>
                    <img
                      src={iwPastPrediction}
                      className='img-fluid'
                      alt='chart'
                    />
                  </div>
                </div>
                <div className='card companyviewblk compprofile_block mb-5'>
                  <div className='card-header'>
                    <div className='d-flex align-items-center justify-content-left bg-light p-2 border-bottom-0'>
                      <h6 className='m-0'>
                        <strong>Analyst Notes</strong>
                      </h6>
                    </div>
                  </div>
                  <div className='card-body'>
                    <div className='description-para'>
                      <div className='key_status'>
                        <p>
                          Moderna is a young growth company it has potential to
                          grow more in the upcoming years because of its
                          research.
                          <br />
                          As predicted by the 17 analyst the mean sales growth
                          is estimated as 20.1B and 18.5B for the year 2021 and
                          2022 respectively. The high sales estimation is 22B
                          and 36.6B &amp; the low sales estimation is 16.9b and
                          10.2B for the year 2021 and 2022 respectively. Because
                          of covid vaccine analyst are predicting high growth in
                          the revenue. Moderna just got profitable in this
                          quarture and has manage make margin of 68%.before it
                          was loss making company. The margin of the comparable
                          firm like Pfizer generally between 25% to 30%.
                          <br />
                          Bank of America analyst Geoff Meacham wrote in a note
                          published that the current valuation remains
                          “unreasonable.” In order to justify the market
                          capitalization, an investor would need to assume that
                          the company would sell up to 1.5 billion doses of its
                          Covid-19 vaccine each year, and a 100% probability of
                          success for the entire pipeline with aggregate peak
                          sales of $30 billion.
                          <br />
                          Keeping optimistic view, after the surge in the
                          revenue in 2022, we kept the revenue grow at the Risk
                          Free Rate for the entire year same for the next 10
                          years.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card companyviewblk compprofile_block mb-5'>
                  <div className='card-header'>
                    <div className='d-flex align-items-center justify-content-left bg-light p-2 border-bottom-0'>
                      <h6 className='m-0'>
                        <strong>Revenue segment performance</strong>
                      </h6>
                    </div>
                  </div>
                  <div className='card-body'>
                    <div className='description-para'>
                      <div className='key_status'>
                        <p>
                          Moderna is a young growth company it has potential to
                          grow more in the upcoming years because of its
                          research.
                          <br />
                          As predicted by the 17 analyst the mean sales growth
                          is estimated as 20.1B and 18.5B for the year 2021 and
                          2022 respectively. The high sales estimation is 22B
                          and 36.6B &amp; the low sales estimation is 16.9b and
                          10.2B for the year 2021 and 2022 respectively. Because
                          of covid vaccine analyst are predicting high growth in
                          the revenue. Moderna just got profitable in this
                          quarture and has manage make margin of 68%.before it
                          was loss making company. The margin of the comparable
                          firm like Pfizer generally between 25% to 30%.
                          <br />
                          Bank of America analyst Geoff Meacham wrote in a note
                          published that the current valuation remains
                          “unreasonable.” In order to justify the market
                          capitalization, an investor would need to assume that
                          the company would sell up to 1.5 billion doses of its
                          Covid-19 vaccine each year, and a 100% probability of
                          success for the entire pipeline with aggregate peak
                          sales of $30 billion.
                          <br />
                          Keeping optimistic view, after the surge in the
                          revenue in 2022, we kept the revenue grow at the Risk
                          Free Rate for the entire year same for the next 10
                          years.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 className='mb-4'>
                  <strong>Valuation Assumptions</strong>
                </h6>
                <div className='table-responsive'>
                  <table className='table table-bordered m-0 most_tables'>
                    <thead className='table-light'>
                      <tr>
                        <th scope='col'>-</th>
                        <th scope='col'>Q1 2022</th>
                        <th scope='col'>Q4 2021</th>
                        <th scope='col'>Q3 2021</th>
                        <th scope='col'>Q2 2021</th>
                      </tr>
                    </thead>
                    <tbody className='border-top-0'>
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
                <div className='card companyviewblk compprofile_block mt-5 mb-4'>
                  <div className='card-header'>
                    <div className='d-flex align-items-center justify-content-left bg-light p-2 border-bottom-0'>
                      <h6 className='m-0'>
                        <strong>
                          Valuation Output <base />
                        </strong>
                      </h6>
                    </div>
                  </div>
                  <div className='card-body'>
                    <div className='top_button_panel mb-3'>
                      <span className='pe-3 pb-3'>
                        <small>
                          <strong>Choose the case</strong>
                        </small>
                      </span>
                      <button type='button' className='btn btn-info'>
                        Best case
                      </button>
                      <button type='button' className='btn btn-light'>
                        {' '}
                        Base care
                      </button>
                      <button type='button' className='btn btn-light'>
                        {' '}
                        Worst care
                      </button>
                      <button type='button' className='btn btn-light'>
                        {' '}
                        Manual
                      </button>
                    </div>
                    <div className='scenario justify-content-between'>
                      <span className='best_scena'>
                        Estimated value / share
                      </span>
                      <div className='chart-text'>
                        <p className='card-text up m-0'>
                          <strong>$235.49</strong>
                        </p>
                        <p className='text up m-0 ms-2'>(+34%)</p>
                      </div>
                      <div className='text-end'>
                        <p className='m-0'>
                          <small>Value of equity (Millions): $76,485.50</small>
                        </p>
                        <p className='m-0'>
                          <small>Current price: $391.42</small>
                        </p>
                      </div>
                    </div>
                    <div className='mt-5'>
                      <div className='row'>
                        <div className='col-lg-3'>
                          <h6 className='mb-0'>
                            <strong>Revenue (Future Expectation)</strong>
                          </h6>
                          <small>All values are in Billion</small>
                        </div>
                        <div className='col-lg-12 mt-3'>
                          <img
                            src={RevenueExpec}
                            className='img-fluid'
                            alt='chart'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='mt-5'>
                      <div className='row'>
                        <div className='col-lg-3'>
                          <h6 className='mb-0'>
                            <strong>Operating Income</strong>
                          </h6>
                          <small>All values are in Billion</small>
                        </div>
                        <div className='col-lg-12 mt-3'>
                          <img
                            src={OperatingIncm}
                            className='img-fluid'
                            alt='chart'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='mt-5'>
                      <div className='row'>
                        <div className='col-lg-3'>
                          <h6 className='mb-0'>
                            <strong>Reinvestments</strong>
                          </h6>
                          <small>All values are in Billion</small>
                        </div>
                        <div className='col-lg-12 mt-3'>
                          <img
                            src={Reinvestment}
                            className='img-fluid'
                            alt='chart'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='mt-5'>
                      <div className='row'>
                        <div className='col-lg-3'>
                          <h6 className='mb-0'>
                            <strong>Free Cash Flow To Firm</strong>
                          </h6>
                          <small>All values are in Billion</small>
                        </div>
                        <div className='col-lg-12 mt-3'>
                          <img
                            src={FreeCashFlowFirm}
                            className='img-fluid'
                            alt='chart'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='mt-5'>
                      <div className='row'>
                        <div className='col-lg-3'>
                          <h6 className='mb-0'>
                            <strong>
                              Invested Capitals &amp; Implied ROIC
                            </strong>
                          </h6>
                          <small>All values are in Billion</small>
                        </div>
                        <div className='col-lg-12 mt-3'>
                          <img
                            src={CapitalRoic}
                            className='img-fluid'
                            alt='chart'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='mt-5'>
                      <div className='row'>
                        <div className='col-lg-3'>
                          <h6 className='mb-0'>
                            <strong>Price Target</strong>
                          </h6>
                          <small>All values are in Billion</small>
                        </div>
                        <div className='col-lg-12 mt-3'>
                          <img
                            src={PriceTarget}
                            className='img-fluid'
                            alt='chart'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-5 mb-5'>
                  <h6 className='mb-4'>
                    <strong>Notes For The Professionals</strong>
                  </h6>
                  <ul>
                    <li>
                      The above estimations are derived from the Free Cash Flow
                      To Firm Valuation.
                    </li>
                    <li>
                      We considered the Research &amp; Development expenses as
                      Capital Expense rather than operating expense. Hence, we
                      capitalized the R&amp;D, therefore the current operating
                      margin shown by us may vary with the margin as reported by
                      the company.
                    </li>
                    <li>
                      The company’s Options outstanding(if any) has been taken
                      into account in the valuation.
                    </li>
                    <li>
                      Since we cannot estimate cash flows forever, we estimated
                      cash flows for a “growth period” and then estimated a
                      TERMINAL VALUE(not shown in cash flow), to capture the
                      value at the end of the period.
                    </li>
                  </ul>
                  <h6 className='mb-4 mt-5'>
                    <strong>Risk</strong>
                  </h6>
                  <ul>
                    <li>
                      The above estimations are derived from the Free Cash Flow
                      To Firm Valuation.
                    </li>
                    <li>
                      We considered the Research &amp; Development expenses as
                      Capital Expense rather than operating expense. Hence, we
                      capitalized the R&amp;D, therefore the current operating
                      margin shown by us may vary with the margin as reported by
                      the company.
                    </li>
                    <li>
                      The company’s Options outstanding(if any) has been taken
                      into account in the valuation.
                    </li>
                    <li>
                      Since we cannot estimate cash flows forever, we estimated
                      cash flows for a “growth period” and then estimated a
                      TERMINAL VALUE(not shown in cash flow), to capture the
                      value at the end of the period.
                    </li>
                  </ul>
                  <h6 className='mb-4 mt-5'>
                    <strong>Additional Notes</strong>
                  </h6>
                  <ul>
                    <li>
                      The above estimations are derived from the Free Cash Flow
                      To Firm Valuation.
                    </li>
                    <li>
                      We considered the Research &amp; Development expenses as
                      Capital Expense rather than operating expense. Hence, we
                      capitalized the R&amp;D, therefore the current operating
                      margin shown by us may vary with the margin as reported by
                      the company.
                    </li>
                    <li>
                      The company’s Options outstanding(if any) has been taken
                      into account in the valuation.
                    </li>
                    <li>
                      Since we cannot estimate cash flows forever, we estimated
                      cash flows for a “growth period” and then estimated a
                      TERMINAL VALUE(not shown in cash flow), to capture the
                      value at the end of the period.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Valuation;
