import React, { useEffect } from 'react';
import $ from "jquery";
import DataTable from "datatables.net";

import tableData from './tableData'

const RightSideTable = () => {

    return (
        <div class="righttablecontent">
            <div class="table_search d-flex align-items-center justify-content-between p-3">
                <a href="javascript:void(0);" class="btn btn-light font-bd filter-hide"><i class="bi bi-chevron-double-left"></i></a>
                <div class="ms-auto">
                    <a href="#" class="btn btn-outline-dark me-2">Save Screener</a>
                    <a href="#" class="btn btn-outline-dark">Export</a>
                </div>
            </div>
            <div class="filter_table">
                <table class="table table-bordered m-0" id="filter_table">
                    <thead class="table-light">
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Ticker</th>
                            <th scope="col">Market Cap</th>
                            <th scope="col">P/E</th>
                            <th scope="col">FWD P/E</th>
                            <th scope="col">PEG</th>
                            <th scope="col">P/S</th>
                            <th scope="col">P/B</th>
                        </tr>
                    </thead>
                    <tbody class="border-top-0">
                        {
                            tableData.map((data,index)=>{
                                return (
                                    <tr>
                                        <td>{index+1}.</td>
                                        <td>{data.ticker}</td>
                                        <td>{data.marketCap}</td>
                                        <td>{data.PE}</td>
                                        <td>{data.fwdPE}</td>
                                        <td>{data.PEG}</td>
                                        <td>{data.PS}</td>
                                        <td>{data.PB}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RightSideTable
