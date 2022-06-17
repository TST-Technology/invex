import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getValuationData } from '../api/valuation';
import { getSectorAndIndustryBySymbol } from '../api/sectors';
import { getBookKeyStatus } from '../api/commonApi';
import { NormalFormat } from '../Common/NumberFormat';
import CompanyView from '../Options/Quote/CompanyView/CompanyView';
import { CircularProgress } from '@material-ui/core';
import { getCompanyDataBySymbol } from '../api/commonApi';
import { getCompanyLogo } from '../api/company';
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

const Valuation = () => {
  const { symbol } = useParams();
  const [data, setData] = useState();
  const [companyValuation, setCompanyValuation] = useState();
  const [sector, setSector] = useState(null);
  const [keyStatus, setKeyStatus] = useState(null);
  const [roic, setROIC] = useState(null);
  const [invested, setInvested] = useState(null);
  const [logo, setLogo] = useState();
  const [Loading, setLoading] = useState(false);
  const [Company, setCompany] = useState(null);
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
  const yearArr = [
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

  const getGraphData = (valuation) => {
    let year = 2022;
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

  useEffect(() => {
    if (valuationOutput) {
      valuationOutput.forEach((valuation, index) => {
        switch (valuation?.field_name) {
          case 'Revenue growth rate':
            const revenueGrowthData = getGraphData(valuation);
            console.log(revenueGrowthData);
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

  const getValuationOutput = () => {
    const tempValuationOutput = companyValuation?.YearlyValuationOutputs.filter(
      (element) => {
        return element.case === valuationOutputFilter;
      }
    );

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
  };

  useEffect(() => {
    (async () => {
      if (symbol) {
        setLoading(true);
        var data = await getValuationData(symbol);
        if (data && data.data) {
          setData(data.data[0]);
          if (
            data.data[0] &&
            data.data[0].CompanyValuations &&
            data.data[0].CompanyValuations[0]
          ) {
            setCompanyValuation(data.data[0].CompanyValuations[0]);

            const pastPrediction = data.data[0].CompanyValuations.map((val) => {
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

              return tempObj;
            });

            if (pastPrediction && pastPrediction.length > 4) {
              pastPrediction = pastPrediction.slice(0, 4);
            }

            setPastPredictionGraphData(pastPrediction);
            console.log(pastPrediction);
          }
        }

        const sector = await getSectorAndIndustryBySymbol(symbol);
        if (sector && sector?.status == 200) {
          setSector(sector?.data);
        }

        var res = await getBookKeyStatus(symbol);
        if (res && res?.status === 200) {
          setKeyStatus(res?.data?.quote);
        }

        var data = await getCompanyDataBySymbol(symbol);
        if (data && data.status === 200) {
          setCompany(data?.data);
        } else {
          setCompany(null);
        }

        const logoData = await getCompanyLogo(symbol);
        if (
          logoData &&
          logoData.data &&
          logoData.data.url &&
          logoData.status === 200
        ) {
          setLogo(logoData.data.url);
        }

        setLoading(false);
      }
    })();
  }, [symbol]);

  return (
    <>
      {data && !Loading && (
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
                    Loading={Loading}
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
                                  ? `$${NormalFormat(
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
                                  ? `$${NormalFormat(
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
                                  ? `$${NormalFormat(
                                      companyValuation?.equity_book_value
                                    )}`
                                  : '-'}
                              </span>
                            </li>
                            <li>
                              <a href='javascript:void(0)'>Total Debt</a>{' '}
                              <span>
                                {companyValuation?.debit_book_value
                                  ? `$${NormalFormat(
                                      companyValuation?.debit_book_value
                                    )}`
                                  : '-'}
                              </span>
                            </li>
                            <li>
                              <a href='javascript:void(0)'>Invested capital</a>{' '}
                              <span>
                                {invested ? `$${NormalFormat(invested)}` : '-'}
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
                    >
                      <BarChart data={pastPredictionGraphData} tick={false}>
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

                        <Bar fill='#88D1DC' dataKey='best' barSize={35} />
                        <Bar fill='#F8DF86' dataKey='base' barSize={35} />
                        <Bar fill='#E88190' dataKey='worst' barSize={35} />
                        <Bar
                          fill='#9AA7FE'
                          dataKey='actualPrice'
                          barSize={35}
                        />
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
                          <td>-</td>
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
                          <td>-</td>
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
                          <td>-</td>
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
                          <td>-</td>
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
                          <td>-</td>
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
                          <td>-</td>
                        </tr>
                        <tr>
                          <td>Target operting margin</td>
                          <td>
                            {companyValuation &&
                            companyValuation?.pre_tax_debt_cost
                              ? `${companyValuation?.pre_tax_debt_cost}%`
                              : '-'}
                          </td>
                          <td>
                            {companyValuation &&
                            companyValuation?.pre_tax_debt_cost
                              ? `${companyValuation?.pre_tax_debt_cost}%`
                              : '-'}
                          </td>
                          <td>
                            {companyValuation &&
                            companyValuation?.pre_tax_debt_cost
                              ? `${companyValuation?.pre_tax_debt_cost}%`
                              : '-'}
                          </td>
                          <td>-</td>
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
                              Value of equity (Millions):{' '}
                              {estimatedValue?.value_of_equity
                                ? `${NormalFormat(
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
                      <div className='mt-5'>
                        <div className='row'>
                          <div className='col-lg-3'>
                            <h6 className='mb-0'>
                              <strong>Revenue (Future Expectation)</strong>
                            </h6>
                            <small>All values are in Billion</small>
                          </div>

                          {revenueGraphData &&
                            revenueGraphData.length > 0 &&
                            revenueGraphData[0].data2 && (
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
                                      fill='#F8DF86'
                                      dataKey='data2'
                                      barSize={35}
                                    />

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

                                  <Bar
                                    fill='#F8DF86'
                                    dataKey='data2'
                                    barSize={35}
                                  />

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
                                <BarChart data={reinvestmentData} tick={false}>
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

                                  <Bar
                                    fill='#F8DF86'
                                    dataKey='data'
                                    barSize={35}
                                  />
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
                                <BarChart data={freeCashFlowData} tick={false}>
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

                                  <Bar
                                    fill='#F8DF86'
                                    dataKey='data'
                                    barSize={35}
                                  />
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
                                    dataKey='data'
                                    barSize={35}
                                  />
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
                                      fill='#F8DF86'
                                      dataKey='data'
                                      barSize={35}
                                    />
                                  </BarChart>
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

      {Loading && (
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

export default Valuation;
