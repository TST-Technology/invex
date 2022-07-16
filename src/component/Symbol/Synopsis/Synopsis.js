import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  getCompanyProfileQuote,
  getCompanyStockPeers,
  getHistoricalPriceChart,
  getStockDividend,
  getEarnings,
} from '../../api/Symbol';
import abbreviateNumber from '../../Common/NumberFormat';
import ReadMore from '../../Common/ReadMore/ReadMore';
import { TOP_COMPETITOR_COLUMNS } from '../Constants';
import { replaceEmpty } from '../../Common/CommonFunctions';
import { CircularProgress } from '@material-ui/core';
import moment from 'moment';
import NewsImg from '../../Common/Images/news-1.png';
import SymbolChart4 from '../../Common/Images/symbol-chart-4.png';
import SymbolChart5 from '../../Common/Images/symbol-chart-5.png';
import ArrowRight from '../../Common/Images/arrow-right.png';
import Earnings from '../../Common/Images/earnings.png';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  BarChart,
  ComposedChart,
  Line,
  ScatterChart,
  Scatter,
  Legend,
  ZAxis,
} from 'recharts';
import InvexRoutes from '../../../InvexRoutes';
import { CHART_TIME_DURATION } from '../../Common/Constants';
import { TYPE } from '../Constants';

const Synopsis = ({ onChangeTab }) => {
  const { symbol } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [topCompetitors, setTopCompetitors] = useState(null);
  const [chartPeriod, setChartPeriod] = useState('1d'); //1d,1w,1m,1y,5y,max
  const [companyEssentialsData, setCompanyEssentialsData] = useState(null);
  const [ticks, setTicks] = useState([]);
  const [isChartLoading, setIsChartLoading] = useState(false);
  const [dividendChart, setDividendChart] = useState(null);
  const [earningsChart, setEarningsChart] = useState(null);
  const [dividendChartLoading, setDividendChartLoading] = useState(false);
  const [earningsChartLoading, setEarningsChartLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (symbol) {
        setIsLoading(true);

        const resp = await Promise.all([
          getCompanyProfileQuote({ symbol: symbol }),
          getCompanyStockPeers({ symbol: symbol }),
        ]);

        const data = resp[0];
        const data2 = resp[1];
        if (data && data.status == 200 && data.data) {
          setData(data.data);
        }
        if (
          data2 &&
          data2.status == 200 &&
          data2.data &&
          data2.data[0] &&
          data2.data[0].peersList
        ) {
          Promise.all(
            data2.data[0].peersList.map((company) => {
              return getCompanyProfileQuote({ symbol: company });
            })
          ).then((values) => {
            const tableData = values.map((value) => {
              return value.data;
            });
            setTopCompetitors(tableData);
          });
        }

        const chartResp = await getHistoricalPriceChart({
          symbol: symbol,
          period: chartPeriod,
        });

        setDividendChartLoading(true);

        const dividend = await getStockDividend({ symbol: symbol });
        if (
          dividend.status === 200 &&
          dividend.data &&
          dividend.data.historical
        ) {
          if (dividend.data.historical.length > 5) {
            const temp = dividend.data.historical.slice(0, 5);
            setDividendChart(temp);
          }
        }

        setDividendChartLoading(false);

        setEarningsChartLoading(true);

        const earnings = await getEarnings({ symbol: symbol.toUpperCase() });

        if (earnings && earnings.status === 200 && earnings.data) {
          if (earnings.data.length > 5) {
            const temp = earnings.data.slice(0, 5);
            setEarningsChart(temp);
          }
        }

        setIsLoading(false);

        setEarningsChartLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (symbol) {
      getCompanyEssentialsChartData();
    }
  }, [chartPeriod]);

  const getCompanyEssentialsChartData = async () => {
    setIsChartLoading(true);

    const chartResp = await getHistoricalPriceChart({
      symbol: symbol,
      period: chartPeriod,
    });

    if (chartResp && chartResp.status === 200) {
      if (chartPeriod === '1d') {
        const tempTime = [];
        const tempTicks = [];
        const chart = chartResp?.data;
        var tempArr = [];
        tempArr = chart?.map((el, i) => {
          const convertedTime = moment(el.date).format('HH:mm');
          el.minute = convertedTime;
          if (convertedTime) {
            const hour = convertedTime.substring(0, 2);
            if (!tempTime.includes(hour)) {
              tempTime.push(hour);
              tempTicks.push(convertedTime);
            }
          }
          return el;
        });

        tempArr.sort(function (a, b) {
          // Turn your strings into dates, and then subtract them
          // to get a value that is either negative, positive, or zero.
          return new Date(b.date) - new Date(a.date);
        });

        // const candleData = chart?.data
        //   ?.filter((el) => {
        //     return el.open && el.close && el.high && el.low;
        //   })
        //   .map((el) => {
        //     const convertedDate = new Date(`${el.date} ${el.minute}`);
        //     let newObj = {};
        //     newObj.x = convertedDate;
        //     newObj.y = [el.open, el.high, el.low, el.close];
        //     return newObj;
        //   });
        setTicks(tempTicks);
        setCompanyEssentialsData(tempArr);
      } else {
        const chart = chartResp?.data?.historical;
        const tempTicks = [];
        var tempArr = [];
        tempArr = chart?.map((el, i) => {
          el.marketClose = el.close;
          const convertedDate = moment(el.date).format('DD MMM YYYY');
          el.minute = convertedDate;
          tempTicks.push(convertedDate);
          return el;
        });
        setTicks(tempTicks);
        setCompanyEssentialsData(tempArr.reverse());

        // const candleData = chart?.data
        //   ?.filter((el) => {
        //     return el.open && el.close && el.high && el.low;
        //   })
        //   .map((el) => {
        //     console.log(el);
        //     let newObj = {};
        //     newObj.x = el.date;
        //     newObj.y = [el.open, el.high, el.low, el.close];
        //     return newObj;
        //   });
        // setCompanyEssentialsData(candleData);
      }
    }

    setIsChartLoading(false);
  };

  return (
    <>
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

      {!isLoading && data && (
        <div>
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='mt-4 mb-4'>
                  <h6 className='mb-4'>
                    <strong>Price Summary & Volume</strong>
                  </h6>
                  <div className='row border-bottom mb-3'>
                    <div className='col-lg-3 col-md-3'>
                      <div className='title-lt'>Open</div>
                      <span className='down'>
                        {/*  down-light-bg */}
                        <b>{data?.open}</b>
                      </span>
                    </div>
                    <div className='col-lg-3 col-md-3'>
                      <div className='title-lt'>Previous Close</div>
                      <span>
                        <b>{data?.previousClose}</b>
                      </span>
                    </div>
                    <div className='col-lg-3 col-md-3'>
                      <div className='title-lt'>Today’s Low</div>
                      <span>
                        <b>{data?.dayLow}</b>
                      </span>
                    </div>
                    <div className='col-lg-3 col-md-3'>
                      <div className='title-lt'>Today’s High</div>
                      <span>
                        <b>{data?.dayHigh}</b>
                      </span>
                    </div>
                  </div>
                  <div className='row border-bottom mb-3'>
                    <div className='col-lg-3 col-md-3'>
                      <div className='title-lt'>52 Week High</div>
                      <span>
                        <b>{data?.yearHigh}</b>
                      </span>
                    </div>
                    <div className='col-lg-3 col-md-3'>
                      <div className='title-lt'>52 Week Low</div>
                      <span>
                        <b>{data?.yearLow}</b>
                      </span>
                    </div>
                    <div className='col-lg-3 col-md-3'>
                      <div className='title-lt '>Latest Volume</div>
                      <span className='up'>
                        {/* up-light-bg */}
                        <b>{abbreviateNumber(data?.volume)}</b>
                      </span>
                    </div>
                    <div className='col-lg-3 col-md-3'>
                      <div className='title-lt'>Average Volume</div>
                      <span>
                        <b>{abbreviateNumber(data?.avgVolume)}</b>
                      </span>
                    </div>
                  </div>
                </div>
                <div className='mt-4 mb-4'>
                  <h6 className='mb-4'>
                    <strong>Company Essentials</strong>
                  </h6>
                  <div className='row border-bottom mb-3'>
                    <div className='col-lg-3 col-md-3'>
                      <div className='title-lt'>Market Cap</div>
                      <span>
                        <b>{abbreviateNumber(data?.marketCap)}</b>
                      </span>
                    </div>
                    <div className='col-lg-3 col-md-3'>
                      <div className='title-lt'>Shares Outstanding</div>
                      <span>
                        <b>{abbreviateNumber(data?.sharesOutstanding)}</b>
                      </span>
                    </div>
                    <div className='col-lg-3 col-md-3'>
                      <div className='title-lt'>EPS(TTM)</div>
                      <span>
                        <b>{data?.eps}</b>
                      </span>
                    </div>
                    <div className='col-lg-3 col-md-3'>
                      <div className='title-lt'>Beta</div>
                      <span>
                        <b>{parseFloat(data?.beta).toFixed(2)}</b>
                      </span>
                    </div>
                  </div>
                  <div className='row border-bottom mb-3'>
                    <div className='col-lg-3 col-md-3'>
                      <div className='title-lt'>Enterprise Value</div>
                      <span>
                        <b>-</b>
                      </span>
                    </div>
                    <div className='col-lg-3 col-md-3'>
                      <div className='title-lt'>Next Earnings Date</div>
                      <span>
                        <b>
                          {moment(data?.earningsAnnouncement).format(
                            'YYYY/MM/DD'
                          )}
                        </b>
                      </span>
                    </div>
                    <div className='col-lg-3 col-md-3'>
                      <div className='title-lt'>Dividend Rate(TTM)</div>
                      <span>
                        <b>-</b>
                      </span>
                    </div>

                    <div className='col-lg-3 col-md-3'>
                      <div className='title-lt'>PE Ratio</div>
                      <span>
                        <b>{parseFloat(data?.pe).toFixed(2)}</b>
                      </span>
                    </div>
                  </div>
                  <div className='row border-bottom mb-3'>
                    <div className='col-lg-3 col-md-3'>
                      <div className='title-lt'>52 Weeks Change</div>
                      <span>
                        <b>-</b>
                      </span>
                    </div>
                    <div className='col-lg-3 col-md-3'>
                      <div className='title-lt'>Ex-Dividend Date</div>
                      <span>
                        <b>-</b>
                      </span>
                    </div>
                    <div className='col-lg-3 col-md-3'>
                      <div className='title-lt'>IPO Date</div>
                      <span>
                        <b>{moment(data?.ipoDate).format('YYYY/MM/DD')}</b>
                      </span>
                    </div>
                    <div className='col-lg-3 col-md-3'>
                      <div className='title-lt'>PB Ratio</div>
                      <span>
                        <b>-</b>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='price_chart mt-4 mb-5'>
                  <div className='d-flex align-items-center mb-5'>
                    <h5 className='me-auto'>
                      <strong>Company Essentials</strong>
                    </h5>
                    <div className='top_button_panel top_button_panel_light'>
                      <a
                        href='javascript:void(0)'
                        onClick={() => {
                          onChangeTab(TYPE.chart.value);
                        }}
                      >
                        View More <img src={ArrowRight} />
                      </a>
                    </div>
                  </div>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='mb-3'>
                      <label htmlFor>Absolute Return</label>
                      <span className='up up-light-bg p-1 ms-2'>+17.3%</span>
                    </div>
                    <div className='top_button_panel top_button_panel_light mb-3'>
                      {CHART_TIME_DURATION.map((duration, index) => {
                        return (
                          <button
                            key={index}
                            type='button'
                            className={`btn ${
                              chartPeriod === duration.value
                                ? 'btn-info'
                                : 'btn-light'
                            } `}
                            onClick={() => setChartPeriod(duration.value)}
                          >
                            {duration.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {isChartLoading && (
                    <div
                      style={{
                        height: 250,
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <CircularProgress />
                    </div>
                  )}

                  {!isChartLoading && (
                    <ResponsiveContainer
                      width='100%'
                      aspect={1}
                      maxHeight={250}
                    >
                      <AreaChart
                        data={companyEssentialsData}
                        margin={{ top: 10, right: 30, left: -50, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient
                            id='colorUv'
                            x1='0'
                            y1='0'
                            x2='0'
                            y2='1'
                          >
                            <stop
                              offset='5%'
                              stopColor='#8884d8'
                              stopOpacity={0.8}
                            />
                            <stop
                              offset='95%'
                              stopColor='#8884d8'
                              stopOpacity={0}
                            />
                          </linearGradient>
                          <linearGradient
                            id='colorPv'
                            x1='0'
                            y1='0'
                            x2='0'
                            y2='1'
                          >
                            <stop
                              offset='5%'
                              stopColor='#82ca9d'
                              stopOpacity={0.8}
                            />
                            <stop
                              offset='95%'
                              stopColor='#82ca9d'
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <XAxis
                          dataKey='minute'
                          axisLine={false}
                          ticks={ticks}
                          tick={{ fill: '#212121', fontSize: '12px' }}
                          padding={{ top: 20 }}
                          domain={['auto', 'auto']}
                          interval={chartPeriod === '1d' ? 0 : ''}
                        />
                        <YAxis axisLine={false} tick={false} />
                        <Tooltip />
                        <Area
                          connectNulls
                          type='monotone'
                          dataKey='close'
                          stroke='#82ca9d'
                          fillOpacity={1}
                          fill='url(#colorPv)'
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-12 mb-5'>
            <div className='row'>
              <div className='col-lg-4 border-end pe-4'>
                {/* company profile box start*/}
                <div className='mb-4'>
                  <div className='description-para read-more-container'>
                    <h5 className='mb-4'>
                      <strong>Company Info</strong>
                    </h5>
                    <div className='key_status'>
                      <ReadMore text={data?.description} limit={250} />

                      <ul className='mt-3'>
                        <li>
                          <a href='javascript:void(0)'>Website</a>{' '}
                          <span>{data?.website}</span>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>Employees</a>{' '}
                          <span>
                            abbreviateNumber(data?.fullTimeEmployees)}
                          </span>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>Country</a>{' '}
                          <span>{data?.country}</span>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>CEO</a>{' '}
                          <span>{data?.ceo}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* company profile box end*/}
              </div>
              <div className='col-lg-4 border-end pe-4'>
                <div className='d-flex align-items-center mb-5'>
                  <h5 className='me-auto'>
                    <strong>Earnings</strong>
                  </h5>
                </div>

                {earningsChartLoading && (
                  <div
                    style={{
                      height: 200,
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <CircularProgress />
                  </div>
                )}

                {!earningsChartLoading && (
                  <ResponsiveContainer width='100%' aspect={1} maxHeight={250}>
                    <ComposedChart
                      data={earningsChart}
                      margin={{
                        top: 20,
                        right: 40,
                        bottom: 20,
                        left: 20,
                      }}
                    >
                      <XAxis
                        axisLine={false}
                        dataKey='date'
                        tick={{ fill: '#212121', fontSize: '10px' }}
                        padding={{ top: 20 }}
                        domain={['auto', 'auto']}
                        interval={0}
                      />
                      <YAxis
                        axisLine={false}
                        tick={{ fill: '#212121', fontSize: '10px' }}
                      />
                      <Tooltip />
                      <Legend wrapperStyle={{ bottom: -20, left: 25 }} />
                      <Area
                        connectNulls
                        type='monotone'
                        name='Actual Value'
                        dataKey='actualEarningResult'
                        stroke='#82ca9d'
                        fillOpacity={1}
                        fill='url(#colorPv)'
                      />
                      <Scatter
                        name='Assumption'
                        dataKey='estimatedEarning'
                        fill='#3751FF'
                      />
                      <ZAxis range={[250, 250]} />
                    </ComposedChart>
                  </ResponsiveContainer>
                )}
              </div>
              <div className='col-lg-4'>
                <div className='d-flex align-items-center mb-5'>
                  <h5 className='me-auto'>
                    <strong>Dividends &amp; Splits</strong>
                  </h5>
                  <div className='top_button_panel top_button_panel_light'>
                    <Link
                      to={InvexRoutes.Divident.path.replace(':symbol', symbol)}
                    >
                      View More <img src={ArrowRight} />
                    </Link>
                  </div>
                </div>

                {dividendChartLoading && (
                  <div
                    style={{
                      height: 200,
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <CircularProgress />
                  </div>
                )}

                {!dividendChartLoading && (
                  <ResponsiveContainer width='100%' aspect={1} maxHeight={250}>
                    <BarChart data={dividendChart} barSize={25} barGap={20}>
                      <XAxis
                        dataKey='date'
                        tickFormatter={(date) => {
                          return moment(date).format('YYYY/MM/DD');
                        }}
                        axisLine={false}
                        tick={{ fill: '#212121', fontSize: '10px' }}
                        interval={0}
                      />
                      <YAxis
                        axisLine={false}
                        tick={{ fill: '#212121', fontSize: '10px' }}
                      />
                      <Tooltip />

                      <Legend wrapperStyle={{ bottom: -20, left: 25 }} />

                      <Bar dataKey='dividend' fill='#3751FF' name='Dividend' />
                      {/* {volume === 'VOLUME_CALL_PUT' && (
                      <Bar dataKey='put' fill='#82ca9d' />
                    )} */}
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>
          </div>
          <div className='col-lg-12'>
            <div className='top_competitors'>
              <div className='mb-5'>
                <div className='d-flex align-items-center justify-content-between'>
                  <h5 className='m-0 mb-3'>
                    <strong>Top Competitors</strong>
                  </h5>
                </div>
                <div className='table-responsive'>
                  {topCompetitors && (
                    <table className='table table-bordered m-0 most_tables'>
                      <thead class='table-light'>
                        <tr>
                          {TOP_COMPETITOR_COLUMNS &&
                            TOP_COMPETITOR_COLUMNS.map((heading, index) => {
                              return (
                                <th key={index} scope='col'>
                                  {heading}
                                </th>
                              );
                            })}
                        </tr>
                      </thead>
                      <tbody className='border-top-0'>
                        {topCompetitors.map((row, index) => {
                          return (
                            <tr key={index}>
                              <td>{replaceEmpty(row?.symbol)}</td>
                              <td>
                                {row?.price ? row?.price.toFixed(2) : '-'}
                              </td>
                              <td>
                                {row?.marketCap
                                  ? abbreviateNumber(row?.marketCap)
                                  : '-'}
                              </td>
                              <td>
                                {row?.beta
                                  ? parseFloat(row?.beta).toFixed(2)
                                  : '-'}
                              </td>
                              <td>
                                {row?.pe ? parseFloat(row?.pe).toFixed(2) : '-'}
                              </td>
                              <td>{replaceEmpty(row?.eps)}</td>
                              <td>-</td>
                              <td>-</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-12'>
            <div className='market_news mb-5'>
              <div className='d-flex align-items-center justify-content-between'>
                <h5 className='m-0'>
                  <strong>Company News</strong>
                </h5>
                <a href='javascript:void(0)' className='text-dark viewmore'>
                  View More
                </a>
              </div>
              <div className='row'>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, index) => {
                  return (
                    <div className='col-lg-4' key={index}>
                      <div className='news_block mt-3 mb-3'>
                        <div className='news_img'>
                          <a href='javascript:void(0);'>
                            <img
                              src={NewsImg}
                              className='img-fluid'
                              alt='news_image'
                            />
                          </a>
                        </div>
                        <div className='news_content'>
                          <a href='javascript:void(0);' className='text-dark'>
                            <h5>
                              Lucid shares soar on news of first electric sedan
                              deliveries
                            </h5>
                          </a>
                          <a
                            href='javascript:void(0);'
                            className='text-primary'
                          >
                            Business
                          </a>
                          <span> · Money Wise</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};;;;

export default Synopsis;
