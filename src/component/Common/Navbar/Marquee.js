import React, { useState, useEffect } from 'react';
import { getStockMarketActives } from '../../api/Symbol';

const Marquee = () => {
  const [marketActives, setMarketActives] = useState(null);

  useEffect(() => {
    getMarketActives();
  }, []);

  const getMarketActives = async () => {
    const data = await getStockMarketActives();
    if (data && data.status === 200 && data.data) {
      setMarketActives(data.data);
    }
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
                    <span className='mx-2'>${stock?.price}</span>{' '}
                    <span
                      className={`me-3 ${
                        stock?.changesPercentage > 0 ? 'up' : 'down'
                      }`}
                    >
                      {stock?.changesPercentage > 0
                        ? `+${stock?.changesPercentage}`
                        : stock?.changesPercentage}
                      %
                    </span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className='marquee2'>
        <span>
          <b>Currency</b>
        </span>
        <div className='track'>
          <ul className='list-inline m-0'>
            <li className='list-unstyled list-inline-item'>
              Symbol<span className='mx-2'>$124.1</span>{' '}
              <span className='up me-3'>+3.91%</span>
            </li>
            <li className='list-unstyled list-inline-item'>
              Symbol<span className='mx-2'>$124.1</span>{' '}
              <span className='down me-3'>+3.91%</span>
            </li>
            <li className='list-unstyled list-inline-item'>
              Symbol<span className='mx-2'>$124.1</span>{' '}
              <span className='up me-3'>+3.91%</span>
            </li>
            <li className='list-unstyled list-inline-item'>
              Symbol<span className='mx-2'>$124.1</span>{' '}
              <span className='down me-3'>+3.91%</span>
            </li>
            <li className='list-unstyled list-inline-item'>
              Symbol<span className='mx-2'>$124.1</span>{' '}
              <span className='down me-3'>+3.91%</span>
            </li>
            <li className='list-unstyled list-inline-item'>
              Symbol<span className='mx-2'>$124.1</span>{' '}
              <span className='up me-3'>+3.91%</span>
            </li>
            <li className='list-unstyled list-inline-item'>
              Symbol<span className='mx-2'>$124.1</span>{' '}
              <span className='down me-3'>+3.91%</span>
            </li>
            <li className='list-unstyled list-inline-item'>
              Symbol<span className='mx-2'>$124.1</span>{' '}
              <span className='up me-3'>+3.91%</span>
            </li>
            <li className='list-unstyled list-inline-item'>
              Symbol<span className='mx-2'>$124.1</span>{' '}
              <span className='down me-3'>+3.91%</span>
            </li>
            <li className='list-unstyled list-inline-item'>
              Symbol<span className='mx-2'>$124.1</span>{' '}
              <span className='up me-3'>+3.91%</span>
            </li>
            <li className='list-unstyled list-inline-item'>
              Symbol<span className='mx-2'>$124.1</span>{' '}
              <span className='up me-3'>+3.91%</span>
            </li>
            <li className='list-unstyled list-inline-item'>
              Symbol<span className='mx-2'>$124.1</span>{' '}
              <span className='down me-3'>+3.91%</span>
            </li>
            <li className='list-unstyled list-inline-item'>
              Symbol<span className='mx-2'>$124.1</span>{' '}
              <span className='up me-3'>+3.91%</span>
            </li>
            <li className='list-unstyled list-inline-item'>
              Symbol<span className='mx-2'>$124.1</span>{' '}
              <span className='down me-3'>+3.91%</span>
            </li>
            <li className='list-unstyled list-inline-item'>
              Symbol<span className='mx-2'>$124.1</span>{' '}
              <span className='up me-3'>+3.91%</span>
            </li>
            <li className='list-unstyled list-inline-item'>
              Symbol<span className='mx-2'>$124.1</span>{' '}
              <span className='up me-3'>+3.91%</span>
            </li>
            <li className='list-unstyled list-inline-item'>
              Symbol<span className='mx-2'>$124.1</span>{' '}
              <span className='down me-3'>+3.91%</span>
            </li>
            <li className='list-unstyled list-inline-item'>
              Symbol<span className='mx-2'>$124.1</span>{' '}
              <span className='up me-3'>+3.91%</span>
            </li>
            <li className='list-unstyled list-inline-item'>
              Symbol<span className='mx-2'>$124.1</span>{' '}
              <span className='down me-3'>+3.91%</span>
            </li>
            <li className='list-unstyled list-inline-item'>
              Symbol<span className='mx-2'>$124.1</span>{' '}
              <span className='up me-3'>+3.91%</span>
            </li>
            <li className='list-unstyled list-inline-item'>
              Symbol<span className='mx-2'>$124.1</span>{' '}
              <span className='down me-3'>+3.91%</span>
            </li>
            <li className='list-unstyled list-inline-item'>
              Symbol<span className='mx-2'>$124.1</span>{' '}
              <span className='up me-3'>+3.91%</span>
            </li>
            <li className='list-unstyled list-inline-item'>
              Symbol<span className='mx-2'>$124.1</span>{' '}
              <span className='down me-3'>+3.91%</span>
            </li>
            <li className='list-unstyled list-inline-item'>
              Symbol<span className='mx-2'>$124.1</span>{' '}
              <span className='down me-3'>+3.91%</span>
            </li>
            <li className='list-unstyled list-inline-item'>
              Symbol<span className='mx-2'>$124.1</span>{' '}
              <span className='up me-3'>+3.91%</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Marquee;
