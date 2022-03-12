import React, { useState } from 'react'

const FilterModel = () => {

    const [filterSearch, setfilterSearch] = useState("");

    return (
        <div className="modal fade" id="filtermodal" tabindex="-1" aria-labelledby="filtermodalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="filtermodalLabel">All Filters</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="modal_tab">
                        <div className="top_button_panel">
                            <button type="button" className="btn btn-info">All</button>
                            <button type="button" className="btn btn-light"> Descriptive</button>                        
                            <button type="button" className="btn btn-light"> Fundamental</button>
                            <button type="button" className="btn btn-light"> Technical</button>
                            <div className="ms-auto">
                                <form className="form-group common_search mx-auto" role="search" method="get" id="searchform" action=""> 
                                    <div className="input-group">
                                        <input type="text" value={filterSearch} onChange={(e)=>setfilterSearch(e.target.value)} name="s" className="form-control" placeholder="Search for Filter" id="example-search-input" id="usr" autocomplete="off" /> 
                                        <input type="submit" value="Search" id="search-submit" style={{display: "none"}} /> 
                                        <span className="input-group-append d-flex align-items-center">
                                            <label for="search-submit"><img src={require("../../Common/Images/search-b.png").default} alt="search-icon" className="img-fluid" height="16" width="16" /></label>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="border mt-4 mb-4"></div>
                        <div className="main_tab_filter_content">
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <button className="nav-link marked" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Exchange</button>
                                <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Market Cap</button>
                                <button className="nav-link marked" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Earning Date</button>
                                <button className="nav-link active" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Index </button>
                                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Avrage Volume</button>
                                <button className="nav-link marked" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">IPO Date</button>
                                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Exchange</button>
                                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Market Cap</button>
                                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Earning Date</button>
                                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Divident Yield</button>
                                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Avrage Volume</button>
                            </div>
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">Exchange</div>
                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">Market Cap</div>
                                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">Earning Date</div>
                                <div className="tab-pane fade show active" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="tab_step1_content">
                                                <h6 className="text-secondary mb-4">Filters</h6>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="filter1" id="filter1" />
                                                    <label className="form-check-label" for="filter1">
                                                        Filter 1
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="filter2" id="filter2" checked />
                                                    <label className="form-check-label" for="filter2">
                                                        Filter 2
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="filter3" id="filter3" checked />
                                                    <label className="form-check-label" for="filter3">
                                                        Filter 3
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="filter4" id="filter4" checked />
                                                    <label className="form-check-label" for="filter4">
                                                        Filter 4
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="filter5" id="filter5" checked />
                                                    <label className="form-check-label" for="filter5">
                                                        Filter 5
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="tab_step2_content">
                                                <h6 className="text-secondary mb-4">Selected Filters</h6>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <span className="d-block w-100">IPO Date </span>
                                                        <div className="d-block">
                                                            <small><i className="circle me-2"></i>0Y to 5Y</small>
                                                        </div>
                                                    </div>
                                                    <a href="" className="text-secondary"><i className="bi bi-x-circle"></i></a>
                                                </div>
                                                <div className="border mt-2 mb-2"></div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <span className="d-block w-100">IPO Date </span>
                                                        <div className="d-block">
                                                            <small><i className="circle me-2"></i>0Y to 5Y</small>
                                                        </div>
                                                    </div>
                                                    <a href="" className="text-secondary"><i className="bi bi-x-circle"></i></a>
                                                </div>
                                                <div className="border mt-2 mb-2"></div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <span className="d-block w-100">IPO Date </span>
                                                        <div className="d-block">
                                                            <small><i className="circle me-2"></i>0Y to 5Y</small>
                                                        </div>
                                                    </div>
                                                    <a href="" className="text-secondary"><i className="bi bi-x-circle"></i></a>
                                                </div>
                                                <div className="border mt-2 mb-2"></div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <span className="d-block w-100">IPO Date </span>
                                                        <div className="d-block">
                                                            <small><i className="circle me-2"></i>0Y to 5Y</small>
                                                        </div>
                                                    </div>
                                                    <a href="" className="text-secondary"><i className="bi bi-x-circle"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default FilterModel
