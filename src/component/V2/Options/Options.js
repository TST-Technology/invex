import React, { useState } from 'react';
// import Market from './Market/Market';

const Options = () => {
  const ACTIVE_TABS = [
    { label: 'Market', value: 'MARKET' },
    { label: 'Tranding Ideas', value: 'TRANDING_IDEAS' },
  ];

  const [activeTab, setActiveTab] = useState(ACTIVE_TABS[0].value);

  return (
    <>
      <div className='main'>
        <section className='company_details symfinstatcs company_detail_fix'>
          <div className='container'>
            <div className='mt-5 mb-5'>
              <h4>Options</h4>
            </div>

            <div className='col-lg-12'>
              <div className='top_button_panel v2 mt-4 mb-3'>
                {ACTIVE_TABS.map((tab, index) => {
                  return (
                    <button
                      key={index}
                      type='button'
                      className={`btn ${
                        tab.value === activeTab ? 'btn-info' : 'btn-light'
                      }`}
                      onClick={() => {
                        setActiveTab(tab.value);
                      }}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='d-flex align-items-center justify-content-between mt-5'>
                <h4 className='me-auto mb-0'>Market</h4>
              </div>
            </div>

            {/* {activeTab === ACTIVE_TABS[0].value && <Market />} */}
          </div>
        </section>
      </div>
    </>
  );
};

export default Options;
