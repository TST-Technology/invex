import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FinancialStatistics from '../FinancialStatisticsNew';
import Financials from '../FinancialStatement';
import CompanyDetailNew from './CompanyDetails/CompanyDetailNew';
import Navbar from '../Common/Navbar/NewNavbar';
import Marquee from '../Common/Navbar/Marquee';
import { TYPE } from './Constants';
import Synopsis from './Synopsis/Synopsis';
import { getCompanyProfileQuote } from '../api/Symbol';
import Chart from './Chart/Chart';
import OptionAnalysis from './OptionAnalysis/OptionAnalysis';
import Valuation from '../V2/Valuation/Valuation';

const SymbolDetails = () => {
  const [activeTab, setActiveTab] = useState(TYPE.synopsis.value);
  const [companyData, setCompanyData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { symbol } = useParams();

  useEffect(() => {
    if (symbol) {
      getCompanyDetails();
    }
  }, [symbol]);

  const getCompanyDetails = async () => {
    setLoading(true);
    const data = await getCompanyProfileQuote({ symbol: symbol });

    if (data && data.status == 200 && data.data) {
      setCompanyData(data.data);
    }
    setLoading(false);
  };

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <>
      {/* mainpage content start */}
      <div className='main'>
        <section className='company_details symfinstatcs'>
          <div className='container'>
            <div className='row'>
              <CompanyDetailNew data={companyData} />
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
                    {activeTab === TYPE.synopsis.value && (
                      <Synopsis onChangeTab={handleTabChange} />
                    )}

                    {activeTab === TYPE.financialStatistics.value && (
                      <FinancialStatistics />
                    )}

                    {activeTab === TYPE.financialStatements.value && (
                      <Financials />
                    )}

                    {activeTab === TYPE.chart.value && <Chart />}

                    {activeTab === TYPE.optionAnalysis.value && (
                      <OptionAnalysis />
                    )}

                    {activeTab === TYPE.dcfValuation.value && <Valuation />}
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
