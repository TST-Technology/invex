import React, { useEffect, useState } from 'react';
import { NormalFormat } from '../../Common/NumberFormat';
import CompanyView from '../../Options/Quote/CompanyView/CompanyView';
import {
  millionToBillionConvert,
  replaceEmpty,
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
} from 'recharts';
import { CustomizedGrowthRateLabel } from '../../Common/Chart/Recharts';
import moment from 'moment';

const ValuationDividend = ({ allData, sector, keyStatus, logo, Company }) => {
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
            setExpectedGrowthRate(epsData);
            break;

          case 'Expected Growth Rate':
            if (expectedGrowthRate) {
              let tempArr = [];
              Object.keys(valuation).forEach((key) => {
                if (yearArr.includes(key)) {
                  tempArr.push(valuation[key]);
                }
              });
              const temp = expectedGrowthRate.map((row, index) => {
                row.data2 = tempArr[index];
                return row;
              });
              setExpectedGrowthRate(temp);
            }
            break;

          case 'Dividends Per Share':
            const dpsData = getGraphData(valuation);
            setPayoutRatioGraph(dpsData);
            break;

          case 'Payout Ratio':
            if (payoutRatioGraph) {
              let tempArr = [];
              Object.keys(valuation).forEach((key) => {
                if (yearArr.includes(key)) {
                  tempArr.push(valuation[key]);
                }
              });
              const temp = payoutRatioGraph.map((row, index) => {
                row.data2 = tempArr[index];
                return row;
              });
              setPayoutRatioGraph(temp);
            }
            break;

          case 'Price Target':
            const priceTarget = getGraphData(valuation);
            setPriceTarget(priceTarget);
            break;
        }
      });
    }
  }, [valuationOutput]);

  useEffect(() => {
    console.log(manualParam);
    if (manualParam) {
      getManualParamData();
    }
  }, [manualParam]);

  useEffect(() => {
    if (manualChartData) {
      console.log(manualChartData);
      setValuationOutput([...manualChartData]);
    }
  }, [manualChartData]);

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
    console.log(manualData);
    if (manualData?.yearlyOutput) {
      setManualChartData([...manualData?.yearlyOutput]);
      setManualButtonVisible(true);
    }
  };

  return (
    <>
      <h4 className='mt-4'>
        Moderna Inc Stock Forecast, Predictions & Price Target
      </h4>
      <div className='col-lg-12'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='mt-4 mb-4'>
              <h6 className='mb-4'>
                <strong>Basic Company Facts</strong>
              </h6>
              <div className='row border-bottom mb-3'>
                <div className='col-lg-4 col-md-4'>
                  <div className='title-lt'>Fiscal Year</div>
                  <span className='down'>
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
                  <div className='title-lt'>Valuation Currenct</div>
                  <span className='down'>
                    {/*  down-light-bg */}
                    <b>{data?.open}</b>
                  </span>
                </div>
                <div className='col-lg-4 col-md-4'>
                  <div className='title-lt'>Sector (US)</div>
                  <span>
                    <b>{data?.previousClose}</b>
                  </span>
                </div>
                <div className='col-lg-4 col-md-4'>
                  <div className='title-lt'>Industry (US)</div>
                  <span>
                    <b>{data?.dayLow}</b>
                  </span>
                </div>
              </div>
              <div className='row border-bottom mb-3'>
                <div className='col-lg-4 col-md-4'>
                  <div className='title-lt'>Market Cap</div>
                  <span className='down'>
                    <b>
                      {keyStatus?.marketCap
                        ? `$${NormalFormat(keyStatus?.marketCap)}`
                        : '-'}
                    </b>
                  </span>
                </div>
                <div className='col-lg-4 col-md-4'>
                  <div className='title-lt'>Current Stock Price</div>
                  <span>
                    <b>
                      {keyStatus?.latestPrice
                        ? `$${NormalFormat(keyStatus?.latestPrice)}`
                        : '-'}
                    </b>
                  </span>
                </div>
              </div>
            </div>
            <div className='mt-4 mb-4'>
              <h6 className='mb-4'>
                <strong>Company’s Current Financials</strong>
              </h6>
              <div className='row border-bottom mb-3'>
                <div className='col-lg-4 col-md-4'>
                  <div className='title-lt'>Net Income</div>
                  <span className='down'>
                    <b>-</b>
                  </span>
                </div>
                <div className='col-lg-4 col-md-4'>
                  <div className='title-lt'>Book Value(Current Year)</div>
                  <span>
                    <b>-</b>
                  </span>
                </div>
                <div className='col-lg-4 col-md-4'>
                  <div className='title-lt'>Current Earnings per share</div>
                  <span>
                    <b>-</b>
                  </span>
                </div>
              </div>
              <div className='row border-bottom mb-3'>
                <div className='col-lg-4 col-md-4'>
                  <div className='title-lt'>Current Dividends</div>
                  <span className='down'>
                    <b>-</b>
                  </span>
                </div>
                <div className='col-lg-4 col-md-4'>
                  <div className='title-lt'>Cost Of Equity</div>
                  <span>
                    <b>-</b>
                  </span>
                </div>
                <div className='col-lg-4 col-md-4'>
                  <div className='title-lt'>Return On Equity</div>
                  <span>
                    <b>-</b>
                  </span>
                </div>
              </div>
              <div className='row border-bottom mb-3'>
                <div className='col-lg-4 col-md-4'>
                  <div className='title-lt'>Payout Ratio</div>
                  <span className='down'>
                    <b>-</b>
                  </span>
                </div>
                <div className='col-lg-4 col-md-4'>
                  <div className='title-lt'>Retention Ratio</div>
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
                  <strong>Invex Wealth Past Predictions</strong>
                </h5>
              </div>

              {pastPredictionGraphData && (
                <ResponsiveContainer
                  width='100%'
                  aspect={1}
                  maxHeight={400}
                  className='mb-5'
                >
                  <BarChart
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
                      dataKey='year'
                      axisLine={false}
                      domain={['auto', 'auto']}
                      tick={{ fill: '#212121', fontSize: '12px' }}
                    />
                    <YAxis
                      axisLine={false}
                      tick={{
                        fill: '#212121',
                        fontSize: '12px',
                      }}
                    />
                    <Tooltip />

                    <Bar fill='#88D1DC' dataKey='best' barSize={35}>
                      <LabelList
                        dataKey='best'
                        content={renderCustomizedLabelWithoutBillion}
                      />
                    </Bar>
                    <Bar fill='#F8DF86' dataKey='base' barSize={35}>
                      <LabelList
                        dataKey='base'
                        content={renderCustomizedLabelWithoutBillion}
                      />
                    </Bar>
                    <Bar fill='#E88190' dataKey='worst' barSize={35}>
                      <LabelList
                        dataKey='worst'
                        content={renderCustomizedLabelWithoutBillion}
                      />
                    </Bar>
                    <Bar fill='#9AA7FE' dataKey='actualPrice' barSize={35}>
                      <LabelList
                        dataKey='actualPrice'
                        content={renderCustomizedLabelWithoutBillion}
                      />
                    </Bar>
                    <Legend />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ValuationDividend;
