import React from 'react'

const HeroSection = () => {
    return (
        <section className="heroSection">
            <div className="heroBackground py-5 d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <p className="heroText">
                                Lorem ipsum dolor sit amet, consectetur elit.
                            </p>
                            <div className="row">
                                <div className="col-md-7">
                                    <form className="form-group search-blk" role="search" method="get" id="searchform" action=""> 
                                        <div className="input-group">
                                            <input type="text" value="" name="s" className="form-control" placeholder="Search for symbol, company and news" id="example-search-input" autoComplete="off" /> 
                                            <input type="submit" value="Search" id="search-submit" style={{"display": "none"}} /> 
                                            <span className="input-group-append">
                                                <label htmlFor="search-submit"><img src={require("../../Common/Images/search.png").default} alt="search-icon" className="img-fluid" height="24" width="24" /></label>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <button className="hero-btn">Signup Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
