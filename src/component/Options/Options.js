import React, { useEffect, useState } from 'react';
import Market from './Market/Market';

const Options = () => {
  const [option, setOption] = useState('MARKET');

  return (
    <div className='main'>
      <section className='company_details'>
        <div className='container'>
          <div className='top_button_panel mt-4 mb-3'>
            <button
              type='button'
              className={`btn ${
                option === 'MARKET' ? 'btn-info' : 'btn-light'
              }`}
              onClick={() => setOption('MARKET')}
            >
              {' '}
              Market
            </button>
            <button
              type='button'
              className={`btn ${
                option === 'TRADING' ? 'btn-info' : 'btn-light'
              }`}
              onClick={() => setOption('QUOTE')}
            >
              {' '}
              Tranding Ideas
            </button>
          </div>
          {option && option === 'MARKET' && <Market />}
        </div>
      </section>
    </div>
  );
};

export default Options;
