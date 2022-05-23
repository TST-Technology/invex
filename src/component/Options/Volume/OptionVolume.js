import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { CircularProgress } from '@material-ui/core';

const OptionVolume = ({ Options, Loading }) => {
  const [graphData, setGraphData] = useState([]);
  const [period, setPeriod] = useState('YEAR'); // possible values YEAR, 6MONTHS, 3MONTHS
  const [volume, setVolume] = useState('VOLUME_CALL'); //possible values
  const [ticks, setTicks] = useState([]);

  useEffect(() => {
    const todaysDate = new Date();
    let pastDate = '';
    if (period === 'YEAR') {
      pastDate = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
    } else if (period === '6MONTHS') {
      pastDate = new Date(new Date().setMonth(new Date().getMonth() - 6));
    } else if (period === '3MONTHS') {
      pastDate = new Date(new Date().setMonth(new Date().getMonth() - 3));
    }
    if (Options && Options.Graph_data) {
      const graph = [];
      const tempDate = [];
      const uniqueMonthDates = [];
      Options.Graph_data.date.map((row, index) => {
        if (new Date(row) > pastDate && new Date(row) < todaysDate) {
          const month = new Date(row).getMonth();
          const year = new Date(row).getFullYear();
          const currentDate = `${month}${year}`;
          if (!tempDate.includes(currentDate)) {
            tempDate.push(currentDate);
            uniqueMonthDates.push(row);
          }
          const obj = {};
          if (volume === 'VOLUME_CALL') {
            obj.quantity = Options.Graph_data.callvol[index];
          } else if (volume === 'VOLUME_PUT') {
            obj.quantity = Options.Graph_data.putvol[index];
          } else if (volume === 'VOLUME_TOTAL') {
            obj.quantity = Options.Graph_data.totalvol[index];
          }
          obj.date = row;
          graph.push(obj);
        }
      });
      setTicks(uniqueMonthDates);
      setGraphData(graph);
    }
  }, [Options, period, volume]);

  return (
    <>
      <div className='row'>
        <h6 className='mb-4'>
          <strong>Option Volume</strong>
        </h6>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='top_button_panel mb-3'>
            <button
              type='button'
              className={`btn ${
                volume === 'VOLUME_CALL' ? 'btn-info' : 'btn-light'
              }`}
              onClick={() => setVolume('VOLUME_CALL')}
            >
              Volume Call
            </button>
            <button
              type='button'
              className={`btn ${
                volume === 'VOLUME_PUT' ? 'btn-info' : 'btn-light'
              }`}
              onClick={() => setVolume('VOLUME_PUT')}
            >
              {' '}
              Volume Put
            </button>
            <button type='button' className='btn btn-light'>
              {' '}
              Volume Call & Put
            </button>
            <button
              type='button'
              className={`btn ${
                volume === 'VOLUME_TOTAL' ? 'btn-info' : 'btn-light'
              }`}
              onClick={() => setVolume('VOLUME_TOTAL')}
            >
              {' '}
              Volume Total
            </button>
          </div>
          <div className='top_button_panel mb-3'>
            <button
              type='button'
              className={`btn ${
                period === '3MONTHS' ? 'btn-info' : 'btn-light'
              }`}
              onClick={() => setPeriod('3MONTHS')}
            >
              {' '}
              3 Months
            </button>
            <button
              type='button'
              className={`btn ${
                period === '6MONTHS' ? 'btn-info' : 'btn-light'
              }`}
              onClick={() => setPeriod('6MONTHS')}
            >
              {' '}
              6 Months
            </button>
            <button
              type='button'
              className={`btn ${period === 'YEAR' ? 'btn-info' : 'btn-light'}`}
              onClick={() => setPeriod('YEAR')}
            >
              {' '}
              1 Year
            </button>
          </div>
        </div>
        {Loading && (
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
        {!Loading && (
          <ResponsiveContainer width='100%' aspect={1} maxHeight={250}>
            <BarChart data={graphData} barSize={10} barGap={20}>
              <XAxis
                dataKey='date'
                tickFormatter={(date) => {
                  return moment(date).format('MMM');
                }}
                axisLine={false}
                // ticks={['2021-05-24']}
                ticks={ticks}
                tick={{ fill: '#212121', fontSize: '12px' }}
              />
              <YAxis
                axisLine={false}
                tick={{ fill: '#212121', fontSize: '12px' }}
              />
              <Tooltip />
              <Legend />
              <Bar dataKey='quantity' fill='#3751FF' />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </>
  );
};

export default OptionVolume;
