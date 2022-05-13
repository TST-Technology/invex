import React from 'react'
import CompanyData from './CompanyData';
import SearchCompany from './SearchCompany';
import { CircularProgress } from '@material-ui/core'


const CompanyView = ({ Company, KeyStatus, Loading }) => {

    return (

        <div className="row">
            <div class="col-lg-12 mb-4">
                <div className="top_button_panel mt-4 mb-3">
                    <button type="button" className="btn btn-info"> Quote</button>
                    <button type="button" className="btn btn-light"> Market</button>
                    <button type="button" className="btn btn-light"> Tranding Ideas</button>
                </div>
                <div className="card companyviewblk compny_left_detail">
                    <div className="card-body">
                        <div className="description-para  justify-content-between">
                            {Loading && <div style={{
                                height: 100, textAlign: 'center', display: 'flex',
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                                <CircularProgress />
                            </div>}
                            {!Loading &&
                               
                                <div className=" d-flex container alig">
                                    <CompanyData Company={Company} KeyStatus={KeyStatus} />
                                    <SearchCompany />
                                    </div>
                                
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default CompanyView