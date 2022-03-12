import React from 'react';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReactOwlCarousel from 'react-owl-carousel';
import TopChart from './TopChart';

const TopReactCarousel = () => {

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

    const options = {
        loop:true, 
        margin:20,
        dots:false, 
        nav:true,
        responsiveClass: true,
        autoplay: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1.5,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 4,
            },
            1200: {
                items: 5,
            }
        },
    };

    return (
        <section className="top_carosuel_sec">
            <div className="container">
                <ReactOwlCarousel className='top_market_carousel owl-carousel owl-theme'  {...options}   >
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
                </ReactOwlCarousel>
            </div>
        </section>
    )
}

export default TopReactCarousel
