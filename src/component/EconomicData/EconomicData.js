import React from 'react'
import MacroImg from '../Common/Images/options-aapl-2.png';

const EconomicData = () => {
  return (
    <div className='main'>
      <section className='sectors_sec'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='leftsidefilter mb-5'>
                <div className='new_scenr_btn'>
                  <h4 className='m-0'>All Sectors</h4>
                </div>
                <div className='accordion' id='acc_sidefilter'>
                  <div className='in_acc_item'>
                    <h2 className='in_acc_header' id='acc_commu_serv'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#coll_commu_serv'
                        aria-expanded='true'
                        aria-controls='coll_commu_serv'
                      >
                        <span className='d-block w-100'>
                          Treasuries{' '}
                          <a className='float-end me-3 pe-3 text-secondary'>
                            1
                          </a>
                        </span>
                      </button>
                    </h2>
                    <div
                      id='coll_commu_serv'
                      className='accordion-collapse collapse'
                      aria-labelledby='acc_commu_serv'
                      data-bs-parent='#acc_sidefilter'
                    >
                      <div className='in_acc_body'>Daily Treasury Rates</div>
                    </div>
                  </div>
                  <div className='in_acc_item'>
                    <h2 className='in_acc_header' id='acc_consumer_discre'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#coll_consumer_discre'
                        aria-expanded='false'
                        aria-controls='coll_consumer_discre'
                      >
                        <span className='d-block w-100'>
                          Commodities{' '}
                          <a className='float-end me-3 pe-3 text-secondary'>
                            7
                          </a>
                        </span>
                      </button>
                    </h2>
                    <div
                      id='coll_consumer_discre'
                      className='accordion-collapse collapse'
                      aria-labelledby='acc_consumer_discre'
                      data-bs-parent='#acc_sidefilter'
                    >
                      <div className='in_acc_body'>
                        <ul>
                          <li>
                            <a href='javascript:void(0)'>Oil Prices</a>
                          </li>
                          <li>
                            <a href='javascript:void(0)' className='active'>
                              Natural Gas Price
                            </a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>Heating Oil Price</a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>Jet Fuel Prices</a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>Diesel Pricel</a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>Gas Prices</a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>Propane Prices</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='in_acc_item'>
                    <h2 className='in_acc_header' id='acc_consumer_staples'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#coll_consumer_staples'
                        aria-expanded='false'
                        aria-controls='coll_consumer_staples'
                      >
                        <span className='d-block w-100'>
                          Exonomic Data{' '}
                          <a className='float-end me-3 pe-3 text-secondary'>
                            12
                          </a>
                        </span>
                      </button>
                    </h2>
                    <div
                      id='coll_consumer_staples'
                      className='accordion-collapse collapse'
                      aria-labelledby='acc_consumer_staples'
                      data-bs-parent='#acc_sidefilter'
                    >
                      <div className='in_acc_body'>
                        <ul>
                          <li>
                            <a href='javascript:void(0)'>
                              Consumer Price Index
                            </a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>Fedral Fund Rates</a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>Real GDP</a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              Institutional Money Funds
                            </a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>Initial Claims</a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              Industrial Production Index
                            </a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              Total Housing Starts
                            </a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>Total Payrolls</a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>Total Vehicle Sales</a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>Retail Money Funds</a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>Unemployment Rate</a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              US Recession Probabilities
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='in_acc_item'>
                    <h2 className='in_acc_header' id='acc_energy'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#coll_energy'
                        aria-expanded='false'
                        aria-controls='coll_energy'
                      >
                        <span className='d-block w-100'>
                          Rates{' '}
                          <a className='float-end me-3 pe-3 text-secondary'>
                            5
                          </a>
                        </span>
                      </button>
                    </h2>
                    <div
                      id='coll_energy'
                      className='accordion-collapse collapse'
                      aria-labelledby='acc_energy'
                      data-bs-parent='#acc_sidefilter'
                    >
                      <div className='in_acc_body'>
                        <ul>
                          <li>
                            <a href='javascript:void(0)'>CD Rates</a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              Credit Card Interest Rate
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='in_acc_item'>
                    <h2 className='in_acc_header' id='acc_financials'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#coll_financials'
                        aria-expanded='false'
                        aria-controls='coll_financials'
                      >
                        <span className='d-block w-100'>
                          Mortgage{' '}
                          <a className='float-end me-3 pe-3 text-secondary'>
                            1
                          </a>
                        </span>
                      </button>
                    </h2>
                    <div
                      id='coll_financials'
                      className='accordion-collapse collapse'
                      aria-labelledby='acc_financials'
                      data-bs-parent='#acc_sidefilter'
                    >
                      <div className='in_acc_body'>
                        <ul>
                          <li>
                            <a href='javascript:void(0)'>Mortgage Rates</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='row'>
                <div className='col-lg-12 mb-5'>
                  <div className='card companyviewblk compprofile_block mb-5'>
                    <div className='card-header'>
                      <div className='d-flex align-items-center justify-content-left bg-light p-2 border-bottom-0'>
                        <h6 className='m-0'>
                          <strong>Industrials: Aerospace &amp; Defense</strong>
                        </h6>
                      </div>
                    </div>
                    <div className='card-body'>
                      <div className='description-para'>
                        <div className='key_status'>
                          <p>
                            The aerospace &amp; defense industry includes
                            companies that manufacture aerospace and defense
                            products, including aircraft and aircraft parts,
                            tanks, guided missiles, space vehicles, ships and
                            marine equipment, and other aerospace and defense
                            components and systems, as well as companies
                            supporting these products through repair and
                            maintenance services.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mt-5 mb-5'>
                    <h6 className='mb-4'>
                      <strong>Consumer Price Index Chart</strong>
                    </h6>
                    <div className='top_button_panel mt-4 mb-3'>
                      <button type='button' className='btn btn-light'>
                        {' '}
                        3M
                      </button>
                      <button type='button' className='btn btn-info'>
                        {' '}
                        6M
                      </button>
                      <button type='button' className='btn btn-light'>
                        {' '}
                        1Y
                      </button>
                      <button type='button' className='btn btn-light'>
                        {' '}
                        Max
                      </button>
                    </div>
                    <img src={MacroImg} alt='chart' className='img-fluid' />
                    <p className='mt-5'>
                      As reported by the U.S. Bureau of Labor Statistics the all
                      items index rose 5.3 percent for the 12 months ending
                      August, a smaller increase than the 5.4-percent rise for
                      the period ending July. The index for all items less food
                      and energy rose 4.0 percent over the last 12 months, also
                      a smaller increase than the period ending July. The energy
                      index rose 25.0 percent over the last 12 months, and the
                      food index increased 3.7 percent; both were larger than
                      the increases for the 12-month period ending July.
                      <br />
                      (All data are seasonally unadjusted)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='card companyviewblk compprofile_block mb-5'>
                <div className='card-header'>
                  <div className='d-flex align-items-center justify-content-left bg-light p-2 border-bottom-0'>
                    <h6 className='m-0'>
                      <strong>Notes On Consumer Price Index</strong>
                    </h6>
                  </div>
                </div>
                <div className='card-body'>
                  <div className='description-para'>
                    <div className='key_status'>
                      <p>
                        There are two participants in the private sectors:
                        Consumers and Businesses. With regards to
                        Inflation/Deflation we must look at both in order to
                        gauge what is normal and what is outside the bounds of
                        normality.
                        <br />
                        For Consumers we look at the following Inflation
                        statistics:
                        <br />
                        1) Consumer Price Index All Items (CPIAUCSL)
                        <br />
                        2) Consumer Price Index(CPI) All Items ex' Food &amp;
                        Energy (CPILFESL)
                        <br />
                        <br />
                        For Businesses we look at the following Inflation
                        statistics:
                        <br />
                        1) Producer Price Index Final Demand(PPIFIS)
                        <br />
                        2) Producer Price Index Final Demand ex' Food &amp;
                        Energy(PPIFES)
                      </p>
                      <br />
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EconomicData
