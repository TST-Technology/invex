import React from 'react'
import CustomMuiDataTable from '../../Common/CustomDataTable/CustomMuiDataTable'
import { topTableColumns, topTableData, belowTableColumns, belowTableData } from './allTableData'

const AllTables = () => {

    const topTablesDetails = [
        {
            title:"Most Under Valued Stacks",
        },
        {
            title:"Most Over Valued Stacks",
        }
    ]

    const bottomTableDetails = [
        {
            title:"Most Active Stacks",
        },
        {
            title:"Market Gainers",
        },
        {
            title:"Market Loosers",
        },
    ]

    return (
        <div class="col-lg-8">
            <div class="mb-5">
                {
                    topTablesDetails.map((data,index)=>{
                        return (
                            <div style={{marginBottom:"21px"}} >
                                <div class="d-flex align-items-center justify-content-between border p-3 border-bottom-0">
                                    <h6 class="m-0"><strong>{data.title}</strong></h6>
                                    <a href="javascript:void(0)" class="text-dark viewmore">View More</a>
                                </div>
                                <div class="table-responsive">
                                    <CustomMuiDataTable columns={topTableColumns} tableData={topTableData} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div class="mb-5">
                {
                    
                    bottomTableDetails.map((data,index)=>{
                        return (
                            <div style={{marginBottom:"21px"}} >
                                <div class="d-flex align-items-center justify-content-between border p-3 border-bottom-0">
                                    <h6 class="m-0"><strong>{data.title}</strong></h6>
                                    <a href="javascript:void(0)" class="text-dark viewmore">View More</a>
                                </div>
                                <div class="table-responsive">
                                    <CustomMuiDataTable columns={belowTableColumns} tableData={belowTableData} />
                                </div>
                            </div>
                        )
                    })
                
                }
            </div>
        </div>
    )
}

export default AllTables
