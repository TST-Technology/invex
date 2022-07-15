import React from 'react';
import InvexBWealth from '../Images/invex-b-wealth.png';
import KImg from '../Images/⌘Kb.png';
import SearchBImg from '../Images/search-b.png';
import InvexWLogo from '../Images/invex-w-logo.png';
import SearchImg from '../Images/search.png';

const Navbar = () => {
  return (
    <>
      {/* Navbar Start */}
      <nav className='laptopNav fixed-top light-nav'>
        <div className='upperNavbar'>
          <div className='container d-flex align-items-center'>
            <a href='javascript:void(0);'>
              <img src={InvexBWealth} alt />
            </a>
            {/*div class="input-group mx-auto">
              <input class="form-control" type="search" placeholder="Search for symbol, company and news" id="example-search-input" />
              <span class="input-group-append d-flex align-items-center">
                  <a href=""><p><img src="assets/images/⌘K.png" /></p></a>
                  <a href="#"><img src="assets/images/search.png" class="mx-3" alt="search-icon" height="16" width="16" /></a>
              </span>
          </div*/}
            <form
              className='form-group search-blk me-auto ms-5'
              role='search'
              method='get'
              id='searchform'
              action
            >
              <div className='input-group'>
                <input
                  type='text'
                  // defaultValue
                  name='s'
                  className='form-control'
                  placeholder='Search for symbol'
                  id='example-search-input'
                  autoComplete='off'
                />
                <input
                  type='submit'
                  defaultValue='Search'
                  id='search-submit'
                  style={{ display: 'none' }}
                />
                <span className='input-group-append d-flex align-items-center'>
                  <a href>
                    <p>
                      <img src={KImg} />
                    </p>
                  </a>
                  <label htmlFor='search-submit'>
                    <img
                      src={SearchBImg}
                      alt='search-icon'
                      className='img-fluid'
                      height={16}
                      width={16}
                    />
                  </label>
                </span>
              </div>
            </form>
            <button className='login-btn me-3'>Login</button>
            <button className='signup-btn'>Signup</button>
          </div>
        </div>
        <div className='mainNavbar container'>
          <ul className='d-flex my-0'>
            <li>
              <a href='#!' className='active'>
                Home
              </a>
            </li>
            <li>
              <a href='#!'>Market</a>
            </li>
            <li>
              <a href='#!'>Sectors</a>
            </li>
            <li>
              <a href='#!'>Screener</a>
            </li>
            <li>
              <a href='#!'>News</a>
            </li>
            <li>
              <a href='#!'>Options</a>
            </li>
            <li>
              <a href='#!'>Economic Data</a>
            </li>
            <li>
              <a href='#!'>Resources</a>
            </li>
            <li>
              <a href='#!'>Dashboard</a>
            </li>
          </ul>
          <button className='newUser ms-auto'>
            First time here? <span className='fw-bold'>Click Here</span>
          </button>
        </div>
      </nav>
      <div
        className='offcanvas offcanvas-start phoneNav'
        tabIndex={-1}
        id='offcanvasExample'
        aria-labelledby='offcanvasExampleLabel'
      >
        <div className='offcanvas-header'>
          <h5 className='offcanvas-title' id='offcanvasExampleLabel'>
            <a href='javascript:void(0)'>
              <img src={InvexWLogo} />
            </a>
          </h5>
          <button
            type='button'
            className
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={25}
              height={25}
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
              <a href='#!' className='active'>
                Home
              </a>
            </li>
            <li>
              <a href='#!'>Market</a>
            </li>
            <li>
              <a href='#!'>Sectors</a>
            </li>
            <li>
              <a href='#!'>Screener</a>
            </li>
            <li>
              <a href='#!'>News</a>
            </li>
            <li>
              <a href='#!'>Options</a>
            </li>
            <li>
              <a href='#!'>Economic Data</a>
            </li>
            <li>
              <a href='#!'>Resources</a>
            </li>
            <li>
              <a href='#!'>Dashboard</a>
            </li>
          </ul>
          <button className='newUser ms-auto'>
            First time here? <span className='fw-bold'>Click Here</span>
          </button>
        </div>
      </div>
      <nav className='navbar navbar-expand-lg phoneNav'>
        <div className='container'>
          <div className='d-inline-flex'>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='offcanvas'
              href='#offcanvasExample'
              role='button'
              aria-controls='offcanvasExample'
            >
              <span className='iconify text-light' data-icon='ph:list' />
            </button>
            <div className='d-inline-flex navbar-brand align-items-center'>
              <a href='javascript:void(0);'>
                <img src={InvexWLogo} alt />
              </a>
            </div>
          </div>
          <a href='javascript:void'>
            <img
              src={SearchImg}
              alt='search-icon'
              className='img-fluid ms-auto'
            />
          </a>
          <form
            className='form-group search-blk d-none'
            role='search'
            method='get'
            id='searchform'
            action
          >
            <div className='input-group'>
              <input
                type='text'
                defaultValue
                name='s'
                className='form-control'
                placeholder='Search for symbol, company and news'
                id='example-search-input'
                autoComplete='off'
              />
              <input
                type='submit'
                defaultValue='Search'
                id='search-submit'
                style={{ display: 'none' }}
              />
              <span className='input-group-append'>
                <label htmlFor='search-submit'>
                  <img
                    src={SearchImg}
                    alt='search-icon'
                    className='img-fluid'
                    height={24}
                    width={24}
                  />
                </label>
              </span>
            </div>
          </form>
        </div>
      </nav>
      {/* Navbar End */}
    </>
  );
};

export default Navbar;
