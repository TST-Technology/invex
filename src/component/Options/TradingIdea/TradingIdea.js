import React, { useEffect, useState } from 'react';
import {
  getTradingIdeasOpenInterest,
  getTradingIdeasVolatility,
  getTradingIdeasVolume,
} from '../../api/Option';
import { getOneDayBeforeDate } from '../../Common/Date';
import { CircularProgress } from '@material-ui/core';

const TradingIdea = () => {
  const currentDate = getOneDayBeforeDate();

  const [activeTab, setActiveTab] = useState();
  const [volatilityParam, setVolatilityParam] = useState({ date: currentDate });
  const [volumeParam, setVolumeParam] = useState({ date: currentDate });
  const [openInterestParam, setOpenInterestParam] = useState({
    date: currentDate,
  });
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      switch (activeTab) {
        case 'VOLATILITY':
          const volatilityResp = await getTradingIdeasVolatility(
            volatilityParam
          );
          if (typeof volatilityResp === 'string') {
            const tempJSON = JSON.parse(volatilityResp.replaceAll('NaN', null));
            console.log(tempJSON);
            setData(tempJSON);
          } else {
            setData(volatilityResp);
          }
          break;
        case 'VOLUME':
          const volumeResp = await getTradingIdeasVolume(volumeParam);
          if (typeof volumeResp === 'string') {
            const tempJSON = JSON.parse(volumeResp.replaceAll('NaN', null));
            console.log(tempJSON);
            setData(tempJSON);
          } else {
            setData(volumeResp);
          }
          break;
        case 'OPEN_INTEREST':
          const openInterestResp = await getTradingIdeasOpenInterest(
            openInterestParam
          );
          if (typeof openInterestResp === 'string') {
            const tempJSON = JSON.parse(
              openInterestResp.replaceAll('NaN', null)
            );
            console.log(tempJSON);
            setData(tempJSON);
          } else {
            setData(openInterestResp);
          }
          break;
      }
      setIsLoading(false);
    })();
  }, [volatilityParam, volumeParam, openInterestParam, activeTab]);

  const duration = [
    { param: 'daily', label: 'Daily' },
    { param: 'weekly', label: 'Weekly' },
    { param: 'monthly', label: 'Monthly' },
    { param: 'quarterly', label: 'Quarterly' },
    { param: 'call/put', label: 'Call/Put' },
  ];

  return (
    <div className='row'>
      <div className='col-lg-4'>
        <div className='leftsidefilter mb-5'>
          <div className='new_scenr_btn'>
            <h4 className='m-0'>Implied Volatility</h4>
          </div>
          <div className='accordion' id='acc_sidefilter'>
            <div className='in_acc_item'>
              <h2 className='in_acc_header' id='acc_commu_serv'>
                <button
                  className={`accordion-button ${
                    volatilityParam &&
                    volatilityParam.days === 30 &&
                    volatilityParam.param &&
                    activeTab === 'VOLATILITY'
                      ? 'active'
                      : 'collapsed'
                  }`}
                  onClick={() => {
                    setVolatilityParam({
                      ...volatilityParam,
                      days: 30,
                      param: 'daily',
                    });
                    setActiveTab('VOLATILITY');
                  }}
                >
                  <span className='d-block w-100'>
                    IV30 <a className='float-end me-3 pe-3 text-secondary'>1</a>
                  </span>
                </button>
              </h2>
              <div
                id='coll_commu_serv'
                className={`accordion-collapse ${
                  volatilityParam &&
                  volatilityParam.days === 30 &&
                  volatilityParam.param &&
                  activeTab === 'VOLATILITY'
                    ? ''
                    : 'collapse'
                }`}
                aria-labelledby='acc_commu_serv'
                data-bs-parent='#acc_sidefilter'
              >
                <div className='in_acc_body'>
                  <ul>
                    {duration.map((row, index) => {
                      return (
                        <li
                          key={index}
                          className={`${
                            volatilityParam &&
                            volatilityParam.days === 30 &&
                            volatilityParam.param === row.param
                              ? 'active'
                              : ''
                          }`}
                          onClick={() => {
                            setVolatilityParam({
                              ...volatilityParam,
                              days: 30,
                              param: row.param,
                            });
                            setActiveTab('VOLATILITY');
                          }}
                        >
                          <a href='javascript:void(0)'>
                            IV30 {row.label}{' '}
                            {row.param !== 'call/put' ? 'Change' : ''}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className='in_acc_item'>
              <h2 className='in_acc_header' id='acc_financials'>
                <button
                  className={`accordion-button ${
                    volatilityParam &&
                    volatilityParam.days === 60 &&
                    volatilityParam.param &&
                    activeTab === 'VOLATILITY'
                      ? 'active'
                      : 'collapsed'
                  }`}
                  onClick={() => {
                    setVolatilityParam({
                      ...volatilityParam,
                      days: 60,
                      param: 'daily',
                    });
                    setActiveTab('VOLATILITY');
                  }}
                  type='button'
                >
                  <span className='d-block w-100'>
                    IV60 <a className='float-end me-3 pe-3 text-secondary'>1</a>
                  </span>
                </button>
              </h2>
              <div
                id='coll_financials'
                className={`accordion-collapse ${
                  volatilityParam &&
                  volatilityParam.days === 60 &&
                  volatilityParam.param &&
                  activeTab === 'VOLATILITY'
                    ? ''
                    : 'collapse'
                }`}
              >
                <div className='in_acc_body'>
                  <ul>
                    {duration.map((row, index) => {
                      return (
                        <li
                          key={index}
                          className={`${
                            volatilityParam &&
                            volatilityParam.days === 60 &&
                            volatilityParam.param === row.param
                              ? 'active'
                              : ''
                          }`}
                          onClick={() => {
                            setVolatilityParam({
                              ...volatilityParam,
                              days: 60,
                              param: row.param,
                            });
                            setActiveTab('VOLATILITY');
                          }}
                        >
                          <a href='javascript:void(0)'>
                            IV60 {row.label}{' '}
                            {row.param !== 'call/put' ? 'Change' : ''}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className='in_acc_item'>
              <h2 className='in_acc_header' id='acc_financials'>
                <button
                  className={`accordion-button ${
                    volatilityParam &&
                    volatilityParam.days === 90 &&
                    volatilityParam.param &&
                    activeTab === 'VOLATILITY'
                      ? 'active'
                      : 'collapsed'
                  }`}
                  onClick={() => {
                    setVolatilityParam({
                      ...volatilityParam,
                      days: 90,
                      param: 'daily',
                    });
                    setActiveTab('VOLATILITY');
                  }}
                >
                  <span className='d-block w-100'>
                    IV90 <a className='float-end me-3 pe-3 text-secondary'>1</a>
                  </span>
                </button>
              </h2>
              <div
                id='coll_financials'
                className={`accordion-collapse ${
                  volatilityParam &&
                  volatilityParam.days === 90 &&
                  volatilityParam.param &&
                  activeTab === 'VOLATILITY'
                    ? ''
                    : 'collapse'
                }`}
              >
                <div className='in_acc_body'>
                  <ul>
                    {duration.map((row, index) => {
                      return (
                        <li
                          key={index}
                          className={`${
                            volatilityParam &&
                            volatilityParam.days === 90 &&
                            volatilityParam.param === row.param
                              ? 'active'
                              : ''
                          }`}
                          onClick={() => {
                            setVolatilityParam({
                              ...volatilityParam,
                              days: 90,
                              param: row.param,
                            });
                            setActiveTab('VOLATILITY');
                          }}
                        >
                          <a href='javascript:void(0)'>
                            IV90 {row.label}{' '}
                            {row.param !== 'call/put' ? 'Change' : ''}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className='in_acc_item'>
              <h2 className='in_acc_header' id='acc_financials'>
                <button
                  className={`accordion-button ${
                    volatilityParam &&
                    volatilityParam.days === 120 &&
                    volatilityParam.param &&
                    activeTab === 'VOLATILITY'
                      ? 'active'
                      : 'collapsed'
                  }`}
                  onClick={() => {
                    setVolatilityParam({
                      ...volatilityParam,
                      days: 120,
                      param: 'daily',
                    });
                    setActiveTab('VOLATILITY');
                  }}
                >
                  <span className='d-block w-100'>
                    IV120
                    <a className='float-end me-3 pe-3 text-secondary'>1</a>
                  </span>
                </button>
              </h2>
              <div
                id='coll_financials'
                className={`accordion-collapse ${
                  volatilityParam &&
                  volatilityParam.days === 120 &&
                  volatilityParam.param &&
                  activeTab === 'VOLATILITY'
                    ? ''
                    : 'collapse'
                }`}
              >
                <div className='in_acc_body'>
                  <ul>
                    {duration.map((row, index) => {
                      return (
                        <li
                          key={index}
                          className={`${
                            volatilityParam &&
                            volatilityParam.days === 120 &&
                            volatilityParam.param === row.param
                              ? 'active'
                              : ''
                          }`}
                          onClick={() => {
                            setVolatilityParam({
                              ...volatilityParam,
                              days: 120,
                              param: row.param,
                            });
                            setActiveTab('VOLATILITY');
                          }}
                        >
                          <a href='javascript:void(0)'>
                            IV120 {row.label}{' '}
                            {row.param !== 'call/put' ? 'Change' : ''}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className='in_acc_item'>
              <h2 className='in_acc_header' id='acc_financials'>
                <button
                  className={`accordion-button ${
                    volatilityParam &&
                    volatilityParam.days === 150 &&
                    volatilityParam.param &&
                    activeTab === 'VOLATILITY'
                      ? 'active'
                      : 'collapsed'
                  }`}
                  onClick={() => {
                    setVolatilityParam({
                      ...volatilityParam,
                      days: 150,
                      param: 'daily',
                    });
                    setActiveTab('VOLATILITY');
                  }}
                >
                  <span className='d-block w-100'>
                    IV150
                    <a className='float-end me-3 pe-3 text-secondary'>1</a>
                  </span>
                </button>
              </h2>
              <div
                id='coll_financials'
                className={`accordion-collapse ${
                  volatilityParam &&
                  volatilityParam.days === 150 &&
                  volatilityParam.param &&
                  activeTab === 'VOLATILITY'
                    ? ''
                    : 'collapse'
                }`}
              >
                <div className='in_acc_body'>
                  <ul>
                    {duration.map((row, index) => {
                      return (
                        <li
                          key={index}
                          className={`${
                            volatilityParam &&
                            volatilityParam.days === 150 &&
                            volatilityParam.param === row.param
                              ? 'active'
                              : ''
                          }`}
                          onClick={() => {
                            setVolatilityParam({
                              ...volatilityParam,
                              days: 150,
                              param: row.param,
                            });
                            setActiveTab('VOLATILITY');
                          }}
                        >
                          <a href='javascript:void(0)'>
                            IV150 {row.label}{' '}
                            {row.param !== 'call/put' ? 'Change' : ''}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className='in_acc_item'>
              <h2 className='in_acc_header' id='acc_financials'>
                <button
                  className={`accordion-button ${
                    volatilityParam &&
                    volatilityParam.days === 180 &&
                    volatilityParam.param &&
                    activeTab === 'VOLATILITY'
                      ? 'active'
                      : 'collapsed'
                  }`}
                  onClick={() => {
                    setVolatilityParam({
                      ...volatilityParam,
                      days: 180,
                      param: 'daily',
                    });
                    setActiveTab('VOLATILITY');
                  }}
                >
                  <span className='d-block w-100'>
                    IV180
                    <a className='float-end me-3 pe-3 text-secondary'>1</a>
                  </span>
                </button>
              </h2>
              <div
                id='coll_financials'
                className={`accordion-collapse ${
                  volatilityParam &&
                  volatilityParam.days === 180 &&
                  volatilityParam.param &&
                  activeTab === 'VOLATILITY'
                    ? ''
                    : 'collapse'
                }`}
              >
                <div className='in_acc_body'>
                  <ul>
                    {duration.map((row, index) => {
                      return (
                        <li
                          key={index}
                          className={`${
                            volatilityParam &&
                            volatilityParam.days === 180 &&
                            volatilityParam.param === row.param
                              ? 'active'
                              : ''
                          }`}
                          onClick={() => {
                            setVolatilityParam({
                              ...volatilityParam,
                              days: 180,
                              param: row.param,
                            });
                            setActiveTab('VOLATILITY');
                          }}
                        >
                          <a href='javascript:void(0)'>
                            IV180 {row.label}{' '}
                            {row.param !== 'call/put' ? 'Change' : ''}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className='in_acc_item'>
              <h2 className='in_acc_header' id='acc_financials'>
                <button
                  className={`accordion-button ${
                    volatilityParam &&
                    volatilityParam.days === 360 &&
                    volatilityParam.param &&
                    activeTab === 'VOLATILITY'
                      ? 'active'
                      : 'collapsed'
                  }`}
                  onClick={() => {
                    setVolatilityParam({
                      ...volatilityParam,
                      days: 360,
                      param: 'daily',
                    });
                    setActiveTab('VOLATILITY');
                  }}
                >
                  <span className='d-block w-100'>
                    IV360
                    <a className='float-end me-3 pe-3 text-secondary'>1</a>
                  </span>
                </button>
              </h2>
              <div
                id='coll_financials'
                className={`accordion-collapse ${
                  volatilityParam &&
                  volatilityParam.days === 360 &&
                  volatilityParam.param &&
                  activeTab === 'VOLATILITY'
                    ? ''
                    : 'collapse'
                }`}
              >
                <div className='in_acc_body'>
                  <ul>
                    {duration.map((row, index) => {
                      return (
                        <li
                          key={index}
                          className={`${
                            volatilityParam &&
                            volatilityParam.days === 360 &&
                            volatilityParam.param === row.param
                              ? 'active'
                              : ''
                          }`}
                          onClick={() => {
                            setVolatilityParam({
                              ...volatilityParam,
                              days: 360,
                              param: row.param,
                            });
                            setActiveTab('VOLATILITY');
                          }}
                        >
                          <a href='javascript:void(0)'>
                            IV360 {row.label}{' '}
                            {row.param !== 'call/put' ? 'Change' : ''}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className='new_scenr_btn'>
              <h4 className='m-0'>Volume</h4>
            </div>
            <div className='in_acc_item'>
              <h2 className='in_acc_header' id='acc_consumer_discre'>
                <button
                  className={`accordion-button ${
                    volumeParam &&
                    volumeParam.option === 'call' &&
                    volumeParam.param &&
                    activeTab === 'VOLUME'
                      ? 'active'
                      : 'collapsed'
                  }`}
                  onClick={() => {
                    setVolumeParam({
                      ...volumeParam,
                      option: 'call',
                      param: 'daily',
                    });
                    setActiveTab('VOLUME');
                  }}
                >
                  <span className='d-block w-100'>
                    Call Volume
                    <a className='float-end me-3 pe-3 text-secondary'>7</a>
                  </span>
                </button>
              </h2>
              <div
                id='coll_consumer_discre'
                className={`accordion-collapse ${
                  volumeParam &&
                  volumeParam.option === 'call' &&
                  volumeParam.param &&
                  activeTab === 'VOLUME'
                    ? ''
                    : 'collapse'
                }`}
              >
                <div className='in_acc_body'>
                  <ul>
                    {duration.map((row, index) => {
                      return (
                        row.param !== 'call/put' && (
                          <li
                            key={index}
                            className={`${
                              volumeParam &&
                              volumeParam.option === 'call' &&
                              volumeParam.param === row.param
                                ? 'active'
                                : ''
                            }`}
                            onClick={() => {
                              setVolumeParam({
                                ...volumeParam,
                                option: 'call',
                                param: row.param,
                              });
                              setActiveTab('VOLUME');
                            }}
                          >
                            <a href='javascript:void(0)'>
                              Call Volume {row.label} Change
                            </a>
                          </li>
                        )
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className='in_acc_item'>
              <h2 className='in_acc_header' id='acc_financials'>
                <button
                  className={`accordion-button ${
                    volumeParam &&
                    volumeParam.option === 'put' &&
                    volumeParam.param &&
                    activeTab === 'VOLUME'
                      ? 'active'
                      : 'collapsed'
                  }`}
                  onClick={() => {
                    setVolumeParam({
                      ...volumeParam,
                      option: 'put',
                      param: 'daily',
                    });
                    setActiveTab('VOLUME');
                  }}
                >
                  <span className='d-block w-100'>
                    Put Volume
                    <a className='float-end me-3 pe-3 text-secondary'>1</a>
                  </span>
                </button>
              </h2>
              <div
                id='coll_financials'
                className={`accordion-collapse ${
                  volumeParam &&
                  volumeParam.option === 'put' &&
                  volumeParam.param &&
                  activeTab === 'VOLUME'
                    ? ''
                    : 'collapse'
                }`}
              >
                <div className='in_acc_body'>
                  <ul>
                    {duration.map((row, index) => {
                      return (
                        row.param !== 'call/put' && (
                          <li
                            key={index}
                            className={`${
                              volumeParam &&
                              volumeParam.option === 'put' &&
                              volumeParam.param === row.param
                                ? 'active'
                                : ''
                            }`}
                            onClick={() => {
                              setVolumeParam({
                                ...volumeParam,
                                option: 'put',
                                param: row.param,
                              });
                              setActiveTab('VOLUME');
                            }}
                          >
                            <a href='javascript:void(0)'>
                              Put Volume {row.label} Change
                            </a>
                          </li>
                        )
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className='in_acc_item'>
              <h2 className='in_acc_header' id='acc_financials'>
                <button
                  className={`accordion-button ${
                    volumeParam &&
                    volumeParam.option === 'options' &&
                    volumeParam.param &&
                    activeTab === 'VOLUME'
                      ? 'active'
                      : 'collapsed'
                  }`}
                  onClick={() => {
                    setVolumeParam({
                      ...volumeParam,
                      option: 'options',
                      param: 'daily',
                    });
                    setActiveTab('VOLUME');
                  }}
                >
                  <span className='d-block w-100'>
                    Options Volume
                    <a className='float-end me-3 pe-3 text-secondary'>1</a>
                  </span>
                </button>
              </h2>
              <div
                id='coll_financials'
                className={`accordion-collapse ${
                  volumeParam &&
                  volumeParam.option === 'options' &&
                  volumeParam.param &&
                  activeTab === 'VOLUME'
                    ? ''
                    : 'collapse'
                }`}
              >
                <div className='in_acc_body'>
                  <ul>
                    {duration.map((row, index) => {
                      return (
                        row.param !== 'call/put' && (
                          <li
                            key={index}
                            className={`${
                              volumeParam &&
                              volumeParam.option === 'options' &&
                              volumeParam.param === row.param
                                ? 'active'
                                : ''
                            }`}
                            onClick={() => {
                              setVolumeParam({
                                ...volumeParam,
                                option: 'options',
                                param: row.param,
                              });
                              setActiveTab('VOLUME');
                            }}
                          >
                            <a href='javascript:void(0)'>
                              Options Volume {row.label} Change
                            </a>
                          </li>
                        )
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className='in_acc_item'>
              <h2 className='in_acc_header' id='acc_financials'>
                <button
                  className={`accordion-button ${
                    volumeParam &&
                    volumeParam.option === 'call/put' &&
                    volumeParam.param &&
                    activeTab === 'VOLUME'
                      ? 'active'
                      : 'collapsed'
                  }`}
                  onClick={() => {
                    setVolumeParam({
                      ...volumeParam,
                      option: 'call/put',
                      param: 'daily',
                    });
                    setActiveTab('VOLUME');
                  }}
                >
                  <span className='d-block w-100'>
                    Call-Put Volume Ratio
                    <a className='float-end me-3 pe-3 text-secondary'>1</a>
                  </span>
                </button>
              </h2>
              <div
                id='coll_financials'
                className={`accordion-collapse ${
                  volumeParam &&
                  volumeParam.option === 'call/put' &&
                  volumeParam.param &&
                  activeTab === 'VOLUME'
                    ? ''
                    : 'collapse'
                }`}
              >
                <div className='in_acc_body'>
                  <ul>
                    {duration.map((row, index) => {
                      return (
                        row.param !== 'call/put' && (
                          <li
                            key={index}
                            className={`${
                              volumeParam &&
                              volumeParam.option === 'call/put' &&
                              volumeParam.param === row.param
                                ? 'active'
                                : ''
                            }`}
                            onClick={() => {
                              setVolumeParam({
                                ...volumeParam,
                                option: 'call/put',
                                param: row.param,
                              });
                              setActiveTab('VOLUME');
                            }}
                          >
                            <a href='javascript:void(0)'>
                              Call-Put Volume {row.label} Change
                            </a>
                          </li>
                        )
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className='new_scenr_btn'>
              <h4 className='m-0'>Open Interest</h4>
            </div>
            <div className='in_acc_item'>
              <h2 className='in_acc_header' id='acc_consumer_staples'>
                <button
                  className={`accordion-button ${
                    openInterestParam &&
                    openInterestParam.option === 'call' &&
                    openInterestParam.param &&
                    activeTab === 'OPEN_INTEREST'
                      ? 'active'
                      : 'collapsed'
                  }`}
                  onClick={() => {
                    setOpenInterestParam({
                      ...openInterestParam,
                      option: 'call',
                      param: 'daily',
                    });
                    setActiveTab('OPEN_INTEREST');
                  }}
                >
                  <span className='d-block w-100'>
                    Call OI
                    <a className='float-end me-3 pe-3 text-secondary'>12</a>
                  </span>
                </button>
              </h2>
              <div
                id='coll_consumer_staples'
                className={`accordion-collapse ${
                  openInterestParam &&
                  openInterestParam.option === 'call' &&
                  openInterestParam.param &&
                  activeTab === 'OPEN_INTEREST'
                    ? ''
                    : 'collapse'
                }`}
              >
                <div className='in_acc_body'>
                  <ul>
                    {duration.map((row, index) => {
                      return (
                        row.param !== 'call/put' && (
                          <li
                            key={index}
                            className={`${
                              openInterestParam &&
                              openInterestParam.option === 'call' &&
                              openInterestParam.param === row.param
                                ? 'active'
                                : ''
                            }`}
                            onClick={() => {
                              setOpenInterestParam({
                                ...openInterestParam,
                                option: 'call',
                                param: row.param,
                              });
                              setActiveTab('OPEN_INTEREST');
                            }}
                          >
                            <a href='javascript:void(0)'>
                              Call OI {row.label} Change
                            </a>
                          </li>
                        )
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className='in_acc_item'>
              <h2 className='in_acc_header' id='acc_energy'>
                <button
                  className={`accordion-button ${
                    openInterestParam &&
                    openInterestParam.option === 'put' &&
                    openInterestParam.param &&
                    activeTab === 'OPEN_INTEREST'
                      ? 'active'
                      : 'collapsed'
                  }`}
                  onClick={() => {
                    setOpenInterestParam({
                      ...openInterestParam,
                      option: 'put',
                      param: 'daily',
                    });
                    setActiveTab('OPEN_INTEREST');
                  }}
                >
                  <span className='d-block w-100'>
                    Put OI
                    <a className='float-end me-3 pe-3 text-secondary'>5</a>
                  </span>
                </button>
              </h2>
              <div
                id='coll_energy'
                className={`accordion-collapse ${
                  openInterestParam &&
                  openInterestParam.option === 'put' &&
                  openInterestParam.param &&
                  activeTab === 'OPEN_INTEREST'
                    ? ''
                    : 'collapse'
                }`}
              >
                <div className='in_acc_body'>
                  <ul>
                    {duration.map((row, index) => {
                      return (
                        row.param !== 'call/put' && (
                          <li
                            key={index}
                            className={`${
                              openInterestParam &&
                              openInterestParam.option === 'put' &&
                              openInterestParam.param === row.param
                                ? 'active'
                                : ''
                            }`}
                            onClick={() => {
                              setOpenInterestParam({
                                ...openInterestParam,
                                option: 'put',
                                param: row.param,
                              });
                              setActiveTab('OPEN_INTEREST');
                            }}
                          >
                            <a href='javascript:void(0)'>
                              Put OI {row.label} Change
                            </a>
                          </li>
                        )
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className='in_acc_item'>
              <h2 className='in_acc_header' id='acc_financials'>
                <button
                  className={`accordion-button ${
                    openInterestParam &&
                    openInterestParam.option === 'options' &&
                    openInterestParam.param &&
                    activeTab === 'OPEN_INTEREST'
                      ? 'active'
                      : 'collapsed'
                  }`}
                  onClick={() => {
                    setOpenInterestParam({
                      ...openInterestParam,
                      option: 'options',
                      param: 'daily',
                    });
                    setActiveTab('OPEN_INTEREST');
                  }}
                >
                  <span className='d-block w-100'>
                    Options OI
                    <a className='float-end me-3 pe-3 text-secondary'>1</a>
                  </span>
                </button>
              </h2>
              <div
                id='coll_financials'
                className={`accordion-collapse ${
                  openInterestParam &&
                  openInterestParam.option === 'options' &&
                  openInterestParam.param &&
                  activeTab === 'OPEN_INTEREST'
                    ? ''
                    : 'collapse'
                }`}
              >
                <div className='in_acc_body'>
                  <ul>
                    {duration.map((row, index) => {
                      return (
                        row.param !== 'call/put' && (
                          <li
                            key={index}
                            className={`${
                              openInterestParam &&
                              openInterestParam.option === 'options' &&
                              openInterestParam.param === row.param
                                ? 'active'
                                : ''
                            }`}
                            onClick={() => {
                              setOpenInterestParam({
                                ...openInterestParam,
                                option: 'options',
                                param: row.param,
                              });
                              setActiveTab('OPEN_INTEREST');
                            }}
                          >
                            <a href='javascript:void(0)'>
                              Options OI {row.label} Change
                            </a>
                          </li>
                        )
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className='in_acc_item'>
              <h2 className='in_acc_header' id='acc_financials'>
                <button
                  className={`accordion-button ${
                    openInterestParam &&
                    openInterestParam.option === 'call/put' &&
                    openInterestParam.param &&
                    activeTab === 'OPEN_INTEREST'
                      ? 'active'
                      : 'collapsed'
                  }`}
                  onClick={() => {
                    setOpenInterestParam({
                      ...openInterestParam,
                      option: 'call/put',
                      param: 'daily',
                    });
                    setActiveTab('OPEN_INTEREST');
                  }}
                >
                  <span className='d-block w-100'>
                    Call-Put OI Ratio
                    <a className='float-end me-3 pe-3 text-secondary'>1</a>
                  </span>
                </button>
              </h2>
              <div
                id='coll_financials'
                className={`accordion-collapse ${
                  openInterestParam &&
                  openInterestParam.option === 'call/put' &&
                  openInterestParam.param &&
                  activeTab === 'OPEN_INTEREST'
                    ? ''
                    : 'collapse'
                }`}
              >
                <div className='in_acc_body'>
                  <ul>
                    {duration.map((row, index) => {
                      return (
                        row.param !== 'call/put' && (
                          <li
                            key={index}
                            className={`${
                              openInterestParam &&
                              openInterestParam.option === 'call/put' &&
                              openInterestParam.param === row.param
                                ? 'active'
                                : ''
                            }`}
                            onClick={() => {
                              setOpenInterestParam({
                                ...openInterestParam,
                                option: 'call/put',
                                param: row.param,
                              });
                              setActiveTab('OPEN_INTEREST');
                            }}
                          >
                            <a href='javascript:void(0)'>
                              Call-Put OI {row.label} Change
                            </a>
                          </li>
                        )
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-lg-8'>
        {!isLoading && data && data.symbol && (
          <div className='row'>
            <div className='col-lg-12 mb-5'>
              <div className='top_eta mt-5'>
                <div className='mb-5'>
                  <div className='d-flex align-items-center justify-content-between border p-3 border-bottom-0'>
                    <h6 className='m-0'>
                      <strong>Option Market Scaner</strong>
                    </h6>
                    <a
                      href='javascript:void(0)'
                      className='btn btn-outline-dark viewmore'
                    >
                      Export Data
                    </a>
                  </div>
                  <div className='table-responsive'>
                    <table className='table table-bordered m-0 most_tables'>
                      <thead className='table-light'>
                        <tr>
                          <th scope='col'>Symbol</th>
                          <th scope='col'>Last</th>
                          {activeTab &&
                            activeTab === 'VOLATILITY' &&
                            volatilityParam &&
                            volatilityParam.days &&
                            volatilityParam.param !== 'call/put' && (
                              <>
                                <th>
                                  IV
                                  {volatilityParam && volatilityParam.days
                                    ? volatilityParam.days
                                    : ''}{' '}
                                  Today
                                </th>
                                <th>
                                  IV
                                  {volatilityParam && volatilityParam.days
                                    ? volatilityParam.days
                                    : ''}{' '}
                                  Before
                                </th>
                              </>
                            )}

                          {activeTab &&
                            activeTab === 'VOLATILITY' &&
                            volatilityParam &&
                            volatilityParam.days &&
                            volatilityParam.param === 'call/put' && (
                              <>
                                <th>
                                  IV
                                  {volatilityParam && volatilityParam.days
                                    ? volatilityParam.days
                                    : ''}{' '}
                                  Call
                                </th>
                                <th>
                                  IV
                                  {volatilityParam && volatilityParam.days
                                    ? volatilityParam.days
                                    : ''}{' '}
                                  Put
                                </th>
                              </>
                            )}
                          {/* <th scope='col'>Call Volume</th>
                        <th scope='col'>Put Volume</th> */}
                          <th scope='col'>Ratio</th>
                        </tr>
                      </thead>
                      <tbody className='border-top-0'>
                        {data &&
                          data.symbol &&
                          Object.values(data.symbol).map((row, index) => {
                            return (
                              <tr key={index}>
                                <td>
                                  {data?.symbol && data?.symbol[index]
                                    ? data?.symbol[index]
                                    : '-'}
                                </td>
                                <td>
                                  {data?.last && data?.last[index]
                                    ? data?.last[index].toFixed(2)
                                    : '-'}
                                </td>

                                {activeTab &&
                                  activeTab === 'VOLATILITY' &&
                                  volatilityParam &&
                                  volatilityParam.days &&
                                  volatilityParam.param !== 'call/put' && (
                                    <>
                                      <td>
                                        {data[
                                          `iv${volatilityParam.days}mean_before`
                                        ] &&
                                        data[
                                          `iv${volatilityParam.days}mean_before`
                                        ][index]
                                          ? `${data[
                                              `iv${volatilityParam.days}mean_before`
                                            ][index].toFixed(2)} %`
                                          : '-'}
                                      </td>
                                      <td>
                                        {data[
                                          `iv${volatilityParam.days}mean_today`
                                        ] &&
                                        data[
                                          `iv${volatilityParam.days}mean_today`
                                        ][index]
                                          ? `${data[
                                              `iv${volatilityParam.days}mean_today`
                                            ][index].toFixed(2)} %`
                                          : '-'}
                                      </td>
                                      <td className='up'>
                                        {data[
                                          `${volatilityParam.param}_change`
                                        ] &&
                                        data[`${volatilityParam.param}_change`][
                                          index
                                        ]
                                          ? `${data[
                                              `${volatilityParam.param}_change`
                                            ][index].toFixed(2)} %`
                                          : '-'}
                                      </td>
                                    </>
                                  )}

                                {activeTab &&
                                  activeTab === 'VOLATILITY' &&
                                  volatilityParam &&
                                  volatilityParam.days &&
                                  volatilityParam.param === 'call/put' && (
                                    <>
                                      <td>
                                        {data[
                                          `iv${volatilityParam.days}call`
                                        ] &&
                                        data[`iv${volatilityParam.days}call`][
                                          index
                                        ]
                                          ? `${data[
                                              `iv${volatilityParam.days}call`
                                            ][index].toFixed(2)} %`
                                          : '-'}
                                      </td>
                                      <td>
                                        {data[`iv${volatilityParam.days}put`] &&
                                        data[`iv${volatilityParam.days}put`][
                                          index
                                        ]
                                          ? `${data[
                                              `iv${volatilityParam.days}put`
                                            ][index].toFixed(2)} %`
                                          : '-'}
                                      </td>
                                      <td className='up'>
                                        {data[`ratio`] && data[`ratio`][index]
                                          ? `${data[`ratio`][index].toFixed(
                                              2
                                            )} %`
                                          : '-'}
                                      </td>
                                    </>
                                  )}
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {isLoading && (
          <div
            style={{
              height: 450,
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CircularProgress />
          </div>
        )}
      </div>
    </div>
  );
};;;;;;;;;;;;;;;;;;;;;;;;;

export default TradingIdea;
