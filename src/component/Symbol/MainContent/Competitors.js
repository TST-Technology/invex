import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { getTopCompetitors } from '../../api/company';

const Competitors = ({KeyStatus}) => {

  const [tableData,settableData] = useState()
  const [tableHeader,settableHeader] = useState()
  const [params] = useSearchParams();
  const competitorData = [
    {
        asOf:"Industry",
        aapl:4100,
        industryAvg:13.25,
        hpq:13.25,
        csco:13.25,
        msi:13.25,
        intc:13.25
    },
    {
        asOf:"Equity Summary Score",
        aapl:4100,
        industryAvg:13.25,
        hpq:13.25,
        csco:13.25,
        msi:13.25,
        intc:13.25
    },
    {
        asOf:"Price Performance(52 Weeks)",
        aapl:4100,
        industryAvg:13.25,
        hpq:13.25,
        csco:13.25,
        msi:13.25,
        intc:13.25
    },
    {
        asOf:"P/E (This Year's Estimate)",
        aapl:4100,
        industryAvg:13.25,
        hpq:13.25,
        csco:13.25,
        msi:13.25,
        intc:13.25
    },
    {
        asOf:"Beta",
        aapl:4100,
        industryAvg:13.25,
        hpq:13.25,
        csco:13.25,
        msi:13.25,
        intc:13.25
    },
    {
        asOf:"Shares Outstanding",
        aapl:4100,
        industryAvg:13.25,
        hpq:13.25,
        csco:13.25,
        msi:13.25,
        intc:13.25
    },
  ]

  useEffect(()=>{
    (async()=>{
      if(params.get('symbol')){
        var data = await getTopCompetitors(params.get('symbol'));
        if(data && data?.status == 200){
          // KeyStatus
          settableHeader(data?.data?.companySymbols)
        }
      }
    })()
  },[])


  console.log('KeyStatus',KeyStatus);
  return (
    <div className='top_competitors'>
      <div className='mb-5'>
        <div className='d-flex align-items-center justify-content-between border p-3 border-bottom-0'>
          <h6 className='m-0'>
            <strong>Top Competitors</strong>
          </h6>
          <a href='javascript:void(0)' className='text-dark viewmore'>
            View More
          </a>
        </div>
        <div className='table-responsive'>
          <table className='table table-bordered m-0 most_tables'>
            <thead className='table-light'>
              <tr>
                {/* <th scope='col'></th>  */}
                {tableHeader && tableHeader?.length > 0 && tableHeader.map((el,i)=>{
                  return(
                    <th key={i} scope='col'>{el}</th>
                  )
                })}
                {/* <th scope='col'>AS OF 11/11/21</th>
                <th scope='col'>AAPL</th>
                <th scope='col'>Industry Average</th>
                <th scope='col'>HPQ</th>
                <th scope='col'>CSCO</th>
                <th scope='col'>MSI</th>
                <th scope='col'>INTC</th> */}
              </tr>
            </thead>
            <tbody className='border-top-0'>
            {tableHeader && tableHeader?.length > 0 && tableHeader.map((el,i)=>{
                  return(
                      <tr>
                        {/* <td></td> */}
                        <td>{KeyStatus.latestPrice}</td>
                        <td>{KeyStatus.week52High}</td>
                        <td>{KeyStatus.week52Low}</td>
                        <td>{KeyStatus.peRatio}</td>
                        <td>{KeyStatus.avgTotalVolume}</td>
                      </tr>
                    )
                  })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Competitors
