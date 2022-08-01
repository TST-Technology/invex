import React, { useState } from 'react';
import Quote from './Quote/Quote';

const OptionAnalysis = () => {
  const ACTIVE_TABS = [
    { label: 'Quote', value: 'QUOTE' },
    { label: 'Option Chain', value: 'OPTION_CHAIN' },
  ];

  const [activeTab, setActiveTab] = useState(ACTIVE_TABS[0].value);

  return (
    <>
      <div className='col-lg-12'>
        <div className='d-flex align-items-center justify-content-between mt-5'>
          <h4 className='me-auto mb-0'>Option Analysis</h4>
        </div>
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

      {activeTab === ACTIVE_TABS[0].value && <Quote />}
    </>
  );
};

export default OptionAnalysis;
