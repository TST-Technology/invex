import { CircularProgress } from '@material-ui/core';
import React, { useState } from 'react'
import SectorsContent from './content'
import SectorsList from './SectorsLits'

const Sectors = () => {

    const [sectorId ,  setSectorId] = useState(null);
    const [industryId ,  setIndustryId] = useState(null);
    const [isLoading ,  setisLoading] = useState(false);


    return (
        <div className="main">
            <section className="sectors_sec">
                <div className="container">
                    <div className="row">
                        <SectorsList setSectorId={setSectorId} setIndustryId={setIndustryId} setisLoading={setisLoading}/>
                        {isLoading && (
                        <div className='col-sm-8' style={{
                                height: 500, textAlign: 'center', display: 'flex',
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                                <CircularProgress />
                            </div>
                        )}
                        {!isLoading && <SectorsContent sectorId={sectorId} industryId={industryId} setisLoading={setisLoading}/>}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sectors