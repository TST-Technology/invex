import React, { useState } from 'react'
import SectorsContent from './content'
import SectorsList from './SectorsLits'

const Sectors = () => {

    const [sectorId ,  setSectorId] = useState(null);
    const [industryId ,  setIndustryId] = useState(null);
    const [isLoading ,  setisLoading] = useState(false);
    console.log('industryId',industryId);
    return (
        <div className="main">
            <section className="sectors_sec">
                <div className="container">
                    <div className="row">
                        <SectorsList setSectorId={setSectorId} setIndustryId={setIndustryId}/>
                        <SectorsContent sectorId={sectorId} industryId={industryId} isLoading={isLoading} setisLoading={setisLoading}/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sectors