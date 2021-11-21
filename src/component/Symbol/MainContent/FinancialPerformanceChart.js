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

function FinancialPerformanceChart () {
  return (
    <div class='col-lg-6 mb-5'>
      <h6 class='mb-4'>
        <strong>Finantial Performance</strong>
      </h6>
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
  )
}

export default FinancialPerformanceChart
