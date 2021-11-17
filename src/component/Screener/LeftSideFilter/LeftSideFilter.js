import React from 'react'

const LeftSideFilter = () => {
    return (
        <div class="leftsidefilter">
            <div class="new_scenr_btn">
                <h4>New Screener</h4>
                <a href="#" class="btn btn-primary me-2">Save</a>
                <a href="#" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#screenermodal">Switch</a>
            </div>
            <div class="accordion" id="acc_sidefilter">
                <div class="in_acc_item">
                    <h2 class="in_acc_header" id="acc_exchange">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#coll_exchange" aria-expanded="true" aria-controls="coll_exchange">
                            <span class="d-block w-100">Exchange</span>
                        </button>
                    </h2>
                    <div id="coll_exchange" class="accordion-collapse collapse show" aria-labelledby="acc_exchange" data-bs-parent="#acc_sidefilter">
                        <div class="in_acc_body">
                            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                        </div>
                    </div>
                </div>
                
                <div class="in_acc_item">
                    <h2 class="in_acc_header" id="acc_marketcap">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coll_marketcap" aria-expanded="false" aria-controls="coll_marketcap">
                            <span class="d-block w-100">Market Cap</span>
                        </button>
                    </h2>
                    <div id="coll_marketcap" class="accordion-collapse collapse" aria-labelledby="acc_marketcap" data-bs-parent="#acc_sidefilter">
                        <div class="in_acc_body">
                            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                        </div>
                    </div>
                </div>

                <div class="in_acc_item">
                    <h2 class="in_acc_header" id="acc_earningdate">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coll_earningdate" aria-expanded="false" aria-controls="coll_earningdate">
                        <span class="d-block w-100">Earning Date</span>
                        <div class="d-block">
                            <small><i class="circle me-2"></i>Previous 5 Years</small>
                        </div>
                        </button>
                    </h2>
                    <div id="coll_earningdate" class="accordion-collapse collapse" aria-labelledby="acc_earningdate" data-bs-parent="#acc_sidefilter">
                        <div class="in_acc_body">
                            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                        </div>
                    </div>
                </div>

                <div class="in_acc_item">
                    <h2 class="in_acc_header" id="acc_index">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coll_index" aria-expanded="false" aria-controls="coll_index">
                            <span class="d-block w-100">Inedx <a class="float-end me-3 pe-3 text-secondary">Reset</a></span>
                        </button>
                    </h2>
                    <div id="coll_index" class="accordion-collapse collapse" aria-labelledby="acc_index" data-bs-parent="#acc_sidefilter">
                        <div class="in_acc_body">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="filter1" id="filter1" />
                                <label class="form-check-label" for="filter1">
                                    Filter 1
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="filter2" id="filter2" checked />
                                <label class="form-check-label" for="filter2">
                                    Filter 2
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="filter3" id="filter3" checked />
                                <label class="form-check-label" for="filter3">
                                    Filter 3
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="filter4" id="filter4" checked />
                                <label class="form-check-label" for="filter4">
                                    Filter 4
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="filter5" id="filter5" checked />
                                <label class="form-check-label" for="filter5">
                                    Filter 5
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="in_acc_item">
                    <h2 class="in_acc_header" id="acc_marketcap1">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coll_marketcap1" aria-expanded="false" aria-controls="coll_marketcap1">
                            <span class="d-block w-100">Divident Yield</span>
                        </button>
                    </h2>
                    <div id="coll_marketcap1" class="accordion-collapse collapse" aria-labelledby="acc_marketcap1" data-bs-parent="#acc_sidefilter">
                        <div class="in_acc_body">
                            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                        </div>
                    </div>
                </div>

                <div class="in_acc_item">
                    <h2 class="in_acc_header" id="acc_marketcap2">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coll_marketcap2" aria-expanded="false" aria-controls="coll_marketcap2">
                            <span class="d-block w-100">Avrage Volume</span>
                        </button>
                    </h2>
                    <div id="coll_marketcap2" class="accordion-collapse collapse" aria-labelledby="acc_marketcap2" data-bs-parent="#acc_sidefilter">
                        <div class="in_acc_body">
                            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                        </div>
                    </div>
                </div>

                <div class="in_acc_item">
                    <h2 class="in_acc_header" id="acc_index1">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coll_index1" aria-expanded="false" aria-controls="coll_index">
                            <span class="d-block w-100">IPO Date </span>
                            <div class="d-block">
                                <small><i class="circle me-2"></i>0Y to 5Y</small>
                            </div>
                        </button>
                    </h2>
                    <div id="coll_index1" class="accordion-collapse collapse" aria-labelledby="acc_index1" data-bs-parent="#acc_sidefilter">
                        <div class="in_acc_body">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="filter1" id="filter1" />
                                <label class="form-check-label" for="filter1">
                                    Filter 1
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="filter2" id="filter2" checked />
                                <label class="form-check-label" for="filter2">
                                    Filter 2
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="filter3" id="filter3" checked />
                                <label class="form-check-label" for="filter3">
                                    Filter 3
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="filter4" id="filter4" checked />
                                <label class="form-check-label" for="filter4">
                                    Filter 4
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="filter5" id="filter5" checked />
                                <label class="form-check-label" for="filter5">
                                    Filter 5
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="in_acc_item">
                    <h2 class="in_acc_header" id="acc_exchange3">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#coll_exchange3" aria-expanded="true" aria-controls="coll_exchange3">
                            <span class="d-block w-100">Exchange</span>
                        </button>
                    </h2>
                    <div id="coll_exchange3" class="accordion-collapse collapse show" aria-labelledby="acc_exchange3" data-bs-parent="#acc_sidefilter">
                        <div class="in_acc_body">
                            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                        </div>
                    </div>
                </div>
                
                <div class="in_acc_item">
                    <h2 class="in_acc_header" id="acc_marketcap4">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coll_marketcap4" aria-expanded="false" aria-controls="coll_marketcap4">
                            <span class="d-block w-100">Market Cap</span>
                        </button>
                    </h2>
                    <div id="coll_marketcap4" class="accordion-collapse collapse" aria-labelledby="acc_marketcap4" data-bs-parent="#acc_sidefilter">
                        <div class="in_acc_body">
                            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                        </div>
                    </div>
                </div>

                <div class="in_acc-footer">
                    <a href="#" class="btn btn-light">Clear All</a>
                    <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#filtermodal">Add Filter</a>
                </div>
            </div>
        </div>
    )
}

export default LeftSideFilter
