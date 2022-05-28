import React, { useEffect, useState } from 'react';
import './TabbedComponent.css';

function TabbedComponent({ tabs, onTabSelected }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  useEffect(() => {
    setSelectedTab(tabs[0]);
  }, [tabs]);

  const tabSelectHandler = (tab) => {
    setSelectedTab(tab);
    onTabSelected(tab);
  };

  return (
    <div className='tab'>
      {tabs.map((tab) => {
        const mClass = `tab__item ${
          selectedTab && tab.id == selectedTab.id ? 'active' : ''
        }`;
        return (
          <button
            key={tab.id}
            className={mClass}
            onClick={tabSelectHandler.bind(null, tab)}
          >
            {tab.name}
          </button>
        );
      })}
    </div>
  );
}

export default TabbedComponent;
