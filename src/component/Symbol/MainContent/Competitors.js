import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { getTopCompetitors } from '../../api/company';

const Competitors = ({ KeyStatus }) => {

  const [tableData , settableData] = useState()
  const [tableHeader , settableHeader] = useState()
  const [params] = useSearchParams();
  useEffect(() => {
    (async () => {
      if (params.get('symbol')) {
        var data = await getTopCompetitors(params.get('symbol'));
        console.log('data',data);
        if (data && data?.status == 200) {
          // KeyStatus
          var tempArr = []
          var name = ['Industry','Equity Summary Score','Price Performance(52 Weeks)',"P/E (This Year's Estimate)",'Beta','Shares Outstanding']
          data?.data?.companySymbols.map((ob,i)=>{
            var obj = {
              asOf: name[i],
              col1: KeyStatus?.latestPrice,
              col2: KeyStatus?.week52High,
              col3: KeyStatus?.week52Low,
              col4: KeyStatus?.peRatio,
              col5: KeyStatus?.avgTotalVolume,
            }
            tempArr.push(obj)
          })
          settableHeader(data?.data?.companySymbols)
          settableData(tempArr)
        }
      }
    })()
  }, [])


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
                <th>AS OF 11/11/21</th>
                {tableHeader && tableHeader?.length > 0 && tableHeader.map((el, i) => {
                  return (
                    <th key={i} scope='col'>{el}</th>
                  )
                })}
              </tr>
            </thead>
            <tbody className='border-top-0'>
              {tableData && tableData?.length > 0 && tableData?.map((el,i)=>{
                return(
                  <tr>
                    <td>{el.asOf}</td>
                    <td>{el.col1}</td>
                    <td>{el.col2}</td>
                    <td>{el.col3}</td>
                    <td>{el.col4}</td>
                    <td>{el.col5}</td>
                  </tr>
                )
              })}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Competitors
