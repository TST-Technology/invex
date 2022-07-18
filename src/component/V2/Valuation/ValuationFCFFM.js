import React, { useEffect, useState } from 'react';
import { NormalFormat } from '../../Common/NumberFormat';
import CompanyView from '../../Options/Quote/CompanyView/CompanyView';
import {
  millionToBillionConvert,
  replaceEmpty,
  replaceEmptyWithNumberPreFix,
  replaceEmptyWithPostFix,
} from '../../Common/CommonFunctions';
import { getManualValuationFCFFMData } from '../../api/valuation';
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
  Scatter,
  ZAxis,
} from 'recharts';
import { CustomizedGrowthRateLabel } from '../../Common/Chart/Recharts';
import moment from 'moment';

const ValuationFCFFM = ({ allData, sector, keyStatus, logo, Company }) => {
  const [data, setData] = useState();
  const [companyValuation, setCompanyValuation] = useState();
  const [roic, setROIC] = useState(null);
  const [invested, setInvested] = useState(null);
  const [valuationOutput, setValuationOutput] = useState(null);
  const [revenueGraphData, setRevenueGraphData] = useState(null);
  const [operatingIncomeData, setOperatingIncomeData] = useState(null);
  const [reinvestmentData, setReinvestmentData] = useState(null);
  const [freeCashFlowData, setFreeCashFlowData] = useState(null);
  const [investedCapitalData, setInvestedCapital] = useState(null);
  const [priceTargetData, setPriceTargetCapital] = useState(null);
  const [valuationOutputFilter, setValuationOutputFilter] = useState('best');
  const [pastPredictionGraphData, setPastPredictionGraphData] = useState(null);
  const [estimatedValue, setEstimatedValue] = useState(null);
  const [percent, setPercent] = useState(null);
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
    'Revenue growth rate',
    'Revenues',
    'EBIT (Operating) margin',
    'EBIT (Operating income)',
    'Reinvestment',
    'FCFF',
    'Invested capital',
    'Price Target',
  ];

  useEffect(() => {
    if (companyValuation) {
      getValuationOutput();
      companyValuation?.YearlyValuationOutputs.forEach((element, index) => {
        if (
          element?.case &&
          element?.field_name &&
          element?.case === 'base' &&
          element?.field_name === 'ROIC'
        ) {
          setROIC(element?.base_year);
        }

        if (
          element?.case &&
          element?.field_name &&
          element?.case === 'base' &&
          element?.field_name === 'Invested capital'
        ) {
          setInvested(element?.base_year);
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
          case 'Revenue growth rate':
            const revenueGrowthData = getGraphData(valuation);
            setRevenueGraphData(revenueGrowthData);
            break;

          case 'Revenues':
            if (revenueGraphData) {
              let tempArr = [];
              Object.keys(valuation).forEach((key) => {
                if (yearArr.includes(key)) {
                  tempArr.push(valuation[key]);
                }
              });
              const temp = revenueGraphData.map((row, index) => {
                row.data2 = tempArr[index];
                return row;
              });
              setRevenueGraphData(temp);
            }
            break;

          case 'EBIT (Operating) margin':
            const oiData = getGraphData(valuation);
            setOperatingIncomeData(oiData);
            break;

          case 'EBIT (Operating income)':
            if (operatingIncomeData) {
              let tempArr = [];
              Object.keys(valuation).forEach((key) => {
                if (yearArr.includes(key)) {
                  tempArr.push(valuation[key]);
                }
              });
              const temp = operatingIncomeData.map((row, index) => {
                row.data2 = tempArr[index];
                return row;
              });
              setOperatingIncomeData(temp);
            }
            break;

          case 'Reinvestment':
            const reinvestmentData = getGraphData(valuation);
            setReinvestmentData(reinvestmentData);
            break;

          case 'FCFF':
            const fcffData = getGraphData(valuation);
            setFreeCashFlowData(fcffData);

            break;
          case 'Invested capital':
            const investedData = getGraphData(valuation);
            setInvestedCapital(investedData);

            break;
          case 'Price Target':
            if (!priceTargetData) {
              const priceData = getGraphData(valuation);
              setPriceTargetCapital(priceData);
            }

            break;
        }
      });
    }
  }, [valuationOutput]);

  useEffect(() => {
    (async () => {
      if (allData) {
        setData(allData);
        if (
          allData &&
          allData.CompanyValuations &&
          allData.CompanyValuations[0]
        ) {
          setCompanyValuation(allData.CompanyValuations[0]);

          const pastPrediction = allData.CompanyValuations.map((val) => {
            let best, base, worst, actualPrice;
            val &&
              val?.ValuationOutputs.forEach((ele) => {
                if (ele.case === 'base') {
                  base = ele.estimated_share;
                  actualPrice = ele.price;
                }
                if (ele.case === 'best') {
                  best = ele.estimated_share;
                }
                if (ele.case === 'worst') {
                  worst = ele.estimated_share;
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
        companyValuation?.YearlyValuationOutputs.filter((element) => {
          return element.case === valuationOutputFilter;
        });

      setValuationOutput(tempValuationOutput);

      companyValuation?.ValuationOutputs.forEach((element) => {
        if (element.case === valuationOutputFilter) {
          setEstimatedValue(element);
          setPercent(
            (
              ((element?.estimated_share - element?.price) / element?.price) *
              100
            ).toFixed(2)
          );
        }
      });
    }
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
          {value ? `$${millionToBillionConvert(value)}` : ''}
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
          {value ? `$${value}` : ''}
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
    const manualData = await getManualValuationFCFFMData({
      ...manualParam,
      valuation_id: companyValuation.id,
    });
    console.log(manualData);
    if (manualData?.yearlyValuationOutput) {
      setManualChartData([...manualData?.yearlyValuationOutput]);
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
                  <div className='title-lt'>Valuation Currency</div>
                  <span className='down'>
                    <b>{data?.valuation_currency}</b>
                  </span>
                </div>
                <div className='col-lg-4 col-md-4'>
                  <div className='title-lt'>Sector (US)</div>
                  <span>
                    <b>{sector?.SectorWiseIndustry?.Sector?.name}</b>
                  </span>
                </div>
                <div className='col-lg-4 col-md-4'>
                  <div className='title-lt'>Industry (US)</div>
                  <span>
                    <b>{sector?.SectorWiseIndustry?.name}</b>
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
                <strong>Current Fundamental Metrices</strong>
              </h6>
              <div className='row border-bottom mb-3'>
                <div className='col-lg-4 col-md-4'>
                  <div className='title-lt'>Pre-tax operating margin</div>
                  <span className='down'>
                    <b>
                      {companyValuation &&
                      companyValuation.CompanyGrowths[0] &&
                      companyValuation.CompanyGrowths[0]?.pre_tax_op_margin_base
                        ? `${companyValuation.CompanyGrowths[0]?.pre_tax_op_margin_base}%`
                        : ''}
                    </b>
                  </span>
                </div>
                <div className='col-lg-4 col-md-4'>
                  <div className='title-lt'>Sales to capital ratio</div>
                  <span>
                    <b>{companyValuation?.sales_capital_ratio}</b>
                  </span>
                </div>
                <div className='col-lg-4 col-md-4'>
                  <div className='title-lt'>Return on invested capital</div>
                  <span>
                    <b>{roic ? `${roic}%` : '-'}</b>
                  </span>
                </div>
              </div>
            </div>
            <div className='mt-4 mb-4'>
              <h6 className='mb-4'>
                <strong>Current Financials</strong>
              </h6>
              <div className='row border-bottom mb-3'>
                <div className='col-lg-4 col-md-4'>
                  <div className='title-lt'>Revenues</div>
                  <span className='down'>
                    <b>
                      {companyValuation?.revenues
                        ? `$${millionToBillionConvert(
                            companyValuation?.revenues
                          )}`
                        : '-'}
                    </b>
                  </span>
                </div>
                <div className='col-lg-4 col-md-4'>
                  <div className='title-lt'>Income Before Interest & Tax</div>
                  <span>
                    <b>
                      {companyValuation?.operating_income_ebit
                        ? `$${millionToBillionConvert(
                            companyValuation?.operating_income_ebit
                          )}`
                        : '-'}
                    </b>
                  </span>
                </div>
                <div className='col-lg-4 col-md-4'>
                  <div className='title-lt'>Shareholders Equity</div>
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
              </div>
              <div className='row border-bottom mb-3'>
                <div className='col-lg-4 col-md-4'>
                  <div className='title-lt'>Total Debt</div>
                  <span className='down'>
                    <b>
                      {companyValuation?.debit_book_value
                        ? `$${millionToBillionConvert(
                            companyValuation?.debit_book_value
                          )}`
                        : '-'}
                    </b>
                  </span>
                </div>
                <div className='col-lg-4 col-md-4'>
                  <div className='title-lt'>Invested capital</div>
                  <span>
                    <b>
                      {invested ? `$${millionToBillionConvert(invested)}` : '-'}
                    </b>
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
                  maxHeight={500}
                  //   className='mb-5'
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
                  >
                    <XAxis
                      dataKey='year'
                      domain={['auto', 'auto']}
                      tick={{ fill: '#212121', fontSize: '12px' }}
                      height={60}
                      tickLine={false}
                    />
                    <YAxis
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
                    <Legend />
                  </ComposedChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='col-lg-12'>
        <div className='row'>
          <h5 className='mb-4'>Risk</h5>
          <div
            dangerouslySetInnerHTML={{
              __html: companyValuation?.risk ? companyValuation?.risk : '-',
            }}
          />

          <h5 className='mb-4 mt-4'>Revenue segment performance</h5>
          <div
            dangerouslySetInnerHTML={{
              __html: companyValuation?.revenue_segments
                ? companyValuation?.revenue_segments
                : '-',
            }}
          />

          <h5 className='mb-4 mt-4'>Analyst Notes</h5>
          <div
            dangerouslySetInnerHTML={{
              __html: companyValuation?.valuation_notes
                ? companyValuation?.valuation_notes
                : '-',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ValuationFCFFM;
