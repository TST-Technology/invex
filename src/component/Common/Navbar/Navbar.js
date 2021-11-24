import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const path = useLocation();
    const [navbarSearch, setNavbarSearch] = useState("");

    return (
        <>
            <nav className="laptopNav fixed-top">
                <div className="upperNavbar">
                    <div className="container d-flex align-items-center">
                        <a href="/"><img src={require("../Images/invex-w-logo.png").default} alt="" /></a>
                        <form className="form-group search-blk mx-auto" role="search" method="get" id="searchform" action=""> 
                            <div className="input-group">
                                <input type="text" value={navbarSearch} onChange={(e)=>setNavbarSearch(e.target.value)} name="s" className="form-control" placeholder="Search for symbol, company and news" id="example-search-input" autoComplete="off" /> 
                                <input type="submit" value="Search" id="search-submit" style={{"display": "none"}} /> 
                                <span className="input-group-append d-flex align-items-center">
                                    <a href="/#"><p><img src={require("../Images/⌘K.png").default} alt=""/></p></a>
                                    <label htmlFor="search-submit"><img src={require("../Images/search.png").default} alt="search-icon" className="img-fluid" height="16" width="16" /></label>
                                </span>
                            </div>
                        </form>
                        <Link to="/logIn"><button className="login-btn me-3">Login</button></Link>
                        <button className="signup-btn">Signup</button>
                    </div>
                </div>
                <div className="mainNavbar container">
                    <ul className="d-flex my-0">
                        <li><Link to="/" className={path.pathname==="/"?"active":""}>Home</Link></li>
                        <li><Link to="/market" className={path.pathname==="/market"?"active":""} >Market</Link></li>
                        <li><Link to="/sectors" className={path.pathname==="/sectors"?"active":""}>Sectors</Link></li>
                        <li><Link to="/screener" className={path.pathname==="/screener"?"active":""}>Screener</Link></li>
                        <li><Link to="/news" className={path.pathname==="/news"?"active":""}>News</Link></li>
                        <li><Link to="/options" className={path.pathname==="/options"?"active":""}>Options</Link></li>
                        <li><Link to="/economic-data" className={path.pathname==="/economic-data"?"active":""}>Economic Data</Link></li>
                        <li><Link to="/resources" className={path.pathname==="/resources"?"active":""}>Resources</Link></li>
                        <li><Link to="/dashboard" className={path.pathname==="/dashboard"?"active":""}>Dashboard</Link></li>
                    </ul>
                    <button className="newUser ms-auto">First time here? <span className="fw-bold">Click Here</span></button>
                </div>
            </nav>
        
            <div className="offcanvas offcanvas-start phoneNav" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel"><img src={require("../Images/invex-w-logo.png").default} alt="Invex Logo" /></h5>
                <button type="button" className="" data-bs-dismiss="offcanvas" aria-label="Close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fffff" className="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                </button>
                </div>
                <div className="offcanvas-body">
                    <ul>
                        <li><Link to="/" className={path.pathname==="/"?"active":""}>Home</Link></li>
                        <li><Link to="/market" className={path.pathname==="/market"?"active":""} >Market</Link></li>
                        <li><Link to="/sectors" className={path.pathname==="/sectors"?"active":""}>Sectors</Link></li>
                        <li><Link to="/screener" className={path.pathname==="/screener"?"active":""}>Screener</Link></li>
                        <li><Link to="/news" className={path.pathname==="/news"?"active":""}>News</Link></li>
                        <li><Link to="/options" className={path.pathname==="/options"?"active":""}>Options</Link></li>
                        <li><Link to="/economic-data" className={path.pathname==="/economic-data"?"active":""}>Economic Data</Link></li>
                        <li><Link to="/resources" className={path.pathname==="/resources"?"active":""}>Resources</Link></li>
                        <li><Link to="/dashboard" className={path.pathname==="/dashboard"?"active":""}>Dashboard</Link></li>
                    </ul>
                    <button className="newUser ms-auto">First time here? <span className="fw-bold">Click Here</span></button>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg phoneNav">
                <div className="container-fluid">
                    <div className="d-inline-flex">
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample">
                            <span className="iconify text-light" data-icon="ph:list"></span>
                        </button>
                        <div className="d-inline-flex navbar-brand align-items-center">
                            <img src={require("../Images/invex-w-logo.png").default} alt="" />
                        </div>
                    </div>
                    <img src={require("../Images/search.png").default} alt="search-icon" className="img-fluid ms-auto" />
                    <form className="form-group search-blk d-none" role="search" method="get" id="searchform" action=""> 
                        <div className="input-group">
                            <input type="text" value={navbarSearch} onChange={(e)=>setNavbarSearch(e.target.value)} name="s" className="form-control" placeholder="Search for symbol, company and news" id="example-search-input" autoComplete="off" /> 
                            <input type="submit" value="Search" id="search-submit" style={{"display": "none"}} /> 
                            <span className="input-group-append">
                                <label htmlFor="search-submit"><img src={require("../Images/search.png").default} alt="search-icon" className="img-fluid" height="24" width="24" /></label>
                            </span>
                        </div>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar
