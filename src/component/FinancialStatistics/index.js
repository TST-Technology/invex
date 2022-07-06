import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFinancialStatisticsV2 } from '../api/financialStatistics';
import { TYPE, PERIOD_FILTER, YEAR_FILTER } from './Data/Constants';
import CapitalStructure from './Data/CapitalStructure';
import Navbar from '../Common/Navbar/NewNavbar';
import Marquee from '../Common/Navbar/Marquee';
import AppleLogo from '../Common/Images/image1.png';
import moment from 'moment';

const FinancialStatistics = () => {
  console.log(TYPE);
  const [activeTab, setActiveTab] = useState(TYPE.capitalStructure.value);
  const { symbol } = useParams();
  const [filter, setFilter] = useState({
    period: PERIOD_FILTER[0].value,
    last: YEAR_FILTER[0].value,
    symbol: symbol,
  });
  const [financialStatisticsData, setFinancialStatisticsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (symbol) {
        setLoading(true);
        var res = await getFinancialStatisticsV2(filter);
        console.log(res);
        if (res && res.status === 200 && res?.data) {
          console.log(res?.data);
          const statistics = res?.data?.data.map((row) => {
            row.column =
              filter.period === PERIOD_FILTER[0].value
                ? moment(row?.date).format('YYYY')
                : `${row?.period} ${moment(row?.date).format('YYYY')}`;
            row.year = moment(row?.date).format('YYYY');
            row.quarter =
              filter.period === PERIOD_FILTER[0].value
                ? moment(row?.date).format('YYYY')
                : row?.period[1];
            return row;
          });
          const ttm = res?.data?.ttmData;
          ttm.column = 'TTM';
          statistics.unshift(ttm);
          statistics.sort(function (a, b) {
            return b.year - a.year || b.quarter - a.quarter;
          });
          console.log(statistics);
          setFinancialStatisticsData(statistics);
        }
        setLoading(false);
      }
    })();
  }, [filter]);

  return (
    <>
      <Navbar />

      <Marquee />

      {/* mainpage content start */}
      <div className='main'>
        <section className='company_details symfinstatcs'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                {/* company left details box start */}
                <div className='card companyviewblk v2 compny_left_detail border-0 pb-3 border-bottom mb-5'>
                  <div className='card-body p-0 pb-3'>
                    <div className='logo'>
                      <div className='img'>
                        <img src={AppleLogo} alt='image' />
                      </div>
                      <div className='title1 me-3'>
                        <h5 className='card-title'>APPLE INC </h5>
                        <p className='company'>AAPL</p>
                      </div>
                      <div className='d-flex'>
                        <div className='chart mb-1 mt-2 me-3'>
                          <div className='chart-text'>
                            <p className='card-text up'>$235.49</p>
                            <p className='text up'>+3.10 (+1.3%)</p>
                          </div>
                          <span>At close: May 4 04:00PM EDT</span>
                        </div>
                        <div className='chart mb-1 mt-2'>
                          <div className='chart-text'>
                            <p className='card-text border-0 ps-0'>$235.49</p>
                            <p className='text down'>-0.25 (-0.15%)</p>
                          </div>
                          <span>After hours: May 4, 07:59PM EDT</span>
                        </div>
                      </div>
                      <p className='m-0 mt-0 realtimeprice ms-4'>
                        Nasdaq- Real Time Price. <br />
                        Currency in USD
                      </p>
                      <div>
                        <a href className='btn btn-outline-dark ms-4'>
                          <i
                            className='bi bi-bookmark me-1'
                            style={{ verticalAlign: 'middle' }}
                          />{' '}
                          Add to Wishlist
                        </a>
                      </div>
                    </div>
                    <div className='sector_industry'>
                      <span className='badge bg-white text-dark'>
                        <label>Sector:</label>
                        <a href='#'> Information Technology</a>
                      </span>
                      <span className='badge bg-white text-dark'>
                        <label>Industry:</label>
                        <a href='#'>
                          {' '}
                          Technology Hardware, Storage &amp; Peripherals
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                {/* company left details box end */}
              </div>
              <div className='col-lg-12'>
                <ul
                  className='nav nav-tabs page_main_tab'
                  id='myTab'
                  role='tablist'
                >
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link active'
                      id='synopsis-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#synopsis'
                      type='button'
                      role='tab'
                      aria-controls='synopsis'
                      aria-selected='true'
                    >
                      Synopsis
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link'
                      id='dcfvalue-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#dcfvalue'
                      type='button'
                      role='tab'
                      aria-controls='dcfvalue'
                      aria-selected='false'
                    >
                      DCF Valuation
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link'
                      id='relativevalue-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#relativevalue'
                      type='button'
                      role='tab'
                      aria-controls='relativevalue'
                      aria-selected='false'
                    >
                      Relative Valuation
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link'
                      id='optionanalys-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#optionanalys'
                      type='button'
                      role='tab'
                      aria-controls='optionanalys'
                      aria-selected='false'
                    >
                      Option Analysis
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link'
                      id='finansttics-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#finansttics'
                      type='button'
                      role='tab'
                      aria-controls='finansttics'
                      aria-selected='false'
                    >
                      Financial Statistics
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link'
                      id='finansttment-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#finansttment'
                      type='button'
                      role='tab'
                      aria-controls='finansttment'
                      aria-selected='false'
                    >
                      Financial Statements
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link'
                      id='techanyls-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#techanyls'
                      type='button'
                      role='tab'
                      aria-controls='techanyls'
                      aria-selected='false'
                    >
                      Technical Analysis
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link'
                      id='secfiling-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#secfiling'
                      type='button'
                      role='tab'
                      aria-controls='secfiling'
                      aria-selected='false'
                    >
                      SEC Filings
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link'
                      id='chart-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#chart'
                      type='button'
                      role='tab'
                      aria-controls='chart'
                      aria-selected='false'
                    >
                      SEC Filings
                    </button>
                  </li>
                </ul>
                <div className='tab-content' id='myTabContent'>
                  <div
                    className='tab-pane fade show active'
                    id='synopsis'
                    role='tabpanel'
                    aria-labelledby='synopsis-tab'
                  >
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='d-flex align-items-center justify-content-between mt-5'>
                          <h4 className='me-auto mb-0'>Financial Statistics</h4>
                          <form
                            className='form-group'
                            role='search'
                            method='get'
                            id='searchform'
                            action
                          >
                            <div className='d-lg-inline-flex d-md-flex align-items-center float-start'>
                              <label htmlFor className='me-3 font-bd'>
                                Period
                              </label>
                              <select
                                className='form-select me-3'
                                aria-label='Default select example'
                                onChange={(e) =>
                                  setFilter({
                                    ...filter,
                                    period: e.target.value,
                                  })
                                }
                              >
                                {PERIOD_FILTER.map((period, index) => {
                                  return (
                                    <option key={index} value={period.value}>
                                      {period.label}
                                    </option>
                                  );
                                })}
                              </select>
                              <label htmlFor className='me-3 font-bd'>
                                View
                              </label>
                              <select
                                className='form-select me-0'
                                aria-label='Default select example'
                                onChange={(e) =>
                                  setFilter({
                                    ...filter,
                                    last: e.target.value,
                                  })
                                }
                              >
                                {YEAR_FILTER.map((year, index) => {
                                  return (
                                    <option key={index} value={year.value}>
                                      {year.label}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <div className='top_button_panel v2 mt-4 mb-3'>
                          {Object.keys(TYPE).map((key, index) => {
                            return (
                              <button
                                key={index}
                                type='button'
                                onClick={() => setActiveTab(TYPE[key].value)}
                                className={`btn ${
                                  activeTab === TYPE[key].value
                                    ? 'btn-info'
                                    : 'btn-light'
                                }`}
                              >
                                {TYPE[key].label}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      <div className='col-lg-12' style={{ display: 'none' }}>
                        <div className='top_competitors'>
                          <div className='mb-5'>
                            <div className='table-responsive'>
                              <table className='table table-bordered table-striped m-0 most_tables'>
                                <thead>
                                  <tr>
                                    <th scope='col'>-</th>
                                    <th scope='col'>
                                      Historical Visualisation
                                    </th>
                                    <th scope='col'>TTM</th>
                                    <th scope='col'>Q1 2022</th>
                                    <th scope='col'>Q4 2021</th>
                                    <th scope='col'>Q3 2021</th>
                                    <th scope='col'>Q2 2021</th>
                                    <th scope='col'>Q1 2021</th>
                                  </tr>
                                </thead>
                                <tbody className='border-top-0'>
                                  <tr>
                                    <td>Book Value Per Share</td>
                                    <td>
                                      <div className='form-check float-end'>
                                        <input
                                          className='form-check-input'
                                          type='checkbox'
                                          defaultValue
                                          id='flexCheckChecked'
                                        />
                                      </div>
                                    </td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.6</td>
                                    <td>1.9</td>
                                    <td>2.1</td>
                                  </tr>
                                  <tr>
                                    <td>Capex Per Share</td>
                                    <td>
                                      <div className='form-check float-end'>
                                        <input
                                          className='form-check-input'
                                          type='checkbox'
                                          defaultValue
                                          id='flexCheckChecked'
                                          defaultChecked
                                        />
                                      </div>
                                    </td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.6</td>
                                    <td>1.9</td>
                                    <td>2.1</td>
                                  </tr>
                                  <tr>
                                    <td>Capex To Depreciation</td>
                                    <td>
                                      <div className='form-check float-end'>
                                        <input
                                          className='form-check-input'
                                          type='checkbox'
                                          defaultValue
                                          id='flexCheckChecked'
                                        />
                                      </div>
                                    </td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.6</td>
                                    <td>1.9</td>
                                    <td>2.1</td>
                                  </tr>
                                  <tr>
                                    <td>Capex To Operating Cash Flow</td>
                                    <td>
                                      <div className='form-check float-end'>
                                        <input
                                          className='form-check-input'
                                          type='checkbox'
                                          defaultValue
                                          id='flexCheckChecked'
                                        />
                                      </div>
                                    </td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.6</td>
                                    <td>1.9</td>
                                    <td>2.1</td>
                                  </tr>
                                  <tr>
                                    <td>Capital Expenditure Coverage Ratio</td>
                                    <td>
                                      <div className='form-check float-end'>
                                        <input
                                          className='form-check-input'
                                          type='checkbox'
                                          defaultValue
                                          id='flexCheckChecked'
                                        />
                                      </div>
                                    </td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.6</td>
                                    <td>1.9</td>
                                    <td>2.1</td>
                                  </tr>
                                  <tr>
                                    <td>Effective Tax Rate</td>
                                    <td>
                                      <div className='form-check float-end'>
                                        <input
                                          className='form-check-input'
                                          type='checkbox'
                                          defaultValue
                                          id='flexCheckChecked'
                                          defaultChecked
                                        />
                                      </div>
                                    </td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.6</td>
                                    <td>1.9</td>
                                    <td>2.1</td>
                                  </tr>
                                  <tr>
                                    <td>Enterprise Value</td>
                                    <td>
                                      <div className='form-check float-end'>
                                        <input
                                          className='form-check-input'
                                          type='checkbox'
                                          defaultValue
                                          id='flexCheckChecked'
                                          defaultChecked
                                        />
                                      </div>
                                    </td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.6</td>
                                    <td>1.9</td>
                                    <td>2.1</td>
                                  </tr>
                                  <tr>
                                    <td>Intangibles To Total Assets</td>
                                    <td>
                                      <div className='form-check float-end'>
                                        <input
                                          className='form-check-input'
                                          type='checkbox'
                                          defaultValue
                                          id='flexCheckChecked'
                                        />
                                      </div>
                                    </td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.6</td>
                                    <td>1.9</td>
                                    <td>2.1</td>
                                  </tr>
                                  <tr>
                                    <td>Invested Capital</td>
                                    <td>
                                      <div className='form-check float-end'>
                                        <input
                                          className='form-check-input'
                                          type='checkbox'
                                          defaultValue
                                          id='flexCheckChecked'
                                          defaultChecked
                                        />
                                      </div>
                                    </td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.6</td>
                                    <td>1.9</td>
                                    <td>2.1</td>
                                  </tr>
                                  <tr>
                                    <td>Market Cap</td>
                                    <td>
                                      <div className='form-check float-end'>
                                        <input
                                          className='form-check-input'
                                          type='checkbox'
                                          defaultValue
                                          id='flexCheckChecked'
                                        />
                                      </div>
                                    </td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.6</td>
                                    <td>1.9</td>
                                    <td>2.1</td>
                                  </tr>
                                  <tr>
                                    <td>Capex To Revenue</td>
                                    <td>
                                      <div className='form-check float-end'>
                                        <input
                                          className='form-check-input'
                                          type='checkbox'
                                          defaultValue
                                          id='flexCheckChecked'
                                          defaultChecked
                                        />
                                      </div>
                                    </td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.6</td>
                                    <td>1.9</td>
                                    <td>2.1</td>
                                  </tr>
                                  <tr>
                                    <td>Net Current Asset Value</td>
                                    <td>
                                      <div className='form-check float-end'>
                                        <input
                                          className='form-check-input'
                                          type='checkbox'
                                          defaultValue
                                          id='flexCheckChecked'
                                        />
                                      </div>
                                    </td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.6</td>
                                    <td>1.9</td>
                                    <td>2.1</td>
                                  </tr>
                                  <tr>
                                    <td>Revenue Per Share</td>
                                    <td>
                                      <div className='form-check float-end'>
                                        <input
                                          className='form-check-input'
                                          type='checkbox'
                                          defaultValue
                                          id='flexCheckChecked'
                                          defaultChecked
                                        />
                                      </div>
                                    </td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.6</td>
                                    <td>1.9</td>
                                    <td>2.1</td>
                                  </tr>
                                  <tr>
                                    <td>Stock Based Compensation To Revenue</td>
                                    <td>
                                      <div className='form-check float-end'>
                                        <input
                                          className='form-check-input'
                                          type='checkbox'
                                          defaultValue
                                          id='flexCheckChecked'
                                        />
                                      </div>
                                    </td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.6</td>
                                    <td>1.9</td>
                                    <td>2.1</td>
                                  </tr>
                                  <tr>
                                    <td>Tangible Asset Value</td>
                                    <td>
                                      <div className='form-check float-end'>
                                        <input
                                          className='form-check-input'
                                          type='checkbox'
                                          defaultValue
                                          id='flexCheckChecked'
                                          defaultChecked
                                        />
                                      </div>
                                    </td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.6</td>
                                    <td>1.9</td>
                                    <td>2.1</td>
                                  </tr>
                                  <tr>
                                    <td>Tangible Book Value Per Share</td>
                                    <td>
                                      <div className='form-check float-end'>
                                        <input
                                          className='form-check-input'
                                          type='checkbox'
                                          defaultValue
                                          id='flexCheckChecked'
                                        />
                                      </div>
                                    </td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.6</td>
                                    <td>1.9</td>
                                    <td>2.1</td>
                                  </tr>
                                  <tr>
                                    <td>Working Capital</td>
                                    <td>
                                      <div className='form-check float-end'>
                                        <input
                                          className='form-check-input'
                                          type='checkbox'
                                          defaultValue
                                          id='flexCheckChecked'
                                          defaultChecked
                                        />
                                      </div>
                                    </td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.5</td>
                                    <td>1.6</td>
                                    <td>1.9</td>
                                    <td>2.1</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>

                      {activeTab === TYPE.capitalStructure.value && (
                        <CapitalStructure
                          data={financialStatisticsData}
                          Loading={loading}
                        />
                      )}
                    </div>
                  </div>
                  {/* <div
                    className='tab-pane fade'
                    id='dcfvalue'
                    role='tabpanel'
                    aria-labelledby='dcfvalue-tab'
                  >
                    DCF Value
                  </div>
                  <div
                    className='tab-pane fade'
                    id='relativevalue'
                    role='tabpanel'
                    aria-labelledby='relativevalue-tab'
                  >
                    Relative Value
                  </div>
                  <div
                    className='tab-pane fade'
                    id='optionanalys'
                    role='tabpanel'
                    aria-labelledby='optionanalys-tab'
                  >
                    Optional Analysis
                  </div>
                  <div
                    className='tab-pane fade'
                    id='finansttics'
                    role='tabpanel'
                    aria-labelledby='finansttics-tab'
                  >
                    Financial Statistics
                  </div>
                  <div
                    className='tab-pane fade'
                    id='finansttment'
                    role='tabpanel'
                    aria-labelledby='finansttment-tab'
                  >
                    Financial Statements
                  </div>
                  <div
                    className='tab-pane fade'
                    id='techanyls'
                    role='tabpanel'
                    aria-labelledby='techanyls-tab'
                  >
                    Technical Analysis
                  </div>
                  <div
                    className='tab-pane fade'
                    id='secfiling'
                    role='tabpanel'
                    aria-labelledby='secfiling-tab'
                  >
                    SEC Filing
                  </div>
                  <div
                    className='tab-pane fade'
                    id='chart'
                    role='tabpanel'
                    aria-labelledby='chart-tab'
                  >
                    Chart
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* mainpage content end */}
      {/* Footer Section Start */}
      {/* <section className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 col-sm-12'>
              <div className='footer-content'>
                <a href='javascipt:void(0);' className>
                  <img
                    src={InvexBWealth}
                    alt='logo'
                    className='img-fluid mb-4'
                  />
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Hendrerit in at eget id purus. Amet tellus dolor aliquam
                  facilisis non gravida. Nisl dui nulla adipiscing nunc ante.
                  Sit nibh sed ornare malesuada.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>© Invex Wealth</p>
              </div>
            </div>
            <div className='col-md-2 col col-sm-6'>
              <div className='footer-links'>
                <h6 className=' fw-bold mb-4 '>Pages</h6>
                <ul>
                  <li>
                    <a href='#!' className>
                      Page 1
                    </a>
                  </li>
                  <li>
                    <a href='#!' className>
                      Page 2
                    </a>
                  </li>
                  <li>
                    <a href='#!' className>
                      Page 3
                    </a>
                  </li>
                  <li>
                    <a href='#!' className>
                      Page 4
                    </a>
                  </li>
                  <li>
                    <a href='#!' className>
                      Page 5
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-2 col col-sm-6'>
              <div className='footer-links'>
                <h6 className=' fw-bold mb-4 '>Others</h6>
                <ul>
                  <li>
                    <a href='#!' className>
                      Page 1
                    </a>
                  </li>
                  <li>
                    <a href='#!' className>
                      Page 2
                    </a>
                  </li>
                  <li>
                    <a href='#!' className>
                      Page 3
                    </a>
                  </li>
                  <li>
                    <a href='#!' className>
                      Page 4
                    </a>
                  </li>
                  <li>
                    <a href='#!' className>
                      Page 5
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-2 col-sm-6'>
              <div className='footer-links'>
                <h6 className='fw-bold mb-4 '>Legal</h6>
                <ul>
                  <li>
                    <a href='#!' className>
                      Page 1
                    </a>
                  </li>
                  <li>
                    <a href='#!' className>
                      Page 2
                    </a>
                  </li>
                  <li>
                    <a href='#!' className>
                      Page 3
                    </a>
                  </li>
                  <li>
                    <a href='#!' className>
                      Page 4
                    </a>
                  </li>
                  <li>
                    <a href='#!' className>
                      Page 5
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-2 col-sm-6 text-center'>
              <div className='footer-social'>
                <h6 className='fw-bold mb-4 '>Follow Us</h6>
                <ul>
                  <li className='ftr-meta'>
                    <a href='javascript:void(0);'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        className='bi bi-meta'
                        viewBox='0 0 16 16'
                      >
                        <path
                          fillRule='evenodd'
                          d='M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a54.944 54.944 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3c.319 0 .625.039.924.122.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714Zm1.516 2.224c-.252-.41-.494-.787-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87l-.937-1.565ZM4.846 4.756c.725.1 1.385.634 2.34 2.001A212.13 212.13 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264.091 0 .181.006.27.018Z'
                        />
                      </svg>
                    </a>
                  </li>
                  <li className='ftr-insta'>
                    <a href='javascript:void(0);'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        className='bi bi-instagram'
                        viewBox='0 0 16 16'
                      >
                        <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z' />
                      </svg>
                    </a>
                  </li>
                  <li className='ftr-linked'>
                    <a href='javascript:void(0);'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        className='bi bi-linkedin'
                        viewBox='0 0 16 16'
                      >
                        <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
                      </svg>
                    </a>
                  </li>
                  <li className='ftr-yutb'>
                    <a href='javascript:void(0);'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        className='bi bi-youtube'
                        viewBox='0 0 16 16'
                      >
                        <path d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z' />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Footer Section End */}
    </>
  );
};

export default FinancialStatistics;
