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
import HiloChart from '../../Common/Chart/HiLo';
import { formatMs } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
// import { dates } from '../../Common/Chart/data'

const data = [
  {
    name: '01',
    uv: 4000,
    pv: 1000,
    amt: 2400,
  },
  {
    name: '02',
    uv: 3000,
    pv: 1100,
    amt: 2210,
  },
  {
    name: '03',
    uv: 2000,
    pv: 800,
    amt: 2290,
  },
  {
    name: '04',
    uv: 2780,
    pv: 1300,
    amt: 2000,
  },
  {
    name: '05',
    uv: 1890,
    pv: 1200,
    amt: 2181,
  },
  {
    name: '06',
    uv: 2390,
    pv: 1400,
    amt: 2500,
  },
  {
    name: '07',
    uv: 3490,
    pv: 1500,
    amt: 2100,
  },
];

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

  useEffect(() => {
    console.log(timeline);
  }, [timeline]);

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
        }
      }
      setIsLoading(false);
    })();
  }, [range]);

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

      {!isLoading && (
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
            />
            <YAxis axisLine={false} tick={false} />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='marketClose'
              stroke='#82ca9d'
              fillOpacity={1}
              fill='url(#colorPv)'
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
      {/* <img src={require("../../Common/Images/symbol-chart-1.png").default} className="img-fluid" alt="symbol" /> */}
    </div>
  );
}

export default PriceChart