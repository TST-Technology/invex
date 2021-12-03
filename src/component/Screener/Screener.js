import React, { useEffect, useState } from 'react'
import FilterModel from './FilterModel/FilterModel'
import LeftSideFilter from './LeftSideFilter/LeftSideFilter'
import RightSideTable from './RightSideTable/RightSideTable'
import SwitchScreener from './SwitchScreener/SwitchScreener'

const Screener = () => {

    const [showFilterSection, setshowFilterSection] = useState(false);

    useEffect(() => {
        console.log(showFilterSection);
    }, [showFilterSection])

    return (
        <>
            <div class="main">
                <section class="filterscreener_section">
                    <div class="container">
                        <div class={"filterscreener_area "+(showFilterSection?"show-mobile-content":"")}> 
                            <a href="javascript:void(0);" class="btn btn-light font-bd filter-hide filterhidemobile"><i class="bi bi-chevron-double-left"></i></a>              
                            <LeftSideFilter showFilterSection={showFilterSection} />
                            <RightSideTable showFilterSection={showFilterSection} setshowFilterSection={setshowFilterSection} />
                        </div>
                    </div>
                </section>
            </div>
            <FilterModel />
            <SwitchScreener />
        </>
    )
}

export default Screener
