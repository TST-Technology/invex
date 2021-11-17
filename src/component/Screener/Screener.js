import React from 'react'
import FilterModel from './FilterModel/FilterModel'
import LeftSideFilter from './LeftSideFilter/LeftSideFilter'
import RightSideTable from './RightSideTable/RightSideTable'
import SwitchScreener from './SwitchScreener/SwitchScreener'

const Screener = () => {
    return (
        <>
            <div class="main">
                <section class="filterscreener_section">
                    <div class="container">
                        <div class="filterscreener_area"> 
                            <a href="javascript:void(0);" class="btn btn-light font-bd filter-hide filterhidemobile"><i class="bi bi-chevron-double-left"></i></a>              
                            <LeftSideFilter />
                            <RightSideTable />
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
