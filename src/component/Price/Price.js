import React, { useState } from 'react';
import "./Price.css"
import pricePlaneData from './PricePlanData';
import PricePlaneComp from './PricePlaneComp';

const Price = () => {

    const [offerTypeYearly, setOfferTypeYearly] = useState(true);

    return (
        <div className="main">
            <section className="ism_non_manfuc">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-5">
                            <div className="price_hero">
                                <img src={require("../Common/Images/price-head.png").default} className="img-fluid" alt="price-hero" />
                                <h1>Start your journy With US</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pricing py-5 mt-5">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="nav justify-content-center price_tab" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button 
                                    className={"btn "+(offerTypeYearly?"active":"")} 
                                    id="home-tab" 
                                    data-bs-toggle="tab" 
                                    data-bs-target="#home" 
                                    type="button" 
                                    role="tab" 
                                    aria-controls="home"
                                    onClick={() => setOfferTypeYearly(true)}
                                >
                                    Bill Yearly <span className="badge badge-primary">Save 25%</span>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button 
                                    className={"btn "+(offerTypeYearly?"":"active")} 
                                    id="profile-tab" 
                                    data-bs-toggle="tab" 
                                    data-bs-target="#profile" 
                                    type="button" 
                                    role="tab" 
                                    aria-controls="profile" 
                                    onClick={() => setOfferTypeYearly(false)}
                                >
                                    Bill Monthly
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                {/* Removed fade from above className  */}
                                <div className="row mt-5">
                                    {
                                        (offerTypeYearly? pricePlaneData.yearly: pricePlaneData.monthly)
                                            .map(data => <PricePlaneComp data={data} />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Price
