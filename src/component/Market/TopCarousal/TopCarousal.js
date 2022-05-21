import React,{useEffect} from 'react'

import scriptCode from "./script";
import TopChart from './TopChart';

const TopCarousal = () => {

    const carousalData = [
        {
            company:"S&P 500",
            price:4590.41,
            change:{
                dir:"up",
                value:19.40,
                per:0.78,
            }
        },
        {
            company:"Dow 30",
            price:35730.48,
            change:{
                dir:"up",
                value:239.79,
                per:0.68,
            }
        },
        {
            company:"Nasdaq",
            price:4590.41,
            change:{
                dir:"up",
                value:19.40,
                per:0.78,
            }
        },
        {
            company:"Crude Oil",
            price:4590.41,
            change:{
                dir:"up",
                value:19.40,
                per:0.78,
            }
        },
        {
            company:"Russell 2000",
            price:4590.41,
            change:{
                dir:"up",
                value:19.40,
                per:0.78,
            }
        },
        {
            company:"Nasdaq",
            price:4590.41,
            change:{
                dir:"up",
                value:19.40,
                per:0.78,
            }
        },
        {
            company:"Russell 2000",
            price:4590.41,
            change:{
                dir:"up",
                value:19.40,
                per:0.78,
            }
        },
        {
            company:"Nasdaq",
            price:4590.41,
            change:{
                dir:"up",
                value:19.40,
                per:0.78,
            }
        },
        {
            company:"Russell 2000",
            price:4590.41,
            change:{
                dir:"up",
                value:19.40,
                per:0.78,
            }
        },
        {
            company:"Nasdaq",
            price:4590.41,
            change:{
                dir:"up",
                value:19.40,
                per:0.78,
            }
        },
    ]

    useEffect(() => {
        const script = document.createElement("script");
        script.src = scriptCode;
        script.async = true;
        document.body.appendChild(script);
        
    });

    return (
        <section className="top_carosuel_sec">
            <div className="container">
                <div className="top_market_carousel owl-carousel owl-theme" >
                    {
                        carousalData.map((data,index)=>{
                            const up = (data.change.dir==="up");
                            return(
                                <div className="item">
                                    <div className="marketviewblk">
                                        <div className="chart-text">
                                            <h5 className="market_company">{data.company}</h5>
                                            <p className="market_price">₹{data.price}</p>
                                            <p className={"market_profit "+(up?"up":"down")}>{(up?"+":"-")+data.change.value}({(up?"+":"-")+data.change.per})</p>
                                        </div>
                                        <div className="chart-img ms-auto">
                                            <TopChart />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* <div className="item">
                        <div className="marketviewblk">
                            <div className="chart-text">
                                <h5 className="market_company">Dow 30 </h5>
                                <p className="market_price">₹35,730.48</p>
                                <p className="market_profit up">+239.79(+0.68%)</p>
                            </div>
                            <div className="chart-img ms-auto">
                                <img src="assets/images/top-graph.png" alt="image" />
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="marketviewblk">
                            <div className="chart-text">
                                <h5 className="market_company">Nasdaq</h5>
                                <p className="market_price">₹35,730.48</p>
                                <p className="market_profit up">+239.79(+0.68%)</p>
                            </div>
                            <div className="chart-img ms-auto">
                                <img src="assets/images/top-graph.png" alt="image" />
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="marketviewblk">
                            <div className="chart-text">
                                <h5 className="market_company">Crude Oil</h5>
                                <p className="market_price">₹35,730.48</p>
                                <p className="market_profit down">-239.79(+0.68%)</p>
                            </div>
                            <div className="chart-img ms-auto">
                                <img src="assets/images/top-graph-2.png" alt="image" />
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="marketviewblk">
                            <div className="chart-text">
                                <h5 className="market_company">Russell 2000</h5>
                                <p className="market_price">₹35,730.48</p>
                                <p className="market_profit up">+239.79(+0.68%)</p>
                            </div>
                            <div className="chart-img ms-auto">
                                <img src="assets/images/top-graph.png" alt="image" />
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="marketviewblk">
                            <div className="chart-text">
                                <h5 className="market_company">Nasdaq</h5>
                                <p className="market_price">₹35,730.48</p>
                                <p className="market_profit up">+239.79(+0.68%)</p>
                            </div>
                            <div className="chart-img ms-auto">
                                <img src="assets/images/top-graph.png" alt="image">
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="marketviewblk">
                            <div className="chart-text">
                                <h5 className="market_company">Russell 2000</h5>
                                <p className="market_price">₹35,730.48</p>
                                <p className="market_profit up">+239.79(+0.68%)</p>
                            </div>
                            <div className="chart-img ms-auto">
                                <img src="assets/images/top-graph.png" alt="image">
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="marketviewblk">
                            <div className="chart-text">
                                <h5 className="market_company">Nasdaq</h5>
                                <p className="market_price">₹35,730.48</p>
                                <p className="market_profit up">+239.79(+0.68%)</p>
                            </div>
                            <div className="chart-img ms-auto">
                                <img src="assets/images/top-graph.png" alt="image">
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="marketviewblk">
                            <div className="chart-text">
                                <h5 className="market_company">Russell 2000</h5>
                                <p className="market_price">₹35,730.48</p>
                                <p className="market_profit up">+239.79(+0.68%)</p>
                            </div>
                            <div className="chart-img ms-auto">
                                <img src="assets/images/top-graph.png" alt="image">
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="marketviewblk">
                            <div className="chart-text">
                                <h5 className="market_company">Nasdaq</h5>
                                <p className="market_price">₹35,730.48</p>
                                <p className="market_profit up">+239.79(+0.68%)</p>
                            </div>
                            <div className="chart-img ms-auto">
                                <img src="assets/images/top-graph.png" alt="image">
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default TopCarousal
