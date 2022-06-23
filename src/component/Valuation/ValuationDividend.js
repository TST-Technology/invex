import React, { useEffect, useState } from 'react';
import { NormalFormat } from '../Common/NumberFormat';
import CompanyView from '../Options/Quote/CompanyView/CompanyView';
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

const ValuationDividend = ({ allData, sector, keyStatus, logo, Company }) => {
  const [data, setData] = useState();
  const [companyValuation, setCompanyValuation] = useState();
  const [valuationOutput, setValuationOutput] = useState(null);
  const [expectedGrowthRate, setExpectedGrowthRate] = useState(null);
  const [payoutRatioGraph, setPayoutRatioGraph] = useState(null);
  const [priceTarget, setPriceTarget] = useState(null);
  const [freeCashFlowData, setFreeCashFlowData] = useState(null);
  const [investedCapitalData, setInvestedCapital] = useState(null);
  const [priceTargetData, setPriceTargetCapital] = useState(null);
  const [valuationOutputFilter, setValuationOutputFilter] = useState('best');
  const [pastPredictionGraphData, setPastPredictionGraphData] = useState(null);
  const [estimatedValue, setEstimatedValue] = useState(null);
  const [percent, setPercent] = useState(null);
  const [costOfEquity, setCostOfEquity] = useState(null);
  const [payoutRatio, setPayoutRatio] = useState(null);
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

  useEffect(() => {
    console.log(allData);
    (async () => {
      if (allData) {
        setData(allData);
        if (
          allData &&
          allData.DivDisModelInputs &&
          allData.DivDisModelInputs[0]
        ) {
          setCompanyValuation(allData.DivDisModelInputs[0]);
          console.log(allData.DivDisModelInputs);

          const pastPrediction = allData.DivDisModelInputs.map((val) => {
            let best, base, worst, actualPrice;

            console.log('Before =>', val?.DivdiscountOutputs);

            val &&
              val?.DivdiscountOutputs.sort(function (a, b) {
                return b.year - a.year || b.quarter - a.quarter;
              });

            console.log('After =>', val?.DivdiscountOutputs);

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

            return tempObj;
          });

          if (pastPrediction && pastPrediction.length > 4) {
            pastPrediction = pastPrediction.slice(0, 4);
          }

          setPastPredictionGraphData(pastPrediction);
          console.log(pastPrediction);
        }
      }
    })();
  }, []);

  useEffect(() => {
    if (companyValuation) {
      getValuationOutput();
      companyValuation?.YearlyDivdiscountOutputs.forEach((element, index) => {
        if (
          element?.case &&
          element?.field_name &&
          element?.case === 'base' &&
          element?.field_name === 'Cost of Equity'
        ) {
          setCostOfEquity(element?.base_year);
        }

        if (
          element?.case &&
          element?.field_name &&
          element?.case === 'base' &&
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
            console.log(epsData);
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

  const getGraphData = (valuation) => {
    let year = new Date().getFullYear();
    let tempArr = [];
    Object.keys(valuation).forEach((key) => {
      if (yearArr.includes(key)) {
        let newObj = {};
        newObj.year = year + 1;
        newObj.data = valuation[key];
        year += 1;
        tempArr.push(newObj);
      }
    });
    console.log(tempArr);
    return tempArr;
  };

  const getValuationOutput = () => {
    const tempValuationOutput =
      companyValuation?.YearlyDivdiscountOutputs.filter((element) => {
        return element.input_case === valuationOutputFilter;
      });

    console.log(tempValuationOutput);

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
  };

  const CustomizedLabel = (props) => {
    const { x, y, stroke, value } = props;

    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor='middle'>
        ${value}
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
          ${value}
        </text>
      </g>
    );
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
                    <div className='col-lg-6'>
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

                    <div className='col-lg-6'>
                      <div className='col-lg-12 mt-3 mb-3'>
                        <h6 className='mb-3'>
                          <strong>Company's Current Financials</strong>
                        </h6>
                        <div className='key_status'>
                          <ul>
                            <li>
                              <a href='javascript:void(0)'>Net Income</a>{' '}
                              <span>
                                {companyValuation?.net_income
                                  ? `$${companyValuation?.net_income}`
                                  : '-'}
                              </span>
                            </li>
                            <li>
                              <a href='javascript:void(0)'>
                                Book Value of Equity(Current Year)
                              </a>{' '}
                              <span>
                                {companyValuation?.equity_book_value
                                  ? `$${companyValuation?.equity_book_value}`
                                  : '-'}
                              </span>
                            </li>
                            <li>
                              <a href='javascript:void(0)'>
                                Current Earnings per share
                              </a>{' '}
                              <span>
                                {companyValuation?.current_earning_per_share
                                  ? `$${companyValuation?.current_earning_per_share}`
                                  : '-'}
                              </span>
                            </li>
                            <li>
                              <a href='javascript:void(0)'>
                                Current Dividends per share
                              </a>{' '}
                              <span>
                                {companyValuation?.current_dividends_per_share
                                  ? `$${companyValuation?.current_dividends_per_share}`
                                  : '-'}
                              </span>
                            </li>
                            <li>
                              <a href='javascript:void(0)'>Cost Of Equity</a>{' '}
                              <span>
                                {costOfEquity ? `${costOfEquity}%` : '-'}
                              </span>
                            </li>
                            <li>
                              <a href='javascript:void(0)'>Return On Equity</a>{' '}
                              <span>11.3%</span>
                            </li>
                            <li>
                              <a href='javascript:void(0)'>Payout Ratio</a>{' '}
                              <span>
                                {payoutRatio ? `${payoutRatio}%` : '-'}
                              </span>
                            </li>
                            <li>
                              <a href='javascript:void(0)'>Retention Ratio</a>{' '}
                              <span>78.2%</span>
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
                            content={renderCustomizedLabel}
                          />
                        </Bar>
                        <Bar fill='#F8DF86' dataKey='base' barSize={35}>
                          <LabelList
                            dataKey='base'
                            content={renderCustomizedLabel}
                          />
                        </Bar>
                        <Bar fill='#E88190' dataKey='worst' barSize={35}>
                          <LabelList
                            dataKey='worst'
                            content={renderCustomizedLabel}
                          />
                        </Bar>
                        <Bar fill='#9AA7FE' dataKey='actualPrice' barSize={35}>
                          <LabelList
                            dataKey='actualPrice'
                            content={renderCustomizedLabel}
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
                          <td>EPS Growth this year</td>
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
                          <td>-</td>
                        </tr>
                        <tr>
                          <td>EPS Growth next year</td>
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
                          <td>-</td>
                        </tr>
                        <tr>
                          <td>
                            EPS Compound anual revenue growth rate for Year 3-5
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
                          <td>-</td>
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
                          <td>-</td>
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
                          <td>-</td>
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
                          <td>-</td>
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
                          <td>-</td>
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
                          <td>-</td>
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
                          <td>-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className='card companyviewblk compprofile_block mt-5 mb-4'>
                    <div className='card-header'>
                      <div className='d-flex align-items-center justify-content-left bg-light p-2 border-bottom-0'>
                        <h6 className='m-0'>
                          <strong>
                            Valuation Output <base />
                          </strong>
                        </h6>
                      </div>
                    </div>
                    <div className='card-body'>
                      <div className='top_button_panel mb-3'>
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
                      </div>
                      <div className='scenario justify-content-between'>
                        <span className='best_scena'>
                          Estimated value / share
                        </span>
                        <div className='chart-text'>
                          <p className='card-text up m-0'>
                            <strong>
                              {estimatedValue?.stock_value
                                ? `$${estimatedValue?.stock_value.toFixed(2)}`
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
                              Value of equity (Millions):{' '}
                              {estimatedValue?.equity_value
                                ? `${estimatedValue?.equity_value.toFixed(2)}`
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
                      <div className='mt-5'>
                        <div className='row'>
                          <div className='col-lg-3'>
                            <h6 className='mb-0'>
                              <strong>Earnings Per Share</strong>
                            </h6>
                            <small>All values are in Billion</small>
                          </div>

                          {expectedGrowthRate && expectedGrowthRate.length > 0 && (
                            <div className='col-lg-12 mt-3'>
                              <ResponsiveContainer
                                width='100%'
                                aspect={1}
                                maxHeight={400}
                              >
                                <ComposedChart
                                  data={expectedGrowthRate}
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
                                    fill='#F8DF86'
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
                                    dataKey='data'
                                    stroke='#4162FE'
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
                              <strong>
                                Payout Ratio and Dividend Per Share
                              </strong>
                            </h6>
                            <small>All values are in Billion</small>
                          </div>
                          {payoutRatioGraph && (
                            <div className='col-lg-12 mt-3'>
                              <ResponsiveContainer
                                width='100%'
                                aspect={1}
                                maxHeight={400}
                              >
                                <ComposedChart
                                  data={payoutRatioGraph}
                                  tick={false}
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

                                  <Bar
                                    fill='#F8DF86'
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
                                    dataKey='data'
                                    stroke='#4162FE'
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
                              <strong>Price Target</strong>
                            </h6>
                            <small>All values are in Billion</small>
                          </div>
                          {priceTarget && (
                            <div className='col-lg-12 mt-3'>
                              <ResponsiveContainer
                                width='100%'
                                aspect={1}
                                maxHeight={400}
                              >
                                <LineChart data={priceTarget} tick={false}>
                                  <XAxis
                                    dataKey='year'
                                    axisLine={false}
                                    domain={['auto', 'auto']}
                                    // ticks={ticks}
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

                                  <Line
                                    fill='#4162FE'
                                    dataKey='data'
                                    label={<CustomizedLabel />}
                                  ></Line>
                                </LineChart>
                              </ResponsiveContainer>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mb-5'>
                    <h6 className='mb-4 mt-5'>
                      <strong>Risk</strong>
                    </h6>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: companyValuation?.risk
                          ? companyValuation?.risk
                          : '-',
                      }}
                    />
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

export default ValuationDividend;
