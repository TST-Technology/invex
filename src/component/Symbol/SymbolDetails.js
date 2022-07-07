import React, { useState } from 'react';
import FinancialStatistics from '../FinancialStatistics';
import Financials from '../Financials';
import CompanyDetailNew from './CompanyDetails/CompanyDetailNew';
import { TYPE } from './Constants';

const SymbolDetails = () => {
  const [activeTab, setActiveTab] = useState(TYPE.financialStatistics.value);

  return (
    <>
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
                          //   id='synopsis-tab'
                          //   data-bs-toggle='tab'
                          //   data-bs-target='#synopsis'
                          type='button'
                          //   role='tab'
                          //   aria-controls='synopsis'
                          //   aria-selected='true'
                        >
                          {TYPE[key].label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <div className='tab-content' id='myTabContent'>
                  <div className='tab-pane fade show active'>
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
