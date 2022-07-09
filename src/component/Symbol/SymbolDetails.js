import React, { useState } from 'react';
import FinancialStatistics from '../FinancialStatistics';
import Financials from '../Financials';
import CompanyDetailNew from './CompanyDetails/CompanyDetailNew';
import Navbar from '../Common/Navbar/NewNavbar';
import Marquee from '../Common/Navbar/Marquee';
import { TYPE } from './Constants';
import Synopsis from './Synopsis/Synopsis';

const SymbolDetails = () => {
  const [activeTab, setActiveTab] = useState(TYPE.financialStatistics.value);

  return (
    <>
      <Navbar />

      <Marquee />
      {/* mainpage content start */}
      <div className='main'>
        <section className='company_details symfinstatcs'>
          <div className='container'>
            <div className='row'>
              <CompanyDetailNew />
              <div className='col-lg-12'>
                <ul
                  className='nav nav-tabs page_main_tab'
                  id='myTab'
                  role='tablist'
                >
                  {Object.keys(TYPE).map((key, index) => {
                    return (
                      <li className='nav-item' role='presentation'>
                        <button
                          onClick={() => setActiveTab(TYPE[key].value)}
                          className={`nav-link ${
                            activeTab === TYPE[key].value ? 'active' : ''
                          }`}
                          type='button'
                        >
                          {TYPE[key].label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <div className='tab-content' id='myTabContent'>
                  <div className='tab-pane fade show active'>
                    {activeTab === TYPE.synopsis.value && <Synopsis />}

                    {activeTab === TYPE.financialStatistics.value && (
                      <FinancialStatistics />
                    )}

                    {activeTab === TYPE.financialStatements.value && (
                      <Financials />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* mainpage content end */}
    </>
  );
};

export default SymbolDetails;
