import React, { useEffect } from 'react'
import CustomMuiDataTable from '../../Common/CustomDataTable/CustomMuiDataTable'
import { topTableColumns, topTableData, belowTableColumns, belowTableData } from './allTableData'

const AllTables = ({IEXVolume, IEXPercent, MostActive, MarketGainers, MarketLoosers, Loading}) => {
    return (
        <div className="col-lg-8">
            <div className="mb-5">
                <div style={{marginBottom:"21px"}} >
                    <div className="d-flex align-items-center justify-content-between border p-3 border-bottom-0">
                        <h6 className="m-0"><strong>IEX Volume</strong></h6>
                        <a href="javascript:void(0)" className="text-dark viewmore">View More</a>
                    </div>
                    <div className="table-responsive">
                        {IEXVolume && <CustomMuiDataTable loading={Loading.active} columns={topTableColumns} tableData={IEXVolume} />}
                    </div>
                </div>
            </div>
            <div className="mb-5">
                <div style={{marginBottom:"21px"}} >
                    <div className="d-flex align-items-center justify-content-between border p-3 border-bottom-0">
                        <h6 className="m-0"><strong>IEX Percent</strong></h6>
                        <a href="javascript:void(0)" className="text-dark viewmore">View More</a>
                    </div>
                    <div className="table-responsive">
                        {IEXPercent && <CustomMuiDataTable loading={Loading.active} columns={topTableColumns} tableData={IEXPercent} />}
                    </div>
                </div>
            </div>
            <div className="mb-5">
                <div style={{marginBottom:"21px"}} >
                    <div className="d-flex align-items-center justify-content-between border p-3 border-bottom-0">
                        <h6 className="m-0"><strong>Most Active Stacks</strong></h6>
                        <a href="javascript:void(0)" className="text-dark viewmore">View More</a>
                    </div>
                    <div className="table-responsive">
                        {MostActive&&<CustomMuiDataTable columns={belowTableColumns} loading={Loading.active} tableData={MostActive} />}
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
                        {MarketGainers && <CustomMuiDataTable columns={belowTableColumns} loading={Loading.gainers} tableData={MarketGainers} />}
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
                        {MarketLoosers && <CustomMuiDataTable columns={belowTableColumns} loading={Loading.loosers} tableData={MarketLoosers} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllTables
