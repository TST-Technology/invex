import React from 'react'

const LeftSideFilter = (props) => {
    return (
        <div className={"leftsidefilter "+(props.showFilterSection?"show-menu":"")}>
            <div className="new_scenr_btn">
                <h4>New Screener</h4>
                <a href="#" className="btn btn-primary me-2">Save</a>
                <a href="#" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#screenermodal">Switch</a>
            </div>
            <div className="accordion" id="acc_sidefilter">
                <div className="in_acc_item">
                    <h2 className="in_acc_header" id="acc_exchange">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#coll_exchange" aria-expanded="true" aria-controls="coll_exchange">
                            <span className="d-block w-100">Exchange</span>
                        </button>
                    </h2>
                    <div id="coll_exchange" className="accordion-collapse collapse show" aria-labelledby="acc_exchange" data-bs-parent="#acc_sidefilter">
                        <div className="in_acc_body">
                            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                        </div>
                    </div>
                </div>
                
                <div className="in_acc_item">
                    <h2 className="in_acc_header" id="acc_marketcap">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coll_marketcap" aria-expanded="false" aria-controls="coll_marketcap">
                            <span className="d-block w-100">Market Cap</span>
                        </button>
                    </h2>
                    <div id="coll_marketcap" className="accordion-collapse collapse" aria-labelledby="acc_marketcap" data-bs-parent="#acc_sidefilter">
                        <div className="in_acc_body">
                            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                        </div>
                    </div>
                </div>

                <div className="in_acc_item">
                    <h2 className="in_acc_header" id="acc_earningdate">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coll_earningdate" aria-expanded="false" aria-controls="coll_earningdate">
                        <span className="d-block w-100">Earning Date</span>
                        <div className="d-block">
                            <small><i className="circle me-2"></i>Previous 5 Years</small>
                        </div>
                        </button>
                    </h2>
                    <div id="coll_earningdate" className="accordion-collapse collapse" aria-labelledby="acc_earningdate" data-bs-parent="#acc_sidefilter">
                        <div className="in_acc_body">
                            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                        </div>
                    </div>
                </div>

                <div className="in_acc_item">
                    <h2 className="in_acc_header" id="acc_index">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coll_index" aria-expanded="false" aria-controls="coll_index">
                            <span className="d-block w-100">Inedx <a className="float-end me-3 pe-3 text-secondary">Reset</a></span>
                        </button>
                    </h2>
                    <div id="coll_index" className="accordion-collapse collapse" aria-labelledby="acc_index" data-bs-parent="#acc_sidefilter">
                        <div className="in_acc_body">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="filter1" id="filter1" />
                                <label className="form-check-label" htmlFor="filter1">
                                    Filter 1
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="filter2" id="filter2" checked />
                                <label className="form-check-label" htmlFor="filter2">
                                    Filter 2
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="filter3" id="filter3" checked />
                                <label className="form-check-label" htmlFor="filter3">
                                    Filter 3
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="filter4" id="filter4" checked />
                                <label className="form-check-label" htmlFor="filter4">
                                    Filter 4
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="filter5" id="filter5" checked />
                                <label className="form-check-label" htmlFor="filter5">
                                    Filter 5
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="in_acc_item">
                    <h2 className="in_acc_header" id="acc_marketcap1">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coll_marketcap1" aria-expanded="false" aria-controls="coll_marketcap1">
                            <span className="d-block w-100">Divident Yield</span>
                        </button>
                    </h2>
                    <div id="coll_marketcap1" className="accordion-collapse collapse" aria-labelledby="acc_marketcap1" data-bs-parent="#acc_sidefilter">
                        <div className="in_acc_body">
                            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                        </div>
                    </div>
                </div>

                <div className="in_acc_item">
                    <h2 className="in_acc_header" id="acc_marketcap2">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coll_marketcap2" aria-expanded="false" aria-controls="coll_marketcap2">
                            <span className="d-block w-100">Avrage Volume</span>
                        </button>
                    </h2>
                    <div id="coll_marketcap2" className="accordion-collapse collapse" aria-labelledby="acc_marketcap2" data-bs-parent="#acc_sidefilter">
                        <div className="in_acc_body">
                            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                        </div>
                    </div>
                </div>

                <div className="in_acc_item">
                    <h2 className="in_acc_header" id="acc_index1">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coll_index1" aria-expanded="false" aria-controls="coll_index">
                            <span className="d-block w-100">IPO Date </span>
                            <div className="d-block">
                                <small><i className="circle me-2"></i>0Y to 5Y</small>
                            </div>
                        </button>
                    </h2>
                    <div id="coll_index1" className="accordion-collapse collapse" aria-labelledby="acc_index1" data-bs-parent="#acc_sidefilter">
                        <div className="in_acc_body">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="filter1" id="filter1" />
                                <label className="form-check-label" htmlFor="filter1">
                                    Filter 1
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="filter2" id="filter2" checked />
                                <label className="form-check-label" htmlFor="filter2">
                                    Filter 2
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="filter3" id="filter3" checked />
                                <label className="form-check-label" htmlFor="filter3">
                                    Filter 3
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="filter4" id="filter4" checked />
                                <label className="form-check-label" htmlFor="filter4">
                                    Filter 4
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="filter5" id="filter5" checked />
                                <label className="form-check-label" htmlFor="filter5">
                                    Filter 5
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="in_acc_item">
                    <h2 className="in_acc_header" id="acc_exchange3">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#coll_exchange3" aria-expanded="true" aria-controls="coll_exchange3">
                            <span className="d-block w-100">Exchange</span>
                        </button>
                    </h2>
                    <div id="coll_exchange3" className="accordion-collapse collapse show" aria-labelledby="acc_exchange3" data-bs-parent="#acc_sidefilter">
                        <div className="in_acc_body">
                            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                        </div>
                    </div>
                </div>
                
                <div className="in_acc_item">
                    <h2 className="in_acc_header" id="acc_marketcap4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coll_marketcap4" aria-expanded="false" aria-controls="coll_marketcap4">
                            <span className="d-block w-100">Market Cap</span>
                        </button>
                    </h2>
                    <div id="coll_marketcap4" className="accordion-collapse collapse" aria-labelledby="acc_marketcap4" data-bs-parent="#acc_sidefilter">
                        <div className="in_acc_body">
                            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                        </div>
                    </div>
                </div>

                <div className="in_acc-footer">
                    <a href="#" className="btn btn-light">Clear All</a>
                    <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#filtermodal">Add Filter</a>
                </div>
            </div>
        </div>
    )
}

export default LeftSideFilter
