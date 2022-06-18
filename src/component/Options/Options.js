import React, { useEffect, useState } from 'react';
import Market from './Market/Market';
import TradingIdea from './TradingIdea/TradingIdea';

const Options = () => {
  const [option, setOption] = useState('MARKET');

  return (
    <div className='main'>
      <section className='sectors_sec'>
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
                option === 'TRADING_IDEA' ? 'btn-info' : 'btn-light'
              }`}
              onClick={() => setOption('TRADING_IDEA')}
            >
              {' '}
              Tranding Ideas
            </button>
          </div>
          {option && option === 'MARKET' && <Market />}
          {option && option === 'TRADING_IDEA' && <TradingIdea />}
        </div>
      </section>
    </div>
  );
};

export default Options;
