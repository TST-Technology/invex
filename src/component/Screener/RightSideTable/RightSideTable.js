import React from 'react';
import CustomMuiDataTable from '../../Common/CustomDataTable/CustomMuiDataTable';

import tableData from './tableData'

const RightSideTable = (props) => {


    return (
        <div class={"righttablecontent "+(props.showFilterSection?"show-content":"")}>
            <div class="table_search d-flex align-items-center justify-content-between p-3">
            <button class="btn btn-light font-bd filter-hide" style={{zIndex:990}} onClick={()=>props.setshowFilterSection(!props.showFilterSection)} >
                <i class="bi bi-chevron-double-left"></i>
            </button>
                <div class="ms-auto">
                    <button class="btn btn-outline-dark me-2">Save Screener</button>
                    <button class="btn btn-outline-dark">Export</button>
                </div>
            </div>
            <div class="filter_table">
                <CustomMuiDataTable tableData={tableData} />
                {/* <CustomDataTable tableData={tableData} /> */}
                {/* <table class="table table-bordered m-0" id="filter_table">
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
                </table> */}
            </div>
        </div>
    )
}

export default RightSideTable
