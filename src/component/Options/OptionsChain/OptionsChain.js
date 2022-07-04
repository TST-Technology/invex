import React, { useState, useEffect, PureComponent } from 'react';
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import { getBookKeyStatus, getCompanyDataBySymbol } from '../../api/commonApi';
import { getCompanyLogo } from '../../api/company';
import { getOptionsChainData, getOptionsChainGraph } from '../../api/Option';
import { getOneDayBeforeDate } from '../../Common/commonFunctions';
import CompanyView from '../Quote/CompanyView/CompanyView';
import ArrowDownImg from '../../Common/Images/arrow-down.svg';
import { CircularProgress } from '@material-ui/core';
import Dialog from '@mui/material/Dialog';
import {
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
} from 'recharts';
import { RemoveDot } from '../../Common/Chart/Recharts';
import moment from 'moment';

const OptionsChain = () => {
  const { symbol } = useParams();
  const [Company, setCompany] = useState(null);
  const [KeyStatus, setKeyStatus] = useState(null);
  const [optionChainData, setOptionChainData] = useState(null);
  const [expDates, setExpDates] = useState([]);
  const [expDateOption, setExpDateOption] = useState(null); // option list to load in select library
  const [selectedDatesOption, setSelectedDatesOption] = useState(null); // list of selected dates in form for {label: "", value: ""}
  const [selectedDates, setSelectedDates] = useState(null); // list of selected dates values
  const [columnList, setColumnList] = useState(null);
  const [columnOption, setColumnOption] = useState(null);
  const [selectedColumnOption, setSelectedColumnOption] = useState(null);
  const [logo, setLogo] = useState();
  const [Loading, setLoading] = useState(false);
  const [isChartDialogVisible, setChartDialogVisible] = useState(false);
  const [chartData, setChartData] = useState([]);
  const [isChartLoading, setChartLoading] = useState(false);
  const [isNoChartData, setNoChartData] = useState(false);

  const currentDate = getOneDayBeforeDate();
  const excludeColumnList = ['Strike', 'Symbol', 'Change', 'Mid', 'Gamma'];

  useEffect(() => {
    (async () => {
      if (symbol) {
        setLoading(true);
        const param = {
          date: currentDate,
          symbol: symbol,
        };
        var chainData = await getOptionsChainData(param);
        setExpDates(chainData?.exp_date);
        setOptionChainData(chainData?.data);

        var data = await getCompanyDataBySymbol(symbol);
        if (data && data.status === 200) {
          setCompany(data?.data);
        } else {
          setCompany(null);
        }
        var res = await getBookKeyStatus(symbol);
        if (res && res?.status === 200) {
          setKeyStatus(res?.data?.quote);
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
  }, []);

  useEffect(() => {
    if (expDates) {
      const allDates = expDates.map((exp) => {
        const newObj = {
          label: convertDate(exp),
          value: exp,
        };
        return newObj;
      });

      setExpDateOption(allDates);
      setSelectedDatesOption([allDates[0]]);
      setSelectedDates([expDates[0]]);
    }
  }, [expDates]);

  // useEffect(() => {
  //   console.log('columnList =>', columnList);
  //   if (columnList) {
  //     const tempList = columnList.map((column) => {
  //       return { label: column, value: column };
  //     });
  //     setColumnOption(tempList);
  //     setSelectedColumnOption(tempList);
  //   }
  // }, [columnList]);

  useEffect(() => {
    if (optionChainData) {
      const temp = Object.values(optionChainData).map((val) => val);
      const keys = Object.keys(temp[0]).filter((val) => {
        if (firstIsUppercase(val)) {
          if (excludeColumnList.includes(val)) {
            return false;
          } else {
            return true;
          }
        } else {
          return false;
        }
      });
      console.log('columns =>', keys);
      setColumnList(keys);

      const tempList = keys.map((column) => {
        return { label: column, value: column };
      });

      setColumnOption(tempList);
      setSelectedColumnOption(tempList);
    }
  }, [optionChainData]);

  const convertDate = (date) => {
    return moment(date).format('MMM, DD YY');
  };

  const handleChange = (values) => {
    console.log(values);
    if (values && values.length > 0) {
      setSelectedDatesOption(values);
      const temp = values.map((row) => row.value);
      console.log(temp);
      setSelectedDates([...temp]);
    } else {
      setSelectedDates([...values]);
      setSelectedDatesOption(values);
    }
  };

  const handleExpandDetails = (value) => {
    console.log(value);
    if (value && !selectedDates.includes(value)) {
      const temp = selectedDates;
      temp.push(value);
      console.log(temp);
      setSelectedDates([...temp]);

      const tempOptions = selectedDatesOption;
      console.log(selectedDatesOption);
      tempOptions.push({
        label: convertDate(value),
        value: value,
      });
      console.log(tempOptions);
      setSelectedDatesOption([...tempOptions]);
    } else {
      console.log('else');
      const temp = selectedDates.filter((date) => date !== value);
      console.log('After =>', temp);
      // temp.push(value);
      setSelectedDates([...temp]);

      const tempOptions = selectedDatesOption.filter(
        (option) => option.value !== value
      );
      console.log('After =>', tempOptions);
      // tempOptions.push({ label: value, value: value });
      setSelectedDatesOption([...tempOptions]);
    }
  };

  const handleColumnListChange = (values) => {
    if (values) {
      setSelectedColumnOption(values);
      const temp = values.map((row) => row.value);
      console.log(temp);
      setColumnList([...temp]);
    }
  };

  function firstIsUppercase(str) {
    if (typeof str !== 'string' || str.length === 0) {
      return false;
    }

    if (str[0].toUpperCase() === str[0]) {
      return true;
    }

    return false;
  }

  const showOptionSymbolChart = async (symbol) => {
    if (symbol) {
      setChartDialogVisible(true);
      setChartLoading(true);
      const param = {
        date: currentDate,
        option_symbol: symbol,
      };
      const data = await getOptionsChainGraph(param);

      if (data && data?.Dates && data?.Dates.length > 0) {
        const tempChartData = data?.Dates.map((date, index) => {
          const tempObj = {};
          tempObj.call = data?.Calls_mid && data?.Calls_mid[index];
          tempObj.put = data?.Puts_mid && data?.Puts_mid[index];
          tempObj.date = date;
          return tempObj;
        });
        setChartData(tempChartData);
        setNoChartData(false);
      } else {
        setNoChartData(true);
        setChartData([]);
      }
      setChartLoading(false);
    }
  };

  class CustomizedXAxisTick extends PureComponent {
    render() {
      const { x, y, stroke, payload } = this.props;

      return (
        <g transform={`translate(${x},${y})`}>
          <text
            x={60}
            y={2}
            textAnchor='end'
            fill='#212121'
            fontSize={'10px'}
            transform='rotate(90)'
          >
            {payload.value}
          </text>
        </g>
      );
    }
  }

  return (
    <>
      <div className='row'>
        <div className='col-lg-12 mb-4'>
          <CompanyView
            Loading={Loading}
            KeyStatus={KeyStatus}
            Company={Company}
            logo={logo}
          />

          {!Loading && expDateOption && (
            <div className='card p-3'>
              <form
                className='form-group'
                role='search'
                method='get'
                id='searchform'
                action
              >
                {/* <div className='d-lg-inline-flex d-md-flex align-items-center float-start'>
                <label htmlFor className='me-3 font-bd'>
                  Stratergy
                </label>
                <select
                  className='form-select me-3'
                  aria-label='Default select example'
                >
                  <option selected>Calls &amp; Puts</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
                <label htmlFor className='me-3 font-bd'>
                  Strikes
                </label>
                <select
                  className='form-select me-3'
                  aria-label='Default select example'
                >
                  <option selected>Calls &amp; Puts</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
                <label htmlFor className='me-3 font-bd'>
                  Volume
                </label>
                <select
                  className='form-select me-3'
                  aria-label='Default select example'
                >
                  <option selected>Calls &amp; Puts</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
                <label htmlFor className='me-3 font-bd'>
                  Open Int
                </label>
                <select
                  className='form-select me-3'
                  aria-label='Default select example'
                >
                  <option selected>Calls &amp; Puts</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
                <label htmlFor className='me-3 font-bd'>
                  Date
                </label>
                <select
                  className='form-select me-3'
                  aria-label='Default select example'
                >
                  <option selected>Calls &amp; Puts</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div> */}
                <Select
                  isMulti
                  defaultValue={selectedDatesOption}
                  value={selectedDatesOption}
                  name='expDate'
                  options={expDateOption}
                  classNamePrefix='select'
                  placeholder='Select Date'
                  width='100%'
                  // isClearable={false}
                  onChange={handleChange}
                  hideSelectedOptions={false}
                />

                <div className='mt-4'>
                  <Select
                    isMulti
                    defaultValue={selectedColumnOption}
                    name='columnList'
                    options={columnOption}
                    classNamePrefix='select'
                    placeholder='Select Columns'
                    width='100%'
                    isClearable={false}
                    onChange={handleColumnListChange}
                    hideSelectedOptions={false}
                  />
                </div>
              </form>
            </div>
          )}
        </div>

        {!Loading && optionChainData && (
          <div className='table-responsive mt-4 option-chain-table'>
            <table className='table table-bordered m-0 cmplx-tbl'>
              {optionChainData &&
                Object.values(optionChainData).map((row, index) => {
                  return (
                    <>
                      <thead className='labels'>
                        <tr>
                          <th
                            colSpan={columnList.length}
                            className='text-center'
                          >
                            <b className='text-success font-lbd'>Calls</b>
                            <span className='font-md font14 float-start'>
                              {/* <label htmlFor='accounting'>
                                Atribute selectior
                              </label> */}
                              <img
                                style={{ cursor: 'pointer' }}
                                src={ArrowDownImg}
                                className='img-fluid'
                                alt='Toggle'
                                onClick={() =>
                                  handleExpandDetails(expDates[index])
                                }
                              />
                            </span>
                          </th>
                          <th className='text-center border-left-right border-bottom-0'>
                            {expDates[index]
                              ? convertDate(expDates[index])
                              : '-'}
                          </th>
                          <th
                            colSpan={columnList.length}
                            className='text-center'
                          >
                            <b className='text-danger font-lbd'>Puts</b>
                            <span className='font-md font14 float-end'>
                              {/* <label htmlFor='accounting'>
                                Atribute selectior
                              </label> */}
                              <img
                                style={{ cursor: 'pointer' }}
                                src={ArrowDownImg}
                                className='img-fluid'
                                alt='Toggle'
                                onClick={() =>
                                  handleExpandDetails(expDates[index])
                                }
                              />
                            </span>
                          </th>
                        </tr>
                      </thead>

                      {/* {index === 0 && ( */}
                      {selectedDates.includes(expDates[index]) && (
                        <thead>
                          <tr>
                            {/* {columnList.includes('Symbol') && <th>Symbol</th>} */}
                            {columnList.includes('Last') && <th>Last</th>}
                            {/* {columnList.includes('Change') && <th>Change</th>} */}
                            {columnList.includes('Bid') && <th>Bid</th>}
                            {columnList.includes('Ask') && <th>Ask</th>}
                            {columnList.includes('Volume') && <th>Volume</th>}
                            {columnList.includes('OpenInterest') && (
                              <th>Open Int</th>
                            )}
                            {columnList.includes('IVMean') && <th>Imp Vol</th>}
                            {columnList.includes('Delta') && <th>Delta</th>}
                            {columnList.includes('Theta') && <th>Theta</th>}
                            <th className='text-center border-left-right border-top-bottom-0'>
                              Strike
                            </th>
                            {/* {columnList.includes('Symbol') && <th>Symbol</th>} */}
                            {columnList.includes('Last') && <th>Last</th>}
                            {/* {columnList.includes('Change') && <th>Change</th>} */}
                            {columnList.includes('Bid') && <th>Bid</th>}
                            {columnList.includes('Ask') && <th>Ask</th>}
                            {columnList.includes('Volume') && <th>Volume</th>}
                            {columnList.includes('OpenInterest') && (
                              <th>Open Int</th>
                            )}
                            {columnList.includes('IVMean') && <th>Imp Vol</th>}
                            {columnList.includes('Delta') && <th>Delta</th>}
                            {columnList.includes('Theta') && <th>Theta</th>}
                          </tr>
                        </thead>
                      )}
                      {/* )} */}

                      <tbody className='hide'>
                        {row &&
                          row?.Symbol &&
                          selectedDates.includes(expDates[index]) &&
                          Object.values(row?.Symbol).map((ele, i) => {
                            return (
                              <>
                                <tr>
                                  {/* {columnList.includes('Symbol') && (
                                    <td className='lup'>
                                      {row?.Symbol[i] ? row?.Symbol[i] : '-'}
                                    </td>
                                  )} */}
                                  {columnList.includes('Last') && (
                                    <td className='lup'>
                                      {row?.Last[i] ? row?.Last[i] : '-'}
                                    </td>
                                  )}
                                  {/* {columnList.includes('Change') && (
                                    <td className='lup'>
                                      {row?.Change[i] ? row?.Change[i] : '-'}
                                    </td>
                                  )} */}
                                  {columnList.includes('Bid') && (
                                    <td className='lup'>
                                      {row?.Bid[i] ? row?.Bid[i] : '-'}
                                    </td>
                                  )}
                                  {columnList.includes('Ask') && (
                                    <td className='lup'>
                                      {row?.Ask[i] ? row?.Ask[i] : '-'}
                                    </td>
                                  )}
                                  {columnList.includes('Volume') && (
                                    <td className='lup'>
                                      {row?.Volume[i] ? row?.Volume[i] : '-'}
                                    </td>
                                  )}
                                  {columnList.includes('OpenInterest') && (
                                    <td className='lup'>
                                      {row?.OpenInterest[i]
                                        ? row?.OpenInterest[i]
                                        : '-'}
                                    </td>
                                  )}
                                  {columnList.includes('IVMean') && (
                                    <td className='lup'>
                                      {row?.IVMean[i]
                                        ? `${row?.IVMean[i]}%`
                                        : '-'}
                                    </td>
                                  )}
                                  {columnList.includes('Delta') && (
                                    <td className='lup'>
                                      {row?.Delta[i] ? row?.Delta[i] : '-'}
                                    </td>
                                  )}
                                  {columnList.includes('Theta') && (
                                    <td className='lup'>
                                      {row?.Theta[i] ? row?.Theta[i] : '-'}
                                    </td>
                                  )}
                                  <td className='text-center border-left-right border-top-bottom-0'>
                                    {row?.Strike[i] ? row?.Strike[i] : '-'}
                                  </td>
                                  {/* {columnList.includes('Symbol') && (
                                    <td>
                                      {row?.symbol[i] ? row?.symbol[i] : '-'}
                                    </td>
                                  )} */}
                                  {columnList.includes('Last') && (
                                    <td>{row?.last[i] ? row?.last[i] : '-'}</td>
                                  )}
                                  {/* {columnList.includes('Change') && (
                                    <td>
                                      {row?.change[i] ? row?.change[i] : '-'}
                                    </td>
                                  )} */}
                                  {columnList.includes('Bid') && (
                                    <td>{row?.bid[i] ? row?.bid[i] : '-'}</td>
                                  )}
                                  {columnList.includes('Ask') && (
                                    <td>{row?.ask[i] ? row?.ask[i] : '-'}</td>
                                  )}
                                  {columnList.includes('Volume') && (
                                    <td>
                                      {row?.volume[i] ? row?.volume[i] : '-'}
                                    </td>
                                  )}
                                  {columnList.includes('OpenInterest') && (
                                    <td>
                                      {row?.openInterest[i]
                                        ? row?.openInterest[i]
                                        : '-'}
                                    </td>
                                  )}
                                  {columnList.includes('IVMean') && (
                                    <td>
                                      {row?.iVMean[i]
                                        ? `${row?.iVMean[i]}%`
                                        : '-'}
                                    </td>
                                  )}
                                  {columnList.includes('Delta') && (
                                    <td>
                                      {row?.delta[i] ? row?.delta[i] : '-'}
                                    </td>
                                  )}
                                  {columnList.includes('Theta') && (
                                    <td>
                                      {row?.theta[i] ? row?.theta[i] : '-'}
                                    </td>
                                  )}
                                </tr>
                              </>
                            );
                          })}
                      </tbody>
                    </>
                  );
                })}
            </table>
          </div>
        )}

        {Loading && (
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

        <Dialog
          open={isChartDialogVisible}
          onClose={() => setChartDialogVisible(false)}
          fullWidth={true}
          maxWidth='md'
          sx={{ m: 3 }}
        >
          {isChartLoading && (
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
          {!isChartLoading && (
            <div className='dialogContent'>
              <b>MID Chart</b>
              {isNoChartData && (
                <div className='height400 d-flex align-items-center justify-content-center'>
                  <h2>No Data Available.</h2>
                </div>
              )}
              {!isNoChartData && (
                <ResponsiveContainer width='100%' aspect={1} maxHeight={400}>
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
                      // angle={70}
                      tick={<CustomizedXAxisTick />}
                      interval={0}
                      height={80}
                    />
                    <YAxis
                      axisLine={false}
                      tick={{
                        fill: '#212121',
                        fontSize: '10px',
                      }}
                    />
                    <Tooltip />

                    <Line
                      fill='#7D8EFE'
                      dataKey='call'
                      dot={<RemoveDot />}
                    ></Line>
                    <Line
                      fill='#FD8EFE'
                      dataKey='put'
                      dot={<RemoveDot />}
                    ></Line>
                  </LineChart>
                </ResponsiveContainer>
              )}
            </div>
          )}
        </Dialog>
      </div>
    </>
  );
};;;;;;;;;;

export default OptionsChain;
