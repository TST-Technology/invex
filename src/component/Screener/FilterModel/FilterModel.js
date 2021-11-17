import React from 'react'

const FilterModel = () => {
    return (
        <div class="modal fade" id="filtermodal" tabindex="-1" aria-labelledby="filtermodalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="filtermodalLabel">All Filters</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="modal_tab">
                        <div class="top_button_panel">
                            <button type="button" class="btn btn-info">All</button>
                            <button type="button" class="btn btn-light"> Descriptive</button>                        
                            <button type="button" class="btn btn-light"> Fundamental</button>
                            <button type="button" class="btn btn-light"> Technical</button>
                            <div class="ms-auto">
                                <form class="form-group common_search mx-auto" role="search" method="get" id="searchform" action=""> 
                                    <div class="input-group">
                                        <input type="text" value="" name="s" class="form-control" placeholder="Search for Filter" id="example-search-input" id="usr" autocomplete="off" /> 
                                        <input type="submit" value="Search" id="search-submit" style={{display: "none"}} /> 
                                        <span class="input-group-append d-flex align-items-center">
                                            <label for="search-submit"><img src="assets/images/search-b.png" alt="search-icon" class="img-fluid" height="16" width="16" /></label>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="border mt-4 mb-4"></div>
                        <div class="main_tab_filter_content">
                            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <button class="nav-link marked" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Exchange</button>
                                <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Market Cap</button>
                                <button class="nav-link marked" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Earning Date</button>
                                <button class="nav-link active" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Index </button>
                                <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Avrage Volume</button>
                                <button class="nav-link marked" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">IPO Date</button>
                                <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Exchange</button>
                                <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Market Cap</button>
                                <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Earning Date</button>
                                <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Divident Yield</button>
                                <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Avrage Volume</button>
                            </div>
                            <div class="tab-content" id="v-pills-tabContent">
                                <div class="tab-pane fade " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">Exchange</div>
                                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">Market Cap</div>
                                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">Earning Date</div>
                                <div class="tab-pane fade show active" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="tab_step1_content">
                                                <h6 class="text-secondary mb-4">Filters</h6>
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
                                        <div class="col-lg-6">
                                            <div class="tab_step2_content">
                                                <h6 class="text-secondary mb-4">Selected Filters</h6>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <span class="d-block w-100">IPO Date </span>
                                                        <div class="d-block">
                                                            <small><i class="circle me-2"></i>0Y to 5Y</small>
                                                        </div>
                                                    </div>
                                                    <a href="" class="text-secondary"><i class="bi bi-x-circle"></i></a>
                                                </div>
                                                <div class="border mt-2 mb-2"></div>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <span class="d-block w-100">IPO Date </span>
                                                        <div class="d-block">
                                                            <small><i class="circle me-2"></i>0Y to 5Y</small>
                                                        </div>
                                                    </div>
                                                    <a href="" class="text-secondary"><i class="bi bi-x-circle"></i></a>
                                                </div>
                                                <div class="border mt-2 mb-2"></div>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <span class="d-block w-100">IPO Date </span>
                                                        <div class="d-block">
                                                            <small><i class="circle me-2"></i>0Y to 5Y</small>
                                                        </div>
                                                    </div>
                                                    <a href="" class="text-secondary"><i class="bi bi-x-circle"></i></a>
                                                </div>
                                                <div class="border mt-2 mb-2"></div>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <span class="d-block w-100">IPO Date </span>
                                                        <div class="d-block">
                                                            <small><i class="circle me-2"></i>0Y to 5Y</small>
                                                        </div>
                                                    </div>
                                                    <a href="" class="text-secondary"><i class="bi bi-x-circle"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default FilterModel
