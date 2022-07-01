import React, { useEffect, useState } from 'react';
import { NormalFormat } from '../Common/NumberFormat';
import CompanyView from '../Options/Quote/CompanyView/CompanyView';
import {
  millionToBillionConvert,
  replaceEmpty,
  replaceEmptyWithNumberPreFix,
  replaceEmptyWithPostFix,
} from '../Common/commonFunctions';
import { getManualValuationFCFFMData } from '../api/valuation';
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
} from 'recharts';
import { CustomizedGrowthRateLabel } from '../Common/Chart/Recharts';
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
    console.log(valuationOutput);
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
      {data && (
        <div className='main'>
          <section className='valuation_report_sec'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12 mb-5'>
                  <div className='card'>
                    <div className='card-body bg-base d-lg-flex d-md-flex d-block align-items-center rounded-3 p-4'>
                      <h5 className='m-0 pe-3'>
                        {Company?.companyName} Stock Forecast, Predictions &amp;
                        Price Target
                      </h5>
                    </div>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <CompanyView
                    KeyStatus={keyStatus}
                    Company={Company}
                    logo={logo}
                  />

                  <div className='row'>
                    <div className='col-lg-4'>
                      <div className='col-lg-12 mt-3 mb-3'>
                        <h6 className='mb-3'>
                          <strong>Basic Company Facts </strong>
                        </h6>
                        <div className='key_status'>
                          <ul>
                            <li>
                              <a href='javascript:void(0)'>Fiscal Year:</a>{' '}
                              <span>
                                {companyValuation?.fiscal_year}{' '}
                                {companyValuation?.quarter}
                              </span>
                            </li>
                            <li>
                              <a href='javascript:void(0)'>Company Ticker:</a>{' '}
                              <span>{data?.ticker}</span>
                            </li>
                            <li>
                              <a href='javascript:void(0)'>
                                Country of Incorporation:
                              </a>{' '}
                              <span>{data?.incorporation_country}</span>
                            </li>
                            <li>
                              <a href='javascript:void(0)'>
                                Currency Of Valuation:
                              </a>{' '}
                              <span>{data?.valuation_currency}</span>
                            </li>
                            <li>
                              <a href='javascript:void(0)'>Sector (US):</a>{' '}
                              <span>
                                {sector?.SectorWiseIndustry?.Sector?.name}
                              </span>
                            </li>
                            <li>
                              <a href='javascript:void(0)'>Industry (US):</a>{' '}
                              <span>{sector?.SectorWiseIndustry?.name}</span>
                            </li>
                            <li>
                              <a href='javascript:void(0)'>
                                Current Market Cap(billions):
                              </a>{' '}
                              <span>
                                {keyStatus?.marketCap
                                  ? `$${NormalFormat(keyStatus?.marketCap)}`
                                  : '-'}
                              </span>
                            </li>
                            <li>
                              <a href='javascript:void(0)'>
                                Current Stock Price:
                              </a>{' '}
                              <span>
                                {keyStatus?.latestPrice
                                  ? `$${NormalFormat(keyStatus?.latestPrice)}`
                                  : '-'}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='col-lg-12 mt-3 mb-3'>
                        <h6 className='mb-3'>
                          <strong>Current Fundamental Metrices </strong>
                        </h6>
                        <div className='key_status'>
                          <ul>
                            <li>
                              <a href='javascript:void(0)'>
                                Pre-tax operating margin
                              </a>{' '}
                              <span>
                                {companyValuation &&
                                companyValuation.CompanyGrowths[0] &&
                                companyValuation.CompanyGrowths[0]
                                  ?.pre_tax_op_margin_base
                                  ? `${companyValuation.CompanyGrowths[0]?.pre_tax_op_margin_base}%`
                                  : ''}
                              </span>
                            </li>
                            <li>
                              <a href='javascript:void(0)'>
                                Sales to capital ratio
                              </a>{' '}
                              <span>
                                {companyValuation?.sales_capital_ratio}
                              </span>
                            </li>
                            <li>
                              <a href='javascript:void(0)'>
                                Return on invested capital
                              </a>{' '}
                              <span>{roic ? `${roic}%` : '-'}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='col-lg-12 mt-3 mb-3'>
                        <h6 className='mb-3'>
                          <strong>
                            Company's Current Financials(millions){' '}
                          </strong>
                        </h6>
                        <div className='key_status'>
                          <ul>
                            <li>
                              <a href='javascript:void(0)'>Revenues</a>{' '}
                              <span>
                                {companyValuation?.revenues
                                  ? `$${millionToBillionConvert(
                                      companyValuation?.revenues
                                    )}`
                                  : '-'}
                              </span>
                            </li>
                            <li>
                              <a href='javascript:void(0)'>
                                Income Before Interest &amp; Tax
                              </a>{' '}
                              <span>
                                {companyValuation?.operating_income_ebit
                                  ? `$${millionToBillionConvert(
                                      companyValuation?.operating_income_ebit
                                    )}`
                                  : '-'}
                              </span>
                            </li>
                            <li>
                              <a href='javascript:void(0)'>
                                Shareholders Equity
                              </a>{' '}
                              <span>
                                {companyValuation?.equity_book_value
                                  ? `$${millionToBillionConvert(
                                      companyValuation?.equity_book_value
                                    )}`
                                  : '-'}
                              </span>
                            </li>
                            <li>
                              <a href='javascript:void(0)'>Total Debt</a>{' '}
                              <span>
                                {companyValuation?.debit_book_value
                                  ? `$${millionToBillionConvert(
                                      companyValuation?.debit_book_value
                                    )}`
                                  : '-'}
                              </span>
                            </li>
                            <li>
                              <a href='javascript:void(0)'>Invested capital</a>{' '}
                              <span>
                                {invested
                                  ? `$${millionToBillionConvert(invested)}`
                                  : '-'}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='last-six-non-manf mt-3 mb-5'>
                    <h6 className='mb-4'>
                      <strong>Invex Wealth Past Predictions</strong>
                    </h6>
                    <div className='text-center'></div>
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

                  <div className='card companyviewblk compprofile_block mb-5'>
                    <div className='card-header'>
                      <div className='d-flex align-items-center justify-content-left bg-light p-2 border-bottom-0'>
                        <h6 className='m-0'>
                          <strong>Risk</strong>
                        </h6>
                      </div>
                    </div>
                    <div className='card-body'>
                      <div>
                        <div className='key_status'>
                          <div
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

                  <div className='card companyviewblk compprofile_block mb-5'>
                    <div className='card-header'>
                      <div className='d-flex align-items-center justify-content-left bg-light p-2 border-bottom-0'>
                        <h6 className='m-0'>
                          <strong>Analyst Notes</strong>
                        </h6>
                      </div>
                    </div>
                    <div className='card-body'>
                      <div className='description-para'>
                        <div className='key_status'>
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
                  </div>
                  <div className='card companyviewblk compprofile_block mb-5'>
                    <div className='card-header'>
                      <div className='d-flex align-items-center justify-content-left bg-light p-2 border-bottom-0'>
                        <h6 className='m-0'>
                          <strong>Revenue segment performance</strong>
                        </h6>
                      </div>
                    </div>
                    <div className='card-body'>
                      <div className='description-para'>
                        <div className='key_status'>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: companyValuation?.revenue_segments
                                ? companyValuation?.revenue_segments
                                : '-',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6 className='mb-4'>
                    <strong>Valuation Assumptions</strong>
                  </h6>
                  <div className='table-responsive'>
                    <table className='table table-bordered m-0 most_tables'>
                      <thead className='table-light'>
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
                          <td>Growth this year</td>
                          <td>
                            {companyValuation &&
                            companyValuation.CompanyGrowths[0] &&
                            companyValuation.CompanyGrowths[0]
                              ?.gr_this_year_best
                              ? `${companyValuation.CompanyGrowths[0]?.gr_this_year_best}%`
                              : '-'}
                          </td>
                          <td>
                            {companyValuation &&
                            companyValuation.CompanyGrowths[0] &&
                            companyValuation.CompanyGrowths[0]
                              ?.gr_this_year_base
                              ? `${companyValuation.CompanyGrowths[0]?.gr_this_year_base}%`
                              : '-'}
                          </td>
                          <td>
                            {companyValuation &&
                            companyValuation.CompanyGrowths[0] &&
                            companyValuation.CompanyGrowths[0]
                              ?.gr_this_year_worst
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
                          <td>Growth next year</td>
                          <td>
                            {companyValuation &&
                            companyValuation.CompanyGrowths[0] &&
                            companyValuation.CompanyGrowths[0]
                              ?.gr_next_year_best
                              ? `${companyValuation.CompanyGrowths[0]?.gr_next_year_best}%`
                              : '-'}
                          </td>
                          <td>
                            {companyValuation &&
                            companyValuation.CompanyGrowths[0] &&
                            companyValuation.CompanyGrowths[0]
                              ?.gr_next_year_base
                              ? `${companyValuation.CompanyGrowths[0]?.gr_next_year_base}%`
                              : '-'}
                          </td>
                          <td>
                            {companyValuation &&
                            companyValuation.CompanyGrowths[0] &&
                            companyValuation.CompanyGrowths[0]
                              ?.gr_next_year_worst
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
                            Compound anual revenue growth rate for Year 3-5
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
                          <td>Operating margin this year/he</td>
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
                          <td>Operating margin next year</td>
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
                          <td>Opratiing margin year 3-5</td>
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
                          <td>Target operating margin</td>
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
                          <td>Cost of capital</td>
                          <td>
                            {companyValuation &&
                            companyValuation?.cost_of_capital
                              ? `${companyValuation?.cost_of_capital}%`
                              : '-'}
                          </td>
                          <td>
                            {companyValuation &&
                            companyValuation?.cost_of_capital
                              ? `${companyValuation?.cost_of_capital}%`
                              : '-'}
                          </td>
                          <td>
                            {companyValuation &&
                            companyValuation?.cost_of_capital
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
                          <td>Risk free rate</td>
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
                  <div className='card companyviewblk compprofile_block mt-5 mb-4'>
                    <div className='card-header'>
                      <div className='d-flex align-items-center justify-content-between bg-light p-2 border-bottom-0'>
                        <h6 className='m-0'>
                          <strong>
                            Valuation Output <base />
                          </strong>
                        </h6>

                        <div className='top_button_panel d-flex align-items-center'>
                          <span className='pe-3 pb-3'>
                            <small>
                              <strong>View as</strong>
                            </small>
                          </span>
                          <button
                            type='button'
                            onClick={() => setViewAs('chart')}
                            className={`btn ${
                              viewAs === 'chart' ? 'btn-info' : 'btn-light'
                            }`}
                          >
                            Chart
                          </button>
                          <button
                            type='button'
                            onClick={() => setViewAs('table')}
                            className={`btn ${
                              viewAs === 'table' ? 'btn-info' : 'btn-light'
                            }`}
                          >
                            Table
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='card-body'>
                      <div className='top_button_panel mb-3 justify-content-between'>
                        <div className='d-flex align-items-center'>
                          <span className='pe-3 pb-3'>
                            <small>
                              <strong>Choose the case</strong>
                            </small>
                          </span>
                          <button
                            type='button'
                            onClick={() => setValuationOutputFilter('best')}
                            className={`btn ${
                              valuationOutputFilter === 'best'
                                ? 'btn-info'
                                : 'btn-light'
                            }`}
                          >
                            Best case
                          </button>
                          <button
                            type='button'
                            onClick={() => setValuationOutputFilter('base')}
                            className={`btn ${
                              valuationOutputFilter === 'base'
                                ? 'btn-info'
                                : 'btn-light'
                            }`}
                          >
                            {' '}
                            Base care
                          </button>
                          <button
                            type='button'
                            onClick={() => setValuationOutputFilter('worst')}
                            className={`btn ${
                              valuationOutputFilter === 'worst'
                                ? 'btn-info'
                                : 'btn-light'
                            }`}
                          >
                            {' '}
                            Worst care
                          </button>
                          {manualButtonVisible && (
                            <button
                              type='button'
                              onClick={() => setValuationOutputFilter('manual')}
                              className={`btn ${
                                valuationOutputFilter === 'manual'
                                  ? 'btn-info'
                                  : 'btn-light'
                              }`}
                            >
                              Manual
                            </button>
                          )}
                        </div>
                        <div>
                          <small>
                            <strong>Publish date: </strong>
                          </small>
                          <span>
                            {replaceEmpty(companyValuation?.publish_date)}
                          </span>
                        </div>
                      </div>
                      <div className='scenario justify-content-between'>
                        <span className='best_scena'>
                          Estimated value / share
                        </span>
                        <div className='chart-text'>
                          <p className='card-text up m-0'>
                            <strong>
                              {estimatedValue?.estimated_share
                                ? `$${estimatedValue?.estimated_share}`
                                : '-'}
                            </strong>
                          </p>
                          <p className='text up m-0 ms-2'>
                            {percent
                              ? percent >= 0
                                ? `(+${percent}%)`
                                : `(${percent}%)`
                              : ''}
                          </p>
                        </div>
                        <div className='text-end'>
                          <p className='m-0'>
                            <small>
                              Value of equity:{' '}
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
                              {estimatedValue?.price
                                ? `$${NormalFormat(estimatedValue?.price)}`
                                : '-'}
                            </small>
                          </p>
                        </div>
                      </div>
                      {viewAs && viewAs === 'chart' && (
                        <>
                          <div className='mt-5'>
                            <div className='row'>
                              <div className='col-lg-3'>
                                <h6 className='mb-0'>
                                  <strong>Revenue (Future Expectation)</strong>
                                </h6>
                                <small>All values are in Billion</small>
                              </div>

                              {revenueGraphData && revenueGraphData.length > 0 && (
                                <div className='col-lg-12 mt-3'>
                                  <ResponsiveContainer
                                    width='100%'
                                    aspect={1}
                                    maxHeight={400}
                                  >
                                    <ComposedChart
                                      data={revenueGraphData}
                                      tick={false}
                                    >
                                      <XAxis
                                        dataKey='year'
                                        axisLine={false}
                                        domain={['auto', 'auto']}
                                        // ticks={ticks}
                                        tick={{
                                          fill: '#212121',
                                          fontSize: '12px',
                                        }}
                                      />
                                      <YAxis
                                        axisLine={false}
                                        domain={['auto', 'auto']}
                                        tick={{
                                          fill: '#212121',
                                          fontSize: '12px',
                                        }}
                                      />
                                      <Tooltip />

                                      <Bar
                                        fill='#9AA7FE'
                                        dataKey='data2'
                                        barSize={35}
                                      >
                                        <LabelList
                                          dataKey='data2'
                                          content={renderCustomizedLabel}
                                        />
                                      </Bar>
                                      <Line
                                        type='monotone'
                                        dataKey='data2'
                                        stroke='#4162FE'
                                        label={
                                          <CustomizedGrowthRateLabel
                                            data={revenueGraphData}
                                          />
                                        }
                                      />
                                    </ComposedChart>
                                  </ResponsiveContainer>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className='mt-5'>
                            <div className='row'>
                              <div className='col-lg-3'>
                                <h6 className='mb-0'>
                                  <strong>Operating Income</strong>
                                </h6>
                                <small>All values are in Billion</small>
                              </div>
                              {operatingIncomeData && (
                                <div className='col-lg-12 mt-3'>
                                  <ResponsiveContainer
                                    width='100%'
                                    aspect={1}
                                    maxHeight={400}
                                  >
                                    <ComposedChart
                                      data={operatingIncomeData}
                                      tick={false}
                                    >
                                      <XAxis
                                        dataKey='year'
                                        axisLine={false}
                                        domain={['auto', 'auto']}
                                        tick={{
                                          fill: '#212121',
                                          fontSize: '12px',
                                        }}
                                      />
                                      <YAxis
                                        axisLine={false}
                                        tick={{
                                          fill: '#212121',
                                          fontSize: '12px',
                                        }}
                                      />
                                      <Tooltip />

                                      <Bar
                                        fill='#9AA7FE'
                                        dataKey='data2'
                                        barSize={35}
                                      >
                                        <LabelList
                                          dataKey='data2'
                                          content={renderCustomizedLabel}
                                        />
                                      </Bar>

                                      <Line
                                        type='monotone'
                                        dataKey='data2'
                                        stroke='#4162FE'
                                        label={
                                          <CustomizedGrowthRateLabel
                                            data={operatingIncomeData}
                                          />
                                        }
                                      />
                                    </ComposedChart>
                                  </ResponsiveContainer>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className='mt-5'>
                            <div className='row'>
                              <div className='col-lg-3'>
                                <h6 className='mb-0'>
                                  <strong>Reinvestments</strong>
                                </h6>
                                <small>All values are in Billion</small>
                              </div>
                              {reinvestmentData && (
                                <div className='col-lg-12 mt-3'>
                                  <ResponsiveContainer
                                    width='100%'
                                    aspect={1}
                                    maxHeight={400}
                                  >
                                    <BarChart
                                      data={reinvestmentData}
                                      tick={false}
                                    >
                                      <XAxis
                                        dataKey='year'
                                        axisLine={false}
                                        domain={['auto', 'auto']}
                                        // ticks={ticks}
                                        tick={{
                                          fill: '#212121',
                                          fontSize: '12px',
                                        }}
                                      />
                                      <YAxis
                                        axisLine={false}
                                        tick={{
                                          fill: '#212121',
                                          fontSize: '12px',
                                        }}
                                      />
                                      <Tooltip />

                                      <Bar
                                        fill='#9AA7FE'
                                        dataKey='data'
                                        barSize={35}
                                      >
                                        <LabelList
                                          dataKey='data'
                                          content={renderCustomizedLabel}
                                        />
                                      </Bar>
                                    </BarChart>
                                  </ResponsiveContainer>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className='mt-5'>
                            <div className='row'>
                              <div className='col-lg-3'>
                                <h6 className='mb-0'>
                                  <strong>Free Cash Flow To Firm</strong>
                                </h6>
                                <small>All values are in Billion</small>
                              </div>
                              {freeCashFlowData && (
                                <div className='col-lg-12 mt-3'>
                                  <ResponsiveContainer
                                    width='100%'
                                    aspect={1}
                                    maxHeight={400}
                                  >
                                    <BarChart
                                      data={freeCashFlowData}
                                      tick={false}
                                    >
                                      <XAxis
                                        dataKey='year'
                                        axisLine={false}
                                        domain={['auto', 'auto']}
                                        // ticks={ticks}
                                        tick={{
                                          fill: '#212121',
                                          fontSize: '12px',
                                        }}
                                      />
                                      <YAxis
                                        axisLine={false}
                                        tick={{
                                          fill: '#212121',
                                          fontSize: '12px',
                                        }}
                                      />
                                      <Tooltip />

                                      <Bar
                                        fill='#9AA7FE'
                                        dataKey='data'
                                        barSize={35}
                                      >
                                        <LabelList
                                          dataKey='data'
                                          content={renderCustomizedLabel}
                                        />
                                      </Bar>
                                    </BarChart>
                                  </ResponsiveContainer>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className='mt-5'>
                            <div className='row'>
                              <div className='col-lg-3'>
                                <h6 className='mb-0'>
                                  <strong>
                                    Invested Capitals &amp; Implied ROIC
                                  </strong>
                                </h6>
                                <small>All values are in Billion</small>
                              </div>
                              {investedCapitalData && (
                                <div className='col-lg-12 mt-3'>
                                  <ResponsiveContainer
                                    width='100%'
                                    aspect={1}
                                    maxHeight={400}
                                  >
                                    <BarChart
                                      data={investedCapitalData}
                                      tick={false}
                                    >
                                      <XAxis
                                        dataKey='year'
                                        axisLine={false}
                                        domain={['auto', 'auto']}
                                        // ticks={ticks}
                                        tick={{
                                          fill: '#212121',
                                          fontSize: '12px',
                                        }}
                                      />
                                      <YAxis
                                        axisLine={false}
                                        tick={{
                                          fill: '#212121',
                                          fontSize: '12px',
                                        }}
                                      />
                                      <Tooltip />

                                      <Bar
                                        fill='#9AA7FE'
                                        dataKey='data'
                                        barSize={35}
                                      >
                                        <LabelList
                                          dataKey='data'
                                          content={renderCustomizedLabel}
                                        />
                                      </Bar>
                                    </BarChart>
                                  </ResponsiveContainer>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className='mt-5'>
                            <div className='row'>
                              <div className='col-lg-3'>
                                <h6 className='mb-0'>
                                  <strong>Price Target</strong>
                                </h6>
                                <small>All values are in Billion</small>
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
                                      <BarChart data={priceTargetData}>
                                        <XAxis
                                          dataKey='year'
                                          axisLine={false}
                                          domain={['auto', 'auto']}
                                          // ticks={ticks}
                                          tick={{
                                            fill: '#212121',
                                            fontSize: '12px',
                                          }}
                                        />
                                        <YAxis
                                          axisLine={false}
                                          tick={{
                                            fill: '#212121',
                                            fontSize: '12px',
                                          }}
                                        />
                                        <Tooltip />

                                        <Bar
                                          fill='#9AA7FE'
                                          dataKey='data'
                                          barSize={35}
                                        >
                                          <LabelList
                                            dataKey='data'
                                            content={
                                              renderCustomizedLabelWithoutBillion
                                            }
                                          />
                                        </Bar>
                                      </BarChart>
                                    </ResponsiveContainer>
                                  </div>
                                )}
                            </div>
                          </div>
                        </>
                      )}

                      {valuationOutput && viewAs && viewAs === 'table' && (
                        <table className='table table-bordered m-0 most_tables'>
                          <thead className='table-light'>
                            <tr>
                              <th scope='col'>-</th>
                              <th scope='col'>Base Year</th>
                              <th scope='col'>1</th>
                              <th scope='col'>2</th>
                              <th scope='col'>3</th>
                              <th scope='col'>4</th>
                              <th scope='col'>5</th>
                              <th scope='col'>6</th>
                              <th scope='col'>7</th>
                              <th scope='col'>8</th>
                              <th scope='col'>9</th>
                              <th scope='col'>10</th>
                              <th scope='col'>Terminal Value</th>
                            </tr>
                          </thead>
                          <tbody className='border-top-0'>
                            {valuationOutput.map((row) => {
                              return (
                                <>
                                  {validTableColumns.includes(
                                    row?.field_name
                                  ) && (
                                    <tr>
                                      <td>{replaceEmpty(row?.field_name)}</td>
                                      <td>{replaceEmpty(row?.base_year)}</td>
                                      <td>{replaceEmpty(row?.year_1)}</td>
                                      <td>{replaceEmpty(row?.year_2)}</td>
                                      <td>{replaceEmpty(row?.year_3)}</td>
                                      <td>{replaceEmpty(row?.year_4)}</td>
                                      <td>{replaceEmpty(row?.year_5)}</td>
                                      <td>{replaceEmpty(row?.year_6)}</td>
                                      <td>{replaceEmpty(row?.year_7)}</td>
                                      <td>{replaceEmpty(row?.year_8)}</td>
                                      <td>{replaceEmpty(row?.year_9)}</td>
                                      <td>{replaceEmpty(row?.year_10)}</td>
                                      <td>{replaceEmpty(row?.terminal)}</td>
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
                  <div className='mb-5'>
                    <h6 className='mb-4 mt-5'>
                      <strong>Additional Notes</strong>
                    </h6>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: companyValuation?.additional_notes
                          ? companyValuation?.additional_notes
                          : '-',
                      }}
                    />

                    <h6 className='mb-4 mt-5'>
                      <strong>Notes For The Professionals</strong>
                    </h6>
                    <ul>
                      <li>
                        The above estimations are derived from the Free Cash
                        Flow To Firm Valuation.
                      </li>
                      <li>
                        We considered the Research &amp; Development expenses as
                        Capital Expense rather than operating expense. Hence, we
                        capitalized the R&amp;D, therefore the current operating
                        margin shown by us may vary with the margin as reported
                        by the company.
                      </li>
                      <li>
                        The company’s Options outstanding(if any) has been taken
                        into account in the valuation.
                      </li>
                      <li>
                        Since we cannot estimate cash flows forever, we
                        estimated cash flows for a “growth period” and then
                        estimated a TERMINAL VALUE(not shown in cash flow), to
                        capture the value at the end of the period.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default ValuationFCFFM;
