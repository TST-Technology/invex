import React from 'react'

const BalanceSheet = () => {
    return (
        <>
            <div className="col-lg-12 mb-4">
                <div className="card p-3">
                    <form className="form-group" role="search" method="get" id="searchform" action="">
                        <h5 className="mb-3"><strong>Balance Sheet</strong></h5>
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
            <h6 className="mb-4"><strong>AAPL: Saily 1 Year Volatility Chart</strong></h6>
            <div className="table-responsive">
                <table className="table table-bordered m-0 most_tables">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Current Assets</th>
                            <th scope="col">Q1 2022</th>
                            <th scope="col">Q4 2021</th>
                            <th scope="col">Q3 2021</th>
                            <th scope="col">Q2 2021</th>
                            <th scope="col">Q1 2021</th>
                        </tr>
                    </thead>
                    <tbody className="border-top-0">
                        <tr>
                            <td>Cash, Cash Equivalents & Short Term Investments</td>
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
                            <td>Inventory</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td>OtherCurrentAssets</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td>Current Assets Total</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                    </tbody>
                    <tbody className="border-top-0">
                        <tr>
                            <td className="p-3"></td>
                        </tr>
                    </tbody>
                    <thead className="table-light border-top-0">
                        <tr>
                            <th scope="col">Non-Current Assets</th>
                            <th scope="col">Q1 2022</th>
                            <th scope="col">Q4 2021</th>
                            <th scope="col">Q3 2021</th>
                            <th scope="col">Q2 2021</th>
                            <th scope="col">Q1 2021</th>
                        </tr>
                    </thead>
                    <tbody className="border-top-0">
                        <tr>
                            <td>PropertyPlantEquipment</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td>IntangibleAssets</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td>Goodwill</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td>OtherCurrentAssets</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td>Long Term Investments</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td>Other Non-Current Assets</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td>Non-Current Assets Total</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td className="p-3"></td>
                        </tr>
                        <tr>
                            <td>TotalAssets</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h6 className="mb-4 mt-5"><strong>Liabilities & Shareholder's Equity</strong></h6>
            <div className="table-responsive">
                <table className="table table-bordered m-0 most_tables">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Current Liabilities</th>
                            <th scope="col">Q1 2022</th>
                            <th scope="col">Q4 2021</th>
                            <th scope="col">Q3 2021</th>
                            <th scope="col">Q2 2021</th>
                            <th scope="col">Q1 2021</th>
                        </tr>
                    </thead>
                    <tbody className="border-top-0">
                        <tr>
                            <td>AccountsPayable</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td>CurrentLongTermDebt</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td>OtherCurrentLiabilities</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td>TotalCurrentLiabilities</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td>Current Assets Total</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                    </tbody>
                    <tbody className="border-top-0">
                        <tr>
                            <td className="p-3"></td>
                        </tr>
                    </tbody>
                    <thead className="table-light border-top-0">
                        <tr>
                            <th scope="col">Non-Current Liabilities</th>
                            <th scope="col">Q1 2022</th>
                            <th scope="col">Q4 2021</th>
                            <th scope="col">Q3 2021</th>
                            <th scope="col">Q2 2021</th>
                            <th scope="col">Q1 2021</th>
                        </tr>
                    </thead>
                    <tbody className="border-top-0">
                        <tr>
                            <td>longTermDebt</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td>Non-Current</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td>Non-Current Liabilities Total</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td className="p-3"></td>
                        </tr>
                        <tr>
                            <td>TotalAssets</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td className="p-3"></td>
                        </tr>
                        <tr>
                            <td>MinorityInterest</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td>ShareholderEquity</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td className="p-3"></td>
                        </tr>
                        <tr>
                            <td>LIABILITIES & SHAREHOLDER'S EQUITY TOTAL </td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td className="p-3"></td>
                        </tr>
                        <tr>
                            <td>Common Shares Outstanding</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td>FiscalDate</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td>ReportDate</td>
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

export default BalanceSheet