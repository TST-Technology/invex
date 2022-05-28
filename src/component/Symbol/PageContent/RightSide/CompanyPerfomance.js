import React, { useEffect, useState, PureComponent } from 'react';
import moment from 'moment';
import { useSearchParams } from 'react-router-dom';
import { getFinancialPerformance } from '../../../api/search';
import { NormalFormat } from '../../../Common/NumberFormat';
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

class CustomizedYAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} textAnchor='end' fill='#212121' fontSize={'12px'}>
          {NormalFormat(payload.value)}
        </text>
      </g>
    );
  }
}

const CompanyPerfomance = ({ DividendData }) => {
  const [params] = useSearchParams();
  const [financialPerformance, setFinancialPerformance] = useState([]);

  useEffect(() => {
    (async () => {
      if (params.get('symbol')) {
        var data = await getFinancialPerformance(params.get('symbol'));
        if (data && data.status === 200) {
          data.chartData.map((row) => {
            row.yaxis = `Q${row.quarter} ${row.year}`;
          });
          setFinancialPerformance(data.chartData);
        }
      }
    })();
  }, []);

  return (
    <div className='row'>
      <div className='col-lg-6 mb-5'>
        <h6 className='mb-4'>
          <strong>Finantial Performance</strong>
        </h6>
        <ResponsiveContainer width='90%' aspect={1}>
          <BarChart
            data={financialPerformance}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <XAxis
              dataKey='yaxis'
              tick={{ fill: '#212121', fontSize: '12px' }}
              interval={0}
            />
            <YAxis tick={<CustomizedYAxisTick />} />
            {/* <Tooltip /> */}
            <Legend wrapperStyle={{ bottom: -20, left: 25 }} />
            <Bar dataKey='totalRevenue' fill='#3751FF' />
            {/* <Bar dataKey='uv' fill='#13A41B' /> */}
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className='col-lg-6 mb-5'>
        <h6 className='mb-4'>
          <strong>Dividends & Splits</strong>
        </h6>
        <div className='key_status'>
          <ul>
            <li>
              <a href='javascript:void(0)'>Symbol</a>{' '}
              <span>{DividendData?.symbol}</span>
            </li>
            <li>
              <a href='javascript:void(0)'>Flag</a>{' '}
              <span>{DividendData?.flag}</span>
            </li>
            <li>
              <a href='javascript:void(0)'>Description</a>{' '}
              <span>{DividendData?.description}</span>
            </li>
            <li>
              <a href='javascript:void(0)'>Frequency</a>{' '}
              <span>{DividendData?.frequency}</span>
            </li>
            <li>
              <a href='javascript:void(0)'>Payment Date</a>{' '}
              <span>{DividendData?.paymentDate}</span>
            </li>
            <li>
              <a href='javascript:void(0)'>Amount</a>{' '}
              <span>{DividendData?.amount}</span>
            </li>
            <li>
              <a href='javascript:void(0)'>Currency</a>{' '}
              <span>{DividendData?.currency}</span>
            </li>
            <li>
              <a href='javascript:void(0)'>Declared Date</a>{' '}
              <span>{DividendData?.declaredDate}</span>
            </li>
            <li>
              <a href='javascript:void(0)'>Record date</a>{' '}
              <span>{DividendData?.recordDate}</span>
            </li>
            <li>
              <a href='javascript:void(0)'>Date</a>{' '}
              <span>
                {moment(Number(DividendData?.date)).format('DD-MM-YYYY')}
              </span>
            </li>
            <li>
              <a href='javascript:void(0)'>Last Split Date 3</a>{' '}
              <span>Aug 30, 2020</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompanyPerfomance;
