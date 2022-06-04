import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { getHistoricalPrices, getintradayprices } from '../../api/company';
import CustomRange from './helper/CustomRange';
import TabbedComponent from './helper/TabbedComponent';
import moment from 'moment';
import { CircularProgress } from '@material-ui/core';
import Chart from 'react-apexcharts';

function PriceChart({ CompanyName }) {
  const [params] = useSearchParams();
  const [ChartData, setChartData] = useState([]);
  const [range, setRange] = useState('1D');
  const [ticks, setTicks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [oneDayEnable, setOneDayEnable] = useState(true);
  const [timeline, setTimeline] = useState([
    { id: '1', name: '1D' },
    { id: '2', name: '1W' },
    { id: '3', name: '1M' },
    { id: '4', name: '1Y' },
    { id: '5', name: '5Y' },
    { id: '6', name: 'MAX' },
  ]);
  const [candleChartData, setCandleChartData] = useState([]);
  const [chartType, setChartType] = useState('CANDLE_CHART');

  useEffect(() => {
    if (!oneDayEnable) {
      setTimeline(timeline.filter((day) => day.name !== '1D'));
      tabSelectedHandler({ name: '1W' });
    }
  }, [oneDayEnable]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      var chart;
      if (range == '1D') {
        chart = await getintradayprices(params.get('symbol'));
        const tempTime = [];
        const tempTicks = [];
        if (chart && chart.status === 200) {
          var tempArr = [];
          if (chart?.data && chart?.data.length > 0) {
            tempArr = chart?.data?.map((el, i) => {
              if (el.minute) {
                const hour = el.minute.substring(0, 2);
                if (!tempTime.includes(hour)) {
                  tempTime.push(hour);
                  tempTicks.push(el.minute);
                }
              }
              return el;
            });

            const candleData = chart?.data
              ?.filter((el) => {
                return el.open && el.close && el.high && el.low;
              })
              .map((el) => {
                const convertedDate = new Date(`${el.date} ${el.minute}`);
                let newObj = {};
                newObj.x = convertedDate;
                newObj.y = [el.open, el.high, el.low, el.close];
                return newObj;
              });
            setCandleChartData(candleData);
            setTicks(tempTicks);
            setChartData(tempArr);
          } else {
            setOneDayEnable(false);
          }
        } else {
          setOneDayEnable(false);
        }
      } else {
        chart = await getHistoricalPrices(params.get('symbol'), range);

        const tempTicks = [];
        if (chart && chart.status === 200) {
          var tempArr = [];
          tempArr = chart?.data?.map((el, i) => {
            el.marketClose = el.close;
            const convertedDate = moment
              .unix(el.date / 1000)
              .format('DD MMM YYYY');
            el.minute = convertedDate;
            tempTicks.push(convertedDate);
            return el;
          });
          setTicks(tempTicks);
          setChartData(tempArr.reverse());

          const candleData = chart?.data
            ?.filter((el) => {
              return el.open && el.close && el.high && el.low;
            })
            .map((el) => {
              let newObj = {};
              newObj.x = el.date;
              newObj.y = [el.open, el.high, el.low, el.close];
              return newObj;
            });
          setCandleChartData(candleData);
        }
      }
      setIsLoading(false);
    })();
  }, [range]);

  const optionsDateTime = {
    chart: {
      type: 'candlestick',
    },
    title: {
      text: 'CandleStick Chart',
      align: 'left',
    },
    xaxis: {
      type: 'datetime',
      labels: {
        format: 'dd MMM yyyy',
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  const options = {
    chart: {
      type: 'candlestick',
    },
    title: {
      text: 'CandleStick Chart',
      align: 'left',
    },
    xaxis: {
      type: 'datetime',
      labels: {
        datetimeFormatter: {
          year: 'yyyy',
          month: 'MMM yyyy',
          day: 'dd MMM',
          hour: 'HH:mm',
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  const tabSelectedHandler = (data) => {
    setRange(data?.name);
  };
  return (
    <div className='price_chart mb-5'>
      <h6 className='mb-4'>
        <strong>Price Chart</strong>
      </h6>
      <div className='d-flex align-items-center justify-content-between'>
        <TabbedComponent tabs={timeline} onTabSelected={tabSelectedHandler} />
        <CustomRange />
      </div>

      <div className='d-flex align-items-center justify-content-end mt-3 mb-3'>
        <select
          className='form-select w-25'
          aria-label='Default select example'
          onChange={(e) => {
            setChartType(e.target.value);
          }}
        >
          <option value='LINE_CHART'>Line Chart</option>
          <option selected value='CANDLE_CHART'>
            Candle Chart
          </option>
        </select>
      </div>

      {isLoading && (
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

      {!isLoading && chartType === 'LINE_CHART' && (
        <ResponsiveContainer width='100%' aspect={1} maxHeight={250}>
          <AreaChart
            data={ChartData}
            margin={{ top: 10, right: 30, left: -50, bottom: 0 }}
          >
            <defs>
              <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
              </linearGradient>
              <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey='minute'
              axisLine={false}
              ticks={ticks}
              tick={{ fill: '#212121', fontSize: '12px' }}
              padding={{ top: 20 }}
              domain={['auto', 'auto']}
              interval={range === '1D' ? 0 : ''}
            />
            <YAxis axisLine={false} tick={false} />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='close'
              stroke='#82ca9d'
              fillOpacity={1}
              fill='url(#colorPv)'
            />
          </AreaChart>
        </ResponsiveContainer>
      )}

      {!isLoading && chartType === 'CANDLE_CHART' && (
        <>
          {candleChartData && candleChartData.length > 0 && (
            <Chart
              options={options}
              data={candleChartData}
              series={[{ data: candleChartData }]}
              type='candlestick'
              height={350}
            />
          )}
          {/* {candleChartData && candleChartData.length > 0 && range === '1D' && (
            <Chart
              options={options}
              data={candleChartData}
              series={[{ data: candleChartData }]}
              type='candlestick'
              height={350}
            />
          )}

          {candleChartData && candleChartData.length > 0 && range === '1W' && (
            <Chart
              options={optionsDateTime}
              data={candleChartData}
              series={[{ data: candleChartData }]}
              type='candlestick'
              height={350}
            />
          )}

          {candleChartData && candleChartData.length > 0 && range === '1M' && (
            <Chart
              options={optionsDateTime}
              data={candleChartData}
              series={[{ data: candleChartData }]}
              type='candlestick'
              height={350}
            />
          )}

          {candleChartData && candleChartData.length > 0 && range === '1Y' && (
            <Chart
              options={optionsDateTime}
              data={candleChartData}
              series={[{ data: candleChartData }]}
              type='candlestick'
              height={350}
            />
          )}

          {candleChartData && candleChartData.length > 0 && range === '5Y' && (
            <Chart
              options={optionsDateTime}
              data={candleChartData}
              series={[{ data: candleChartData }]}
              type='candlestick'
              height={350}
            />
          )}

          {candleChartData && candleChartData.length > 0 && range === 'MAX' && (
            <Chart
              options={optionsDateTime}
              data={candleChartData}
              series={[{ data: candleChartData }]}
              type='candlestick'
              height={350}
            />
          )} */}
        </>
      )}
    </div>
  );
}

export default PriceChart