import React from 'react'

const CashFlow = () => {
    return (
        <>
            <div className="col-lg-12 mb-4">
                <div className="card p-3">
                    <form className="form-group" role="search" method="get" id="searchform" action="">
                        <h5 className="mb-3"><strong>Cash Flow</strong></h5>
                        <div className="d-inline-flex align-items-center">
                            <label htmlFor="" className="me-3 font-bd">Period</label>
                            <select className="form-select me-3" aria-label="Default select example">
                                <option selected>Quarterly</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                            <label htmlFor="" className="me-3 font-bd">View</label>
                            <select className="form-select me-3" aria-label="Default select example">
                                <option selected>Last 5 Years</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered m-0 most_tables">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Net Income</th>
                            <th scope="col">Q1 2022</th>
                            <th scope="col">Q4 2021</th>
                            <th scope="col">Q3 2021</th>
                            <th scope="col">Q2 2021</th>
                            <th scope="col">Q1 2021</th>
                        </tr>
                    </thead>
                    <tbody className="border-top-0">
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
            <div className="table-responsive">
                <table className="table table-bordered mt-4 most_tables">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Cash Flow From Investing Activities</th>
                            <th scope="col">Q1 2022</th>
                            <th scope="col">Q4 2021</th>
                            <th scope="col">Q3 2021</th>
                            <th scope="col">Q2 2021</th>
                            <th scope="col">Q1 2021</th>
                        </tr>
                    </thead>
                    <tbody className="border-top-0">
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
            <div className="table-responsive">
                <table className="table table-bordered mt-4 most_tables">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Cash Flow From Financing Activities</th>
                            <th scope="col">TTM</th>
                            <th scope="col">Q4 2021</th>
                            <th scope="col">Q3 2021</th>
                            <th scope="col">Q2 2021</th>
                            <th scope="col">Q1 2021</th>
                        </tr>
                    </thead>
                    <tbody className="border-top-0">
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
            <div className="table-responsive">
                <table className="table table-bordered mt-4 most_tables">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Change In Cash & Equivalents</th>
                            <th scope="col">Q1 2022</th>
                            <th scope="col">Q4 2021</th>
                            <th scope="col">Q3 2021</th>
                            <th scope="col">Q2 2021</th>
                            <th scope="col">Q1 2021</th>
                        </tr>
                    </thead>
                    <tbody className="border-top-0">
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
            <div className="table-responsive">
                <table className="table table-bordered mt-4 most_tables">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Supplemental Items</th>
                            <th scope="col">TTM</th>
                            <th scope="col">Q4 2021</th>
                            <th scope="col">Q3 2021</th>
                            <th scope="col">Q2 2021</th>
                            <th scope="col">Q1 2021</th>
                        </tr>
                    </thead>
                    <tbody className="border-top-0">
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
        </>
    )
}

export default CashFlow