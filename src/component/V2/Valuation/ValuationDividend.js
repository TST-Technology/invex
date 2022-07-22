import React, { useEffect, useState } from 'react';
import { NormalFormat } from '../../Common/NumberFormat';
import CompanyView from '../../Options/Quote/CompanyView/CompanyView';
import {
  millionToBillionConvert,
  replaceEmpty,
  capitalizeFirstLetterOfEachWord,
  replaceEmptyWithNumberPreFix,
  replaceEmptyWithPostFix,
} from '../../Common/CommonFunctions';
import { getManualValuationDividendData } from '../../api/valuation';
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  LabelList,
  LineChart,
  Scatter,
  ZAxis,
  AreaChart,
  Area,
} from 'recharts';
import { CustomizedGrowthRateLabelV2 } from '../../Common/Chart/Recharts';
import moment from 'moment';

const ValuationDividend = ({ allData, companyQuote }) => {
  const [data, setData] = useState();
  const [companyValuation, setCompanyValuation] = useState();
  const [valuationOutput, setValuationOutput] = useState(null);
  const [expectedGrowthRate, setExpectedGrowthRate] = useState(null);
  const [payoutRatioGraph, setPayoutRatioGraph] = useState(null);
  const [priceTarget, setPriceTarget] = useState(null);
  const [valuationOutputFilter, setValuationOutputFilter] = useState('best');
  const [pastPredictionGraphData, setPastPredictionGraphData] = useState(null);
  const [estimatedValue, setEstimatedValue] = useState(null);
  const [percent, setPercent] = useState(null);
  const [costOfEquity, setCostOfEquity] = useState(null);
  const [payoutRatio, setPayoutRatio] = useState(null);
  const [viewAs, setViewAs] = useState('chart');
  const [manualParam, setManualParam] = useState(null);
  const [manualChartData, setManualChartData] = useState(null);
  const [manualButtonVisible, setManualButtonVisible] = useState(false);
  const [dpsPresentValue, setDpsPresentValue] = useState(null);
  const [calculatedPercentage, setCalculatedPercentage] = useState(null);
  const yearArr = [
    'base_year',
    'year_1',
    'year_2',
    'year_3',
    'year_4',
    'year_5',
    'year_6',
    'year_7',
    'year_8',
    'year_9',
    'year_10',
    'terminal',
  ];
  const validTableColumns = [
    'Earnings Per Share',
    'Expected Growth Rate',
    'Dividends Per Share',
    'Payout Ratio',
    'Price Target',
  ];

  const CASE_FILTER = [
    { label: 'Best case', value: 'best' },
    { label: 'Base care', value: 'base' },
    { label: 'Worst care', value: 'worst' },
    { label: 'Manual', value: 'manual' },
  ];

  useEffect(() => {
    (async () => {
      if (allData) {
        setData(allData);
        if (
          allData &&
          allData.DivDisModelInputs &&
          allData.DivDisModelInputs[0]
        ) {
          setCompanyValuation(allData.DivDisModelInputs[0]);

          const pastPrediction = allData.DivDisModelInputs.map((val) => {
            let best, base, worst, actualPrice;

            val &&
              val?.DivdiscountOutputs.forEach((ele) => {
                if (ele.input_case === 'base') {
                  base = ele.stock_value;
                  actualPrice = ele.current_price;
                }
                if (ele.input_case === 'best') {
                  best = ele.stock_value;
                }
                if (ele.input_case === 'worst') {
                  worst = ele.stock_value;
                }
              });
            let tempObj = {};
            tempObj.year = `${val.fiscal_year} ${val.quarter}`;
            tempObj.best = best;
            tempObj.worst = worst;
            tempObj.base = base;
            tempObj.actualPrice = actualPrice;
            tempObj.filterYear = val.fiscal_year;
            tempObj.filterQuarter = val.quarter && val.quarter[1];

            return tempObj;
          });

          if (pastPrediction && pastPrediction.length > 4) {
            pastPrediction = pastPrediction.slice(0, 4);
          }

          pastPrediction.sort(function (a, b) {
            return (
              b.filterYear - a.filterYear || b.filterQuarter - a.filterQuarter
            );
          });

          setPastPredictionGraphData(pastPrediction);
        }
      }
    })();
  }, []);

  useEffect(() => {
    if (companyValuation) {
      getValuationOutput();
      companyValuation?.YearlyDivdiscountOutputs.forEach((element, index) => {
        if (
          element?.input_case &&
          element?.field_name &&
          element?.input_case === 'base' &&
          element?.field_name === 'Cost of Equity'
        ) {
          setCostOfEquity(element?.base_year);
        }

        if (
          element?.input_case &&
          element?.field_name &&
          element?.input_case === 'base' &&
          element?.field_name === 'Payout Ratio'
        ) {
          setPayoutRatio(element?.base_year);
        }
      });
    }
  }, [companyValuation]);

  useEffect(() => {
    getValuationOutput();
  }, [valuationOutputFilter]);

  useEffect(() => {
    if (valuationOutput) {
      valuationOutput.forEach((valuation, index) => {
        switch (valuation?.field_name) {
          case 'Earnings Per Share':
            const epsData = getGraphData(valuation);

            const growthRatio = valuationOutput.find(
              (elem) => elem?.field_name === 'Expected Growth Rate'
            );

            let tempGrowth = [];
            Object.keys(growthRatio).forEach((key) => {
              if (yearArr.includes(key)) {
                tempGrowth.push(growthRatio[key]);
              }
            });
            const tempEarnings = epsData.map((row, index) => {
              row.data2 = tempGrowth[index];
              return row;
            });
            setExpectedGrowthRate(tempEarnings);
            break;

          case 'Dividends Per Share':
            const dpsData = getGraphData(valuation);

            const payout = valuationOutput.find(
              (elem) => elem?.field_name === 'Payout Ratio'
            );
            let tempPayout = [];
            Object.keys(payout).forEach((key) => {
              if (yearArr.includes(key)) {
                tempPayout.push(payout[key]);
              }
            });
            const data = dpsData.map((row, index) => {
              row.data2 = tempPayout[index];
              return row;
            });
            setPayoutRatioGraph(data);

            break;

          case 'Price Target':
            const priceTarget = getGraphData(valuation);
            priceTarget.map((price, index) => {
              if (index === 0) {
                price.data = companyQuote?.price;
              }
              return price;
            });
            setPriceTarget(priceTarget);
            break;

          case 'Present Value':
            const presentValue = getGraphData(valuation);

            const costOfEquity = valuationOutput.find(
              (elem) => elem?.field_name === 'Cost of Equity'
            );

            let tempArr = [];

            Object.keys(costOfEquity).forEach((key) => {
              if (yearArr.includes(key)) {
                tempArr.push(costOfEquity[key]);
              }
            });

            const temp = presentValue.map((row, index) => {
              row.data2 = tempArr[index];
              return row;
            });

            setDpsPresentValue(temp);
            break;

          case 'Cost of Equity':
            break;
        }
      });
    }
  }, [valuationOutput]);

  useEffect(() => {
    if (manualParam) {
      getManualParamData();
    }
  }, [manualParam]);

  useEffect(() => {
    if (manualChartData) {
      setValuationOutput([...manualChartData]);
    }
  }, [manualChartData]);

  useEffect(() => {
    const tempCalculatedPercentage = (
      (estimatedValue?.current_price - estimatedValue?.stock_value) /
      estimatedValue?.current_price
    ).toFixed(2);
    setCalculatedPercentage(tempCalculatedPercentage);
  }, [estimatedValue]);

  const getGraphData = (valuation) => {
    const publishDate = new Date(companyValuation?.publish_date);
    let year = moment(publishDate).format('YYYY');
    let tempArr = [];
    Object.keys(valuation).forEach((key) => {
      if (yearArr.includes(key)) {
        year = parseInt(year) + 1;
        let newObj = {};
        newObj.year = year;
        newObj.data = valuation[key];
        if (key === 'base_year') {
          newObj.year = 'Base';
        }

        if (key === 'terminal') {
          newObj.year = 'Terminal';
        }

        tempArr.push(newObj);
      }
    });
    return tempArr;
  };

  const getValuationOutput = () => {
    if (valuationOutputFilter === 'manual') {
      setValuationOutput(manualChartData);
    } else {
      const tempValuationOutput =
        companyValuation?.YearlyDivdiscountOutputs.filter((element) => {
          return element.input_case === valuationOutputFilter;
        });

      setValuationOutput(tempValuationOutput);

      companyValuation?.DivdiscountOutputs.forEach((element) => {
        if (element.input_case === valuationOutputFilter) {
          setEstimatedValue(element);
          setPercent(
            (
              ((element?.stock_value - element?.current_price) /
                element?.current_price) *
              100
            ).toFixed(2)
          );
        }
      });
    }
  };

  const CustomizedLabel = (props) => {
    const { x, y, stroke, value } = props;

    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor='middle'>
        {/* {`$${millionToBillionConvert(value)}`} */}
        {`$${value}`}
      </text>
    );
  };

  const renderCustomizedLabel = (props) => {
    const { x, y, width, height, value } = props;
    const radius = 10;

    return (
      <g>
        <text
          x={x + width / 2}
          y={y - radius}
          fill='#000'
          textAnchor='middle'
          dominantBaseline='middle'
          fontSize={10}
        >
          {`$${millionToBillionConvert(value)}`}
        </text>
      </g>
    );
  };

  const renderCustomizedLabelWithoutBillion = (props) => {
    const { x, y, width, height, value } = props;
    const radius = 10;

    return (
      <g>
        <text
          x={x + width / 2}
          y={y - radius}
          fill='#000'
          textAnchor='middle'
          dominantBaseline='middle'
          fontSize={10}
        >
          {`$${value}`}
        </text>
      </g>
    );
  };

  const handleManualParamChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setManualParam({ ...manualParam, [name]: parseInt(value) });
  };

  const getManualParamData = async () => {
    const manualData = await getManualValuationDividendData({
      ...manualParam,
      valuation_id: companyValuation.id,
    });
    if (manualData?.yearlyOutput) {
      setManualChartData([...manualData?.yearlyOutput]);
      setManualButtonVisible(true);
    }
  };

  const renderCustomizedLabelPrice = (props) => {
    const { x, y, width, height, value } = props;
    const radius = 10;

    return (
      <g>
        <text
          x={x}
          y={y - 20}
          fill='#000'
          textAnchor='middle'
          dominantBaseline='middle'
          fontSize={10}
        >
          {value ? `$${value}` : ''}
        </text>
      </g>
    );
  };

  return (
    <>
      <div>
        <div className='col-lg-12'>
          <div className='row'>
            <div className='col-lg-12 mt-4'>
              <div className='d-flex align-items-center mb-3'>
                <h4 className='me-auto font-bd'>
                  Moderna Inc Stock Forecast, Predictions & Price Target
                </h4>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='mt-3 mb-4'>
                <div className='d-flex align-items-center mb-3'>
                  <h5 className='me-auto font-bd'>Basic Company Facts</h5>
                </div>
                <div className='row border-bottom mb-3'>
                  <div className='col-lg-4 col-md-4'>
                    <div className='title-lt'>Fiscal Year</div>
                    <span>
                      <b>
                        {companyValuation?.fiscal_year}{' '}
                        {companyValuation?.quarter}
                      </b>
                    </span>
                  </div>
                  <div className='col-lg-4 col-md-4'>
                    <div className='title-lt'>Company Ticker</div>
                    <span>
                      <b>{data?.ticker}</b>
                    </span>
                  </div>
                  <div className='col-lg-4 col-md-4'>
                    <div className='title-lt'>Incorporation Cou...</div>
                    <span>
                      <b>{data?.incorporation_country}</b>
                    </span>
                  </div>
                </div>
                <div className='row border-bottom mb-3'>
                  <div className='col-lg-4 col-md-4'>
                    <div className='title-lt'>Valuation Currency</div>
                    <span>
                      <b>{data?.valuation_currency}</b>
                    </span>
                  </div>
                  <div className='col-lg-4 col-md-4'>
                    <div className='title-lt'>Sector (US)</div>
                    <span>
                      <b>{companyQuote?.sector}</b>
                    </span>
                  </div>
                  <div className='col-lg-4 col-md-4'>
                    <div className='title-lt'>Industry (US)</div>
                    <span>
                      <b>{companyQuote?.industry}</b>
                    </span>
                  </div>
                </div>
                <div className='row border-bottom mb-3'>
                  <div className='col-lg-4 col-md-4'>
                    <div className='title-lt'>Market Cap</div>
                    <span>
                      <b>
                        {companyQuote?.marketCap
                          ? `$${NormalFormat(companyQuote?.marketCap)}`
                          : '-'}
                      </b>
                    </span>
                  </div>
                  <div className='col-lg-4 col-md-4'>
                    <div className='title-lt'>Current Stock Price</div>
                    <span>
                      <b>
                        {companyQuote?.price
                          ? `$${NormalFormat(companyQuote?.price)}`
                          : '-'}
                      </b>
                    </span>
                  </div>
                </div>
              </div>
              <div className='mt-4 mb-4'>
                <div className='d-flex align-items-center mb-3'>
                  <h5 className='me-auto font-bd'>
                    Company’s Current Finantials
                  </h5>
                </div>
                <div className='row border-bottom mb-3'>
                  <div className='col-lg-4 col-md-4'>
                    <div className='title-lt'>Net Income</div>
                    <span>
                      <b>
                        {companyValuation?.net_income
                          ? `$${millionToBillionConvert(
                              companyValuation?.net_income
                            )}`
                          : '-'}
                      </b>
                    </span>
                  </div>
                  <div className='col-lg-4 col-md-4'>
                    <div className='title-lt'>Book Value(Current Year)</div>
                    <span>
                      <b>
                        {companyValuation?.equity_book_value
                          ? `$${millionToBillionConvert(
                              companyValuation?.equity_book_value
                            )}`
                          : '-'}
                      </b>
                    </span>
                  </div>
                  <div className='col-lg-4 col-md-4'>
                    <div className='title-lt'>Current Earnings per share</div>
                    <span>
                      <b>
                        {companyValuation?.current_earning_per_share
                          ? `$${companyValuation?.current_earning_per_share}`
                          : '-'}
                      </b>
                    </span>
                  </div>
                </div>
                <div className='row border-bottom mb-3'>
                  <div className='col-lg-4 col-md-4'>
                    <div className='title-lt'>Current Dividends</div>
                    <span>
                      <b>
                        {companyValuation?.current_dividends_per_share
                          ? `$${companyValuation?.current_dividends_per_share}`
                          : '-'}
                      </b>
                    </span>
                  </div>
                  <div className='col-lg-4 col-md-4'>
                    <div className='title-lt'>Cost Of Equity</div>
                    <span>
                      <b>{costOfEquity ? `${costOfEquity}%` : '-'}</b>
                    </span>
                  </div>
                  <div className='col-lg-4 col-md-4'>
                    <div className='title-lt'>Return On Equity</div>
                    <span>
                      <b>
                        {companyValuation?.net_income &&
                        companyValuation?.prev_equity_book_value
                          ? `${parseFloat(
                              (companyValuation?.net_income /
                                companyValuation?.prev_equity_book_value) *
                                100
                            ).toFixed(2)}%`
                          : '-'}
                      </b>
                    </span>
                  </div>
                </div>
                <div className='row border-bottom mb-3'>
                  <div className='col-lg-4 col-md-4'>
                    <div className='title-lt'>Payout Ratio</div>
                    <span>
                      <b>{payoutRatio ? `${payoutRatio}%` : '-'}</b>
                    </span>
                  </div>
                  <div className='col-lg-4 col-md-4'>
                    <div className='title-lt'>Retention Ratio</div>
                    <span>
                      <b>
                        {companyValuation?.current_dividends_per_share &&
                        companyValuation?.current_earning_per_share
                          ? `${parseFloat(
                              (companyValuation?.current_dividends_per_share /
                                companyValuation?.current_earning_per_share) *
                                100
                            ).toFixed(2)}%`
                          : '-'}
                      </b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='price_chart mt-4 mb-5'>
                <div className='d-flex align-items-center mb-3'>
                  <h5 className='me-auto font-bd'>
                    Invex Wealth Past Predictions
                  </h5>
                </div>

                {pastPredictionGraphData && (
                  <ResponsiveContainer
                    width='100%'
                    aspect={1}
                    maxHeight={500}
                    className='mb-5'
                  >
                    <ComposedChart
                      data={pastPredictionGraphData}
                      tick={false}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                      barGap={35}
                    >
                      <XAxis
                        interval={0}
                        tickLine={false}
                        dataKey='year'
                        domain={['auto', 'auto']}
                        tickLine={false}
                        tick={{ fill: '#212121', fontSize: '12px' }}
                      />
                      <YAxis
                        tickLine={false}
                        tick={{
                          fill: '#212121',
                          fontSize: '12px',
                        }}
                        tickLine={false}
                      />
                      <Tooltip />

                      <Scatter name='Best' dataKey='best' fill='#13A41B' />
                      <Scatter name='Base' dataKey='base' fill='#F3C00E' />
                      <Scatter name='Worst' dataKey='worst' fill='#DF0822' />
                      <Scatter
                        name='Actual Price'
                        dataKey='actualPrice'
                        fill='#3751FF'
                      />
                      <ZAxis range={[400, 400]} />
                      <Legend
                        wrapperStyle={{
                          bottom: -20,
                          left: 25,
                          fontSize: '12px',
                        }}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-12 mb-5'>
          <div className='mb-4'>
            <div className=''>
              <div className='d-flex align-items-center mb-3'>
                <h5 className='me-auto font-bd'>Risk</h5>
              </div>
              <div
                className='mt-3'
                dangerouslySetInnerHTML={{
                  __html: companyValuation?.risk ? companyValuation?.risk : '-',
                }}
              />
            </div>
          </div>
          <div className='mb-4'>
            <div className=''>
              <div className='d-flex align-items-center mb-3'>
                <h5 className='me-auto font-bd'>Revenue segment performance</h5>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: companyValuation?.revenue_segments
                    ? companyValuation?.revenue_segments
                    : '-',
                }}
              />
            </div>
          </div>
          <div className='mb-4'>
            <div className=''>
              <div className='d-flex align-items-center mb-3'>
                <h5 className='me-auto font-bd'>Analyst Notes</h5>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: companyValuation?.valuation_notes
                    ? companyValuation?.valuation_notes
                    : '-',
                }}
              />
            </div>
          </div>
        </div>
        <div className='col-lg-12'>
          <div className='top_competitors'>
            <div className='mb-5'>
              <div className='d-flex align-items-center justify-content-between mb-3'>
                <h5 className='me-auto font-bd'>Valuation Assumptions</h5>
              </div>
              <div className='table-responsive'>
                <table className='table table-bordered table-striped m-0 most_tables'>
                  <thead>
                    <tr>
                      <th scope='col'>-</th>
                      <th scope='col'>Best</th>
                      <th scope='col'>Base</th>
                      <th scope='col'>Worst</th>
                      <th scope='col'>Manual</th>
                    </tr>
                  </thead>
                  <tbody className='border-top-0'>
                    <tr>
                      <td>EPS Growth This Year</td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.gr_this_year_best
                          ? `${companyValuation.DivdiscModelGrowths[0]?.gr_this_year_best}%`
                          : '-'}
                      </td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.gr_this_year_base
                          ? `${companyValuation.DivdiscModelGrowths[0]?.gr_this_year_base}%`
                          : '-'}
                      </td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.gr_this_year_worst
                          ? `${companyValuation.DivdiscModelGrowths[0]?.gr_this_year_worst}%`
                          : '-'}
                      </td>
                      <td>
                        <input
                          style={{ width: '50px' }}
                          type='number'
                          name='gr_this_year_man'
                          onChange={handleManualParamChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>EPS Growth Next Year</td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.gr_next_year_best
                          ? `${companyValuation.DivdiscModelGrowths[0]?.gr_next_year_best}%`
                          : '-'}
                      </td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.gr_next_year_base
                          ? `${companyValuation.DivdiscModelGrowths[0]?.gr_next_year_base}%`
                          : '-'}
                      </td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.gr_next_year_worst
                          ? `${companyValuation.DivdiscModelGrowths[0]?.gr_next_year_worst}%`
                          : '-'}
                      </td>
                      <td>
                        <input
                          style={{ width: '50px' }}
                          type='number'
                          name='gr_next_year_man'
                          onChange={handleManualParamChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        EPS Compound Annual Revenue Growth Rate For Year 3-5
                      </td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.comp_annu_eps_gr_rate_best
                          ? `${companyValuation.DivdiscModelGrowths[0]?.comp_annu_eps_gr_rate_best}%`
                          : '-'}
                      </td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.comp_annu_eps_gr_rate_base
                          ? `${companyValuation.DivdiscModelGrowths[0]?.comp_annu_eps_gr_rate_base}%`
                          : '-'}
                      </td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.comp_annu_eps_gr_rate_worst
                          ? `${companyValuation.DivdiscModelGrowths[0]?.comp_annu_eps_gr_rate_worst}%`
                          : '-'}
                      </td>
                      <td>
                        <input
                          style={{ width: '50px' }}
                          type='number'
                          name='comp_annu_eps_gr_rate_man'
                          onChange={handleManualParamChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Payout Ratio First Year</td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.payout_ratio_first_year_best
                          ? `${companyValuation.DivdiscModelGrowths[0]?.payout_ratio_first_year_best}%`
                          : '-'}
                      </td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.payout_ratio_first_year_base
                          ? `${companyValuation.DivdiscModelGrowths[0]?.payout_ratio_first_year_base}%`
                          : '-'}
                      </td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.payout_ratio_first_year_worst
                          ? `${companyValuation.DivdiscModelGrowths[0]?.payout_ratio_first_year_worst}%`
                          : '-'}
                      </td>
                      <td>
                        <input
                          style={{ width: '50px' }}
                          type='number'
                          name='payout_ratio_first_year_man'
                          onChange={handleManualParamChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Payout Ratio Next Year</td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.payout_ratio_next_year_best
                          ? `${companyValuation.DivdiscModelGrowths[0]?.payout_ratio_next_year_best}%`
                          : '-'}
                      </td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.payout_ratio_next_year_base
                          ? `${companyValuation.DivdiscModelGrowths[0]?.payout_ratio_next_year_base}%`
                          : '-'}
                      </td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.payout_ratio_next_year_worst
                          ? `${companyValuation.DivdiscModelGrowths[0]?.payout_ratio_next_year_worst}%`
                          : '-'}
                      </td>
                      <td>
                        <input
                          style={{ width: '50px' }}
                          type='number'
                          name='payout_ratio_next_year_man'
                          onChange={handleManualParamChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Payout Ratio Year 3-5</td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.payout_ratio_five_year_best
                          ? `${companyValuation.DivdiscModelGrowths[0]?.payout_ratio_five_year_best}%`
                          : '-'}
                      </td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.payout_ratio_five_year_base
                          ? `${companyValuation.DivdiscModelGrowths[0]?.payout_ratio_five_year_base}%`
                          : '-'}
                      </td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.payout_ratio_five_year_worst
                          ? `${companyValuation.DivdiscModelGrowths[0]?.payout_ratio_five_year_worst}%`
                          : '-'}
                      </td>
                      <td>
                        <input
                          style={{ width: '50px' }}
                          type='number'
                          name='payout_ratio_five_year_man'
                          onChange={handleManualParamChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Target Payout Ratio</td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.target_payout_ratio_best
                          ? `${companyValuation.DivdiscModelGrowths[0]?.target_payout_ratio_best}%`
                          : '-'}
                      </td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.target_payout_ratio_base
                          ? `${companyValuation.DivdiscModelGrowths[0]?.target_payout_ratio_base}%`
                          : '-'}
                      </td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.target_payout_ratio_worst
                          ? `${companyValuation.DivdiscModelGrowths[0]?.target_payout_ratio_worst}%`
                          : '-'}
                      </td>
                      <td>
                        <input
                          style={{ width: '50px' }}
                          type='number'
                          name='target_payout_ratio_man'
                          onChange={handleManualParamChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Growth Phase ROE</td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.gr_phase_roe_best
                          ? `${companyValuation.DivdiscModelGrowths[0]?.gr_phase_roe_best}%`
                          : '-'}
                      </td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.gr_phase_roe_base
                          ? `${companyValuation.DivdiscModelGrowths[0]?.gr_phase_roe_base}%`
                          : '-'}
                      </td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.gr_phase_roe_worst
                          ? `${companyValuation.DivdiscModelGrowths[0]?.gr_phase_roe_worst}%`
                          : '-'}
                      </td>
                      <td>
                        <input
                          style={{ width: '50px' }}
                          type='number'
                          name='gr_phase_roe_man'
                          onChange={handleManualParamChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Stable Phase ROE</td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.stable_phase_roe_best
                          ? `${companyValuation.DivdiscModelGrowths[0]?.stable_phase_roe_best}%`
                          : '-'}
                      </td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.stable_phase_roe_base
                          ? `${companyValuation.DivdiscModelGrowths[0]?.stable_phase_roe_base}%`
                          : '-'}
                      </td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.stable_phase_roe_worst
                          ? `${companyValuation.DivdiscModelGrowths[0]?.stable_phase_roe_worst}%`
                          : '-'}
                      </td>
                      <td>
                        <input
                          style={{ width: '50px' }}
                          type='number'
                          name='stable_phase_roe_man'
                          onChange={handleManualParamChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Cost Of Equity</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>
                        <input
                          style={{ width: '50px' }}
                          type='number'
                          name='risk_free_rate_man'
                          onChange={handleManualParamChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Risk Free Rate</td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.risk_free_rate_best
                          ? `${companyValuation.DivdiscModelGrowths[0]?.risk_free_rate_best}%`
                          : '-'}
                      </td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.risk_free_rate_base
                          ? `${companyValuation.DivdiscModelGrowths[0]?.risk_free_rate_base}%`
                          : '-'}
                      </td>
                      <td>
                        {companyValuation &&
                        companyValuation.DivdiscModelGrowths[0] &&
                        companyValuation.DivdiscModelGrowths[0]
                          ?.risk_free_rate_worst
                          ? `${companyValuation.DivdiscModelGrowths[0]?.risk_free_rate_worst}%`
                          : '-'}
                      </td>
                      <td>
                        <input
                          style={{ width: '50px' }}
                          type='number'
                          name='risk_free_rate_man'
                          onChange={handleManualParamChange}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-12 mb-4'>
          <div className='d-flex align-items-center justify-content-between mb-3'>
            <h5 className='me-auto font-bd'>Valuation Output Base</h5>
          </div>
          <div
            className={`scenario justify-content-between ${
              calculatedPercentage > 0 ? 'down' : 'up'
            }`}
          >
            <span className='best_scena up-down-bg-color'>
              Estimated value / share
            </span>
            <div className='chart-text'>
              <p className='card-text up-down-color m-0'>
                <strong>
                  {estimatedValue?.stock_value
                    ? `$${estimatedValue?.stock_value.toFixed(2)}`
                    : '-'}
                </strong>
              </p>
              <p className='text up-down-color m-0 ms-2'>
                {calculatedPercentage
                  ? calculatedPercentage >= 0
                    ? `(${
                        calculatedPercentage > 0 ? 'Overvalued' : 'Undervalued'
                      } +${calculatedPercentage}%)`
                    : `(${
                        calculatedPercentage > 0 ? 'Overvalued' : 'Undervalued'
                      } ${calculatedPercentage}%)`
                  : ''}
              </p>
            </div>
            <div className='text-end text-black'>
              <p className='m-0'>
                <small>
                  Value of equity (Millions):{' '}
                  {estimatedValue?.equity_value
                    ? `${millionToBillionConvert(estimatedValue?.equity_value)}`
                    : '-'}
                </small>
              </p>
              <p className='m-0'>
                <small>
                  Current price:{' '}
                  {estimatedValue?.current_price
                    ? `$${estimatedValue?.current_price.toFixed(2)}`
                    : '-'}
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className='col-lg-12'>
          <div className='d-flex align-items-center justify-content-start'>
            <label className='mb-3 pb-2' htmlFor>
              Choose the case
            </label>
            <div className='top_button_panel top_button_panel_light mb-3'>
              {CASE_FILTER &&
                CASE_FILTER.map((caseElement) => {
                  if (caseElement.value !== 'manual') {
                    return (
                      <button
                        type='button'
                        onClick={() =>
                          setValuationOutputFilter(caseElement.value)
                        }
                        className={`btn ${
                          valuationOutputFilter === caseElement.value
                            ? 'btn-info'
                            : 'btn-light'
                        }`}
                      >
                        {caseElement.label}
                      </button>
                    );
                  } else if (
                    caseElement.value === 'manual' &&
                    manualButtonVisible
                  ) {
                    return (
                      <button
                        type='button'
                        onClick={() =>
                          setValuationOutputFilter(caseElement.value)
                        }
                        className={`btn ${
                          valuationOutputFilter === caseElement.value
                            ? 'btn-info'
                            : 'btn-light'
                        }`}
                      >
                        {caseElement.label}
                      </button>
                    );
                  }
                })}
            </div>
          </div>
        </div>
        <div className='col-lg-12'>
          <div className='top_competitors'>
            <div className='mb-5'>
              <div className='table-responsive'>
                {valuationOutput && (
                  <table className='table table-bordered table-striped m-0 most_tables'>
                    <thead>
                      <tr>
                        <th scope='col'>-</th>
                        {priceTarget &&
                          priceTarget.map((heading) => {
                            if (heading.year !== 'Terminal')
                              return <th scope='col'>{heading.year}</th>;
                          })}
                      </tr>
                    </thead>
                    <tbody className='border-top-0'>
                      {valuationOutput.map((row) => {
                        return (
                          <>
                            {validTableColumns.includes(row?.field_name) && (
                              <tr>
                                <td>
                                  {row?.field_name &&
                                    capitalizeFirstLetterOfEachWord(
                                      replaceEmpty(row?.field_name)
                                    )}
                                </td>
                                {yearArr &&
                                  yearArr.map((year) => {
                                    if (year !== 'terminal')
                                      return <td>{replaceEmpty(row[year])}</td>;
                                  })}
                              </tr>
                            )}
                          </>
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
          <div className='row'>
            <div className='col-lg-6'>
              <div className='price_chart mt-4 mb-5'>
                <div className='d-flex align-items-center mb-3'>
                  <h5 className='me-auto font-bd'>
                    Earning Per Share & Growth Rate
                  </h5>
                </div>
                {expectedGrowthRate && expectedGrowthRate.length > 0 && (
                  <div className='col-lg-12 mt-3'>
                    <ResponsiveContainer
                      width='100%'
                      aspect={1}
                      maxHeight={400}
                    >
                      <ComposedChart data={expectedGrowthRate} tick={false}>
                        <XAxis
                          interval={0}
                          tickLine={false}
                          dataKey='year'
                          domain={['auto', 'auto']}
                          tick={{
                            fill: '#212121',
                            fontSize: '12px',
                          }}
                        />
                        <YAxis
                          tickLine={false}
                          domain={['auto', 'dataMax + 5']}
                          tick={{
                            fill: '#212121',
                            fontSize: '12px',
                          }}
                        />
                        <Tooltip />

                        <Bar
                          name='Earning Per Share'
                          fill='#3751FF'
                          dataKey='data2'
                          barSize={25}
                        >
                          <LabelList
                            dataKey='data2'
                            content={renderCustomizedLabelWithoutBillion}
                          />
                        </Bar>

                        <Line
                          name='Growth Rate'
                          type='monotone'
                          dataKey='data2'
                          stroke='#F3C00E'
                          label={
                            <CustomizedGrowthRateLabelV2
                              data={expectedGrowthRate}
                            />
                          }
                        />

                        <Legend
                          wrapperStyle={{
                            bottom: -20,
                            left: 25,
                            fontSize: '12px',
                          }}
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='price_chart mt-4 mb-5'>
                <div className='d-flex align-items-center mb-3'>
                  <h5 className='me-auto font-bd'>
                    Dividend Per Share(DPS) & Payout Ratio
                  </h5>
                </div>
                {payoutRatioGraph && (
                  <div className='col-lg-12 mt-3'>
                    <ResponsiveContainer
                      width='100%'
                      aspect={1}
                      maxHeight={400}
                    >
                      <ComposedChart data={payoutRatioGraph} tick={false}>
                        <XAxis
                          interval={0}
                          tickLine={false}
                          dataKey='year'
                          domain={['auto', 'auto']}
                          tick={{
                            fill: '#212121',
                            fontSize: '12px',
                          }}
                        />
                        <YAxis
                          type='number'
                          tickLine={false}
                          tick={{
                            fill: '#212121',
                            fontSize: '12px',
                          }}
                          domain={['auto', 'dataMax + 5']}
                        />
                        <Tooltip />

                        <Bar
                          name='Dividents per share'
                          fill='#3751FF'
                          dataKey='data2'
                          barSize={25}
                        >
                          <LabelList
                            dataKey='data2'
                            content={renderCustomizedLabelWithoutBillion}
                          />
                        </Bar>

                        <Line
                          name='Payout ratio'
                          type='monotone'
                          dataKey='data2'
                          stroke='#F3C00E'
                          label={
                            <CustomizedGrowthRateLabelV2
                              data={payoutRatioGraph}
                            />
                          }
                        />

                        <Legend
                          wrapperStyle={{
                            bottom: -20,
                            left: 25,
                            fontSize: '12px',
                          }}
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </div>
            </div>
            <div className='col-lg-6 mx-auto'>
              <div className='price_chart mt-4 mb-5'>
                <div className='d-flex align-items-center mb-3'>
                  <h5 className='me-auto font-bd'>
                    DPS Present Value & Cost of Equity
                  </h5>
                </div>
                {dpsPresentValue && (
                  <div className='col-lg-12 mt-3'>
                    <ResponsiveContainer
                      width='100%'
                      aspect={1}
                      maxHeight={400}
                    >
                      <ComposedChart data={dpsPresentValue} tick={false}>
                        <XAxis
                          interval={0}
                          tickLine={false}
                          dataKey='year'
                          domain={['auto', 'auto']}
                          tick={{
                            fill: '#212121',
                            fontSize: '12px',
                          }}
                        />
                        <YAxis
                          type='number'
                          tickLine={false}
                          tick={{
                            fill: '#212121',
                            fontSize: '12px',
                          }}
                          domain={['auto', 'dataMax']}
                        />
                        <Tooltip />

                        <Bar
                          name='Dividents per share'
                          fill='#3751FF'
                          dataKey='data2'
                          barSize={25}
                        >
                          <LabelList
                            dataKey='data2'
                            content={renderCustomizedLabelWithoutBillion}
                          />
                        </Bar>

                        <Line
                          name='Payout ratio'
                          type='monotone'
                          dataKey='data2'
                          stroke='#F3C00E'
                          label={
                            <CustomizedGrowthRateLabelV2
                              data={dpsPresentValue}
                            />
                          }
                        />

                        <Legend
                          wrapperStyle={{
                            bottom: -20,
                            left: 25,
                            fontSize: '12px',
                          }}
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </div>
            </div>
            <div className='col-lg-12 text-center'>
              <div className='price_chart mt-4 mb-5'>
                <div className='d-flex align-items-center mb-3'>
                  <h5 className='me-auto font-bd'>Price Target</h5>
                </div>
                {priceTarget && (
                  <div className='col-lg-12 mt-3'>
                    <ResponsiveContainer
                      width='100%'
                      aspect={1}
                      maxHeight={400}
                    >
                      <AreaChart
                        data={priceTarget}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
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
                          interval={0}
                          tickLine={false}
                          dataKey='year'
                          tick={{
                            fill: '#212121',
                            fontSize: '12px',
                          }}
                          interval={0}
                        />
                        <YAxis
                          tickLine={false}
                          tick={{
                            fill: '#212121',
                            fontSize: '12px',
                          }}
                          domain={['auto', 'dataMax + 10']}
                        />
                        <Tooltip />
                        <Area
                          name='Price Target'
                          connectNulls
                          type='monotone'
                          dataKey='data'
                          stroke='#82ca9d'
                          fillOpacity={1}
                          fill='url(#colorPv)'
                        >
                          <LabelList
                            dataKey='data'
                            content={renderCustomizedLabelPrice}
                          />
                        </Area>

                        <Legend
                          wrapperStyle={{
                            bottom: -20,
                            left: 25,
                            fontSize: '12px',
                          }}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-12 mb-5'>
          <div className='mb-4'>
            <div className=''>
              <div className='d-flex align-items-center mb-3'>
                <h5 className='me-auto font-bd'>Additional Notes</h5>
              </div>
              <div
                className='mt-3'
                dangerouslySetInnerHTML={{
                  __html: companyValuation?.additional_notes
                    ? companyValuation?.additional_notes
                    : '-',
                }}
              />
            </div>
          </div>
          <div className='mb-4'>
            <div className=''>
              <div className='d-flex align-items-center mb-3'>
                <h5 className='me-auto font-bd'>Notes For The Professionals</h5>
              </div>
              <ul className='mt-3'>
                <li>
                  The above estimations are derived from the Free Cash Flow To
                  Firm Valuation.
                </li>
                <li>
                  We considered the Research & Development expenses as Capital
                  Expense rather than operating expense. Hence, we capitalized
                  the R&D, therefore the current operating margin shown by us
                  may vary with the margin as reported by the company.
                </li>
                <li>
                  The company’s Options outstanding(if any) has been taken into
                  account in the valuation.
                </li>
                <li>
                  Since we cannot estimate cash flows forever, we estimated cash
                  flows for a “growth period” and then estimated a TERMINAL
                  VALUE(not shown in cash flow), to capture the value at the end
                  of the period.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ValuationDividend;