import React, { useEffect, useState } from 'react'
import { getMarketGainers, getMostActiveStacks, getMarketLoosers } from '../api/market'
import AllTables from './AllTables/AllTables'
import MarketNews from './MarketNews/MarketNews'
import MyWhishList from './MyWhishList/MyWhishList'
import TopReactCarousel from './TopCarousal/TopReactCarousel'

const Market = () => {
    const [ Loading , setLoading] = useState({
        active:false,
        gainers:false,
        loosers:false
    });
    const [ MostActive , setMostActive] = useState();
    const [ MarketGainers , setMarketGainers] = useState()
    const [ MarketLoosers , setMarketLoosers] = useState()
    
    useEffect(()=>{
        (async ()=>{
            setLoading({
                active:true,
                gainers:true,
                loosers:true
            })
            const mostactive = await getMostActiveStacks();
            if(mostactive && mostactive?.status == 200 && mostactive?.dataLength > 0) {
                setMostActive(mostactive.data)
                setLoading({
                    ...Loading,
                    active:false,
                })
            }

            const marketgainers = await getMarketGainers()
            if(marketgainers && marketgainers?.status == 200 && marketgainers?.dataLength > 0) {
                setMarketGainers(marketgainers.data)
                setLoading({
                    ...Loading,
                    gainers:false,
                })
            }

            const marketloosers = await getMarketLoosers()
            if(marketloosers && marketloosers?.status == 200 && marketloosers?.dataLength > 0) {
                setMarketLoosers(marketloosers.data)
                setLoading({
                    ...Loading,
                    loosers:false
                })
            }
            
        })()
    },[])

    return (
        <div className="main">
            <TopReactCarousel />
            <section className="main_market_content">
                <div className="container">
                    <div className="row">
                        <AllTables 
                            MostActive={MostActive}
                            MarketGainers={MarketGainers}
                            MarketLoosers={MarketLoosers}
                            Loading={Loading}
                        />
                        <div className="col-lg-4">
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
