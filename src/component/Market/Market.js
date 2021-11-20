import React from 'react'
import AllTables from './AllTables/AllTables'
import MarketNews from './MarketNews/MarketNews'
import MyWhishList from './MyWhishList/MyWhishList'
import TopReactCarousel from './TopCarousal/TopReactCarousel'

const Market = () => {
    return (
        <div class="main">
            <TopReactCarousel />
            <section class="main_market_content">
                <div class="container">
                    <div class="row">
                        <AllTables />
                        <div class="col-lg-4">
                            <MyWhishList />
                            <MarketNews />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Market
