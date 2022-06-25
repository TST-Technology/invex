import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import InvexRoutes from "../../../InvexRoutes";
import { getSearchdata } from "../../api/search";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();
  const path = useLocation();
  const [navbarSearch, setNavbarSearch] = useState(null);
  const [SearchResult, setSearchResult] = useState(null);

  const handleSearch = async (val) => {
    try {
      if (val) {
        var data = await getSearchdata(val);
        if (data && data?.dataLength > 0 && data?.status === 200) {
          setSearchResult(data);
        }
      }
    } catch (err) {
      console.log("err", err);
      setSearchResult(null);
    }
  };
  const handleClick = (url) => {
    if (url) {
      navigate(url);
      setSearchResult(null);
    }
  };

  return (
    <>
      <nav className='laptopNav fixed-top'>
        <div className='upperNavbar'>
          <div className='container d-flex align-items-center'>
            <Link to={InvexRoutes.Home.path}>
              <img
                height='54px'
                src={require('../Images/invex-w-logo.png').default}
                alt=''
              />
            </Link>
            <Search
              navbarSearch={navbarSearch}
              handleClick={handleClick}
              handleSearch={handleSearch}
              SearchResult={SearchResult}
            />
            <Link to={InvexRoutes.LogIn.path}>
              <button className='login-btn me-3'>Login</button>
            </Link>
            <Link to={InvexRoutes.SignUp.path}>
              <button className='signup-btn'>Signup</button>
            </Link>
          </div>
        </div>
        <div className='mainNavbar container'>
          <ul className='d-flex my-0'>
            <li>
              <Link
                to={InvexRoutes.Home.path}
                className={
                  path.pathname === InvexRoutes.Home.path ? 'active' : ''
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={InvexRoutes.Market.path}
                className={
                  path.pathname === InvexRoutes.Market.path ? 'active' : ''
                }
              >
                Market
              </Link>
            </li>
            <li>
              <Link
                to={InvexRoutes.Sectors.path}
                className={
                  path.pathname === InvexRoutes.Sectors.path ? 'active' : ''
                }
              >
                Sectors
              </Link>
            </li>
            <li>
              <Link
                to={InvexRoutes.Screener.path}
                className={
                  path.pathname === InvexRoutes.Screener.path ? 'active' : ''
                }
              >
                Screener
              </Link>
            </li>
            <li>
              <Link
                to={InvexRoutes.News.path}
                className={
                  path.pathname === InvexRoutes.News.path ? 'active' : ''
                }
              >
                News
              </Link>
            </li>
            <li>
              <Link
                to={InvexRoutes.Options.path}
                className={
                  path.pathname === InvexRoutes.Options.path ? 'active' : ''
                }
              >
                Options
              </Link>
            </li>
            <li>
              <Link
                to={InvexRoutes.EcomData.path}
                className={
                  path.pathname === InvexRoutes.EcomData.path ? 'active' : ''
                }
              >
                Macro Economics
              </Link>
            </li>
            <li>
              <Link
                to={InvexRoutes.Resources.path}
                className={
                  path.pathname === InvexRoutes.Resources.path ? 'active' : ''
                }
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                to={InvexRoutes.Dashboard.path}
                className={
                  path.pathname === InvexRoutes.Dashboard.path ? 'active' : ''
                }
              >
                Dashboard
              </Link>
            </li>
          </ul>
          <button className='newUser ms-auto'>
            First time here?
            <Link
              style={{ color: 'white', textDecoration: 'none' }}
              to={InvexRoutes.SignUp.path}
            >
              <span className='fw-bold'>Click Here</span>
            </Link>
          </button>
        </div>
      </nav>

      <div
        className='offcanvas offcanvas-start phoneNav'
        tabIndex='-1'
        id='offcanvasExample'
        aria-labelledby='offcanvasExampleLabel'
      >
        <div className='offcanvas-header'>
          <h5 className='offcanvas-title' id='offcanvasExampleLabel'>
            <img
              height='54px'
              src={require('../Images/invex-w-logo.png').default}
              alt='Invex Logo'
            />
          </h5>
          <button
            type='button'
            className=''
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              fill='#fffff'
              className='bi bi-x-circle'
              viewBox='0 0 16 16'
            >
              <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
              <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
            </svg>
          </button>
        </div>
        <div className='offcanvas-body'>
          <ul>
            <li>
              <Link
                to={InvexRoutes.Home.path}
                className={
                  path.pathname === InvexRoutes.Home.path ? 'active' : ''
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={InvexRoutes.Market.path}
                className={
                  path.pathname === InvexRoutes.Market.path ? 'active' : ''
                }
              >
                Market
              </Link>
            </li>
            <li>
              <Link
                to={InvexRoutes.Sectors.path}
                className={
                  path.pathname === InvexRoutes.Sectors.path ? 'active' : ''
                }
              >
                Sectors
              </Link>
            </li>
            <li>
              <Link
                to={InvexRoutes.Screener.path}
                className={
                  path.pathname === InvexRoutes.Screener.path ? 'active' : ''
                }
              >
                Screener
              </Link>
            </li>
            <li>
              <Link
                to={InvexRoutes.News.path}
                className={
                  path.pathname === InvexRoutes.News.path ? 'active' : ''
                }
              >
                News
              </Link>
            </li>
            <li>
              <Link
                to={InvexRoutes.Options.path}
                className={
                  path.pathname === InvexRoutes.Options.path ? 'active' : ''
                }
              >
                Options
              </Link>
            </li>
            <li>
              <Link
                to={InvexRoutes.EcomData.path}
                className={
                  path.pathname === InvexRoutes.EcomData.path ? 'active' : ''
                }
              >
                Economic Data
              </Link>
            </li>
            <li>
              <Link
                to={InvexRoutes.Resources.path}
                className={
                  path.pathname === InvexRoutes.Resources.path ? 'active' : ''
                }
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                to={InvexRoutes.Dashboard.path}
                className={
                  path.pathname === InvexRoutes.Dashboard.path ? 'active' : ''
                }
              >
                Dashboard
              </Link>
            </li>
          </ul>
          <button className='newUser ms-auto'>
            First time here?
            <Link
              style={{ color: 'white', textDecoration: 'none' }}
              to={InvexRoutes.SignUp.path}
            >
              <span className='fw-bold'>Click Here</span>
            </Link>
          </button>
        </div>
      </div>

      <nav className='navbar navbar-expand-lg phoneNav'>
        <div className='container-fluid'>
          <div className='d-inline-flex'>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='offcanvas'
              href='#offcanvasExample'
              aria-controls='offcanvasExample'
            >
              <span className='iconify text-light' data-icon='ph:list'></span>
            </button>
            <div className='d-inline-flex navbar-brand align-items-center'>
              <img
                height='54px'
                src={require('../Images/invex-w-logo.png').default}
                alt=''
              />
            </div>
          </div>
          <img
            src={require('../Images/search.png').default}
            alt='search-icon'
            className='img-fluid ms-auto'
          />
          <form
            className='form-group search-blk d-none'
            role='search'
            method='get'
            id='searchform'
            action=''
          >
            <div className='input-group'>
              <input
                type='text'
                value={navbarSearch}
                onChange={(e) => setNavbarSearch(e.target.value)}
                name='s'
                className='form-control'
                placeholder='Search for symbol, company and news'
                id='example-search-input'
                autoComplete='off'
              />
              <input
                type='submit'
                value='Search'
                id='search-submit'
                style={{ display: 'none' }}
              />
              <span className='input-group-append'>
                <label htmlFor='search-submit'>
                  <img
                    src={require('../Images/search.png').default}
                    alt='search-icon'
                    className='img-fluid'
                    height='24'
                    width='24'
                  />
                </label>
              </span>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
