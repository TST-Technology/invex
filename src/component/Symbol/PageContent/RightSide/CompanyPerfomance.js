import React from 'react'
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
                        <li><a href="javascript:void(0)">Forward Annual Dividend Rate 4</a> <span>0.88</span></li>
                        <li><a href="javascript:void(0)">Forward Annual Dividend Rate 4</a> <span>0.58%</span></li>
                        <li><a href="javascript:void(0)">Trailing Annual Dividend Rate 3</a> <span>0.85</span></li>
                        <li><a href="javascript:void(0)">Trailing Annual Dividend Rate 3</a> <span>0.56%</span></li>
                        <li><a href="javascript:void(0)">5 Year Average Dividend Yield 4</a> <span>1.22</span></li>
                        <li><a href="javascript:void(0)">Payout Ratio 4</a> <span>15.15%</span></li>
                        <li><a href="javascript:void(0)">Dividend Date 3</a> <span>Nov 10, 2021</span></li>
                        <li><a href="javascript:void(0)">Ex-Dividend Date 4</a> <span>Nov 04, 2021</span></li>
                        <li><a href="javascript:void(0)">Last Split Factor 2</a> <span>4:1</span></li>
                        <li><a href="javascript:void(0)">Last Split Date 3</a> <span>Aug 30, 2020</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CompanyPerfomance