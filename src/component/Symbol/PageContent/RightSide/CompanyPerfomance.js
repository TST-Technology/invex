import React from 'react'
import moment from 'moment'

import {
    Bar,
    BarChart,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
  } from 'recharts'
const data = [
    {
      name: '0A',
      uv: 4000,
      pv: 2400
    },
    {
      name: '0B',
      uv: 3000,
      pv: 1398
    },
    {
      name: '0C',
      uv: 2000,
      pv: 9800
    },
    {
      name: '0D',
      uv: 2780,
      pv: 3908
    },
    {
      name: '0E',
      uv: 1890,
      pv: 4800
    },
    {
      name: '0F',
      uv: 2390,
      pv: 3800
    },
    {
      name: '0G',
      uv: 3490,
      pv: 4300
    }
  ]
const CompanyPerfomance = ({DividendData}) => {
    
    return (
        <div className="row">
            <div className="col-lg-6 mb-5">
                <h6 className="mb-4"><strong>Finantial Performance</strong></h6>
                <ResponsiveContainer width='100%' aspect={1}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
        >
          <XAxis dataKey='name' />
          <YAxis />
          {/* <Tooltip /> */}
          <Legend wrapperStyle={{ bottom: -20, left: 25 }} />
          <Bar dataKey='pv' fill='#3751FF' />
          <Bar dataKey='uv' fill='#13A41B' />
        </BarChart>
      </ResponsiveContainer>
            </div>
            <div className="col-lg-6 mb-5">
                <h6 className="mb-4"><strong>Dividends & Splits</strong></h6>
                <div className="key_status">
                    <ul>
                        <li><a href="javascript:void(0)">Symbol</a>{' '} <span>{DividendData?.symbol}</span></li>
                        <li><a href="javascript:void(0)">Flag</a>{' '} <span>{DividendData?.flag}</span></li>
                        <li><a href="javascript:void(0)">Description</a>{' '} <span>{DividendData?.description}</span></li>
                        <li><a href="javascript:void(0)">Frequency</a>{' '} <span>{DividendData?.frequency}</span></li>
                        <li><a href="javascript:void(0)">Payment Date</a>{' '} <span>{DividendData?.paymentDate}</span></li>
                        <li><a href="javascript:void(0)">Amount</a>{' '} <span>{DividendData?.amount}</span></li>
                        <li><a href="javascript:void(0)">Currency</a>{' '} <span>{DividendData?.currency}</span></li>
                        <li><a href="javascript:void(0)">Declared Date</a>{' '} <span>{DividendData?.declaredDate}</span></li>
                        <li><a href="javascript:void(0)">Record date</a>{' '} <span>{DividendData?.recordDate}</span></li>
                        <li><a href="javascript:void(0)">Date</a>{' '} <span>{moment(Number(DividendData?.date)).format('DD-MM-YYYY')}</span></li>
                        <li><a href="javascript:void(0)">Last Split Date 3</a>{' '} <span>Aug 30, 2020</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CompanyPerfomance