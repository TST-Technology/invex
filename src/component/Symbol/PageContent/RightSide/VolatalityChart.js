import React, { useState, useEffect, PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { CircularProgress } from '@material-ui/core';
import moment from 'moment';
import { Link, useSearchParams } from 'react-router-dom';
import { RemoveDot } from '../../../Common/Chart/Recharts';

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={30} y={0} textAnchor='end' fill='#212121' fontSize={'12px'}>
          {payload.value}%
        </text>
      </g>
    );
  }
}

class CustomizedXAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={27}
          y={2}
          textAnchor='end'
          fill='#212121'
          fontSize={'12px'}
          transform='rotate(90)'
        >
          {moment(payload.value).format('MMM')}
        </text>
      </g>
    );
  }
}

const VolatalityChart = ({ Options, Loading }) => {
  const [params] = useSearchParams();
  const [graphData, setGraphData] = useState([]);
  const [period, setPeriod] = useState('YEAR'); // possible values YEAR, 6MONTHS, 3MONTHS
  const [volume, setVolume] = useState('INDEX_CALL'); //possible values
  const [days, setDays] = useState(30); //possible values
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
          if (volume === 'INDEX_CALL') {
            obj.percentage = getDaysData(volume, index);
          } else if (volume === 'INDEX_PUT') {
            obj.percentage = getDaysData(volume, index);
          } else if (volume === 'INDEX_MEAN') {
            obj.percentage = getDaysData(volume, index);
          } else if (volume === 'INDEX_CALL_PUT') {
            const tempData = getDaysData(volume, index);
            obj.percentage = tempData[0];
            obj.put = tempData[1];
          }
          obj.date = row;
          graph.push(obj);
        }
      });
      setTicks(uniqueMonthDates);
      setGraphData(graph);
    }
  }, [Options, period, volume, days]);

  const getDaysData = (volume, index) => {
    let daysData = [];
    switch (volume) {
      case 'INDEX_CALL':
        switch (days) {
          case 30:
            daysData = Options.Graph_data.iv30call[index];
            break;
          case 60:
            daysData = Options.Graph_data.iv60call[index];
            break;
          case 90:
            daysData = Options.Graph_data.iv90call[index];
            break;
          case 120:
            daysData = Options.Graph_data.iv120call[index];
            break;
          case 150:
            daysData = Options.Graph_data.iv150call[index];
            break;
          case 180:
            daysData = Options.Graph_data.iv180call[index];
            break;
          case 360:
            daysData = Options.Graph_data.iv360call[index];
            break;
        }
        break;
      case 'INDEX_PUT':
        switch (days) {
          case 30:
            daysData = Options.Graph_data.iv30put[index];
            break;
          case 60:
            daysData = Options.Graph_data.iv60put[index];
            break;
          case 90:
            daysData = Options.Graph_data.iv90put[index];
            break;
          case 120:
            daysData = Options.Graph_data.iv120put[index];
            break;
          case 150:
            daysData = Options.Graph_data.iv150put[index];
            break;
          case 180:
            daysData = Options.Graph_data.iv180put[index];
            break;
          case 360:
            daysData = Options.Graph_data.iv360put[index];
            break;
        }
        break;
      case 'INDEX_MEAN':
        switch (days) {
          case 30:
            daysData = Options.Graph_data.iv30mean[index];
            break;
          case 60:
            daysData = Options.Graph_data.iv60mean[index];
            break;
          case 90:
            daysData = Options.Graph_data.iv90mean[index];
            break;
          case 120:
            daysData = Options.Graph_data.iv120mean[index];
            break;
          case 150:
            daysData = Options.Graph_data.iv150mean[index];
            break;
          case 180:
            daysData = Options.Graph_data.iv180mean[index];
            break;
          case 360:
            daysData = Options.Graph_data.iv360mean[index];
            break;
        }
        break;
      case 'INDEX_CALL_PUT':
        switch (days) {
          case 30:
            daysData = [
              Options.Graph_data.iv30call[index],
              Options.Graph_data.iv30put[index],
            ];
            break;
          case 60:
            daysData = [
              Options.Graph_data.iv60call[index],
              Options.Graph_data.iv60put[index],
            ];
            break;
          case 90:
            daysData = [
              Options.Graph_data.iv90call[index],
              Options.Graph_data.iv90put[index],
            ];
            break;
          case 120:
            daysData = [
              Options.Graph_data.iv120call[index],
              Options.Graph_data.iv120put[index],
            ];
            break;
          case 150:
            daysData = [
              Options.Graph_data.iv150call[index],
              Options.Graph_data.iv150put[index],
            ];
            break;
          case 180:
            daysData = [
              Options.Graph_data.iv180call[index],
              Options.Graph_data.iv180put[index],
            ];
            break;
          case 360:
            daysData = [
              Options.Graph_data.iv360call[index],
              Options.Graph_data.iv360put[index],
            ];
            break;
        }
        break;
    }
    if (volume === 'INDEX_CALL_PUT') {
      let temp = (daysData[0] * 100).toFixed(2);
      let temp2 = (daysData[1] * 100).toFixed(2);
      return [temp, temp2];
    } else {
      return (daysData * 100).toFixed(2);
    }
  };

  return (
    <div className='row mb-5'>
      <h6 className='mb-4 d-flex justify-content-between'>
        <strong>AAPL: Daily 1 Year Volatility</strong>
        <Link to={`/symbol/option/${params.get('symbol')}`}>
          <strong>View Full Option Analysis</strong>
        </Link>
      </h6>
      <div className='d-flex align-items-center justify-content-between'>
        <div className='top_button_panel mb-3'>
          <button
            type='button'
            className={`btn ${days === 30 ? 'btn-info' : 'btn-light'}`}
            onClick={() => setDays(30)}
          >
            30
          </button>
          <button
            type='button'
            className={`btn ${days === 60 ? 'btn-info' : 'btn-light'}`}
            onClick={() => setDays(60)}
          >
            60
          </button>
          <button
            type='button'
            className={`btn ${days === 90 ? 'btn-info' : 'btn-light'}`}
            onClick={() => setDays(90)}
          >
            90
          </button>
          <button
            type='button'
            className={`btn ${days === 120 ? 'btn-info' : 'btn-light'}`}
            onClick={() => setDays(120)}
          >
            120
          </button>
          <button
            type='button'
            className={`btn ${days === 150 ? 'btn-info' : 'btn-light'}`}
            onClick={() => setDays(150)}
          >
            150
          </button>
          <button
            type='button'
            className={`btn ${days === 180 ? 'btn-info' : 'btn-light'}`}
            onClick={() => setDays(180)}
          >
            180
          </button>
          <button
            type='button'
            className={`btn ${days === 360 ? 'btn-info' : 'btn-light'}`}
            onClick={() => setDays(360)}
          >
            360
          </button>
        </div>
      </div>
      <div className='d-flex align-items-center justify-content-between'>
        <div className='top_button_panel mb-3'>
          <button
            type='button'
            className={`btn ${
              volume === 'INDEX_CALL' ? 'btn-info' : 'btn-light'
            }`}
            onClick={() => setVolume('INDEX_CALL')}
          >
            IV Call
          </button>
          <button
            type='button'
            className={`btn ${
              volume === 'INDEX_PUT' ? 'btn-info' : 'btn-light'
            }`}
            onClick={() => setVolume('INDEX_PUT')}
          >
            {' '}
            IV Put
          </button>
          <button
            type='button'
            className={`btn ${
              volume === 'INDEX_CALL_PUT' ? 'btn-info' : 'btn-light'
            }`}
            onClick={() => setVolume('INDEX_CALL_PUT')}
          >
            {' '}
            IV Call & Put
          </button>
          <button
            type='button'
            className={`btn ${
              volume === 'INDEX_MEAN' ? 'btn-info' : 'btn-light'
            }`}
            onClick={() => setVolume('INDEX_MEAN')}
          >
            {' '}
            IV Mean
          </button>
        </div>
        <div className='top_button_panel mb-3'>
          <button
            type='button'
            className={`btn ${period === '3MONTHS' ? 'btn-info' : 'btn-light'}`}
            onClick={() => setPeriod('3MONTHS')}
          >
            {' '}
            3 M
          </button>
          <button
            type='button'
            className={`btn ${period === '6MONTHS' ? 'btn-info' : 'btn-light'}`}
            onClick={() => setPeriod('6MONTHS')}
          >
            {' '}
            6 M
          </button>
          <button
            type='button'
            className={`btn ${period === 'YEAR' ? 'btn-info' : 'btn-light'}`}
            onClick={() => setPeriod('YEAR')}
          >
            {' '}
            1 Y
          </button>
        </div>
      </div>

      {Loading && (
        <div
          style={{
            height: 400,
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
        <ResponsiveContainer width='100%' aspect={1} maxHeight={400}>
          <LineChart data={graphData} tick={false}>
            <XAxis
              dataKey='date'
              axisLine={false}
              ticks={ticks}
              tick={<CustomizedXAxisTick />}
              interval={0}
            />
            <YAxis
              axisLine={false}
              orientation='right'
              tick={<CustomizedAxisTick />}
              padding={{ paddingLeft: '20px' }}
            />
            <Tooltip />
            <Line
              type='monotone'
              dataKey='percentage'
              stroke='#8F9DFE'
              dot={<RemoveDot />}
            />

            {volume === 'INDEX_CALL_PUT' && (
              <Line
                type='monotone'
                dataKey='put'
                stroke='#64AA28'
                dot={<RemoveDot />}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default VolatalityChart;
