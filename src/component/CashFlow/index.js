import React from 'react'

const CashFlow = () => {
  return (
    <div class="main">
        <section class="company_details">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mb-4">
                        <div class="card companyviewblk compny_left_detail">
                            <div class="card-body">
                                <div class="description-para d-flex align-items-center justify-content-between">
                                    <div class="logo me-5">
                                        <div class="img">
                                            <img src="assets/images/image1.png" alt="image"/>
                                        </div>
                                        <div class="title1">
                                            <h5 class="card-title">APPLE INC </h5>
                                            <p class="company">AAPL</p>
                                        </div> 
                                    </div>
                                    <div class="chart">
                                        <div class="chart-text mt-0">
                                            <p class="card-text up">$235.49</p>
                                            <p class="text up">+3.10 (+1.3%)</p>
                                        </div>
                                    </div>
                                    <div class="chart-img me-5">
                                        <img src="assets/images/graph.png" alt="graph"/>
                                    </div>
                                    <div class="">
                                        <form class="form-group common_search mx-auto" role="search" method="get" id="searchform" action=""> 
                                            <div class="input-group">
                                                <input type="text" value="" name="s" class="form-control" placeholder="Search for Symbol" id="example-search-input" autocomplete="off"/> 
                                                <input type="submit" value="Search" id="search-submit" className='hiden'/> 
                                                <span class="input-group-append d-flex align-items-center">
                                                    <label for="search-submit">
                                                        <img src="assets/images/search-b.png" alt="search-icon" class="img-fluid" height="16" width="16"/>
                                                    </label>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="top_button_panel mt-4 mb-3">
                            <label for="" class="font-bd me-3 mb-2">Financials: </label>
                            <button type="button" class="btn btn-light"> Balance Sheet</button>
                            <button type="button" class="btn btn-light"> Income Statement</button>                        
                            <button type="button" class="btn btn-info"> Cash Flow</button>
                        </div>
                        <div class="card p-3">
                            <form class="form-group" role="search" method="get" id="searchform" action=""> 
                                <h5 class="mb-3"><strong>Cash Flow</strong></h5>
                                <div class="d-inline-flex align-items-center">
                                    <label for="" class="me-3 font-bd">Period</label>
                                    <select class="form-select me-3" aria-label="Default select example">
                                        <option selected>Quarterly</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>

                                    <label for="" class="me-3 font-bd">View</label>
                                    <select class="form-select me-3" aria-label="Default select example">
                                        <option selected>Last 5 Years</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    <div class="table-responsive">
                        <table class="table table-bordered m-0 most_tables">
                            <thead class="table-light">
                                <tr>
                                    <th scope="col">Net Income</th>
                                    <th scope="col">Q1 2022</th>
                                    <th scope="col">Q4 2021</th>
                                    <th scope="col">Q3 2021</th>
                                    <th scope="col">Q2 2021</th>
                                    <th scope="col">Q1 2021</th>
                                </tr>
                            </thead>
                            <tbody class="border-top-0">
                                <tr>
                                    <td>Revenues</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                                <tr>
                                    <td>Receivables</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                                <tr>
                                    <td>Other Revenues</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                                <tr>
                                    <td>Total Revenues</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                                <tr>
                                    <td>Cost Of Revenues</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                                <tr>
                                    <td>Gross Profit</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                                <tr>
                                    <td>Cost Of Revenues</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="table-responsive"> 
                        <table class="table table-bordered mt-4 most_tables">
                            <thead class="table-light">
                                <tr>
                                    <th scope="col">Cash Flow From Investing Activities</th>
                                    <th scope="col">Q1 2022</th>
                                    <th scope="col">Q4 2021</th>
                                    <th scope="col">Q3 2021</th>
                                    <th scope="col">Q2 2021</th>
                                    <th scope="col">Q1 2021</th>
                                </tr>
                            </thead>
                            <tbody class="border-top-0">
                                <tr>
                                    <td>Selling General & Admin Expenses</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                                <tr>
                                    <td>R&D Expenses</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                                <tr>
                                    <td>Total Operating Expenses</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                                <tr>
                                    <td>Operating Income</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-bordered mt-4 most_tables">
                            <thead class="table-light">
                                <tr>
                                    <th scope="col">Cash Flow From Financing Activities</th>
                                    <th scope="col">TTM</th>
                                    <th scope="col">Q4 2021</th>
                                    <th scope="col">Q3 2021</th>
                                    <th scope="col">Q2 2021</th>
                                    <th scope="col">Q1 2021</th>
                                </tr>
                            </thead>
                            <tbody class="border-top-0">
                                <tr>
                                    <td>Revenues</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                                <tr>
                                    <td>Receivables</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                                <tr>
                                    <td>Other Revenues</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                                <tr>
                                    <td>Total Revenues</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                                <tr>
                                    <td>Cost Of Revenues</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                                <tr>
                                    <td>Gross Profit</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                                <tr>
                                    <td>Cost Of Revenues</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="table-responsive"> 
                        <table class="table table-bordered mt-4 most_tables">
                            <thead class="table-light">
                                <tr>
                                    <th scope="col">Change In Cash & Equivalents</th>
                                    <th scope="col">Q1 2022</th>
                                    <th scope="col">Q4 2021</th>
                                    <th scope="col">Q3 2021</th>
                                    <th scope="col">Q2 2021</th>
                                    <th scope="col">Q1 2021</th>
                                </tr>
                            </thead>
                            <tbody class="border-top-0">
                                <tr>
                                    <td>Selling General & Admin Expenses</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                                <tr>
                                    <td>R&D Expenses</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                                <tr>
                                    <td>Total Operating Expenses</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                                <tr>
                                    <td>Operating Income</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-bordered mt-4 most_tables">
                            <thead class="table-light">
                                <tr>
                                    <th scope="col">Supplemental Items</th>
                                    <th scope="col">TTM</th>
                                    <th scope="col">Q4 2021</th>
                                    <th scope="col">Q3 2021</th>
                                    <th scope="col">Q2 2021</th>
                                    <th scope="col">Q1 2021</th>
                                </tr>
                            </thead>
                            <tbody class="border-top-0">
                                <tr>
                                    <td>Revenues</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                                <tr>
                                    <td>Receivables</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                                <tr>
                                    <td>Other Revenues</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                                <tr>
                                    <td>Total Revenues</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                                <tr>
                                    <td>Cost Of Revenues</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                                <tr>
                                    <td>Gross Profit</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                                <tr>
                                    <td>Cost Of Revenues</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                    <td>639M</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default CashFlow