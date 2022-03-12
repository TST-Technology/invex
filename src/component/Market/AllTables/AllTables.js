import React, { useEffect } from 'react'
import CustomMuiDataTable from '../../Common/CustomDataTable/CustomMuiDataTable'
import { topTableColumns, topTableData, belowTableColumns, belowTableData } from './allTableData'

const AllTables = ({MostActive, MarketGainers, MarketLoosers, Loading}) => {
    const topTablesDetails = [
        // {
        //     title:"Most Under Valued Stacks",
        // },
        // {
        //     title:"Most Over Valued Stacks",
        // }
    ]

    // const bottomTableDetails = [
    //     // {
    //     //     title:"Most Active Stacks",
    //     // },
    //     {
    //         title:"Market Gainers",
    //     },
    //     {
    //         title:"Market Loosers",
    //     },
    // ]
    return (
        <div className="col-lg-8">
            {/* <div className="mb-5">
                {
                    topTablesDetails.map((data,index)=>{
                        return (
                            <div style={{marginBottom:"21px"}} >
                                <div className="d-flex align-items-center justify-content-between border p-3 border-bottom-0">
                                    <h6 className="m-0"><strong>{data.title}</strong></h6>
                                    <a href="javascript:void(0)" className="text-dark viewmore">View More</a>
                                </div>
                                <div className="table-responsive">
                                    <CustomMuiDataTable columns={topTableColumns} tableData={topTableData} />
                                </div>
                            </div>
                        )
                    })
                }
            </div> */}
            <div className="mb-5">
                <div style={{marginBottom:"21px"}} >
                    <div className="d-flex align-items-center justify-content-between border p-3 border-bottom-0">
                        <h6 className="m-0"><strong>Most Active Stacks</strong></h6>
                        <a href="javascript:void(0)" className="text-dark viewmore">View More</a>
                    </div>
                    <div className="table-responsive">
                        <CustomMuiDataTable columns={belowTableColumns} loading={Loading.active} tableData={MostActive} />
                    </div>
                </div>
            </div>
            <div className="mb-5">
                <div style={{marginBottom:"21px"}} >
                    <div className="d-flex align-items-center justify-content-between border p-3 border-bottom-0">
                        <h6 className="m-0"><strong>Market Gainers</strong></h6>
                        <a href="javascript:void(0)" className="text-dark viewmore">View More</a>
                    </div>
                    <div className="table-responsive">
                        <CustomMuiDataTable columns={belowTableColumns} loading={Loading.gainers} tableData={MarketGainers} />
                    </div>
                </div>
            </div>
            <div className="mb-5">
                <div style={{marginBottom:"21px"}} >
                    <div className="d-flex align-items-center justify-content-between border p-3 border-bottom-0">
                        <h6 className="m-0"><strong>Market Loosers</strong></h6>
                        <a href="javascript:void(0)" className="text-dark viewmore">View More</a>
                    </div>
                    <div className="table-responsive">
                        <CustomMuiDataTable columns={belowTableColumns} loading={Loading.loosers} tableData={MarketLoosers} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllTables
