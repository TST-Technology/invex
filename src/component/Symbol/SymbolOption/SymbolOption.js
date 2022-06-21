import React, { useState } from 'react';
import Quote from '../../Options/Quote/Quote';
import OptionsChain from '../../Options/OptionsChain/OptionsChain';

const SymbolOption = () => {
  const [option, setOption] = useState('QUOTE');

  return (
    <div className='main'>
      <section className='company_details'>
        <div className='container'>
          <div className='top_button_panel mt-4 mb-3'>
            <button
              type='button'
              className={`btn ${option === 'QUOTE' ? 'btn-info' : 'btn-light'}`}
              onClick={() => setOption('QUOTE')}
            >
              {' '}
              Quote
            </button>
            <button
              type='button'
              className={`btn ${
                option === 'OPTIONS_CHAIN' ? 'btn-info' : 'btn-light'
              }`}
              onClick={() => setOption('OPTIONS_CHAIN')}
            >
              {' '}
              Options Chain
            </button>
          </div>
          {option && option === 'QUOTE' && <Quote />}
          {option && option === 'OPTIONS_CHAIN' && <OptionsChain />}
        </div>
      </section>
    </div>
  );
};

export default SymbolOption;
