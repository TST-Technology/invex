import React from 'react';
import CustomMuiDataTable from '../../Common/CustomDataTable/CustomMuiDataTable';

import tableData from './tableData'

const RightSideTable = (props) => {

    const columns = [
        {
            name: "id",
            label: "No.",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ticker",
            label: "Ticker",
            options: {
                filter: true,
                sort: true,
                setCellProps: () => ({
                    style: {
                      whiteSpace: "nowrap",
                      fontWeight:"bold",
                    }
                }),
            }
        },
        {
            name: "marketCap",
            label: "Market Cap",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "PE",
            label: "P/E",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "fwdPE",
            label: "FWD P/E",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "PEG",
            label: "PEG",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "PS",
            label: "P/S",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "PB",
            label: "P/B",
            options: {
                filter: true,
                sort: true,
            }
        },
    ];


    return (
        <div className={"righttablecontent "+(props.showFilterSection?"show-content":"")}>
            <div className="table_search d-flex align-items-center justify-content-between p-3">
            <button className="btn btn-light font-bd filter-hide" style={{zIndex:990}} onClick={()=>props.setshowFilterSection(!props.showFilterSection)} >
                <i className="bi bi-chevron-double-left"></i>
            </button>
                <div className="ms-auto">
                    <button className="btn btn-outline-dark me-2">Save Screener</button>
                    <button className="btn btn-outline-dark">Export</button>
                </div>
            </div>
            <div className="filter_table">
                <CustomMuiDataTable columns={columns} tableData={tableData} />
                {/* <CustomDataTable tableData={tableData} /> */}
                {/* <table className="table table-bordered m-0" id="filter_table">
                    <thead className="table-light">
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
                    <tbody className="border-top-0">
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
