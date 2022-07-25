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
  Area,
  AreaChart,
} from 'recharts';
import { CustomizedGrowthRateLabelV2 } from '../../Common/Chart/Recharts';
import moment from 'moment';

const ValuationFCFFM = ({ allData, companyQuote }) => {
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
  const [costOfCapitalGraphData, setCostOfCapitalGraphData] = useState(null);
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
    'Revenue growth rate',
    'Revenues',
    'EBIT (Operating) margin',
    'EBIT (Operating income)',
    'Reinvestment',
    'FCFF',
    'Invested capital',
    'Price Target',
    'PV(FCFF)',
    'ROIC',
    'Cost of capital',
  ];

  const CASE_FILTER = [
    { label: 'Best case', value: 'best' },
    { label: 'Base care', value: 'base' },
    { label: 'Worst care', value: 'worst' },
    { label: 'Manual', value: 'manual' },
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

            const revenue = valuationOutput.find(
              (elem) => elem?.field_name === 'Revenues'
            );

            let tempArr = [];
            Object.keys(revenue).forEach((key) => {
              if (yearArr.includes(key)) {
                tempArr.push(revenue[key]);
              }
            });
            const temp = revenueGrowthData.map((row, index) => {
              row.data2 = tempArr[index];
              return row;
            });
            setRevenueGraphData(temp);
            break;

          case 'EBIT (Operating) margin':
            const oiData = getGraphData(valuation);

            const operatingIncome = valuationOutput.find(
              (elem) => elem?.field_name === 'EBIT (Operating income)'
            );

            let tempIncome = [];
            Object.keys(operatingIncome).forEach((key) => {
              if (yearArr.includes(key)) {
                tempIncome.push(operatingIncome[key]);
              }
            });
            const tempData = oiData.map((row, index) => {
              row.data2 = tempIncome[index];
              return row;
            });
            setOperatingIncomeData(tempData);
            break;

          case 'Reinvestment':
            const reinvestmentData = getGraphData(valuation);
            setReinvestmentData(reinvestmentData);
            break;

          case 'FCFF':
            const fcffData = getGraphData(valuation);
            setFreeCashFlowData(fcffData);

            break;

          case 'ROIC':
            const roic = getGraphData(valuation);

            const investedData = valuationOutput.find(
              (elem) => elem?.field_name === 'Invested capital'
            );

            let tempRoic = [];
            Object.keys(investedData).forEach((key) => {
              if (yearArr.includes(key)) {
                tempRoic.push(investedData[key]);
              }
            });
            const tempInvestedData = roic.map((row, index) => {
              row.data2 = tempRoic[index];
              return row;
            });

            setInvestedCapital(tempInvestedData);

            break;

          case 'Price Target':
            const priceData = getGraphData(valuation);
            priceData.map((price, index) => {
              if (index === 0) {
                price.data = companyQuote?.price;
              }
              return price;
            });
            setPriceTargetCapital(priceData);

          case 'Cost of capital':
            const costOfCapitalData = getGraphData(valuation);

            const fcff = valuationOutput.find(
              (elem) => elem?.field_name === 'PV(FCFF)'
            );

            let tempCapitalArr = [];
            Object.keys(fcff).forEach((key) => {
              if (yearArr.includes(key)) {
                tempCapitalArr.push(fcff[key]);
              }
            });
            const temp2 = costOfCapitalData.map((row, index) => {
              row.data2 = tempCapitalArr[index];
              return row;
            });
            setCostOfCapitalGraphData(temp2);

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
      ((estimatedValue?.price - estimatedValue?.estimated_share) /
        estimatedValue?.price) *
      100
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
    if (manualData?.yearlyValuationOutput) {
      setManualChartData([...manualData?.yearlyValuationOutput]);
      setManualButtonVisible(true);
    }
  };

  return (
    <>
      <div>
        <div className='col-lg-12'>
          <div className='row'>
            <div className='col-lg-12 mt-4'>
              <div className='d-flex align-items-center mb-3'>
                <h4 className='me-auto font-bd'>
                  Moderna Inc Stock Forecast, Predictions &amp; Price Target
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
                    Current Fundamental Metrices
                  </h5>
                </div>
                <div className='row border-bottom mb-3'>
                  <div className='col-lg-4 col-md-4'>
                    <div className='title-lt'>Pre-tax operating margin</div>
                    <span>
                      <b>
                        {companyValuation &&
                        companyValuation.CompanyGrowths[0] &&
                        companyValuation.CompanyGrowths[0]
                          ?.pre_tax_op_margin_base
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
                <div className='d-flex align-items-center mb-3'>
                  <h5 className='me-auto font-bd'>Current Financials</h5>
                </div>
                <div className='row border-bottom mb-3'>
                  <div className='col-lg-4 col-md-4'>
                    <div className='title-lt'>Revenues</div>
                    <span>
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
                    <span>
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
                        {invested
                          ? `$${millionToBillionConvert(invested)}`
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
                  <ResponsiveContainer width='100%' aspect={1} maxHeight={550}>
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
                        tickLine={false}
                        dataKey='year'
                        domain={['auto', 'auto']}
                        tick={{ fill: '#212121', fontSize: '12px' }}
                        height={60}
                        tickLine={false}
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

        <div className='row'>
          <div className='col-lg-6'>
            <div className='top_competitors'>
              <div className='mb-5'>
                <div className='d-flex align-items-center justify-content-between mb-3'>
                  <h5 className='me-auto font-bd'>Valuation Assumptions</h5>
                </div>
                <div className='table-responsive'>
                  <table className='table table-bordered table-striped m-0 most_tables normal_table'>
                    <thead className='bold-heading'>
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
                        <td>Growth This Year</td>
                        <td>
                          {companyValuation &&
                          companyValuation.CompanyGrowths[0] &&
                          companyValuation.CompanyGrowths[0]?.gr_this_year_best
                            ? `${companyValuation.CompanyGrowths[0]?.gr_this_year_best}%`
                            : '-'}
                        </td>
                        <td>
                          {companyValuation &&
                          companyValuation.CompanyGrowths[0] &&
                          companyValuation.CompanyGrowths[0]?.gr_this_year_base
                            ? `${companyValuation.CompanyGrowths[0]?.gr_this_year_base}%`
                            : '-'}
                        </td>
                        <td>
                          {companyValuation &&
                          companyValuation.CompanyGrowths[0] &&
                          companyValuation.CompanyGrowths[0]?.gr_this_year_worst
                            ? `${companyValuation.CompanyGrowths[0]?.gr_this_year_worst}%`
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
                        <td>Growth Next Year</td>
                        <td>
                          {companyValuation &&
                          companyValuation.CompanyGrowths[0] &&
                          companyValuation.CompanyGrowths[0]?.gr_next_year_best
                            ? `${companyValuation.CompanyGrowths[0]?.gr_next_year_best}%`
                            : '-'}
                        </td>
                        <td>
                          {companyValuation &&
                          companyValuation.CompanyGrowths[0] &&
                          companyValuation.CompanyGrowths[0]?.gr_next_year_base
                            ? `${companyValuation.CompanyGrowths[0]?.gr_next_year_base}%`
                            : '-'}
                        </td>
                        <td>
                          {companyValuation &&
                          companyValuation.CompanyGrowths[0] &&
                          companyValuation.CompanyGrowths[0]?.gr_next_year_worst
                            ? `${companyValuation.CompanyGrowths[0]?.gr_next_year_worst}%`
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
                          Compound Annual Revenue Growth Rate For Year 3-5
                        </td>
                        <td>
                          {companyValuation &&
                          companyValuation.CompanyGrowths[0] &&
                          companyValuation.CompanyGrowths[0]
                            ?.compounded_revenue_growth_best
                            ? `${companyValuation.CompanyGrowths[0]?.compounded_revenue_growth_best}%`
                            : '-'}
                        </td>
                        <td>
                          {companyValuation &&
                          companyValuation.CompanyGrowths[0] &&
                          companyValuation.CompanyGrowths[0]
                            ?.compounded_revenue_growth_base
                            ? `${companyValuation.CompanyGrowths[0]?.compounded_revenue_growth_base}%`
                            : '-'}
                        </td>
                        <td>
                          {companyValuation &&
                          companyValuation.CompanyGrowths[0] &&
                          companyValuation.CompanyGrowths[0]
                            ?.compounded_revenue_growth_worst
                            ? `${companyValuation.CompanyGrowths[0]?.compounded_revenue_growth_worst}%`
                            : '-'}
                        </td>
                        <td>
                          <input
                            style={{ width: '50px' }}
                            type='number'
                            name='compounded_revenue_growth_man'
                            onChange={handleManualParamChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Operating Margin This Year</td>
                        <td>
                          {companyValuation &&
                          companyValuation.CompanyGrowths[0] &&
                          companyValuation.CompanyGrowths[0]
                            ?.op_margin_first_year_best
                            ? `${companyValuation.CompanyGrowths[0]?.op_margin_first_year_best}%`
                            : '-'}
                        </td>
                        <td>
                          {companyValuation &&
                          companyValuation.CompanyGrowths[0] &&
                          companyValuation.CompanyGrowths[0]
                            ?.op_margin_first_year_base
                            ? `${companyValuation.CompanyGrowths[0]?.op_margin_first_year_base}%`
                            : '-'}
                        </td>
                        <td>
                          {companyValuation &&
                          companyValuation.CompanyGrowths[0] &&
                          companyValuation.CompanyGrowths[0]
                            ?.op_margin_first_year_worst
                            ? `${companyValuation.CompanyGrowths[0]?.op_margin_first_year_worst}%`
                            : '-'}
                        </td>
                        <td>
                          <input
                            style={{ width: '50px' }}
                            type='number'
                            name='op_margin_first_year_man'
                            onChange={handleManualParamChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Operating Margin Next Year</td>
                        <td>
                          {companyValuation &&
                          companyValuation.CompanyGrowths[0] &&
                          companyValuation.CompanyGrowths[0]
                            ?.op_margin_next_year_best
                            ? `${companyValuation.CompanyGrowths[0]?.op_margin_next_year_best}%`
                            : '-'}
                        </td>
                        <td>
                          {companyValuation &&
                          companyValuation.CompanyGrowths[0] &&
                          companyValuation.CompanyGrowths[0]
                            ?.op_margin_next_year_base
                            ? `${companyValuation.CompanyGrowths[0]?.op_margin_next_year_base}%`
                            : '-'}
                        </td>
                        <td>
                          {companyValuation &&
                          companyValuation.CompanyGrowths[0] &&
                          companyValuation.CompanyGrowths[0]
                            ?.op_margin_next_year_worst
                            ? `${companyValuation.CompanyGrowths[0]?.op_margin_next_year_worst}%`
                            : '-'}
                        </td>
                        <td>
                          <input
                            style={{ width: '50px' }}
                            type='number'
                            name='op_margin_next_year_man'
                            onChange={handleManualParamChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Operating Margin Year 3-5</td>
                        <td>
                          {companyValuation &&
                          companyValuation.CompanyGrowths[0] &&
                          companyValuation.CompanyGrowths[0]
                            ?.op_margin_five_year_best
                            ? `${companyValuation.CompanyGrowths[0]?.op_margin_five_year_best}%`
                            : '-'}
                        </td>
                        <td>
                          {companyValuation &&
                          companyValuation.CompanyGrowths[0] &&
                          companyValuation.CompanyGrowths[0]
                            ?.op_margin_five_year_base
                            ? `${companyValuation.CompanyGrowths[0]?.op_margin_five_year_base}%`
                            : '-'}
                        </td>
                        <td>
                          {companyValuation &&
                          companyValuation.CompanyGrowths[0] &&
                          companyValuation.CompanyGrowths[0]
                            ?.op_margin_five_year_worst
                            ? `${companyValuation.CompanyGrowths[0]?.op_margin_five_year_worst}%`
                            : '-'}
                        </td>
                        <td>
                          <input
                            style={{ width: '50px' }}
                            type='number'
                            name='op_margin_five_year_man'
                            onChange={handleManualParamChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Target Operating Margin</td>
                        <td>
                          {companyValuation &&
                          companyValuation.CompanyGrowths[0] &&
                          companyValuation.CompanyGrowths[0]
                            ?.pre_tax_op_margin_best
                            ? `${companyValuation.CompanyGrowths[0]?.pre_tax_op_margin_best}%`
                            : '-'}
                        </td>
                        <td>
                          {companyValuation &&
                          companyValuation.CompanyGrowths[0] &&
                          companyValuation.CompanyGrowths[0]
                            ?.pre_tax_op_margin_base
                            ? `${companyValuation.CompanyGrowths[0]?.pre_tax_op_margin_base}%`
                            : '-'}
                        </td>
                        <td>
                          {companyValuation &&
                          companyValuation.CompanyGrowths[0] &&
                          companyValuation.CompanyGrowths[0]
                            ?.pre_tax_op_margin_worst
                            ? `${companyValuation.CompanyGrowths[0]?.pre_tax_op_margin_worst}%`
                            : '-'}
                        </td>
                        <td>
                          <input
                            style={{ width: '50px' }}
                            type='number'
                            name='pre_tax_op_margin_man'
                            onChange={handleManualParamChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Cost Of Capital</td>
                        <td>
                          {companyValuation && companyValuation?.cost_of_capital
                            ? `${companyValuation?.cost_of_capital}%`
                            : '-'}
                        </td>
                        <td>
                          {companyValuation && companyValuation?.cost_of_capital
                            ? `${companyValuation?.cost_of_capital}%`
                            : '-'}
                        </td>
                        <td>
                          {companyValuation && companyValuation?.cost_of_capital
                            ? `${companyValuation?.cost_of_capital}%`
                            : '-'}
                        </td>
                        <td>
                          <input
                            style={{ width: '50px' }}
                            type='number'
                            name='cost_of_capital'
                            onChange={handleManualParamChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Risk Free Rate</td>
                        <td>
                          {companyValuation &&
                          companyValuation?.CompanyGrowths[0] &&
                          companyValuation?.CompanyGrowths[0]
                            ?.risk_free_rate_best
                            ? `${companyValuation?.CompanyGrowths[0]?.risk_free_rate_best}%`
                            : '-'}
                        </td>
                        <td>
                          {companyValuation &&
                          companyValuation?.CompanyGrowths[0] &&
                          companyValuation?.CompanyGrowths[0]
                            ?.risk_free_rate_base
                            ? `${companyValuation?.CompanyGrowths[0]?.risk_free_rate_base}%`
                            : '-'}
                        </td>
                        <td>
                          {companyValuation &&
                          companyValuation?.CompanyGrowths[0] &&
                          companyValuation?.CompanyGrowths[0]
                            ?.risk_free_rate_worst
                            ? `${companyValuation?.CompanyGrowths[0]?.risk_free_rate_worst}%`
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
          <div className='col-lg-6'></div>
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
                  {estimatedValue?.estimated_share
                    ? `$${estimatedValue?.estimated_share.toFixed(2)}`
                    : '-'}
                </strong>
              </p>
              <p className='text up-down-color m-0 ms-2'>
                {calculatedPercentage
                  ? `(${
                      calculatedPercentage > 0
                        ? 'Overvalued by'
                        : 'Undervalued by'
                    } ${Math.abs(calculatedPercentage)}%)`
                  : ''}
              </p>
            </div>
            <div className='text-end text-black'>
              <p className='m-0'>
                <small>
                  Estimated value of equity:{' '}
                  {estimatedValue?.value_of_equity
                    ? `${millionToBillionConvert(
                        estimatedValue?.value_of_equity
                      )}`
                    : '-'}
                </small>
              </p>
              <p className='m-0'>
                <small>
                  Current price:{' '}
                  {companyQuote?.price
                    ? `$${NormalFormat(companyQuote?.price)}`
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
                  <table className='table table-bordered table-striped m-0 most_tables normal_table'>
                    <thead className='bold-heading'>
                      <tr>
                        <th scope='col'>-</th>
                        {freeCashFlowData &&
                          freeCashFlowData.map((heading) => {
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
                                  row?.field_name === 'PV(FCFF)'
                                    ? 'FCFF Present Value'
                                    : capitalizeFirstLetterOfEachWord(
                                        replaceEmpty(row?.field_name)
                                      )}
                                </td>
                                {yearArr &&
                                  yearArr.map((year) => {
                                    return (
                                      <td>
                                        {row[year] ? row[year].toFixed(2) : '-'}
                                      </td>
                                    );
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
                  <h5 className='me-auto font-bd'>Revenue & Growth Rate</h5>
                </div>
                {revenueGraphData && revenueGraphData.length > 0 && (
                  <div className='col-lg-12 mt-3'>
                    <ResponsiveContainer
                      width='100%'
                      aspect={1}
                      maxHeight={400}
                    >
                      <ComposedChart data={revenueGraphData} tick={false}>
                        <XAxis
                          tickLine={false}
                          dataKey='year'
                          domain={['auto', 'auto']}
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
                          domain={['auto', 'dataMax + 1000']}
                        />
                        <Tooltip />

                        <Bar
                          name='Revenues'
                          fill='#3751FF'
                          dataKey='data2'
                          barSize={25}
                        >
                          <LabelList
                            dataKey='data2'
                            content={renderCustomizedLabel}
                          />
                        </Bar>
                        <Line
                          name='Revenue growth rate'
                          type='monotone'
                          dataKey='data2'
                          stroke='#F3C00E'
                          label={
                            <CustomizedGrowthRateLabelV2
                              data={revenueGraphData}
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
                    Operating Income & Operating Margin
                  </h5>
                </div>
                {operatingIncomeData && (
                  <div className='col-lg-12 mt-3'>
                    <ResponsiveContainer
                      width='100%'
                      aspect={1}
                      maxHeight={400}
                    >
                      <ComposedChart data={operatingIncomeData} tick={false}>
                        <XAxis
                          tickLine={false}
                          dataKey='year'
                          domain={['auto', 'auto']}
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
                          domain={['auto', 'dataMax + 1000']}
                        />
                        <Tooltip />

                        <Bar
                          name='Operating Income'
                          fill='#3751FF'
                          dataKey='data2'
                          barSize={25}
                        >
                          <LabelList
                            dataKey='data2'
                            content={renderCustomizedLabel}
                          />
                        </Bar>

                        <Line
                          name='Operating Margin'
                          type='monotone'
                          dataKey='data2'
                          stroke='#F3C00E'
                          label={
                            <CustomizedGrowthRateLabelV2
                              data={operatingIncomeData}
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
                  <h5 className='me-auto font-bd'>Reinvestments</h5>
                </div>
                {reinvestmentData && (
                  <div className='col-lg-12 mt-3'>
                    <ResponsiveContainer
                      width='100%'
                      aspect={1}
                      maxHeight={400}
                    >
                      <BarChart data={reinvestmentData} tick={false}>
                        <XAxis
                          tickLine={false}
                          dataKey='year'
                          domain={['auto', 'auto']}
                          // ticks={ticks}
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
                        />
                        <Tooltip />

                        <Bar
                          name='Reinvestments'
                          fill='#3751FF'
                          dataKey='data'
                          barSize={25}
                        >
                          <LabelList
                            dataKey='data'
                            content={renderCustomizedLabel}
                          />
                        </Bar>

                        <Legend
                          wrapperStyle={{
                            bottom: -20,
                            left: 25,
                            fontSize: '12px',
                          }}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='price_chart mt-4 mb-5'>
                <div className='d-flex align-items-center mb-3'>
                  <h5 className='me-auto font-bd'>
                    Free Cash Flow To Firm (FCFF)
                  </h5>
                </div>
                {freeCashFlowData && (
                  <div className='col-lg-12 mt-3'>
                    <ResponsiveContainer
                      width='100%'
                      aspect={1}
                      maxHeight={400}
                    >
                      <BarChart data={freeCashFlowData} tick={false}>
                        <XAxis
                          tickLine={false}
                          dataKey='year'
                          domain={['auto', 'auto']}
                          // ticks={ticks}
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
                        />
                        <Tooltip />

                        <Bar
                          name='Free Cash Flow To Firm'
                          fill='#3751FF'
                          dataKey='data'
                          barSize={25}
                        >
                          <LabelList
                            dataKey='data'
                            content={renderCustomizedLabel}
                          />
                        </Bar>

                        <Legend
                          wrapperStyle={{
                            bottom: -20,
                            left: 25,
                            fontSize: '12px',
                          }}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='price_chart mt-4 mb-5'>
                <div className='d-flex align-items-center mb-3'>
                  <h5 className='me-auto font-bd'>
                    FCFF Present Value & Cost of capital
                  </h5>
                </div>
                {costOfCapitalGraphData && costOfCapitalGraphData.length > 0 && (
                  <div className='col-lg-12 mt-3'>
                    <ResponsiveContainer
                      width='100%'
                      aspect={1}
                      maxHeight={400}
                    >
                      <ComposedChart data={costOfCapitalGraphData} tick={false}>
                        <XAxis
                          tickLine={false}
                          dataKey='year'
                          domain={['auto', 'auto']}
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
                          domain={['auto', 'dataMax + 3000']}
                        />
                        <Tooltip />

                        <Bar
                          name='Cost of capital'
                          fill='#3751FF'
                          dataKey='data2'
                          barSize={25}
                        >
                          <LabelList
                            dataKey='data2'
                            content={renderCustomizedLabel}
                          />
                        </Bar>
                        <Line
                          name='FCFF Present Value'
                          type='monotone'
                          dataKey='data2'
                          stroke='#F3C00E'
                          label={
                            <CustomizedGrowthRateLabelV2
                              data={costOfCapitalGraphData}
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
                    Invested Capitals & Implied ROIC
                  </h5>
                </div>
                {investedCapitalData && (
                  <div className='col-lg-12 mt-3'>
                    <ResponsiveContainer
                      width='100%'
                      aspect={1}
                      maxHeight={400}
                    >
                      <ComposedChart data={investedCapitalData} tick={false}>
                        <XAxis
                          tickLine={false}
                          dataKey='year'
                          domain={['auto', 'auto']}
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
                          domain={['auto', 'dataMax + 8000']}
                        />
                        <Tooltip />

                        <Bar
                          name='Invested Capital'
                          fill='#3751FF'
                          dataKey='data2'
                          barSize={25}
                        >
                          <LabelList
                            dataKey='data2'
                            content={renderCustomizedLabel}
                          />
                        </Bar>

                        <Line
                          name='Implied ROIC'
                          type='monotone'
                          dataKey='data2'
                          stroke='#F3C00E'
                          label={
                            <CustomizedGrowthRateLabelV2
                              data={investedCapitalData}
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
            <div className='col-lg-12'>
              <div className='price_chart mt-4 mb-5'>
                <div className='d-flex align-items-center mb-3'>
                  <h5 className='me-auto font-bd'>Price Target</h5>
                </div>
                {priceTargetData &&
                  Array.isArray(priceTargetData) &&
                  priceTargetData.length > 0 && (
                    <div className='col-lg-12 mt-3'>
                      <ResponsiveContainer
                        width='100%'
                        aspect={1}
                        maxHeight={400}
                      >
                        <AreaChart
                          data={priceTargetData}
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

            <div className='col-lg-12 mb-5'>
              <div className='mb-4'>
                <div className=''>
                  <div className='d-flex align-items-center mb-3'>
                    <h5 className='me-auto font-bd'>
                      Revenue segment performance
                    </h5>
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

              <div className='mb-4'>
                <div className=''>
                  <div className='d-flex align-items-center mb-3'>
                    <h5 className='me-auto font-bd'>Risk</h5>
                  </div>
                  <div
                    className='mt-3'
                    dangerouslySetInnerHTML={{
                      __html: companyValuation?.risk
                        ? companyValuation?.risk
                        : '-',
                    }}
                  />
                </div>
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
                  We considered the Research &amp; Development expenses as
                  Capital Expense rather than operating expense. Hence, we
                  capitalized the R&amp;D, therefore the current operating
                  margin shown by us may vary with the margin as reported by the
                  company.
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

export default ValuationFCFFM;
