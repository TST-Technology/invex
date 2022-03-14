import React, { useEffect, useState } from 'react'
import {getIexVolume, getIexPercent, getMarketGainers, getMostActiveStacks, getMarketLoosers } from '../api/market'
import AllTables from './AllTables/AllTables'
import MarketNews from './MarketNews/MarketNews'
import MyWhishList from './MyWhishList/MyWhishList'
import TopReactCarousel from './TopCarousal/TopReactCarousel'

const Market = () => {
    const [ Loading , setLoading] = useState({
        active:false,
        gainers:false,
        loosers:false,
        iexVolume:false,
        iexPercent:false,
    });
    const [ MostActive , setMostActive] = useState(null);
    const [ MarketGainers , setMarketGainers] = useState(null)
    const [ MarketLoosers , setMarketLoosers] = useState(null)
    const [ IEXVolume , setIEXVolume] = useState(null)
    const [ IEXPercent , setIEXPercent] = useState(null)
    
    useEffect(()=>{
        (async ()=>{
            setLoading({
                active:true,
                gainers:true,
                loosers:true,
                iexVolume:true,
                iexPercent:true,
            })
                const mostactive = await getMostActiveStacks();
                if(mostactive && mostactive?.status == 200 && mostactive?.dataLength > 0) {
                    setMostActive(mostactive.data)
                    setLoading({
                        ...Loading,
                        active:false,
                    })
                }else{
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
                }else{
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
                }else{
                    setLoading({
                        ...Loading,
                        loosers:false
                    })
                }

                const iexvolume = await getIexVolume()
                if(iexvolume && iexvolume?.status == 200 && iexvolume?.dataLength > 0) {
                    setIEXVolume(iexvolume.data)
                    setLoading({
                        ...Loading,
                        iexVolume:false
                    })
                }else{
                    setLoading({
                        ...Loading,
                        iexVolume:false
                    })
                }

                const iexpercent = await getIexPercent()
                if(iexpercent && iexpercent?.status == 200 && iexpercent?.dataLength > 0) {
                    setIEXPercent(iexpercent.data)
                    setLoading({
                        ...Loading,
                        iexPercent:false
                    })
                }else{
                    setLoading({
                        ...Loading,
                        iexVolume:false
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
                            IEXVolume={IEXVolume}
                            IEXPercent={IEXPercent}
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
