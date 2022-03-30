import React, { useEffect, useState } from 'react'
import moment from 'moment'
import CustomDialog from '../../Common/CustomDialog'
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { useSearchParams } from 'react-router-dom'
import { getFinancialPastdividend } from '../../api/financialStatistics'

const Dividends = ({ DividendData }) => {

  const [params] = useSearchParams();
  const [dialog , setDialog] = useState(false)
  const [ChartData, setChartData] = useState([])

  useEffect(() => {
    (async()=>{
      var chart = await getFinancialPastdividend(params.get('symbol'))
      console.log('chart',chart);
      if(chart?.status == 200 ){
        var tempArr = []
        var obj = {
          name: '',
          uv: '',
          pv: '',
          amt: ''
        }
        chart?.data?.map((el,i)=>{
          obj.name = moment(Number(el.date)).format('DD');
          obj.uv = el.amount;
          obj.pv = el.refid;
          obj.amt = el.subkey;
          tempArr.push(obj)
        })
        setChartData(tempArr)
      }
    })()
  }, [params.get('symbol')])
  console.log('ChartData',ChartData);
  return (
    <>
      <div className='col-lg-6 mb-5'>
        <h6 className='mb-4 d-flex justify-content-between align-items-center'>
          <strong>Dividends & Splits</strong>
          <button className='btn btn-unstyle' onClick={()=>setDialog(true)}>View More </button>
        </h6>

        <div className='key_status'>
          <ul>
            <li>
              <a href='javascript:void(0)'>symbol</a>{' '}
              <span>{DividendData?.symbol}</span>
            </li>
            <li>
              <a href='javascript:void(0)'>flag</a>{' '}
              <span>{DividendData?.flag}</span>
            </li>
            <li>
              <a href='javascript:void(0)'>description</a>{' '}
              <span>{DividendData?.description}</span>
            </li>
            <li>
              <a href='javascript:void(0)'>frequency</a>{' '}
              <span>{DividendData?.frequency}</span>
            </li>
            <li>
              <a href='javascript:void(0)'>Payment Date</a>{' '}
              <span>{DividendData?.paymentDate}</span>
            </li>
            <li>
              <a href='javascript:void(0)'>amount</a>{' '}
              <span>{DividendData?.amount}</span>
            </li>
            <li>
              <a href='javascript:void(0)'>currency</a> <span>{DividendData?.currency}</span>
            </li>
            <li>
              <a href='javascript:void(0)'>Declared Date</a>{' '}
              <span>{DividendData?.declaredDate}</span>
            </li>
            <li>
              <a href='javascript:void(0)'>record date</a>{' '}
              <span>{DividendData?.recordDate}</span>
            </li>
            <li>
              <a href='javascript:void(0)'>date</a>{' '}
              <span>{moment(Number(DividendData?.date)).format('DD-MM-YYYY')}</span>
            </li>
            <li>
              <a href='javascript:void(0)'>Last Split Date 3</a>{' '}
              <span>Aug 30, 2020</span>
            </li>
          </ul>
        </div>
      </div>
      <CustomDialog
        title='Past dividents'
        open={dialog}
        autoWidth={true}
        size='lg'
        onClose={() => setDialog(false)}
      >
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
          <XAxis dataKey='name' axisLine={false} />
          <YAxis axisLine={false} tick={false} />
          <Area
            type='monotone'
            dataKey='pv'
            stroke='#82ca9d'
            fillOpacity={1}
            fill='url(#colorPv)'
          />
        </AreaChart>
      </ResponsiveContainer>
      </CustomDialog>
    </>
  )
}

export default Dividends
