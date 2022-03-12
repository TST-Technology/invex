import React from "react";
import industrialChart from "../Images/industrial_chart.png";
import topETFData from "./topETFData.json";

const Sectors = () => {
  return (
    <div className="main">
      <section className="sectors_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="leftsidefilter">
                <div className="new_scenr_btn">
                  <h4 className="m-0">All Sectors</h4>
                </div>
                <div className="accordion" id="acc_sidefilter">
                  <div className="in_acc_item">
                    <h2 className="in_acc_header" id="acc_commu_serv">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#coll_commu_serv"
                        aria-expanded="true"
                        aria-controls="coll_commu_serv"
                      >
                        <span className="d-block w-100">
                          Communication Services{" "}
                          <a className="float-end me-3 pe-3 text-secondary">
                            5 Industries
                          </a>
                        </span>
                      </button>
                    </h2>
                    <div
                      id="coll_commu_serv"
                      className="accordion-collapse collapse"
                      aria-labelledby="acc_commu_serv"
                      data-bs-parent="#acc_sidefilter"
                    >
                      <div className="in_acc_body">
                        It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element.
                      </div>
                    </div>
                  </div>
                  <div className="in_acc_item">
                    <h2 className="in_acc_header" id="acc_consumer_discre">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#coll_consumer_discre"
                        aria-expanded="false"
                        aria-controls="coll_consumer_discre"
                      >
                        <span className="d-block w-100">
                          Consumer Discretionary{" "}
                          <a className="float-end me-3 pe-3 text-secondary">
                            11 Industries
                          </a>
                        </span>
                      </button>
                    </h2>
                    <div
                      id="coll_consumer_discre"
                      className="accordion-collapse collapse"
                      aria-labelledby="acc_consumer_discre"
                      data-bs-parent="#acc_sidefilter"
                    >
                      <div className="in_acc_body">
                        It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element.
                      </div>
                    </div>
                  </div>
                  <div className="in_acc_item">
                    <h2 className="in_acc_header" id="acc_consumer_staples">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#coll_consumer_staples"
                        aria-expanded="false"
                        aria-controls="coll_consumer_staples"
                      >
                        <span className="d-block w-100">
                          Consumer Staples{" "}
                          <a className="float-end me-3 pe-3 text-secondary">
                            11 Industries
                          </a>
                        </span>
                      </button>
                    </h2>
                    <div
                      id="coll_consumer_staples"
                      className="accordion-collapse collapse"
                      aria-labelledby="acc_consumer_staples"
                      data-bs-parent="#acc_sidefilter"
                    >
                      <div className="in_acc_body">
                        It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element.
                      </div>
                    </div>
                  </div>
                  <div className="in_acc_item">
                    <h2 className="in_acc_header" id="acc_energy">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#coll_energy"
                        aria-expanded="false"
                        aria-controls="coll_energy"
                      >
                        <span className="d-block w-100">
                          Energy{" "}
                          <a className="float-end me-3 pe-3 text-secondary">
                            5 Industries
                          </a>
                        </span>
                      </button>
                    </h2>
                    <div
                      id="coll_energy"
                      className="accordion-collapse collapse"
                      aria-labelledby="acc_energy"
                      data-bs-parent="#acc_sidefilter"
                    >
                      <div className="in_acc_body">
                        It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element.
                      </div>
                    </div>
                  </div>
                  <div className="in_acc_item">
                    <h2 className="in_acc_header" id="acc_financials">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#coll_financials"
                        aria-expanded="false"
                        aria-controls="coll_financials"
                      >
                        <span className="d-block w-100">
                          Financials{" "}
                          <a className="float-end me-3 pe-3 text-secondary">
                            2 Industries
                          </a>
                        </span>
                      </button>
                    </h2>
                    <div
                      id="coll_financials"
                      className="accordion-collapse collapse"
                      aria-labelledby="acc_financials"
                      data-bs-parent="#acc_sidefilter"
                    >
                      <div className="in_acc_body">
                        It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element.
                      </div>
                    </div>
                  </div>
                  <div className="in_acc_item">
                    <h2 className="in_acc_header" id="acc_healthcare">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#coll_healthcare"
                        aria-expanded="false"
                        aria-controls="coll_healthcare"
                      >
                        <span className="d-block w-100">
                          Health Care{" "}
                          <a className="float-end me-3 pe-3 text-secondary">
                            6 Industries
                          </a>
                        </span>
                      </button>
                    </h2>
                    <div
                      id="coll_healthcare"
                      className="accordion-collapse collapse"
                      aria-labelledby="acc_healthcare"
                      data-bs-parent="#acc_sidefilter"
                    >
                      <div className="in_acc_body">
                        It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element.
                      </div>
                    </div>
                  </div>
                  <div className="in_acc_item">
                    <h2 className="in_acc_header" id="acc_industries">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#coll_industries"
                        aria-expanded="false"
                        aria-controls="coll_industries"
                      >
                        <span className="d-block w-100">
                          Industries{" "}
                          <a className="float-end me-3 pe-3 text-secondary">
                            6 Industries
                          </a>
                        </span>
                      </button>
                    </h2>
                    <div
                      id="coll_industries"
                      className="accordion-collapse collapse show"
                      aria-labelledby="acc_industries"
                      data-bs-parent="#acc_sidefilter"
                    >
                      <div className="in_acc_body">
                        <ul>
                          <li>
                            <a href="javascript:void(0);">Airlines</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              Air Freight & Logistics
                            </a>
                          </li>
                          <li className="active">
                            <a href="javascript:void(0);">
                              Aerospace & Defense
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Building Products</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              Commercial Services & Supplies
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              Construction & Engineering
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              Electrical Equipment
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              Industrial Conglomerates
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">-Road & Rail</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Machinery</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              -Trading Companies & Distributors
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Marine</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Machinery</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              Professional Services
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="in_acc_item">
                    <h2 className="in_acc_header" id="acc_info_tech">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#coll_info_tech"
                        aria-expanded="false"
                        aria-controls="coll_info_tech"
                      >
                        <span className="d-block w-100">
                          Information Technology{" "}
                          <a className="float-end me-3 pe-3 text-secondary">
                            6 Industries
                          </a>
                        </span>
                      </button>
                    </h2>
                    <div
                      id="coll_info_tech"
                      className="accordion-collapse collapse"
                      aria-labelledby="acc_info_tech"
                      data-bs-parent="#acc_sidefilter"
                    >
                      <div className="in_acc_body">
                        It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element.
                      </div>
                    </div>
                  </div>
                  <div className="in_acc_item">
                    <h2 className="in_acc_header" id="acc_material">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#coll_materials"
                        aria-expanded="false"
                        aria-controls="coll_materials"
                      >
                        <span className="d-block w-100">
                          Materials{" "}
                          <a className="float-end me-3 pe-3 text-secondary">
                            5 Industries
                          </a>
                        </span>
                      </button>
                    </h2>
                    <div
                      id="coll_materials"
                      className="accordion-collapse collapse"
                      aria-labelledby="acc_material"
                      data-bs-parent="#acc_sidefilter"
                    >
                      <div className="in_acc_body">
                        It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element.
                      </div>
                    </div>
                  </div>
                  <div className="in_acc_item">
                    <h2 className="in_acc_header" id="acc_realestate">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#coll_realestate"
                        aria-expanded="false"
                        aria-controls="coll_realestate"
                      >
                        <span className="d-block w-100">
                          Real Estate{" "}
                          <a className="float-end me-3 pe-3 text-secondary">
                            2 Industries
                          </a>
                        </span>
                      </button>
                    </h2>
                    <div
                      id="coll_realestate"
                      className="accordion-collapse collapse"
                      aria-labelledby="acc_realestate"
                      data-bs-parent="#acc_sidefilter"
                    >
                      <div className="in_acc_body">
                        It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element.
                      </div>
                    </div>
                  </div>
                  <div className="in_acc_item">
                    <h2 className="in_acc_header" id="acc_utilities">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#coll_utilities"
                        aria-expanded="false"
                        aria-controls="coll_utilities"
                      >
                        <span className="d-block w-100">
                          Utilities{" "}
                          <a className="float-end me-3 pe-3 text-secondary">
                            5 Industries
                          </a>
                        </span>
                      </button>
                    </h2>
                    <div
                      id="coll_utilities"
                      className="accordion-collapse collapse"
                      aria-labelledby="acc_utilities"
                      data-bs-parent="#acc_sidefilter"
                    >
                      <div className="in_acc_body">
                        It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-12 mb-5">
                  <div className="card companyviewblk compprofile_block mb-5">
                    <div className="card-header">
                      <div className="d-flex align-items-center justify-content-left bg-light p-2 border-bottom-0">
                        <h6 className="m-0">
                          <strong>Industrials: Aerospace & Defense</strong>
                        </h6>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="description-para">
                        <div className="key_status">
                          <p className="mb-4">
                            The aerospace & defense industry includes companies
                            that manufacture aerospace and defense products,
                            including aircraft and aircraft parts, tanks, guided
                            missiles, space vehicles, ships and marine
                            equipment, and other aerospace and defense
                            components and systems, as well as companies
                            supporting these products through repair and
                            maintenance services.
                          </p>
                          <div className="d-flex align-items-center justify-content-between">
                            <a href="#" className="btn btn-light">
                              Read More
                            </a>
                            <a
                              href="#"
                              className="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#filtermodal"
                            >
                              Find Investnment
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 mb-5">
                    <h6 className="mb-4">
                      <strong>
                        Market Cap (billions) by Industrial Sector
                      </strong>
                    </h6>
                    <img src={industrialChart} alt="chart" className="img-fluid" />
                  </div>

                  <div className="top_eta">
                    <div className="mb-5">
                      <div className="d-flex align-items-center justify-content-between border p-3 border-bottom-0">
                        <h6 className="m-0">
                          <strong>Top ETF Preformance</strong>
                        </h6>
                        <a href="javascript:void(0)" className="text-dark viewmore">
                          View More
                        </a>
                      </div>
                      <div className="table-responsive">
                        <table className="table table-bordered m-0 most_tables">
                          <thead className="table-light">
                            <tr>
                              <th scope="col">Symbol</th>
                              <th scope="col">Market cap(B)</th>
                              <th scope="col">Current price</th>
                              <th scope="col">52 Week low</th>
                              <th scope="col">52 Week high</th>
                              <th scope="col">Under valued</th>
                            </tr>
                          </thead>
                          <tbody className="border-top-0">
                            {topETFData.map((etfData) => {
                              const symb = etfData.symbol || "";
                              const marketCap = etfData.marketCap || "";
                              const currPrice = etfData.currPrice || "";
                              const weekLow = etfData["52WeekLow"] || "";
                              const weekHigh = etfData["52WeekHigh"] || "";
                              const underValued = etfData.underValued || "";

                              return (
                                <tr>
                                  <td>{symb}</td>
                                  <td>{marketCap}</td>
                                  <td>{currPrice}</td>
                                  <td>{weekLow}</td>
                                  <td>{weekHigh}</td>
                                  <td>{underValued}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
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

export default Sectors;
