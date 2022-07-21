import React, { useState, useEffect } from 'react';
import {
  getStockMarketActives,
  getHeaderMarqueeDetails,
} from '../../api/Symbol';

const Marquee = () => {
  const [marketActives, setMarketActives] = useState(null);
  const [index, setIndex] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [commodity, setCommodity] = useState(null);

  useEffect(() => {
    getMarketActives();
  }, []);

  const getMarketActives = async () => {
    try {
      const data = await getStockMarketActives();
      if (data && data.status === 200 && data.data) {
        setMarketActives(data.data);
      }
    } catch (error) {
      setMarketActives(null);
    }

    try {
      const data = await getHeaderMarqueeDetails();
      if (data && data.status === 200 && data.data) {
        const tempData = data.data;
        setIndex(tempData?.index);
        setCurrency(tempData?.currency);
        setCommodity(tempData?.commodity);
      }
    } catch (error) {}
  };

  return (
    <>
      <div className='marquee'>
        <div className='track'>
          <ul className='list-inline m-0'>
            {marketActives &&
              marketActives.map((stock) => {
                return (
                  <li className='list-unstyled list-inline-item'>
                    {stock?.symbol}
                    <span className='mx-2'>
                      ${stock?.price.toFixed(2)}
                    </span>{' '}
                    <span
                      className={`me-3 ${
                        stock?.changesPercentage > 0 ? 'up' : 'down'
                      }`}
                    >
                      {stock?.changesPercentage > 0
                        ? `+${stock?.changesPercentage.toFixed(2)}`
                        : stock?.changesPercentage.toFixed(2)}
                      %
                    </span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className='marquee2'>
        {/* <span>
          <b>Currency</b>
        </span> */}
        {index && currency && commodity && (
          <div className='track'>
            <ul className='list-inline m-0'>
              {index && currency && commodity && (
                <li className='list-unstyled list-inline-item'>
                  <b>Index</b>
                </li>
              )}
              <>
                {index &&
                  index.map((stock) => {
                    return (
                      <li className='list-unstyled list-inline-item'>
                        {stock?.symbol}
                        <span className='mx-2'>
                          ${stock?.price.toFixed(2)}
                        </span>{' '}
                        <span
                          className={`me-3 ${
                            stock?.changesPercentage > 0 ? 'up' : 'down'
                          }`}
                        >
                          {stock?.changesPercentage > 0
                            ? `+${stock?.changesPercentage.toFixed(2)}`
                            : stock?.changesPercentage.toFixed(2)}
                          %
                        </span>
                      </li>
                    );
                  })}
              </>
              {index && currency && commodity && (
                <li className='list-unstyled list-inline-item'>
                  <b>Currency</b>
                </li>
              )}
              <>
                {currency &&
                  currency.map((stock) => {
                    return (
                      <li className='list-unstyled list-inline-item'>
                        {stock?.symbol}
                        <span className='mx-2'>
                          ${stock?.price.toFixed(2)}
                        </span>{' '}
                        <span
                          className={`me-3 ${
                            stock?.changesPercentage > 0 ? 'up' : 'down'
                          }`}
                        >
                          {stock?.changesPercentage > 0
                            ? `+${stock?.changesPercentage.toFixed(2)}`
                            : stock?.changesPercentage.toFixed(2)}
                          %
                        </span>
                      </li>
                    );
                  })}
              </>
              {index && currency && commodity && (
                <li className='list-unstyled list-inline-item'>
                  <b>Commodity</b>
                </li>
              )}
              <>
                {commodity &&
                  commodity.map((stock) => {
                    return (
                      <li className='list-unstyled list-inline-item'>
                        {stock?.name}
                        <span className='mx-2'>
                          ${stock?.price.toFixed(2)}
                        </span>{' '}
                        <span
                          className={`me-3 ${
                            stock?.changesPercentage > 0 ? 'up' : 'down'
                          }`}
                        >
                          {stock?.changesPercentage > 0
                            ? `+${stock?.changesPercentage.toFixed(2)}`
                            : stock?.changesPercentage.toFixed(2)}
                          %
                        </span>
                      </li>
                    );
                  })}
              </>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Marquee;
