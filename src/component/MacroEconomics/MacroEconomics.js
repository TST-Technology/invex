import React, { useState, useEffect } from 'react';
import {
  getMacroEconomicsData,
  getMacroEconomicsChartData,
} from '../api/MacroEconomicsApi';
import { allDropdownOptions } from './Data';
import { CircularProgress } from '@material-ui/core';
import {
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
} from 'recharts';
import MacroImg from '../Common/Images/options-aapl-2.png';
import moment from 'moment';

const MacroEconomics = () => {
  const [macroEconomics, setMacroEconomics] = useState(null);
  const [economicData, setEconomicData] = useState(null);
  const [activeTab, setActiveTab] = useState('Treasuries');
  const [subActiveTab, setSubActiveTab] = useState('Daily Treasury Rates');
  const [chartParam, setChartParam] = useState();
  const [helperText, setHelperText] = useState();
  const [chartData, setChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMacroEconomics();
  }, []);

  useEffect(() => {
    if (activeTab) {
      macroEconomics &&
        Object.entries(macroEconomics).map((data, index) => {
          const name = data[0];
          const values = data[1];
          if (name === activeTab) {
            values.map((row) => {
              if (row?.sub_category === subActiveTab) {
                row.options = allDropdownOptions[row?.sub_category];
                setEconomicData(row);
                const param = {
                  symbol: allDropdownOptions[row?.sub_category][0].label,
                  category: getCategoryParam(activeTab),
                };
                if (!chartParam?.range) {
                  param.range = '3m';
                }
                setChartParam({ ...chartParam, ...param });
                setHelperText(allDropdownOptions[row?.sub_category][0].value);
              }
            });
          }
        });
    }
  }, [activeTab, subActiveTab, macroEconomics]);

  useEffect(() => {
    (async () => {
      if (chartParam) {
        const param = `?symbol=${chartParam.symbol}&range=${chartParam.range}&category=${chartParam.category}`;

        const data = await getMacroEconomicsChartData(param);
        if (data && data.status === 200) {
          const tempData = data.data.map((row) => {
            let newObj = {};
            const convertedDate = moment
              .unix(row.date / 1000)
              .format('DD MMM YYYY');
            newObj.val = row.value;
            newObj.date = convertedDate;
            return newObj;
          });
          setChartData(tempData);
        }

        economicData.options.map((row) => {
          if (row.label === chartParam.symbol) {
            setHelperText(row.value);
          }
        });
      }
    })();
  }, [chartParam]);

  const getMacroEconomics = async () => {
    setIsLoading(true);
    const mainCategory = [];
    const tempData = [];
    const data = await getMacroEconomicsData();
    if (data && data.status === 'success') {
      // setMacroEconomics(data.data);
      data.data.map((row) => {
        if (!mainCategory.includes(row?.main_category)) {
          const temp = [];
          temp.push(row);
          tempData[row?.main_category] = temp;
          mainCategory.push(row?.main_category);
        } else {
          const temp = tempData[row?.main_category];
          temp.push(row);
          tempData[row?.main_category] = temp;
        }
      });
      setMacroEconomics(tempData);
    }
    setIsLoading(false);
  };

  const getCategoryParam = (category) => {
    if (category === 'Treasuries') {
      return 'treasury';
    }

    if (category === 'Commodities') {
      return 'energy';
    }

    if (category === 'Economic Data') {
      return 'economic';
    }

    if (category === 'Rates') {
      return 'rates';
    }

    if (category === 'Mortgage') {
      return 'mortgage';
    }

    return '';
  };

  return (
    <>
      {!isLoading && macroEconomics && (
        <div className='main'>
          <section className='sectors_sec'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-4'>
                  <div className='leftsidefilter mb-5'>
                    <div className='new_scenr_btn'>
                      <h4 className='m-0'>Macro Economics</h4>
                    </div>

                    <div className='accordion' id='acc_sidefilter'>
                      {macroEconomics &&
                        Object.entries(macroEconomics).map((data, index) => {
                          return (
                            <div className='in_acc_item' key={index}>
                              <h2 className='in_acc_header' id='acc_commu_serv'>
                                <button
                                  className={`accordion-button ${
                                    activeTab === data[0]
                                      ? 'active'
                                      : 'collapsed'
                                  }`}
                                  onClick={() => {
                                    setActiveTab(data[0]);
                                    setSubActiveTab(data[1][0]?.sub_category);
                                  }}
                                  type='button'
                                >
                                  <span className='d-block w-100'>
                                    {data[0]}
                                    <a className='float-end me-3 pe-3 text-secondary'>
                                      {data[1].length}
                                    </a>
                                  </span>
                                </button>
                              </h2>
                              <div
                                id='coll_commu_serv'
                                className={`accordion-collapse ${
                                  activeTab === data[0] ? '' : 'collapse'
                                }`}
                                aria-labelledby='acc_commu_serv'
                                data-bs-parent='#acc_sidefilter'
                              >
                                <div className='in_acc_body'>
                                  <ul>
                                    {data[1].map((row, i) => {
                                      return (
                                        <li
                                          key={i}
                                          className={`${
                                            activeTab === row?.main_category &&
                                            subActiveTab === row?.sub_category
                                              ? 'active'
                                              : ''
                                          }`}
                                          onClick={() => {
                                            setActiveTab(row?.main_category);
                                            setSubActiveTab(row?.sub_category);
                                          }}
                                        >
                                          <a href='javascript:void(0)'>
                                            {row?.sub_category}
                                          </a>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
                {economicData && (
                  <>
                    <div className='col-lg-8'>
                      <div className='row'>
                        <div className='col-lg-12 mb-5'>
                          <div className='card companyviewblk compprofile_block mb-5'>
                            <div className='card-header'>
                              <div className='d-flex align-items-center justify-content-left bg-light p-2 border-bottom-0'>
                                <h6 className='m-0'>
                                  <strong>
                                    Industrials: Aerospace &amp; Defense
                                  </strong>
                                </h6>
                              </div>
                            </div>
                            <div className='card-body'>
                              <div className='description-para'>
                                <div className='key_status'>
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: economicData
                                        ? economicData?.definition
                                        : '-',
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='mt-5 mb-5'>
                            <h6 className='mb-4'>
                              <strong>Consumer Price Index Chart</strong>
                            </h6>
                            <div className='top_button_panel justify-content-between mt-4 mb-3'>
                              <div className='d-flex align-items-center'>
                                <button
                                  type='button'
                                  className={`btn ${
                                    chartParam.range === '3m'
                                      ? 'btn-info'
                                      : 'btn-light'
                                  }`}
                                  onClick={() =>
                                    setChartParam({
                                      ...chartParam,
                                      range: '3m',
                                    })
                                  }
                                >
                                  {' '}
                                  3M
                                </button>
                                <button
                                  type='button'
                                  className={`btn ${
                                    chartParam.range === '6m'
                                      ? 'btn-info'
                                      : 'btn-light'
                                  }`}
                                  onClick={() =>
                                    setChartParam({
                                      ...chartParam,
                                      range: '6m',
                                    })
                                  }
                                >
                                  {' '}
                                  6M
                                </button>
                                <button
                                  type='button'
                                  className={`btn ${
                                    chartParam.range === '1y'
                                      ? 'btn-info'
                                      : 'btn-light'
                                  }`}
                                  onClick={() =>
                                    setChartParam({
                                      ...chartParam,
                                      range: '1y',
                                    })
                                  }
                                >
                                  {' '}
                                  1Y
                                </button>
                                {/* <button type='button' className='btn btn-light'>
                              {' '}
                              Max
                            </button> */}
                              </div>
                              <div>
                                <select
                                  className='form-select me-3'
                                  aria-label='Default select example'
                                  onChange={(e) => {
                                    setChartParam({
                                      ...chartParam,
                                      symbol: e.target.value,
                                    });
                                  }}
                                >
                                  {economicData?.options.map((option, i) => {
                                    return (
                                      <option key={i} value={option.label}>
                                        {option.label}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>

                            {chartData &&
                              Array.isArray(chartData) &&
                              chartData.length > 0 && (
                                <ResponsiveContainer
                                  width='100%'
                                  aspect={1}
                                  maxHeight={400}
                                >
                                  <LineChart data={chartData} tick={false}>
                                    <XAxis
                                      dataKey='date'
                                      axisLine={false}
                                      domain={['auto', 'auto']}
                                      // ticks={ticks}
                                      tick={{
                                        fill: '#212121',
                                        fontSize: '10px',
                                      }}
                                    />
                                    <YAxis
                                      axisLine={false}
                                      tick={{
                                        fill: '#212121',
                                        fontSize: '10px',
                                      }}
                                    />
                                    <Tooltip />

                                    <Line fill='#7D8EFE' dataKey='val'></Line>
                                  </LineChart>
                                </ResponsiveContainer>
                              )}

                            <div className='d-flex justify-content-end mt-4'>
                              <p>*{helperText}</p>
                            </div>

                            <div
                              className='mt-4'
                              dangerouslySetInnerHTML={{
                                __html: economicData
                                  ? economicData?.data_source
                                  : '',
                              }}
                            />
                            <br />
                            <div
                              dangerouslySetInnerHTML={{
                                __html: economicData
                                  ? economicData?.explanation
                                  : '',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='card companyviewblk compprofile_block mb-5'>
                        <div className='card-header'>
                          <div className='d-flex align-items-center justify-content-left bg-light p-2 border-bottom-0'>
                            <h6 className='m-0'>
                              <strong>Notes On Consumer Price Index</strong>
                            </h6>
                          </div>
                        </div>
                        <div className='card-body'>
                          <div className='description-para'>
                            <div className='key_status'>
                              <p>
                                There are two participants in the private
                                sectors: Consumers and Businesses. With regards
                                to Inflation/Deflation we must look at both in
                                order to gauge what is normal and what is
                                outside the bounds of normality.
                                <br />
                                For Consumers we look at the following Inflation
                                statistics:
                                <br />
                                1) Consumer Price Index All Items (CPIAUCSL)
                                <br />
                                2) Consumer Price Index(CPI) All Items ex' Food
                                &amp; Energy (CPILFESL)
                                <br />
                                <br />
                                For Businesses we look at the following
                                Inflation statistics:
                                <br />
                                1) Producer Price Index Final Demand(PPIFIS)
                                <br />
                                2) Producer Price Index Final Demand ex' Food
                                &amp; Energy(PPIFES)
                              </p>
                              <br />
                              <p>
                                The CPI is constructed by taking the weighted
                                averages of prices on a wide variety of items
                                which are assigned weights representing their
                                importance within groups. Prices are collected
                                monthly from 4000 Housing units and around 26000
                                Retail establushments across 87 Urban areas of
                                the US. However, The CPI is a coincident
                                indicator, i.e, it tells you what is happening
                                in the Economy now rather than in the future. It
                                is still useful because the Monetary Authorities
                                like the Fed' are reactionary and therefore
                                Interest Rate policy based on Inflationary
                                Expectations will be affected.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        </div>
      )}

      {isLoading && (
        <div
          style={{
            height: 600,
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default MacroEconomics;
